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
 * @extends Map
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
    eventType;
    handler;
    context;
    /**
     * 
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {any} [context] 
     */
    constructor(eventType, handler, context) {
        this.eventType = eventType;
        this.handler = handler;
        this.context = context;
    }
}
export class EventObserverWrapper {
    #target;
    #supportedEventTypes;
    /** @type {LooseMap<Tuple,ApplyMethodSignature[]>} */
    #eventsObserverMap = new LooseMap();
    /** @type {Map<boolean,(e:Event)=>void>} - Store aggregated handlers for unregistration. */
    #aggregatedHandlerMap = new Map();
    #captureOptions = [true, false];
    /**
     * 
     * @param {EventTarget} target 
     * @param {string[]} eventTypes
     */
    constructor(target, eventTypes) {
        this.#target = target;
        this.#supportedEventTypes = eventTypes;
        this.#captureOptions.forEach((captureOption) => {
            this.#aggregatedHandlerMap.set(captureOption, this.#buildAggregatedHandler(captureOption));
        });
        eventTypes.forEach((eventType) => {
            this.#captureOptions.forEach((captureOption) => {
                // All operations which depend on mutable property should be put in aggregatedHandler.(e.g. get #eventsObserverMap value)
                // Event -> aggregatedHandler -> ApplyMethodSignature.fn.call(in #buildAggregatedHandler).
                this.#target.addEventListener(eventType, this.#aggregatedHandlerMap.get(captureOption), captureOption);
            });
        });
    }
    /**
     * 
     * @param {boolean} useCapture 
     * @returns {(e:Event)=>void}
     */
    #buildAggregatedHandler(useCapture) {
        return (e) => {
            let sigs = this.#eventsObserverMap.get(new Tuple(e.type, useCapture));
            if (sigs) {
                sigs.forEach((sig) => {
                    sig.fn.call(sig.context, e);
                });
            }
        };
    }
    /**
     * Handlers will be called in the order of registration. stopImmediatePropagation in handler doesn't work on other handlers of same <eventType, useCapture> that are registered by this function.
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {boolean} [useCapture] - Default to false.
     * @param {*} [context] 
     */
    registerEventHandler(eventType, handler, useCapture = false, context) {
        if (!this.#supportedEventTypes.includes(eventType)) throw new Error('Not supported event type: ' + eventType);
        let sig = new ApplyMethodSignature(handler, context);
        let key = new Tuple(eventType, useCapture);
        if (this.#eventsObserverMap.has(key)) {
            this.#eventsObserverMap.get(key).push(sig);
        }
        else {
            this.#eventsObserverMap.set(key, [sig]);
        }
    }
    /**
     * 
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {boolean} [useCapture] - Default to false.
     */
    unregisterEventHandler(eventType, handler, useCapture = false) {
        let key = new Tuple(eventType, useCapture);
        let sigs = this.#eventsObserverMap.get(key);
        if (!sigs) return;
        for (let i = 0; i < sigs.length; i++) {
            if (handler == sigs[i].fn) {
                sigs.splice(i, 1);
                i--;
            }
        }
    }
    /**
     * 
     * @param {*} [context] 
     */
    clean() {
        this.#supportedEventTypes.forEach((eventType) => {
            this.#aggregatedHandlerMap.forEach((handler, useCapture) => {
                this.#target.removeEventListener(eventType, handler, useCapture);
            })
        });
        this.#eventsObserverMap.clear();
        this.#aggregatedHandlerMap.clear();
        this.#target = null;
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