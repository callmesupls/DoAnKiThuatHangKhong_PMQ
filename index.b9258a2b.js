/*! jQuery v1.7.2 jquery.com | jquery.org/license */ ! function(e, t) {
    function n(e) {
        return j.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    function r(e) {
        if (!ft[e]) {
            var t = A.body,
                n = j("<" + e + ">").appendTo(t),
                r = n.css("display");
            n.remove(), "none" !== r && "" !== r || (st || ((st = A.createElement("iframe")).frameBorder = st.width = st.height = 0), t.appendChild(st), lt && st.createElement || ((lt = (st.contentWindow || st.contentDocument).document).write((j.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), lt.close()), n = lt.createElement(e), lt.body.appendChild(n), r = j.css(n, "display"), t.removeChild(st)), ft[e] = r
        }
        return ft[e]
    }

    function i(e, t) {
        var n = {};
        return j.each(ht.concat.apply([], ht.slice(0, t)), (function() {
            n[this] = e
        })), n
    }

    function o() {
        ct = t
    }

    function a() {
        return setTimeout(o, 0), ct = j.now()
    }

    function s() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function l(e, t, n, r) {
        if (j.isArray(t)) j.each(t, (function(t, i) {
            n || We.test(e) ? r(e, i) : l(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }));
        else if (n || "object" !== j.type(t)) r(e, t);
        else
            for (var i in t) l(e + "[" + i + "]", t[i], n, r)
    }

    function u(e, n) {
        var r, i, o = j.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && j.extend(!0, e, i)
    }

    function c(e, n, r, i, o, a) {
        (a = a || {})[o = o || n.dataTypes[0]] = !0;
        for (var s, l = e[o], u = 0, f = l ? l.length : 0, d = e === et; u < f && (d || !s); u++) "string" == typeof(s = l[u](n, r, i)) && (!d || a[s] ? s = t : (n.dataTypes.unshift(s), s = c(e, n, r, i, s, a)));
        return (d || !s) && !a["*"] && (s = c(e, n, r, i, "*", a)), s
    }

    function f(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), j.isFunction(n))
                for (var r, i, o = t.toLowerCase().split(Je), a = 0, s = o.length; a < s; a++) r = o[a], (i = /^\+/.test(r)) && (r = r.substr(1) || "*"), (e[r] = e[r] || [])[i ? "unshift" : "push"](n)
        }
    }

    function d(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = "width" === t ? 1 : 0;
        if (r > 0) {
            if ("border" !== n)
                for (; i < 4; i += 2) n || (r -= parseFloat(j.css(e, "padding" + Oe[i])) || 0), "margin" === n ? r += parseFloat(j.css(e, n + Oe[i])) || 0 : r -= parseFloat(j.css(e, "border" + Oe[i] + "Width")) || 0;
            return r + "px"
        }
        if (((r = Ee(e, t)) < 0 || null == r) && (r = e.style[t]), Fe.test(r)) return r;
        if (r = parseFloat(r) || 0, n)
            for (; i < 4; i += 2) r += parseFloat(j.css(e, "padding" + Oe[i])) || 0, "padding" !== n && (r += parseFloat(j.css(e, "border" + Oe[i] + "Width")) || 0), "margin" === n && (r += parseFloat(j.css(e, n + Oe[i])) || 0);
        return r + "px"
    }

    function p(e) {
        var t = A.createElement("div");
        return Ce.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function h(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? m(e) : "script" !== t && void 0 !== e.getElementsByTagName && j.grep(e.getElementsByTagName("input"), m)
    }

    function m(e) {
        "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
    }

    function g(e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function y(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(j.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }

    function v(e, t) {
        if (1 === t.nodeType && j.hasData(e)) {
            var n, r, i, o = j._data(e),
                a = j._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (r = 0, i = s[n].length; r < i; r++) j.event.add(t, n, s[n][r]);
            a.data && (a.data = j.extend({}, a.data))
        }
    }

    function b(e, t) {
        return j.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        var t = ce.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function T(e, t, n) {
        if (t = t || 0, j.isFunction(t)) return j.grep(e, (function(e, r) {
            return !!t.call(e, r, e) === n
        }));
        if (t.nodeType) return j.grep(e, (function(e, r) {
            return e === t === n
        }));
        if ("string" == typeof t) {
            var r = j.grep(e, (function(e) {
                return 1 === e.nodeType
            }));
            if (ae.test(t)) return j.filter(t, r, !n);
            t = j.filter(t, r)
        }
        return j.grep(e, (function(e, r) {
            return j.inArray(e, t) >= 0 === n
        }))
    }

    function w(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function N() {
        return !0
    }

    function C() {
        return !1
    }

    function E(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            o = t + "mark",
            a = j._data(e, r);
        a && ("queue" === n || !j._data(e, i)) && ("mark" === n || !j._data(e, o)) && setTimeout((function() {
            !j._data(e, i) && !j._data(e, o) && (j.removeData(e, r, !0), a.fire())
        }), 0)
    }

    function k(e) {
        for (var t in e)
            if (("data" !== t || !j.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function S(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(H, "-$1").toLowerCase();
            if ("string" == typeof(r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : j.isNumeric(r) ? +r : _.test(r) ? j.parseJSON(r) : r)
                } catch (e) {}
                j.data(e, n, r)
            } else r = t
        }
        return r
    }
    var A = e.document,
        L = e.navigator,
        D = e.location,
        j = function() {
            function n() {
                if (!s.isReady) {
                    try {
                        A.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    s.ready()
                }
            }
            var r, i, o, a, s = function(e, t) {
                    return new s.fn.init(e, t, r)
                },
                l = e.jQuery,
                u = e.$,
                c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                f = /\S/,
                d = /^\s+/,
                p = /\s+$/,
                h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                m = /^[\],:{}\s]*$/,
                g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                v = /(?:^|:|,)(?:\s*\[)+/g,
                b = /(webkit)[ \/]([\w.]+)/,
                x = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                T = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                N = /-([a-z]|[0-9])/gi,
                C = /^-ms-/,
                E = function(e, t) {
                    return (t + "").toUpperCase()
                },
                k = L.userAgent,
                S = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                j = Array.prototype.push,
                F = Array.prototype.slice,
                M = String.prototype.trim,
                _ = Array.prototype.indexOf,
                H = {};
            return s.fn = s.prototype = {
                constructor: s,
                init: function(e, n, r) {
                    var i, o, a, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && A.body) return this.context = A, this[0] = A.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if ((i = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? c.exec(e) : [null, e, null]) && (i[1] || !n)) {
                            if (i[1]) return l = (n = n instanceof s ? n[0] : n) ? n.ownerDocument || n : A, (a = h.exec(e)) ? s.isPlainObject(n) ? (e = [A.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : e = ((a = s.buildFragment([i[1]], [l])).cacheable ? s.clone(a.fragment) : a.fragment).childNodes, s.merge(this, e);
                            if ((o = A.getElementById(i[2])) && o.parentNode) {
                                if (o.id !== i[2]) return r.find(e);
                                this.length = 1, this[0] = o
                            }
                            return this.context = A, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                    }
                    return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function(e, t, n) {
                    var r = this.constructor();
                    return s.isArray(e) ? j.apply(r, e) : s.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                },
                each: function(e, t) {
                    return s.each(this, e, t)
                },
                ready: function(e) {
                    return s.bindReady(), o.add(e), this
                },
                eq: function(e) {
                    return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(e) {
                    return this.pushStack(s.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: j,
                sort: [].sort,
                splice: [].splice
            }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function() {
                var e, n, r, i, o, a, l = arguments[0] || {},
                    u = 1,
                    c = arguments.length,
                    f = !1;
                for ("boolean" == typeof l && (f = l, l = arguments[1] || {}, u = 2), "object" != typeof l && !s.isFunction(l) && (l = {}), c === u && (l = this, --u); u < c; u++)
                    if (null != (e = arguments[u]))
                        for (n in e) r = l[n], l !== (i = e[n]) && (f && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, a = r && s.isArray(r) ? r : []) : a = r && s.isPlainObject(r) ? r : {}, l[n] = s.extend(f, a, i)) : i !== t && (l[n] = i));
                return l
            }, s.extend({
                noConflict: function(t) {
                    return e.$ === s && (e.$ = u), t && e.jQuery === s && (e.jQuery = l), s
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? s.readyWait++ : s.ready(!0)
                },
                ready: function(e) {
                    if (!0 === e && !--s.readyWait || !0 !== e && !s.isReady) {
                        if (!A.body) return setTimeout(s.ready, 1);
                        if (s.isReady = !0, !0 !== e && --s.readyWait > 0) return;
                        o.fireWith(A, [s]), s.fn.trigger && s(A).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!o) {
                        if (o = s.Callbacks("once memory"), "complete" === A.readyState) return setTimeout(s.ready, 1);
                        if (A.addEventListener) A.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1);
                        else if (A.attachEvent) {
                            A.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (e) {}
                            A.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function(e) {
                    return "function" === s.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === s.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : H[S.call(e)] || "object"
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !D.call(e, "constructor") && !D.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    var n;
                    for (n in e);
                    return n === t || D.call(e, n)
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseJSON: function(t) {
                    return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : m.test(t.replace(g, "@").replace(y, "]").replace(v, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
                },
                parseXML: function(n) {
                    if ("string" != typeof n || !n) return null;
                    var r;
                    try {
                        e.DOMParser ? r = (new DOMParser).parseFromString(n, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n))
                    } catch (e) {
                        r = t
                    }
                    return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && s.error("Invalid XML: " + n), r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && f.test(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(C, "ms-").replace(N, E)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(e, n, r) {
                    var i, o = 0,
                        a = e.length,
                        l = a === t || s.isFunction(e);
                    if (r)
                        if (l) {
                            for (i in e)
                                if (!1 === n.apply(e[i], r)) break
                        } else
                            for (; o < a && !1 !== n.apply(e[o++], r););
                    else if (l) {
                        for (i in e)
                            if (!1 === n.call(e[i], i, e[i])) break
                    } else
                        for (; o < a && !1 !== n.call(e[o], o, e[o++]););
                    return e
                },
                trim: M ? function(e) {
                    return null == e ? "" : M.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(d, "").replace(p, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    if (null != e) {
                        var r = s.type(e);
                        null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? j.call(n, e) : s.merge(n, e)
                    }
                    return n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (_) return _.call(t, e, n);
                        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = e.length,
                        i = 0;
                    if ("number" == typeof n.length)
                        for (var o = n.length; i < o; i++) e[r++] = n[i];
                    else
                        for (; n[i] !== t;) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    var r = [];
                    n = !!n;
                    for (var i = 0, o = e.length; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
                    return r
                },
                map: function(e, n, r) {
                    var i, o, a = [],
                        l = 0,
                        u = e.length;
                    if (e instanceof s || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || s.isArray(e)))
                        for (; l < u; l++) null != (i = n(e[l], l, r)) && (a[a.length] = i);
                    else
                        for (o in e) null != (i = n(e[o], o, r)) && (a[a.length] = i);
                    return a.concat.apply([], a)
                },
                guid: 1,
                proxy: function(e, n) {
                    if ("string" == typeof n) {
                        var r = e[n];
                        n = e, e = r
                    }
                    if (!s.isFunction(e)) return t;
                    var i = F.call(arguments, 2),
                        o = function() {
                            return e.apply(n, i.concat(F.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || s.guid++, o
                },
                access: function(e, n, r, i, o, a, l) {
                    var u, c = null == r,
                        f = 0,
                        d = e.length;
                    if (r && "object" == typeof r) {
                        for (f in r) s.access(e, n, f, r[f], 1, a, i);
                        o = 1
                    } else if (i !== t) {
                        if (u = l === t && s.isFunction(i), c && (u ? (u = n, n = function(e, t, n) {
                                return u.call(s(e), n)
                            }) : (n.call(e, i), n = null)), n)
                            for (; f < d; f++) n(e[f], r, u ? i.call(e[f], f, n(e[f], r)) : i, l);
                        o = 1
                    }
                    return o ? e : c ? n.call(e) : d ? n(e[0], r) : a
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(e) {
                    e = e.toLowerCase();
                    var t = b.exec(e) || x.exec(e) || T.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
                        return r && r instanceof s && !(r instanceof e) && (r = e(r)), s.fn.init.call(this, n, r, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(A);
                    return e
                },
                browser: {}
            }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), (function(e, t) {
                H["[object " + t + "]"] = t.toLowerCase()
            })), (i = s.uaMatch(k)).browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), f.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), r = s(A), A.addEventListener ? a = function() {
                A.removeEventListener("DOMContentLoaded", a, !1), s.ready()
            } : A.attachEvent && (a = function() {
                "complete" === A.readyState && (A.detachEvent("onreadystatechange", a), s.ready())
            }), s
        }(),
        F = {};
    j.Callbacks = function(e) {
        e = e ? F[e] || function(e) {
            var t, n, r = F[e] = {};
            for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++) r[e[t]] = !0;
            return r
        }(e) : {};
        var n, r, i, o, a, s, l = [],
            u = [],
            c = function(t) {
                var n, r, i, o;
                for (n = 0, r = t.length; n < r; n++) i = t[n], "array" === (o = j.type(i)) ? c(i) : "function" === o && (!e.unique || !d.has(i)) && l.push(i)
            },
            f = function(t, c) {
                for (c = c || [], n = !e.memory || [t, c], r = !0, i = !0, s = o || 0, o = 0, a = l.length; l && s < a; s++)
                    if (!1 === l[s].apply(t, c) && e.stopOnFalse) {
                        n = !0;
                        break
                    }
                i = !1, l && (e.once ? !0 === n ? d.disable() : l = [] : u && u.length && (n = u.shift(), d.fireWith(n[0], n[1])))
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        c(arguments), i ? a = l.length : n && !0 !== n && (o = e, f(n[0], n[1]))
                    }
                    return this
                },
                remove: function() {
                    if (l)
                        for (var t = arguments, n = 0, r = t.length; n < r; n++)
                            for (var o = 0; o < l.length && (t[n] !== l[o] || (i && o <= a && (a--, o <= s && s--), l.splice(o--, 1), !e.unique)); o++);
                    return this
                },
                has: function(e) {
                    if (l)
                        for (var t = 0, n = l.length; t < n; t++)
                            if (e === l[t]) return !0;
                    return !1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = u = n = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, (!n || !0 === n) && d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, r) {
                    return u && (i ? e.once || u.push([t, r]) : (!e.once || !n) && f(t, r)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    };
    var M = [].slice;
    j.extend({
        Deferred: function(e) {
            var t, n = j.Callbacks("once memory"),
                r = j.Callbacks("once memory"),
                i = j.Callbacks("memory"),
                o = "pending",
                a = {
                    resolve: n,
                    reject: r,
                    notify: i
                },
                s = {
                    done: n.add,
                    fail: r.add,
                    progress: i.add,
                    state: function() {
                        return o
                    },
                    isResolved: n.fired,
                    isRejected: r.fired,
                    then: function(e, t, n) {
                        return l.done(e).fail(t).progress(n), this
                    },
                    always: function() {
                        return l.done.apply(l, arguments).fail.apply(l, arguments), this
                    },
                    pipe: function(e, t, n) {
                        return j.Deferred((function(r) {
                            j.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, (function(e, t) {
                                var n, i = t[0],
                                    o = t[1];
                                j.isFunction(i) ? l[e]((function() {
                                    (n = i.apply(this, arguments)) && j.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[o + "With"](this === l ? r : this, [n])
                                })) : l[e](r[o])
                            }))
                        })).promise()
                    },
                    promise: function(e) {
                        if (null == e) e = s;
                        else
                            for (var t in s) e[t] = s[t];
                        return e
                    }
                },
                l = s.promise({});
            for (t in a) l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
            return l.done((function() {
                o = "resolved"
            }), r.disable, i.lock).fail((function() {
                o = "rejected"
            }), n.disable, i.lock), e && e.call(l, l), l
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    a[e] = arguments.length > 1 ? M.call(arguments, 0) : t, l.notifyWith(u, a)
                }
            }

            function n(e) {
                return function(t) {
                    r[e] = arguments.length > 1 ? M.call(arguments, 0) : t, --s || l.resolveWith(l, r)
                }
            }
            var r = M.call(arguments, 0),
                i = 0,
                o = r.length,
                a = Array(o),
                s = o,
                l = o <= 1 && e && j.isFunction(e.promise) ? e : j.Deferred(),
                u = l.promise();
            if (o > 1) {
                for (; i < o; i++) r[i] && r[i].promise && j.isFunction(r[i].promise) ? r[i].promise().then(n(i), l.reject, t(i)) : --s;
                s || l.resolveWith(l, r)
            } else l !== e && l.resolveWith(l, o ? [e] : []);
            return u
        }
    }), j.support = function() {
        var t, n, r, i, o, a, s, l, u, c, f, d = A.createElement("div");
        A.documentElement;
        if (d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !n.length || !r) return {};
        o = (i = A.createElement("select")).appendChild(A.createElement("option")), a = d.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== d.className,
            enctype: !!A.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== A.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, j.boxModel = t.boxModel = "CSS1Compat" === A.compatMode, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete d.test
        } catch (e) {
            t.deleteExpando = !1
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", (function() {
                t.noCloneEvent = !1
            })), d.cloneNode(!0).fireEvent("onclick")), (a = A.createElement("input")).value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), (s = A.createDocumentFragment()).appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent)
            for (c in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                })(f = (u = "on" + c) in d) || (d.setAttribute(u, "return;"), f = "function" == typeof d[u]), t[c + "Bubbles"] = f;
        return s.removeChild(d), s = i = o = d = a = null, j((function() {
            var n, r, i, o, a, s, u, c, p, h, m, g = A.getElementsByTagName("body")[0];
            !g || (1, h = (m = "padding:0;margin:0;border:") + "0;visibility:hidden;", c = "<div " + (u = "style='" + (p = "position:absolute;top:0;left:0;width:1px;height:1px;") + m + "5px solid #000;") + "display:block;'><div style='" + m + "0;display:block;overflow:hidden;'></div></div><table " + u + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", (n = A.createElement("div")).style.cssText = h + "width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(n, g.firstChild), d = A.createElement("div"), n.appendChild(d), d.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>", l = d.getElementsByTagName("td"), f = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = f && 0 === l[0].offsetHeight, e.getComputedStyle && (d.innerHTML = "", (s = A.createElement("div")).style.width = "0", s.style.marginRight = "0", d.style.width = "2px", d.appendChild(s), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(s, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), void 0 !== d.style.zoom && (d.innerHTML = "", d.style.width = d.style.padding = "1px", d.style.border = 0, d.style.overflow = "hidden", d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = 3 !== d.offsetWidth), d.style.cssText = p + h, d.innerHTML = c, i = (r = d.firstChild).firstChild, o = r.nextSibling.firstChild.firstChild, a = {
                doesNotAddBorder: 5 !== i.offsetTop,
                doesAddBorderForTableAndCells: 5 === o.offsetTop
            }, i.style.position = "fixed", i.style.top = "20px", a.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, i.style.position = i.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", a.subtractsBorderForOverflowNotVisible = -5 === i.offsetTop, a.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, e.getComputedStyle && (d.style.marginTop = "1%", t.pixelMargin = "1%" !== (e.getComputedStyle(d, null) || {
                marginTop: 0
            }).marginTop), void 0 !== n.style.zoom && (n.style.zoom = 1), g.removeChild(n), s = d = n = null, j.extend(t, a))
        })), t
    }();
    var _ = /^(?:\{.*\}|\[.*\])$/,
        H = /([A-Z])/g;
    j.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (j.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? j.cache[e[j.expando]] : e[j.expando]) && !k(e)
        },
        data: function(e, n, r, i) {
            if (j.acceptData(e)) {
                var o, a, s, l = j.expando,
                    u = "string" == typeof n,
                    c = e.nodeType,
                    f = c ? j.cache : e,
                    d = c ? e[l] : e[l] && l,
                    p = "events" === n;
                if ((!d || !f[d] || !p && !i && !f[d].data) && u && r === t) return;
                return d || (c ? e[l] = d = ++j.uuid : d = l), f[d] || (f[d] = {}, c || (f[d].toJSON = j.noop)), "object" != typeof n && "function" != typeof n || (i ? f[d] = j.extend(f[d], n) : f[d].data = j.extend(f[d].data, n)), o = a = f[d], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[j.camelCase(n)] = r), p && !a[n] ? o.events : (u ? null == (s = a[n]) && (s = a[j.camelCase(n)]) : s = a, s)
            }
        },
        removeData: function(e, t, n) {
            if (j.acceptData(e)) {
                var r, i, o, a = j.expando,
                    s = e.nodeType,
                    l = s ? j.cache : e,
                    u = s ? e[a] : a;
                if (!l[u]) return;
                if (t && (r = n ? l[u] : l[u].data)) {
                    j.isArray(t) || (t in r ? t = [t] : t = (t = j.camelCase(t)) in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (!(n ? k : j.isEmptyObject)(r)) return
                }
                if (!n && (delete l[u].data, !k(l[u]))) return;
                j.support.deleteExpando || !l.setInterval ? delete l[u] : l[u] = null, s && (j.support.deleteExpando ? delete e[a] : e.removeAttribute ? e.removeAttribute(a) : e[a] = null)
            }
        },
        _data: function(e, t, n) {
            return j.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = j.noData[e.nodeName.toLowerCase()];
                if (t) return !0 !== t && e.getAttribute("classid") === t
            }
            return !0
        }
    }), j.fn.extend({
        data: function(e, n) {
            var r, i, o, a, s, l = this[0],
                u = 0,
                c = null;
            if (e === t) {
                if (this.length && (c = j.data(l), 1 === l.nodeType && !j._data(l, "parsedAttrs"))) {
                    for (s = (o = l.attributes).length; u < s; u++) 0 === (a = o[u].name).indexOf("data-") && (a = j.camelCase(a.substring(5)), S(l, a, c[a]));
                    j._data(l, "parsedAttrs", !0)
                }
                return c
            }
            return "object" == typeof e ? this.each((function() {
                j.data(this, e)
            })) : ((r = e.split(".", 2))[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", j.access(this, (function(n) {
                if (n === t) return (c = this.triggerHandler("getData" + i, [r[0]])) === t && l && (c = j.data(l, e), c = S(l, e, c)), c === t && r[1] ? this.data(r[0]) : c;
                r[1] = n, this.each((function() {
                    var t = j(this);
                    t.triggerHandler("setData" + i, r), j.data(this, e, n), t.triggerHandler("changeData" + i, r)
                }))
            }), null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each((function() {
                j.removeData(this, e)
            }))
        }
    }), j.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", j._data(e, t, (j._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            if (!0 !== e && (n = t, t = e, e = !1), t) {
                var r = (n = n || "fx") + "mark",
                    i = e ? 0 : (j._data(t, r) || 1) - 1;
                i ? j._data(t, r, i) : (j.removeData(t, r, !0), E(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = j._data(e, t), n && (!r || j.isArray(n) ? r = j._data(e, t, j.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = j.queue(e, t),
                r = n.shift(),
                i = {};
            "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), j._data(e, t + ".run", i), r.call(e, (function() {
                j.dequeue(e, t)
            }), i)), n.length || (j.removeData(e, t + "queue " + t + ".run", !0), E(e, t, "queue"))
        }
    }), j.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? j.queue(this[0], e) : n === t ? this : this.each((function() {
                var t = j.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && j.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                j.dequeue(this, e)
            }))
        },
        delay: function(e, t) {
            return e = j.fx && j.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function r() {
                --l || o.resolveWith(a, [a])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var i, o = j.Deferred(), a = this, s = a.length, l = 1, u = e + "defer", c = e + "queue", f = e + "mark"; s--;)(i = j.data(a[s], u, t, !0) || (j.data(a[s], c, t, !0) || j.data(a[s], f, t, !0)) && j.data(a[s], u, j.Callbacks("once memory"), !0)) && (l++, i.add(r));
            return r(), o.promise(n)
        }
    });
    var O, B, P, q = /[\n\t\r]/g,
        W = /\s+/,
        I = /\r/g,
        $ = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        X = /^a(?:rea)?$/i,
        z = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = j.support.getSetAttribute;
    j.fn.extend({
        attr: function(e, t) {
            return j.access(this, j.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                j.removeAttr(this, e)
            }))
        },
        prop: function(e, t) {
            return j.access(this, j.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = j.propFix[e] || e, this.each((function() {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {}
            }))
        },
        addClass: function(e) {
            var t, n, r, i, o, a, s;
            if (j.isFunction(e)) return this.each((function(t) {
                j(this).addClass(e.call(this, t, this.className))
            }));
            if (e && "string" == typeof e)
                for (t = e.split(W), n = 0, r = this.length; n < r; n++)
                    if (1 === (i = this[n]).nodeType)
                        if (i.className || 1 !== t.length) {
                            for (o = " " + i.className + " ", a = 0, s = t.length; a < s; a++) ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                            i.className = j.trim(o)
                        } else i.className = e;
            return this
        },
        removeClass: function(e) {
            var n, r, i, o, a, s, l;
            if (j.isFunction(e)) return this.each((function(t) {
                j(this).removeClass(e.call(this, t, this.className))
            }));
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(W), r = 0, i = this.length; r < i; r++)
                    if (1 === (o = this[r]).nodeType && o.className)
                        if (e) {
                            for (a = (" " + o.className + " ").replace(q, " "), s = 0, l = n.length; s < l; s++) a = a.replace(" " + n[s] + " ", " ");
                            o.className = j.trim(a)
                        } else o.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return j.isFunction(e) ? this.each((function(n) {
                j(this).toggleClass(e.call(this, n, this.className, t), t)
            })) : this.each((function() {
                if ("string" === n)
                    for (var i, o = 0, a = j(this), s = t, l = e.split(W); i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else "undefined" !== n && "boolean" !== n || (this.className && j._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : j._data(this, "__className__") || "")
            }))
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(q, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = j.isFunction(e), this.each((function(r) {
                var o, a = j(this);
                1 === this.nodeType && (null == (o = i ? e.call(this, r, a.val()) : e) ? o = "" : "number" == typeof o ? o += "" : j.isArray(o) && (o = j.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (n = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
            }))) : o ? (n = j.valHooks[o.type] || j.valHooks[o.nodeName.toLowerCase()]) && "get" in n && (r = n.get(o, "value")) !== t ? r : "string" == typeof(r = o.value) ? r.replace(I, "") : null == r ? "" : r : void 0
        }
    }), j.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex,
                        a = [],
                        s = e.options,
                        l = "select-one" === e.type;
                    if (o < 0) return null;
                    for (n = l ? o : 0, r = l ? o + 1 : s.length; n < r; n++)
                        if ((i = s[n]).selected && (j.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !j.nodeName(i.parentNode, "optgroup"))) {
                            if (t = j(i).val(), l) return t;
                            a.push(t)
                        }
                    return l && !a.length && s.length ? j(s[o]).val() : a
                },
                set: function(e, t) {
                    var n = j.makeArray(t);
                    return j(e).find("option").each((function() {
                        this.selected = j.inArray(j(this).val(), n) >= 0
                    })), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, r, i) {
            var o, a, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return i && n in j.attrFn ? j(e)[n](r) : void 0 === e.getAttribute ? j.prop(e, n, r) : ((s = 1 !== l || !j.isXMLDoc(e)) && (n = n.toLowerCase(), a = j.attrHooks[n] || (z.test(n) ? B : O)), r !== t ? null === r ? void j.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : null === (o = e.getAttribute(n)) ? t : o)
        },
        removeAttr: function(e, t) {
            var n, r, i, o, a, s = 0;
            if (t && 1 === e.nodeType)
                for (o = (r = t.toLowerCase().split(W)).length; s < o; s++)(i = r[s]) && (n = j.propFix[i] || i, (a = z.test(i)) || j.attr(e, i, ""), e.removeAttribute(V ? i : n), a && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if ($.test(e.nodeName) && e.parentNode) j.error("type property can't be changed");
                    else if (!j.support.radioValue && "radio" === t && j.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return O && j.nodeName(e, "button") ? O.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (O && j.nodeName(e, "button")) return O.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !j.isXMLDoc(e)) && (n = j.propFix[n] || n, o = j.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : R.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), j.attrHooks.tabindex = j.propHooks.tabIndex, B = {
        get: function(e, n) {
            var r, i = j.prop(e, n);
            return !0 === i || "boolean" != typeof i && (r = e.getAttributeNode(n)) && !1 !== r.nodeValue ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return !1 === t ? j.removeAttr(e, n) : ((r = j.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (P = {
        name: !0,
        id: !0,
        coords: !0
    }, O = j.valHooks.button = {
        get: function(e, n) {
            var r;
            return (r = e.getAttributeNode(n)) && (P[n] ? "" !== r.nodeValue : r.specified) ? r.nodeValue : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = A.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, j.attrHooks.tabindex.set = O.set, j.each(["width", "height"], (function(e, t) {
        j.attrHooks[t] = j.extend(j.attrHooks[t], {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        })
    })), j.attrHooks.contenteditable = {
        get: O.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), O.set(e, t, n)
        }
    }), j.support.hrefNormalized || j.each(["href", "src", "width", "height"], (function(e, n) {
        j.attrHooks[n] = j.extend(j.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r
            }
        })
    })), j.support.style || (j.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), j.support.optSelected || (j.propHooks.selected = j.extend(j.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), j.support.enctype || (j.propFix.enctype = "encoding"), j.support.checkOn || j.each(["radio", "checkbox"], (function() {
        j.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    })), j.each(["radio", "checkbox"], (function() {
        j.valHooks[this] = j.extend(j.valHooks[this], {
            set: function(e, t) {
                if (j.isArray(t)) return e.checked = j.inArray(j(e).val(), t) >= 0
            }
        })
    }));
    var U = /^(?:textarea|input|select)$/i,
        G = /^([^\.]*)?(?:\.(.+))?$/,
        Y = /(?:^|\s)hover(\.\S+)?\b/,
        J = /^key/,
        Q = /^(?:mouse|contextmenu)|click/,
        K = /^(?:focusinfocus|focusoutblur)$/,
        Z = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        ee = function(e) {
            var t = Z.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        te = function(e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n.class || {}).value))
        },
        ne = function(e) {
            return j.event.special.hover ? e : e.replace(Y, "mouseenter$1 mouseleave$1")
        };
    j.event = {
            add: function(e, n, r, i, o) {
                var a, s, l, u, c, f, d, p, h, m, g;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = j._data(e))) {
                    for (r.handler && (r = (h = r).handler, o = h.selector), r.guid || (r.guid = j.guid++), (l = a.events) || (a.events = l = {}), (s = a.handle) || (a.handle = s = function(e) {
                            return void 0 === j || e && j.event.triggered === e.type ? t : j.event.dispatch.apply(s.elem, arguments)
                        }, s.elem = e), n = j.trim(ne(n)).split(" "), u = 0; u < n.length; u++) f = (c = G.exec(n[u]) || [])[1], d = (c[2] || "").split(".").sort(), g = j.event.special[f] || {}, f = (o ? g.delegateType : g.bindType) || f, g = j.event.special[f] || {}, p = j.extend({
                        type: f,
                        origType: c[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        quick: o && ee(o),
                        namespace: d.join(".")
                    }, h), (m = l[f]) || ((m = l[f] = []).delegateCount = 0, g.setup && !1 !== g.setup.call(e, i, d, s) || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), j.event.global[f] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var o, a, s, l, u, c, f, d, p, h, m, g, y = j.hasData(e) && j._data(e);
                if (y && (d = y.events)) {
                    for (t = j.trim(ne(t || "")).split(" "), o = 0; o < t.length; o++)
                        if (s = l = (a = G.exec(t[o]) || [])[1], u = a[2], s) {
                            for (p = j.event.special[s] || {}, c = (m = d[s = (r ? p.delegateType : p.bindType) || s] || []).length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = 0; f < m.length; f++) g = m[f], (i || l === g.origType) && (!n || n.guid === g.guid) && (!u || u.test(g.namespace)) && (!r || r === g.selector || "**" === r && g.selector) && (m.splice(f--, 1), g.selector && m.delegateCount--, p.remove && p.remove.call(e, g));
                            0 === m.length && c !== m.length && ((!p.teardown || !1 === p.teardown.call(e, u)) && j.removeEvent(e, s, y.handle), delete d[s])
                        } else
                            for (s in d) j.event.remove(e, s + t[o], n, r, !0);
                    j.isEmptyObject(d) && ((h = y.handle) && (h.elem = null), j.removeData(e, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, i, o) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var a, s, l, u, c, f, d, p, h, m, g = n.type || n,
                        y = [];
                    if (K.test(g + j.event.triggered)) return;
                    if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (y = g.split("."), g = y.shift(), y.sort()), (!i || j.event.customEvent[g]) && !j.event.global[g]) return;
                    if ((n = "object" == typeof n ? n[j.expando] ? n : new j.Event(g, n) : new j.Event(g)).type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = g.indexOf(":") < 0 ? "on" + g : "", !i) {
                        for (l in a = j.cache) a[l].events && a[l].events[g] && j.event.trigger(n, r, a[l].handle.elem, !0);
                        return
                    }
                    if (n.result = t, n.target || (n.target = i), (r = null != r ? j.makeArray(r) : []).unshift(n), (d = j.event.special[g] || {}).trigger && !1 === d.trigger.apply(i, r)) return;
                    if (h = [
                            [i, d.bindType || g]
                        ], !o && !d.noBubble && !j.isWindow(i)) {
                        for (m = d.delegateType || g, u = K.test(m + g) ? i : i.parentNode, c = null; u; u = u.parentNode) h.push([u, m]), c = u;
                        c && c === i.ownerDocument && h.push([c.defaultView || c.parentWindow || e, m])
                    }
                    for (l = 0; l < h.length && !n.isPropagationStopped(); l++) u = h[l][0], n.type = h[l][1], (p = (j._data(u, "events") || {})[n.type] && j._data(u, "handle")) && p.apply(u, r), (p = f && u[f]) && j.acceptData(u) && !1 === p.apply(u, r) && n.preventDefault();
                    return n.type = g, !o && !n.isDefaultPrevented() && (!d._default || !1 === d._default.apply(i.ownerDocument, r)) && ("click" !== g || !j.nodeName(i, "a")) && j.acceptData(i) && f && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !j.isWindow(i) && ((c = i[f]) && (i[f] = null), j.event.triggered = g, i[g](), j.event.triggered = t, c && (i[f] = c)), n.result
                }
            },
            dispatch: function(n) {
                n = j.event.fix(n || e.event);
                var r, i, o, a, s, l, u, c, f, d, p = (j._data(this, "events") || {})[n.type] || [],
                    h = p.delegateCount,
                    m = [].slice.call(arguments, 0),
                    g = !n.exclusive && !n.namespace,
                    y = j.event.special[n.type] || {},
                    v = [];
                if (m[0] = n, n.delegateTarget = this, !y.preDispatch || !1 !== y.preDispatch.call(this, n)) {
                    if (h && (!n.button || "click" !== n.type))
                        for ((a = j(this)).context = this.ownerDocument || this, o = n.target; o != this; o = o.parentNode || this)
                            if (!0 !== o.disabled) {
                                for (l = {}, c = [], a[0] = o, r = 0; r < h; r++) l[d = (f = p[r]).selector] === t && (l[d] = f.quick ? te(o, f.quick) : a.is(d)), l[d] && c.push(f);
                                c.length && v.push({
                                    elem: o,
                                    matches: c
                                })
                            }
                    for (p.length > h && v.push({
                            elem: this,
                            matches: p.slice(h)
                        }), r = 0; r < v.length && !n.isPropagationStopped(); r++)
                        for (u = v[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++) f = u.matches[i], (g || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data, n.handleObj = f, (s = ((j.event.special[f.origType] || {}).handle || f.handler).apply(u.elem, m)) !== t && (n.result = s, !1 === s && (n.preventDefault(), n.stopPropagation())));
                    return y.postDispatch && y.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = (r = e.target.ownerDocument || A).documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[j.expando]) return e;
                var n, r, i = e,
                    o = j.event.fixHooks[e.type] || {},
                    a = o.props ? this.props.concat(o.props) : this.props;
                for (e = j.Event(i), n = a.length; n;) e[r = a[--n]] = i[r];
                return e.target || (e.target = i.srcElement || A), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, i) : e
            },
            special: {
                ready: {
                    setup: j.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        j.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = j.extend(new j.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? j.event.trigger(i, null, t) : j.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, j.event.handle = j.event.dispatch, j.removeEvent = A.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, j.Event = function(e, t) {
            if (!(this instanceof j.Event)) return new j.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? N : C) : this.type = e, t && j.extend(this, t), this.timeStamp = e && e.timeStamp || j.now(), this[j.expando] = !0
        }, j.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = N;
                var e = this.originalEvent;
                !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = N;
                var e = this.originalEvent;
                !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = N, this.stopPropagation()
            },
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C
        }, j.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, (function(e, t) {
            j.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget,
                        i = e.handleObj;
                    i.selector;
                    return r && (r === this || j.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), j.support.submitBubbles || (j.event.special.submit = {
            setup: function() {
                if (j.nodeName(this, "form")) return !1;
                j.event.add(this, "click._submit keypress._submit", (function(e) {
                    var n = e.target,
                        r = j.nodeName(n, "input") || j.nodeName(n, "button") ? n.form : t;
                    r && !r._submit_attached && (j.event.add(r, "submit._submit", (function(e) {
                        e._submit_bubble = !0
                    })), r._submit_attached = !0)
                }))
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && j.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (j.nodeName(this, "form")) return !1;
                j.event.remove(this, "._submit")
            }
        }), j.support.changeBubbles || (j.event.special.change = {
            setup: function() {
                if (U.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (j.event.add(this, "propertychange._change", (function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                })), j.event.add(this, "click._change", (function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, j.event.simulate("change", this, e, !0))
                }))), !1;
                j.event.add(this, "beforeactivate._change", (function(e) {
                    var t = e.target;
                    U.test(t.nodeName) && !t._change_attached && (j.event.add(t, "change._change", (function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && j.event.simulate("change", this.parentNode, e, !0)
                    })), t._change_attached = !0)
                }))
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return j.event.remove(this, "._change"), U.test(this.nodeName)
            }
        }), j.support.focusinBubbles || j.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = 0,
                r = function(e) {
                    j.event.simulate(t, e.target, j.event.fix(e), !0)
                };
            j.event.special[t] = {
                setup: function() {
                    0 == n++ && A.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 == --n && A.removeEventListener(e, r, !0)
                }
            }
        })), j.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    for (s in "string" != typeof n && (r = r || n, n = t), e) this.on(s, n, r, e[s], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = C;
                else if (!i) return this;
                return 1 === o && (a = i, i = function(e) {
                    return j().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = j.guid++)), this.each((function() {
                    j.event.add(this, e, i, r, n)
                }))
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                if (e && e.preventDefault && e.handleObj) {
                    var i = e.handleObj;
                    return j(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
                }
                if ("object" == typeof e) {
                    for (var o in e) this.off(o, n, e[o]);
                    return this
                }
                return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = C), this.each((function() {
                    j.event.remove(this, e, r, n)
                }))
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return j(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return j(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
            },
            trigger: function(e, t) {
                return this.each((function() {
                    j.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                if (this[0]) return j.event.trigger(e, t, this[0], !0)
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || j.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (j._data(this, "lastToggle" + e.guid) || 0) % r;
                        return j._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), j.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
            j.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, j.attrFn && (j.attrFn[t] = !0), J.test(t) && (j.event.fixHooks[t] = j.event.keyHooks), Q.test(t) && (j.event.fixHooks[t] = j.event.mouseHooks)
        })),
        function() {
            function e(e, t, n, r, o, a) {
                for (var s = 0, l = r.length; s < l; s++) {
                    var u = r[s];
                    if (u) {
                        var c = !1;
                        for (u = u[e]; u;) {
                            if (u[i] === n) {
                                c = r[u.sizset];
                                break
                            }
                            if (1 === u.nodeType)
                                if (a || (u[i] = n, u.sizset = s), "string" != typeof t) {
                                    if (u === t) {
                                        c = !0;
                                        break
                                    }
                                } else if (d.filter(t, [u]).length > 0) {
                                c = u;
                                break
                            }
                            u = u[e]
                        }
                        r[s] = c
                    }
                }
            }

            function n(e, t, n, r, o, a) {
                for (var s = 0, l = r.length; s < l; s++) {
                    var u = r[s];
                    if (u) {
                        var c = !1;
                        for (u = u[e]; u;) {
                            if (u[i] === n) {
                                c = r[u.sizset];
                                break
                            }
                            if (1 === u.nodeType && !a && (u[i] = n, u.sizset = s), u.nodeName.toLowerCase() === t) {
                                c = u;
                                break
                            }
                            u = u[e]
                        }
                        r[s] = c
                    }
                }
            }
            var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                i = "sizcache" + (Math.random() + "").replace(".", ""),
                o = 0,
                a = Object.prototype.toString,
                s = !1,
                l = !0,
                u = /\\/g,
                c = /\r\n/g,
                f = /\W/;
            [0, 0].sort((function() {
                return l = !1, 0
            }));
            var d = function(e, t, n, i) {
                n = n || [];
                var o = t = t || A;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var s, l, u, c, f, p, g, y, v = !0,
                    b = d.isXML(t),
                    w = [],
                    N = e;
                do {
                    if (r.exec(""), (s = r.exec(N)) && (N = s[3], w.push(s[1]), s[2])) {
                        c = s[3];
                        break
                    }
                } while (s);
                if (w.length > 1 && m.exec(e))
                    if (2 === w.length && h.relative[w[0]]) l = T(w[0] + w[1], t, i);
                    else
                        for (l = h.relative[w[0]] ? [t] : d(w.shift(), t); w.length;) e = w.shift(), h.relative[e] && (e += w.shift()), l = T(e, l, i);
                else if (!i && w.length > 1 && 9 === t.nodeType && !b && h.match.ID.test(w[0]) && !h.match.ID.test(w[w.length - 1]) && (t = (f = d.find(w.shift(), t, b)).expr ? d.filter(f.expr, f.set)[0] : f.set[0]), t)
                    for (l = (f = i ? {
                            expr: w.pop(),
                            set: x(i)
                        } : d.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, b)).expr ? d.filter(f.expr, f.set) : f.set, w.length > 0 ? u = x(l) : v = !1; w.length;) g = p = w.pop(), h.relative[p] ? g = w.pop() : p = "", null == g && (g = t), h.relative[p](u, g, b);
                else u = w = [];
                if (u || (u = l), u || d.error(p || e), "[object Array]" === a.call(u))
                    if (v)
                        if (t && 1 === t.nodeType)
                            for (y = 0; null != u[y]; y++) u[y] && (!0 === u[y] || 1 === u[y].nodeType && d.contains(t, u[y])) && n.push(l[y]);
                        else
                            for (y = 0; null != u[y]; y++) u[y] && 1 === u[y].nodeType && n.push(l[y]);
                else n.push.apply(n, u);
                else x(u, n);
                return c && (d(c, o, n, i), d.uniqueSort(n)), n
            };
            d.uniqueSort = function(e) {
                if (v && (s = l, e.sort(v), s))
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, d.matches = function(e, t) {
                return d(e, null, null, t)
            }, d.matchesSelector = function(e, t) {
                return d(t, null, null, [e]).length > 0
            }, d.find = function(e, t, n) {
                var r, i, o, a, s, l;
                if (!e) return [];
                for (i = 0, o = h.order.length; i < o; i++)
                    if (s = h.order[i], (a = h.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(u, ""), null != (r = h.find[s](a, t, n))))) {
                        e = e.replace(h.match[s], "");
                        break
                    }
                return r || (r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                    set: r,
                    expr: e
                }
            }, d.filter = function(e, n, r, i) {
                for (var o, a, s, l, u, c, f, p, m, g = e, y = [], v = n, b = n && n[0] && d.isXML(n[0]); e && n.length;) {
                    for (s in h.filter)
                        if (null != (o = h.leftMatch[s].exec(e)) && o[2]) {
                            if (c = h.filter[s], f = o[1], a = !1, o.splice(1, 1), "\\" === f.substr(f.length - 1)) continue;
                            if (v === y && (y = []), h.preFilter[s])
                                if (o = h.preFilter[s](o, v, r, y, i, b)) {
                                    if (!0 === o) continue
                                } else a = l = !0;
                            if (o)
                                for (p = 0; null != (u = v[p]); p++) u && (m = i ^ (l = c(u, o, p, v)), r && null != l ? m ? a = !0 : v[p] = !1 : m && (y.push(u), a = !0));
                            if (l !== t) {
                                if (r || (v = y), e = e.replace(h.match[s], ""), !a) return [];
                                break
                            }
                        }
                    if (e === g) {
                        if (null != a) break;
                        d.error(e)
                    }
                    g = e
                }
                return v
            }, d.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            var p = d.getText = function(e) {
                    var t, n, r = e.nodeType,
                        i = "";
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            if ("string" == typeof e.innerText) return e.innerText.replace(c, "");
                            for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += p(n));
                    return i
                },
                h = d.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        class: "className",
                        for: "htmlFor"
                    },
                    attrHandle: {
                        href: function(e) {
                            return e.getAttribute("href")
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(e, t) {
                            var n = "string" == typeof t,
                                r = n && !f.test(t),
                                i = n && !r;
                            r && (t = t.toLowerCase());
                            for (var o, a = 0, s = e.length; a < s; a++)
                                if (o = e[a]) {
                                    for (;
                                        (o = o.previousSibling) && 1 !== o.nodeType;);
                                    e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                                }
                            i && d.filter(t, e, !0)
                        },
                        ">": function(e, t) {
                            var n, r = "string" == typeof t,
                                i = 0,
                                o = e.length;
                            if (r && !f.test(t)) {
                                for (t = t.toLowerCase(); i < o; i++)
                                    if (n = e[i]) {
                                        var a = n.parentNode;
                                        e[i] = a.nodeName.toLowerCase() === t && a
                                    }
                            } else {
                                for (; i < o; i++)(n = e[i]) && (e[i] = r ? n.parentNode : n.parentNode === t);
                                r && d.filter(t, e, !0)
                            }
                        },
                        "": function(t, r, i) {
                            var a, s = o++,
                                l = e;
                            "string" == typeof r && !f.test(r) && (a = r = r.toLowerCase(), l = n), l("parentNode", r, s, t, a, i)
                        },
                        "~": function(t, r, i) {
                            var a, s = o++,
                                l = e;
                            "string" == typeof r && !f.test(r) && (a = r = r.toLowerCase(), l = n), l("previousSibling", r, s, t, a, i)
                        }
                    },
                    find: {
                        ID: function(e, t, n) {
                            if (void 0 !== t.getElementById && !n) {
                                var r = t.getElementById(e[1]);
                                return r && r.parentNode ? [r] : []
                            }
                        },
                        NAME: function(e, t) {
                            if (void 0 !== t.getElementsByName) {
                                for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                                return 0 === n.length ? null : n
                            }
                        },
                        TAG: function(e, t) {
                            if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(e, t, n, r, i, o) {
                            if (e = " " + e[1].replace(u, "") + " ", o) return e;
                            for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                            return !1
                        },
                        ID: function(e) {
                            return e[1].replace(u, "")
                        },
                        TAG: function(e, t) {
                            return e[1].replace(u, "").toLowerCase()
                        },
                        CHILD: function(e) {
                            if ("nth" === e[1]) {
                                e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                            } else e[2] && d.error(e[0]);
                            return e[0] = o++, e
                        },
                        ATTR: function(e, t, n, r, i, o) {
                            var a = e[1] = e[1].replace(u, "");
                            return !o && h.attrMap[a] && (e[1] = h.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(u, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                        },
                        PSEUDO: function(e, t, n, i, o) {
                            if ("not" === e[1]) {
                                if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                    var a = d.filter(e[3], t, n, !0 ^ o);
                                    return n || i.push.apply(i, a), !1
                                }
                                e[3] = d(e[3], null, null, t)
                            } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0])) return !0;
                            return e
                        },
                        POS: function(e) {
                            return e.unshift(!0), e
                        }
                    },
                    filters: {
                        enabled: function(e) {
                            return !1 === e.disabled && "hidden" !== e.type
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            return !0 === e.checked
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        parent: function(e) {
                            return !!e.firstChild
                        },
                        empty: function(e) {
                            return !e.firstChild
                        },
                        has: function(e, t, n) {
                            return !!d(n[3], e).length
                        },
                        header: function(e) {
                            return /h\d/i.test(e.nodeName)
                        },
                        text: function(e) {
                            var t = e.getAttribute("type"),
                                n = e.type;
                            return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                        },
                        radio: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                        },
                        checkbox: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                        },
                        file: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "file" === e.type
                        },
                        password: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "password" === e.type
                        },
                        submit: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "submit" === e.type
                        },
                        image: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "image" === e.type
                        },
                        reset: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "reset" === e.type
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function(e) {
                            return /input|select|textarea|button/i.test(e.nodeName)
                        },
                        focus: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t) {
                            return 0 === t
                        },
                        last: function(e, t, n, r) {
                            return t === r.length - 1
                        },
                        even: function(e, t) {
                            return t % 2 == 0
                        },
                        odd: function(e, t) {
                            return t % 2 == 1
                        },
                        lt: function(e, t, n) {
                            return t < n[3] - 0
                        },
                        gt: function(e, t, n) {
                            return t > n[3] - 0
                        },
                        nth: function(e, t, n) {
                            return n[3] - 0 === t
                        },
                        eq: function(e, t, n) {
                            return n[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function(e, t, n, r) {
                            var i = t[1],
                                o = h.filters[i];
                            if (o) return o(e, n, t, r);
                            if ("contains" === i) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                            if ("not" === i) {
                                for (var a = t[3], s = 0, l = a.length; s < l; s++)
                                    if (a[s] === e) return !1;
                                return !0
                            }
                            d.error(i)
                        },
                        CHILD: function(e, t) {
                            var n, r, o, a, s, l, u = t[1],
                                c = e;
                            switch (u) {
                                case "only":
                                case "first":
                                    for (; c = c.previousSibling;)
                                        if (1 === c.nodeType) return !1;
                                    if ("first" === u) return !0;
                                    c = e;
                                case "last":
                                    for (; c = c.nextSibling;)
                                        if (1 === c.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (n = t[2], r = t[3], 1 === n && 0 === r) return !0;
                                    if (o = t[0], (a = e.parentNode) && (a[i] !== o || !e.nodeIndex)) {
                                        for (s = 0, c = a.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++s);
                                        a[i] = o
                                    }
                                    return l = e.nodeIndex - r, 0 === n ? 0 === l : l % n == 0 && l / n >= 0
                            }
                        },
                        ID: function(e, t) {
                            return 1 === e.nodeType && e.getAttribute("id") === t
                        },
                        TAG: function(e, t) {
                            return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                        },
                        CLASS: function(e, t) {
                            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                        },
                        ATTR: function(e, t) {
                            var n = t[1],
                                r = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                i = r + "",
                                o = t[2],
                                a = t[4];
                            return null == r ? "!=" === o : !o && d.attr ? null != r : "=" === o ? i === a : "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o && (i === a || i.substr(0, a.length + 1) === a + "-") : i && !1 !== r
                        },
                        POS: function(e, t, n, r) {
                            var i = t[2],
                                o = h.setFilters[i];
                            if (o) return o(e, n, t, r)
                        }
                    }
                },
                m = h.match.POS,
                g = function(e, t) {
                    return "\\" + (t - 0 + 1)
                };
            for (var y in h.match) h.match[y] = new RegExp(h.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[y].source.replace(/\\(\d+)/g, g));
            h.match.globalPOS = m;
            var v, b, x = function(e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call(A.documentElement.childNodes, 0)[0].nodeType
            } catch (e) {
                x = function(e, t) {
                    var n = 0,
                        r = t || [];
                    if ("[object Array]" === a.call(e)) Array.prototype.push.apply(r, e);
                    else if ("number" == typeof e.length)
                        for (var i = e.length; n < i; n++) r.push(e[n]);
                    else
                        for (; e[n]; n++) r.push(e[n]);
                    return r
                }
            }
            A.documentElement.compareDocumentPosition ? v = function(e, t) {
                    return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : (v = function(e, t) {
                    if (e === t) return s = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        o = [],
                        a = e.parentNode,
                        l = t.parentNode,
                        u = a;
                    if (a === l) return b(e, t);
                    if (!a) return -1;
                    if (!l) return 1;
                    for (; u;) i.unshift(u), u = u.parentNode;
                    for (u = l; u;) o.unshift(u), u = u.parentNode;
                    n = i.length, r = o.length;
                    for (var c = 0; c < n && c < r; c++)
                        if (i[c] !== o[c]) return b(i[c], o[c]);
                    return c === n ? b(e, o[c], -1) : b(i[c], t, 1)
                }, b = function(e, t, n) {
                    if (e === t) return n;
                    for (var r = e.nextSibling; r;) {
                        if (r === t) return -1;
                        r = r.nextSibling
                    }
                    return 1
                }),
                function() {
                    var e = A.createElement("div"),
                        n = "script" + (new Date).getTime(),
                        r = A.documentElement;
                    e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), A.getElementById(n) && (h.find.ID = function(e, n, r) {
                        if (void 0 !== n.getElementById && !r) {
                            var i = n.getElementById(e[1]);
                            return i ? i.id === e[1] || void 0 !== i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                        }
                    }, h.filter.ID = function(e, t) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return 1 === e.nodeType && n && n.nodeValue === t
                    }), r.removeChild(e), r = e = null
                }(),
                function() {
                    var e = A.createElement("div");
                    e.appendChild(A.createComment("")), e.getElementsByTagName("*").length > 0 && (h.find.TAG = function(e, t) {
                        var n = t.getElementsByTagName(e[1]);
                        if ("*" === e[1]) {
                            for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                            n = r
                        }
                        return n
                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && void 0 !== e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function(e) {
                        return e.getAttribute("href", 2)
                    }), e = null
                }(), A.querySelectorAll && function() {
                    var e = d,
                        t = A.createElement("div");
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                        for (var n in d = function(t, n, r, i) {
                                if (n = n || A, !i && !d.isXML(n)) {
                                    var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                    if (o && (1 === n.nodeType || 9 === n.nodeType)) {
                                        if (o[1]) return x(n.getElementsByTagName(t), r);
                                        if (o[2] && h.find.CLASS && n.getElementsByClassName) return x(n.getElementsByClassName(o[2]), r)
                                    }
                                    if (9 === n.nodeType) {
                                        if ("body" === t && n.body) return x([n.body], r);
                                        if (o && o[3]) {
                                            var a = n.getElementById(o[3]);
                                            if (!a || !a.parentNode) return x([], r);
                                            if (a.id === o[3]) return x([a], r)
                                        }
                                        try {
                                            return x(n.querySelectorAll(t), r)
                                        } catch (e) {}
                                    } else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                        var s = n,
                                            l = n.getAttribute("id"),
                                            u = l || "__sizzle__",
                                            c = n.parentNode,
                                            f = /^\s*[+~]/.test(t);
                                        l ? u = u.replace(/'/g, "\\$&") : n.setAttribute("id", u), f && c && (n = n.parentNode);
                                        try {
                                            if (!f || c) return x(n.querySelectorAll("[id='" + u + "'] " + t), r)
                                        } catch (e) {} finally {
                                            l || s.removeAttribute("id")
                                        }
                                    }
                                }
                                return e(t, n, r, i)
                            }, e) d[n] = e[n];
                        t = null
                    }
                }(),
                function() {
                    var e = A.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                    if (t) {
                        var n = !t.call(A.createElement("div"), "div"),
                            r = !1;
                        try {
                            t.call(A.documentElement, "[test!='']:sizzle")
                        } catch (e) {
                            r = !0
                        }
                        d.matchesSelector = function(e, i) {
                            if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                                if (r || !h.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                    var o = t.call(e, i);
                                    if (o || !n || e.document && 11 !== e.document.nodeType) return o
                                }
                            } catch (e) {}
                            return d(i, null, null, [e]).length > 0
                        }
                    }
                }(),
                function() {
                    var e = A.createElement("div");
                    if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                        if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length) return;
                        h.order.splice(1, 0, "CLASS"), h.find.CLASS = function(e, t, n) {
                            if (void 0 !== t.getElementsByClassName && !n) return t.getElementsByClassName(e[1])
                        }, e = null
                    }
                }(), A.documentElement.contains ? d.contains = function(e, t) {
                    return e !== t && (!e.contains || e.contains(t))
                } : A.documentElement.compareDocumentPosition ? d.contains = function(e, t) {
                    return !!(16 & e.compareDocumentPosition(t))
                } : d.contains = function() {
                    return !1
                }, d.isXML = function(e) {
                    var t = (e ? e.ownerDocument || e : 0).documentElement;
                    return !!t && "HTML" !== t.nodeName
                };
            var T = function(e, t, n) {
                for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = h.match.PSEUDO.exec(e);) o += r[0], e = e.replace(h.match.PSEUDO, "");
                e = h.relative[e] ? e + "*" : e;
                for (var s = 0, l = a.length; s < l; s++) d(e, a[s], i, n);
                return d.filter(o, i)
            };
            d.attr = j.attr, d.selectors.attrMap = {}, j.find = d, j.expr = d.selectors, j.expr[":"] = j.expr.filters, j.unique = d.uniqueSort, j.text = d.getText, j.isXMLDoc = d.isXML, j.contains = d.contains
        }();
    var re = /Until$/,
        ie = /^(?:parents|prevUntil|prevAll)/,
        oe = /,/,
        ae = /^.[^:#\[\.,]*$/,
        se = Array.prototype.slice,
        le = j.expr.match.globalPOS,
        ue = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    j.fn.extend({
        find: function(e) {
            var t, n, r = this;
            if ("string" != typeof e) return j(e).filter((function() {
                for (t = 0, n = r.length; t < n; t++)
                    if (j.contains(r[t], this)) return !0
            }));
            var i, o, a, s = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++)
                if (i = s.length, j.find(e, this[t], s), t > 0)
                    for (o = i; o < s.length; o++)
                        for (a = 0; a < i; a++)
                            if (s[a] === s[o]) {
                                s.splice(o--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t = j(e);
            return this.filter((function() {
                for (var e = 0, n = t.length; e < n; e++)
                    if (j.contains(this, t[e])) return !0
            }))
        },
        not: function(e) {
            return this.pushStack(T(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(T(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? le.test(e) ? j(e, this.context).index(this[0]) >= 0 : j.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r, i = [],
                o = this[0];
            if (j.isArray(e)) {
                for (var a = 1; o && o.ownerDocument && o !== t;) {
                    for (n = 0; n < e.length; n++) j(o).is(e[n]) && i.push({
                        selector: e[n],
                        elem: o,
                        level: a
                    });
                    o = o.parentNode, a++
                }
                return i
            }
            var s = le.test(e) || "string" != typeof e ? j(e, t || this.context) : 0;
            for (n = 0, r = this.length; n < r; n++)
                for (o = this[n]; o;) {
                    if (s ? s.index(o) > -1 : j.find.matchesSelector(o, e)) {
                        i.push(o);
                        break
                    }
                    if (!(o = o.parentNode) || !o.ownerDocument || o === t || 11 === o.nodeType) break
                }
            return i = i.length > 1 ? j.unique(i) : i, this.pushStack(i, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? j.inArray(this[0], j(e)) : j.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? j(e, t) : j.makeArray(e && e.nodeType ? [e] : e),
                r = j.merge(this.get(), n);
            return this.pushStack(w(n[0]) || w(r[0]) ? r : j.unique(r))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), j.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return j.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return j.dir(e, "parentNode", n)
        },
        next: function(e) {
            return j.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return j.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return j.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return j.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return j.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return j.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return j.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return j.sibling(e.firstChild)
        },
        contents: function(e) {
            return j.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : j.makeArray(e.childNodes)
        }
    }, (function(e, t) {
        j.fn[e] = function(n, r) {
            var i = j.map(this, t, n);
            return re.test(e) || (r = n), r && "string" == typeof r && (i = j.filter(r, i)), i = this.length > 1 && !ue[e] ? j.unique(i) : i, (this.length > 1 || oe.test(r)) && ie.test(e) && (i = i.reverse()), this.pushStack(i, e, se.call(arguments).join(","))
        }
    })), j.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? j.find.matchesSelector(t[0], e) ? [t[0]] : [] : j.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !j(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        nth: function(e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var ce = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fe = / jQuery\d+="(?:\d+|null)"/g,
        de = /^\s+/,
        pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        he = /<([\w:]+)/,
        me = /<tbody/i,
        ge = /<|&#?\w+;/,
        ye = /<(?:script|style)/i,
        ve = /<(?:script|object|embed|option|style)/i,
        be = new RegExp("<(?:" + ce + ")[\\s/>]", "i"),
        xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Te = /\/(java|ecma)script/i,
        we = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Ne = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ce = x(A);
    Ne.optgroup = Ne.option, Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td, j.support.htmlSerialize || (Ne._default = [1, "div<div>", "</div>"]), j.fn.extend({
        text: function(e) {
            return j.access(this, (function(e) {
                return e === t ? j.text(this) : this.empty().append((this[0] && this[0].ownerDocument || A).createTextNode(e))
            }), null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (j.isFunction(e)) return this.each((function(t) {
                j(this).wrapAll(e.call(this, t))
            }));
            if (this[0]) {
                var t = j(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                })).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return j.isFunction(e) ? this.each((function(t) {
                j(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = j(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = j.isFunction(e);
            return this.each((function(n) {
                j(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function() {
            return this.parent().each((function() {
                j.nodeName(this, "body") || j(this).replaceWith(this.childNodes)
            })).end()
        },
        append: function() {
            return this.domManip(arguments, !0, (function(e) {
                1 === this.nodeType && this.appendChild(e)
            }))
        },
        prepend: function() {
            return this.domManip(arguments, !0, (function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            }))
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, (function(e) {
                this.parentNode.insertBefore(e, this)
            }));
            if (arguments.length) {
                var e = j.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, (function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }));
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, j.clean(arguments)), e
            }
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) e && !j.filter(e, [n]).length || (!t && 1 === n.nodeType && (j.cleanData(n.getElementsByTagName("*")), j.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && j.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return j.clone(this, e, t)
            }))
        },
        html: function(e) {
            return j.access(this, (function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(fe, "") : null;
                if ("string" == typeof e && !ye.test(e) && (j.support.leadingWhitespace || !de.test(e)) && !Ne[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(pe, "<$1></$2>");
                    try {
                        for (; r < i; r++) 1 === (n = this[r] || {}).nodeType && (j.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? j.isFunction(e) ? this.each((function(t) {
                var n = j(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            })) : ("string" != typeof e && (e = j(e).detach()), this.each((function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                j(this).remove(), t ? j(t).before(e) : j(n).append(e)
            }))) : this.length ? this.pushStack(j(j.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            var i, o, a, s, l = e[0],
                u = [];
            if (!j.support.checkClone && 3 === arguments.length && "string" == typeof l && xe.test(l)) return this.each((function() {
                j(this).domManip(e, n, r, !0)
            }));
            if (j.isFunction(l)) return this.each((function(i) {
                var o = j(this);
                e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
            }));
            if (this[0]) {
                if (s = l && l.parentNode, o = 1 === (a = (i = j.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {
                        fragment: s
                    } : j.buildFragment(e, this, u)).fragment).childNodes.length ? a = a.firstChild : a.firstChild) {
                    n = n && j.nodeName(o, "tr");
                    for (var c = 0, f = this.length, d = f - 1; c < f; c++) r.call(n ? b(this[c]) : this[c], i.cacheable || f > 1 && c < d ? j.clone(a, !0, !0) : a)
                }
                u.length && j.each(u, (function(e, t) {
                    t.src ? j.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : j.globalEval((t.text || t.textContent || t.innerHTML || "").replace(we, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                }))
            }
            return this
        }
    }), j.buildFragment = function(e, t, n) {
        var r, i, o, a, s = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = A), 1 === e.length && "string" == typeof s && s.length < 512 && a === A && "<" === s.charAt(0) && !ve.test(s) && (j.support.checkClone || !xe.test(s)) && (j.support.html5Clone || !be.test(s)) && (i = !0, (o = j.fragments[s]) && 1 !== o && (r = o)), r || (r = a.createDocumentFragment(), j.clean(e, a, r, n)), i && (j.fragments[s] = o ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, j.fragments = {}, j.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        j.fn[e] = function(n) {
            var r = [],
                i = j(n),
                o = 1 === this.length && this[0].parentNode;
            if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length) return i[t](this[0]), this;
            for (var a = 0, s = i.length; a < s; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                j(i[a])[t](l), r = r.concat(l)
            }
            return this.pushStack(r, e, i.selector)
        }
    })), j.extend({
        clone: function(e, t, n) {
            var r, i, o, a = j.support.html5Clone || j.isXMLDoc(e) || !be.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : p(e);
            if (!(j.support.noCloneEvent && j.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || j.isXMLDoc(e)))
                for (y(e, a), r = g(e), i = g(a), o = 0; r[o]; ++o) i[o] && y(r[o], i[o]);
            if (t && (v(e, a), n))
                for (r = g(e), i = g(a), o = 0; r[o]; ++o) v(r[o], i[o]);
            return r = i = null, a
        },
        clean: function(e, t, n, r) {
            var i, o, a, s = [];
            void 0 === (t = t || A).createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || A);
            for (var l, u = 0; null != (l = e[u]); u++)
                if ("number" == typeof l && (l += ""), l) {
                    if ("string" == typeof l)
                        if (ge.test(l)) {
                            l = l.replace(pe, "<$1></$2>");
                            var c, f = (he.exec(l) || ["", ""])[1].toLowerCase(),
                                d = Ne[f] || Ne._default,
                                p = d[0],
                                m = t.createElement("div"),
                                g = Ce.childNodes;
                            for (t === A ? Ce.appendChild(m) : x(t).appendChild(m), m.innerHTML = d[1] + l + d[2]; p--;) m = m.lastChild;
                            if (!j.support.tbody) {
                                var y = me.test(l),
                                    v = "table" !== f || y ? "<table>" !== d[1] || y ? [] : m.childNodes : m.firstChild && m.firstChild.childNodes;
                                for (a = v.length - 1; a >= 0; --a) j.nodeName(v[a], "tbody") && !v[a].childNodes.length && v[a].parentNode.removeChild(v[a])
                            }!j.support.leadingWhitespace && de.test(l) && m.insertBefore(t.createTextNode(de.exec(l)[0]), m.firstChild), l = m.childNodes, m && (m.parentNode.removeChild(m), g.length > 0 && ((c = g[g.length - 1]) && c.parentNode && c.parentNode.removeChild(c)))
                        } else l = t.createTextNode(l);
                    var b;
                    if (!j.support.appendChecked)
                        if (l[0] && "number" == typeof(b = l.length))
                            for (a = 0; a < b; a++) h(l[a]);
                        else h(l);
                    l.nodeType ? s.push(l) : s = j.merge(s, l)
                }
            if (n)
                for (i = function(e) {
                        return !e.type || Te.test(e.type)
                    }, u = 0; s[u]; u++)
                    if (o = s[u], r && j.nodeName(o, "script") && (!o.type || Te.test(o.type))) r.push(o.parentNode ? o.parentNode.removeChild(o) : o);
                    else {
                        if (1 === o.nodeType) {
                            var T = j.grep(o.getElementsByTagName("script"), i);
                            s.splice.apply(s, [u + 1, 0].concat(T))
                        }
                        n.appendChild(o)
                    }
            return s
        },
        cleanData: function(e) {
            for (var t, n, r, i = j.cache, o = j.event.special, a = j.support.deleteExpando, s = 0; null != (r = e[s]); s++)
                if ((!r.nodeName || !j.noData[r.nodeName.toLowerCase()]) && (n = r[j.expando])) {
                    if ((t = i[n]) && t.events) {
                        for (var l in t.events) o[l] ? j.event.remove(r, l) : j.removeEvent(r, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    a ? delete r[j.expando] : r.removeAttribute && r.removeAttribute(j.expando), delete i[n]
                }
        }
    });
    var Ee, ke, Se, Ae = /alpha\([^)]*\)/i,
        Le = /opacity=([^)]*)/,
        De = /([A-Z]|^ms)/g,
        je = /^[\-+]?(?:\d*\.)?\d+$/i,
        Fe = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        Me = /^([\-+])=([\-+.\de]+)/,
        _e = /^margin/,
        He = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oe = ["Top", "Right", "Bottom", "Left"];
    j.fn.css = function(e, n) {
        return j.access(this, (function(e, n, r) {
            return r !== t ? j.style(e, n, r) : j.css(e, n)
        }), e, n, arguments.length > 1)
    }, j.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ee(e, "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: j.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s = j.camelCase(n),
                    l = e.style,
                    u = j.cssHooks[s];
                if (n = j.cssProps[s] || s, r === t) return u && "get" in u && (o = u.get(e, !1, i)) !== t ? o : l[n];
                if ("string" === (a = typeof r) && (o = Me.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(j.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r)) return;
                if ("number" === a && !j.cssNumber[s] && (r += "px"), !u || !("set" in u) || (r = u.set(e, r)) !== t) try {
                    l[n] = r
                } catch (e) {}
            }
        },
        css: function(e, n, r) {
            var i, o;
            return n = j.camelCase(n), o = j.cssHooks[n], "cssFloat" === (n = j.cssProps[n] || n) && (n = "float"), o && "get" in o && (i = o.get(e, !0, r)) !== t ? i : Ee ? Ee(e, n) : void 0
        },
        swap: function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        }
    }), j.curCSS = j.css, A.defaultView && A.defaultView.getComputedStyle && (ke = function(e, t) {
        var n, r, i, o, a = e.style;
        return t = t.replace(De, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && ("" === (n = i.getPropertyValue(t)) && !j.contains(e.ownerDocument.documentElement, e) && (n = j.style(e, t))), !j.support.pixelMargin && i && _e.test(t) && Fe.test(n) && (o = a.width, a.width = n, n = i.width, a.width = o), n
    }), A.documentElement.currentStyle && (Se = function(e, t) {
        var n, r, i, o = e.currentStyle && e.currentStyle[t],
            a = e.style;
        return null == o && a && (i = a[t]) && (o = i), Fe.test(o) && (n = a.left, (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), "" === o ? "auto" : o
    }), Ee = ke || Se, j.each(["height", "width"], (function(e, t) {
        j.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return 0 !== e.offsetWidth ? d(e, t, r) : j.swap(e, He, (function() {
                    return d(e, t, r)
                }))
            },
            set: function(e, t) {
                return je.test(t) ? t + "px" : t
            }
        }
    })), j.support.opacity || (j.cssHooks.opacity = {
        get: function(e, t) {
            return Le.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = j.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === j.trim(o.replace(Ae, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Ae.test(o) ? o.replace(Ae, i) : o + " " + i)
        }
    }), j((function() {
        j.support.reliableMarginRight || (j.cssHooks.marginRight = {
            get: function(e, t) {
                return j.swap(e, {
                    display: "inline-block"
                }, (function() {
                    return t ? Ee(e, "margin-right") : e.style.marginRight
                }))
            }
        })
    })), j.expr && j.expr.filters && (j.expr.filters.hidden = function(e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return 0 === t && 0 === n || !j.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || j.css(e, "display"))
    }, j.expr.filters.visible = function(e) {
        return !j.expr.filters.hidden(e)
    }), j.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        j.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = "string" == typeof n ? n.split(" ") : [n],
                    o = {};
                for (r = 0; r < 4; r++) o[e + Oe[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }
    }));
    var Be, Pe, qe = /%20/g,
        We = /\[\]$/,
        Ie = /\r?\n/g,
        $e = /#.*$/,
        Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xe = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ze = /^(?:GET|HEAD)$/,
        Ve = /^\/\//,
        Ue = /\?/,
        Ge = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ye = /^(?:select|textarea)/i,
        Je = /\s+/,
        Qe = /([?&])_=[^&]*/,
        Ke = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Ze = j.fn.load,
        et = {},
        tt = {};
    try {
        Be = D.href
    } catch (e) {
        (Be = A.createElement("a")).href = "", Be = Be.href
    }
    Pe = Ke.exec(Be.toLowerCase()) || [], j.fn.extend({
        load: function(e, n, r) {
            if ("string" != typeof e && Ze) return Ze.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var o = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var a = "GET";
            n && (j.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = j.param(n, j.ajaxSettings.traditional), a = "POST"));
            var s = this;
            return j.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done((function(e) {
                        n = e
                    })), s.html(o ? j("<div>").append(n.replace(Ge, "")).find(o) : n)), r && s.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function() {
            return j.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                return this.elements ? j.makeArray(this.elements) : this
            })).filter((function() {
                return this.name && !this.disabled && (this.checked || Ye.test(this.nodeName) || Xe.test(this.type))
            })).map((function(e, t) {
                var n = j(this).val();
                return null == n ? null : j.isArray(n) ? j.map(n, (function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Ie, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Ie, "\r\n")
                }
            })).get()
        }
    }), j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), (function(e, t) {
        j.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), j.each(["get", "post"], (function(e, n) {
        j[n] = function(e, r, i, o) {
            return j.isFunction(r) && (o = o || i, i = r, r = t), j.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    })), j.extend({
        getScript: function(e, n) {
            return j.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return j.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? u(e, j.ajaxSettings) : (t = e, e = j.ajaxSettings), u(e, t), e
        },
        ajaxSettings: {
            url: Be,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Pe[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": j.parseJSON,
                "text xml": j.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: f(et),
        ajaxTransport: f(tt),
        ajax: function(e, n) {
            function r(e, n, r, a) {
                if (2 !== T) {
                    T = 2, l && clearTimeout(l), s = t, o = a || "", w.readyState = e > 0 ? 4 : 0;
                    var u, c, d, b, x, N = n,
                        C = r ? function(e, n, r) {
                            var i, o, a, s, l = e.contents,
                                u = e.dataTypes,
                                c = e.responseFields;
                            for (o in c) o in r && (n[c[o]] = r[o]);
                            for (;
                                "*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
                            if (i)
                                for (o in l)
                                    if (l[o] && l[o].test(i)) {
                                        u.unshift(o);
                                        break
                                    }
                            if (u[0] in r) a = u[0];
                            else {
                                for (o in r) {
                                    if (!u[0] || e.converters[o + " " + u[0]]) {
                                        a = o;
                                        break
                                    }
                                    s || (s = o)
                                }
                                a = a || s
                            }
                            if (a) return a !== u[0] && u.unshift(a), r[a]
                        }(p, w, r) : t;
                    if (e >= 200 && e < 300 || 304 === e)
                        if (p.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (j.lastModified[i] = b), (x = w.getResponseHeader("Etag")) && (j.etag[i] = x)), 304 === e) N = "notmodified", u = !0;
                        else try {
                            c = function(e, n) {
                                e.dataFilter && (n = e.dataFilter(n, e.dataType));
                                var r, i, o, a, s, l, u, c, f = e.dataTypes,
                                    d = {},
                                    p = f.length,
                                    h = f[0];
                                for (r = 1; r < p; r++) {
                                    if (1 === r)
                                        for (i in e.converters) "string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
                                    if (a = h, "*" === (h = f[r])) h = a;
                                    else if ("*" !== a && a !== h) {
                                        if (!(l = d[s = a + " " + h] || d["* " + h]))
                                            for (u in c = t, d)
                                                if (((o = u.split(" "))[0] === a || "*" === o[0]) && (c = d[o[1] + " " + h])) {
                                                    !0 === (u = d[u]) ? l = c : !0 === c && (l = u);
                                                    break
                                                }!l && !c && j.error("No conversion from " + s.replace(" ", " to ")), !0 !== l && (n = l ? l(n) : c(u(n)))
                                    }
                                }
                                return n
                            }(p, C), N = "success", u = !0
                        } catch (e) {
                            N = "parsererror", d = e
                        } else d = N, N && !e || (N = "error", e < 0 && (e = 0));
                    w.status = e, w.statusText = "" + (n || N), u ? g.resolveWith(h, [c, N, w]) : g.rejectWith(h, [w, N, d]), w.statusCode(v), v = t, f && m.trigger("ajax" + (u ? "Success" : "Error"), [w, p, u ? c : d]), y.fireWith(h, [w, N]), f && (m.trigger("ajaxComplete", [w, p]), --j.active || j.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, u, f, d, p = j.ajaxSetup({}, n),
                h = p.context || p,
                m = h !== p && (h.nodeType || h instanceof j) ? j(h) : j.event,
                g = j.Deferred(),
                y = j.Callbacks("once memory"),
                v = p.statusCode || {},
                b = {},
                x = {},
                T = 0,
                w = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!T) {
                            var n = e.toLowerCase();
                            e = x[n] = x[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === T ? o : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === T) {
                            if (!a)
                                for (a = {}; n = Re.exec(o);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return T || (p.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || "abort", s && s.abort(e), r(0, e), this
                    }
                };
            if (g.promise(w), w.success = w.done, w.error = w.fail, w.complete = y.add, w.statusCode = function(e) {
                    var t;
                    if (e)
                        if (T < 2)
                            for (t in e) v[t] = [v[t], e[t]];
                        else t = e[w.status], w.then(t, t);
                    return this
                }, p.url = ((e || p.url) + "").replace($e, "").replace(Ve, Pe[1] + "//"), p.dataTypes = j.trim(p.dataType || "*").toLowerCase().split(Je), null == p.crossDomain && (u = Ke.exec(p.url.toLowerCase()), p.crossDomain = !(!u || u[1] == Pe[1] && u[2] == Pe[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Pe[3] || ("http:" === Pe[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = j.param(p.data, p.traditional)), c(et, p, n, w), 2 === T) return !1;
            if (f = p.global, p.type = p.type.toUpperCase(), p.hasContent = !ze.test(p.type), f && 0 == j.active++ && j.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Ue.test(p.url) ? "&" : "?") + p.data, delete p.data), i = p.url, !1 === p.cache)) {
                var N = j.now(),
                    C = p.url.replace(Qe, "$1_=" + N);
                p.url = C + (C === p.url ? (Ue.test(p.url) ? "&" : "?") + "_=" + N : "")
            }
            for (d in (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), p.ifModified && (i = i || p.url, j.lastModified[i] && w.setRequestHeader("If-Modified-Since", j.lastModified[i]), j.etag[i] && w.setRequestHeader("If-None-Match", j.etag[i])), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", */*; q=0.01" : "") : p.accepts["*"]), p.headers) w.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, w, p) || 2 === T)) return w.abort(), !1;
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[d](p[d]);
            if (s = c(tt, p, n, w)) {
                w.readyState = 1, f && m.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (l = setTimeout((function() {
                    w.abort("timeout")
                }), p.timeout));
                try {
                    T = 1, s.send(b, r)
                } catch (e) {
                    if (!(T < 2)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return w
        },
        param: function(e, n) {
            var r = [],
                i = function(e, t) {
                    t = j.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = j.ajaxSettings.traditional), j.isArray(e) || e.jquery && !j.isPlainObject(e)) j.each(e, (function() {
                i(this.name, this.value)
            }));
            else
                for (var o in e) l(o, e[o], n, i);
            return r.join("&").replace(qe, "+")
        }
    }), j.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var nt = j.now(),
        rt = /(\=)\?(&|$)|\?\?/i;
    j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return j.expando + "_" + nt++
        }
    }), j.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || !1 !== t.jsonp && (rt.test(t.url) || i && rt.test(t.data))) {
            var o, a = t.jsonpCallback = j.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s = e[a],
                l = t.url,
                u = t.data,
                c = "$1" + a + "$2";
            return !1 !== t.jsonp && (l = l.replace(rt, c), t.url === l && (i && (u = u.replace(rt, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = u, e[a] = function(e) {
                o = [e]
            }, r.always((function() {
                e[a] = s, o && j.isFunction(s) && e[a](o[0])
            })), t.converters["script json"] = function() {
                return o || j.error(a + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    })), j.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return j.globalEval(e), e
            }
        }
    }), j.ajaxPrefilter("script", (function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    })), j.ajaxTransport("script", (function(e) {
        if (e.crossDomain) {
            var n, r = A.head || A.getElementsByTagName("head")[0] || A.documentElement;
            return {
                send: function(i, o) {
                    (n = A.createElement("script")).async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    }));
    var it, ot = !!e.ActiveXObject && function() {
            for (var e in it) it[e](0, 1)
        },
        at = 0;
    j.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && s() || function() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        } : s,
        function(e) {
            j.extend(j.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(j.ajaxSettings.xhr()), j.support.ajax && j.ajaxTransport((function(n) {
            var r;
            if (!n.crossDomain || j.support.cors) return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (e) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, f, d;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = j.noop, ot && delete it[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    s = l.status, c = l.getAllResponseHeaders(), f = {}, (d = l.responseXML) && d.documentElement && (f.xml = d);
                                    try {
                                        f.text = l.responseText
                                    } catch (e) {}
                                    try {
                                        u = l.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                        } catch (e) {
                            i || o(-1, e)
                        }
                        f && o(s, u, f, c)
                    }, n.async && 4 !== l.readyState ? (a = ++at, ot && (it || (it = {}, j(e).unload(ot)), it[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }));
    var st, lt, ut, ct, ft = {},
        dt = /^(?:toggle|show|hide)$/,
        pt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        ht = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    j.fn.extend({
        show: function(e, t, n) {
            var o, a;
            if (e || 0 === e) return this.animate(i("show", 3), e, t, n);
            for (var s = 0, l = this.length; s < l; s++)(o = this[s]).style && (a = o.style.display, !j._data(o, "olddisplay") && "none" === a && (a = o.style.display = ""), ("" === a && "none" === j.css(o, "display") || !j.contains(o.ownerDocument.documentElement, o)) && j._data(o, "olddisplay", r(o.nodeName)));
            for (s = 0; s < l; s++)(o = this[s]).style && ("" !== (a = o.style.display) && "none" !== a || (o.style.display = j._data(o, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(i("hide", 3), e, t, n);
            for (var r, o, a = 0, s = this.length; a < s; a++)(r = this[a]).style && ("none" !== (o = j.css(r, "display")) && !j._data(r, "olddisplay") && j._data(r, "olddisplay", o));
            for (a = 0; a < s; a++) this[a].style && (this[a].style.display = "none");
            return this
        },
        _toggle: j.fn.toggle,
        toggle: function(e, t, n) {
            var r = "boolean" == typeof e;
            return j.isFunction(e) && j.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each((function() {
                var t = r ? e : j(this).is(":hidden");
                j(this)[t ? "show" : "hide"]()
            })) : this.animate(i("toggle", 3), e, t, n), this
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, i) {
            function o() {
                !1 === a.queue && j._mark(this);
                var t, n, i, o, s, l, u, c, f, d, p, h = j.extend({}, a),
                    m = 1 === this.nodeType,
                    g = m && j(this).is(":hidden");
                for (i in h.animatedProperties = {}, e)
                    if (i !== (t = j.camelCase(i)) && (e[t] = e[i], delete e[i]), (s = j.cssHooks[t]) && "expand" in s)
                        for (i in l = s.expand(e[t]), delete e[t], l) i in e || (e[i] = l[i]);
                for (t in e) {
                    if (n = e[t], j.isArray(n) ? (h.animatedProperties[t] = n[1], n = e[t] = n[0]) : h.animatedProperties[t] = h.specialEasing && h.specialEasing[t] || h.easing || "swing", "hide" === n && g || "show" === n && !g) return h.complete.call(this);
                    m && ("height" === t || "width" === t) && (h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === j.css(this, "display") && "none" === j.css(this, "float") && (j.support.inlineBlockNeedsLayout && "inline" !== r(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                for (i in null != h.overflow && (this.style.overflow = "hidden"), e) o = new j.fx(this, h, i), n = e[i], dt.test(n) ? (p = j._data(this, "toggle" + i) || ("toggle" === n ? g ? "show" : "hide" : 0)) ? (j._data(this, "toggle" + i, "show" === p ? "hide" : "show"), o[p]()) : o[n]() : (u = pt.exec(n), c = o.cur(), u ? (f = parseFloat(u[2]), "px" !== (d = u[3] || (j.cssNumber[i] ? "" : "px")) && (j.style(this, i, (f || 1) + d), c = (f || 1) / o.cur() * c, j.style(this, i, c + d)), u[1] && (f = ("-=" === u[1] ? -1 : 1) * f + c), o.custom(c, f, d)) : o.custom(c, n, ""));
                return !0
            }
            var a = j.speed(t, n, i);
            return j.isEmptyObject(e) ? this.each(a.complete, [!1]) : (e = j.extend({}, e), !1 === a.queue ? this.each(o) : this.queue(a.queue, o))
        },
        stop: function(e, n, r) {
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                function t(e, t, n) {
                    var i = t[n];
                    j.removeData(e, n, !0), i.stop(r)
                }
                var n, i = !1,
                    o = j.timers,
                    a = j._data(this);
                if (r || j._unmark(!0, this), null == e)
                    for (n in a) a[n] && a[n].stop && n.indexOf(".run") === n.length - 4 && t(this, a, n);
                else a[n = e + ".run"] && a[n].stop && t(this, a, n);
                for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (r ? o[n](!0) : o[n].saveState(), i = !0, o.splice(n, 1));
                (!r || !i) && j.dequeue(this, e)
            }))
        }
    }), j.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        j.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    })), j.extend({
        speed: function(e, t, n) {
            var r = e && "object" == typeof e ? j.extend({}, e) : {
                complete: n || !n && t || j.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !j.isFunction(t) && t
            };
            return r.duration = j.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in j.fx.speeds ? j.fx.speeds[r.duration] : j.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function(e) {
                j.isFunction(r.old) && r.old.call(this), r.queue ? j.dequeue(this, r.queue) : !1 !== e && j._unmark(this)
            }, r
        },
        easing: {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), j.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (j.fx.step[this.prop] || j.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = j.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, n, r) {
            function i(e) {
                return o.step(e)
            }
            var o = this,
                s = j.fx;
            this.startTime = ct || a(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (j.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
                j._data(o.elem, "fxshow" + o.prop) === t && (o.options.hide ? j._data(o.elem, "fxshow" + o.prop, o.start) : o.options.show && j._data(o.elem, "fxshow" + o.prop, o.end))
            }, i() && j.timers.push(i) && !ut && (ut = setInterval(s.tick, s.interval))
        },
        show: function() {
            var e = j._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || j.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), j(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = j._data(this.elem, "fxshow" + this.prop) || j.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, r, i = ct || a(),
                o = !0,
                s = this.elem,
                l = this.options;
            if (e || i >= l.duration + this.startTime) {
                for (t in this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0, l.animatedProperties) !0 !== l.animatedProperties[t] && (o = !1);
                if (o) {
                    if (null != l.overflow && !j.support.shrinkWrapBlocks && j.each(["", "X", "Y"], (function(e, t) {
                            s.style["overflow" + t] = l.overflow[e]
                        })), l.hide && j(s).hide(), l.hide || l.show)
                        for (t in l.animatedProperties) j.style(s, t, l.orig[t]), j.removeData(s, "fxshow" + t, !0), j.removeData(s, "toggle" + t, !0);
                    (r = l.complete) && (l.complete = !1, r.call(s))
                }
                return !1
            }
            return l.duration == 1 / 0 ? this.now = i : (n = i - this.startTime, this.state = n / l.duration, this.pos = j.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, j.extend(j.fx, {
        tick: function() {
            for (var e, t = j.timers, n = 0; n < t.length; n++) !(e = t[n])() && t[n] === e && t.splice(n--, 1);
            t.length || j.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(ut), ut = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                j.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), j.each(ht.concat.apply([], ht), (function(e, t) {
        t.indexOf("margin") && (j.fx.step[t] = function(e) {
            j.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    })), j.expr && j.expr.filters && (j.expr.filters.animated = function(e) {
        return j.grep(j.timers, (function(t) {
            return e === t.elem
        })).length
    });
    var mt, gt = /^t(?:able|d|h)$/i,
        yt = /^(?:body|html)$/i;
    mt = "getBoundingClientRect" in A.documentElement ? function(e, t, r, i) {
        try {
            i = e.getBoundingClientRect()
        } catch (e) {}
        if (!i || !j.contains(r, e)) return i ? {
            top: i.top,
            left: i.left
        } : {
            top: 0,
            left: 0
        };
        var o = t.body,
            a = n(t),
            s = r.clientTop || o.clientTop || 0,
            l = r.clientLeft || o.clientLeft || 0,
            u = a.pageYOffset || j.support.boxModel && r.scrollTop || o.scrollTop,
            c = a.pageXOffset || j.support.boxModel && r.scrollLeft || o.scrollLeft;
        return {
            top: i.top + u - s,
            left: i.left + c - l
        }
    } : function(e, t, n) {
        for (var r, i = e.offsetParent, o = t.body, a = t.defaultView, s = a ? a.getComputedStyle(e, null) : e.currentStyle, l = e.offsetTop, u = e.offsetLeft;
            (e = e.parentNode) && e !== o && e !== n && (!j.support.fixedPosition || "fixed" !== s.position);) r = a ? a.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, u -= e.scrollLeft, e === i && (l += e.offsetTop, u += e.offsetLeft, j.support.doesNotAddBorder && (!j.support.doesAddBorderForTableAndCells || !gt.test(e.nodeName)) && (l += parseFloat(r.borderTopWidth) || 0, u += parseFloat(r.borderLeftWidth) || 0), i, i = e.offsetParent), j.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (l += parseFloat(r.borderTopWidth) || 0, u += parseFloat(r.borderLeftWidth) || 0), s = r;
        return "relative" !== s.position && "static" !== s.position || (l += o.offsetTop, u += o.offsetLeft), j.support.fixedPosition && "fixed" === s.position && (l += Math.max(n.scrollTop, o.scrollTop), u += Math.max(n.scrollLeft, o.scrollLeft)), {
            top: l,
            left: u
        }
    }, j.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each((function(t) {
            j.offset.setOffset(this, e, t)
        }));
        var n = this[0],
            r = n && n.ownerDocument;
        return r ? n === r.body ? j.offset.bodyOffset(n) : mt(n, r, r.documentElement) : null
    }, j.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return j.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(j.css(e, "marginTop")) || 0, n += parseFloat(j.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = j.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = j(e),
                s = a.offset(),
                l = j.css(e, "top"),
                u = j.css(e, "left"),
                c = {},
                f = {};
            ("absolute" === r || "fixed" === r) && j.inArray("auto", [l, u]) > -1 ? (i = (f = a.position()).top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), j.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(c)
        }
    }, j.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = yt.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(j.css(e, "marginTop")) || 0, n.left -= parseFloat(j.css(e, "marginLeft")) || 0, r.top += parseFloat(j.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(j.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent || A.body; e && !yt.test(e.nodeName) && "static" === j.css(e, "position");) e = e.offsetParent;
                return e
            }))
        }
    }), j.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, r) {
        var i = /Y/.test(r);
        j.fn[e] = function(o) {
            return j.access(this, (function(e, o, a) {
                var s = n(e);
                if (a === t) return s ? r in s ? s[r] : j.support.boxModel && s.document.documentElement[o] || s.document.body[o] : e[o];
                s ? s.scrollTo(i ? j(s).scrollLeft() : a, i ? a : j(s).scrollTop()) : e[o] = a
            }), e, o, arguments.length, null)
        }
    })), j.each({
        Height: "height",
        Width: "width"
    }, (function(e, n) {
        var r = "client" + e,
            i = "scroll" + e,
            o = "offset" + e;
        j.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(j.css(e, n, "padding")) : this[n]() : null
        }, j.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(j.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, j.fn[n] = function(e) {
            return j.access(this, (function(e, n, a) {
                var s, l, u, c;
                return j.isWindow(e) ? (l = (s = e.document).documentElement[r], j.support.boxModel && l || s.body && s.body[r] || l) : 9 === e.nodeType ? (s = e.documentElement)[r] >= s[i] ? s[r] : Math.max(e.body[i], s[i], e.body[o], s[o]) : a === t ? (u = j.css(e, n), c = parseFloat(u), j.isNumeric(c) ? c : u) : void j(e).css(n, a)
            }), n, e, arguments.length, null)
        }
    })), e.jQuery = e.$ = j, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], (function() {
        return j
    }))
}(window);
//# sourceMappingURL=index.b9258a2b.js.map