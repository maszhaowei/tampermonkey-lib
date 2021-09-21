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

export class TooltipOption {
    name = 'player-tooltip';
    /** Target element to display the tooltip. */
    target = document.body;
    type = 'info';
    /** @type {string} */
    position;
    /** Additional left offset. */
    left = 0;
    /** Additional top offset. */
    top = 0;
    /** Inside margin to the border of target. */
    margin = 0;
    arrow = false;
    changeMode = 0;
    singleMode = true;
    animation = true;
    supportShow = true;
    autoShow = true;
    autoHide = true;
    hideTime = 1000;
    autoRemove = true;
    game = false;
    /** @callback */
    callback;
    /** @callback */
    onShow;
    /** @callback */
    onHide;
    /**
     * 
     * @param {string} text 
     * @param {Element} [target] - Target element to display the tooltip. Default to document.body.
     * @param {string} [position] - Position to display {@link text}. Default to "center-center". See TooltipPosition for value range.
     * @param {number} [margin] - Inside margin to the border of {@link target}. Default to 0.
     */
    constructor(text, target, position, margin) {
        this.text = text;
        this.target = target || document.body;
        /** @todo TooltipPosition.CENTER_CENTER will cause circular dependency */
        this.position = position || 'center-center';
        this.margin = margin ?? 0;
    }
}

export class ApplyMethodSignature {
    context;
    fn;
    args;
    /**
     * 
     * @param {function} fn 
     * @param {*} [context]
     * @param {any[]} [args] 
     */
    constructor(fn, context, args) {
        this.fn = fn;
        this.context = context;
        this.args = args || [];
    }
}

export class EventHandlerWrapper {
    context;
    fn;
    /** @type {(Event)=>void} */
    #handler;
    /**
     * Event handler ready to be used in removeEventListener.
     */
    get handler() { return this.#handler }
    /**
     * 
     * @param {function} fn 
     * @param {*} [context]
     */
    constructor(fn, context) {
        this.fn = fn;
        this.context = context;
        this.#handler = (e) => this.fn.call(this.context, e);
    }
}