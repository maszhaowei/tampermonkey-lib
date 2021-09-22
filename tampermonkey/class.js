import { ApplyMethodSignature, Tuple, LooseMap } from "../common/class";
export class CssCacheHelper {
    static #cacheMap = new LooseMap();
    /** 
     * @private
     * @hideconstructor
     */
    constructor() { }
    /**
     * 
     * @param {object} obj 
     * @param {string} key 
     * @param {function} callback 
     * @param {any[]} [args] 
     */
    static save(obj, key, callback, args) {
        this.#cacheMap.set(new Tuple(obj, key), new ApplyMethodSignature(callback, obj, args));
    }
    /**
     * 
     * @param {object} obj 
     * @param {string} key 
     * @param {boolean} clearAfterRestore
     * @returns {boolean} Whether the specified obj and key exists in cache.
     */
    static restore(obj, key, clearAfterRestore = false) {
        let t = new Tuple(obj, key);
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