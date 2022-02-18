import { IEquatable } from "./interface";

/**
 * @enum {string}
 */
export const _TooltipPosition = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right',
    LEFT_TOP: 'left-top',
    LEFT_CENTER: 'left-center',
    LEFT_BOTTOM: 'left-bottom',
    RIGHT_TOP: 'right-top',
    RIGHT_CENTER: 'right-center',
    RIGHT_BOTTOM: 'right-bottom',
    CENTER_CENTER: 'center-center',
}
export function _isEqual(obj1, obj2) {
    if (obj1 instanceof Array) {
        if (!(obj2 instanceof Array) || obj1.length != obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!_isEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    return Object.is(obj1, obj2) ? true : obj1 instanceof IEquatable ? obj1.equals(obj2) : obj1 === obj2;
}
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

export class Tuple extends IEquatable {
    #items;
    get size() { return this.#items.length }
    constructor(...items) {
        super();
        this.#items = items;
        for (let i = 0; i < items.length; i++) {
            Object.defineProperty(this, i, {
                configurable: false,
                enumerable: true,
                writable: false,
                value: items[i]
            });
        }
    }
    /**
     * @override
     * @param {Tuple} obj 
     */
    equals(obj) {
        if (!(obj instanceof Tuple)) return false;
        if (this.size != obj.size) return false;
        for (let i = 0; i < this.size; i++) {
            if (!_isEqual(this[i], obj[i])) return false;
        }
        return true;
    }
}
/**
 * @extends Tuple
 * @template T1,T2
 */
export class Couple extends Tuple {
    /**
     * @returns {T1}
     */
    get 0() { return this[0] }
    /**
     * @returns {T2}
     */
    get 1() { return this[1] }
    /**
     * 
     * @param {T1} t1 
     * @param {T2} t2 
     */
    constructor(t1, t2) {
        super(t1, t2);
    }
    /**
     * 
     * @param {Couple} obj 
     * @returns 
     */
    equals(obj) {
        if (!(obj instanceof Couple)) return false;
        return super.equals(obj);
    }
}
/**
 * @extends Tuple
 * @template T1,T2,T3
 */
export class Triple extends Tuple {
    /**
     * @returns {T1}
     */
    get 0() { return this[0] }
    /**
     * @returns {T2}
     */
    get 1() { return this[1] }
    /**
     * @returns {T3}
     */
    get 2() { return this[2] }
    /**
     * 
     * @param {T1} t1 
     * @param {T2} t2 
     * @param {T3} t3 
     */
    constructor(t1, t2, t3) {
        super(t1, t2, t3);
    }
    /**
     * 
     * @param {Triple} obj 
     * @returns 
     */
    equals(obj) {
        if (!(obj instanceof Triple)) return false;
        return super.equals(obj);
    }
}
/**
 * @classdesc Key equality: Based on the sameValueZero algorithm and NaN equals NaN. Will compare each element if key is an array and call equals method if key implements IEquatable.
 * @extends {Map<K,V>}
 * @template K,V
 */
export class LooseMap extends Map {
    /**
     * @returns {LooseMap<K,V>}
     */
    constructor() {
        super();
    }
    /**
     * 
     * @param {K} key 
     * @returns {V}
     */
    get(key) {
        let i = this.entries();
        let ir;
        while (!(ir = i.next()).done) {
            let [k, v] = ir.value;
            if (_isEqual(k, key)) return v;
        }
    }
    /**
     * 
     * @param {K} key 
     * @param {V} value 
     * @returns 
     */
    set(key, value) {
        let i = this.keys();
        let ir;
        while (!(ir = i.next()).done) {
            if (_isEqual(ir.value, key)) return super.set(ir.value, value);
        }
        super.set(key, value);
    }
    /**
     * 
     * @param {K} key 
     * @returns 
     */
    has(key) {
        let i = this.keys();
        let ir;
        while (!(ir = i.next()).done) {
            if (_isEqual(ir.value, key)) return true;
        }
        return false;
    }
    /**
     * 
     * @param {K} key 
     * @returns 
     */
    delete(key) {
        let i = this.keys();
        let ir;
        while (!(ir = i.next()).done) {
            if (_isEqual(ir.value, key)) return super.delete(ir.value);
        }
    }
}
export class ApplyMethodSignature {
    thisArg;
    fn;
    args;
    /**
     * 
     * @param {function} fn 
     * @param {*} [thisArg]
     * @param {any[]} [args] 
     */
    constructor(fn, thisArg, args) {
        this.fn = fn;
        this.thisArg = thisArg;
        this.args = args || [];
    }
}
export class EventHandlerWrapper {
    eventType;
    handler;
    useCapture;
    thisArg;
    /**
     * 
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {any} [thisArg] 
     * @param {boolean} [useCapture] 
     */
    constructor(eventType, handler, thisArg, useCapture = false) {
        this.eventType = eventType;
        this.handler = handler;
        this.useCapture = useCapture;
        this.thisArg = thisArg;
    }
}
export class EventObserverWrapper {
    #target;
    /** @type {LooseMap<Triple<string,(e:Event)=>void,boolean>,(e:Event)=>void>} - Handler to wrapped handler map. */
    #handlerMap = new LooseMap();
    /**
     * 
     * @param {EventTarget} target 
     */
    constructor(target) {
        this.#target = target;
    }
    /**
     * 
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {*} [context] 
     * @param {boolean} [useCapture] - Default to false.
     */
    registerEventHandler(eventType, handler, context, useCapture = false) {
        let key = new Triple(eventType, handler, useCapture);
        let wrapHandler = (e) => handler.call(context, e);
        this.#handlerMap.set(key, wrapHandler);
        this.#target.addEventListener(eventType, wrapHandler, useCapture);
    }
    /**
     * 
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {boolean} [useCapture] - Default to false.
     */
    unregisterEventHandler(eventType, handler, useCapture = false) {
        let key = new Triple(eventType, handler, useCapture);
        let wrapHandler = this.#handlerMap.get(key);
        if (wrapHandler) {
            this.#target.removeEventListener(eventType, wrapHandler, useCapture);
            this.#handlerMap.delete(key);
        }
    }
    clean() {
        this.#handlerMap.forEach((wrapHandler, key) => {
            this.#target.removeEventListener(key[0], wrapHandler, key[2]);
        });
        this.#target = null;
        this.#handlerMap.clear();
    }
}

export class PositionOption {
    target;
    position;
    top;
    left;
    insideX;
    insideY;
    fixed;
    ensureViewPort;
    /**
     * 
     * @param {object} options
     * @param {Element} options.target - Target element for positioning.
     * @param {string} [options.position] - Position to display. Default to "center-center". See TooltipPosition for available values.
     * @param {number} [options.top] - Additional y offset. Default to 0.
     * @param {number} [options.left] - Additional x offset. Default to 0.
     * @param {boolean} [options.insideX] - Whether the displayed message is inside horizontal axes of {@link target}. Default to true.
     * @param {boolean} [options.insideY] - Whether the displayed message is inside vertical axes of {@link target}. Default to true.
     * @param {boolean} [options.insideX] - Whether the displayed message is inside {@link target}. Default to true.
     * @param {boolean} [options.fixed] - Whether the css position of displayed message is fixed. Default to true.
     * @param {boolean} [options.ensureViewPort] - Ensure that the displayed element is whithin the viewport. Default to false.
     */
    constructor({ target, position = _TooltipPosition.CENTER_CENTER,
        top = 0, left = 0, insideX = true, insideY = true, fixed = true, ensureViewPort = false }) {
        if (!(target instanceof Element)) throw new TypeError('target is not an Element');
        this.target = target;
        this.position = position;
        this.top = top;
        this.left = left;
        this.insideX = insideX;
        this.insideY = insideY;
        this.fixed = fixed;
        this.ensureViewPort = ensureViewPort;
    }
}

export class CustomError extends Error {
    code;
    /** @type {CustomError[]} */
    subErrors;
    /**
     * 
     * @param {number} code 
     * @param {string} [message] 
     * @param {CustomError[]} [subErrors] 
     */
    constructor(code, message, subErrors = []) {
        super(message);
        this.code = code;
        this.subErrors = subErrors;
    }
    /**
     * 
     * @param {CustomError} e 
     */
    appendSubError(e) {
        this.subErrors.push(e);
    }
}