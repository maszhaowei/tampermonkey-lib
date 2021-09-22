import { IEquatable } from "./interface";
import { util } from "./util";

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
     * @param {function} fn - Will be converted to an event handler that takes Event as the only parameter.
     * @param {*} [context] - thisArg of {@link fn}.
     */
    constructor(fn, context) {
        this.fn = fn;
        this.context = context;
        this.#handler = (e) => this.fn.call(this.context, e);
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
 */
export class LooseMap extends Map {
    get(key) {
        let i = this.entries();
        let ir;
        while (!(ir = i.next()).done) {
            let [k, v] = ir.value;
            if (util.isEqual(k, key)) return v;
        }
    }
    set(key, value) {
        let i = this.keys();
        let ir;
        while (!(ir = i.next()).done) {
            if (util.isEqual(ir.value, key)) return super.set(ir.value, value);
        }
        super.set(key, value);
    }
    has(key) {
        let i = this.keys();
        let ir;
        while (!(ir = i.next()).done) {
            if (util.isEqual(ir.value, key)) return true;
        }
        return false;
    }
    delete(key) {
        let i = this.keys();
        let ir;
        while (!(ir = i.next()).done) {
            if (util.isEqual(ir.value, key)) return super.delete(ir.value);
        }
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