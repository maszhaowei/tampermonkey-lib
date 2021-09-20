export class ApplyMethodSignature {
    contextSelector;
    fn;
    args;
    /**
     * 
     * @param {string} contextSelector
     * @param {function} fn 
     * @param {any[]} [args] 
     */
    constructor(contextSelector, fn, args) {
        this.contextSelector = contextSelector;
        this.fn = fn;
        this.args = args || [];
    }
}