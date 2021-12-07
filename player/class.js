import '../css/video.css';
import * as Const from './const';
import { EventObserverWrapper, PositionOption } from '../common/class';
import { MediaReadyState, MediaEvents, TooltipPosition, GlobalEvents } from '../common/enum';
import { ui as cui } from '../common/ui.js';
import { util as tutil } from '../tampermonkey/util';
import { CssCacheHelper } from '../tampermonkey/utils';
import { EnumHelper } from '../common/utils';

export const _VideoCustomEventTypes = {
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    PLAY: 'video_play',
    PAUSE: 'video_pause',
    VOLUME_CHANGE: 'video_volume_change',
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
     * Create event delegate after {@link previousSiblingSelector} if there isn't one.
     * @param {HTMLVideoElement} video 
     * @param {string} [previousSiblingSelector] - {@link previousSiblingSelector} or {@link defaultDelegateSelector} is required.
     * @param {string} [defaultDelegateSelector] 
     * @param {string[]} [ignoreList] 
     */
    static getInstance(video, previousSiblingSelector, defaultDelegateSelector, ignoreList = []) {
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
        }) : Promise.resolve(document.querySelector(defaultDelegateSelector));
        return promiseCreate.then((delegateEle) => {
            if (!delegateEle) throw new Error('No event delegate');

            VideoEventDelegate.#bindVideo(delegateEle, video);
            return VideoEventDelegate.#createInstance(delegateEle);
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
export class VideoInstanceData {
    video;
    playerMetadata;
    title;
    progress;
    volume;
    /**
     * @param {object} options
     * @param {HTMLVideoElement} options.video 
     * @param {import('../site/class').PlayerMetadata} options.playerMetadata
     * @param {string} [options.title] 
     * @param {number} [options.progress] 
     * @param {number} [options.volume] 
     */
    constructor({ video, playerMetadata, title, progress, volume }) {
        this.video = video;
        this.playerMetadata = playerMetadata;
        this.title = title;
        this.progress = progress;
        this.volume = volume;
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
     * @param {VideoInstanceData} initData 
     */
    constructor(initData) {
        super(initData.video, EnumHelper.toValueArray(MediaEvents).concat(EnumHelper.toValueArray(_VideoCustomEventTypes)));
        this.#video = initData.video;
        this.#playerMetadata = initData.playerMetadata;
        this.#title = initData.title;
        this.#initProgress = initData.progress;
        this.#initVolume = initData.volume;
    }
    #triggerCustomEvent(eventType, data) {
        tutil.debug('CustomEvent:', eventType, data);
        this.#video.dispatchEvent(new CustomEvent(eventType, { bubbles: false, detail: data }));
    }
    #initVideo() {
        let video = this.#video;
        video.removeAttribute('autoplay');
        video.crossOrigin = 'anonymous';

        if (this.#title) this.showTooltip(this.#title);
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
    async #onLoadedMetadata() {
        this.#initVideo();
        let video = this.#video;
        this.registerVideoEventHandler(MediaEvents.VOLUME_CHANGE, () => {
            this.#triggerCustomEvent(_VideoCustomEventTypes.VOLUME_CHANGE, { volume: video.volume });
            this.showTooltip((video.muted ? "静音" : "音量") + Math.round(video.volume * 100) + "%");
        }, this);
        let ignoreList = this.#playerMetadata.topElementSelectors || [];
        if (this.#playerMetadata.controlsSelector) ignoreList.push(this.#playerMetadata.controlsSelector);
        return VideoEventDelegate.getInstance(this.#video, this.#playerMetadata.controlsSelector,
            this.#playerMetadata.containerSelector, ignoreList)
            .then((videoDelegate) => {
                this.#videoDelegate = videoDelegate;
                this.#triggerCustomEvent(_VideoCustomEventTypes.VIDEO_READY);
            });
    }
    async #bindEvent() {
        let video = this.#video;
        this.registerVideoEventHandler(MediaEvents.PLAY, () => {
            this.showTooltip("播放", TooltipPosition.TOP_CENTER, 15);
            this.#triggerCustomEvent(_VideoCustomEventTypes.PLAY);
        }, this);
        this.registerVideoEventHandler(MediaEvents.PAUSE, () => {
            this.showTooltip("暂停", TooltipPosition.TOP_CENTER, 15);
            this.#triggerCustomEvent(_VideoCustomEventTypes.PAUSE);
        }, this);
        return new Promise((resolve) => {
            if (video.readyState >= MediaReadyState.HAVE_METADATA) return this.#onLoadedMetadata().then(() => resolve());
            else {
                // 使用箭头表达式将handler的上下文由e.target切换为Player
                this.registerVideoEventHandler(MediaEvents.LOADED_METADATA, () => {
                    this.#onLoadedMetadata().then(() => resolve());
                }, this);
            }
        });
    }
    /**
     * 
     * @param {EventHandlerWrapper[]} [preInitVideoObservers]
     */
    #preInit(preInitVideoObservers = []) {
        preInitVideoObservers.forEach((handlerWrapper) => {
            this.registerVideoEventHandler(handlerWrapper.eventType, handlerWrapper.handler, handlerWrapper.context);
        });
    }
    /**
     * 
     * @param {EventHandlerWrapper[]} [postInitVideoObservers]
     * @param {EventHandlerWrapper[]} [postInitDelegateObservers]
     */
    #postInit(postInitVideoObservers = [], postInitDelegateObservers = []) {
        postInitVideoObservers.forEach((handlerWrapper) => {
            this.registerVideoEventHandler(handlerWrapper.eventType, handlerWrapper.fn, handlerWrapper.context);
        });
        postInitDelegateObservers.forEach((handlerWrapper) => {
            this.registerDelegateEventHandler(handlerWrapper.eventType, handlerWrapper.fn, handlerWrapper.context);
        });
    }
    /**
     * @param {VideoInstanceData} instanceData 
     * @param {EventHandlerWrapper[]} [preInitVideoObservers]
     * @param {EventHandlerWrapper[]} [postInitVideoObservers]
     * @param {EventHandlerWrapper[]} [postInitDelegateObservers]
     */
    static getInstance(instanceData, preInitVideoObservers = [], postInitVideoObservers = [], postInitDelegateObservers = []) {
        let video = instanceData.video;
        let videoInstance = this.#instanceMap.get(video);
        if (videoInstance) {
            videoInstance.#preInit(preInitVideoObservers);
            videoInstance.#postInit(postInitVideoObservers, postInitDelegateObservers);
            return Promise.resolve(videoInstance);
        }
        else {
            videoInstance = new VideoInstance(instanceData);
            this.#instanceMap.set(video, videoInstance);
            videoInstance.#preInit(preInitVideoObservers);
            return videoInstance.#bindEvent().then(() => {
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
    registerVideoEventHandler(eventType, handler, context) {
        this.registerEventHandler(eventType, handler, false, context);
    }
    /**
     * Register event handler on video event delegate.
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {*} [context] 
     */
    registerDelegateEventHandler(eventType, handler, context) {
        this.#videoDelegate.registerEventHandler(eventType, handler, false, context);
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
        let video = this.#video;
        let videoWidth = video.videoWidth;
        let videoHeight = video.videoHeight;
        let canvas = document.createElement('canvas');
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, videoWidth, videoHeight);
        canvas.toBlob((blob) => cui.downloadBlob(blob, `${fileName}_${videoWidth}x${videoHeight}_${Math.trunc(video.currentTime)}.png`));
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
        CssCacheHelper.save(html, 'overflow', () => html.style.overflow = overflow);
        CssCacheHelper.save(html, 'scroll', HTMLElement.prototype.scrollTo, [html.scrollLeft, html.scrollTop]);
        document.documentElement.style.overflow = 'hidden';
    }
    #restoreCss() {
        CssCacheHelper.restore(document.documentElement, 'overflow');
        CssCacheHelper.restore(document.documentElement, 'scroll');
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
        this.#video = this.#playerMetadata = this.#videoDelegate = null;
        VideoInstance.#instanceMap.delete(this.#video);
        super.clean();
    }
}