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
     * 视频容器选择器. 必须是video和{@link controlsSelector}的祖先元素.
     */
    get containerSelector() { return this.#containerSelector }
    #controlsSelector;
    /**
     * 视频控件组选择器. 层级必须比video高.
     */
    get controlsSelector() { return this.#controlsSelector }
    #topElementSelectors;
    /**
     * 处于最上方的元素选择器，防止被遮罩遮挡
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