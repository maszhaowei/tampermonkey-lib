import { util as cutil } from '../common/util';
import { ApplyMethodSignature, CustomError } from '../common/class';
import { FORCE_HIDDEN_CLASSNAME } from './const';
import '../css/common.css';
import { ErrorCode } from '../common/enum';

function randomId() {
    return Math.random().toString().slice(2, 10);
}
/**
 * 
 * @param {Element} element 
 */
function hideElement(element) {
    element?.classList.add(FORCE_HIDDEN_CLASSNAME);
}
/**
 * 
 * @param {Element} element 
 */
function unhideElement(element) {
    element?.classList.remove(FORCE_HIDDEN_CLASSNAME);
}
/**
 * 
 * @param {ApplyMethodSignature} applySig 
 * @param {Array<ApplyMethodSignature>} restSigs 
 * @param {number} interval 
 * @param {number} waitTimeout 
 * @returns {Promise<any[]|Error>}
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
        if (waitTimeout != 0) {
            setTimeout(() => {
                document.unbindArrive(context);
                reject(new CustomError(ErrorCode.COMMON, 'Timed out when aiting for context.', undefined, context));
            }, (restSigs.length + 1) * waitTimeout + restSigs.length * interval);
        }
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
        if (!Array.isArray(sigs) || sigs.length == 0) return Promise.resolve([]);
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
     * @param {string|Element} hideTarget 
     * @param {Element|Document} [context] - Context to watch for creation of {@link hideTarget} if it's a selector. Default to document.
     */
    hide: function (hideTarget, context = document) {
        if (cutil.isString(hideTarget)) {
            context.arrive(hideTarget, { existing: true }, function () {
                hideElement(this);
            })
        }
        else if (hideTarget instanceof Element) hideElement(hideTarget);
    },
    /**
     * 
     * @param {Element} target 
     */
    unhide: function (target) {
        unhideElement(target);
    },
    /**
     * Collapse {@link element} to height of {@link collapseHeight}(px). Mouse over to restore height and mouse leave to collapse again.
     * @param {Element} element 
     * @param {number} [collapseHeight] - Default to 20.
     * @param {()=>void} [collapseCallback]
     * @param {()=>void} [expandCallback]
     */
    collapse(element, collapseHeight = 20, collapseCallback, expandCallback) {
        let collapseClass = `collapse-${randomId()}`;
        element.ownerDocument.head.insertAdjacentHTML('beforeend', `<style class="${collapseClass}">.${collapseClass} {
                min-height:${collapseHeight}px !important;
                height:${collapseHeight}px !important;
            }</style>`);
        element.classList.add(collapseClass);
        let children = element.children;
        for (let i = 0; i < children.length; i++) {
            hideElement(children[i]);
        }
        collapseCallback && collapseCallback();
        element.addEventListener('mouseenter', () => {
            element.classList.remove(collapseClass);
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                unhideElement(children[i]);
            }
            expandCallback && expandCallback();
        });
        element.addEventListener('mouseleave', () => {
            element.classList.add(collapseClass);
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                hideElement(children[i]);
            }
            collapseCallback && collapseCallback();
        });
    },
    /**
     * @param {Element} element 
     */
    mouseToggle(element) {
        let children = element.children;
        for (let i = 0; i < children.length; i++) {
            hideElement(children[i]);
        }
        element.addEventListener('mouseenter', () => {
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                unhideElement(children[i]);
            }
        });
        element.addEventListener('mouseleave', () => {
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                hideElement(children[i]);
            }
        });
    }
}