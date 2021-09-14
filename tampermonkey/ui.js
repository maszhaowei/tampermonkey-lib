export const ui = {
    Tooltip: function () {
        function i(i) {
            this.options = Object.assign({
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
            }, i),
                this.status = 0,
                this.prefix = 'zw-player-tooltips',
                this.triggerClass = this.prefix + '-trigger',
                'tip' === this.options.type && (this.options.autoShow = !1, this.options.autoHide = !1, this.options.autoRemove = !0),
                this.initialize()
        }
        return i.prototype.initialize = function () {
            this.options.target.classList.add(this.triggerClass),
                this.options.autoShow && this.show(),
                'function' == typeof this.options.callback && this.options.callback(),
                'tip' === this.options.type && this.bindEvents()
        },
            i.prototype.bindEvents = function () {
                var i = this;
                this.options.target.addEventListener('mouseenter', (function () {
                    i.options.supportShow && i.show()
                }));
                this.options.target.addEventListener('mouseleave', (function () {
                    i.hide()
                }));
                this.options.target.addEventListener('click', (function (e) {
                    var t = parseInt(i.options.changeMode + '', 10);
                    if (!isNaN(t)) switch (t) {
                        case 1: {
                            /** @type {Node} */
                            let ele;
                            for (ele of e.target.parentElement.children) {
                                if (ele.isSameNode(e.target)) continue;
                                return setTimeout((function () {
                                    ele.hasClass(i.triggerClass) && ele.is(':visible') && ele.dispatchEvent(new MouseEvent('mouseenter'))
                                }), 0),
                                    !1
                            }
                            break;
                        }
                        case 2:
                            i.hide();
                            break;
                        case 3:
                            i.options.target.dispatchEvent(new MouseEvent('mouseleave')),
                                i.options.target.dispatchEvent(new MouseEvent('mouseenter'))
                    }
                }))
            },
            i.prototype.toggle = function (i) {
                this.status ? this.hide() : this.show(i)
            },
            i.prototype.show = function () {
                var e = this,
                    t = 200;
                'info' === this.options.type && (t = 0),
                    this.status || (clearTimeout(this.timeOut), this.timeOut = window.setTimeout((function () {
                        e.options.singleMode && e.destroy(!0),
                            e.create(),
                            e.status = 1,
                            e.$zwtooltips.classList.add('active'),
                            'function' == typeof e.options.onShow && e.options.onShow(e),
                            e.options.autoHide && setTimeout((function () {
                                e.hide()
                            }), e.options.hideTime)
                    }), t))
            },
            i.prototype.add = function (i) {
                'string' == typeof i ? i = Object.assign(this.options, {
                    text: i
                }) : 'object' == typeof i && (i = Object.assign(this.options, i));
                var e = this.template(!1, i);
                this.$zwtooltips.insertAdjacentElement('beforeend', e),
                    this.updatePos(!0)
            },
            i.prototype.hide = function () {
                this.status = 0,
                    clearTimeout(this.timeOut),
                    this.$zwtooltips && this.$zwtooltips.classList.remove('active'),
                    'function' == typeof this.options.onHide && this.options.onHide(this),
                    this.options.autoRemove && this.destroy()
            },
            i.prototype.destroy = function (i) {
                if (clearTimeout(this.timeOut), i) {
                    var e = document.querySelector('.' + this.prefix + '[data-tooltip-name="' + this.options.name + '"]');
                    e && e.remove()
                } else this.$zwtooltips && this.$zwtooltips.remove()
            },
            i.prototype.getElemPos = function (i) {
                var e = ui.offset2(i);
                /** @type {DOMRect} */
                let rect = i.getBoundingClientRect();
                return {
                    x: e.left,
                    y: e.top,
                    w: rect.width,
                    h: rect.height
                }
            },
            i.prototype.create = function () {
                document.querySelector('.' + this.prefix + '[data-tooltip-name="' + this.options.name + '"]') || (this.$zwtooltips = this.template(!0), this.options.game && this.$zwtooltips.classList.add('tooltip-game'), this.options.target.insertAdjacentElement('beforeend', this.$zwtooltips)),
                    this.$zwtooltips.insertAdjacentElement('beforeend', this.template()),
                    this.updatePos()
            },
            i.prototype.template = function (i, e) {
                var t,
                    a,
                    r,
                    o = '',
                    n = [
                    ];
                if (a = (e = e || this.options).text || e.target.getAttribute('data-text'), r = e.position || e.target.getAttribute('data-position'), e.changeMode = e.target.getAttribute('data-change-mode') || 0, i) n.push(e.type),
                    n.push(r),
                    e.animation && n.push('animation'),
                    t = n.join(' '),
                    o = '<div class="' + this.prefix + ' ' + t + '"  data-tooltip-name="' + e.name + '"></div>';
                else {
                    var l = '';
                    e.padding && (e.padding instanceof Array ? l += 'padding:' + e.padding.join('px ') + 'px;' : 'number' == typeof e.padding && (l += 'padding:' + e.padding + ';')),
                        e.fontSize && 'number' == typeof e.fontSize && (l += 'font-size:' + e.fontSize + 'px;'),
                        o = '<div class="zw-tooltip" style="' + l + '">' + a + '</div>'
                }
                return document.createRange().createContextualFragment(o).firstElementChild
            },
            i.prototype.updatePos = function () {
                var e,
                    t,
                    a,
                    r = this.options,
                    o = this.getElemPos(r.target),
                    n = this.getElemPos(this.$zwtooltips);
                switch (r.position || r.target.getAttribute('data-position')) {
                    case 'top-left':
                        e = o.x,
                            t = o.y - r.margin - n.h + 10,
                            a = 'left:' + o.w / 2 + 'px;';
                        break;
                    case 'top-center':
                        e = o.x + o.w / 2 - n.w / 2,
                            t = o.y + r.margin + 10,
                            a = 'left:' + n.w / 2 + 'px;';
                        break;
                    case 'top-right':
                        e = o.x + o.w - n.w,
                            t = o.y - r.margin - n.h + 10,
                            a = 'left:' + (n.w - o.w / 2) + 'px;';
                        break;
                    case 'bottom-left':
                        e = o.x,
                            t = o.y + o.h + r.margin - 10,
                            a = 'left:' + o.w / 2 + 'px;';
                        break;
                    case 'bottom-center':
                        e = o.x + o.w / 2 - n.w / 2,
                            t = o.y + o.h + r.margin - 10,
                            a = 'left:' + n.w / 2 + 'px;';
                        break;
                    case 'bottom-right':
                        e = o.x + o.w - n.w,
                            t = o.y + o.h + r.margin - 10,
                            a = 'left:' + (n.w - o.w / 2) + 'px;';
                        break;
                    case 'left-top':
                        e = o.x - r.margin - n.w + 10,
                            t = o.y;
                        break;
                    case 'left-center':
                        e = o.x - r.margin - n.w + 10,
                            t = o.y + o.h / 2 - n.h / 2;
                        break;
                    case 'left-bottom':
                        e = o.x - r.margin - n.w + 10,
                            t = o.y + o.h - n.h;
                        break;
                    case 'right-top':
                        e = o.x + r.margin + o.w - 10,
                            t = o.y;
                        break;
                    case 'right-center':
                        e = o.x + r.margin + o.w - 10,
                            t = o.y + o.h / 2 - n.h / 2;
                        break;
                    case 'right-bottom':
                        e = o.x + r.margin + o.w - 10,
                            t = o.y + o.h - n.h;
                        break;
                    case 'center-center':
                        e = o.x + o.w / 2 - n.w / 2,
                            t = o.y + o.h / 2 - n.h / 2 + 10
                }
                if (r.arrow) {
                    var l = '<div class="arrow" style="' + a + '"></div>';
                    this.$zwtooltips.insertAdjacentHTML('beforeend', l)
                }
                this.$zwtooltips.style.top = (t + r.top + document.documentElement.clientTop - window.pageYOffset) + 'px';
                this.$zwtooltips.style.left = (e + r.left + document.documentElement.clientLeft - window.pageXOffset) + 'px';
            },
            i
    }(),
    /**
     * 
     * @param {string} tooltip 
     * @param {Element} target 
     * @param {object} param2 
     * @returns 
     */
    showTooltip(tooltip, target, {position = "center-center", left = 0, top = 0}={}) {
        if(!tooltip || tooltip.trim() == "") {
            util.debug("Tooltip is empty: " + tooltip);
            return;
        }
        new ui.Tooltip({
            text: tooltip,
            target: target,
            position: position,
            left: left,
            top: top
        });
    },
}