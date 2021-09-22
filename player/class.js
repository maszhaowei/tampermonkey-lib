import '../css/video.css';
import * as Const from './const';
import { VideoCustomEventTypes } from './enum';
import { ui } from './ui.js';
import { ApplyMethodSignature } from '../common/class';
import { MediaReadyState, MediaEvents, TooltipPosition, GlobalEvents } from '../common/enum';
import { ui as cui } from '../common/ui.js';
import { util as tutil } from '../tampermonkey/util';
import { CssCacheHelper } from '../tampermonkey/class';

class VideoEventDelegate {
    #previousSiblingSelector;
    #topElementSelectors;
    #defaultDelegate;
    /** @type {Element} */
    #delegate;
    /** @type {Map<string,import('../common/class').ApplyMethodSignature[]>} */
    #eventsObserverMap = new Map();
    /**
     * @param {Element} defaultDelegate 
     * @param {string} [previousSiblingSelector] 
     * @param {string[]} [topElementSelectors]
     */
    constructor(defaultDelegate, previousSiblingSelector, topElementSelectors) {
        this.#defaultDelegate = defaultDelegate;
        this.#previousSiblingSelector = previousSiblingSelector;
        this.#topElementSelectors = topElementSelectors || [];
    }
    /**
     * Create event delegate for video after controls if there isn't one.
     * @returns 
     */
    async createEventDelegate() {
        let previousSiblingSelector = this.#previousSiblingSelector;
        /** @type {Promise<Element>} */
        let promiseCreate = previousSiblingSelector ? new Promise((resolve) => {
            let topElementSelector = this.#topElementSelectors.join(',');
            document.arrive(previousSiblingSelector, { existing: true }, function () {
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
        return promiseCreate.then((createDelegate) => {
            this.#delegate = createDelegate || this.#defaultDelegate;
            for (let i in GlobalEvents) {
                let type = GlobalEvents[i];
                this.#delegate.addEventListener(type, (e) => {
                    let sigs = this.#eventsObserverMap.get(type);
                    if (sigs) sigs.forEach((sig) => {
                        sig.fn.call(sig.context, e);
                    });
                });
            }
        })
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
}
export class VideoInstanceData {
    video;
    container;
    title;
    progress;
    volume;
    /**
     * 
     * @param {HTMLVideoElement} video 
     * @param {Element} container 
     * @param {string} [title] 
     * @param {number} [progress] 
     * @param {number} [volume] 
     */
    constructor(video, container, title, progress, volume) {
        this.video = video;
        this.container = container;
        this.title = title;
        this.progress = progress;
        this.volume = volume;
    }
    clean() {
        this.video = this.container = null;
    }
}
export class VideoInstance {
    #site;
    /** @type {import('../site/class').PlayerMetadata} */
    #playerMetadata;
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
    /** @type {HTMLVideoElement} */
    get video() { return this.#initData.video }
    /** @type {Element} */
    get container() { return this.#initData.container }
    /** @type {VideoEventDelegate} */
    videoDelegate;
    get tooltipWrap() {
        return this.container;
    }
    /**
     * @hideconstructor
     * @param {import('../site/class').VideoSite} videoSite 
     */
    constructor(videoSite) {
        this.#site = videoSite;
    }
    #triggerCustomEvent(eventType, data) {
        tutil.debug('CustomEvent:', eventType, data);
        this.video.dispatchEvent(new CustomEvent(eventType, { bubbles: false, detail: data }));
    }
    #initVideo() {
        let video = this.video;
        video.removeAttribute('autoplay');
        if (this.#site.isEmbedded()) video.crossOrigin = 'anonymous';

        let initData = this.#initData;
        if (initData.title) this.showTooltip(initData.title);
        let progress = initData.progress;
        if (progress != undefined) {
            tutil.debug(`Restore saved progress(s): ${progress}`);
            video.currentTime = progress;
        }
        let volume = initData.volume;
        if (volume != undefined) {
            tutil.debug(`Set init volume: ${volume}`);
            video.volume = volume;
        }
        this.#triggerCustomEvent(VideoCustomEventTypes.VIDEO_ATTR_INITIALIZED, { volume: volume, progress: progress });
    }
    async #onLoadedMetadata() {
        this.#initVideo();
        let video = this.video;
        video.addEventListener(MediaEvents.VOLUME_CHANGE, () => this.#triggerCustomEvent(VideoCustomEventTypes.VOLUME_CHANGE, { volume: video.volume }));
        let videoDelegate = new VideoEventDelegate(this.container, this.playerMetadata.controlsSelector, this.topElementSelectors);
        this.videoDelegate = videoDelegate;
        return videoDelegate.createEventDelegate().then(() => this.#triggerCustomEvent(VideoCustomEventTypes.VIDEO_READY));
    }
    async #bindEvent() {
        let video = this.video;
        video.addEventListener(MediaEvents.PLAY, () => {
            this.showTooltip("播放", TooltipPosition.TOP_CENTER, 15);
            this.#triggerCustomEvent(VideoCustomEventTypes.PLAY);
        }, true);
        video.addEventListener(MediaEvents.PAUSE, () => {
            this.showTooltip("暂停", TooltipPosition.TOP_CENTER, 15);
            this.#triggerCustomEvent(VideoCustomEventTypes.PAUSE);
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
     */
    async init(initData, playerMetadata) {
        this.#initData = initData;
        this.#playerMetadata = playerMetadata;
        return this.#bindEvent().then(() => this);
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
    changeVolume(deltaVolume) {
        let video = this.video;
        let volume;
        if (deltaVolume >= 0) volume = Math.min(video.volume + deltaVolume, 1);
        else volume = Math.max(video.volume + deltaVolume, 0);
        video.volume = volume.toFixed(2);
        this.showTooltip((video.muted ? "静音" : "音量") + Math.round(video.volume * 100) + "%");
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
    togglePlay() {
        if (this.playButton) this.playButton.click();
        else this.video.paused ? this.video.play() : this.video.pause();
    }
    toggleMute() {
        if (this.volumeButton) this.volumeButton.click();
        else this.video.muted = !this.video.muted;
    }
    /**
     * Default implementation: Check if body contains class {@link Const.bodyWebFullscreenClassName}.
     * @abstract
     * @returns 
     */
    isVideoInWebFullScreen() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        let rect = this.#initData.container.getBoundingClientRect();
        return document.body.classList.contains(Const.bodyWebFullscreenClassName)
            || (Math.round(rect.width) == vw && Math.round(rect.height) == vh);
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
        this.#triggerCustomEvent(VideoCustomEventTypes.REQUEST_WEBFULLSCREEN);
    }
    exitWebFullscreen() {
        if (this.isVideoInWebFullScreen() && this.webFullscreenButton) this.webFullscreenButton.click();
        else {
            this.container.classList.remove(Const.containerWebFullscreenClassName);
            document.body.classList.remove(Const.bodyWebFullscreenClassName);
            this.#restoreCss();
        }
        this.#triggerCustomEvent(VideoCustomEventTypes.EXIT_WEBFULLSCREEN);
    }
    /**
     * 
     * @returns {boolean} Whether in web full screen.
     */
    toggleWebFullscreen() {
        if (ui.isFullscreen()) {
            this.exitFullscreen();
            this.requestWebFullscreen();
            return true;
        }
        else {
            let prevInWebFull = this.isVideoInWebFullScreen();
            if (this.webFullscreenButton) {
                this.webFullscreenButton.click();
                prevInWebFull ? this.#triggerCustomEvent(VideoCustomEventTypes.EXIT_WEBFULLSCREEN) : this.#triggerCustomEvent(VideoCustomEventTypes.REQUEST_WEBFULLSCREEN);
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
    exitFullscreen(preferButton = true) {
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
        else return ui.isFullscreen() ? this.exitFullscreen(false) : this.requestFullscreen(false);
    }
    /* #endregion */
}