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
class CssCacheItem {
    #callback;
    get callback() { return this.#callback }
    #args;
    get args() { return this.#args }
    /**
     * 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    constructor(callback, args) {
        this.#callback = callback;
        this.#args = args;
    }
}
export class CssCache {
    #site;
    /** @type {WeakMap<Element, Map<string, CssCacheItem>>} */
    static #cssMap = new WeakMap();
    /** @private */
    constructor() { }
    /**
     * 
     * @param {Element} element 
     * @param {string} cssName 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    static saveCss(element, cssName, callback, args) {
        /** @type {Map<string, CssCacheItem>} */
        let cssCacheMap;
        if (CssCache.#cssMap.has(element)) {
            cssCacheMap = CssCache.#cssMap.get(element);
        }
        else {
            cssCacheMap = new Map();
            CssCache.#cssMap.set(element, cssCacheMap);
        }
        cssCacheMap.set(cssName, new CssCacheItem(callback, args));
    }
    /**
     * 
     * @param {Element} element 
     * @param {string} cssName 
     */
    static restoreCss(element, cssName) {
        let cssCacheMap = CssCache.#cssMap.get(element);
        if (cssCacheMap) {
            let cacheItem = cssCacheMap.get(cssName);
            if (cacheItem) cacheItem.callback.apply(cacheItem.context || element, cacheItem.args);
        }
    }
}