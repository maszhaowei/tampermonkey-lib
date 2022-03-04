import { ApplyMethodSignature, LooseMap, Couple } from "../common/class";
import { GlobalEvents } from "../common/enum";
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
/**
 * 
 * @param {string} cssProperty 
 */
function cssPropertyToJSNotation(cssProperty) {
    let jsCss = '';
    for (let i = 0; i < cssProperty.length; i++) {
        if (cssProperty.charAt(i) === '-') {
            if (i + 1 < cssProperty.length) {
                jsCss += cssProperty.charAt(i + 1).toUpperCase();
                i++;
            }
        }
        else jsCss += cssProperty.charAt(i);
    }
    return jsCss;
}
export class CssCacheHelper {
    /** @type {LooseMap<Couple<HTMLElement,string>,string>} */
    static #cssCacheMap = new LooseMap();
    /**
     * 
     * @param {HTMLElement} element 
     * @param {string} cssProperty - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
     */
    static save(element, cssProperty) {
        this.#cssCacheMap.set(new Couple(element, cssProperty), window.getComputedStyle(element).getPropertyValue(cssProperty));
    }
    /**
     * 
     * @param {HTMLElement} element 
     * @param {string} cssProperty 
     * @param {boolean} [clearAfterRestore] - Default to false.
     * @returns 
     */
    static restore(element, cssProperty, clearAfterRestore = false) {
        let mapKey = new Couple(element, cssProperty);
        if (!this.#cssCacheMap.has(mapKey)) return false;
        element.style[cssPropertyToJSNotation(cssProperty)] = this.#cssCacheMap.get(mapKey);
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
        return expireDays !== 0 ? (Date.now() + expireDays * 24 * 3600 * 1000) : 0;
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
        if (expireDays === undefined) {
            /** @type {StorageObj} */
            let storageObj = GM_getValue(name);
            expireDays = storageObj?.expireDays ?? 30;
        }
        // Use expireDays for renewal.
        let expireTime = this.#calExpireTime(expireDays);
        GM_setValue(name, { value: value, expireDays: expireDays, expireTime: expireTime });
    }
    /**
     * 
     * @param {string} name 
     */
    static deleteValue(name) {
        GM_deleteValue(name);
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
     * @param {Element|Document} context
     * @param {string} selector
     * @param {string[]} remainingSelectors 
     */
    static #chainArrive(context, selector, remainingSelectors) {
        return new Promise((resolve, reject) => {
            /** @type {Promise<Document|Element>} */
            let pContext = new Promise(r => {
                if (context instanceof HTMLIFrameElement) {
                    context.addEventListener(GlobalEvents.LOAD, () => r(context.contentDocument));
                }
                else r(context);
            });
            pContext.then(context => {
                context.arrive(selector, { existing: true }, (element) => {
                    if (remainingSelectors.length > 0) this.#chainArrive(element, remainingSelectors.shift(), remainingSelectors)
                        .then(result => resolve([element].concat(result)), result => reject(result));
                    else resolve([element]);
                });
            });
        });
    }
    /**
     * 
     * @param {string[]} selectors 
     */
    static chainArrive(selectors = []) {
        if (selectors.length == 0) return Promise.resolve([]);
        let copy = Array.from(selectors);
        return this.#chainArrive(document, copy.shift(), copy);
    }
}