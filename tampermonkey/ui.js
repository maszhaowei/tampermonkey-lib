import { ApplyMethodSignature } from './class';
/**
 * 
 * @param {string} selector 
 * @param {ApplyMethodSignature} applySig 
 * @param {Array<ApplyMethodSignature>} restSigs 
 * @param {number} interval 
 * @param {number} waitTimeout 
 * @returns {Promise<Element[]|Error>}
 */
function asyncRecursiveFn(applySig, restSigs, interval, waitTimeout) {
    let selector = applySig.contextSelector;
    return new Promise((resolve, reject) => {
        document.arrive(selector, { existing: true, onceOnly: true }, function () {
            try {
                applySig.fn.apply(this, applySig.args);

                setTimeout(() => {
                    if (restSigs.length > 0) {
                        asyncRecursiveFn(restSigs.shift(), restSigs, interval, waitTimeout).then((result) => resolve([this].concat(result)), (result) => reject(result));
                    }
                    else resolve([this]);
                }, interval);
            }
            catch (e) {
                reject(e);
            }
        });
        setTimeout(() => {
            document.unbindArrive(selector);
            reject(new Error(selector));
        }, (restSigs.length + 1) * waitTimeout + restSigs.length * interval);
    })
}
export const ui = {
    /**
     * Apply functions on selectors in order.
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
     * @param {string[]} selectors 
     * @param {number} interval - Interval(ms) between each click. Default to be 0.
     * @param {number} waitTimeout - Wait timeout(ms) for each click. Default to be 2000.
     */
    asyncChainClick: function (selectors, interval = 0, waitTimeout = 2000) {
        return ui.asyncChainFn(selectors.map((selector) => new ApplyMethodSignature(selector, HTMLElement.prototype.click)), interval, waitTimeout);
    }
}