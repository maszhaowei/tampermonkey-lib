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