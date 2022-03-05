import { util as cutil } from "../common/util";
import { UUID } from "../common/utils";
import { MessageTypes } from "../tampermonkey/enum";
import { util as tutil } from "../tampermonkey/util";

/**
 * @enum {string}
 */
export const _VideoCategories = {
    GAMING: "Gaming",
    JAV: "JAV",
    TV_SERIES: "TV Series",
    MOVIE: "Movie",
    TRAILERS: "Trailers",
    PORNOGRAPHIC_FILM: "Pornographic Film"
};
export class PlayerMetadata {
    /**
     * Selector for video container. Preferably the closest parent of video.
     */
    containerSelector;
    /**
     * Selector for video controls. Must be sibling of video's ancestor.
     */
    controlsSelector;
    /**
     * Selectors whose events shouldn't be delegated.
     */
    delegateIgnoreSelectors;
    playButtonSelector;
    fullscreenButtonSelector;
    webFullscreenButtonSelector;
    volumeButtonSelector;
    /**
     * <selector, event types>. Use this if not all of the event types of selector should be delegated. 
     */
    delegateIgnoreMap;
    /**
     * @param {object} options
     * @param {string} options.containerSelector 
     * @param {string} [options.controlsSelector] 
     * @param {string[]} [options.delegateIgnoreSelectors] 
     * @param {string} [options.playButtonSelector] 
     * @param {string} [options.volumeButtonSelector] 
     * @param {string} [options.fullscreenButtonSelector] 
     * @param {string} [options.webFullscreenButtonSelector] 
     * @param {Map<string,string[]>} [options.delegateIgnoreMap] 
     */
    constructor({ containerSelector, controlsSelector, delegateIgnoreSelectors = [],
        playButtonSelector, volumeButtonSelector, fullscreenButtonSelector, webFullscreenButtonSelector, delegateIgnoreMap = new Map() }) {
        this.containerSelector = containerSelector;
        this.controlsSelector = controlsSelector;
        this.delegateIgnoreSelectors = delegateIgnoreSelectors;
        this.playButtonSelector = playButtonSelector;
        this.volumeButtonSelector = volumeButtonSelector;
        this.fullscreenButtonSelector = fullscreenButtonSelector;
        this.webFullscreenButtonSelector = webFullscreenButtonSelector;
        this.delegateIgnoreMap = delegateIgnoreMap;
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
    get uuid() { return this.#uuid }
    origin;
    hrefRegEx;
    siteCategories;
    originWhitelist;
    additionalInfo;
    /**
     * [origin] and [hrefRegEx] can't both be empty. [hrefRegex] has higher priority than origin in {@link test} function.
     * @hideconstructor
     * @param {object} options
     * @param {string} options.id 
     * @param {string} options.baseSiteId 
     * @param {string} [options.origin] 
     * @param {RegExp} [options.hrefRegEx] 
     * @param {string[]} [options.siteCategories] 
     * @param {string[]} [options.originWhitelist] 
     * @param {*} [options.additionalInfo]
     */
    constructor({ id, baseSiteId, origin, hrefRegEx, siteCategories = [], originWhitelist = [], additionalInfo = {} }) {
        this.id = id;
        this.baseSiteId = baseSiteId;
        this.#uuid = UUID.v4();
        this.origin = origin;
        this.hrefRegEx = hrefRegEx;
        this.siteCategories = siteCategories;
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
     * @property {*} [SiteMessageData.content]
     * @property {string} SiteMessageData.src
     * @property {string} SiteMessageData.srcSiteTag
     * @property {string} [SiteMessageData.targetSiteTag]
     */
    /**
     * Validate if {@link e} is from a valid script of another {@link Site}.
     * @param {MessageEvent<SiteMessageData>} e 
     * @returns {boolean} 
     */
    validateMessage(e) {
        let data = e.data;
        if (!data || !data.type || !data.src || !UUID.validate(data.srcSiteTag)) return false;
        let srcOrigin = e.origin;
        return (srcOrigin === window.location.origin || !!this.originWhitelist?.includes(srcOrigin))
            && (!data.targetSiteTag || data.targetSiteTag == this.#uuid);
    }
    /**
     * 
     * @param {Window} targetWindow 
     * @param {string} targetOrigin 
     * @param {object} MessageDataOptions
     * @param {string} MessageDataOptions.type - Value of {@link MessageTypes}.
     * @param {*} [MessageDataOptions.content] 
     * @param {string} [MessageDataOptions.targetSiteTag]
     * @returns 
     */
    postMessage(targetWindow, targetOrigin, { type, content, targetSiteTag }) {
        /** @type {SiteMessageData} */
        let message = {
            type: type, content: content, src: window.location.href,
            srcSiteTag: this.#uuid, targetSiteTag: targetSiteTag
        };
        tutil.printSendMessage(targetOrigin, message);
        targetWindow.postMessage(message, targetOrigin);
    }
    /**
     * Check if current site matches this window.
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
    videoCategories;
    /**
     * @param {object} options
     * @param {string} options.id 
     * @param {string} options.baseSiteId 
     * @param {RegExp} options.hrefRegEx 
     * @param {PlayerMetadata} options.defaultPlayerMetadata 
     * @param {string[]} [options.videoCategories] 
     * @param {string[]} [options.originWhitelist] 
     */
    constructor({ id, baseSiteId, hrefRegEx, defaultPlayerMetadata, videoCategories = [], originWhitelist = [] }) {
        super({ id: id, baseSiteId: baseSiteId, hrefRegEx: hrefRegEx, originWhitelist: originWhitelist });
        this.#defaultPlayerMetadata = defaultPlayerMetadata;
        this.videoCategories = videoCategories;
    }
    /**
     * @abstract
     * @returns 
     */
    getCurrentPageCategories() {
        return this.videoCategories;
    }
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoPortalSite extends Site {
    videoCategories;
    pathIframeSelectors;
    additionalInfo;
    /**
     * @param {object} options
     * @param {string} options.id 
     * @param {string} options.baseSiteId 
     * @param {RegExp} [options.hrefRegEx] 
     * @param {string[]} [options.videoCategories] 
     * @param {string[]} [options.originWhitelist] 
     * @param {string[]} [options.pathIframeSelectors] 
     * @param {*} [options.additionalInfo] 
     */
    constructor({ id, baseSiteId, hrefRegEx, videoCategories = [], originWhitelist = [], pathIframeSelectors = [], additionalInfo = {} }) {
        super({ id: id, baseSiteId: baseSiteId, hrefRegEx: hrefRegEx, originWhitelist: originWhitelist });
        this.videoCategories = videoCategories;
        this.pathIframeSelectors = pathIframeSelectors;
        this.additionalInfo = additionalInfo;
    }
    /**
     * @abstract
     * @returns 
     */
    getCurrentPageCategories() {
        return this.videoCategories;
    }
}

export class SearchSite extends Site {
    #searchFieldSelector;
    /**
     * @returns {string|undefined}
     */
    get searchKeyword() {
        if (this.#searchFieldSelector) {
            let searchField = document.querySelector(this.#searchFieldSelector);
            return searchField.value || searchField.textContent;
        }
        else {
            let urlMatch = window.location.href.match(this.hrefRegEx);
            if (urlMatch) return urlMatch[1];
        }
    }
    /**
     * 
     * @param {string} id 
     * @param {string} baseSiteId 
     * @param {RegExp} hrefRegEx 
     * @param {string} [searchFieldSelector] 
     */
    constructor(id, baseSiteId, hrefRegEx, searchFieldSelector) {
        super({ id: id, baseSiteId: baseSiteId, hrefRegEx: hrefRegEx });
        this.#searchFieldSelector = searchFieldSelector;
    }
}