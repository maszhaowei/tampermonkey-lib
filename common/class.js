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
    #cssMap = new WeakMap();
    /** @private */
    constructor() { }
    static #instance = new CssCache();
    static getInstance() {
        return this.#instance;
    }
    /**
     * 
     * @param {Element} element 
     * @param {string} cssName 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    saveCss(element, cssName, callback, args) {
        /** @type {Map<string, CssCacheItem>} */
        let cssCacheMap;
        if (this.#cssMap.has(element)) {
            cssCacheMap = this.#cssMap.get(element);
        }
        else {
            cssCacheMap = new Map();
            this.#cssMap.set(element, cssCacheMap);
        }
        cssCacheMap.set(cssName, new CssCacheItem(callback, args));
    }
    /**
     * 
     * @param {Element} element 
     * @param {string} cssName 
     */
    restoreCss(element, cssName) {
        let cssCacheMap = this.#cssMap.get(element);
        if (cssCacheMap) {
            let cacheItem = cssCacheMap.get(cssName);
            if (cacheItem) cacheItem.callback.call(cacheItem.context || element, cacheItem.args);
        }
    }
}

export class ApplyMethodSignature {
    contextSelector;
    fn;
    args;
    /**
     * 
     * @param {string} contextSelector
     * @param {function} fn 
     * @param {any[]} [args] 
     */
    constructor(contextSelector, fn, args) {
        this.contextSelector = contextSelector;
        this.fn = fn;
        this.args = args || [];
    }
}