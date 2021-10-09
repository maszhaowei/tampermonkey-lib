import { util as cutil } from "../common/util";
import { MessageTypes } from "../tampermonkey/enum";
import { util as tutil } from "../tampermonkey/util";
import { v4 as uuidv4 } from 'uuid';
export class PlayerMetadata {
    /**
     * Selector for video container. Must be ancestor of video.
     */
    containerSelector;
    /**
     * Selector for video controls. Should be higher than video in the stacking context.
     */
    controlsSelector;
    /**
     * Selectors that should be on the top of stacking context to avoid being blocked by other elements.
     */
    topElementSelectors;
    playButtonSelector;
    fullscreenButtonSelector;
    webFullscreenButtonSelector;
    volumeButtonSelector;
    /**
     * @param {object} options
     * @param {string} options.containerSelector 
     * @param {string} [options.controlsSelector] 
     * @param {string[]} [options.topElementSelectors] 
     * @param {string} [options.playButtonSelector] 
     * @param {string} [options.volumeButtonSelector] 
     * @param {string} [options.fullscreenButtonSelector] 
     * @param {string} [options.webFullscreenButtonSelector] 
     */
    constructor({ containerSelector, controlsSelector, topElementSelectors = [],
        playButtonSelector, volumeButtonSelector, fullscreenButtonSelector, webFullscreenButtonSelector }) {
        this.containerSelector = containerSelector;
        this.controlsSelector = controlsSelector;
        this.topElementSelectors = topElementSelectors;
        this.playButtonSelector = playButtonSelector;
        this.volumeButtonSelector = volumeButtonSelector;
        this.fullscreenButtonSelector = fullscreenButtonSelector;
        this.webFullscreenButtonSelector = webFullscreenButtonSelector;
    }
    copy() {
        let metadata = new PlayerMetadata({});
        cutil.assignNotEmpty(metadata, [this]);
        return metadata;
    }
}
export class Site {
    id;
    #uuid;
    origin;
    hrefRegEx;
    siteCategories;
    subcategories;
    originWhitelist;
    additionalInfo;
    /**
     * @hideconstructor
     * @param {object} options
     * @param {string} options.id 
     * @param {string} options.origin 
     * @param {RegExp} [options.hrefRegEx] 
     * @param {string[]} [options.siteCategories] 
     * @param {string[]} [options.subcategories] 
     * @param {string[]} [options.originWhitelist] 
     * @param {*} [options.additionalInfo]
     */
    constructor({ id, origin, hrefRegEx, siteCategories = [], subcategories = [], originWhitelist = [], additionalInfo = {} }) {
        this.id = id;
        this.#uuid = uuidv4();
        this.origin = origin;
        this.hrefRegEx = hrefRegEx;
        this.siteCategories = siteCategories;
        this.subcategories = subcategories;
        this.originWhitelist = originWhitelist;
        this.additionalInfo = additionalInfo;
    }
    isEmbedded() {
        return self !== top;
    }
    /**
     * 
     * @param {MessageEvent} e 
     * @param {SiteMessageData} e.data
     * @returns {boolean} 
     */
    validateMessage(e) {
        if (!e.data || !e.data.type || !e.data.src || !e.data.tag) return false;
        let origin = e.origin;
        return ((origin === window.location.origin || !!this.originWhitelist?.includes(origin))
            && MessageTypes.test(e.data.type) && (e.data.allowSelf || e.data.tag !== this.#uuid));
    }
    /**
     * 
     * @param {Window} targetWindow 
     * @param {string} targetOrigin 
     * @param {string} messageType - Value of {@link MessageTypes}
     * @param {*} [messageContent] 
     * @param {boolean} [allowSelf] - Whether to allow to send to current site. Default to false.
     * @returns 
     */
    postMessage(targetWindow, targetOrigin, messageType, messageContent, allowSelf = false) {
        let message = { type: messageType, content: messageContent, src: window.location.href, tag: this.#uuid, allowSelf: allowSelf };
        tutil.printSendMessage(targetOrigin, message);
        targetWindow.postMessage(message, targetOrigin);
    }
    /**
     * Check if current site matches this.
     * @returns {boolean} 
     */
    test() {
        if (this.hrefRegEx) return this.hrefRegEx.test(window.location.href);
        else if (this.origin) return this.origin == window.location.origin;
        else return false;
    }
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoSite extends Site {
    #defaultPlayerMetadata;
    get defaultPlayerMetadata() { return this.#defaultPlayerMetadata }
    /**
     * @hideconstructor
     * @param {Site} site 
     * @param {PlayerMetadata} defaultPlayerMetadata 
     */
    constructor(site, defaultPlayerMetadata) {
        super({
            id: site.id, origin: site.origin, hrefRegEx: site.hrefRegEx,
            siteCategories: site.siteCategories, subcategories: site.subcategories,
            originWhitelist: site.originWhitelist, additionalInfo: site.additionalInfo
        });
        this.#defaultPlayerMetadata = defaultPlayerMetadata;
    }
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoPortalSite extends Site {
    additionalInfo;
    /**
     * @hideconstructor
     * @param {Site} site 
     * @param {*} [additionalInfo]
     */
    constructor(site, additionalInfo = {}) {
        super({
            id: site.id, origin: site.origin, hrefRegEx: site.hrefRegEx,
            siteCategories: site.siteCategories, subcategories: site.subcategories,
            originWhitelist: site.originWhitelist, additionalInfo: site.additionalInfo
        });
        this.additionalInfo = additionalInfo;
    }
}