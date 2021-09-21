export class ApplyMethodSignature {
    context;
    fn;
    args;
    /**
     * 
     * @param {*} context
     * @param {function} fn 
     * @param {any[]} [args] 
     */
    constructor(context, fn, args) {
        this.context = context;
        this.fn = fn;
        this.args = args || [];
    }
}

export class EventHandlerWrapper extends ApplyMethodSignature {
    /** @type {(Event)=>void} */
    #handler;
    /**
     * Event handler converted from {@link ApplyMethodSignature}.
     */
    get handler() { return this.#handler }
    /**
     * 
     * @param {*} context
     * @param {function} fn 
     */
    constructor(context, fn) {
        super(context, fn);
        this.#handler = (e) => this.fn.call(this.context, e);
    }
}