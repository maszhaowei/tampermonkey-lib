import { util as cutil } from '../common/util';
import { ApplyMethodSignature } from '../common/class';
import { FORCE_HIDDEN_CLASSNAME } from './const';
import '../css/common.css';
import { CssCacheHelper, ObjectCacheHelper } from './utils';

/**
 * 
 * @param {HTMLElement} element 
 * @param {boolean} [force]
 */
function hideElement(element, force = false) {
    if (!element) return;
    let display = window.getComputedStyle(element).display;
    ObjectCacheHelper.saveCallback(element, 'display', () => {
        element.classList.remove(FORCE_HIDDEN_CLASSNAME);
        element.style.display = display;
    });
    element.style.display = 'none';
    if (force) element.classList.add(FORCE_HIDDEN_CLASSNAME);
}
/**
 * 
 * @param {HTMLElement} element 
 */
function restoreElementDisplay(element) {
    ObjectCacheHelper.restoreCallback(element, 'display');
}
/**
 * 
 * @param {ApplyMethodSignature} applySig 
 * @param {Array<ApplyMethodSignature>} restSigs 
 * @param {number} interval 
 * @param {number} waitTimeout 
 * @returns {Promise<Element[]|Error>}
 */
function asyncRecursiveFn(applySig, restSigs, interval, waitTimeout) {
    let context = applySig.thisArg;
    return new Promise((resolve, reject) => {
        if (cutil.isString(context)) {
            document.arrive(context, { existing: true, onceOnly: true }, function () {
                applySig.fn.apply(this, applySig.args);

                if (restSigs.length > 0) {
                    setTimeout(() => {
                        asyncRecursiveFn(restSigs.shift(), restSigs, interval, waitTimeout).then((result) => resolve([this].concat(result)), (result) => reject(result));
                    }, interval);
                }
                else resolve([this]);
            });
        }
        else {
            applySig.fn.apply(context, applySig.args);

            if (restSigs.length > 0) {
                setTimeout(() => {
                    asyncRecursiveFn(restSigs.shift(), restSigs, interval, waitTimeout).then((result) => resolve([context].concat(result)), (result) => reject(result));
                }, interval);
            }
            else resolve([context]);
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
        if (!Array.isArray(contexts)) throw new TypeError('contexts is not an array.')
        return ui.asyncChainFn(contexts.map((context) => new ApplyMethodSignature(HTMLElement.prototype.click, context)), interval, waitTimeout);
    },
    /**
     * Hide {@link hideTarget} in {@link context}. Dependency: context.arrive.
     * @param {string|HTMLElement} hideTarget 
     * @param {boolean} [force] - Use css !important. Default to false.
     * @param {Element|Document} [context] - Context to watch for creation of {@link hideTarget} if it's a selector. Default to document.
     */
    hide: function (hideTarget, force = false, context = document) {
        if (cutil.isString(hideTarget)) {
            context.arrive(hideTarget, { existing: true }, function () {
                hideElement(this, force);
            })
        }
        else if (hideTarget instanceof HTMLElement) hideElement(hideTarget, force);
    },
    /**
     * Hide parent({@link parentSelector}) of {@link descendent} in {@link context}. Dependency: context.prototype.arrive.
     * @param {string|HTMLElement} descendent 
     * @param {string} parentSelector 
     * @param {boolean} [force] - Use css !important. Default to false.
     * @param {Element|Document} [context] - Context to watch for {@link descendent}. Default to document.
     */
    hideParent(descendent, parentSelector, force = false, context = document) {
        if (cutil.isString(descendent)) {
            context.arrive(descendent, { existing: true }, function () {
                ui.hide(this.closest(parentSelector), force);
            });
        }
        else if (descendent instanceof HTMLElement) ui.hide(descendent.closest(parentSelector), force);
    },
    /**
     * Collapse {@link element} to height of {@link collapseHeight}(px). Mouse over to restore height and mouse leave to collapse again.
     * @param {HTMLElement} element 
     * @param {number} [collapseHeight] - Default to 20.
     * @param {()=>void} [collapseCallback]
     * @param {()=>void} [expandCallback]
     */
    collapse(element, collapseHeight = 20, collapseCallback, expandCallback) {
        CssCacheHelper.save(element, 'min-height');
        CssCacheHelper.save(element, 'height');
        let h = collapseHeight + 'px';
        element.style.minHeight = h;
        element.style.height = h;
        let children = element.children;
        for (let i = 0; i < children.length; i++) {
            hideElement(children[i], true);
        }
        collapseCallback && collapseCallback();
        element.addEventListener('mouseenter', () => {
            CssCacheHelper.restore(element, 'min-height');
            CssCacheHelper.restore(element, 'height');
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                restoreElementDisplay(children[i]);
            }
            expandCallback && expandCallback();
        });
        element.addEventListener('mouseleave', () => {
            element.style.minHeight = h;
            element.style.height = h;
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                hideElement(children[i], true);
            }
            collapseCallback && collapseCallback();
        });
    }
}