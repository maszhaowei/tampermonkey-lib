export class ApplyMethodSignature {
    context;
    fn;
    args;
    /**
     * 
     * @param {string|Element} context
     * @param {function} fn 
     * @param {any[]} [args] 
     */
    constructor(context, fn, args) {
        this.context = context;
        this.fn = fn;
        this.args = args || [];
    }
}