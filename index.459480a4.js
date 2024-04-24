! function(t) {
    t.ui = t.ui || {};
    var e = /left|center|right/,
        o = "center",
        i = /top|center|bottom/,
        f = "center",
        n = t.fn.position;
    if (t.fn.position = function(s) {
            if (!s || !s.of) return n.apply(this, arguments);
            s = t.extend({}, s);
            var l, r, a, h = t(s.of),
                c = (s.collision || "flip").split(" "),
                p = s.offset ? s.offset.split(" ") : [0, 0];
            switch (9 === s.of.nodeType ? (l = h.width(), r = h.height(), a = {
                top: 0,
                left: 0
            }) : s.of.scrollTo && s.of.document ? (l = h.width(), r = h.height(), a = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }) : s.of.preventDefault ? (s.at = "left top", l = r = 0, a = {
                top: s.of.pageY,
                left: s.of.pageX
            }) : (l = h.outerWidth(), r = h.outerHeight(), a = h.offset()), t.each(["my", "at"], (function() {
                var t = (s[this] || "").split(" ");
                (t = 1 == t.length ? e.test(t[0]) ? t.concat([f]) : i.test(t[0]) ? [o].concat(t) : [o, f] : t)[0] = e.test(t[0]) ? t[0] : o, t[1] = i.test(t[1]) ? t[1] : f, s[this] = t
            })), 1 == c.length && (c[1] = c[0]), p[0] = parseInt(p[0], 10) || 0, 1 == p.length && (p[1] = p[0]), p[1] = parseInt(p[1], 10) || 0, s.at[0]) {
                case "right":
                    a.left += l;
                    break;
                case o:
                    a.left += l / 2
            }
            switch (s.at[1]) {
                case "bottom":
                    a.top += r;
                    break;
                case f:
                    a.top += r / 2
            }
            return a.left += p[0], a.top += p[1], this.each((function() {
                var e = t(this),
                    i = e.outerWidth(),
                    n = e.outerHeight(),
                    h = t.extend({}, a);
                switch (s.my[0]) {
                    case "right":
                        h.left -= i;
                        break;
                    case o:
                        h.left -= i / 2
                }
                switch (s.my[1]) {
                    case "bottom":
                        h.top -= n;
                        break;
                    case f:
                        h.top -= n / 2
                }
                t.each(["left", "top"], (function(e, o) {
                    t.ui.position[c[e]] && t.ui.position[c[e]][o](h, {
                        targetWidth: l,
                        targetHeight: r,
                        elemWidth: i,
                        elemHeight: n,
                        offset: p,
                        my: s.my,
                        at: s.at
                    })
                })), t.fn.bgiframe && e.bgiframe(), e.offset(t.extend(h, {
                    using: s.using
                }))
            }))
        }, t.ui.position = {
            fit: {
                left: function(e, o) {
                    var i = e.left + o.elemWidth - t(window).width() - t(window).scrollLeft();
                    e.left = i > 0 ? e.left - i : Math.max(0, e.left)
                },
                top: function(e, o) {
                    var i = e.top + o.elemHeight - t(window).height() - t(window).scrollTop();
                    e.top = i > 0 ? e.top - i : Math.max(0, e.top)
                }
            },
            flip: {
                left: function(e, o) {
                    if ("center" != o.at[0]) {
                        var i = e.left + o.elemWidth - t(window).width() - t(window).scrollLeft(),
                            f = "left" == o.my[0] ? -o.elemWidth : "right" == o.my[0] ? o.elemWidth : 0,
                            n = -2 * o.offset[0];
                        e.left += e.left < 0 ? f + o.targetWidth + n : i > 0 ? f - o.targetWidth + n : 0
                    }
                },
                top: function(e, o) {
                    if ("center" != o.at[1]) {
                        var i = e.top + o.elemHeight - t(window).height() - t(window).scrollTop(),
                            f = "top" == o.my[1] ? -o.elemHeight : "bottom" == o.my[1] ? o.elemHeight : 0,
                            n = "top" == o.at[1] ? o.targetHeight : -o.targetHeight,
                            s = -2 * o.offset[1];
                        e.top += e.top < 0 ? f + o.targetHeight + s : i > 0 ? f + n + s : 0
                    }
                }
            }
        }, !t.offset.setOffset) {
        t.offset.setOffset = function(t, e) {
            /static/.test(jQuery.curCSS(t, "position")) && (t.style.position = "relative");
            var o = jQuery(t),
                i = o.offset(),
                f = parseInt(jQuery.curCSS(t, "top", !0), 10) || 0,
                n = parseInt(jQuery.curCSS(t, "left", !0), 10) || 0,
                s = {
                    top: e.top - i.top + f,
                    left: e.left - i.left + n
                };
            "using" in e ? e.using.call(t, s) : o.css(s)
        };
        var s = t.fn.offset;
        t.fn.offset = function(e) {
            var o = this[0];
            return o && o.ownerDocument ? e ? this.each((function() {
                t.offset.setOffset(this, e)
            })) : s.call(this) : null
        }
    }
}(jQuery);
//# sourceMappingURL=index.459480a4.js.map