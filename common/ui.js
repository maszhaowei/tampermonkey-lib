import '../css/tooltip.css';
import '../css/linkmsg.css';
import { TooltipPosition, MessageLevel } from './enum';
import { util } from './util';
import { EnumHelper } from './utils';
/**
 * 
 * @param {Element} element 
 * @returns {Window}
 */
function _getOwnerWindow(element) {
    return element.ownerDocument.defaultView || element.ownerDocument.parentWindow;
}
/**
 * 
 * @param {Window} w 
 * @returns 
 */
function _getScrollTop(w) {
    let doc = w.document;
    return w.scrollY || w.pageYOffset || (doc.documentElement && doc.documentElement.scrollTop || 0) || doc.body.scrollTop;
}
/**
 * 
 * @param {Window} w 
 * @returns 
 */
function _getScrollLeft(w) {
    let doc = w.document;
    return w.scrollX || w.pageXOffset || (doc.documentElement && doc.documentElement.scrollLeft || 0) || doc.body.scrollLeft;
}
/**
 * jQuery.fn.offset implementation to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document.
 * Returns {top:0, left:0} if display:none.
 * @see {@link https://api.jquery.com/offset/}
 * @param {Element} element 
 * @returns 
 */
function _offset(element) {
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
    let w = _getOwnerWindow(element), doc = w.document;
    let docElement = doc.documentElement;
    return {
        top: rect.top + _getScrollTop(w) - (docElement.clientTop || 0),
        left: rect.left + _getScrollLeft(w) - (docElement.clientLeft || 0)
    };
}
/**
 * Retrieve the viewport dimension of {@link targetWindow}. Result is rounded.
 * @param {Window} [targetWindow]
 * @param {boolean} [scrollbar] - Whether to include horizontal and vertical scrollbars. Default to false.
 * @returns 
 */
function _getViewPortDimension(targetWindow = window, scrollbar = false) {
    let vh, vw;
    if (scrollbar) {
        vh = targetWindow.innerHeight;
        vw = targetWindow.innerWidth;
    }
    else {
        let doc = targetWindow.document;
        if (doc.compatMode === 'BackCompat') {
            vh = doc.body.clientHeight;
            vw = doc.body.clientWidth;
        } else {
            vh = doc.documentElement.clientHeight;
            vw = doc.documentElement.clientWidth;
        }
    }
    return { height: vh, width: vw };
}
/**
 * 
 * @param {Element} displayElement 
 * @param {import('./class').PositionOption} options
 * @returns 
 */
