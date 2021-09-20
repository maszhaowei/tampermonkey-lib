import '../css/video.css';
import * as Const from './const';
import { PlayerCallbackTypes } from './enum';
import { ui } from './ui.js';
import { MediaReadyState, MediaEvents, TooltipPosition } from '../common/enum';
import { ui as cui } from '../common/ui.js';
import { util as tutil } from '../tampermonkey/util';
export class VideoInstanceData {
    video;
    container;
    title;
    progress;
    volume;
    /** @type {Map<string, import('../tampermonkey/class').ApplyMethodSignature>} */
    callbacks = new Map();
    constructor(video, container, title, progress, volume) {
        this.video = video;
        this.container = container;
        this.title = title;
        this.progress = progress;
        this.volume = volume;
    }
}
export class VideoInstance {
    #site;
    get site() { return this.#site }
    /** @type {import('../site/class').PlayerMetadata} */
    #playerMetadata;
    /** @type {VideoInstanceData} */
    get playerMetadata() { return this.#playerMetadata || this.#site.defaultPlayerMetadata }
    /** @type {VideoInstanceData} */
    #initData;
    /* #region Controls */
    /** @type {HTMLElement} */
    #playButton;
    get playButton() {
        if (this.#playButton) return this.#playButton;
        let playerMetadata = this.playerMetadata;
        return this.#playButton = cui.querySelectorFirst(playerMetadata.playButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /** @type {HTMLElement} */
    #volumeButton;
    get volumeButton() {
        if (this.#volumeButton) return this.#volumeButton;
        let playerMetadata = this.playerMetadata;
        return this.#volumeButton = cui.querySelectorFirst(playerMetadata.volumeButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /** @type {HTMLElement} */
    #fullscreenButton;
    get fullscreenButton() {
        if (this.#fullscreenButton) return this.#fullscreenButton;
        let playerMetadata = this.playerMetadata;
        return this.#fullscreenButton = cui.querySelectorFirst(playerMetadata.fullscreenButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /** @type {HTMLElement} */
    #webFullscreenButton;
    get webFullscreenButton() {
        if (this.#webFullscreenButton) return this.#webFullscreenButton;
        let playerMetadata = this.playerMetadata;
        return this.#webFullscreenButton = cui.querySelectorFirst(playerMetadata.webFullscreenButtonSelector, playerMetadata.controlsSelector, this.container);
    }
    /* #endregion */
    /** @type {HTMLElement} */
    #eventDelegate;
    get eventDelegate() { return this.#eventDelegate }
    /** @type {HTMLVideoElement} */
    get video() { return this.#initData.video }
    /** @type {Element} */
    get container() { return this.#initData.container }

    get tooltipWrap() {
        return this.container;
    }
    /**
     * @private
     * @hideconstructor
     * @param {import('../site/class').VideoSite} videoSite 
     */
    constructor(videoSite) {
        this.#site = videoSite;
    }
    /**
     * 
     * @param {string} messageType 
     * @param {*} [messageContent] 
     */
    #postLocalMessage(messageType, messageContent) {
        this.#site.postMessage(window, messageType, messageContent, window.location.origin);
    }
    #invokeCallback(callbackType) {
        let sig = this.#initData.callbacks.get(callbackType);
        if (sig) sig.fn.apply(sig.context, sig.args);
    }
    /**
     * 
     * @param {string} key 
     * @param {import('../tampermonkey/class').ApplyMethodSignature} sig 
     */
    addCallback(key, sig) {
        this.#initData.callbacks.set(key, sig);
    }
    /**
     * Create event delegate for video after controls if there isn't one.
     * @returns 
     */
    async #createEventDelegate() {
        let controlsSelector = this.controlsSelector;
        let video = this.video;
        /** @type {Promise<Element>} */
        let p = controlsSelector ? new Promise((resolve) => {
            let topElementSelector = this.topElementSelectors.join(',');
            document.arrive(controlsSelector, { existing: true }, function () {
                tutil.debug('Video:', video, 'Controls:', this);
                /** @type {HTMLDivElement} */
                let eventDelegate = this.parentElement.querySelector(Const.eventDelegateSelector);
                if (!eventDelegate) {
                    eventDelegate = document.createElement('div');
                    eventDelegate.classList.add(Const.eventDelegateClassName);
                    this.after(eventDelegate);
                    this.classList.add(Const.topOverlayClassName);
                    if (topElementSelector) {
                        document.arrive(topElementSelector, { existing: true }, function () {
                            this.classList.add(Const.topOverlayClassName);
                        });
                    }
                }
                resolve(eventDelegate);
            });
        }) : Promise.resolve();
        return p.then((eventDelegate) => {
            this.#eventDelegate = eventDelegate || this.container;
            tutil.debug('Video:', video, 'Event Delegate:', this.#eventDelegate);
        })
    }
    #initVideo() {
        let initData = this.#initData;
        this.showTooltip(initData.title);
        let video = this.video;
        video.removeAttribute('autoplay');
        video.currentTime = initData.progress;
        video.volume = initData.volume;
        this.#invokeCallback(PlayerCallbackTypes.VIDEO_ATTR_INITIALIZED);
    }
    async #onLoadedMetadata() {
        this.#initVideo();
        return this.#createEventDelegate().then(() => {
            this.#invokeCallback(PlayerCallbackTypes.VIDEO_READY);
        });
    }
    async #bindEvent() {
        let video = this.video;
        video.addEventListener(MediaEvents.PLAY, () => {
            this.showTooltip("播放", TooltipPosition.TOP_CENTER, 15);
            this.#invokeCallback(PlayerCallbackTypes.PLAY);
        }, true);
        video.addEventListener(MediaEvents.PAUSE, () => {
            this.showTooltip("暂停", TooltipPosition.TOP_CENTER, 15);
            this.#invokeCallback(PlayerCallbackTypes.PAUSE);
        }, true);
        return new Promise((resolve) => {
            if (video.readyState >= MediaReadyState.HAVE_METADATA) return this.#onLoadedMetadata().then(() => resolve(this));
            else {
                // 使用箭头表达式将handler的上下文由e.target切换为Player
                video.addEventListener(MediaEvents.LOADED_METADATA, () => {
                    this.#onLoadedMetadata().then(() => resolve(this));
                }, true);
            }
        });
    }
    /**
     * 
     * @param {VideoInstanceData} initData
     * @param {import('../site/class').PlayerMetadata} [playerMetadata]
     */
    async init(initData, playerMetadata) {
        this.#initData = initData;
        this.#playerMetadata = playerMetadata;
        return this.#bindEvent();
    }
    /**
     * 
     * @param {string} tooltip 
     * @param {string} [position]
     * @param {number} [margin] 
     */
    showTooltip(tooltip, position, margin) {
        cui.showTooltip(tooltip, this.tooltipWrap, position, margin);
    }

    saveVideoFrame(fileName = document.title) {
        let video = this.video;
        let videoWidth = video.videoWidth;
        let videoHeight = video.videoHeight;
        let canvas = document.createElement('canvas');
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, videoWidth, videoHeight);
        canvas.toBlob(function (e) {
            let a = document.createElement('a');
            a.href = URL.createObjectURL(e);
            a.download = `${fileName}_${videoWidth}x${videoHeight}.png`;
            a.click();
            URL.revokeObjectURL(a.href);
        });
    }

    /* #region Video Control */
    /**
     * 
     * @returns {boolean} 是否执行成功
     */
    togglePlay() {
        if (this.playButton) this.playButton.click();
        else this.video.paused ? this.video.play() : this.video.pause();
    }
    /**
     * 
     * @returns {boolean} 是否执行成功
     */
    toggleMute() {
        if (this.volumeButton) this.volumeButton.click();
        else this.video.muted = !this.video.muted;
    }
    /**
     * @abstract
     * @returns {boolean}
     */
    isVideoInWebFullScreen() {
        return document.body.classList.contains(Const.bodyWebFullscreenClassName);
    }
    requestWebFullscreen() {
        if (!this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.container.classList.add(Const.containerWebFullscreenClassName);
            document.body.classList.add(Const.bodyWebFullscreenClassName);
        }
        this.#invokeCallback(PlayerCallbackTypes.REQUEST_WEBFULLSCREEN);
    }
    exitWebFullscreen() {
        if (this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.container.classList.remove(Const.containerWebFullscreenClassName);
            document.body.classList.remove(Const.bodyWebFullscreenClassName);
        }
        this.#invokeCallback(PlayerCallbackTypes.EXIT_WEBFULLSCREEN);
    }
    /**
     * 
     * @returns {boolean} 是否是网页全屏状态
     */
    toggleWebFullscreen() {
        if (ui.isFullscreen()) {
            this.cancelFullScreen();
            this.requestWebFullscreen();
            return true;
        }
        else {
            let prevInWebFull = this.isVideoInWebFullScreen();
            if (this.webFullscreenButton) {
                this.webFullscreenButton.click();
                prevInWebFull ? this.#invokeCallback(PlayerCallbackTypes.EXIT_WEBFULLSCREEN) : this.#invokeCallback(PlayerCallbackTypes.REQUEST_WEBFULLSCREEN);
            }
            else prevInWebFull ? this.exitWebFullscreen() : this.requestWebFullscreen();
            return !prevInWebFull;
        }
    }
    requestFullscreen(preferButton = true) {
        if (ui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        return ui.requestFullscreen(this.container);
    }
    cancelFullScreen(preferButton = true) {
        if (!ui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        return ui.exitFullscreen();
    }
    toggleFullscreen() {
        if (this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        else return ui.isFullscreen() ? this.cancelFullScreen(false) : this.requestFullscreen(false);
    }
    /* #endregion */

    test() {
        return this.#site.test();
    }
    clone() {
        return new VideoInstance(this.#site);
    }
    clean() {
        this.video = this.container = this.#playButton = this.#volumeButton = this.#webFullscreenButton
            = this.#fullscreenButton = this.#eventDelegate = null;
    }
}