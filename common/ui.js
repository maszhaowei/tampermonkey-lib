import '../css/tooltip.css';
import '../css/linkmsg.css';
import { TooltipPosition, MessageLevel } from './enum';
import { util } from './util';

function getScrollTop() {
    return window.scrollY || window.pageYOffset || (document.documentElement && document.documentElement.scrollTop || 0) || document.body.scrollTop;
}
function getScrollLeft() {
    return window.scrollX || window.pageXOffset || (document.documentElement && document.documentElement.scrollLeft || 0) || document.body.scrollLeft;
}
/**
 * jQuery.fn.offset implementation to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document.
 * Returns {top:0, left:0} if display:none.
 * @see {@link https://api.jquery.com/offset/}
 * @param {Element} element 
 * @returns 
 */
function offset2(element) {
    let offset = {
        top: 0,
        left: 0
    };
    if (!element.getClientRects().length) {
        return offset;
    }
    if (window.getComputedStyle(element)['display'] === 'none') {
        return offset;
    }
    let rect = element.getBoundingClientRect();
    let docElement = element.ownerDocument.documentElement;
    return {
        top: rect.top + getScrollTop() - (docElement.clientTop || 0),
        left: rect.left + getScrollLeft() - (docElement.clientLeft || 0)
    };
}
/**
 * 
 * @param {Element} displayElement 
 * @param {import('./class').PositionOption} options
 * @returns 
 */
