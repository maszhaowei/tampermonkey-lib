import { Site } from "../common/class";
import { SiteCategories } from "../common/enum";
/**
 * containerSelector必须是video和controlsSelector的祖先元素,controlsSelector的层级必须比video高
 * @extends Site
 * {@link Site} 
 */
export class VideoSite extends Site {
    #containerSelector;
    /**
     * 视频容器选择器
     */
    get containerSelector() { return this.#containerSelector }
    #controlsSelector;
    /**
     * 视频控件组选择器
     */
    get controlsSelector() { return this.#controlsSelector }
    #topElementSelectors;
    /**
     * 处于最上方的元素选择器，防止被遮罩遮挡
     */
    get topElementSelectors() { return this.#topElementSelectors }
    /**
     * {@link Site.currentPageCategory}
    */
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
     * @param {string[]} [topElementSelectors] 
     */
    constructor(site, containerSelector, controlsSelector, topElementSelectors) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
        this.#containerSelector = containerSelector;
        this.#controlsSelector = controlsSelector;
        this.#topElementSelectors = topElementSelectors;
    }
}
