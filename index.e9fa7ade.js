/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
! function(t, e) {
    function i(e, i) {
        var n = e.nodeName.toLowerCase();
        if ("area" === n) {
            var o, a = e.parentNode,
                r = a.name;
            return !(!e.href || !r || "map" !== a.nodeName.toLowerCase()) && (!!(o = t("img[usemap=#" + r + "]")[0]) && s(o))
        }
        return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" == n && e.href || i) && s(e)
    }

    function s(e) {
        return !t(e).parents().andSelf().filter((function() {
            return "hidden" === t.curCSS(this, "visibility") || t.expr.filters.hidden(this)
        })).length
    }
    t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
        version: "1.8.23",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), t.fn.extend({
        propAttr: t.fn.prop || t.fn.attr,
        _focus: t.fn.focus,
        focus: function(e, i) {
            return "number" == typeof e ? this.each((function() {
                var s = this;
                setTimeout((function() {
                    t(s).focus(), i && i.call(s)
                }), e)
            })) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var e;
            return e = t.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter((function() {
                return /(relative|absolute|fixed)/.test(t.curCSS(this, "position", 1)) && /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
            })).eq(0) : this.parents().filter((function() {
                return /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
            })).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
                    if (("absolute" === (s = o.css("position")) || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    o = o.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", (function(t) {
                t.preventDefault()
            }))
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], (function(i, s) {
        function n(e, i, s, n) {
            return t.each(o, (function() {
                i -= parseFloat(t.curCSS(e, "padding" + this, !0)) || 0, s && (i -= parseFloat(t.curCSS(e, "border" + this + "Width", !0)) || 0), n && (i -= parseFloat(t.curCSS(e, "margin" + this, !0)) || 0)
            })), i
        }
        var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            a = s.toLowerCase(),
            r = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + s] = function(i) {
            return i === e ? r["inner" + s].call(this) : this.each((function() {
                t(this).css(a, n(this, i) + "px")
            }))
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? r["outer" + s].call(this, e) : this.each((function() {
                t(this).css(a, n(this, e, !0, i) + "px")
            }))
        }
    })), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo((function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        })) : function(e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var s = t.attr(e, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && i(e, !n)
        }
    }), t((function() {
        var e = document.body,
            i = e.appendChild(i = document.createElement("div"));
        i.offsetHeight, t.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
    })), t.curCSS || (t.curCSS = t.css), t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n = t.ui[e].prototype;
                for (var o in s) n.plugins[o] = n.plugins[o] || [], n.plugins[o].push([i, s[o]])
            },
            call: function(t, e, i) {
                var s = t.plugins[e];
                if (s && t.element[0].parentNode)
                    for (var n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        contains: function(t, e) {
            return document.compareDocumentPosition ? 16 & t.compareDocumentPosition(e) : t !== e && t.contains(e)
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        isOverAxis: function(t, e, i) {
            return t > e && t < e + i
        },
        isOver: function(e, i, s, n, o, a) {
            return t.ui.isOverAxis(e, s, o) && t.ui.isOverAxis(i, n, a)
        }
    }))
}(jQuery),
function(t, e) {
    if (t.cleanData) {
        var i = t.cleanData;
        t.cleanData = function(e) {
            for (var s, n = 0; null != (s = e[n]); n++) try {
                t(s).triggerHandler("remove")
            } catch (t) {}
            i(e)
        }
    } else {
        var s = t.fn.remove;
        t.fn.remove = function(e, i) {
            return this.each((function() {
                return i || (!e || t.filter(e, [this]).length) && t("*", this).add([this]).each((function() {
                    try {
                        t(this).triggerHandler("remove")
                    } catch (t) {}
                })), s.call(t(this), e, i)
            }))
        }
    }
    t.widget = function(e, i, s) {
        var n, o = e.split(".")[0];
        n = o + "-" + (e = e.split(".")[1]), s || (s = i, i = t.Widget), t.expr[":"][n] = function(i) {
            return !!t.data(i, e)
        }, t[o] = t[o] || {}, t[o][e] = function(t, e) {
            arguments.length && this._createWidget(t, e)
        };
        var a = new i;
        a.options = t.extend(!0, {}, a.options), t[o][e].prototype = t.extend(!0, a, {
            namespace: o,
            widgetName: e,
            widgetEventPrefix: t[o][e].prototype.widgetEventPrefix || e,
            widgetBaseClass: n
        }, s), t.widget.bridge(e, t[o][e])
    }, t.widget.bridge = function(i, s) {
        t.fn[i] = function(n) {
            var o = "string" == typeof n,
                a = Array.prototype.slice.call(arguments, 1),
                r = this;
            return n = !o && a.length ? t.extend.apply(null, [!0, n].concat(a)) : n, o && "_" === n.charAt(0) || (o ? this.each((function() {
                var s = t.data(this, i),
                    o = s && t.isFunction(s[n]) ? s[n].apply(s, a) : s;
                if (o !== s && o !== e) return r = o, !1
            })) : this.each((function() {
                var e = t.data(this, i);
                e ? e.option(n || {})._init() : t.data(this, i, new s(n, this))
            }))), r
        }
    }, t.Widget = function(t, e) {
        arguments.length && this._createWidget(t, e)
    }, t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(e, i) {
            t.data(i, this.widgetName, this), this.element = t(i), this.options = t.extend(!0, {}, this.options, this._getCreateOptions(), e);
            var s = this;
            this.element.bind("remove." + this.widgetName, (function() {
                s.destroy()
            })), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n = i;
            if (0 === arguments.length) return t.extend({}, this.options);
            if ("string" == typeof i) {
                if (s === e) return this.options[i];
                (n = {})[i] = s
            }
            return this._setOptions(n), this
        },
        _setOptions: function(e) {
            var i = this;
            return t.each(e, (function(t, e) {
                i._setOption(t, e)
            })), this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && this.widget()[e ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", e), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.call(this.element[0], i, s) || i.isDefaultPrevented())
        }
    }
}(jQuery),
function(t, e) {
    var i = !1;
    t(document).mouseup((function(t) {
        i = !1
    })), t.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, (function(t) {
                return e._mouseDown(t)
            })).bind("click." + this.widgetName, (function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            })), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!i) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var s = this,
                    n = 1 == e.which,
                    o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !o && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                    s.mouseDelayMet = !0
                }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), i = !0, !0))
            }
        },
        _mouseMove: function(e) {
            return !t.browser.msie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target == this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(t) {
            return this.mouseDelayMet
        },
        _mouseStart: function(t) {},
        _mouseDrag: function(t) {},
        _mouseStop: function(t) {},
        _mouseCapture: function(t) {
            return !0
        }
    })
}(jQuery),
function(t, e) {
    t.ui = t.ui || {};
    var i = /left|center|right/,
        s = /top|center|bottom/,
        n = "center",
        o = {},
        a = t.fn.position,
        r = t.fn.offset;
    t.fn.position = function(e) {
            if (!e || !e.of) return a.apply(this, arguments);
            e = t.extend({}, e);
            var r, l, h, c = t(e.of),
                d = c[0],
                u = (e.collision || "flip").split(" "),
                p = e.offset ? e.offset.split(" ") : [0, 0];
            return 9 === d.nodeType ? (r = c.width(), l = c.height(), h = {
                top: 0,
                left: 0
            }) : d.setTimeout ? (r = c.width(), l = c.height(), h = {
                top: c.scrollTop(),
                left: c.scrollLeft()
            }) : d.preventDefault ? (e.at = "left top", r = l = 0, h = {
                top: e.of.pageY,
                left: e.of.pageX
            }) : (r = c.outerWidth(), l = c.outerHeight(), h = c.offset()), t.each(["my", "at"], (function() {
                var t = (e[this] || "").split(" ");
                1 === t.length && (t = i.test(t[0]) ? t.concat([n]) : s.test(t[0]) ? [n].concat(t) : [n, n]), t[0] = i.test(t[0]) ? t[0] : n, t[1] = s.test(t[1]) ? t[1] : n, e[this] = t
            })), 1 === u.length && (u[1] = u[0]), p[0] = parseInt(p[0], 10) || 0, 1 === p.length && (p[1] = p[0]), p[1] = parseInt(p[1], 10) || 0, "right" === e.at[0] ? h.left += r : e.at[0] === n && (h.left += r / 2), "bottom" === e.at[1] ? h.top += l : e.at[1] === n && (h.top += l / 2), h.left += p[0], h.top += p[1], this.each((function() {
                var i, s = t(this),
                    a = s.outerWidth(),
                    c = s.outerHeight(),
                    d = parseInt(t.curCSS(this, "marginLeft", !0)) || 0,
                    f = parseInt(t.curCSS(this, "marginTop", !0)) || 0,
                    g = a + d + (parseInt(t.curCSS(this, "marginRight", !0)) || 0),
                    m = c + f + (parseInt(t.curCSS(this, "marginBottom", !0)) || 0),
                    v = t.extend({}, h);
                "right" === e.my[0] ? v.left -= a : e.my[0] === n && (v.left -= a / 2), "bottom" === e.my[1] ? v.top -= c : e.my[1] === n && (v.top -= c / 2), o.fractions || (v.left = Math.round(v.left), v.top = Math.round(v.top)), i = {
                    left: v.left - d,
                    top: v.top - f
                }, t.each(["left", "top"], (function(s, n) {
                    t.ui.position[u[s]] && t.ui.position[u[s]][n](v, {
                        targetWidth: r,
                        targetHeight: l,
                        elemWidth: a,
                        elemHeight: c,
                        collisionPosition: i,
                        collisionWidth: g,
                        collisionHeight: m,
                        offset: p,
                        my: e.my,
                        at: e.at
                    })
                })), t.fn.bgiframe && s.bgiframe(), s.offset(t.extend(v, {
                    using: e.using
                }))
            }))
        }, t.ui.position = {
            fit: {
                left: function(e, i) {
                    var s = t(window),
                        n = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft();
                    e.left = n > 0 ? e.left - n : Math.max(e.left - i.collisionPosition.left, e.left)
                },
                top: function(e, i) {
                    var s = t(window),
                        n = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop();
                    e.top = n > 0 ? e.top - n : Math.max(e.top - i.collisionPosition.top, e.top)
                }
            },
            flip: {
                left: function(e, i) {
                    if (i.at[0] !== n) {
                        var s = t(window),
                            o = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft(),
                            a = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                            r = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                            l = -2 * i.offset[0];
                        e.left += i.collisionPosition.left < 0 || o > 0 ? a + r + l : 0
                    }
                },
                top: function(e, i) {
                    if (i.at[1] !== n) {
                        var s = t(window),
                            o = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop(),
                            a = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                            r = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                            l = -2 * i.offset[1];
                        e.top += i.collisionPosition.top < 0 || o > 0 ? a + r + l : 0
                    }
                }
            }
        }, t.offset.setOffset || (t.offset.setOffset = function(e, i) {
            /static/.test(t.curCSS(e, "position")) && (e.style.position = "relative");
            var s = t(e),
                n = s.offset(),
                o = parseInt(t.curCSS(e, "top", !0), 10) || 0,
                a = parseInt(t.curCSS(e, "left", !0), 10) || 0,
                r = {
                    top: i.top - n.top + o,
                    left: i.left - n.left + a
                };
            "using" in i ? i.using.call(e, r) : s.css(r)
        }, t.fn.offset = function(e) {
            var i = this[0];
            return i && i.ownerDocument ? e ? t.isFunction(e) ? this.each((function(i) {
                t(this).offset(e.call(this, i, t(this).offset()))
            })) : this.each((function() {
                t.offset.setOffset(this, e)
            })) : r.call(this) : null
        }), t.curCSS || (t.curCSS = t.css),
        function() {
            var e, i, s, n, a, r = document.getElementsByTagName("body")[0],
                l = document.createElement("div");
            for (var h in e = document.createElement(r ? "div" : "body"), s = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, r && t.extend(s, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                }), s) e.style[h] = s[h];
            e.appendChild(l), (i = r || document.documentElement).insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", n = t(l).offset((function(t, e) {
                return e
            })).offset(), e.innerHTML = "", i.removeChild(e), a = n.top + n.left + (r ? 2e3 : 0), o.fractions = a > 21 && a < 22
        }()
}(jQuery),
function(t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" == this.options.helper && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(e), !!this.handle && (i.iframeFix && t(!0 === i.iframeFix ? "iframe" : i.iframeFix).each((function() {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            })), !0))
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = !1;
            t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1);
            for (var s = this.element[0], n = !1; s && (s = s.parentNode);) s == document && (n = !0);
            if (!n && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var o = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                    !1 !== o._trigger("stop", e) && o._clear()
                }))
            } else !1 !== this._trigger("stop", e) && this._clear();
            return !1
        },
        _mouseUp: function(e) {
            return !0 === this.options.iframeFix && t("div.ui-draggable-iframeFix").each((function() {
                this.parentNode.removeChild(this)
            })), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            var i = !this.options.handle || !t(this.options.handle, this.element).length;
            return t(this.options.handle, this.element).find("*").andSelf().each((function() {
                this == e.target && (i = !0)
            })), i
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] != this.element[0] && !/(fixed|absolute)/.test(s.css("position")) && s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), "document" != e.containment && "window" != e.containment || (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
            else {
                var i = t(e.containment),
                    s = i[0];
                if (!s) return;
                i.offset();
                var n = "hidden" != t(s).css("overflow");
                this.containment = [(parseInt(t(s).css("borderLeftWidth"), 10) || 0) + (parseInt(t(s).css("paddingLeft"), 10) || 0), (parseInt(t(s).css("borderTopWidth"), 10) || 0) + (parseInt(t(s).css("paddingTop"), 10) || 0), (n ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(t(s).css("borderLeftWidth"), 10) || 0) - (parseInt(t(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(t(s).css("borderTopWidth"), 10) || 0) - (parseInt(t(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1,
                n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s),
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s)
            }
        },
        _generatePosition: function(e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName),
                o = e.pageX,
                a = e.pageY;
            if (this.originalPosition) {
                var r;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        r = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else r = this.containment;
                    e.pageX - this.offset.click.left < r[0] && (o = r[0] + this.offset.click.left), e.pageY - this.offset.click.top < r[1] && (a = r[1] + this.offset.click.top), e.pageX - this.offset.click.left > r[2] && (o = r[2] + this.offset.click.left), e.pageY - this.offset.click.top > r[3] && (a = r[3] + this.offset.click.top)
                }
                if (i.grid) {
                    var h = i.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                    a = r && (h - this.offset.click.top < r[1] || h - this.offset.click.top > r[3]) ? h - this.offset.click.top < r[1] ? h + i.grid[1] : h - i.grid[1] : h;
                    var c = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                    o = r && (c - this.offset.click.left < r[0] || c - this.offset.click.left > r[2]) ? c - this.offset.click.left < r[0] ? c + i.grid[0] : c - i.grid[0] : c
                }
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function(t) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.extend(t.ui.draggable, {
        version: "1.8.23"
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                o = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each((function() {
                var i = t.data(this, "sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            }))
        },
        stop: function(e, i) {
            var s = t(this).data("draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, (function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            }))
        },
        drag: function(e, i) {
            var s = t(this).data("draggable"),
                n = this;
            t.each(s.sortables, (function(o) {
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            }))
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i) {
            var s = t("body"),
                n = t(this).data("draggable").options;
            s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(e, i) {
            var s = t(this).data("draggable");
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName && (s.overflowOffset = s.scrollParent.offset())
        },
        drag: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                o = !1;
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (s.overflowOffset.top + s.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (s.overflowOffset.left + s.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options;
            s.snapElements = [], t(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each((function() {
                var e = t(this),
                    i = e.offset();
                this != s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            }))
        },
        drag: function(e, i) {
            for (var s = t(this).data("draggable"), n = s.options, o = n.snapTolerance, a = i.offset.left, r = a + s.helperProportions.width, l = i.offset.top, h = l + s.helperProportions.height, c = s.snapElements.length - 1; c >= 0; c--) {
                var d = s.snapElements[c].left,
                    u = d + s.snapElements[c].width,
                    p = s.snapElements[c].top,
                    f = p + s.snapElements[c].height;
                if (d - o < a && a < u + o && p - o < l && l < f + o || d - o < a && a < u + o && p - o < h && h < f + o || d - o < r && r < u + o && p - o < l && l < f + o || d - o < r && r < u + o && p - o < h && h < f + o) {
                    if ("inner" != n.snapMode) {
                        var g = Math.abs(p - h) <= o,
                            m = Math.abs(f - l) <= o,
                            v = Math.abs(d - r) <= o,
                            b = Math.abs(u - a) <= o;
                        g && (i.position.top = s._convertPositionTo("relative", {
                            top: p - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                            top: f,
                            left: 0
                        }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: d - s.helperProportions.width
                        }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: u
                        }).left - s.margins.left)
                    }
                    var _ = g || m || v || b;
                    if ("outer" != n.snapMode) {
                        g = Math.abs(p - l) <= o, m = Math.abs(f - h) <= o, v = Math.abs(d - a) <= o, b = Math.abs(u - r) <= o;
                        g && (i.position.top = s._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                            top: f - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: d
                        }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: u - s.helperProportions.width
                        }).left - s.margins.left)
                    }!s.snapElements[c].snapping && (g || m || v || b || _) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = g || m || v || b || _
                } else s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = !1
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i) {
            var s = t(this).data("draggable").options,
                n = t.makeArray(t(s.stack)).sort((function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                }));
            if (n.length) {
                var o = parseInt(n[0].style.zIndex) || 0;
                t(n).each((function(t) {
                    this.style.zIndex = o + t
                })), this[0].style.zIndex = o + n.length
            }
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var e = this.options,
                i = e.accept;
            this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; i < e.length; i++) e[i] == this && e.splice(i, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function(e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current;
            if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
            var n = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function() {
                var e = t.data(this, "droppable");
                if (e.options.greedy && !e.options.disabled && e.options.scope == s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance)) return n = !0, !1
            })), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.extend(t.ui.droppable, {
        version: "1.8.23"
    }), t.ui.intersect = function(e, i, s) {
        if (!i.offset) return !1;
        var n = (e.positionAbs || e.position.absolute).left,
            o = n + e.helperProportions.width,
            a = (e.positionAbs || e.position.absolute).top,
            r = a + e.helperProportions.height,
            l = i.offset.left,
            h = l + i.proportions.width,
            c = i.offset.top,
            d = c + i.proportions.height;
        switch (s) {
            case "fit":
                return l <= n && o <= h && c <= a && r <= d;
            case "intersect":
                return l < n + e.helperProportions.width / 2 && o - e.helperProportions.width / 2 < h && c < a + e.helperProportions.height / 2 && r - e.helperProportions.height / 2 < d;
            case "pointer":
                var u = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                    p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top;
                return t.ui.isOver(p, u, c, l, i.proportions.height, i.proportions.width);
            case "touch":
                return (a >= c && a <= d || r >= c && r <= d || a < c && r > d) && (n >= l && n <= h || o >= l && o <= h || n < l && o > h);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s = t.ui.ddmanager.droppables[e.options.scope] || [],
                n = i ? i.type : null,
                o = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            t: for (var a = 0; a < s.length; a++)
                if (!(s[a].options.disabled || e && !s[a].accept.call(s[a].element[0], e.currentItem || e.element))) {
                    for (var r = 0; r < o.length; r++)
                        if (o[r] == s[a].element[0]) {
                            s[a].proportions.height = 0;
                            continue t
                        }
                    s[a].visible = "none" != s[a].element.css("display"), s[a].visible && ("mousedown" == n && s[a]._activate.call(s[a], i), s[a].offset = s[a].element.offset(), s[a].proportions = {
                        width: s[a].element[0].offsetWidth,
                        height: s[a].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            })), s
        },
        dragStart: function(e, i) {
            e.element.parents(":not(body,html)").bind("scroll.droppable", (function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }))
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s = t.ui.intersect(e, this, this.options.tolerance),
                        n = s || 1 != this.isover ? s && 0 == this.isover ? "isover" : null : "isout";
                    if (n) {
                        var o;
                        if (this.options.greedy) {
                            var a = this.element.parents(":data(droppable):eq(0)");
                            a.length && ((o = t.data(a[0], "droppable")).greedyChild = "isover" == n ? 1 : 0)
                        }
                        o && "isover" == n && (o.isover = 0, o.isout = 1, o._out.call(o, i)), this[n] = 1, this["isout" == n ? "isover" : "isout"] = 0, this["isover" == n ? "_over" : "_out"].call(this, i), o && "isout" == n && (o.isout = 0, o.isover = 1, o._over.call(o, i))
                    }
                }
            }))
        },
        dragStop: function(e, i) {
            e.element.parents(":not(body,html)").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t, e) {
    t.widget("ui.resizable", t.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var e = this,
                i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var s = this.handles.split(",");
                this.handles = {};
                for (var n = 0; n < s.length; n++) {
                    var o = t.trim(s[n]),
                        a = t('<div class="ui-resizable-handle ' + ("ui-resizable-" + o) + '"></div>');
                    a.css({
                        zIndex: i.zIndex
                    }), "se" == o && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(a)
                }
            }
            this._renderAxis = function(e) {
                for (var i in e = e || this.element, this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var s, n = t(this.handles[i], this.element);
                        s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                        var o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        e.css(o, s), this._proportionallyResize()
                    }
                    t(this.handles[i]).length
                }
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover((function() {
                if (!e.resizing) {
                    if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    e.axis = t && t[1] ? t[1] : "se"
                }
            })), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").hover((function() {
                i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
            }), (function() {
                i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
            }))), this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var e = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                i.after(this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i = !1;
            for (var s in this.handles) t(this.handles[s])[0] == e.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function(e) {
            var s = this.options,
                n = this.element.position(),
                o = this.element;
            this.resizing = !0, this.documentScroll = {
                top: t(document).scrollTop(),
                left: t(document).scrollLeft()
            }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                position: "absolute",
                top: n.top,
                left: n.left
            }), this._renderProxy();
            var a = i(this.helper.css("left")),
                r = i(this.helper.css("top"));
            s.containment && (a += t(s.containment).scrollLeft() || 0, r += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: a,
                top: r
            }, this.size = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalPosition = {
                left: a,
                top: r
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var l = t(".ui-resizable-" + this.axis).css("cursor");
            return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i = this.helper,
                s = (this.options, this.originalMousePosition),
                n = this.axis,
                o = e.pageX - s.left || 0,
                a = e.pageY - s.top || 0,
                r = this._change[n];
            if (!r) return !1;
            var l = r.apply(this, [e, o, a]);
            t.browser.msie && t.browser.version, this.sizeDiff;
            return this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (l = this._updateRatio(l, e)), l = this._respectSize(l, e), this._propagate("resize", e), i.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i = this.options,
                s = this;
            if (this._helper) {
                var n = this._proportionallyResizeElements,
                    o = n.length && /textarea/i.test(n[0].nodeName),
                    a = o && t.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height,
                    r = o ? 0 : s.sizeDiff.width,
                    l = {
                        width: s.helper.width() - r,
                        height: s.helper.height() - a
                    },
                    h = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                    c = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
                i.animate || this.element.css(t.extend(l, {
                    top: c,
                    left: h
                })), s.helper.height(s.size.height), s.helper.width(s.size.width), this._helper && !i.animate && this._proportionallyResize()
            }
            return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, o, a, r = this.options;
            a = {
                minWidth: s(r.minWidth) ? r.minWidth : 0,
                maxWidth: s(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: s(r.minHeight) ? r.minHeight : 0,
                maxHeight: s(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), n > a.minHeight && (a.minHeight = n), i < a.maxWidth && (a.maxWidth = i), o < a.maxHeight && (a.maxHeight = o)), this._vBoundaries = a
        },
        _updateCache: function(t) {
            this.options;
            this.offset = this.helper.offset(), s(t.left) && (this.position.left = t.left), s(t.top) && (this.position.top = t.top), s(t.height) && (this.size.height = t.height), s(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t, e) {
            this.options;
            var i = this.position,
                n = this.size,
                o = this.axis;
            return s(t.height) ? t.width = t.height * this.aspectRatio : s(t.width) && (t.height = t.width / this.aspectRatio), "sw" == o && (t.left = i.left + (n.width - t.width), t.top = null), "nw" == o && (t.top = i.top + (n.height - t.height), t.left = i.left + (n.width - t.width)), t
        },
        _respectSize: function(t, e) {
            this.helper;
            var i = this._vBoundaries,
                n = (this._aspectRatio || e.shiftKey, this.axis),
                o = s(t.width) && i.maxWidth && i.maxWidth < t.width,
                a = s(t.height) && i.maxHeight && i.maxHeight < t.height,
                r = s(t.width) && i.minWidth && i.minWidth > t.width,
                l = s(t.height) && i.minHeight && i.minHeight > t.height;
            r && (t.width = i.minWidth), l && (t.height = i.minHeight), o && (t.width = i.maxWidth), a && (t.height = i.maxHeight);
            var h = this.originalPosition.left + this.originalSize.width,
                c = this.position.top + this.size.height,
                d = /sw|nw|w/.test(n),
                u = /nw|ne|n/.test(n);
            r && d && (t.left = h - i.minWidth), o && d && (t.left = h - i.maxWidth), l && u && (t.top = c - i.minHeight), a && u && (t.top = c - i.maxHeight);
            var p = !t.width && !t.height;
            return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), t
        },
        _proportionallyResize: function() {
            this.options;
            if (this._proportionallyResizeElements.length)
                for (var e = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    var s = this._proportionallyResizeElements[i];
                    if (!this.borderDif) {
                        var n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
                            o = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")];
                        this.borderDif = t.map(n, (function(t, e) {
                            return (parseInt(t, 10) || 0) + (parseInt(o[e], 10) || 0)
                        }))
                    }
                    t.browser.msie && (t(e).is(":hidden") || t(e).parents(":hidden").length) || s.css({
                        height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            if (this.elementOffset = e.offset(), this._helper) {
                this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                var s = t.browser.msie && t.browser.version < 7,
                    n = s ? 1 : 0,
                    o = s ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + o,
                    height: this.element.outerHeight() + o,
                    position: "absolute",
                    left: this.elementOffset.left - n + "px",
                    top: this.elementOffset.top - n + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(t, e, i) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e, i) {
                this.options;
                var s = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: s.width - e
                }
            },
            n: function(t, e, i) {
                this.options;
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.extend(t.ui.resizable, {
        version: "1.8.23"
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function(e, i) {
            var s = t(this).data("resizable").options,
                n = function(e) {
                    t(e).each((function() {
                        var e = t(this);
                        e.data("resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    }))
                };
            "object" != typeof s.alsoResize || s.alsoResize.parentNode ? n(s.alsoResize) : s.alsoResize.length ? (s.alsoResize = s.alsoResize[0], n(s.alsoResize)) : t.each(s.alsoResize, (function(t) {
                n(t)
            }))
        },
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s.originalSize,
                a = s.originalPosition,
                r = {
                    height: s.size.height - o.height || 0,
                    width: s.size.width - o.width || 0,
                    top: s.position.top - a.top || 0,
                    left: s.position.left - a.left || 0
                },
                l = function(e, s) {
                    t(e).each((function() {
                        var e = t(this),
                            n = t(this).data("resizable-alsoresize"),
                            o = {},
                            a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(a, (function(t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        })), e.css(o)
                    }))
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? l(n.alsoResize) : t.each(n.alsoResize, (function(t, e) {
                l(t, e)
            }))
        },
        stop: function(e, i) {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s._proportionallyResizeElements,
                a = o.length && /textarea/i.test(o[0].nodeName),
                r = a && t.ui.hasScroll(o[0], "left") ? 0 : s.sizeDiff.height,
                l = a ? 0 : s.sizeDiff.width,
                h = {
                    width: s.size.width - l,
                    height: s.size.height - r
                },
                c = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                d = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
            s.element.animate(t.extend(h, d && c ? {
                top: d,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(s.element.css("width"), 10),
                        height: parseInt(s.element.css("height"), 10),
                        top: parseInt(s.element.css("top"), 10),
                        left: parseInt(s.element.css("left"), 10)
                    };
                    o && o.length && t(o[0]).css({
                        width: i.width,
                        height: i.height
                    }), s._updateCache(i), s._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function(e, s) {
            var n = t(this).data("resizable"),
                o = n.options,
                a = n.element,
                r = o.containment,
                l = r instanceof t ? r.get(0) : /parent/.test(r) ? a.parent().get(0) : r;
            if (l)
                if (n.containerElement = t(l), /document/.test(r) || r == document) n.containerOffset = {
                    left: 0,
                    top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var h = t(l),
                        c = [];
                    t(["Top", "Right", "Left", "Bottom"]).each((function(t, e) {
                        c[t] = i(h.css("padding" + e))
                    })), n.containerOffset = h.offset(), n.containerPosition = h.position(), n.containerSize = {
                        height: h.innerHeight() - c[3],
                        width: h.innerWidth() - c[1]
                    };
                    var d = n.containerOffset,
                        u = n.containerSize.height,
                        p = n.containerSize.width,
                        f = t.ui.hasScroll(l, "left") ? l.scrollWidth : p,
                        g = t.ui.hasScroll(l) ? l.scrollHeight : u;
                    n.parentData = {
                        element: l,
                        left: d.left,
                        top: d.top,
                        width: f,
                        height: g
                    }
                }
        },
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = (s.containerSize, s.containerOffset),
                a = (s.size, s.position),
                r = s._aspectRatio || e.shiftKey,
                l = {
                    top: 0,
                    left: 0
                },
                h = s.containerElement;
            h[0] != document && /static/.test(h.css("position")) && (l = o), a.left < (s._helper ? o.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - o.left : s.position.left - l.left), r && (s.size.height = s.size.width / s.aspectRatio), s.position.left = n.helper ? o.left : 0), a.top < (s._helper ? o.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - o.top : s.position.top), r && (s.size.width = s.size.height * s.aspectRatio), s.position.top = s._helper ? o.top : 0), s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top;
            var c = Math.abs((s._helper, s.offset.left - l.left + s.sizeDiff.width)),
                d = Math.abs((s._helper ? s.offset.top - l.top : s.offset.top - o.top) + s.sizeDiff.height),
                u = s.containerElement.get(0) == s.element.parent().get(0),
                p = /relative|absolute/.test(s.containerElement.css("position"));
            u && p && (c -= s.parentData.left), c + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - c, r && (s.size.height = s.size.width / s.aspectRatio)), d + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - d, r && (s.size.width = s.size.height * s.aspectRatio))
        },
        stop: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = (s.position, s.containerOffset),
                a = s.containerPosition,
                r = s.containerElement,
                l = t(s.helper),
                h = l.offset(),
                c = l.outerWidth() - s.sizeDiff.width,
                d = l.outerHeight() - s.sizeDiff.height;
            s._helper && !n.animate && /relative/.test(r.css("position")) && t(this).css({
                left: h.left - a.left - o.left,
                width: c,
                height: d
            }), s._helper && !n.animate && /static/.test(r.css("position")) && t(this).css({
                left: h.left - a.left - o.left,
                width: c,
                height: d
            })
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s.size;
            s.ghost = s.originalElement.clone(), s.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: o.height,
                width: o.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), s.ghost.appendTo(s.helper)
        },
        resize: function(e, i) {
            var s = t(this).data("resizable");
            s.options;
            s.ghost && s.ghost.css({
                position: "relative",
                height: s.size.height,
                width: s.size.width
            })
        },
        stop: function(e, i) {
            var s = t(this).data("resizable");
            s.options;
            s.ghost && s.helper && s.helper.get(0).removeChild(s.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s.size,
                a = s.originalSize,
                r = s.originalPosition,
                l = s.axis;
            n._aspectRatio || e.shiftKey;
            n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
            var h = Math.round((o.width - a.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                c = Math.round((o.height - a.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
            /^(se|s|e)$/.test(l) ? (s.size.width = a.width + h, s.size.height = a.height + c) : /^(ne)$/.test(l) ? (s.size.width = a.width + h, s.size.height = a.height + c, s.position.top = r.top - c) : /^(sw)$/.test(l) ? (s.size.width = a.width + h, s.size.height = a.height + c, s.position.left = r.left - h) : (s.size.width = a.width + h, s.size.height = a.height + c, s.position.top = r.top - c, s.position.left = r.left - h)
        }
    });
    var i = function(t) {
            return parseInt(t, 10) || 0
        },
        s = function(t) {
            return !isNaN(parseInt(t, 10))
        }
}(jQuery),
function(t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"), e.each((function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                }))
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function(e) {
            var i = this;
            if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                var s = this.options;
                this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each((function() {
                    var s = t.data(this, "selectable-item");
                    s.startselected = !0, !e.metaKey && !e.ctrlKey && (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: s.element
                    }))
                })), t(e.target).parents().andSelf().each((function() {
                    var s = t.data(this, "selectable-item");
                    if (s) {
                        var n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected");
                        return s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                            selecting: s.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: s.element
                        }), !1
                    }
                }))
            }
        },
        _mouseDrag: function(e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options,
                    n = this.opos[0],
                    o = this.opos[1],
                    a = e.pageX,
                    r = e.pageY;
                if (n > a) {
                    var l = a;
                    a = n, n = l
                }
                if (o > r) {
                    l = r;
                    r = o, o = l
                }
                return this.helper.css({
                    left: n,
                    top: o,
                    width: a - n,
                    height: r - o
                }), this.selectees.each((function() {
                    var l = t.data(this, "selectable-item");
                    if (l && l.element != i.element[0]) {
                        var h = !1;
                        "touch" == s.tolerance ? h = !(l.left > a || l.right < n || l.top > r || l.bottom < o) : "fit" == s.tolerance && (h = l.left > n && l.right < a && l.top > o && l.bottom < r), h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {
                            selecting: l.element
                        }))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {
                            unselecting: l.element
                        }))), l.selected && !e.metaKey && !e.ctrlKey && !l.startselected && (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: l.element
                        })))
                    }
                })), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            this.dragged = !1;
            this.options;
            return t(".ui-unselecting", this.element[0]).each((function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            })), t(".ui-selecting", this.element[0]).each((function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            })), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.extend(t.ui.selectable, {
        version: "1.8.23"
    })
}(jQuery),
function(t, e) {
    t.widget("ui.sortable", t.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display"))), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        destroy: function() {
            t.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = this;
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e);
            var n = null,
                o = this;
            t(e.target).parents().each((function() {
                if (t.data(this, s.widgetName + "-item") == o) return n = t(this), !1
            }));
            if (t.data(e.target, s.widgetName + "-item") == o && (n = t(e.target)), !n) return !1;
            if (this.options.handle && !i) {
                var a = !1;
                if (t(this.options.handle, n).find("*").andSelf().each((function() {
                        this == e.target && (a = !0)
                    })), !a) return !1
            }
            return this.currentItem = n, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(e, i, s) {
            var n = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    s = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), !1 !== s && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var n = this.items.length - 1; n >= 0; n--) {
                var o = this.items[n],
                    a = o.item[0],
                    r = this._intersectsWithPointer(o);
                if (r && !(a == this.currentItem[0] || this.placeholder[1 == r ? "next" : "prev"]()[0] == a || t.ui.contains(this.placeholder[0], a) || "semi-dynamic" == this.options.type && t.ui.contains(this.element[0], a))) {
                    if (this.direction = 1 == r ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                    this._rearrange(e, o), this._trigger("change", e, this._uiHash());
                    break
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = s.placeholder.offset();
                    s.reverting = !0, t(this.helper).animate({
                        left: n.left - this.offset.parent.left - s.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - s.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, (function() {
                        s._clear(e)
                    }))
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each((function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            })), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each((function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            })), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                l = r + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                d = s + h > r && s + h < l && e + c > o && e + c < a;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? d : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                n = i && s,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return !!n && (this.floating ? a && "right" == a || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && s || "left" == o && !s : n && ("down" == n && i || "up" == n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i = [],
                s = [],
                n = this._connectWith();
            if (n && e)
                for (var o = n.length - 1; o >= 0; o--)
                    for (var a = t(n[o]), r = a.length - 1; r >= 0; r--) {
                        var l = t.data(a[r], this.widgetName);
                        l && l != this && !l.options.disabled && s.push([t.isFunction(l.options.items) ? l.options.items.call(l.element) : t(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                    }
            s.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (o = s.length - 1; o >= 0; o--) s[o][0].each((function() {
                i.push(this)
            }));
            return t(i)
        },
        _removeCurrentsFromItems: function() {
            for (var t = this.currentItem.find(":data(" + this.widgetName + "-item)"), e = 0; e < this.items.length; e++)
                for (var i = 0; i < t.length; i++) t[i] == this.items[e].item[0] && this.items.splice(e, 1)
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i = this.items,
                s = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                n = this._connectWith();
            if (n && this.ready)
                for (var o = n.length - 1; o >= 0; o--)
                    for (var a = t(n[o]), r = a.length - 1; r >= 0; r--) {
                        var l = t.data(a[r], this.widgetName);
                        l && l != this && !l.options.disabled && (s.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                            item: this.currentItem
                        }) : t(l.options.items, l.element), l]), this.containers.push(l))
                    }
            for (o = s.length - 1; o >= 0; o--)
                for (var h = s[o][1], c = s[o][0], d = (r = 0, c.length); r < d; r++) {
                    var u = t(c[r]);
                    u.data(this.widgetName + "-item", h), i.push({
                        item: u,
                        instance: h,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i];
                if (s.instance == this.currentContainer || !this.currentContainer || s.item[0] == this.currentItem[0]) {
                    var n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
                    e || (s.width = n.outerWidth(), s.height = n.outerHeight());
                    var o = n.offset();
                    s.left = o.left, s.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) {
                    o = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(e) {
            var i = e || this,
                s = i.options;
            if (!s.placeholder || s.placeholder.constructor == String) {
                var n = s.placeholder;
                s.placeholder = {
                    element: function() {
                        var e = t(document.createElement(i.currentItem[0].nodeName)).addClass(n || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return n || (e.style.visibility = "hidden"), e
                    },
                    update: function(t, e) {
                        n && !s.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            i.placeholder = t(s.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), s.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function(e) {
            for (var i = null, s = null, n = this.containers.length - 1; n >= 0; n--)
                if (!t.ui.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (i && t.ui.contains(this.containers[n].element[0], i.element[0])) continue;
                        i = this.containers[n], s = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (i)
                if (1 === this.containers.length) this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1;
                else if (this.currentContainer != this.containers[s]) {
                for (var o = 1e4, a = null, r = this.positionAbs[this.containers[s].floating ? "left" : "top"], l = this.items.length - 1; l >= 0; l--)
                    if (t.ui.contains(this.containers[s].element[0], this.items[l].item[0])) {
                        var h = this.containers[s].floating ? this.items[l].item.offset().left : this.items[l].item.offset().top;
                        Math.abs(h - r) < o && (o = Math.abs(h - r), a = this.items[l], this.direction = h - r > 0 ? "down" : "up")
                    }
                if (!a && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[s], a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[s].element, !0), this._trigger("change", e, this._uiHash()), this.containers[s]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1
            }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), ("" == s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), "document" != e.containment && "window" != e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0],
                    s = t(e.containment).offset(),
                    n = "hidden" != t(i).css("overflow");
                this.containment = [s.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1,
                n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s),
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s)
            }
        },
        _generatePosition: function(e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            "relative" == this.cssPosition && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var o = e.pageX,
                a = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), i.grid)) {
                var r = this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1];
                a = this.containment && (r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3]) ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r;
                var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this,
                o = this.counter;
            window.setTimeout((function() {
                o == n.counter && n.refreshPositions(!s)
            }), 0)
        },
        _clear: function(e, i) {
            this.reverting = !1;
            var s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var n in this._storedCSS) "auto" != this._storedCSS[n] && "static" != this._storedCSS[n] || (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            if (this.fromOutside && !i && s.push((function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                })), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && s.push((function(t) {
                    this._trigger("update", t, this._uiHash())
                })), !t.ui.contains(this.element[0], this.currentItem[0])) {
                i || s.push((function(t) {
                    this._trigger("remove", t, this._uiHash())
                }));
                for (n = this.containers.length - 1; n >= 0; n--) t.ui.contains(this.containers[n].element[0], this.currentItem[0]) && !i && (s.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.containers[n])), s.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.containers[n])))
            }
            for (n = this.containers.length - 1; n >= 0; n--) i || s.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[n])), this.containers[n].containerCache.over && (s.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (n = 0; n < s.length; n++) s[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (n = 0; n < s.length; n++) s[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.extend(t.ui.sortable, {
        version: "1.8.23"
    })
}(jQuery),
function(t, e) {
    t.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function() {
            var e = this,
                i = e.options;
            if (e.running = 0, e.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), e.headers = e.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", (function() {
                    i.disabled || t(this).addClass("ui-state-hover")
                })).bind("mouseleave.accordion", (function() {
                    i.disabled || t(this).removeClass("ui-state-hover")
                })).bind("focus.accordion", (function() {
                    i.disabled || t(this).addClass("ui-state-focus")
                })).bind("blur.accordion", (function() {
                    i.disabled || t(this).removeClass("ui-state-focus")
                })), e.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), i.navigation) {
                var s = e.element.find("a").filter(i.navigationFilter).eq(0);
                if (s.length) {
                    var n = s.closest(".ui-accordion-header");
                    n.length ? e.active = n : e.active = s.closest(".ui-accordion-content").prev()
                }
            }
            e.active = e._findActive(e.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), e.active.next().addClass("ui-accordion-content-active"), e._createIcons(), e.resize(), e.element.attr("role", "tablist"), e.headers.attr("role", "tab").bind("keydown.accordion", (function(t) {
                return e._keydown(t)
            })).next().attr("role", "tabpanel"), e.headers.not(e.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(), e.active.length ? e.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : e.headers.eq(0).attr("tabIndex", 0), t.browser.safari || e.headers.find("a").attr("tabIndex", -1), i.event && e.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", (function(t) {
                e._clickHandler.call(e, t, this), t.preventDefault()
            }))
        },
        _createIcons: function() {
            var e = this.options;
            e.icons && (t("<span></span>").addClass("ui-icon " + e.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(e.icons.header).toggleClass(e.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function() {
            var e = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (e.autoHeight || e.fillHeight) && i.css("height", ""), t.Widget.prototype.destroy.call(this)
        },
        _setOption: function(e, i) {
            t.Widget.prototype._setOption.apply(this, arguments), "active" == e && this.activate(i), "icons" == e && (this._destroyIcons(), i && this._createIcons()), "disabled" == e && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function(e) {
            if (!(this.options.disabled || e.altKey || e.ctrlKey)) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._clickHandler({
                            target: e.target
                        }, e.target), e.preventDefault()
                }
                return !o || (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), !1)
            }
        },
        resize: function() {
            var e, i = this.options;
            if (i.fillSpace) {
                if (t.browser.msie) {
                    var s = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                e = this.element.parent().height(), t.browser.msie && this.element.parent().css("overflow", s), this.headers.each((function() {
                    e -= t(this).outerHeight(!0)
                })), this.headers.next().each((function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                })).css("overflow", "auto")
            } else i.autoHeight && (e = 0, this.headers.next().each((function() {
                e = Math.max(e, t(this).height("").height())
            })).height(e));
            return this
        },
        activate: function(t) {
            this.options.active = t;
            var e = this._findActive(t)[0];
            return this._clickHandler({
                target: e
            }, e), this
        },
        _findActive: function(e) {
            return e ? "number" == typeof e ? this.headers.filter(":eq(" + e + ")") : this.headers.not(this.headers.not(e)) : !1 === e ? t([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function(e, i) {
            var s = this.options;
            if (!s.disabled)
                if (e.target) {
                    var n = t(e.currentTarget || i),
                        o = n[0] === this.active[0];
                    if (s.active = (!s.collapsible || !o) && this.headers.index(n), !(this.running || !s.collapsible && o)) {
                        var a = this.active,
                            r = (c = n.next(), l = this.active.next(), h = {
                                options: s,
                                newHeader: o && s.collapsible ? t([]) : n,
                                oldHeader: this.active,
                                newContent: o && s.collapsible ? t([]) : c,
                                oldContent: l
                            }, this.headers.index(this.active[0]) > this.headers.index(n[0]));
                        this.active = o ? t([]) : n, this._toggle(c, l, h, o, r), a.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(s.icons.headerSelected).addClass(s.icons.header), o || (n.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(s.icons.header).addClass(s.icons.headerSelected), n.next().addClass("ui-accordion-content-active"))
                    }
                } else {
                    if (!s.collapsible) return;
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(s.icons.headerSelected).addClass(s.icons.header), this.active.next().addClass("ui-accordion-content-active");
                    var l = this.active.next(),
                        h = {
                            options: s,
                            newHeader: t([]),
                            oldHeader: s.active,
                            newContent: t([]),
                            oldContent: l
                        },
                        c = this.active = t([]);
                    this._toggle(c, l, h)
                }
        },
        _toggle: function(e, i, s, n, o) {
            var a = this,
                r = a.options;
            a.toShow = e, a.toHide = i, a.data = s;
            var l = function() {
                if (a) return a._completed.apply(a, arguments)
            };
            if (a._trigger("changestart", null, a.data), a.running = 0 === i.size() ? e.size() : i.size(), r.animated) {
                var h = {};
                h = r.collapsible && n ? {
                    toShow: t([]),
                    toHide: i,
                    complete: l,
                    down: o,
                    autoHeight: r.autoHeight || r.fillSpace
                } : {
                    toShow: e,
                    toHide: i,
                    complete: l,
                    down: o,
                    autoHeight: r.autoHeight || r.fillSpace
                }, r.proxied || (r.proxied = r.animated), r.proxiedDuration || (r.proxiedDuration = r.duration), r.animated = t.isFunction(r.proxied) ? r.proxied(h) : r.proxied, r.duration = t.isFunction(r.proxiedDuration) ? r.proxiedDuration(h) : r.proxiedDuration;
                var c = t.ui.accordion.animations,
                    d = r.duration,
                    u = r.animated;
                u && !c[u] && !t.easing[u] && (u = "slide"), c[u] || (c[u] = function(t) {
                    this.slide(t, {
                        easing: u,
                        duration: d || 700
                    })
                }), c[u](h)
            } else r.collapsible && n ? e.toggle() : (i.hide(), e.show()), l(!0);
            i.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(), e.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function(t) {
            this.running = t ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
        }
    }), t.extend(t.ui.accordion, {
        version: "1.8.23",
        animations: {
            slide: function(e, i) {
                if ((e = t.extend({
                        easing: "swing",
                        duration: 300
                    }, e, i)).toHide.size())
                    if (e.toShow.size()) {
                        var s, n = e.toShow.css("overflow"),
                            o = 0,
                            a = {},
                            r = {},
                            l = e.toShow;
                        s = l[0].style.width, l.width(l.parent().width() - parseFloat(l.css("paddingLeft")) - parseFloat(l.css("paddingRight")) - (parseFloat(l.css("borderLeftWidth")) || 0) - (parseFloat(l.css("borderRightWidth")) || 0)), t.each(["height", "paddingTop", "paddingBottom"], (function(i, s) {
                            r[s] = "hide";
                            var n = ("" + t.css(e.toShow[0], s)).match(/^([\d+-.]+)(.*)$/);
                            a[s] = {
                                value: n[1],
                                unit: n[2] || "px"
                            }
                        })), e.toShow.css({
                            height: 0,
                            overflow: "hidden"
                        }).show(), e.toHide.filter(":hidden").each(e.complete).end().filter(":visible").animate(r, {
                            step: function(t, i) {
                                "height" == i.prop && (o = i.end - i.start == 0 ? 0 : (i.now - i.start) / (i.end - i.start)), e.toShow[0].style[i.prop] = o * a[i.prop].value + a[i.prop].unit
                            },
                            duration: e.duration,
                            easing: e.easing,
                            complete: function() {
                                e.autoHeight || e.toShow.css("height", ""), e.toShow.css({
                                    width: s,
                                    overflow: n
                                }), e.complete()
                            }
                        })
                    } else e.toHide.animate({
                        height: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide"
                    }, e);
                else e.toShow.animate({
                    height: "show",
                    paddingTop: "show",
                    paddingBottom: "show"
                }, e)
            },
            bounceslide: function(t) {
                this.slide(t, {
                    easing: t.down ? "easeOutBounce" : "swing",
                    duration: t.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function(t, e) {
    var i = 0;
    t.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var e, i = this,
                s = this.element[0].ownerDocument;
            this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", (function(s) {
                if (!i.options.disabled && !i.element.propAttr("readOnly")) {
                    e = !1;
                    var n = t.ui.keyCode;
                    switch (s.keyCode) {
                        case n.PAGE_UP:
                            i._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            i._move("nextPage", s);
                            break;
                        case n.UP:
                            i._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            i._keyEvent("next", s);
                            break;
                        case n.ENTER:
                        case n.NUMPAD_ENTER:
                            i.menu.active && (e = !0, s.preventDefault());
                        case n.TAB:
                            if (!i.menu.active) return;
                            i.menu.select(s);
                            break;
                        case n.ESCAPE:
                            i.element.val(i.term), i.close(s);
                            break;
                        default:
                            clearTimeout(i.searching), i.searching = setTimeout((function() {
                                i.term != i.element.val() && (i.selectedItem = null, i.search(null, s))
                            }), i.options.delay)
                    }
                }
            })).bind("keypress.autocomplete", (function(t) {
                e && (e = !1, t.preventDefault())
            })).bind("focus.autocomplete", (function() {
                i.options.disabled || (i.selectedItem = null, i.previous = i.element.val())
            })).bind("blur.autocomplete", (function(t) {
                i.options.disabled || (clearTimeout(i.searching), i.closing = setTimeout((function() {
                    i.close(t), i._change(t)
                }), 150))
            })), this._initSource(), this.menu = t("<ul></ul>").addClass("ui-autocomplete").appendTo(t(this.options.appendTo || "body", s)[0]).mousedown((function(e) {
                var s = i.menu.element[0];
                t(e.target).closest(".ui-menu-item").length || setTimeout((function() {
                    t(document).one("mousedown", (function(e) {
                        e.target !== i.element[0] && e.target !== s && !t.ui.contains(s, e.target) && i.close()
                    }))
                }), 1), setTimeout((function() {
                    clearTimeout(i.closing)
                }), 13)
            })).menu({
                focus: function(t, e) {
                    var s = e.item.data("item.autocomplete");
                    !1 !== i._trigger("focus", t, {
                        item: s
                    }) && /^key/.test(t.originalEvent.type) && i.element.val(s.value)
                },
                selected: function(t, e) {
                    var n = e.item.data("item.autocomplete"),
                        o = i.previous;
                    i.element[0] !== s.activeElement && (i.element.focus(), i.previous = o, setTimeout((function() {
                        i.previous = o, i.selectedItem = n
                    }), 1)), !1 !== i._trigger("select", t, {
                        item: n
                    }) && i.element.val(n.value), i.term = i.element.val(), i.close(t), i.selectedItem = n
                },
                blur: function(t, e) {
                    i.menu.element.is(":visible") && i.element.val() !== i.term && i.element.val(i.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), t.fn.bgiframe && this.menu.element.bgiframe(), i.beforeunloadHandler = function() {
                i.element.removeAttr("autocomplete")
            }, t(window).bind("beforeunload", i.beforeunloadHandler)
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), t(window).unbind("beforeunload", this.beforeunloadHandler), t.Widget.prototype.destroy.call(this)
        },
        _setOption: function(e, i) {
            t.Widget.prototype._setOption.apply(this, arguments), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(t(i || "body", this.element[0].ownerDocument)[0]), "disabled" === e && i && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t, e) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function(t, e) {
            return t = null != t ? t : this.element.val(), this.term = this.element.val(), t.length < this.options.minLength ? this.close(e) : (clearTimeout(this.closing), !1 !== this._trigger("search", e) ? this._search(t) : void 0)
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var t = this,
                e = ++i;
            return function(s) {
                e === i && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(t) {
            !this.options.disabled && t && t.length ? (t = this._normalize(t), this._suggest(t), this._trigger("open")) : this.close()
        },
        close: function(t) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this.element.val() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, (function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            }))
        },
        _suggest: function(e) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, e), this.menu.deactivate(), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new t.Event("mouseover"))
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, (function(t, i) {
                s._renderItem(e, i)
            }))
        },
        _renderItem: function(e, i) {
            return t("<li></li>").data("item.autocomplete", i).append(t("<a></a>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            if (this.menu.element.is(":visible")) return this.menu.first() && /^previous/.test(t) || this.menu.last() && /^next/.test(t) ? (this.element.val(this.term), void this.menu.deactivate()) : void this.menu[t](e);
            this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, (function(t) {
                return s.test(t.label || t.value || t)
            }))
        }
    })
}(jQuery),
function(t) {
    t.widget("ui.menu", {
        _create: function() {
            var e = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click((function(i) {
                t(i.target).closest(".ui-menu-item a").length && (i.preventDefault(), e.select(i))
            })), this.refresh()
        },
        refresh: function() {
            var e = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter((function(i) {
                e.activate(i, t(this).parent())
            })).mouseleave((function() {
                e.deactivate()
            }))
        },
        activate: function(t, e) {
            if (this.deactivate(), this.hasScroll()) {
                var i = e.offset().top - this.element.offset().top,
                    s = this.element.scrollTop(),
                    n = this.element.height();
                i < 0 ? this.element.scrollTop(s + i) : i >= n && this.element.scrollTop(s + i - n + e.height())
            }
            this.active = e.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", t, {
                item: e
            })
        },
        deactivate: function() {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function(t) {
            this.move("next", ".ui-menu-item:first", t)
        },
        previous: function(t) {
            this.move("prev", ".ui-menu-item:last", t)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(t, e, i) {
            if (this.active) {
                var s = this.active[t + "All"](".ui-menu-item").eq(0);
                s.length ? this.activate(i, s) : this.activate(i, this.element.children(e))
            } else this.activate(i, this.element.children(e))
        },
        nextPage: function(e) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) return void this.activate(e, this.element.children(".ui-menu-item:first"));
                var i = this.active.offset().top,
                    s = this.element.height(),
                    n = this.element.children(".ui-menu-item").filter((function() {
                        var e = t(this).offset().top - i - s + t(this).height();
                        return e < 10 && e > -10
                    }));
                n.length || (n = this.element.children(".ui-menu-item:last")), this.activate(e, n)
            } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(e) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) return void this.activate(e, this.element.children(".ui-menu-item:last"));
                var i = this.active.offset().top,
                    s = this.element.height(),
                    n = this.element.children(".ui-menu-item").filter((function() {
                        var e = t(this).offset().top - i + s - t(this).height();
                        return e < 10 && e > -10
                    }));
                n.length || (n = this.element.children(".ui-menu-item:first")), this.activate(e, n)
            } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[t.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function(t) {
            this._trigger("selected", t, {
                item: this.active
            })
        }
    })
}(jQuery),
function(t, e) {
    var i, s, n, o, a = "ui-button ui-widget ui-state-default ui-corner-all",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function() {
            var e = t(this).find(":ui-button");
            setTimeout((function() {
                e.button("refresh")
            }), 1)
        },
        h = function(e) {
            var i = e.name,
                s = e.form,
                n = t([]);
            return i && (n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter((function() {
                return !this.form
            }))), n
        };
    t.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var e = this,
                r = this.options,
                c = "checkbox" === this.type || "radio" === this.type,
                d = "ui-state-hover" + (c ? "" : " ui-state-active"),
                u = "ui-state-focus";
            null === r.label && (r.label = this.buttonElement.html()), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter.button", (function() {
                r.disabled || (t(this).addClass("ui-state-hover"), this === i && t(this).addClass("ui-state-active"))
            })).bind("mouseleave.button", (function() {
                r.disabled || t(this).removeClass(d)
            })).bind("click.button", (function(t) {
                r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            })), this.element.bind("focus.button", (function() {
                e.buttonElement.addClass(u)
            })).bind("blur.button", (function() {
                e.buttonElement.removeClass(u)
            })), c && (this.element.bind("change.button", (function() {
                o || e.refresh()
            })), this.buttonElement.bind("mousedown.button", (function(t) {
                r.disabled || (o = !1, s = t.pageX, n = t.pageY)
            })).bind("mouseup.button", (function(t) {
                r.disabled || s === t.pageX && n === t.pageY || (o = !0)
            }))), "checkbox" === this.type ? this.buttonElement.bind("click.button", (function() {
                if (r.disabled || o) return !1;
                t(this).toggleClass("ui-state-active"), e.buttonElement.attr("aria-pressed", e.element[0].checked)
            })) : "radio" === this.type ? this.buttonElement.bind("click.button", (function() {
                if (r.disabled || o) return !1;
                t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                var i = e.element[0];
                h(i).not(i).map((function() {
                    return t(this).button("widget")[0]
                })).removeClass("ui-state-active").attr("aria-pressed", "false")
            })) : (this.buttonElement.bind("mousedown.button", (function() {
                if (r.disabled) return !1;
                t(this).addClass("ui-state-active"), i = this, t(document).one("mouseup", (function() {
                    i = null
                }))
            })).bind("mouseup.button", (function() {
                if (r.disabled) return !1;
                t(this).removeClass("ui-state-active")
            })).bind("keydown.button", (function(e) {
                if (r.disabled) return !1;
                (e.keyCode == t.ui.keyCode.SPACE || e.keyCode == t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active")
            })).bind("keyup.button", (function() {
                t(this).removeClass("ui-state-active")
            })), this.buttonElement.is("a") && this.buttonElement.keyup((function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            }))), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            if (this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type) {
                var t = this.element.parents().filter(":last"),
                    e = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible");
                var i = this.element.is(":checked");
                i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", i)
            } else this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " ui-state-hover ui-state-active  " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), t.Widget.prototype.destroy.call(this)
        },
        _setOption: function(e, i) {
            t.Widget.prototype._setOption.apply(this, arguments), "disabled" !== e ? this._resetButton() : i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1)
        },
        refresh: function() {
            var e = this.element.is(":disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? h(this.element[0]).each((function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            })) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" !== this.type) {
                var e = this.buttonElement.removeClass(r),
                    i = t("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    s = this.options.icons,
                    n = s.primary && s.secondary,
                    o = [];
                s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", i))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
            } else this.options.label && this.element.val(this.options.label)
        }
    }), t.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, i) {
            "disabled" === e && this.buttons.button("option", e, i), t.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map((function() {
                return t(this).button("widget")[0]
            })).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map((function() {
                return t(this).button("widget")[0]
            })).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), t.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function(t, e) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        s = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        n = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var e = this,
                s = e.options,
                n = s.title || "&#160;",
                o = t.ui.dialog.getTitleId(e.element),
                a = (e.uiDialog = t("<div></div>")).appendTo(document.body).hide().addClass(i + s.dialogClass).css({
                    zIndex: s.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown((function(i) {
                    s.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
                })).attr({
                    role: "dialog",
                    "aria-labelledby": o
                }).mousedown((function(t) {
                    e.moveToTop(!1, t)
                })),
                r = (e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(a), (e.uiDialogTitlebar = t("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(a)),
                l = t('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover((function() {
                    l.addClass("ui-state-hover")
                }), (function() {
                    l.removeClass("ui-state-hover")
                })).focus((function() {
                    l.addClass("ui-state-focus")
                })).blur((function() {
                    l.removeClass("ui-state-focus")
                })).click((function(t) {
                    return e.close(t), !1
                })).appendTo(r);
            (e.uiDialogTitlebarCloseText = t("<span></span>")).addClass("ui-icon ui-icon-closethick").text(s.closeText).appendTo(l), t("<span></span>").addClass("ui-dialog-title").attr("id", o).html(n).prependTo(r);
            t.isFunction(s.beforeclose) && !t.isFunction(s.beforeClose) && (s.beforeClose = s.beforeclose), r.find("*").add(r).disableSelection(), s.draggable && t.fn.draggable && e._makeDraggable(), s.resizable && t.fn.resizable && e._makeResizable(), e._createButtons(s.buttons), e._isOpen = !1, t.fn.bgiframe && a.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var t = this;
            return t.overlay && t.overlay.destroy(), t.uiDialog.hide(), t.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), t.uiDialog.remove(), t.originalTitle && t.element.attr("title", t.originalTitle), t
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(e) {
            var i, s, n = this;
            if (!1 !== n._trigger("beforeClose", e)) return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, (function() {
                n._trigger("close", e)
            })) : (n.uiDialog.hide(), n._trigger("close", e)), t.ui.dialog.overlay.resize(), n.options.modal && (i = 0, t(".ui-dialog").each((function() {
                this !== n.uiDialog[0] && (s = t(this).css("z-index"), isNaN(s) || (i = Math.max(i, s)))
            })), t.ui.dialog.maxZ = i), n
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(e, i) {
            var s, n = this,
                o = n.options;
            return o.modal && !e || !o.stack && !o.modal ? n._trigger("focus", i) : (o.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = o.zIndex), n.overlay && (t.ui.dialog.maxZ += 1, n.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ)), s = {
                scrollTop: n.element.scrollTop(),
                scrollLeft: n.element.scrollLeft()
            }, t.ui.dialog.maxZ += 1, n.uiDialog.css("z-index", t.ui.dialog.maxZ), n.element.attr(s), n._trigger("focus", i), n)
        },
        open: function() {
            if (!this._isOpen) {
                var e = this,
                    i = e.options,
                    s = e.uiDialog;
                return e.overlay = i.modal ? new t.ui.dialog.overlay(e) : null, e._size(), e._position(i.position), s.show(i.show), e.moveToTop(!0), i.modal && s.bind("keydown.ui-dialog", (function(e) {
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = t(":tabbable", this),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        return e.target !== n[0] || e.shiftKey ? e.target === s[0] && e.shiftKey ? (n.focus(1), !1) : void 0 : (s.focus(1), !1)
                    }
                })), t(e.element.find(":tabbable").get().concat(s.find(".ui-dialog-buttonpane :tabbable").get().concat(s.get()))).eq(0).focus(), e._isOpen = !0, e._trigger("open"), e
            }
        },
        _createButtons: function(e) {
            var i = this,
                s = !1,
                n = t("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                o = t("<div></div>").addClass("ui-dialog-buttonset").appendTo(n);
            i.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof e && null !== e && t.each(e, (function() {
                return s = !0, !1
            })), s && (t.each(e, (function(e, s) {
                s = t.isFunction(s) ? {
                    click: s,
                    text: e
                } : s;
                var n = t('<button type="button"></button>').click((function() {
                    s.click.apply(i.element[0], arguments)
                })).appendTo(o);
                t.each(s, (function(t, e) {
                    "click" !== t && (t in n ? n[t](e) : n.attr(t, e))
                })), t.fn.button && n.button()
            })), n.appendTo(i.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i, s = this,
                n = s.options,
                o = t(document);
            s.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(o, a) {
                    i = "auto" === n.height ? "auto" : t(this).height(), t(this).height(t(this).height()).addClass("ui-dialog-dragging"), s._trigger("dragStart", o, e(a))
                },
                drag: function(t, i) {
                    s._trigger("drag", t, e(i))
                },
                stop: function(a, r) {
                    n.position = [r.position.left - o.scrollLeft(), r.position.top - o.scrollTop()], t(this).removeClass("ui-dialog-dragging").height(i), s._trigger("dragStop", a, e(r)), t.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(e) {
            function i(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            e = undefined === e ? this.options.resizable : e;
            var s = this,
                n = s.options,
                o = s.uiDialog.css("position"),
                a = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            s.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: s.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: s._minHeight(),
                handles: a,
                start: function(e, n) {
                    t(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", e, i(n))
                },
                resize: function(t, e) {
                    s._trigger("resize", t, i(e))
                },
                stop: function(e, o) {
                    t(this).removeClass("ui-dialog-resizing"), n.height = t(this).height(), n.width = t(this).width(), s._trigger("resizeStop", e, i(o)), t.ui.dialog.overlay.resize()
                }
            }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function(e) {
            var i, s = [],
                n = [0, 0];
            e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (1 === (s = e.split ? e.split(" ") : [e[0], e[1]]).length && (s[1] = s[0]), t.each(["left", "top"], (function(t, e) {
                +s[t] === s[t] && (n[t] = s[t], s[t] = e)
            })), e = {
                my: s.join(" "),
                at: s.join(" "),
                offset: n.join(" ")
            }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(t.extend({ of: window
            }, e)), i || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                o = {},
                a = !1;
            t.each(e, (function(t, e) {
                i._setOption(t, e), t in s && (a = !0), t in n && (o[t] = e)
            })), a && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(e, s) {
            var n = this,
                o = n.uiDialog;
            switch (e) {
                case "beforeclose":
                    e = "beforeClose";
                    break;
                case "buttons":
                    n._createButtons(s);
                    break;
                case "closeText":
                    n.uiDialogTitlebarCloseText.text("" + s);
                    break;
                case "dialogClass":
                    o.removeClass(n.options.dialogClass).addClass(i + s);
                    break;
                case "disabled":
                    s ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    var a = o.is(":data(draggable)");
                    a && !s && o.draggable("destroy"), !a && s && n._makeDraggable();
                    break;
                case "position":
                    n._position(s);
                    break;
                case "resizable":
                    var r = o.is(":data(resizable)");
                    r && !s && o.resizable("destroy"), r && "string" == typeof s && o.resizable("option", "handles", s), !r && !1 !== s && n._makeResizable(s);
                    break;
                case "title":
                    t(".ui-dialog-title", n.uiDialogTitlebar).html("" + (s || "&#160;"))
            }
            t.Widget.prototype._setOption.apply(n, arguments)
        },
        _size: function() {
            var e, i, s = this.options,
                n = this.uiDialog.is(":visible");
            if (this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                    height: "auto",
                    width: s.width
                }).height(), i = Math.max(0, s.minHeight - e), "auto" === s.height)
                if (t.support.minHeight) this.element.css({
                    minHeight: i,
                    height: "auto"
                });
                else {
                    this.uiDialog.show();
                    var o = this.element.css("height", "auto").height();
                    n || this.uiDialog.hide(), this.element.height(Math.max(o, i))
                }
            else this.element.height(Math.max(s.height - e, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), t.extend(t.ui.dialog, {
        version: "1.8.23",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(t) {
            var e = t.attr("id");
            return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
        },
        overlay: function(e) {
            this.$el = t.ui.dialog.overlay.create(e)
        }
    }), t.extend(t.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), (function(t) {
            return t + ".dialog-overlay"
        })).join(" "),
        create: function(e) {
            0 === this.instances.length && (setTimeout((function() {
                t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, (function(e) {
                    if (t(e.target).zIndex() < t.ui.dialog.overlay.maxZ) return !1
                }))
            }), 1), t(document).bind("keydown.dialog-overlay", (function(i) {
                e.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
            })), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
            var i = (this.oldInstances.pop() || t("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return t.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
        },
        destroy: function(e) {
            var i = t.inArray(e, this.instances); - 1 != i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"), e.remove();
            var s = 0;
            t.each(this.instances, (function() {
                s = Math.max(s, this.css("z-index"))
            })), this.maxZ = s
        },
        height: function() {
            var e;
            return t.browser.msie && t.browser.version < 7 ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)) < Math.max(document.documentElement.offsetHeight, document.body.offsetHeight) ? t(window).height() + "px" : e + "px" : t(document).height() + "px"
        },
        width: function() {
            var e;
            return t.browser.msie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)) < Math.max(document.documentElement.offsetWidth, document.body.offsetWidth) ? t(window).width() + "px" : e + "px" : t(document).width() + "px"
        },
        resize: function() {
            var e = t([]);
            t.each(t.ui.dialog.overlay.instances, (function() {
                e = e.add(this)
            })), e.css({
                width: 0,
                height: 0
            }).css({
                width: t.ui.dialog.overlay.width(),
                height: t.ui.dialog.overlay.height()
            })
        }
    }), t.extend(t.ui.dialog.overlay.prototype, {
        destroy: function() {
            t.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.slider", t.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var e = this,
                i = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                n = i.values && i.values.length || 1,
                o = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), i.range && (!0 === i.range && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && 2 !== i.values.length && (i.values = [i.values[0], i.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === i.range || "max" === i.range ? " ui-slider-range-" + i.range : "")));
            for (var a = s.length; a < n; a += 1) o.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = s.add(t(o.join("")).appendTo(e.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click((function(t) {
                t.preventDefault()
            })).hover((function() {
                i.disabled || t(this).addClass("ui-state-hover")
            }), (function() {
                t(this).removeClass("ui-state-hover")
            })).focus((function() {
                i.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
            })).blur((function() {
                t(this).removeClass("ui-state-focus")
            })), this.handles.each((function(e) {
                t(this).data("index.ui-slider-handle", e)
            })), this.handles.keydown((function(i) {
                var s, n, o, a = t(this).data("index.ui-slider-handle");
                if (!e.options.disabled) {
                    switch (i.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i.preventDefault(), !e._keySliding && (e._keySliding = !0, t(this).addClass("ui-state-active"), !1 === e._start(i, a))) return
                    }
                    switch (o = e.options.step, s = n = e.options.values && e.options.values.length ? e.values(a) : e.value(), i.keyCode) {
                        case t.ui.keyCode.HOME:
                            n = e._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            n = e._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            n = e._trimAlignValue(s + (e._valueMax() - e._valueMin()) / 5);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            n = e._trimAlignValue(s - (e._valueMax() - e._valueMin()) / 5);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (s === e._valueMax()) return;
                            n = e._trimAlignValue(s + o);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (s === e._valueMin()) return;
                            n = e._trimAlignValue(s - o)
                    }
                    e._slide(i, a, n)
                }
            })).keyup((function(i) {
                var s = t(this).data("index.ui-slider-handle");
                e._keySliding && (e._keySliding = !1, e._stop(i, s), e._change(i, s), t(this).removeClass("ui-state-active"))
            })), this._refreshValue(), this._animateOff = !1
        },
        destroy: function() {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, l, h, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, a = this, this.handles.each((function(e) {
                var i = Math.abs(s - a.values(e));
                n > i && (n = i, o = t(this), r = e)
            })), !0 === c.range && this.values(1) === c.min && (r += 1, o = t(this.handles[r])), !1 !== this._start(e, r) && (this._mouseSliding = !0, a._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function(t) {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, o;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && i < s) && (i = s), i !== this.values(e) && ((n = this.values())[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), !1 !== o && this.values(e, i, !0))) : i !== this.value() && (!1 !== (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            })) && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch (t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "disabled":
                    i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; s < n; s += 1) this._change(null, s);
                    this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
            return i
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range,
                r = this.options,
                l = this,
                h = !this._animateOff && r.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each((function(s, n) {
                e = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = e + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: e + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: e - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: e + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: e - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), i = e
            })) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), e = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === l.orientation ? "left" : "bottom"] = e + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: e + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - e + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: e + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - e + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        }
    }), t.extend(t.ui.slider, {
        version: "1.8.23"
    })
}(jQuery),
function(t, e) {
    var i = 0,
        s = 0;
    t.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function() {
            this._tabify(!0)
        },
        _setOption: function(t, e) {
            if ("selected" == t) {
                if (this.options.collapsible && e == this.options.selected) return;
                this.select(e)
            } else this.options[t] = e, this._tabify()
        },
        _tabId: function(t) {
            return t.title && t.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + ++i
        },
        _sanitizeSelector: function(t) {
            return t.replace(/:/g, "\\:")
        },
        _cookie: function() {
            var e = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++s);
            return t.cookie.apply(null, [e].concat(t.makeArray(arguments)))
        },
        _ui: function(t, e) {
            return {
                tab: t,
                panel: e,
                index: this.anchors.index(t)
            }
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each((function() {
                var e = t(this);
                e.html(e.data("label.tabs")).removeData("label.tabs")
            }))
        },
        _tabify: function(i) {
            function s(e, i) {
                e.css("display", ""), !t.support.opacity && i.opacity && e[0].style.removeAttribute("filter")
            }
            var n, o, a = this,
                r = this.options,
                l = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = t(" > li:has(a[href])", this.list), this.anchors = this.lis.map((function() {
                return t("a", this)[0]
            })), this.panels = t([]), this.anchors.each((function(e, i) {
                var s, n = t(i).attr("href"),
                    o = n.split("#")[0];
                if (o && (o === location.toString().split("#")[0] || (s = t("base")[0]) && o === s.href) && (n = i.hash, i.href = n), l.test(n)) a.panels = a.panels.add(a.element.find(a._sanitizeSelector(n)));
                else if (n && "#" !== n) {
                    t.data(i, "href.tabs", n), t.data(i, "load.tabs", n.replace(/#.*$/, ""));
                    var h = a._tabId(i);
                    i.href = "#" + h;
                    var c = a.element.find("#" + h);
                    c.length || (c = t(r.panelTemplate).attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[e - 1] || a.list)).data("destroy.tabs", !0), a.panels = a.panels.add(c)
                } else r.disabled.push(e)
            })), i ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), r.selected === e ? (location.hash && this.anchors.each((function(t, e) {
                if (e.hash == location.hash) return r.selected = t, !1
            })), "number" != typeof r.selected && r.cookie && (r.selected = parseInt(a._cookie(), 10)), "number" != typeof r.selected && this.lis.filter(".ui-tabs-selected").length && (r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), r.selected = r.selected || (this.lis.length ? 0 : -1)) : null === r.selected && (r.selected = -1), r.selected = r.selected >= 0 && this.anchors[r.selected] || r.selected < 0 ? r.selected : 0, r.disabled = t.unique(r.disabled.concat(t.map(this.lis.filter(".ui-state-disabled"), (function(t, e) {
                return a.lis.index(t)
            })))).sort(), -1 != t.inArray(r.selected, r.disabled) && r.disabled.splice(t.inArray(r.selected, r.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), r.selected >= 0 && this.anchors.length && (a.element.find(a._sanitizeSelector(a.anchors[r.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(r.selected).addClass("ui-tabs-selected ui-state-active"), a.element.queue("tabs", (function() {
                a._trigger("show", null, a._ui(a.anchors[r.selected], a.element.find(a._sanitizeSelector(a.anchors[r.selected].hash))[0]))
            })), this.load(r.selected)), t(window).bind("unload", (function() {
                a.lis.add(a.anchors).unbind(".tabs"), a.lis = a.anchors = a.panels = null
            }))) : r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[r.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), r.cookie && this._cookie(r.selected, r.cookie);
            for (var h, c = 0; h = this.lis[c]; c++) t(h)[-1 == t.inArray(c, r.disabled) || t(h).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
            if (!1 === r.cache && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== r.event) {
                var d = function(t, e) {
                        e.is(":not(.ui-state-disabled)") && e.addClass("ui-state-" + t)
                    },
                    u = function(t, e) {
                        e.removeClass("ui-state-" + t)
                    };
                this.lis.bind("mouseover.tabs", (function() {
                    d("hover", t(this))
                })), this.lis.bind("mouseout.tabs", (function() {
                    u("hover", t(this))
                })), this.anchors.bind("focus.tabs", (function() {
                    d("focus", t(this).closest("li"))
                })), this.anchors.bind("blur.tabs", (function() {
                    u("focus", t(this).closest("li"))
                }))
            }
            r.fx && (t.isArray(r.fx) ? (n = r.fx[0], o = r.fx[1]) : n = o = r.fx);
            var p = o ? function(e, i) {
                    t(e).closest("li").addClass("ui-tabs-selected ui-state-active"), i.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal", (function() {
                        s(i, o), a._trigger("show", null, a._ui(e, i[0]))
                    }))
                } : function(e, i) {
                    t(e).closest("li").addClass("ui-tabs-selected ui-state-active"), i.removeClass("ui-tabs-hide"), a._trigger("show", null, a._ui(e, i[0]))
                },
                f = n ? function(t, e) {
                    e.animate(n, n.duration || "normal", (function() {
                        a.lis.removeClass("ui-tabs-selected ui-state-active"), e.addClass("ui-tabs-hide"), s(e, n), a.element.dequeue("tabs")
                    }))
                } : function(t, e, i) {
                    a.lis.removeClass("ui-tabs-selected ui-state-active"), e.addClass("ui-tabs-hide"), a.element.dequeue("tabs")
                };
            this.anchors.bind(r.event + ".tabs", (function() {
                var e = this,
                    i = t(e).closest("li"),
                    s = a.panels.filter(":not(.ui-tabs-hide)"),
                    n = a.element.find(a._sanitizeSelector(e.hash));
                if (i.hasClass("ui-tabs-selected") && !r.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || a.panels.filter(":animated").length || !1 === a._trigger("select", null, a._ui(this, n[0]))) return this.blur(), !1;
                if (r.selected = a.anchors.index(this), a.abort(), r.collapsible) {
                    if (i.hasClass("ui-tabs-selected")) return r.selected = -1, r.cookie && a._cookie(r.selected, r.cookie), a.element.queue("tabs", (function() {
                        f(e, s)
                    })).dequeue("tabs"), this.blur(), !1;
                    if (!s.length) return r.cookie && a._cookie(r.selected, r.cookie), a.element.queue("tabs", (function() {
                        p(e, n)
                    })), a.load(a.anchors.index(this)), this.blur(), !1
                }
                if (r.cookie && a._cookie(r.selected, r.cookie), !n.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                s.length && a.element.queue("tabs", (function() {
                    f(e, s)
                })), a.element.queue("tabs", (function() {
                    p(e, n)
                })), a.load(a.anchors.index(this)), t.browser.msie && this.blur()
            })), this.anchors.bind("click.tabs", (function() {
                return !1
            }))
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        destroy: function() {
            var e = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each((function() {
                var e = t.data(this, "href.tabs");
                e && (this.href = e);
                var i = t(this).unbind(".tabs");
                t.each(["href", "load", "cache"], (function(t, e) {
                    i.removeData(e + ".tabs")
                }))
            })), this.lis.unbind(".tabs").add(this.panels).each((function() {
                t.data(this, "destroy.tabs") ? t(this).remove() : t(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
            })), e.cookie && this._cookie(null, e.cookie), this
        },
        add: function(i, s, n) {
            n === e && (n = this.anchors.length);
            var o = this,
                a = this.options,
                r = t(a.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, s)),
                l = i.indexOf("#") ? this._tabId(t("a", r)[0]) : i.replace("#", "");
            r.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var h = o.element.find("#" + l);
            return h.length || (h = t(a.panelTemplate).attr("id", l).data("destroy.tabs", !0)), h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), n >= this.lis.length ? (r.appendTo(this.list), h.appendTo(this.list[0].parentNode)) : (r.insertBefore(this.lis[n]), h.insertBefore(this.panels[n])), a.disabled = t.map(a.disabled, (function(t, e) {
                return t >= n ? ++t : t
            })), this._tabify(), 1 == this.anchors.length && (a.selected = 0, r.addClass("ui-tabs-selected ui-state-active"), h.removeClass("ui-tabs-hide"), this.element.queue("tabs", (function() {
                o._trigger("show", null, o._ui(o.anchors[0], o.panels[0]))
            })), this.load(0)), this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])), this
        },
        remove: function(e) {
            e = this._getIndex(e);
            var i = this.options,
                s = this.lis.eq(e).remove(),
                n = this.panels.eq(e).remove();
            return s.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(e + (e + 1 < this.anchors.length ? 1 : -1)), i.disabled = t.map(t.grep(i.disabled, (function(t, i) {
                return t != e
            })), (function(t, i) {
                return t >= e ? --t : t
            })), this._tabify(), this._trigger("remove", null, this._ui(s.find("a")[0], n[0])), this
        },
        enable: function(e) {
            e = this._getIndex(e);
            var i = this.options;
            if (-1 != t.inArray(e, i.disabled)) return this.lis.eq(e).removeClass("ui-state-disabled"), i.disabled = t.grep(i.disabled, (function(t, i) {
                return t != e
            })), this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e])), this
        },
        disable: function(t) {
            t = this._getIndex(t);
            var e = this.options;
            return t != e.selected && (this.lis.eq(t).addClass("ui-state-disabled"), e.disabled.push(t), e.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))), this
        },
        select: function(t) {
            if (-1 == (t = this._getIndex(t))) {
                if (!this.options.collapsible || -1 == this.options.selected) return this;
                t = this.options.selected
            }
            return this.anchors.eq(t).trigger(this.options.event + ".tabs"), this
        },
        load: function(e) {
            e = this._getIndex(e);
            var i = this,
                s = this.options,
                n = this.anchors.eq(e)[0],
                o = t.data(n, "load.tabs");
            if (this.abort(), o && (0 === this.element.queue("tabs").length || !t.data(n, "cache.tabs"))) {
                if (this.lis.eq(e).addClass("ui-state-processing"), s.spinner) {
                    var a = t("span", n);
                    a.data("label.tabs", a.html()).html(s.spinner)
                }
                return this.xhr = t.ajax(t.extend({}, s.ajaxOptions, {
                    url: o,
                    success: function(o, a) {
                        i.element.find(i._sanitizeSelector(n.hash)).html(o), i._cleanup(), s.cache && t.data(n, "cache.tabs", !0), i._trigger("load", null, i._ui(i.anchors[e], i.panels[e]));
                        try {
                            s.ajaxOptions.success(o, a)
                        } catch (t) {}
                    },
                    error: function(t, o, a) {
                        i._cleanup(), i._trigger("load", null, i._ui(i.anchors[e], i.panels[e]));
                        try {
                            s.ajaxOptions.error(t, o, e, n)
                        } catch (a) {}
                    }
                })), i.element.dequeue("tabs"), this
            }
            this.element.dequeue("tabs")
        },
        abort: function() {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function(t, e) {
            return this.anchors.eq(t).removeData("cache.tabs").data("load.tabs", e), this
        },
        length: function() {
            return this.anchors.length
        }
    }), t.extend(t.ui.tabs, {
        version: "1.8.23"
    }), t.extend(t.ui.tabs.prototype, {
        rotation: null,
        rotate: function(t, e) {
            var i = this,
                s = this.options,
                n = i._rotate || (i._rotate = function(e) {
                    clearTimeout(i.rotation), i.rotation = setTimeout((function() {
                        var t = s.selected;
                        i.select(++t < i.anchors.length ? t : 0)
                    }), t), e && e.stopPropagation()
                }),
                o = i._unrotate || (i._unrotate = e ? function(t) {
                    n()
                } : function(t) {
                    t.clientX && i.rotate(null)
                });
            return t ? (this.element.bind("tabsshow", n), this.anchors.bind(s.event + ".tabs", o), n()) : (clearTimeout(i.rotation), this.element.unbind("tabsshow", n), this.anchors.unbind(s.event + ".tabs", o), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery),
function($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.bind("mouseout", (function(t) {
            var i = $(t.target).closest(e);
            i.length && i.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        })).bind("mouseover", (function(i) {
            var s = $(i.target).closest(e);
            !$.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) && s.length && (s.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), s.addClass("ui-state-hover"), s.hasClass("ui-datepicker-prev") && s.addClass("ui-datepicker-prev-hover"), s.hasClass("ui-datepicker-next") && s.addClass("ui-datepicker-next-hover"))
        }))
    }

    function extendRemove(t, e) {
        for (var i in $.extend(t, e), e) null != e[i] && e[i] != undefined || (t[i] = e[i]);
        return t
    }

    function isArray(t) {
        return t && ($.browser.safari && "object" == typeof t && t.length || t.constructor && t.constructor.toString().match(/\Array\(\)/))
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.8.23"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return extendRemove(this._defaults, t || {}), this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (t) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = "div" == nodeName || "span" == nodeName;
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function(t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, e) {
            var i = $(t);
            e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", (function(t, i, s) {
                e.settings[i] = s
            })).bind("getData.datepicker", (function(t, i) {
                return this._get(e, i)
            })), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, e) {
            var i = this._get(e, "appendText"),
                s = this._get(e, "isRTL");
            e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[s ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
            var n = this._get(e, "showOn");
            if (("focus" == n || "both" == n) && t.focus(this._showDatepicker), "button" == n || "both" == n) {
                var o = this._get(e, "buttonText"),
                    a = this._get(e, "buttonImage");
                e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: a,
                    alt: o,
                    title: o
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == a ? o : $("<img/>").attr({
                    src: a,
                    alt: o,
                    title: o
                }))), t[s ? "before" : "after"](e.trigger), e.trigger.click((function() {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                }))
            }
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e = new Date(2009, 11, 20),
                    i = this._get(t, "dateFormat");
                if (i.match(/[DM]/)) {
                    var s = function(t) {
                        for (var e = 0, i = 0, s = 0; s < t.length; s++) t[s].length > e && (e = t[s].length, i = s);
                        return i
                    };
                    e.setMonth(s(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(s(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                }
                t.input.attr("size", this._formatDate(t, e).length)
            }
        },
        _inlineDatepicker: function(t, e) {
            var i = $(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", (function(t, i, s) {
                e.settings[i] = s
            })).bind("getData.datepicker", (function(t, i) {
                return this._get(e, i)
            })), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, e, i, s, n) {
            var o = this._dialogInst;
            if (!o) {
                this.uuid += 1;
                var a = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + a + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), (o = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], PROP_NAME, o)
            }
            if (extendRemove(o.settings, s || {}), e = e && e.constructor == Date ? this._formatDate(o, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, !this._pos) {
                var r = document.documentElement.clientWidth,
                    l = document.documentElement.clientHeight,
                    h = document.documentElement.scrollLeft || document.body.scrollLeft,
                    c = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [r / 2 - 100 + h, l / 2 - 150 + c]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, o), this
        },
        _destroyDatepicker: function(t) {
            var e = $(t),
                i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                $.removeData(t, PROP_NAME), "input" == s ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == s || "span" == s) && e.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function(t) {
            var e = $(t),
                i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                if ("input" == s) t.disabled = !1, i.trigger.filter("button").each((function() {
                    this.disabled = !1
                })).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if ("div" == s || "span" == s) {
                    var n = e.children("." + this._inlineClass);
                    n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, (function(e) {
                    return e == t ? null : e
                }))
            }
        },
        _disableDatepicker: function(t) {
            var e = $(t),
                i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                if ("input" == s) t.disabled = !0, i.trigger.filter("button").each((function() {
                    this.disabled = !0
                })).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if ("div" == s || "span" == s) {
                    var n = e.children("." + this._inlineClass);
                    n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, (function(e) {
                    return e == t ? null : e
                })), this._disabledInputs[this._disabledInputs.length] = t
            }
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] == t) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return $.data(t, PROP_NAME)
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, e, i) {
            var s = this._getInst(t);
            if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : s ? "all" == e ? $.extend({}, s.settings) : this._get(s, e) : null;
            var n = e || {};
            if ("string" == typeof e && ((n = {})[e] = i), s) {
                this._curInst == s && this._hideDatepicker();
                var o = this._getDateDatepicker(t, !0),
                    a = this._getMinMaxDate(s, "min"),
                    r = this._getMinMaxDate(s, "max");
                extendRemove(s.settings, n), null !== a && n.dateFormat !== undefined && n.minDate === undefined && (s.settings.minDate = this._formatDate(s, a)), null !== r && n.dateFormat !== undefined && n.maxDate === undefined && (s.settings.maxDate = this._formatDate(s, r)), this._attachments($(t), s), this._autoSize(s), this._setDate(s, o), this._updateAlternate(s), this._updateDatepicker(s)
            }
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var e = $.datepicker._getInst(t.target),
                i = !0,
                s = e.dpDiv.is(".ui-datepicker-rtl");
            if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), i = !1;
                    break;
                case 13:
                    var n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                    n[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, n[0]);
                    var o = $.datepicker._get(e, "onSelect");
                    if (o) {
                        var a = $.datepicker._formatDate(e);
                        o.apply(e.input ? e.input[0] : null, [a, e])
                    } else $.datepicker._hideDatepicker();
                    return !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                    break;
                default:
                    i = !1
            } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
            i && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var e = $.datepicker._getInst(t.target);
            if ($.datepicker._get(e, "constrainInput")) {
                var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                    s = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                return t.ctrlKey || t.metaKey || s < " " || !i || i.indexOf(s) > -1
            }
        },
        _doKeyUp: function(t) {
            var e = $.datepicker._getInst(t.target);
            if (e.input.val() != e.lastVal) try {
                $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e)) && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
            } catch (t) {
                $.datepicker.log(t)
            }
            return !0
        },
        _showDatepicker: function(t) {
            if ("input" != (t = t.target || t).nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                var e = $.datepicker._getInst(t);
                $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var i = $.datepicker._get(e, "beforeShow"),
                    s = i ? i.apply(t, [t, e]) : {};
                if (!1 !== s) {
                    extendRemove(e.settings, s), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                    var n = !1;
                    $(t).parents().each((function() {
                        return !(n |= "fixed" == $(this).css("position"))
                    })), n && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                    var o = {
                        left: $.datepicker._pos[0],
                        top: $.datepicker._pos[1]
                    };
                    if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), $.datepicker._updateDatepicker(e), o = $.datepicker._checkOffset(e, o, n), e.dpDiv.css({
                            position: $.datepicker._inDialog && $.blockUI ? "static" : n ? "fixed" : "absolute",
                            display: "none",
                            left: o.left + "px",
                            top: o.top + "px"
                        }), !e.inline) {
                        var a = $.datepicker._get(e, "showAnim"),
                            r = $.datepicker._get(e, "duration"),
                            l = function() {
                                var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                if (t.length) {
                                    var i = $.datepicker._getBorders(e.dpDiv);
                                    t.css({
                                        left: -i[0],
                                        top: -i[1],
                                        width: e.dpDiv.outerWidth(),
                                        height: e.dpDiv.outerHeight()
                                    })
                                }
                            };
                        e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[a] ? e.dpDiv.show(a, $.datepicker._get(e, "showOptions"), r, l) : e.dpDiv[a || "show"](a ? r : null, l), (!a || !r) && l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                    }
                }
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4;
            var e = $.datepicker._getBorders(t.dpDiv);
            instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i = t.dpDiv.find("iframe.ui-datepicker-cover");
            !i.length || i.css({
                left: -e[0],
                top: -e[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var s = this._getNumberOfMonths(t),
                n = s[1];
            if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), t.dpDiv[(1 != s[0] || 1 != s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                var o = t.yearshtml;
                setTimeout((function() {
                    o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), o = t.yearshtml = null
                }), 0)
            }
        },
        _getBorders: function(t) {
            var e = function(t) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[t] || t
            };
            return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
        },
        _checkOffset: function(t, e, i) {
            var s = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                a = t.input ? t.input.outerHeight() : 0,
                r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + a ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && r > s ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > l && l > n ? Math.abs(n + a) : 0), e
        },
        _findPos: function(t) {
            for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
            var s = $(t).offset();
            return [s.left, s.top]
        },
        _hideDatepicker: function(t) {
            var e = this._curInst;
            if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                var i = this._get(e, "showAnim"),
                    s = this._get(e, "duration"),
                    n = function() {
                        $.datepicker._tidyDialog(e)
                    };
                $.effects && $.effects[i] ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), s, n) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1;
                var o = this._get(e, "onClose");
                o && o.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if ($.datepicker._curInst) {
                var e = $(t.target),
                    i = $.datepicker._getInst(e[0]);
                (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, e, i) {
            var s = $(t),
                n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" == i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
        },
        _gotoToday: function(t) {
            var e = $(t),
                i = this._getInst(e[0]);
            if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
            else {
                var s = new Date;
                i.selectedDay = s.getDate(), i.drawMonth = i.selectedMonth = s.getMonth(), i.drawYear = i.selectedYear = s.getFullYear()
            }
            this._notifyChange(i), this._adjustDate(e)
        },
        _selectMonthYear: function(t, e, i) {
            var s = $(t),
                n = this._getInst(s[0]);
            n["selected" + ("M" == i ? "Month" : "Year")] = n["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function(t, e, i, s) {
            var n = $(t);
            if (!$(s).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(n[0])) {
                var o = this._getInst(n[0]);
                o.selectedDay = o.currentDay = $("a", s).html(), o.selectedMonth = o.currentMonth = e, o.selectedYear = o.currentYear = i, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
            }
        },
        _clearDate: function(t) {
            var e = $(t);
            this._getInst(e[0]);
            this._selectDate(e, "")
        },
        _selectDate: function(t, e) {
            var i = $(t),
                s = this._getInst(i[0]);
            e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s);
            var n = this._get(s, "onSelect");
            n ? n.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var e = this._get(t, "altField");
            if (e) {
                var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                    s = this._getDate(t),
                    n = this.formatDate(i, s, this._getFormatConfig(t));
                $(e).each((function() {
                    $(this).val(n)
                }))
            }
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && e < 6, ""]
        },
        iso8601Week: function(t) {
            var e = new Date(t.getTime());
            e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var i = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((i - e) / 864e5) / 7) + 1
        },
        parseDate: function(t, e, i) {
            if (null == t || null == e) throw "Invalid arguments";
            if ("" == (e = "object" == typeof e ? e.toString() : e + "")) return null;
            var s = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            s = "string" != typeof s ? s : (new Date).getFullYear() % 100 + parseInt(s, 10);
            for (var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, h = -1, c = -1, d = -1, u = !1, p = function(e) {
                    var i = b + 1 < t.length && t.charAt(b + 1) == e;
                    return i && b++, i
                }, f = function(t) {
                    var i = p(t),
                        s = new RegExp("^\\d{1," + ("@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2) + "}"),
                        n = e.substring(v).match(s);
                    if (!n) throw "Missing number at position " + v;
                    return v += n[0].length, parseInt(n[0], 10)
                }, g = function(t, i, s) {
                    var n = $.map(p(t) ? s : i, (function(t, e) {
                            return [
                                [e, t]
                            ]
                        })).sort((function(t, e) {
                            return -(t[1].length - e[1].length)
                        })),
                        o = -1;
                    if ($.each(n, (function(t, i) {
                            var s = i[1];
                            if (e.substr(v, s.length).toLowerCase() == s.toLowerCase()) return o = i[0], v += s.length, !1
                        })), -1 != o) return o + 1;
                    throw "Unknown name at position " + v
                }, m = function() {
                    if (e.charAt(v) != t.charAt(b)) throw "Unexpected literal at position " + v;
                    v++
                }, v = 0, b = 0; b < t.length; b++)
                if (u) "'" != t.charAt(b) || p("'") ? m() : u = !1;
                else switch (t.charAt(b)) {
                    case "d":
                        c = f("d");
                        break;
                    case "D":
                        g("D", n, o);
                        break;
                    case "o":
                        d = f("o");
                        break;
                    case "m":
                        h = f("m");
                        break;
                    case "M":
                        h = g("M", a, r);
                        break;
                    case "y":
                        l = f("y");
                        break;
                    case "@":
                        l = (_ = new Date(f("@"))).getFullYear(), h = _.getMonth() + 1, c = _.getDate();
                        break;
                    case "!":
                        var _;
                        l = (_ = new Date((f("!") - this._ticksTo1970) / 1e4)).getFullYear(), h = _.getMonth() + 1, c = _.getDate();
                        break;
                    case "'":
                        p("'") ? m() : u = !0;
                        break;
                    default:
                        m()
                }
            if (v < e.length) throw "Extra/unparsed characters found in date: " + e.substring(v);
            if (-1 == l ? l = (new Date).getFullYear() : l < 100 && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l <= s ? 0 : -100)), d > -1)
                for (h = 1, c = d;;) {
                    var y = this._getDaysInMonth(l, h - 1);
                    if (c <= y) break;
                    h++, c -= y
                }
            if ((_ = this._daylightSavingAdjust(new Date(l, h - 1, c))).getFullYear() != l || _.getMonth() + 1 != h || _.getDate() != c) throw "Invalid date";
            return _
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                r = function(e) {
                    var i = u + 1 < t.length && t.charAt(u + 1) == e;
                    return i && u++, i
                },
                l = function(t, e, i) {
                    var s = "" + e;
                    if (r(t))
                        for (; s.length < i;) s = "0" + s;
                    return s
                },
                h = function(t, e, i, s) {
                    return r(t) ? s[e] : i[e]
                },
                c = "",
                d = !1;
            if (e)
                for (var u = 0; u < t.length; u++)
                    if (d) "'" != t.charAt(u) || r("'") ? c += t.charAt(u) : d = !1;
                    else switch (t.charAt(u)) {
                        case "d":
                            c += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            c += h("D", e.getDay(), s, n);
                            break;
                        case "o":
                            c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += h("M", e.getMonth(), o, a);
                            break;
                        case "y":
                            c += r("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            c += e.getTime();
                            break;
                        case "!":
                            c += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            r("'") ? c += "'" : d = !0;
                            break;
                        default:
                            c += t.charAt(u)
                    }
            return c
        },
        _possibleChars: function(t) {
            for (var e = "", i = !1, s = function(e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) == e;
                    return i && n++, i
                }, n = 0; n < t.length; n++)
                if (i) "'" != t.charAt(n) || s("'") ? e += t.charAt(n) : i = !1;
                else switch (t.charAt(n)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        e += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? e += "'" : i = !0;
                        break;
                    default:
                        e += t.charAt(n)
                }
            return e
        },
        _get: function(t, e) {
            return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() != t.lastVal) {
                var i, s, n = this._get(t, "dateFormat"),
                    o = t.lastVal = t.input ? t.input.val() : null;
                i = s = this._getDefaultDate(t);
                var a = this._getFormatConfig(t);
                try {
                    i = this.parseDate(n, o, a) || s
                } catch (t) {
                    this.log(t), o = e ? "" : o
                }
                t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear(), t.currentDay = o ? i.getDate() : 0, t.currentMonth = o ? i.getMonth() : 0, t.currentYear = o ? i.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(t, e, i) {
            var s = null == e || "" === e ? i : "string" == typeof e ? function(e) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                } catch (t) {}
                for (var i = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), n = i.getMonth(), o = i.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = a.exec(e); r;) {
                    switch (r[2] || "d") {
                        case "d":
                        case "D":
                            o += parseInt(r[1], 10);
                            break;
                        case "w":
                        case "W":
                            o += 7 * parseInt(r[1], 10);
                            break;
                        case "m":
                        case "M":
                            n += parseInt(r[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(s, n));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(r[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(s, n))
                    }
                    r = a.exec(e)
                }
                return new Date(s, n, o)
            }(e) : "number" == typeof e ? isNaN(e) ? i : function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }(e) : new Date(e.getTime());
            return (s = s && "Invalid Date" == s.toString() ? i : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), (n != t.selectedMonth || o != t.selectedYear) && !i && this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function(t) {
            var e = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map((function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            }))
        },
        _generateHTML: function(t) {
            var e = new Date;
            e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
            var i = this._get(t, "isRTL"),
                s = this._get(t, "showButtonPanel"),
                n = this._get(t, "hideIfNoPrevNext"),
                o = this._get(t, "navigationAsDateFormat"),
                a = this._getNumberOfMonths(t),
                r = this._get(t, "showCurrentAtPos"),
                l = this._get(t, "stepMonths"),
                h = 1 != a[0] || 1 != a[1],
                c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                d = this._getMinMaxDate(t, "min"),
                u = this._getMinMaxDate(t, "max"),
                p = t.drawMonth - r,
                f = t.drawYear;
            if (p < 0 && (p += 12, f--), u) {
                var g = this._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - a[0] * a[1] + 1, u.getDate()));
                for (g = d && g < d ? d : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) --p < 0 && (p = 11, f--)
            }
            t.drawMonth = p, t.drawYear = f;
            var m = this._get(t, "prevText");
            m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
            var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                b = this._get(t, "nextText");
            b = o ? this.formatDate(b, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : b;
            var _ = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>",
                y = this._get(t, "currentText"),
                w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
            y = o ? this.formatDate(y, w, this._getFormatConfig(t)) : y;
            var k = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                x = s ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? k : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + y + "</button>" : "") + (i ? "" : k) + "</div>" : "",
                C = parseInt(this._get(t, "firstDay"), 10);
            C = isNaN(C) ? 0 : C;
            for (var D = this._get(t, "showWeek"), I = this._get(t, "dayNames"), P = (this._get(t, "dayNamesShort"), this._get(t, "dayNamesMin")), M = this._get(t, "monthNames"), S = this._get(t, "monthNamesShort"), z = this._get(t, "beforeShowDay"), T = this._get(t, "showOtherMonths"), A = this._get(t, "selectOtherMonths"), H = (this._get(t, "calculateWeek") || this.iso8601Week, this._getDefaultDate(t)), N = "", W = 0; W < a[0]; W++) {
                var O = "";
                this.maxRows = 4;
                for (var E = 0; E < a[1]; E++) {
                    var R = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                        F = " ui-corner-all",
                        Y = "";
                    if (h) {
                        if (Y += '<div class="ui-datepicker-group', a[1] > 1) switch (E) {
                            case 0:
                                Y += " ui-datepicker-group-first", F = " ui-corner-" + (i ? "right" : "left");
                                break;
                            case a[1] - 1:
                                Y += " ui-datepicker-group-last", F = " ui-corner-" + (i ? "left" : "right");
                                break;
                            default:
                                Y += " ui-datepicker-group-middle", F = ""
                        }
                        Y += '">'
                    }
                    Y += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + F + '">' + (/all|left/.test(F) && 0 == W ? i ? _ : v : "") + (/all|right/.test(F) && 0 == W ? i ? v : _ : "") + this._generateMonthYearHeader(t, p, f, d, u, W > 0 || E > 0, M, S) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    for (var L = D ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", j = 0; j < 7; j++) {
                        var q = (j + C) % 7;
                        L += "<th" + ((j + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + I[q] + '">' + P[q] + "</span></th>"
                    }
                    Y += L + "</tr></thead><tbody>";
                    var B = this._getDaysInMonth(f, p);
                    f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, B));
                    var K = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
                        U = Math.ceil((K + B) / 7),
                        Q = h && this.maxRows > U ? this.maxRows : U;
                    this.maxRows = Q;
                    for (var V = this._daylightSavingAdjust(new Date(f, p, 1 - K)), X = 0; X < Q; X++) {
                        Y += "<tr>";
                        var Z = D ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(V) + "</td>" : "";
                        for (j = 0; j < 7; j++) {
                            var G = z ? z.apply(t.input ? t.input[0] : null, [V]) : [!0, ""],
                                J = V.getMonth() != p,
                                tt = J && !A || !G[0] || d && V < d || u && V > u;
                            Z += '<td class="' + ((j + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (J ? " ui-datepicker-other-month" : "") + (V.getTime() == R.getTime() && p == t.selectedMonth && t._keyEvent || H.getTime() == V.getTime() && H.getTime() == R.getTime() ? " " + this._dayOverClass : "") + (tt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (J && !T ? "" : " " + G[1] + (V.getTime() == c.getTime() ? " " + this._currentClass : "") + (V.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (J && !T || !G[2] ? "" : ' title="' + G[2] + '"') + (tt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + V.getMonth() + '" data-year="' + V.getFullYear() + '"') + ">" + (J && !T ? "&#xa0;" : tt ? '<span class="ui-state-default">' + V.getDate() + "</span>" : '<a class="ui-state-default' + (V.getTime() == e.getTime() ? " ui-state-highlight" : "") + (V.getTime() == c.getTime() ? " ui-state-active" : "") + (J ? " ui-priority-secondary" : "") + '" href="#">' + V.getDate() + "</a>") + "</td>", V.setDate(V.getDate() + 1), V = this._daylightSavingAdjust(V)
                        }
                        Y += Z + "</tr>"
                    }++p > 11 && (p = 0, f++), O += Y += "</tbody></table>" + (h ? "</div>" + (a[0] > 0 && E == a[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "")
                }
                N += O
            }
            return N += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, N
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var l = this._get(t, "changeMonth"),
                h = this._get(t, "changeYear"),
                c = this._get(t, "showMonthAfterYear"),
                d = '<div class="ui-datepicker-title">',
                u = "";
            if (o || !l) u += '<span class="ui-datepicker-month">' + a[e] + "</span>";
            else {
                var p = s && s.getFullYear() == i,
                    f = n && n.getFullYear() == i;
                u += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for (var g = 0; g < 12; g++)(!p || g >= s.getMonth()) && (!f || g <= n.getMonth()) && (u += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + r[g] + "</option>");
                u += "</select>"
            }
            if (c || (d += u + (!o && l && h ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !h) d += '<span class="ui-datepicker-year">' + i + "</span>";
                else {
                    var m = this._get(t, "yearRange").split(":"),
                        v = (new Date).getFullYear(),
                        b = function(t) {
                            var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? v : e
                        },
                        _ = b(m[0]),
                        y = Math.max(_, b(m[1] || ""));
                    for (_ = s ? Math.max(_, s.getFullYear()) : _, y = n ? Math.min(y, n.getFullYear()) : y, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; _ <= y; _++) t.yearshtml += '<option value="' + _ + '"' + (_ == i ? ' selected="selected"' : "") + ">" + _ + "</option>";
                    t.yearshtml += "</select>", d += t.yearshtml, t.yearshtml = null
                }
            return d += this._get(t, "yearSuffix"), c && (d += (!o && l && h ? "" : "&#xa0;") + u), d += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" == i ? e : 0),
                n = t.drawMonth + ("M" == i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" == i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && e < i ? i : e;
            return n = s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max");
            return (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), $.fn.datepicker = function(t) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each((function() {
            "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
        })) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.23", window["DP_jQuery_" + dpuuid] = $
}(jQuery),
function(t, e) {
    t.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), t.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(t) {
            return undefined === t ? this._value() : (this._setOption("value", t), this)
        },
        _setOption: function(e, i) {
            "value" === e && (this.options.value = i, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var t = this.options.value;
            return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var t = this.value(),
                e = this._percentage();
            this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
        }
    }), t.extend(t.ui.progressbar, {
        version: "1.8.23"
    })
}(jQuery), jQuery.effects || function(t, e) {
        function i(e) {
            var i;
            return e && e.constructor == Array && 3 == e.length ? e : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) ? [2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3])] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(e)) ? l.transparent : l[t.trim(e).toLowerCase()]
        }

        function s(e, s) {
            var n;
            do {
                if ("" != (n = (t.curCSS || t.css)(e, s)) && "transparent" != n || t.nodeName(e, "body")) break;
                s = "backgroundColor"
            } while (e = e.parentNode);
            return i(n)
        }

        function n() {
            var t, e, i = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                s = {};
            if (i && i.length && i[0] && i[i[0]])
                for (var n = i.length; n--;) "string" == typeof i[t = i[n]] && (e = t.replace(/\-(\w)/g, (function(t, e) {
                    return e.toUpperCase()
                })), s[e] = i[t]);
            else
                for (t in i) "string" == typeof i[t] && (s[t] = i[t]);
            return s
        }

        function o(e) {
            var i, s;
            for (i in e)(null == (s = e[i]) || t.isFunction(s) || i in c || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(s))) && delete e[i];
            return e
        }

        function a(e, i, s, n) {
            return "object" == typeof e && (n = i, s = null, e = (i = e).effect), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i = i || {}, s = s || i.duration, [e, i, s = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, n = n || i.complete]
        }

        function r(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects[e]
        }
        t.effects = {}, t.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], (function(e, n) {
            t.fx.step[n] = function(t) {
                t.colorInit || (t.start = s(t.elem, n), t.end = i(t.end), t.colorInit = !0), t.elem.style[n] = "rgb(" + Math.max(Math.min(parseInt(t.pos * (t.end[0] - t.start[0]) + t.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(t.pos * (t.end[1] - t.start[1]) + t.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(t.pos * (t.end[2] - t.start[2]) + t.start[2], 10), 255), 0) + ")"
            }
        }));
        var l = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0],
                transparent: [255, 255, 255]
            },
            h = ["add", "remove", "toggle"],
            c = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        t.effects.animateClass = function(e, i, s, a) {
            return t.isFunction(s) && (a = s, s = null), this.queue((function() {
                var r, l = t(this),
                    c = l.attr("style") || " ",
                    d = o(n.call(this)),
                    u = l.attr("class") || "";
                t.each(h, (function(t, i) {
                    e[i] && l[i + "Class"](e[i])
                })), r = o(n.call(this)), l.attr("class", u), l.animate(function(t, e) {
                    var i, s = {
                        _: 0
                    };
                    for (i in e) t[i] != e[i] && (s[i] = e[i]);
                    return s
                }(d, r), {
                    queue: !1,
                    duration: i,
                    easing: s,
                    complete: function() {
                        t.each(h, (function(t, i) {
                            e[i] && l[i + "Class"](e[i])
                        })), "object" == typeof l.attr("style") ? (l.attr("style").cssText = "", l.attr("style").cssText = c) : l.attr("style", c), a && a.apply(this, arguments), t.dequeue(this)
                    }
                })
            }))
        }, t.fn.extend({
            _addClass: t.fn.addClass,
            addClass: function(e, i, s, n) {
                return i ? t.effects.animateClass.apply(this, [{
                    add: e
                }, i, s, n]) : this._addClass(e)
            },
            _removeClass: t.fn.removeClass,
            removeClass: function(e, i, s, n) {
                return i ? t.effects.animateClass.apply(this, [{
                    remove: e
                }, i, s, n]) : this._removeClass(e)
            },
            _toggleClass: t.fn.toggleClass,
            toggleClass: function(e, i, s, n, o) {
                return "boolean" == typeof i || undefined === i ? s ? t.effects.animateClass.apply(this, [i ? {
                    add: e
                } : {
                    remove: e
                }, s, n, o]) : this._toggleClass(e, i) : t.effects.animateClass.apply(this, [{
                    toggle: e
                }, i, s, n])
            },
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.apply(this, [{
                    add: i,
                    remove: e
                }, s, n, o])
            }
        }), t.extend(t.effects, {
            version: "1.8.23",
            save: function(t, e) {
                for (var i = 0; i < e.length; i++) null !== e[i] && t.data("ec.storage." + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                for (var i = 0; i < e.length; i++) null !== e[i] && t.css(e[i], t.data("ec.storage." + e[i]))
            },
            setMode: function(t, e) {
                return "toggle" == e && (e = t.is(":hidden") ? "show" : "hide"), e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case "left":
                        s = 0;
                        break;
                    case "center":
                        s = .5;
                        break;
                    case "right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        float: e.css("float")
                    },
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    n = document.activeElement;
                try {
                    n.id
                } catch (t) {
                    n = document.body
                }
                return e.wrap(s), (e[0] === n || t.contains(e[0], n)) && t(n).focus(), s = e.parent(), "static" == e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], (function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                })), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), s.css(i).show()
            },
            removeWrapper: function(e) {
                var i, s = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") ? (i = e.parent().replaceWith(e), (e[0] === s || t.contains(e[0], s)) && t(s).focus(), i) : e
            },
            setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, (function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                })), n
            }
        }), t.fn.extend({
            effect: function(e, i, s, n) {
                var o = a.apply(this, arguments),
                    r = {
                        options: o[1],
                        duration: o[2],
                        callback: o[3]
                    },
                    l = r.options.mode,
                    h = t.effects[e];
                return t.fx.off || !h ? l ? this[l](r.duration, r.callback) : this.each((function() {
                    r.callback && r.callback.call(this)
                })) : h.call(this, r)
            },
            _show: t.fn.show,
            show: function(t) {
                if (r(t)) return this._show.apply(this, arguments);
                var e = a.apply(this, arguments);
                return e[1].mode = "show", this.effect.apply(this, e)
            },
            _hide: t.fn.hide,
            hide: function(t) {
                if (r(t)) return this._hide.apply(this, arguments);
                var e = a.apply(this, arguments);
                return e[1].mode = "hide", this.effect.apply(this, e)
            },
            __toggle: t.fn.toggle,
            toggle: function(e) {
                if (r(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                var i = a.apply(this, arguments);
                return i[1].mode = "toggle", this.effect.apply(this, i)
            },
            cssUnit: function(e) {
                var i = this.css(e),
                    s = [];
                return t.each(["em", "px", "%", "pt"], (function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                })), s
            }
        });
        var d = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(t, e) {
            d[e] = function(e) {
                return Math.pow(e, t + 2)
            }
        })), t.extend(d, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(d, (function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function(t) {
                return t < .5 ? i(2 * t) / 2 : i(-2 * t + 2) / -2 + 1
            }
        }))
    }(jQuery),
    function(t, e) {
        t.effects.blind = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.direction || "vertical";
                t.effects.save(i, s), i.show();
                var a = t.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    r = "vertical" == o ? "height" : "width",
                    l = "vertical" == o ? a.height() : a.width();
                "show" == n && a.css(r, 0);
                var h = {};
                h[r] = "show" == n ? l : 0, a.animate(h, e.duration, e.options.easing, (function() {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                }))
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.bounce = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "effect"),
                    o = e.options.direction || "up",
                    a = e.options.distance || 20,
                    r = e.options.times || 5,
                    l = e.duration || 250;
                /show|hide/.test(n) && s.push("opacity"), t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
                var h = "up" == o || "down" == o ? "top" : "left",
                    c = "up" == o || "left" == o ? "pos" : "neg";
                a = e.options.distance || ("top" == h ? i.outerHeight(!0) / 3 : i.outerWidth(!0) / 3);
                ("show" == n && i.css("opacity", 0).css(h, "pos" == c ? -a : a), "hide" == n && (a /= 2 * r), "hide" != n && r--, "show" == n) && ((p = {
                    opacity: 1
                })[h] = ("pos" == c ? "+=" : "-=") + a, i.animate(p, l / 2, e.options.easing), a /= 2, r--);
                for (var d = 0; d < r; d++) {
                    var u = {};
                    (f = {})[h] = ("pos" == c ? "-=" : "+=") + a, u[h] = ("pos" == c ? "+=" : "-=") + a, i.animate(f, l / 2, e.options.easing).animate(u, l / 2, e.options.easing), a = "hide" == n ? 2 * a : a / 2
                }
                if ("hide" == n) {
                    var p;
                    (p = {
                        opacity: 0
                    })[h] = ("pos" == c ? "-=" : "+=") + a, i.animate(p, l / 2, e.options.easing, (function() {
                        i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
                    }))
                } else {
                    var f;
                    u = {};
                    (f = {})[h] = ("pos" == c ? "-=" : "+=") + a, u[h] = ("pos" == c ? "+=" : "-=") + a, i.animate(f, l / 2, e.options.easing).animate(u, l / 2, e.options.easing, (function() {
                        t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
                    }))
                }
                i.queue("fx", (function() {
                    i.dequeue()
                })), i.dequeue()
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.clip = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right", "height", "width"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.direction || "vertical";
                t.effects.save(i, s), i.show();
                var a = t.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    r = "IMG" == i[0].tagName ? a : i,
                    l = {
                        size: "vertical" == o ? "height" : "width",
                        position: "vertical" == o ? "top" : "left"
                    },
                    h = "vertical" == o ? r.height() : r.width();
                "show" == n && (r.css(l.size, 0), r.css(l.position, h / 2));
                var c = {};
                c[l.size] = "show" == n ? h : 0, c[l.position] = "show" == n ? 0 : h / 2, r.animate(c, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                    }
                })
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.drop = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right", "opacity"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.direction || "left";
                t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
                var a = "up" == o || "down" == o ? "top" : "left",
                    r = "up" == o || "left" == o ? "pos" : "neg",
                    l = e.options.distance || ("top" == a ? i.outerHeight(!0) / 2 : i.outerWidth(!0) / 2);
                "show" == n && i.css("opacity", 0).css(a, "pos" == r ? -l : l);
                var h = {
                    opacity: "show" == n ? 1 : 0
                };
                h[a] = ("show" == n ? "pos" == r ? "+=" : "-=" : "pos" == r ? "-=" : "+=") + l, i.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.explode = function(e) {
            return this.queue((function() {
                var i = e.options.pieces ? Math.round(Math.sqrt(e.options.pieces)) : 3,
                    s = e.options.pieces ? Math.round(Math.sqrt(e.options.pieces)) : 3;
                e.options.mode = "toggle" == e.options.mode ? t(this).is(":visible") ? "hide" : "show" : e.options.mode;
                var n = t(this).show().css("visibility", "hidden"),
                    o = n.offset();
                o.top -= parseInt(n.css("marginTop"), 10) || 0, o.left -= parseInt(n.css("marginLeft"), 10) || 0;
                for (var a = n.outerWidth(!0), r = n.outerHeight(!0), l = 0; l < i; l++)
                    for (var h = 0; h < s; h++) n.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: a / s * -h,
                        top: r / i * -l
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: a / s,
                        height: r / i,
                        left: o.left + h * (a / s) + ("show" == e.options.mode ? (h - Math.floor(s / 2)) * (a / s) : 0),
                        top: o.top + l * (r / i) + ("show" == e.options.mode ? (l - Math.floor(i / 2)) * (r / i) : 0),
                        opacity: "show" == e.options.mode ? 0 : 1
                    }).animate({
                        left: o.left + h * (a / s) + ("show" == e.options.mode ? 0 : (h - Math.floor(s / 2)) * (a / s)),
                        top: o.top + l * (r / i) + ("show" == e.options.mode ? 0 : (l - Math.floor(i / 2)) * (r / i)),
                        opacity: "show" == e.options.mode ? 1 : 0
                    }, e.duration || 500);
                setTimeout((function() {
                    "show" == e.options.mode ? n.css({
                        visibility: "visible"
                    }) : n.css({
                        visibility: "visible"
                    }).hide(), e.callback && e.callback.apply(n[0]), n.dequeue(), t("div.ui-effects-explode").remove()
                }), e.duration || 500)
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.fade = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = t.effects.setMode(i, e.options.mode || "hide");
                i.animate({
                    opacity: s
                }, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.fold = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.size || 15,
                    a = !!e.options.horizFirst,
                    r = e.duration ? e.duration / 2 : t.fx.speeds._default / 2;
                t.effects.save(i, s), i.show();
                var l = t.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    h = "show" == n != a,
                    c = h ? ["width", "height"] : ["height", "width"],
                    d = h ? [l.width(), l.height()] : [l.height(), l.width()],
                    u = /([0-9]+)%/.exec(o);
                u && (o = parseInt(u[1], 10) / 100 * d["hide" == n ? 0 : 1]), "show" == n && l.css(a ? {
                    height: 0,
                    width: o
                } : {
                    height: o,
                    width: 0
                });
                var p = {},
                    f = {};
                p[c[0]] = "show" == n ? d[0] : o, f[c[1]] = "show" == n ? d[1] : 0, l.animate(p, r, e.options.easing).animate(f, r, e.options.easing, (function() {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                }))
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.highlight = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["backgroundImage", "backgroundColor", "opacity"],
                    n = t.effects.setMode(i, e.options.mode || "show"),
                    o = {
                        backgroundColor: i.css("backgroundColor")
                    };
                "hide" == n && (o.opacity = 0), t.effects.save(i, s), i.show().css({
                    backgroundImage: "none",
                    backgroundColor: e.options.color || "#ffff99"
                }).animate(o, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), "show" == n && !t.support.opacity && this.style.removeAttribute("filter"), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.pulsate = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = t.effects.setMode(i, e.options.mode || "show"),
                    n = 2 * (e.options.times || 5) - 1,
                    o = e.duration ? e.duration / 2 : t.fx.speeds._default / 2,
                    a = i.is(":visible"),
                    r = 0;
                a || (i.css("opacity", 0).show(), r = 1), ("hide" == s && a || "show" == s && !a) && n--;
                for (var l = 0; l < n; l++) i.animate({
                    opacity: r
                }, o, e.options.easing), r = (r + 1) % 2;
                i.animate({
                    opacity: r
                }, o, e.options.easing, (function() {
                    0 == r && i.hide(), e.callback && e.callback.apply(this, arguments)
                })), i.queue("fx", (function() {
                    i.dequeue()
                })).dequeue()
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.puff = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = t.effects.setMode(i, e.options.mode || "hide"),
                    n = parseInt(e.options.percent, 10) || 150,
                    o = n / 100,
                    a = {
                        height: i.height(),
                        width: i.width()
                    };
                t.extend(e.options, {
                    fade: !0,
                    mode: s,
                    percent: "hide" == s ? n : 100,
                    from: "hide" == s ? a : {
                        height: a.height * o,
                        width: a.width * o
                    }
                }), i.effect("scale", e.options, e.duration, e.callback), i.dequeue()
            }))
        }, t.effects.scale = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = t.extend(!0, {}, e.options),
                    n = t.effects.setMode(i, e.options.mode || "effect"),
                    o = parseInt(e.options.percent, 10) || (0 == parseInt(e.options.percent, 10) || "hide" == n ? 0 : 100),
                    a = e.options.direction || "both",
                    r = e.options.origin;
                "effect" != n && (s.origin = r || ["middle", "center"], s.restore = !0);
                var l = {
                    height: i.height(),
                    width: i.width()
                };
                i.from = e.options.from || ("show" == n ? {
                    height: 0,
                    width: 0
                } : l);
                var h = "horizontal" != a ? o / 100 : 1,
                    c = "vertical" != a ? o / 100 : 1;
                i.to = {
                    height: l.height * h,
                    width: l.width * c
                }, e.options.fade && ("show" == n && (i.from.opacity = 0, i.to.opacity = 1), "hide" == n && (i.from.opacity = 1, i.to.opacity = 0)), s.from = i.from, s.to = i.to, s.mode = n, i.effect("size", s, e.duration, e.callback), i.dequeue()
            }))
        }, t.effects.size = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    o = ["width", "height", "overflow"],
                    a = ["fontSize"],
                    r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    h = t.effects.setMode(i, e.options.mode || "effect"),
                    c = e.options.restore || !1,
                    d = e.options.scale || "both",
                    u = e.options.origin,
                    p = {
                        height: i.height(),
                        width: i.width()
                    };
                if (i.from = e.options.from || p, i.to = e.options.to || p, u) {
                    var f = t.effects.getBaseline(u, p);
                    i.from.top = (p.height - i.from.height) * f.y, i.from.left = (p.width - i.from.width) * f.x, i.to.top = (p.height - i.to.height) * f.y, i.to.left = (p.width - i.to.width) * f.x
                }
                var g = {
                    from: {
                        y: i.from.height / p.height,
                        x: i.from.width / p.width
                    },
                    to: {
                        y: i.to.height / p.height,
                        x: i.to.width / p.width
                    }
                };
                "box" != d && "both" != d || (g.from.y != g.to.y && (s = s.concat(r), i.from = t.effects.setTransition(i, r, g.from.y, i.from), i.to = t.effects.setTransition(i, r, g.to.y, i.to)), g.from.x != g.to.x && (s = s.concat(l), i.from = t.effects.setTransition(i, l, g.from.x, i.from), i.to = t.effects.setTransition(i, l, g.to.x, i.to))), ("content" == d || "both" == d) && g.from.y != g.to.y && (s = s.concat(a), i.from = t.effects.setTransition(i, a, g.from.y, i.from), i.to = t.effects.setTransition(i, a, g.to.y, i.to)), t.effects.save(i, c ? s : n), i.show(), t.effects.createWrapper(i), i.css("overflow", "hidden").css(i.from), "content" != d && "both" != d || (r = r.concat(["marginTop", "marginBottom"]).concat(a), l = l.concat(["marginLeft", "marginRight"]), o = s.concat(r).concat(l), i.find("*[width]").each((function() {
                    var i = t(this);
                    c && t.effects.save(i, o);
                    var s = i.height(),
                        n = i.width();
                    i.from = {
                        height: s * g.from.y,
                        width: n * g.from.x
                    }, i.to = {
                        height: s * g.to.y,
                        width: n * g.to.x
                    }, g.from.y != g.to.y && (i.from = t.effects.setTransition(i, r, g.from.y, i.from), i.to = t.effects.setTransition(i, r, g.to.y, i.to)), g.from.x != g.to.x && (i.from = t.effects.setTransition(i, l, g.from.x, i.from), i.to = t.effects.setTransition(i, l, g.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.options.easing, (function() {
                        c && t.effects.restore(i, o)
                    }))
                }))), i.animate(i.to, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        0 === i.to.opacity && i.css("opacity", i.from.opacity), "hide" == h && i.hide(), t.effects.restore(i, c ? s : n), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.shake = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = (t.effects.setMode(i, e.options.mode || "effect"), e.options.direction || "left"),
                    o = e.options.distance || 20,
                    a = e.options.times || 3,
                    r = e.duration || e.options.duration || 140;
                t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
                var l = "up" == n || "down" == n ? "top" : "left",
                    h = "up" == n || "left" == n ? "pos" : "neg",
                    c = {},
                    d = {},
                    u = {};
                c[l] = ("pos" == h ? "-=" : "+=") + o, d[l] = ("pos" == h ? "+=" : "-=") + 2 * o, u[l] = ("pos" == h ? "-=" : "+=") + 2 * o, i.animate(c, r, e.options.easing);
                for (var p = 1; p < a; p++) i.animate(d, r, e.options.easing).animate(u, r, e.options.easing);
                i.animate(d, r, e.options.easing).animate(c, r / 2, e.options.easing, (function() {
                    t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
                })), i.queue("fx", (function() {
                    i.dequeue()
                })), i.dequeue()
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.slide = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "show"),
                    o = e.options.direction || "left";
                t.effects.save(i, s), i.show(), t.effects.createWrapper(i).css({
                    overflow: "hidden"
                });
                var a = "up" == o || "down" == o ? "top" : "left",
                    r = "up" == o || "left" == o ? "pos" : "neg",
                    l = e.options.distance || ("top" == a ? i.outerHeight(!0) : i.outerWidth(!0));
                "show" == n && i.css(a, "pos" == r ? isNaN(l) ? "-" + l : -l : l);
                var h = {};
                h[a] = ("show" == n ? "pos" == r ? "+=" : "-=" : "pos" == r ? "-=" : "+=") + l, i.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            }))
        }
    }(jQuery),
    function(t, e) {
        t.effects.transfer = function(e) {
            return this.queue((function() {
                var i = t(this),
                    s = t(e.options.to),
                    n = s.offset(),
                    o = {
                        top: n.top,
                        left: n.left,
                        height: s.innerHeight(),
                        width: s.innerWidth()
                    },
                    a = i.offset(),
                    r = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.options.className).css({
                        top: a.top,
                        left: a.left,
                        height: i.innerHeight(),
                        width: i.innerWidth(),
                        position: "absolute"
                    }).animate(o, e.duration, e.options.easing, (function() {
                        r.remove(), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                    }))
            }))
        }
    }(jQuery);
//# sourceMappingURL=index.e9fa7ade.js.map