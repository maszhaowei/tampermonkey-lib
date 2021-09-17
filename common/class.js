/**
 * @enum {KeyboardKeyCode}
 */
export class KeyboardKeyCode {
    /** @readonly */
    code;
    /** @readonly */
    key;
    /**
     * 
     * @param {string} code 
     * @param {string} key 
     */
    constructor(code, key) {
        this.code = code;
        this.key = key;
    }
}
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
     * Check if {targetOrigin} is allowed to act as the origin of Window.postMessage.
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
        if(this.#hrefRegEx) return this.#hrefRegEx.test(window.location.href);
        else if(this.#origin) return this.#origin == window.location.origin;
    }
}