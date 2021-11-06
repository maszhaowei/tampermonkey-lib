import { util as cutil } from "../common/util";
import { UUID } from "../common/utils";
import { MessageTypes } from "../tampermonkey/enum";
import { util as tutil } from "../tampermonkey/util";
export class PlayerMetadata {
    /**
     * Selector for video container. Must be ancestor of video.
     */
    containerSelector;
    /**
     * Selector for video controls.Must be sibling of video's ancestor.
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
    baseSiteId;
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
     * @param {string} options.baseSiteId 
     * @param {string} options.origin 
     * @param {RegExp} [options.hrefRegEx] 
     * @param {string[]} [options.siteCategories] 
     * @param {string[]} [options.subcategories] 
     * @param {string[]} [options.originWhitelist] 
     * @param {*} [options.additionalInfo]
     */
    constructor({ id, baseSiteId, origin, hrefRegEx, siteCategories = [], subcategories = [], originWhitelist = [], additionalInfo = {} }) {
        this.id = id;
        this.baseSiteId = baseSiteId;
        this.#uuid = UUID.v4();
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
    isBaseSite() {
        return this.baseSiteId === this.id;
    }
    /**
     * @typedef {object} SiteMessageData
     * @property {string} SiteMessageData.type
     * @property {*} SiteMessageData.content
     * @property {string} SiteMessageData.src
     * @property {string} SiteMessageData.tag
     * @property {boolean} SiteMessageData.allowSelf
     */
    /**
     * Validate if {@link e} is from a valid script of another {@link Site}.
     * @param {MessageEvent<SiteMessageData>} e 
     * @returns {boolean} 
     */
    validateMessage(e) {
        let data = e.data;
        if (!data || !data.type || !data.src || !data.tag) return false;
        let origin = e.origin;
        return ((origin === window.location.origin || !!this.originWhitelist?.includes(origin))
            && MessageTypes.test(data.type) && (data.allowSelf || data.tag !== this.#uuid));
    }
    /**
     * 
     * @param {Window} targetWindow 
     * @param {string} targetOrigin 
     * @param {string} messageType - Value of {@link MessageTypes}.
     * @param {*} [messageContent] 
     * @param {boolean} [allowSelf] - Whether to allow to send to current {@link Site}. Default to false.
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
            id: site.id, baseSiteId: site.baseSiteId,
            origin: site.origin, hrefRegEx: site.hrefRegEx,
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
            id: site.id, baseSiteId: site.baseSiteId,
            origin: site.origin, hrefRegEx: site.hrefRegEx,
            siteCategories: site.siteCategories, subcategories: site.subcategories,
            originWhitelist: site.originWhitelist, additionalInfo: site.additionalInfo
        });
        this.additionalInfo = additionalInfo;
    }
}