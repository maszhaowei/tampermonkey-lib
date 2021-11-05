import { IEquatable } from "./interface";
import { util } from "./util";

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
            this[i] = items[i];
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
            let item = this[i];
            let target = obj[i];
            if (item instanceof IEquatable && !item.equals(target)) return false;
            else if (item !== target) return false;
        }
        return true;
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
            if (util.isEqual(k, key)) return v;
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
            if (util.isEqual(ir.value, key)) return super.set(ir.value, value);
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
            if (util.isEqual(ir.value, key)) return true;
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
            if (util.isEqual(ir.value, key)) return super.delete(ir.value);
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

export class EventObserverWrapper {
    #target;
    #supportedEventTypes;
    /** @type {LooseMap<Tuple,ApplyMethodSignature[]>} */
    #eventsObserverMap = new LooseMap();
    /** @type {LooseMap<Tuple,(e:Event)=>void>} - Save handler for removeEventListener. Will call set whenever an event is triggered. */
    #aggregatedHandlerMap = new LooseMap();
    #captureOptions = [true, false];
    /**
     * 
     * @param {EventTarget} target 
     * @param {string[]} eventTypes
     */
    constructor(target, eventTypes) {
        this.#target = target;
        this.#supportedEventTypes = eventTypes;
        eventTypes.forEach((eventType) => {
            this.#captureOptions.forEach((captureOption) => {
                /** @type {(e:Event)=>void} */
                let handler = (e) => {
                    let aggregatedHandler = this.#buildAggregatedHandler(new Tuple(e.type, captureOption));
                    if (aggregatedHandler) {
                        aggregatedHandler(e);
                    }
                };
                this.#aggregatedHandlerMap.set(new Tuple(eventType, captureOption), handler);
                // All operations which depend on mutable property should be put in aggregatedHandler.(e.g. get #eventsObserverMap value)
                // Event -> handler -> aggregatedHandler -> ApplyMethodSignature.fn.call(in #buildAggregatedHandler).
                this.#target.addEventListener(eventType, handler, captureOption);
            });
        });
    }
    /**
     * 
     * @param {Tuple} key 
     */
    #buildAggregatedHandler(key) {
        let sigs = this.#eventsObserverMap.get(key);
        if (sigs && sigs.length > 0) {
            return (e) => sigs.forEach((sig) => {
                sig.fn.call(sig.context, e);
            });
        }
    }
    /**
     * 
     * @param {string} eventType 
     * @param {boolean} useCapture 
     */
    #updateAggregatedHandlerMap(eventType, useCapture) {
        let aggregatedHandler = this.#buildAggregatedHandler(eventType, useCapture);
        let key = new Tuple(eventType, useCapture);
        if (aggregatedHandler) { this.#aggregatedHandlerMap.set(key, aggregatedHandler); }
        else this.#aggregatedHandlerMap.delete(key);
    }
    /**
     * 
     * @param {string} eventType 
     * @param {(e:Event)=>void} handler 
     * @param {boolean} [useCapture] - Default to false.
     * @param {*} [context] 
     */
    registerEventHandler(eventType, handler, useCapture = false, context) {
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
        if (sigs.length == 0) {
            let aggregatedHandler = this.#aggregatedHandlerMap.get(key);
            if (aggregatedHandler) {
                this.#target.removeEventListener(eventType, aggregatedHandler, useCapture);
                this.#aggregatedHandlerMap.delete(key);
            }
        }
    }
    /**
     * 
     * @param {string} [eventType] - Default to unregister all supported event types.
     * @param {*} [context] 
     */
    clean() {
        this.#captureOptions.forEach((captureOption) => {
            this.#supportedEventTypes.forEach((et) => this.unregisterEventHandler(et, captureOption, context));
        });
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