import { util } from '../common/util';
import { ApplyMethodSignature } from '../common/class';
/**
 * 
 * @param {ApplyMethodSignature} applySig 
 * @param {Array<ApplyMethodSignature>} restSigs 
 * @param {number} interval 
 * @param {number} waitTimeout 
 * @returns {Promise<Element[]|Error>}
 */
function asyncRecursiveFn(applySig, restSigs, interval, waitTimeout) {
    let context = applySig.context;
    return new Promise((resolve, reject) => {
        if (util.isString(context)) {
            document.arrive(context, { existing: true, onceOnly: true }, function () {
                applySig.fn.apply(this, applySig.args);

                setTimeout(() => {
                    if (restSigs.length > 0) {
                        asyncRecursiveFn(restSigs.shift(), restSigs, interval, waitTimeout).then((result) => resolve([this].concat(result)), (result) => reject(result));
                    }
                    else resolve([this]);
                }, interval);
            });
        }
        else {
            applySig.fn.apply(context, applySig.args);

            setTimeout(() => {
                if (restSigs.length > 0) {
                    asyncRecursiveFn(restSigs.shift(), restSigs, interval, waitTimeout).then((result) => resolve([context].concat(result)), (result) => reject(result));
                }
                else resolve([context]);
            }, interval);
        }
        setTimeout(() => {
            document.unbindArrive(context);
            reject(new Error(context));
        }, (restSigs.length + 1) * waitTimeout + restSigs.length * interval);
    })
}
export const ui = {
    /**
     * Apply functions on selectors or elements in order.
     * @param {Array<ApplyMethodSignature>} sigs 
     * @param {number} interval - Interval(ms) between each operation. Default to be 0.
     * @param {number} waitTimeout - Wait timeout(ms) for each step of the operation. Default to be 2000.
     * @returns 
     */
    asyncChainFn: function (sigs, interval = 0, waitTimeout = 2000) {
        if (!Array.isArray(sigs) || sigs.length == 0) return;
        return asyncRecursiveFn(sigs.shift(), sigs, interval, waitTimeout);
    },
    /**
     * Click elements in order.
     * @param {Array<string|Element>} contexts - Array of selectors or elements.
     * @param {number} interval - Interval(ms) between each click. Default to be 0.
     * @param {number} waitTimeout - Wait timeout(ms) for each click. Default to be 2000.
     */
    asyncChainClick: function (contexts, interval = 0, waitTimeout = 2000) {
        return ui.asyncChainFn(contexts.map((context) => new ApplyMethodSignature(context, HTMLElement.prototype.click)), interval, waitTimeout);
    }
}