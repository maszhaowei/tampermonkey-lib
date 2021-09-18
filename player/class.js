import { ui } from '../common/ui.js';
import { SiteIDs, TooltipPosition } from '../common/enum.js';
import * as Const from './const';
import { util } from '../tampermonkey/util';
import md5 from 'md5';
/**
 * @extends VideoSite
 * {@link VideoSite}
 */
export class VideoInstance {
    #site;
    get site() { return this.#site }
    /** @type {HTMLVideoElement} */
    #videoElement;
    /** @type {Element} */
    #container;
    /* #region Controls */
    #playButtonSelector;
    /** @type {HTMLElement} */
    #playButton;
    #fullscreenButtonSelector;
    /** @type {HTMLElement} */
    #fullscreenButton;
    #webFullscreenButtonSelector;
    /** @type {HTMLElement} */
    #webFullscreenButton;
    #volumeButtonSelector;
    /** @type {HTMLElement} */
    #volumeButton;
    /* #endregion */
    /** @type {Map<HTMLVideoElement, VideoInstance>} */
    static #videoInstanceMap = new Map();

    get tooltipWrap() {
        return this.#container;
    }
    get playButton() {
        if (this.#playButton) return this.#playButton;
        return this.#playButton = ui.querySelectorFirst(this.#playButtonSelector, this.controlsSelector, this.#container);
    }
    get fullscreenButton() {
        if (this.#fullscreenButton) return this.#fullscreenButton;
        return this.#fullscreenButton = ui.querySelectorFirst(this.#fullscreenButtonSelector, this.controlsSelector, this.#container);
    }
    get webFullscreenButton() {
        if (this.#webFullscreenButton) return this.#webFullscreenButton;
        return this.#webFullscreenButton = ui.querySelectorFirst(this.#webFullscreenButtonSelector, this.controlsSelector, this.#container);
    }
    get volumeButton() {
        if (this.#volumeButton) return this.#volumeButton;
        return this.#volumeButton = ui.querySelectorFirst(this.#volumeButtonSelector, this.controlsSelector, this.#container);
    }
    /**
     * @private
     * @param {import('../tampermonkey/class').VideoSite} videoSite 
     * @param {string=} playButtonSelector 
     * @param {string=} volumeButtonSelector 
     * @param {string=} fullscreenButtonSelector 
     * @param {string=} webFullscreenButtonSelector 
     */
    constructor(videoSite, playButtonSelector, volumeButtonSelector, fullscreenButtonSelector, webFullscreenButtonSelector) {
        this.#site = videoSite;
        this.#playButtonSelector = playButtonSelector;
        this.#volumeButtonSelector = volumeButtonSelector;
        this.#fullscreenButtonSelector = fullscreenButtonSelector;
        this.#webFullscreenButtonSelector = webFullscreenButtonSelector;
    }
    /**
     * 
     * @param {HTMLVideoElement} video 
     * @param {Element} videoContainer 
     */
    init(video, videoContainer) {
        this.#videoElement = video;
        this.#container = videoContainer;
        VideoInstance.#videoInstanceMap.set(video, this);
    }
    test() {
        return this.#site.test();
    }
    /**
     * 
     * @param {HTMLVideoElement} video 
     */
    static getInstance(video) {
        if(VideoInstance.#videoInstanceMap.has(video)) return this.#videoInstanceMap.get(video);
    }
    /**
     * 获取视频的事件委托元素
     * @returns {Promise<HTMLElement|undefined>} 
     */
    async initUI() {
        let eventDelegateSelector = Const.eventDelegateSelector;
        /** @type {Promise<Element>} */
        let promiseDelegate = eventDelegateSelector ? new Promise((resolve) => {
            document.arrive(eventDelegateSelector, { existing: true }, function () {
                resolve(this);
            });
        }) : new Promise((resolve) => resolve());

        let controlsSelector = this.#site.controlsSelector;
        /** @type {Promise<Element>} */
        let promiseControls = controlsSelector ? new Promise((resolve) => {
            let video = this.#videoElement;
            let topElementSelector = this.#site.topElementSelectors.join(',');
            document.arrive(controlsSelector, { existing: true }, function () {
                util.debug('Video:', video, 'Controls:', this);
                let overlay = this.parentElement.querySelector(eventDelegateSelector);
                // 某些视频使用默认控件ShadowRoot，无法用选择器查找
                if (!overlay && controlsSelector) {
                    overlay = document.createElement('div');
                    overlay.classList.add(Const.eventDelegateClassName);
                    this.after(overlay);
                    this.classList.add(Const.topOverlayClassName);
                    if (topElementSelector) {
                        document.arrive(topElementSelector, { existing: true }, function () {
                            this.classList.add(Const.topOverlayClassName);
                        });
                    }
                }
                resolve(overlay);
            });
        }) : new Promise((resolve) => resolve());

        const eventDelegates = await Promise.all([promiseDelegate, promiseControls]);
        return eventDelegates[0] || eventDelegates[1] || this.#container;
    }
    showTooltip(tooltip, { position = TooltipPosition.CENTER_CENTER, left = 0, top = 0 } = {}) {
        ui.showTooltip(tooltip, this.tooltipWrap, { position: position, left: left, top: top });
    }

    saveVideoFrame(title) {
        let video = this.#videoElement;
        let videoWidth = video.videoWidth;
        let videoHeight = video.videoHeight;
        let canvas = document.createElement('canvas');
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, videoWidth, videoHeight);
        canvas.toBlob(function (e) {
            let a = document.createElement('a');
            a.href = URL.createObjectURL(e);
            a.download = `${title}_${videoWidth}x${videoHeight}.png`;
            a.click();
            URL.revokeObjectURL(a.href);
        });
    }

    /**
     * 
     * @returns {boolean} 是否执行成功
     */
    togglePlay() {
        if (this.playButton) this.playButton.click();
        return !!this.playButton;
    }
    /**
     * 
     * @returns {boolean} 是否执行成功
     */
    toggleMute() {
        if (this.id === SiteIDs.MM9842) return false;
        if (this.volumeButton) this.volumeButton.click();
        return !!this.volumeButton;
    }
    isVideoInWebFullScreen() {
        return document.body.classList.contains(Const.bodyWebFullscreenClassName);
    }
    requestWebFullscreen() {
        if (!this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.#container.classList.add(Const.containerWebFullscreenClassName);
            document.body.classList.add(Const.bodyWebFullscreenClassName);
        }
    }
    exitWebFullscreen() {
        if (this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.#container.classList.remove(Const.containerWebFullscreenClassName);
            document.body.classList.remove(Const.bodyWebFullscreenClassName);
        }
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
            if (this.webFullscreenButton) this.webFullscreenButton.click();
            else prevInWebFull ? this.exitWebFullscreen() : this.requestWebFullscreen();
            return !prevInWebFull;
        }
    }

    requestFullscreen() {
        return ui.requestFullscreen(this.#container);
    }
    cancelFullScreen() {
        return ui.exitFullscreen();
    }
    toggleFullscreen() {
        // MM9842全屏按钮点击无反应
        if (this.fullscreenButton && this.id != SiteIDs.MM9842) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        else return ui.isFullscreen() ? this.cancelFullScreen() : this.requestFullscreen();
    }

    clean() {
        this.#videoElement = this.#container = this.#playButton = this.#volumeButton = this.#webFullscreenButton = this.#fullscreenButton = null;
    }
}

VideoInstance.preprocess = function () {
    switch (this.id) {
        case SiteIDs.JABLE:
            document.arrive("div.plyr__poster", { existing: true }, function () {
                ui.hideElement(this);
            });
            document.arrive("div.plyr__preview-scrubbing", { existing: true }, function () {
                ui.hideElement(this);
            });
            document.arrive("input[id^='plyr-seek-']", { existing: true }, function () {
                this.addEventListener("focus", function () { this.blur() });
            });
            break;
        case SiteIDs.MM9842:
            document.arrive("#resume", function () {
                ui.hideElement(this);
            });
            document.arrive('div[style]>a[href]', { existing: true }, function () {
                ui.hideElement(this.parentElement);
            });
            document.arrive('div.loading-container', { existing: true }, function () {
                this.click();
            });
            break;
        case SiteIDs.AVGLE:
        case SiteIDs.AVGLE_EMBED:
            document.arrive('a#vjs-logobrand-image-destination', { existing: true }, function () {
                this.href = window.location.href;
            });
            document.arrive('#player_3x2_close', { existing: true }, function () {
                this.click();
                ui.hide('#player_3x2_container');
                ui.hide('#aoverlay');
                unsafeWindow.localStorage['play_' + md5(unsafeWindow.video_id)] = 1;
            });
            break;
    }
}