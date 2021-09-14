export const ui = {
    /**
     * jQuery.fn.offset的js实现，不支持IE11以下浏览器
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
        html.scrollTo(0, ui.offset2(element).top - (html.clientHeight - element.getBoundingClientRect().height) / 2);
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
    dispatchMouseEvent(ele, eventType, params) {
        params = params || { bubbles: false, cancelable: false };
        let mouseEvent = document.createEvent('MouseEvent');
        mouseEvent.initMouseEvent(eventType,
            params.bubbles,
            params.cancelable,
            unsafeWindow,
            0,
            params.screenX || 0,
            params.screenY || 0,
            params.clientX || 0,
            params.clientY || 0,
            params.ctrlKey || false,
            params.altKey || false,
            params.shiftKey || false,
            params.metaKey || false,
            params.button || 0,
            params.relatedTarget || null
        )
        ele.dispatchEvent(mouseEvent);
    },
    dispatchClickEvent(ele, params) {
        ui.dispatchMouseEvent(ele, 'click', params);
    },
    /**
     * 
     * @param {Event} e 
     * @returns 
     */
    isEventFromThisDoc(e) {
        return e.target && e.target.getRootNode().isSameNode(document);
    },
    /**
     * 
     * @param {string} selector 
     * @param {Element} context 
     */
    hide(selector, context = document) {
        context.querySelectorAll(selector).forEach((element) => ui.hideElement(element));
    },
    /**
     * 
     * @param {Element} element 
     */
    hideElement(element) {
        if (element) element.style.display = 'none';
    },
    /**
     * 
     * @param {string} selector 
     * @param {string|Element} context 
     * @returns 
     */
    querySelectorFirst(selector, context) {
        if (context instanceof Element) return context.querySelector(selector);
        else {
            for (let element of document.querySelectorAll(context)) {
                let findElement = element.querySelector(selector);
                if (findElement) return findElement;
            }
        }
    }
};