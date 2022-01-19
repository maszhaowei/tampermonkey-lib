import '../css/video.css';
import * as Const from './const';
import { EventObserverWrapper, PositionOption } from '../common/class';
import { MediaReadyState, MediaEvents, TooltipPosition, GlobalEvents } from '../common/enum';
import { ui as cui } from '../common/ui.js';
import { util as tutil } from '../tampermonkey/util';
import { ObjectCacheHelper } from '../tampermonkey/utils';
import { EnumHelper } from '../common/utils';

export const _VideoCustomEventTypes = {
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    REQUEST_WEBFULLSCREEN: 'video_request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'video_exit_webfullscreen'
}
class VideoEventDelegate extends EventObserverWrapper {
    /** @type {Element} */
    #delegate;
    /** @type {WeakMap<Element,HTMLVideoElement[]>} - Delegate element to videos map. */
    static #bindedVideosMap = new WeakMap();
    /** @type {WeakMap<Element,VideoEventDelegate>} - Delegate element to {@link VideoEventDelegate} map. */
    static #delegateMap = new WeakMap();
    /**
     * @hideconstructor
     * @param {Element} delegateEle
     */
    constructor(delegateEle) {
        super(delegateEle, GlobalEvents.toValueArray());
        this.#delegate = delegateEle;
        document.leave(Const.eventDelegateSelector, (leaveEle) => {
            if (leaveEle.isSameNode(this.#delegate)) {
                this.#clean();
            }
        });
    }
    /**
     * 
     * @param {Element} delegateEle 
     * @param {HTMLVideoElement} video 
     */
    static #bindVideo(delegateEle, video) {
        if (this.#bindedVideosMap.has(delegateEle)) {
            let bindedVideos = this.#bindedVideosMap.get(delegateEle);
            if (!bindedVideos.includes(video)) bindedVideos.push(video);
        }
        else this.#bindedVideosMap.set(delegateEle, [video]);
    }
    /**
     * 
     * @param {Element} delegateEle 
     * @returns 
     */
    static #createInstance(delegateEle) {
        let delegateMap = VideoEventDelegate.#delegateMap;
        if (delegateMap.has(delegateEle)) return delegateMap.get(delegateEle);
        else {
            let delegate = new VideoEventDelegate(delegateEle);
            delegateMap.set(delegateEle, delegate);
            return delegate;
        }
    }
    /**
     * 
     * Create event delegate after {@link previousSiblingSelector} if there isn't one or {@link defaultDelegateSelector} if {@link previousSiblingSelector} isn't set.
     * @param {HTMLVideoElement} video 
     * @param {string} [previousSiblingSelector] - {@link previousSiblingSelector} or {@link defaultDelegateSelector} is required.
     * @param {string} [defaultDelegateSelector] 
     * @param {string[]} [ignoreList] 
     * @param {Map<string,string[]>} [delegateIgnoreMap] 
     */
    static getInstance(video, previousSiblingSelector, defaultDelegateSelector, ignoreList = [], delegateIgnoreMap) {
        /** @type {Promise<Element>} */
        let promiseCreate = previousSiblingSelector ? new Promise((resolve) => {
            document.arrive(previousSiblingSelector, { existing: true, onceOnly: true }, (previousSibling) => {
                /** @type {HTMLDivElement} */
                let delegateEle = previousSibling.parentElement.querySelector(Const.eventDelegateSelector);
                if (!delegateEle) {
                    delegateEle = document.createElement('div');
                    delegateEle.classList.add(Const.eventDelegateClassName);
                    previousSibling.after(delegateEle);
                    // Process selectors excluded from delegate.
                    ignoreList.forEach((delegateIgnoreSelector) => {
                        document.arrive(delegateIgnoreSelector, { existing: true }, function () {
                            this.classList.add(Const.topOverlayClassName);
                        });
                    });
                }
                resolve(delegateEle);
            });
        }) : new Promise((resolve) => {
            document.arrive(defaultDelegateSelector, { existing: true }, function () { resolve(this) });
        });
        return promiseCreate.then((delegateEle) => {
            if (!delegateEle) throw new Error('No event delegate');

            VideoEventDelegate.#bindVideo(delegateEle, video);
            let delegate = VideoEventDelegate.#createInstance(delegateEle);
            if (delegateIgnoreMap) delegate.#ignoreDelegate(delegateIgnoreMap);
            return delegate;
        });
    }
    /**
     * 
     * @param {Map<string,string[]>} delegateIgnoreMap 
     */
    #ignoreDelegate(delegateIgnoreMap = new Map()) {
        delegateIgnoreMap.forEach((eventTypes, selector) => {
            document.arrive(selector, { existing: true }, (element) => {
                eventTypes.forEach((eventType) => {
                    let handler;
                    switch (eventType) {
                        case GlobalEvents.CONTEXTMENU:
                            handler = (/** @type {MouseEvent} */ e) => {
                                e.preventDefault();
                                // Prevent calling handlers registered by this.registerEventHandler.
                                e.stopImmediatePropagation();
                                element.dispatchEvent(new MouseEvent(eventType, { bubbles: e.bubbles, clientX: e.clientX, clientY: e.clientY }));
                            };
                            break;
                    }
                    if (handler) {
                        this.#delegate.addEventListener(eventType, handler, false);
                        this.#delegate.addEventListener(eventType, handler, true);
                    }
                });
            });
        });
    }
    #clean() {
        let delegateEle = this.#delegate;
        VideoEventDelegate.#bindedVideosMap.delete(delegateEle);
        VideoEventDelegate.#delegateMap.delete(delegateEle);
        delegateEle.remove();
        this.#delegate = null;
        super.clean();
    }
    /**
     * 
     * @param {HTMLVideoElement} video 
     */
    unbindVideo(video) {
        let delegateEle = this.#delegate;
        let bindedVideos = VideoEventDelegate.#bindedVideosMap.get(delegateEle);
        if (bindedVideos) {
            let index = bindedVideos.indexOf(video);
            if (index >= 0) bindedVideos.splice(index, 1);
            if (bindedVideos.length == 0) this.#clean();
        }
        else this.#clean();
    }
}
export class VideoInstance extends EventObserverWrapper {
    #video;
    #title;
    #initProgress;
    #initVolume;
    #playerMetadata;
    /* #region Controls */
    /**
     * 
     * @param {string} selector 
     * @returns 
     */
    #getControl(selector) {
        if (!selector) return null;
        let playerMetadata = this.#playerMetadata;
        if (playerMetadata.controlsSelector) return document.querySelector(playerMetadata.controlsSelector + ' ' + selector);
        else return document.querySelector(playerMetadata.containerSelector + ' ' + selector);
    }
    get #playButton() {
        return this.#getControl(this.#playerMetadata.playButtonSelector);
    }
    get #volumeButton() {
        return this.#getControl(this.#playerMetadata.volumeButtonSelector);
    }
    get #fullscreenButton() {
        return this.#getControl(this.#playerMetadata.fullscreenButtonSelector);
    }
    get #webFullscreenButton() {
        return this.#getControl(this.#playerMetadata.webFullscreenButtonSelector);
    }
    /* #endregion */
    /** @type {Element} */
    get #container() { return this.#video.closest(this.#playerMetadata.containerSelector) }
    /** @type {VideoEventDelegate} */
    #videoDelegate;
    get #tooltipWrap() { return this.#container; }
    /** @type {WeakMap<HTMLVideoElement,VideoInstance>} */
    static #instanceMap = new WeakMap();
    /**
     * @hideconstructor
     * @param {HTMLVideoElement} video 
     * @param {import('../site/class').PlayerMetadata} playerMetadata 
     * @param {string} [title] 
     * @param {number} [progress] 
     * @param {number} [volume] 
     */
    constructor(video, playerMetadata, title, progress, volume) {
        super(video, EnumHelper.toValueArray(MediaEvents).concat(EnumHelper.toValueArray(_VideoCustomEventTypes)));
        this.#video = video;
        this.#playerMetadata = playerMetadata;
        this.#title = title;
        this.#initProgress = progress;
        this.#initVolume = volume;
    }
    #triggerCustomEvent(eventType, data) {
        tutil.debug('CustomEvent:', eventType, data);
        this.#video.dispatchEvent(new CustomEvent(eventType, { bubbles: false, detail: data }));
    }
    #initVideo() {
        let video = this.#video;

        let progress = this.#initProgress;
        if (progress != undefined) {
            tutil.debug(`Set init progress(s): ${progress}`);
            video.currentTime = progress;
        }
        let volume = this.#initVolume;
        if (volume != undefined) {
            tutil.debug(`Set init volume: ${volume}`);
            video.volume = volume;
        }
        this.#triggerCustomEvent(_VideoCustomEventTypes.VIDEO_ATTR_INITIALIZED, { volume: volume, progress: progress });
    }
    #onLoadedMetadata() {
        this.#initVideo();
    }
    async #bindEvent() {
        let video = this.#video;
        this.registerVideoEventHandler(MediaEvents.PLAY, () => {
            this.showTooltip("播放", TooltipPosition.TOP_CENTER, 15);
        }, this);
        this.registerVideoEventHandler(MediaEvents.PAUSE, () => {
            this.showTooltip("暂停", TooltipPosition.TOP_CENTER, 15);
        }, this);
        this.registerVideoEventHandler(MediaEvents.VOLUME_CHANGE, () => {
            this.showTooltip((video.muted ? "静音" : "音量") + Math.round(video.volume * 100) + "%");
        }, this);
        return new Promise((resolve) => {
            if (video.readyState >= MediaReadyState.HAVE_METADATA) {
                this.#onLoadedMetadata();
                resolve();
            }
            else {
                this.registerVideoEventHandler(MediaEvents.LOADED_METADATA, () => {
                    this.#onLoadedMetadata();
                    resolve();
                }, this);
            }
        });
    }
    #init() {
        return this.#bindEvent().then(() => {
            let playerMetadata = this.#playerMetadata;
            let ignoreList = playerMetadata.delegateIgnoreSelectors || [];
            if (this.#playerMetadata.controlsSelector) ignoreList.push(playerMetadata.controlsSelector);
            return VideoEventDelegate.getInstance(this.#video, playerMetadata.controlsSelector,
                this.#playerMetadata.containerSelector, ignoreList, playerMetadata.delegateIgnoreMap)
                .then((videoDelegate) => {
                    this.#videoDelegate = videoDelegate;
                    this.#triggerCustomEvent(_VideoCustomEventTypes.VIDEO_READY);
                });
        });
    }
    /**
     * 
     * @param {import('../common/class').EventHandlerWrapper[]} [preInitVideoObservers]
     */
    #preInit(preInitVideoObservers = []) {
        let video = this.#video;
        video.removeAttribute('autoplay');
        video.crossOrigin = 'anonymous';
        if (this.#title) this.showTooltip(this.#title);
        preInitVideoObservers.forEach((handlerWrapper) => {
            this.registerVideoEventHandler(handlerWrapper.eventType, handlerWrapper.handler, handlerWrapper.thisArg, handlerWrapper.useCapture);
        });
    }
    /**
     * 
     * @param {import('../common/class').EventHandlerWrapper[]} [postInitVideoObservers]
     * @param {import('../common/class').EventHandlerWrapper[]} [postInitDelegateObservers]
     */
    #postInit(postInitVideoObservers = [], postInitDelegateObservers = []) {
        this.registerVideoEventHandler(MediaEvents.VOLUME_CHANGE, () => {
            // Video reload.
            this.#initVolume = this.#video.volume;
        }, this);
        this.registerVideoEventHandler(MediaEvents.TIME_UPDATE, () => {
            // Video reload.
            this.#initProgress = this.#video.currentTime;
        });
        postInitVideoObservers.forEach((handlerWrapper) => {
            this.registerVideoEventHandler(handlerWrapper.eventType, handlerWrapper.handler, handlerWrapper.thisArg, handlerWrapper.useCapture);
        });
        postInitDelegateObservers.forEach((handlerWrapper) => {
            this.registerDelegateEventHandler(handlerWrapper.eventType, handlerWrapper.handler, handlerWrapper.thisArg, handlerWrapper.useCapture);
        });
    }
    /**
     * @param {HTMLVideoElement} video
     * @param {object} [VideoInitOptions]
     * @param {string} [VideoInitOptions.title]
     * @param {number} [VideoInitOptions.progress]
     * @param {number} [VideoInitOptions.volume]
     * @param {import('../site/class').PlayerMetadata} VideoInitOptions.playerMetadata 
     * @param {import('../common/class').EventHandlerWrapper[]} [preInitVideoObservers]
     * @param {import('../common/class').EventHandlerWrapper[]} [postInitVideoObservers]
     * @param {import('../common/class').EventHandlerWrapper[]} [postInitDelegateObservers]
     */
    static getInstance(video, { title, progress, volume, playerMetadata } = {}, preInitVideoObservers = [], postInitVideoObservers = [], postInitDelegateObservers = []) {
        let videoInstance = this.#instanceMap.get(video);
        if (videoInstance) {
            videoInstance.#preInit(preInitVideoObservers);
            videoInstance.#postInit(postInitVideoObservers, postInitDelegateObservers);
            return Promise.resolve(videoInstance);
        }
        else {
            videoInstance = new VideoInstance(video, playerMetadata, title, progress, volume);
            this.#instanceMap.set(video, videoInstance);
            videoInstance.#preInit(preInitVideoObservers);
            return videoInstance.#init().then(() => {
                videoInstance.#postInit(postInitVideoObservers, postInitDelegateObservers);
                return videoInstance;
            });
        }
    }
    /**
     * 
     * @param {string} [title] 
     * @param {number} [progress] 
     * @param {number} [volume] 
     */
    async reload(title, progress, volume) {
        if (title != undefined) this.#title = title;
        if (progress != undefined) this.#initProgress = progress;
        if (volume != undefined) this.#initVolume = volume;
        this.#initVideo();
        this.#triggerCustomEvent(_VideoCustomEventTypes.VIDEO_READY);
    }
    /**
     * Register event handler on video.
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {*} [context] 
     */
    registerVideoEventHandler(eventType, handler, context, useCapture = false) {
        this.registerEventHandler(eventType, handler, context, useCapture);
    }
    /**
     * Register event handler on video event delegate.
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {*} [context] 
     */
    registerDelegateEventHandler(eventType, handler, context, useCapture = false) {
        this.#videoDelegate.registerEventHandler(eventType, handler, context, useCapture);
    }
    /**
     * 
     * @param {string} tooltip 
     * @param {string} [position]
     * @param {number} [top] 
     * @param {number} [left] 
     */
    showTooltip(tooltip, position, top, left) {
        cui.showTooltip(tooltip, new PositionOption({ target: this.#tooltipWrap, position: position, top: top, left: left }));
    }
    changeVolume(deltaVolume) {
        let video = this.#video;
        let volume;
        if (deltaVolume >= 0) volume = Math.min(video.volume + deltaVolume, 1);
        else volume = Math.max(video.volume + deltaVolume, 0);
        video.volume = volume.toFixed(2);
    }
    saveVideoFrame(fileName = document.title) {
        cui.saveVideoFrame(this.#video, fileName);
    }

    /* #region Video Control */
    togglePlay() {
        if (this.#playButton) this.#playButton.click();
        else this.#video.paused ? this.#video.play() : this.#video.pause();
    }
    toggleMute() {
        if (this.#volumeButton) this.#volumeButton.click();
        else this.#video.muted = !this.#video.muted;
    }
    /**
     * Default implementation: Check if body contains class {@link Const.bodyWebFullscreenClassName}.
     * @abstract
     * @returns 
     */
    isVideoInWebFullScreen() {
        return document.body.classList.contains(Const.bodyWebFullscreenClassName);
    }
    #saveAndSetCss() {
        let html = document.documentElement;
        let overflow = window.getComputedStyle(html).getPropertyValue('overflow');
        ObjectCacheHelper.saveCallback(html, 'overflow', () => html.style.overflow = overflow);
        ObjectCacheHelper.saveCallback(html, 'scroll', HTMLElement.prototype.scrollTo, [html.scrollLeft, html.scrollTop]);
        document.documentElement.style.overflow = 'hidden';
    }
    #restoreCss() {
        ObjectCacheHelper.restoreCallback(document.documentElement, 'overflow');
        ObjectCacheHelper.restoreCallback(document.documentElement, 'scroll');
    }
    requestWebFullscreen() {
        if (this.isVideoInWebFullScreen()) return;
        if (this.#webFullscreenButton) this.#webFullscreenButton.click();
        else {
            this.#saveAndSetCss();
            this.#container.classList.add(Const.containerWebFullscreenClassName);
            document.body.classList.add(Const.bodyWebFullscreenClassName);
        }
        this.#triggerCustomEvent(_VideoCustomEventTypes.REQUEST_WEBFULLSCREEN);
    }
    exitWebFullscreen() {
        if (!this.isVideoInWebFullScreen()) return;
        if (this.#webFullscreenButton) this.#webFullscreenButton.click();
        else {
            this.#container.classList.remove(Const.containerWebFullscreenClassName);
            document.body.classList.remove(Const.bodyWebFullscreenClassName);
            this.#restoreCss();
        }
        this.#triggerCustomEvent(_VideoCustomEventTypes.EXIT_WEBFULLSCREEN);
    }
    /**
     * 
     * @returns {boolean} Whether in web full screen.
     */
    toggleWebFullscreen() {
        if (cui.isFullscreen()) {
            this.exitFullscreen();
            this.requestWebFullscreen();
            return true;
        }
        else {
            let prevInWebFull = this.isVideoInWebFullScreen();
            if (this.#webFullscreenButton) {
                this.#webFullscreenButton.click();
                prevInWebFull ? this.#triggerCustomEvent(_VideoCustomEventTypes.EXIT_WEBFULLSCREEN) : this.#triggerCustomEvent(_VideoCustomEventTypes.REQUEST_WEBFULLSCREEN);
            }
            else prevInWebFull ? this.exitWebFullscreen() : this.requestWebFullscreen();
            return !prevInWebFull;
        }
    }
    requestFullscreen(preferButton = true) {
        if (cui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.#fullscreenButton) {
            this.#fullscreenButton.click();
            return Promise.resolve();
        }
        return cui.requestFullscreen(this.#container);
    }
    exitFullscreen(preferButton = true) {
        if (!cui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.#fullscreenButton) {
            this.#fullscreenButton.click();
            return Promise.resolve();
        }
        return cui.exitFullscreen();
    }
    /**
     * Requests for full-screen are only granted when they're requested while running in a user-generated event handler.
     * If the code in the event handler runs for more than one second before requesting full-screen, the request is also denied.
     * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=687687#c7}
     */
    toggleFullscreen() {
        if (this.#fullscreenButton) {
            this.#fullscreenButton.click();
            return Promise.resolve();
        }
        else return cui.isFullscreen() ? this.exitFullscreen(false) : this.requestFullscreen(false);
    }
    /* #endregion */
    clean() {
        this.#videoDelegate.unbindVideo(this.#video);
        VideoInstance.#instanceMap.delete(this.#video);
        this.#video = this.#playerMetadata = this.#videoDelegate = null;
        super.clean();
    }
}