import { MessageTypes } from "../tampermonkey/enum";
import { util as tutil } from "../tampermonkey/util";
export class PlayerMetadata {
    #containerSelector;
    /**
     * Selector for video container. Must be ancestor of video.
     */
    get containerSelector() { return this.#containerSelector }
    #controlsSelector;
    /**
     * Selector for video controls. Should be higher than video in the stacking context.
     */
    get controlsSelector() { return this.#controlsSelector }
    #topElementSelectors;
    /**
     * Selectors that should be on the top of stacking context to avoid being blocked by other elements.
     */
    get topElementSelectors() { return this.#topElementSelectors }
    #playButtonSelector;
    get playButtonSelector() { return this.#playButtonSelector }
    #fullscreenButtonSelector;
    get fullscreenButtonSelector() { return this.#fullscreenButtonSelector }
    #webFullscreenButtonSelector;
    get webFullscreenButtonSelector() { return this.#webFullscreenButtonSelector }
    #volumeButtonSelector;
    get volumeButtonSelector() { return this.#volumeButtonSelector }
    /**
     * 
     * @param {string} containerSelector 
     * @param {string} [controlsSelector] 
     * @param {string[]} [topElementSelectors] 
     * @param {string} [playButtonSelector] 
     * @param {string} [volumeButtonSelector] 
     * @param {string} [fullscreenButtonSelector] 
     * @param {string} [webFullscreenButtonSelector] 
     */
    constructor(containerSelector, controlsSelector, topElementSelectors,
        playButtonSelector, volumeButtonSelector, fullscreenButtonSelector, webFullscreenButtonSelector) {
        this.#containerSelector = containerSelector;
        this.#controlsSelector = controlsSelector;
        this.#topElementSelectors = topElementSelectors;
        this.#playButtonSelector = playButtonSelector;
        this.#volumeButtonSelector = volumeButtonSelector;
        this.#fullscreenButtonSelector = fullscreenButtonSelector;
        this.#webFullscreenButtonSelector = webFullscreenButtonSelector;
    }
}
export class Site {
    #id;
    get id() { return this.#id }
    #origin;
    get origin() { return this.#origin }
    #hrefRegEx;
    get hrefRegEx() { return this.#hrefRegEx }
    #siteCategories;
    get siteCategories() { return this.#siteCategories }
    #subcategories;
    get subcategories() { return this.#subcategories }
    #originWhitelist;
    get originWhitelist() { return this.#originWhitelist }
    /**
     * @hideconstructor
     * @param {object} options
     * @param {string} options.id 
     * @param {string} options.origin 
     * @param {RegExp} [options.hrefRegEx] 
     * @param {string[]} [options.siteCategories] 
     * @param {string[]} [options.subcategories] 
     * @param {string[]} [options.originWhitelist] 
     */
    constructor({ id, origin, hrefRegEx, siteCategories = [], subcategories = [], originWhitelist = [] }) {
        this.#id = id;
        this.#origin = origin;
        this.#hrefRegEx = hrefRegEx;
        this.#siteCategories = siteCategories;
        this.#subcategories = subcategories;
        this.#originWhitelist = originWhitelist;
    }
    isEmbedded() {
        return self !== top;
    }
    /**
     * Check if {@link targetOrigin} is allowed to act as the origin of Window.postMessage and send message to {@link this}.
     * @param {string} targetOrigin 
     * @returns {boolean} 
     */
    isMessageOriginAllowed(targetOrigin) {
        if (!targetOrigin) return false;
        if (targetOrigin === window.location.origin) return true;
        return !!this.#originWhitelist?.includes(targetOrigin);
    }
    /**
     * 
     * @param {Window} targetWindow 
     * @param {string} messageType 
     * @param {*} [messageContent] 
     * @param {string} targetOrigin 
     * @param {boolean} allowSelf - Whether allow post message to current window. Default to false.
     * @returns 
     */
    postMessage(targetWindow, messageType, messageContent, targetOrigin, allowSelf = false) {
        if (!messageType || (!allowSelf && targetWindow === self)) return;
        let message = { type: messageType, content: messageContent, src: window.location.href };
        tutil.printSendMessage(targetOrigin, message);
        targetWindow.postMessage(message, targetOrigin);
    }
    /**
     * Check if current site matches this.
     * @returns {boolean} 
     */
    test() {
        if (this.#hrefRegEx) return this.#hrefRegEx.test(window.location.href);
        else if (this.#origin) return this.#origin == window.location.origin;
    }
    /**
     * 
     * @param {MessageEvent} e 
     * @returns 
     */
    isFromTampermonkey(e) {
        return e.data && MessageTypes.test(e.data.type);
    }
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoSite extends Site {
    #parent;
    get parent() { return this.#parent }
    #defaultPlayerMetadata;
    get defaultPlayerMetadata() { return this.#defaultPlayerMetadata }
    /**
     * @hideconstructor
     * @param {Site} site 
     * @param {PlayerMetadata} defaultPlayerMetadata 
     */
    constructor(site, defaultPlayerMetadata) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
        this.#parent = site;
        this.#defaultPlayerMetadata = defaultPlayerMetadata;
    }
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoPortalSite extends Site {
    /**
     * @hideconstructor
     * @param {Site} site 
     */
    constructor(site) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
    }
}