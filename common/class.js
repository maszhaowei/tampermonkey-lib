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
class CacheItem {
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
        this.#args = args || [];
    }
}
export class ObjectCacheHelper {
    #site;
    /** @type {WeakMap<Element, Map<string, CacheItem>>} */
    static #cacheMap = new WeakMap();
    /** @private */
    constructor() { }
    /**
     * 
     * @param {object} obj 
     * @param {string} key 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    static save(obj, key, callback, args) {
        /** @type {Map<string, CacheItem>} */
        let cacheItemMap;
        if (ObjectCacheHelper.#cacheMap.has(obj)) {
            cacheItemMap = ObjectCacheHelper.#cacheMap.get(obj);
        }
        else {
            cacheItemMap = new Map();
            ObjectCacheHelper.#cacheMap.set(obj, cacheItemMap);
        }
        cacheItemMap.set(key, new CacheItem(callback, args));
    }
    /**
     * 
     * @param {object} obj 
     * @param {string} key 
     * @param {boolean} clear - Whether to clear cache map after resotre.
     * @returns {boolean} Whether the specified key exists in cache.
     */
    static restore(obj, key, clear = false) {
        let cacheItemMap = ObjectCacheHelper.#cacheMap.get(obj);
        if (cacheItemMap) {
            let cacheItem = cacheItemMap.get(key);
            if (cacheItem) cacheItem.callback.apply(obj, cacheItem.args);
            if (clear) {
                cacheItemMap.delete(key);
                if (cacheItemMap.size == 0) ObjectCacheHelper.#cacheMap.delete(obj);
            }
            return !!cacheItem;
        }
        else return false;
    }
}