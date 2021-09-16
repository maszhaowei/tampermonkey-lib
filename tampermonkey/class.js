import { Site } from "../common/class";
import { SiteCategories } from "../common/enum";
/**
 * containerSelector必须是video和controlsSelector的祖先元素,controlsSelector的层级必须比video高
 * @extends Site
 */
export class VideoSite extends Site {
    #containerSelector;
    get containerSelector() { return this.#containerSelector }
    #controlsSelector;
    get controlsSelector() { return this.#controlsSelector }
    #topOverlaySelector;
    get topOverlaySelector() { return this.#topOverlaySelector }
    get currentPageCategory() {
        let siteCategory = super.currentPageCategory;
        if (siteCategory) return siteCategory;
        else if (super.siteCategories && super.siteCategories.includes(SiteCategories.MOVIE)) return SiteCategories.MOVIE;
    }
    /**
     * 
     * @param {Site} site 
     * @param {string} containerSelector 
     * @param {string} controlsSelector 
     * @param {string} [topOverlaySelector] 
     */
    constructor(site, containerSelector, controlsSelector, topOverlaySelector) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
        this.#containerSelector = containerSelector;
        this.#controlsSelector = controlsSelector;
        this.#topOverlaySelector = topOverlaySelector;
    }
}
