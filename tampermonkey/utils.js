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