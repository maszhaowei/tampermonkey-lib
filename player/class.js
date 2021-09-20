import '../css/video.css';
import * as Const from './const';
import { ui } from './ui.js';
import { TooltipOption } from '../common/class';
import { ui as cui } from '../common/ui.js';
import { util } from '../tampermonkey/util';

export class VideoInstance {
    #site;
    get site() { return this.#site }
    /** @type {PlayerMetadata} */
    #playerMetadata;
    get playerMetadata() { return this.#playerMetadata || this.#site.defaultPlayerMetadata }
    /** @type {HTMLVideoElement} */
    #videoElement;
    /** @type {Element} */
    #container;
    /* #region Controls */
    /** @type {HTMLElement} */
    #playButton;
    get playButton() {
        if (this.#playButton) return this.#playButton;
        let playerMetadata = this.playerMetadata;
        return this.#playButton = cui.querySelectorFirst(playerMetadata.playButtonSelector, playerMetadata.controlsSelector, this.#container);
    }
    /** @type {HTMLElement} */
    #volumeButton;
    get volumeButton() {
        if (this.#volumeButton) return this.#volumeButton;
        let playerMetadata = this.playerMetadata;
        return this.#volumeButton = cui.querySelectorFirst(playerMetadata.volumeButtonSelector, playerMetadata.controlsSelector, this.#container);
    }
    /** @type {HTMLElement} */
    #fullscreenButton;
    get fullscreenButton() {
        if (this.#fullscreenButton) return this.#fullscreenButton;
        let playerMetadata = this.playerMetadata;
        return this.#fullscreenButton = cui.querySelectorFirst(playerMetadata.fullscreenButtonSelector, playerMetadata.controlsSelector, this.#container);
    }
    /** @type {HTMLElement} */
    #webFullscreenButton;
    get webFullscreenButton() {
        if (this.#webFullscreenButton) return this.#webFullscreenButton;
        let playerMetadata = this.playerMetadata;
        return this.#webFullscreenButton = cui.querySelectorFirst(playerMetadata.webFullscreenButtonSelector, playerMetadata.controlsSelector, this.#container);
    }
    /* #endregion */
    /** @type {HTMLElement} */
    #eventDelegate;
    get eventDelegate() { return this.#eventDelegate }

    get tooltipWrap() {
        return this.#container;
    }
    /**
     * @private
     * @hideconstructor
     * @param {import('../site/class').VideoSite} videoSite 
     */
    constructor(videoSite) {
        this.#site = videoSite;
    }
    async #initUI() {
        // Create event delegate for video after controls if there isn't one.
        let controlsSelector = this.controlsSelector;
        /** @type {Promise<Element>} */
        let p = controlsSelector ? new Promise((resolve) => {
            let video = this.#videoElement;
            let topElementSelector = this.topElementSelectors.join(',');
            document.arrive(controlsSelector, { existing: true }, function () {
                util.debug('Video:', video, 'Controls:', this);
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
            this.#eventDelegate = eventDelegate || this.#container;
        })
    }
    /**
     * 
     * @param {HTMLVideoElement} video
     * @param {Element} videoContainer
     * @param {import('../site/class').PlayerMetadata} [playerMetadata]
     */
    async init(video, videoContainer, playerMetadata) {
        this.#videoElement = video;
        this.#container = videoContainer;
        this.#playerMetadata = playerMetadata;
        return this.#initUI().then(() => this);
    }
    showTooltip(tooltip) {
        cui.showTooltip(new TooltipOption(tooltip, this.tooltipWrap));
    }

    saveVideoFrame(fileName = document.title) {
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
        else this.#videoElement.paused ? this.#videoElement.play() : this.#videoElement.pause();
    }
    /**
     * 
     * @returns {boolean} 是否执行成功
     */
    toggleMute() {
        if (this.volumeButton) this.volumeButton.click();
        else this.#videoElement.muted = !this.#videoElement.muted;
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
    requestFullscreen(preferButton = true) {
        if (ui.isFullscreen()) return Promise.resolve();
        if (preferButton && this.fullscreenButton) {
            this.fullscreenButton.click();
            return Promise.resolve();
        }
        return ui.requestFullscreen(this.#container);
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
        this.#videoElement = this.#container = this.#playButton = this.#volumeButton = this.#webFullscreenButton 
        = this.#fullscreenButton = this.#eventDelegate = null;
    }
}