function _getCoord(displayElement, options) {
    let targetRect = options.target.getBoundingClientRect(), tooltipRect = displayElement.getBoundingClientRect();
    let tOffset = options.fixed ? targetRect : _offset(options.target);
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

    let insideX = options.insideX;
    if (insideX && position.includes('bottom') || (!insideX && position.includes('top'))) top -= tooltipRect.height;
    let insideY = options.insideY;
    if (insideY && position.includes('right') || (!insideY && position.includes('left'))) left -= tooltipRect.width;

    let vw = _getViewPortDimension(_getOwnerWindow(options.target), false);
    if (options.ensureViewPort) {
        if (left < 0) left = 0;
        else if (vw.width < Math.round(left + tooltipRect.width)) left = vw.width - tooltipRect.width;
        if (top < 0) top = 0;
        else if (vw.height < Math.round(top + tooltipRect.height)) left = vw.height - tooltipRect.height;
    }
    return { left: left, top: top };
}
class _Tooltip {
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
        this.$zwtooltips.append(e),
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
        document.querySelector('.' + this.prefix + '[data-tooltip-name="' + this.options.name + '"]') || (this.$zwtooltips = this.template(!0), this.options.game && this.$zwtooltips.classList.add('tooltip-game'), this.options.target.append(this.$zwtooltips)),
            this.$zwtooltips.append(this.template()),
            this.updatePos();
    }
    template(i, options) {
        let className, text, position, htmlText = '', classes = [];
        text = (options = options || this.options).text || options.target.getAttribute('data-text');
        position = options.position || options.target.getAttribute('data-position');
        options.changeMode = options.target.getAttribute('data-change-mode') || 0;
        if (i) {
            classes.push(options.type);
            classes.push(position);
            options.animation && classes.push('animation');
            if (options.fixed) classes.push('fixed');
            className = classes.join(' ');
            htmlText = `<div class="${this.prefix} ${className}"  data-tooltip-name="${options.name}"></div>`;
        }
        else {
            var style = '';
            options.padding && (options.padding instanceof Array ? style += 'padding:' + options.padding.join('px ') + 'px;' : 'number' == typeof options.padding && (style += 'padding:' + options.padding + ';')),
                options.fontSize && 'number' == typeof options.fontSize && (style += 'font-size:' + options.fontSize + 'px;'),
                htmlText = `<div class="zw-tooltip${options.fixed ? ' fixed' : ''}" style="` + style + '">' + text + '</div>';
        }
        return document.createRange().createContextualFragment(htmlText).firstElementChild;
    }
    updatePos() {
        let options = this.options;
        let targetRect = this.options.target.getBoundingClientRect(), tooltipRect = this.$zwtooltips.getBoundingClientRect();
        let arrow;
        switch (options.position || options.target.attr('data-position')) {
            case TooltipPosition.TOP_LEFT:
                arrow = targetRect.width / 2;
                break;
            case TooltipPosition.TOP_CENTER:
                arrow = tooltipRect.width / 2;
                break;
            case TooltipPosition.TOP_RIGHT:
                arrow = tooltipRect.width - targetRect.width / 2;
                break;
            case TooltipPosition.BOTTOM_LEFT:
                arrow = targetRect.width / 2;
                break;
            case TooltipPosition.BOTTOM_CENTER:
                arrow = tooltipRect.width / 2;
                break;
            case TooltipPosition.BOTTOM_RIGHT:
                arrow = tooltipRect.width / 2;
                break;
        }
        if (options.arrow) {
            this.$zwtooltips.insertAdjacentHTML('beforeend', `<div class="arrow" style="left:${arrow}px;"></div>`);
        }
        let offset = _getCoord(this.$zwtooltips, options);
        this.$zwtooltips.style.top = offset.top + 'px';
        this.$zwtooltips.style.left = offset.left + 'px';
    }
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
    offset: _offset,
    /**
     * 
     * @param {HTMLElement} element 
     */
    scrollToElement(element) {
        if (!element || !(element instanceof Element)) throw new TypeError('Parameter is not an Element');
        const offset = _offset(element);
        const vw = _getViewPortDimension(_getOwnerWindow(element), false);
        const rect = element.getBoundingClientRect();
        element.ownerDocument.documentElement.scrollTo(offset.left - (vw.width - rect.width) / 2, offset.top - (vw.height - rect.height) / 2);
    },
    /**
     * Retrieve the viewport dimension of {@link targetWindow}. Result is rounded.
     * @param {Window} [targetWindow] - Default to window.
     * @param {boolean} [scrollbar] - Whether to include horizontal and vertical scrollbars. Default to false.
     * @returns 
     */
    getViewPortDimension: _getViewPortDimension,
    /**
     * 
     * @param {KeyboardEvent} e 
     * @returns 
     */
    isInputEvent(e) {
        if (!(e instanceof KeyboardEvent)) return false;
        let target = e.target;
        if (target instanceof Element) return target.tagName.toUpperCase() == "TEXTAREA" || (target.tagName.toUpperCase() == "INPUT" && target.type == "text")
            || target.getAttribute('contenteditable') === 'true' || target.getAttribute('contenteditable') === '';
        else return e.isComposing || e.keyCode === 229;
    },
    /**
     * 
     * @param {Event} e 
     * @returns 
     */
    isEventFromThisDoc(e) {
        let target = e.target;
        if (!target) return false;
        return (target instanceof Element && target.ownerDocument == document) || (target instanceof Document && target == document);
    },
    /**
     * 
     * @param {KeyboardEvent} e 
     * @returns {boolean} If a modifier key is pressed or locked.
     */
    getModifierState(e) {
        return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    },
    /**
     * 
     * @param {string} tooltip
     * @param {import('./class').PositionOption} options
     * @param {number} [timeout] - Timeout(ms) before tooltip begins to fade out. Default to 1000.
     */
    showTooltip: function (tooltip, options, timeout = 1000) {
        if (util.isBlank(tooltip)) {
            console.debug("Tooltip is blank");
            return;
        }
        new _Tooltip(tooltip, options, timeout);
    },
    /**
     * 
     * @param {string} message 
     * @param {import('./class').PositionOption} options
     * @param {string} [level] - Default to "info". See {@link MessageLevel} for available values.
     * @param {number} - [timeout] - Timeout(ms) before message begins to fade out. Default to 4000.
     */
    showMessage: function (message, options, level = MessageLevel.INFO, timeout = 4000) {
        if (!EnumHelper.hasValue(MessageLevel, level)) level = MessageLevel.INFO;
        let target = options.target;
        if (!target.className && !target.attributes) throw new Error('[@blink-common/message] 传入 element 不是有效节点.');
        let targetDoc = target.ownerDocument;
        let frag = targetDoc.createDocumentFragment(), linkDiv = targetDoc.createElement('div');
        linkDiv.style.whiteSpace = 'pre';
        linkDiv.innerHTML = '<span class="toast-text">' + message + '</span>';
        linkDiv.className = 'link-toast ' + level + ' ' + (options.fixed ? 'fixed' : '');
        targetDoc.querySelector('div.link-toast')?.remove();
        frag.appendChild(linkDiv);
        targetDoc.body.appendChild(frag);
        let offset = _getCoord(linkDiv, options);
        linkDiv.style.left = offset.left + 'px';
        linkDiv.style.top = offset.top + 'px';
        setTimeout((function () {
            linkDiv.className += ' out',
                setTimeout((function () {
                    linkDiv.parentNode ? linkDiv.parentNode.removeChild(linkDiv) : linkDiv.remove();
                }), 350)
        }), timeout);
    },
    /**
     * Download blob as a file.
     * @param {Blob} blob 
     * @param {string} filename - File name with extension.
     */
    downloadBlob: function (blob, filename) {
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
    },
    /**
     * 
     * @param {HTMLVideoElement} video 
     * @param {string} [fileName] - Default to document.title.
     */
    saveVideoFrame(video, fileName = document.title) {
        let videoWidth = video.videoWidth;
        let videoHeight = video.videoHeight;
        let canvas = document.createElement('canvas');
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, videoWidth, videoHeight);
        canvas.toBlob((blob) => ui.downloadBlob(blob, `${fileName}_${videoWidth}x${videoHeight}_${Math.trunc(video.currentTime)}.png`));
    },
    /* #endregion */
    /* #region Fullscreen/Webfullscreen */
    isFullscreen() {
        return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    },
    isFullscreenEnabled() {
        // return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        return util.getFirstTruthyMember(['fullscreenEnabled',
            'webkitFullscreenEnabled',
            'mozFullScreenEnabled',
            'msFullscreenEnabled'], document);
    },
    /**
     * Returns the Element that is currently being presented in full-screen mode in this document.
     * @param {boolean} [tryShadowRoot] - Whether or not to get full-screen element from ShadowRoot. Default to false.
     * @returns 
     */
    getFullscreenElement(tryShadowRoot = false) {
        /** @type {Element} */
        var fsEle = util.getFirstTruthyMember(['fullscreenElement',
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