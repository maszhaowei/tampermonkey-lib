import { ApplyMethodSignature, LooseMap, Couple } from "../common/class";
import { util } from "./util";
export class ObjectCacheHelper {
    /** @type {LooseMap<Couple<object,string>,ApplyMethodSignature>} */
    static #callbackCacheMap = new LooseMap();
    /**
     * 
     * @param {Element} obj 
     * @param {string} key 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    static saveCallback(obj, key, callback, args) {
        this.#callbackCacheMap.set(new Couple(obj, key), new ApplyMethodSignature(callback, obj, args));
    }
    /**
     * 
     * @param {object} obj 
     * @param {string} key 
     * @param {boolean} [clearAfterRestore] - Default to false.
     * @returns {boolean} Whether the specified obj and key exists in cache.
     */
    static restoreCallback(obj, key, clearAfterRestore = false) {
        let t = new Couple(obj, key);
        let sig = this.#callbackCacheMap.get(t);
        if (!sig) return false;
        sig.fn.apply(sig.thisArg, sig.args);
        if (clearAfterRestore) this.#callbackCacheMap.delete(t);
        return true;
    }
}
export class CssCacheHelper {
    /** @type {LooseMap<Couple<HTMLElement,string>,string>} */
    static #cssCacheMap = new LooseMap();
    /**
     * 
     * @param {HTMLElement} element 
     * @param {string} cssKey - Equivalent DOM notation of a css property. @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
     * @param {string} [replaceCssValue]
     */
    static save(element, cssKey, replaceCssValue) {
        this.#cssCacheMap.set(new Couple(element, cssKey), window.getComputedStyle(element).getPropertyValue(cssKey));
        if (replaceCssValue !== undefined) element.style[cssKey] = replaceCssValue;
    }
    /**
     * 
     * @param {HTMLElement} element 
     * @param {string} cssKey 
     * @param {boolean} [clearAfterRestore] - Default to false.
     * @returns 
     */
    static restore(element, cssKey, clearAfterRestore = false) {
        let mapKey = new Couple(element, cssKey);
        if (!this.#cssCacheMap.has(mapKey)) return false;
        element.style[cssKey] = this.#cssCacheMap.get(mapKey);
        if (clearAfterRestore) this.#cssCacheMap.delete(mapKey);
        return true;
    }
}
/**
 * @typedef {object} StorageObj
 * @property {any} value
 * @property {number} expireDays
 * @property {number} expireTime
 * @property {boolean} autoRenew
 */
/**
 * Dependency: GM_listValues, GM_getValue, GM_setValue, GM_deleteValue.
 */
export class GMStorageHelper {
    /**
     * 
     * @param {StorageObj} storageObj 
     * @returns 
     */
    static #isSupported(storageObj) {
        return storageObj && storageObj.expireTime !== undefined;
    }
    static #calExpireTime(expireDays) {
        return expireDays > 0 ? (Date.now() + expireDays * 24 * 3600 * 1000) : 0;
    }
    /**
     * Will auto renew.
     * @param {string} name 
     * @param {*} [defaultValue] 
     * @returns 
     */
    static getValue(name, defaultValue) {
        /** @type {StorageObj} */
        let storageObj = GM_getValue(name, defaultValue);
        if (this.#isSupported(storageObj)) {
            // Use expireDays for renewal.
            this.setValue(name, storageObj.value, storageObj.expireDays);
            return storageObj.value;
        }
        else return storageObj;
    }
    /**
     * Will auto renew.
     * @param {string} name 
     * @param {*} value 
     * @param {number} [expireDays] Expiration timeout in days. Default to previously stored value or 30. Set to 0 to never expire.
     */
    static setValue(name, value, expireDays) {
        /** @type {StorageObj} */
        let storageObj = GM_getValue(name);
        expireDays = expireDays ?? storageObj?.expireDays ?? 30;
        // Use expireDays for renewal.
        let expireTime = this.#calExpireTime(expireDays);
        GM_setValue(name, { value: value, expireDays: expireDays, expireTime: expireTime });
    }
    static clearExpiredValues() {
        let names = GM_listValues();
        let count = 0;
        let now = Date.now();
        names.forEach((name) => {
            /** @type {StorageObj} */
            let storageObj = GM_getValue(name);
            if (!this.#isSupported(storageObj)) return;
            let expireTime = storageObj.expireTime;
            if (expireTime == 0) return;
            if (now > expireTime) {
                GM_deleteValue(name);
                count++;
            }
        });
        util.debug(`Deleted ${count} expired records of total ${names.length} records from storage.`)
    }
    /**
     * Dependency: GM_listValues, GM_deleteValue.
     */
    static clearAll() {
        let names = GM_listValues();
        let count = 0;
        names.forEach((name) => {
            GM_deleteValue(name);
            count++;
        });
        util.debug(`Deleted ${count} records from storage.`)
    }
}

export class FutureHelper {
    /**
     * 
     * @param {string} selector 
     * @returns {Promise<Element>}
     */
    static arrive(selector) {
        return new Promise((resolve) => {
            document.arrive(selector, { existing: true }, function () {
                resolve(this);
            });
        })
    }
}