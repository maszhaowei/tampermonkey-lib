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
        let expireTime = this.#calExpireTime(expireDays);
        GM_setValue(name, { value: value, expireDays: expireDays, expireTime: expireTime });
    }
    static clearExpiredValues() {
        let names = GM_listValues();
        let count = 0;
        names.forEach((name) => {
            /** @type {StorageObj} */
            let storageObj = GM_getValue(name);
            if (!this.#isSupported(storageObj)) return;
            let expireTime = storageObj.expireTime;
            if (expireTime == 0) return;
            if (Date.now() > expireTime) {
                GM_deleteValue(name);
                count++;
            }
        });
        util.debug(`Deleted ${count} records from storage.`)
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