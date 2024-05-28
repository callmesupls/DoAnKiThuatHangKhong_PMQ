//File này hỗ trợ tốt hơn cho các phần tử SVG, để tương tác với các phần tử SVG trên trang web
//File này để mô phỏng hoặc điều khiển các thiết bị điện trên máy bay, như đèn, máy phát điện, hoặc bộ sạc.

! function(e) {
    var t, s, a, r, i, n, l, c, u, f, m, o;

    function p(t) { // Hàm kiểm tra xem một phần tử có phải là phần tử SVG hay không
        for (var s = 0; s < t.length; s++)
            if (1 == t[s].nodeType && t[s].namespaceURI == e.svg.svgNS) return !0;
        return !1
    }
    e.fn.addClass = (t = e.fn.addClass, function(s) { // Ghi đè hàm addClass của jQuery
        return s = s || "", this.each((function() {
            if (e.svg.isSVGElem(this)) { // Kiểm tra xem phần tử có phải là SVG hay không
                var a = this;
                e.each(s.split(/\s+/), (function(t, s) { // Duyệt qua từng lớp trong chuỗi 's'
                    var r = a.className ? a.className.baseVal : a.getAttribute("class"); // Lấy tên lớp hiện tại của phần tử
                     - 1 == e.inArray(s, r.split(/\s+/)) && (r += (r ? " " : "") + s, a.className ? a.className.baseVal = r : a.setAttribute("class", r)) // Thêm lớp vào phần tử nếu nó chưa có
                }))
            } else t.apply(e(this), [s]) // Nếu không phải SVG, gọi hàm addClass gốc của jQuery
        }))
    }), 
    // Tương tự như trên cho các hàm removeClass, toggleClass, hasClass, attr, removeAttr
    e.fn.removeClass = (s = e.fn.removeClass, function(t) {
        return t = t || "", this.each((function() {
            if (e.svg.isSVGElem(this)) {
                var a = this;
                e.each(t.split(/\s+/), (function(t, s) {
                    var r = a.className ? a.className.baseVal : a.getAttribute("class");
                    r = e.grep(r.split(/\s+/), (function(e, t) {
                        return e != s
                    })).join(" "), a.className ? a.className.baseVal = r : a.setAttribute("class", r)
                }))
            } else s.apply(e(this), [t])
        }))
    }), 
    
    e.fn.toggleClass = (a = e.fn.toggleClass, function(t, s) {
        return this.each((function() {
            e.svg.isSVGElem(this) ? ("boolean" != typeof s && (s = !e(this).hasClass(t)), e(this)[(s ? "add" : "remove") + "Class"](t)) : a.apply(e(this), [t, s])
        }))
    }), 
    
    e.fn.hasClass = (r = e.fn.hasClass, function(t) {
        t = t || "";
        var s = !1;
        return this.each((function() {
            if (e.svg.isSVGElem(this)) {
                var a = (this.className ? this.className.baseVal : this.getAttribute("class")).split(/\s+/);
                s = e.inArray(t, a) > -1
            } else s = r.apply(e(this), [t]);
            return !s
        })), s
    }), 
    
    e.fn.attr = (i = e.fn.attr, function(t, s, a) {
        if ("string" == typeof t && void 0 === s) {
            var r = i.apply(this, [t]);
            if (r && r.baseVal && null != r.baseVal.numberOfItems)
                if (s = "", r = r.baseVal, "transform" == t) {
                    for (var n = 0; n < r.numberOfItems; n++) {
                        var l = r.getItem(n);
                        switch (l.type) {
                            case 1:
                                s += " matrix(" + l.matrix.a + "," + l.matrix.b + "," + l.matrix.c + "," + l.matrix.d + "," + l.matrix.e + "," + l.matrix.f + ")";
                                break;
                            case 2:
                                s += " translate(" + l.matrix.e + "," + l.matrix.f + ")";
                                break;
                            case 3:
                                s += " scale(" + l.matrix.a + "," + l.matrix.d + ")";
                                break;
                            case 4:
                                s += " rotate(" + l.angle + ")";
                                break;
                            case 5:
                                s += " skewX(" + l.angle + ")";
                                break;
                            case 6:
                                s += " skewY(" + l.angle + ")"
                        }
                    }
                    r = s.substring(1)
                } else r = r.getItem(0).valueAsString;
            return r && r.baseVal ? r.baseVal.valueAsString : r
        }
        var c = t;
        return "string" == typeof t && ((c = {})[t] = s), this.each((function() {
            if (e.svg.isSVGElem(this))
                for (var r in c) {
                    var n = e.isFunction(c[r]) ? c[r]() : c[r];
                    a ? this.style[r] = n : this.setAttribute(r, n)
                } else i.apply(e(this), [t, s, a])
        }))
    }), 
    
    e.fn.removeAttr = (n = e.fn.removeAttr, function(t) {
        return this.each((function() {
            e.svg.isSVGElem(this) ? this[t] && this[t].baseVal ? this[t].baseVal.value = "" : this.setAttribute(t, "") : n.apply(e(this), [t])
        }))
    }), 
    
    e.extend(e.cssNumber, {
        stopOpacity: !0,
        strokeMitrelimit: !0,
        strokeOpacity: !0
    }), 
    
    e.cssProps && (e.css = (l = e.css, function(t, s, a) {
        return (s.match(/^svg.*/) ? e(t).attr(e.cssProps[s] || s) : "") || l(t, s, a)
    })), 
    
    e.expr.relative["+"] = (c = e.expr.relative["+"], function(e, t, s) {
        c(e, t, s || p(e)) // Ghi đè hàm relative của jQuery để hỗ trợ SVG
    }), 
    
    // Tương tự như trên cho các hàm relative khác
    e.expr.relative[">"] = (u = e.expr.relative[">"], function(e, t, s) {
        u(e, t, s || p(e))
    }), 
    
    e.expr.relative[""] = (f = e.expr.relative[""], function(e, t, s) {
        f(e, t, s || p(e))
    }), 
    
    e.expr.relative["~"] = (m = e.expr.relative["~"], function(e, t, s) {
        m(e, t, s || p(e))
    }), 
    
    e.expr.find.ID = (o = e.expr.find.ID, function(t, s, a) {
        return e.svg.isSVGElem(s) ? [s.ownerDocument.getElementById(t[1])] : o(t, s, a) // Ghi đè hàm find.ID của jQuery để hỗ trợ SVG
    });
    var v, h = document.createElement("div");
    h.appendChild(document.createComment("")), h.getElementsByTagName("*").length > 0 && (e.expr.find.TAG = function(e, t) {
        var s = t.getElementsByTagName(e[1]);
        if ("*" === e[1]) {
            for (var a = [], r = 0; s[r] || s.item(r); r++) 1 === (s[r] || s.item(r)).nodeType && a.push(s[r] || s.item(r));
            s = a
        }
        return s
    }), e.expr.preFilter.CLASS = function(t, s, a, r, i, n) {
        if (t = " " + t[1].replace(/\\/g, "") + " ", n) return t;
        for (var l = 0, c = {}; null != c; l++) {
            if (!(c = s[l])) try {
                c = s.item(l)
            } catch (e) {}
            if (c) {
                var u = e.svg.isSVGElem(c) ? (c.className ? c.className.baseVal : "") || c.getAttribute("class") : c.className;
                i ^ (u && (" " + u + " ").indexOf(t) > -1) ? a || r.push(c) : a && (s[l] = !1)
            }
        }
        return !1
    }, e.expr.filter.CLASS = function(t, s) {
        return (" " + (e.svg.isSVGElem(t) ? t.className ? t.className.baseVal : t.getAttribute("class") : t.className) + " ").indexOf(s) > -1
    }, e.expr.filter.ATTR = (v = e.expr.filter.ATTR, function(t, s) {
        var a = null;
        e.svg.isSVGElem(t) && (a = s[1], e.expr.attrHandle[a] = function(e) {
            var t = e.getAttribute(a);
            return t && t.baseVal || t
        });
        var r = v(t, s);
        return a && (e.expr.attrHandle[a] = null), r
    })
}(jQuery);
//# sourceMappingURL=js/index.44752780.js.map