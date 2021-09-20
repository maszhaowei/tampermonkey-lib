import { ApplyMethodSignature } from "../common/class";
import { ui as cui } from "../common/ui";
export const ui = {
    /**
     * Click elements in order.
     * @param {string[]} selectors 
     * @param {number} interval - Interval(ms) between each click. Default to be 0.
     * @param {number} waitTimeout - Wait timeout(ms) for each click. Default to be 2000.
     */
    asyncChainClick: function (selectors, interval = 0, waitTimeout = 2000) {
        let sigs = [];
        return cui.asyncChainFn(sigs.map((selector) => new ApplyMethodSignature(selector, HTMLElement.prototype.click)), interval, waitTimeout);
    }
}