function getCoord(displayElement, options) {
    let targetRect = options.target.getBoundingClientRect(), tooltipRect = displayElement.getBoundingClientRect();
    let tOffset = options.fixed ? targetRect : offset2(options.target);
    let left = tOffset.left + options.left, top = tOffset.top + options.top;
    let position = options.position;
    if (position.startsWith('top')) {
        if (position.endsWith('center')) left += targetRect.width / 2 - tooltipRect.width / 2;
    }
    else if (position.startsWith('bottom')) {
        top += targetRect.height;
        if (position.endsWith('center')) left += targetRect.width / 2 - tooltipRect.width / 2;
    }
    else if (position.startsWith('left')) {
        if (position.endsWith('center')) top += targetRect.height / 2 - tooltipRect.height / 2;
    }
    else if (position.startsWith('right')) {
        left += targetRect.width;
        if (position.endsWith('center')) top += targetRect.height / 2 - tooltipRect.height / 2;
    }
    else if (position == TooltipPosition.CENTER_CENTER) {
        left += targetRect.width / 2 - tooltipRect.width / 2;
        top += targetRect.height / 2 - tooltipRect.height / 2;
    }

    if (position.endsWith('right')) left += targetRect.width;
    else if (position.endsWith('bottom')) top += targetRect.height;

    let inside = options.inside;
    if (inside && position.includes('bottom') || (!inside && position.includes('top'))) top -= tooltipRect.height;
    if (inside && position.includes('right') || (!inside && position.includes('left'))) left -= tooltipRect.width;
    return { left: left, top: top };
}
export const ui = {
    /* #region General */
    /**
     * jQuery.fn.offset implementation to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document.
     * Returns {top:0, left:0} if display:none.
     * @see {@link https://api.jquery.com/offset/}
     * @param {Element} element 
     * @returns 
     */
    offset: offset2,
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
            util.printGroupDebug(undefined, "selector is empty");
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
     * Show {@link tooltip} of white color against black background on target. Default to be at center position.
     * @param {string} tooltip
     * @param {import('./class').PositionOption} options
     * @param {number} [timeout] - Timeout(ms) before tooltip to fadeout. Default to 1000.
     */
    showTooltip: (tooltip, options, timeout) => { console.debug(tooltip, options, timeout) },
    /**
     * 
     * @param {string} message 
     * @param {string} [level] - Default to "info". See MessageLevel for available values.
     * @param {import('./class').PositionOption} options
     * @param {number} - [timeout] - Timeout(ms) before message to fade out. Default to 4000.
     */
    showMessage: function (message, level = MessageLevel.INFO, options, timeout = 4000) {
        if (!MessageLevel.test(level)) level = MessageLevel.INFO;
        let frag = document.createDocumentFragment(), linkDiv = document.createElement('div');
        linkDiv.innerHTML = '<span class="toast-text">' + message + '</span>';
        linkDiv.className = 'link-toast ' + level;
        let target = options.target;
        if (!target.className && !target.attributes) throw new Error('[@blink-common/message] 传入 element 不是有效节点.');
        document.querySelector('div.link-toast')?.remove();
        frag.appendChild(linkDiv);
        document.body.appendChild(frag);
        let offset = getCoord(linkDiv, options);
        linkDiv.style.left = offset.left + 'px';
        linkDiv.style.top = offset.top + 'px';
        setTimeout((function () {
            linkDiv.className += ' out',
                setTimeout((function () {
                    linkDiv.parentNode ? linkDiv.parentNode.removeChild(linkDiv) : linkDiv.remove();
                }), 350)
        }), timeout);
    },
    /* #endregion */
    /* #region Fullscreen/Webfullscreen */
    isFullscreen() {
        return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    },
    isFullscreenEnabled() {
        // return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        return util.anyMemberNotEmpty(['fullscreenEnabled',
            'webkitFullscreenEnabled',
            'mozFullScreenEnabled',
            'msFullscreenEnabled'], document)
    },
    /**
     * Returns the Element that is currently being presented in full-screen mode in this document.
     * @param {boolean} [tryShadowRoot] - Whether or not to get full-screen element from ShadowRoot.
     * @returns {Element} 
     */
    getFullscreenElement(tryShadowRoot) {
        tryShadowRoot = void 0 === tryShadowRoot ? !1 : tryShadowRoot;
        /** @type {Element} */
        var fsEle = util.anyMemberNotEmpty(['fullscreenElement',
            'webkitFullscreenElement',
            'mozFullScreenElement',
            'msFullscreenElement'], document);
        if (tryShadowRoot) for (; fsEle && fsEle.shadowRoot;) fsEle = fsEle.shadowRoot.fullscreenElement;
        return fsEle ? fsEle : null;
    },
    /**
     * 
     * @param {Element} element 
     * @returns {Promise<undefined|Error>}
     */
    requestFullscreen(element = document.documentElement) {
        let p;
        if (element.requestFullscreen) p = element.requestFullscreen();
        else if (element.webkitRequestFullscreen) p = element.webkitRequestFullscreen();
        else if (element.mozRequestFullScreen) p = element.mozRequestFullScreen();
        else if (element.msRequestFullscreen) p = element.msRequestFullscreen();
        else if (element.webkitEnterFullscreen) p = element.webkitEnterFullscreen();
        else return Promise.reject(Error('Fullscreen API unavailable'));
        return p instanceof Promise ? p : Promise.resolve();
    },
    /**
     * 
     * @returns {Promise<undefined|Error>}
     */
    exitFullscreen() {
        let p;
        if (document.exitFullscreen) p = document.exitFullscreen();
        else if (document.webkitExitFullscreen) p = document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) p = document.mozCancelFullScreen();
        else if (document.msExitFullscreen) p = document.msExitFullscreen();
        else return Promise.reject(Error('Exit fullscreen API unavailable'));
        return p instanceof Promise ? p : Promise.resolve();
    },
    /**
     * 
     * @param {Element} element 
     */
    toggleFullscreen(element = document.documentElement) {
        if (ui.isFullscreen()) return ui.exitFullscreen(element);
        else return ui.requestFullscreen(element);
    }
    /* #endregion */
};
class Tooltip {
    /**
     * 
     * @param {string} tooltip
     * @param {import('./class').PositionOption} positionOption 
     * @param {number} timeout
     */
    constructor(tooltip, positionOption, timeout) {
        this.options = util.assignNotUndefined({
            name: 'player-tooltip',
            target: document.body,
            type: 'info',
            left: 0,
            top: 0,
            margin: 0,
            arrow: !1,
            changeMode: 0,
            singleMode: !0,
            animation: !0,
            supportShow: !0,
            autoShow: !0,
            autoHide: !0,
            hideTime: 1000,
            autoRemove: !0,
            game: !1,
            callback: function () {
            },
            onShow: function () {
            },
            onHide: function () {
            }
        }, { text: tooltip, hideTime: timeout }, positionOption),
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
        let offset = getCoord(this.$zwtooltips, this.options);
        this.$zwtooltips.style.top = offset.top + 'px';
        this.$zwtooltips.style.left = offset.left + 'px';
    }
}
/**
 * 
 * @param {string} tooltip
 * @param {import('./class').PositionOption} options
 * @param {number} [timeout] - Timeout(ms) before tooltip to fadeout. Default to 1000.
 * @returns 
 */
ui.showTooltip = function (tooltip, options, timeout = 1000) {
    if (util.isBlank(tooltip)) {
        console.debug("Tooltip is blank");
        return;
    }
    new Tooltip(tooltip, options, timeout);
}