import '../css/video.css';
import * as Const from './const';
import { ApplyMethodSignature, PositionOption } from '../common/class';
import { MediaReadyState, MediaEvents, TooltipPosition, GlobalEvents } from '../common/enum';
import { ui as cui } from '../common/ui.js';
import { util as tutil } from '../tampermonkey/util';
import { CssCacheHelper } from '../tampermonkey/utils';

export const _VideoCustomEventTypes = {
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    PLAY: 'video_play',
    PAUSE: 'video_pause',
    VOLUME_CHANGE: 'video_volume_change',
    REQUEST_WEBFULLSCREEN: 'video_request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'video_exit_webfullscreen'
}
class VideoEventDelegate {
    #previousSiblingSelector;
    #defaultDelegate;
    /** @type {Element} */
    #delegate;
    /** @type {Map<string,ApplyMethodSignature[]>} */
    #eventsObserverMap = new Map();
    /**
     * @param {Element} defaultDelegate 
     * @param {string} [previousSiblingSelector] 
     */
    constructor(defaultDelegate, previousSiblingSelector) {
        this.#defaultDelegate = defaultDelegate;
        this.#previousSiblingSelector = previousSiblingSelector;
        document.leave(Const.eventDelegateSelector, (delegate) => {
            if (delegate.isSameNode(this.#delegate)) this.createEventDelegate();
        });
    }
    /**
     * Create event delegate for video after controls if there isn't one.
     * @returns 
     */
    async createEventDelegate() {
        let previousSiblingSelector = this.#previousSiblingSelector;
        let createdDelegate = false;
        /** @type {Promise<Element>} */
        let promiseCreate = previousSiblingSelector ? new Promise((resolve) => {
            document.arrive(previousSiblingSelector, { existing: true, onceOnly: true }, (prevSibling) => {
                /** @type {HTMLDivElement} */
                let eventDelegate = prevSibling.parentElement.querySelector(Const.eventDelegateSelector);
                if (!eventDelegate) {
                    eventDelegate = document.createElement('div');
                    eventDelegate.classList.add(Const.eventDelegateClassName);
                    prevSibling.after(eventDelegate);
                    prevSibling.classList.add(Const.topOverlayClassName);
                    createdDelegate = true;
                }
                resolve(this.#delegate = eventDelegate);
            });
        }) : Promise.resolve(this.#delegate = this.#defaultDelegate);
        return promiseCreate.then(() => {
            if (createdDelegate) {
                for (let i in GlobalEvents) {
                    let type = GlobalEvents[i];
                    this.#delegate.addEventListener(type, (e) => {
                        let sigs = this.#eventsObserverMap.get(type);
                        if (sigs) sigs.forEach((sig) => {
                            sig.fn.call(sig.context, e);
                        });
                    });
                }
            }
        });
    }
    /**
     * 
     * @param {string} eventType 
     * @param {function} handler 
     * @param {*} [context] 
     */
    registerEventHandler(eventType, handler, context) {
        let sig = new ApplyMethodSignature(handler, context);
        if (this.#eventsObserverMap.has(eventType)) {
            this.#eventsObserverMap.get(eventType).push(sig);
        }
        else {
            this.#eventsObserverMap.set(eventType, [sig]);
        }
    }
    unregisterContext(context) {
        this.#eventsObserverMap.forEach((sigs) => {
            for (let i = 0; i < sigs.length; i++) {
                let sig = sigs[i];
                if (sig.context == context) {
                    sigs.splice(i, 1);
                    i--;
                }
            }
        });
    }
    clean() {
        this.#defaultDelegate = this.#delegate = null;
        this.#eventsObserverMap.clear();
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
export class VideoInstance {
    #video;
    #title;
    #initProgress;
    #initVolume;
    #playerMetadata;
    /* #region Controls */
    /** @type {HTMLElement} */
    #playButton;
    get playButton() {
        if (this.#playButton) return this.#playButton;
        let playerMetadata = this.#playerMetadata;
        return this.#playButton = cui.querySelectorFirst(playerMetadata.playButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /** @type {HTMLElement} */
    #volumeButton;
    get volumeButton() {
        if (this.#volumeButton) return this.#volumeButton;
        let playerMetadata = this.#playerMetadata;
        return this.#volumeButton = cui.querySelectorFirst(playerMetadata.volumeButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /** @type {HTMLElement} */
    #fullscreenButton;
    get fullscreenButton() {
        if (this.#fullscreenButton) return this.#fullscreenButton;
        let playerMetadata = this.#playerMetadata;
        return this.#fullscreenButton = cui.querySelectorFirst(playerMetadata.fullscreenButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /** @type {HTMLElement} */
    #webFullscreenButton;
    get webFullscreenButton() {
        if (this.#webFullscreenButton) return this.#webFullscreenButton;
        let playerMetadata = this.#playerMetadata;
        return this.#webFullscreenButton = cui.querySelectorFirst(playerMetadata.webFullscreenButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /* #endregion */
    /** @type {Element} */
    get container() { return this.#video.closest(this.#playerMetadata.containerSelector) }
    /** @type {VideoEventDelegate} */
    videoDelegate;
    get tooltipWrap() {
        return this.container;
    }
    /**
     * @param {VideoInstanceData} initData 
     */
    constructor(initData) {
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
            tutil.debug(`Restore saved progress(s): ${progress}`);
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
        video.addEventListener(MediaEvents.VOLUME_CHANGE, () => {
            this.#triggerCustomEvent(_VideoCustomEventTypes.VOLUME_CHANGE, { volume: video.volume });
            this.showTooltip(video.muted ? "静音" : ("音量" + Math.round(video.volume * 100) + "%"));
        });
        let videoDelegate = new VideoEventDelegate(this.container, this.#playerMetadata.controlsSelector);
        this.videoDelegate = videoDelegate;
        return videoDelegate.createEventDelegate().then(() => this.#triggerCustomEvent(_VideoCustomEventTypes.VIDEO_READY));
    }
    async #bindEvent() {
        let video = this.#video;
        video.addEventListener(MediaEvents.PLAY, () => {
            this.showTooltip("播放", TooltipPosition.TOP_CENTER, 15);
            this.#triggerCustomEvent(_VideoCustomEventTypes.PLAY);
        }, true);
        video.addEventListener(MediaEvents.PAUSE, () => {
            this.showTooltip("暂停", TooltipPosition.TOP_CENTER, 15);
            this.#triggerCustomEvent(_VideoCustomEventTypes.PAUSE);
        }, true);
        return new Promise((resolve) => {
            if (video.readyState >= MediaReadyState.HAVE_METADATA) return this.#onLoadedMetadata().then(() => resolve());
            else {
                // 使用箭头表达式将handler的上下文由e.target切换为Player
                video.addEventListener(MediaEvents.LOADED_METADATA, () => {
                    this.#onLoadedMetadata().then(() => resolve());
                }, true);
            }
        });
    }
    /**
     * 
     * @param {VideoInstanceData} initData
     * @param {import('../site/class').PlayerMetadata} [playerMetadata]
     * @returns {Promise<void>}
     */
    async init() {
        let topElementSelectors = this.#playerMetadata.topElementSelectors;
        if (topElementSelectors.length > 0) {
            topElementSelectors.forEach((topElementSelector) => {
                document.arrive(topElementSelector, { existing: true }, function () {
                    this.classList.add(Const.topOverlayClassName);
                });
            });
        }
        return this.#bindEvent();
    }
    /**
     * 
     * @param {string} tooltip 
     * @param {string} [position]
     * @param {number} [top] 
     * @param {number} [left] 
     */
    showTooltip(tooltip, position, top, left) {
        cui.showTooltip(tooltip, new PositionOption({ target: this.tooltipWrap, position: position, top: top, left: left }));
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
        canvas.toBlob((blob) => cui.downloadBlob(blob, `${fileName}_${videoWidth}x${videoHeight}.png`));
    }

    /* #region Video Control */
    togglePlay() {
        if (this.playButton) this.playButton.click();
        else this.#video.paused ? this.#video.play() : this.#video.pause();
    }
    toggleMute() {
        if (this.volumeButton) this.volumeButton.click();
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
        if (!this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.#saveAndSetCss();
            this.container.classList.add(Const.containerWebFullscreenClassName);
            document.body.classList.add(Const.bodyWebFullscreenClassName);
        }
        this.#triggerCustomEvent(_VideoCustomEventTypes.REQUEST_WEBFULLSCREEN);
    }
    exitWebFullscreen() {
        if (this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.container.classList.remove(Const.containerWebFullscreenClassName);
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
            if (this.webFullscreenButton) {
                this.webFullscreenButton.click();
                prevInWebFull ? this.#triggerCustomEvent(_VideoCustomEventTypes.EXIT_WEBFULLSCREEN) : this.#triggerCustomEvent(_VideoCustomEventTypes.REQUEST_WEBFULLSCREEN);
            }
            else prevInWebFull ? this.exitWebFullscreen() : this.requestWebFullscreen();
            return !prevInWebFull;
        }
    }
    requestFullscreen(preferButton = true) {
        if (cui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        return cui.requestFullscreen(this.container);
    }
    exitFullscreen(preferButton = true) {
        if (!cui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        return cui.exitFullscreen();
    }
    toggleFullscreen() {
        if (this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        else return cui.isFullscreen() ? this.exitFullscreen(false) : this.requestFullscreen(false);
    }
    /* #endregion */
    clean() {
        this.videoDelegate.clean();
        this.#video = this.#playerMetadata = this.videoDelegate = null;
    }
}