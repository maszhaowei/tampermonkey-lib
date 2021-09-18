import { Site } from "../common/class";
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoSite extends Site {
    #parent;
    get parent() { return this.#parent }
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
    /**
     * 
     * @param {Site} site 
     * @param {string} containerSelector 
     * @param {string} [controlsSelector] 
     * @param {string[]} [topElementSelectors] 
     */
    constructor(site, containerSelector, controlsSelector, topElementSelectors) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
        this.#parent = site;
        this.#containerSelector = containerSelector;
        this.#controlsSelector = controlsSelector;
        this.#topElementSelectors = topElementSelectors;
    }
}