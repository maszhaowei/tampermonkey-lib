export class SiteCategory {
    /** @readonly */
    categoryName;
    /** @readonly */
    titleRegEx;
    /**
     * 
     * @param {string} categoryName 
     * @param {RegExp} [titleRegEx] 
     */
    constructor(categoryName, titleRegEx) {
        this.categoryName = categoryName;
        this.titleRegEx = titleRegEx;
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
    #originWhitelist;
    get originWhitelist() { return this.#originWhitelist }
    /**
     * 
     * @param {string} id 
     * @param {string} origin 
     * @param {RegExp} [hrefRegEx] 
     * @param {SiteCategory[]} siteCategories 
     * @param {string[]} [originWhitelist] 
     */
    constructor(id, origin, hrefRegEx, siteCategories, originWhitelist = []) {
        this.#id = id;
        this.#origin = origin;
        this.#hrefRegEx = hrefRegEx;
        this.#siteCategories = siteCategories;
        this.#originWhitelist = originWhitelist;
    }
    /**
     * Check if {@link targetOrigin} is allowed to act as the origin of Window.postMessage.
     * @param {string} targetOrigin 
     * @returns {boolean} 
     */
    isMessageOriginAllowed(targetOrigin) {
        if (!targetOrigin) return false;
        if (targetOrigin === window.location.origin) return true;
        return this.#originWhitelist.includes(targetOrigin);
    }
    /**
     * Check if current site matches this.
     * @returns {boolean} 
     */
    test() {
        if (this.#hrefRegEx) return this.#hrefRegEx.test(window.location.href);
        else if (this.#origin) return this.#origin == window.location.origin;
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
     * 
     * @param {Site} site 
     * @param {PlayerMetadata} defaultPlayerMetadata 
     */
    constructor(site, defaultPlayerMetadata) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
        this.#parent = site;
        this.#defaultPlayerMetadata = defaultPlayerMetadata;
    }
}
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