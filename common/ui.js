import '../css/tooltip.css';
import { TooltipOption } from './class';
import { TooltipPosition } from './enum';
import { util } from './util';
export const ui = {
    /* #region General */
    /**
     * jQuery.fn.offset的js实现，不支持IE11以下浏览器
     * @see {@link https://api.jquery.com/offset/}
     * @param {Element} node 
     * @returns 
     */
    offset2(node) {
        let offset = {
            top: 0,
            left: 0
        };
        // 当前为IE11以下, 直接返回{top: 0, left: 0}
        if (!node.getClientRects().length) {
            return offset;
        }
        // 当前DOM节点的 display === 'node' 时, 直接返回{top: 0, left: 0}
        if (window.getComputedStyle(node)['display'] === 'none') {
            return offset;
        }
        // Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
        // 返回值包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
        // 返回如{top: 8, right: 1432, bottom: 548, left: 8, width: 1424…}
        offset = node.getBoundingClientRect();
        let docElement = node.ownerDocument.documentElement;
        return {
            top: offset.top + window.pageYOffset - docElement.clientTop,
            left: offset.left + window.pageXOffset - docElement.clientLeft
        };
    },
    /**
     * 
     * @param {HTMLElement} element 
     */
    scrollToElement(element) {
        if (!element) return;
        let html = element.ownerDocument.documentElement;
        const offset = ui.offset2(element);
        const rect = element.getBoundingClientRect();
        html.scrollTo(offset.left - (html.clientWidth - rect.width) / 2, offset.top - (html.clientHeight - rect.height) / 2);
    },
    /**
     * 
     * @param {KeyboardEvent} e 
     * @returns 
     */
    isInputEvent(e) {
        if (!e.target) return false;
        return e.target.tagName.toUpperCase() == "TEXTAREA" || (e.target.tagName.toUpperCase() == "INPUT" && e.target.type == "text")
            || e.isComposing || e.keyCode === 229;
    },
    /**
     * 
     * @param {Event} e 
     * @returns 
     */
    isEventFromThisDoc(e) {
        return e.target && e.target.getRootNode() == document;
    },
    /**
     * 
     * @param {string} selector 
     * @param {Element|Document} context 
     */
    hide(selector, context = document) {
        context.querySelectorAll(selector).forEach((element) => ui.hideElement(element));
    },
    /**
     * 
     * @param {HTMLElement} element 
     */
    hideElement(element) {
        if (element) element.style.display = 'none';
    },
    /**
     * Find the first {@link selector} in the context of {@link contexts}.
     * @param {string} selector 
     * @param {...string|Element|Document} contexts 
     * @returns {HTMLElement}
     */
    querySelectorFirst(selector, ...contexts) {
        if (!selector) {
            util.printGroupDebug("Common", "selector is empty");
            return;
        }
        for (let i = 0; i < contexts.length; i++) {
            let context = contexts[i];
            if (!context) continue;
            if (context instanceof Element || context instanceof Document) return context.querySelector(selector);
            else {
                for (let contextElement of document.querySelectorAll(context)) {
                    let findElement = contextElement.querySelector(selector);
                    if (findElement) return findElement;
                }
            }
        }
    },
    /**
     * Show {@link tooltip} of white color on black background on {@link target}. Default to be at center position.
     * @param {string} tooltip 
     * @param {Element} target - Target element to display the tooltip.
     * @param {*} [position] - Position to display {@link tooltip}. Default to "center-center". See TooltipPosition for value range.
     * @param {*} [margin] - Inside margin to the border of {@link target}. Default to 0.
     */
    showTooltip: (tooltip, target, position, margin) => { console.debug(tooltip, target, position, margin) },
    /* #endregion */
};
class Tooltip {
    /**
     * 
     * @param {TooltipOption} customOption 
     */
    constructor(customOption) {
        this.options = util.assignNotUndefined(new TooltipOption(), customOption),
            this.status = 0,
            this.prefix = 'zw-player-tooltips',
            this.triggerClass = this.prefix + '-trigger',
            'tip' === this.options.type && (this.options.autoShow = !1, this.options.autoHide = !1, this.options.autoRemove = !0),
            this.initialize();
    }
    initialize() {
        this.options.target.classList.add(this.triggerClass),
            this.options.autoShow && this.show(),
            'function' == typeof this.options.callback && this.options.callback(),
            'tip' === this.options.type && this.bindEvents();
    }
    bindEvents() {
        var i = this;
        this.options.target.addEventListener('mouseenter', (function () {
            i.options.supportShow && i.show();
        }));
        this.options.target.addEventListener('mouseleave', (function () {
            i.hide();
        }));
        this.options.target.addEventListener('click', (function (e) {
            var t = parseInt(i.options.changeMode + '', 10);
            if (!isNaN(t))
                switch (t) {
                    case 1: {
                        /** @type {Node} */
                        let ele;
                        for (ele of e.target.parentElement.children) {
                            if (ele == e.target)
                                continue;
                            return setTimeout((function () {
                                ele.hasClass(i.triggerClass) && ele.is(':visible') && ele.dispatchEvent(new MouseEvent('mouseenter'));
                            }), 0),
                                !1;
                        }
                        break;
                    }
                    case 2:
                        i.hide();
                        break;
                    case 3:
                        i.options.target.dispatchEvent(new MouseEvent('mouseleave')),
                            i.options.target.dispatchEvent(new MouseEvent('mouseenter'));
                }
        }));
    }
    toggle(i) {
        this.status ? this.hide() : this.show(i);
    }
    show() {
        var e = this, t = 200;
        'info' === this.options.type && (t = 0),
            this.status || (clearTimeout(this.timeOut), this.timeOut = window.setTimeout((function () {
                e.options.singleMode && e.destroy(!0),
                    e.create(),
                    e.status = 1,
                    e.$zwtooltips.classList.add('active'),
                    'function' == typeof e.options.onShow && e.options.onShow(e),
                    e.options.autoHide && setTimeout((function () {
                        e.hide();
                    }), e.options.hideTime);
            }), t));
    }
    add(i) {
        'string' == typeof i ? i = Object.assign(this.options, {
            text: i
        }) : 'object' == typeof i && (i = Object.assign(this.options, i));
        var e = this.template(!1, i);
        this.$zwtooltips.insertAdjacentElement('beforeend', e),
            this.updatePos(!0);
    }
    hide() {
        this.status = 0,
            clearTimeout(this.timeOut),
            this.$zwtooltips && this.$zwtooltips.classList.remove('active'),
            'function' == typeof this.options.onHide && this.options.onHide(this),
            this.options.autoRemove && this.destroy();
    }
    destroy(i) {
        if (clearTimeout(this.timeOut), i) {
            var e = document.querySelector('.' + this.prefix + '[data-tooltip-name="' + this.options.name + '"]');
            e && e.remove();
        } else
            this.$zwtooltips && this.$zwtooltips.remove();
    }
    getElemPos(i) {
        var e = ui.offset2(i);
        /** @type {DOMRect} */
        let rect = i.getBoundingClientRect();
        return {
            x: e.left,
            y: e.top,
            w: rect.width,
            h: rect.height
        };
    }
    create() {
        document.querySelector('.' + this.prefix + '[data-tooltip-name="' + this.options.name + '"]') || (this.$zwtooltips = this.template(!0), this.options.game && this.$zwtooltips.classList.add('tooltip-game'), this.options.target.insertAdjacentElement('beforeend', this.$zwtooltips)),
            this.$zwtooltips.insertAdjacentElement('beforeend', this.template()),
            this.updatePos();
    }
    template(i, e) {
        var t, a, r, o = '', n = [];
        if (a = (e = e || this.options).text || e.target.getAttribute('data-text'), r = e.position || e.target.getAttribute('data-position'), e.changeMode = e.target.getAttribute('data-change-mode') || 0, i)
            n.push(e.type),
                n.push(r),
                e.animation && n.push('animation'),
                t = n.join(' '),
                o = '<div class="' + this.prefix + ' ' + t + '"  data-tooltip-name="' + e.name + '"></div>';
        else {
            var l = '';
            e.padding && (e.padding instanceof Array ? l += 'padding:' + e.padding.join('px ') + 'px;' : 'number' == typeof e.padding && (l += 'padding:' + e.padding + ';')),
                e.fontSize && 'number' == typeof e.fontSize && (l += 'font-size:' + e.fontSize + 'px;'),
                o = '<div class="zw-tooltip" style="' + l + '">' + a + '</div>';
        }
        return document.createRange().createContextualFragment(o).firstElementChild;
    }
    updatePos() {
        var left, top, arrowLeft, options = this.options, targetPositions = this.getElemPos(options.target), tooltipWH = this.getElemPos(this.$zwtooltips);
        let position = options.position || options.target.getAttribute('data-position');
        left = targetPositions.x, top = targetPositions.y;
        if (position.startsWith('top')) {
            top += options.margin;
            if (position.endsWith('center')) left += targetPositions.w / 2 - tooltipWH.w / 2;
        }
        else if (position.startsWith('bottom')) {
            top += targetPositions.h - tooltipWH.h - options.margin;
            if (position.endsWith('center')) left += targetPositions.w / 2 - tooltipWH.w / 2;
        }
        else if (position.startsWith('left')) {
            left += options.margin;
            if (position.endsWith('center')) top += targetPositions.h / 2 - tooltipWH.h / 2;
        }
        else if (position.startsWith('right')) {
            left += targetPositions.w - tooltipWH.w - options.margin;
            if (position.endsWith('center')) top += targetPositions.h / 2 - tooltipWH.h / 2;
        }
        else if (position == TooltipPosition.CENTER_CENTER) {
            left += targetPositions.w / 2 - tooltipWH.w / 2;
            top += targetPositions.h / 2 - tooltipWH.h / 2;
        }

        if (position.endsWith('right')) left += targetPositions.w - tooltipWH.w;
        else if (position.endsWith('bottom')) top += targetPositions.h - tooltipWH.h;

        if (options.arrow) {
            var l = '<div class="arrow" style="' + arrowLeft + '"></div>';
            this.$zwtooltips.insertAdjacentHTML('beforeend', l);
        }
        this.$zwtooltips.style.top = (top + options.top + document.documentElement.clientTop - window.pageYOffset) + 'px';
        this.$zwtooltips.style.left = (left + options.left + document.documentElement.clientLeft - window.pageXOffset) + 'px';
    }
}
/**
 * 
 * @param {string} tooltip 
 * @param {Element} target 
 * @param {string} [position] 
 * @param {number} [margin] 
 * @returns 
 */
ui.showTooltip = function (tooltip, target, position = TooltipOption.CENTER_CENTER, margin = 0) {
    if (util.isBlank(tooltip)) {
        console.debug("Tooltip is blank");
        return;
    }
    new Tooltip(new TooltipOption(tooltip, target, position, margin));
}