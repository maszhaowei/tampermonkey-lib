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

export class GMStorageHelper {
    /**
     * 
     * @param {string} name 
     * @param {*} [defaultValue] 
     * @returns 
     */
    static getValue(name, defaultValue) {
        let valueObj = GM_getValue(name, defaultValue);
        if (valueObj && valueObj.value && valueObj.expireTime) return valueObj.value;
        else return valueObj;
    }
    /**
     * 
     * @param {string} name 
     * @param {*} value 
     * @param {number} [expireDays] Expiration timeout in days. Default to 30. Set to 0 to never expire.
     */
    static setValue(name, value, expireDays = 30) {
        let expireTime = expireDays > 0 ? (Date.now() + expireDays * 24 * 3600 * 1000) : 0;
        GM_setValue(name, { value: value, expireTime: expireTime });
    }
    /**
     * Dependency: GM_listValues, GM_deleteValue.
     */
    static clearExpiredValues() {
        let names = GM_listValues();
        let count = 0;
        names.forEach((name) => {
            let valueObj = GM_getValue(name);
            let expireTime = valueObj.expireTime;
            if (!expireTime) return;
            if (Date.now() > expireTime) {
                GM_deleteValue(name);
                count++;
            }
        });
        util.debug(`Deleted ${count} records from storage.`)
    }
}