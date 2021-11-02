import { ApplyMethodSignature, Tuple, LooseMap } from "../common/class";
import { util } from "./util";
export class CssCacheHelper {
    static #cacheMap = new LooseMap();
    /** 
     * @private
     * @hideconstructor
     */
    constructor() { }
    /**
     * 
     * @param {Element} element 
     * @param {string} cssKey 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    static save(element, cssKey, callback, args) {
        this.#cacheMap.set(new Tuple(element, cssKey), new ApplyMethodSignature(callback, element, args));
    }
    /**
     * 
     * @param {Element} element 
     * @param {string} cssKey 
     * @param {boolean} clearAfterRestore
     * @returns {boolean} Whether the specified obj and key exists in cache.
     */
    static restore(element, cssKey, clearAfterRestore = false) {
        let t = new Tuple(element, cssKey);
        /** @type ApplyMethodSignature */
        let sig = this.#cacheMap.get(t);
        if (sig) {
            sig.fn.apply(sig.context, sig.args);
            if (clearAfterRestore) this.#cacheMap.delete(t);
            return true;
        }
        return false;
    }
}
/**
 * @typedef {object} StorageObj
 * @property {any} value
 * @property {number} expireDays
 * @property {number} expireTime
 * @property {boolean} autoRenew
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
     * Dependency: GM_getValue.
     * @param {string} name 
     * @param {*} [defaultValue] 
     * @returns 
     */
    static getValue(name, defaultValue) {
        let storageObj = GM_getValue(name, defaultValue);
        if (this.#isSupported(storageObj)) return storageObj.value;
        else return storageObj;
    }
    /**
     * Dependency: GM_setValue.
     * @param {string} name 
     * @param {*} value 
     * @param {number} [expireDays] Expiration timeout in days. Default to 30. Set to 0 to never expire.
     * @param {boolen} [autoRenew] Auto renew this name. Default to true.
     */
    static setValue(name, value, expireDays = 30, autoRenew = true) {
        GM_setValue(name, { value: value, expireDays: expireDays, expireTime: this.#calExpireTime(expireDays), autoRenew: autoRenew });
    }
    /**
     * Dependency: GM_listValues, GM_getValue, GM_setValue, GM_deleteValue.
     */
    static clearExpiredValuesAndRenew() {
        let names = GM_listValues();
        let count = 0;
        names.forEach((name) => {
            /** @type {StorageObj} */
            let storageObj = GM_getValue(name);
            if (!this.#isSupported(storageObj)) return;
            let expireTime = storageObj.expireTime;
            if (expireTime == 0) return;
            let autoRenew = storageObj.autoRenew;
            if (autoRenew) this.setValue(name, storageObj.value, storageObj.expireDays, autoRenew);
            else if (Date.now() > expireTime) {
                GM_deleteValue(name);
                count++;
            }
        });
        util.debug(`Deleted ${count} records from storage.`)
    }
}