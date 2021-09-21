export class ApplyMethodSignature {
    context;
    fn;
    args;
    /** @type {(Event)=>void} */
    #convertedEventHandler;
    /**
     * Event handler converted from {@link ApplyMethodSignature} for later removeEventListener.
     */
    get convertedEventHandler() { return this.#convertedEventHandler }
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
        this.#convertedEventHandler = (e) => this.fn.call(this.context, e);
    }
}