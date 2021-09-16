/** typedef SiteCategory
 * @typedef {object} SiteCategory 
 * @property {string} categoryName 
 * @property {RegExp} [titleRegEx] 
 */
/** typedef Site
 * @typedef {object} Site
 * @property {string} id 
 * @property {string} origin
 * @property {RegExp} hrefRegEx
 * @property {SiteCategory[]} siteCategories
 * @property {SiteCategory} currentPageCategory
 * @property {string[]} originWhitelist
 * @property {function} isMessageOriginAllowed
 */
export class Site {
    #id;
    get id() { return this.#id }
    #origin;
    get origin() { return this.#origin }
    #hrefRegEx;
    get hrefRegEx() { return this.#hrefRegEx }
    #siteCategories;
    get siteCategories() { return this.#siteCategories }
    get currentPageCategory() {
        let siteCategories = this.#siteCategories;
        if (!Array.isArray(siteCategories)) return;
        else if (siteCategories.length == 1) return siteCategories[0];
        else {
            for (let siteCategory of siteCategories) {
                if (siteCategory.titleRegEx && siteCategory.titleRegEx.test(document.title)) return siteCategory;
            }
        }
    }
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
        return (this.#hrefRegEx && this.#hrefRegEx.test(window.location.href)) || (this.#origin && this.#origin == window.location.origin);
    }
}