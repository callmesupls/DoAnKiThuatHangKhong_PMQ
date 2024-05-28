// File này xử lý SVG
// File này chứa các hàm và chức năng liên quan đến hệ thống điện trên máy bay Cessna 172S. (Bao gồm việc xử lý sự kiện và hiển thị thông tin liên quan đến hệ thống điện).
! function (t) {
    function e() {
        // Mảng lưu trữ các cài đặt của SVG
        this._settings = [],  // Mảng lưu trữ các cài đặt của SVG
        this._extensions = [], // Mảng lưu trữ các phần mở rộng
        this.regional = [], // Mảng lưu trữ các thiết lập vùng miền
        this.regional[""] = { // Thiết lập các thông báo lỗi mặc định
            errorLoadingText: "Error loading", // Thông báo khi lỗi tải
            notSupportedText: "This browser does not support SVG" // Thông báo khi trình duyệt không hỗ trợ SVG
        }, 
        this.local = this.regional[""], // Gán thiết lập vùng miền mặc định cho thuộc tính local
        this._uuid = (new Date).getTime(), // Tạo một UUID dựa trên thời gian hiện tại
        this._renesis = function (t) { // Kiểm tra xem Renesis SVG Viewer có được hỗ trợ bởi trình duyệt hay không
            try {
                return !(!window.ActiveXObject || !new ActiveXObject(t))
            } catch (t) {
                return !1 // Trả về false nếu có lỗi
            }
        }("RenesisX.RenesisCtrl")
    }
    var n = "svgwrapper"; // Tên của lớp wrapper

    function r(e, n) { // Lớp r để quản lý đối tượng SVG và container của nó
        this._svg = e, // Đối tượng SVG
        this._container = n; // Container của SVG
        for (var r = 0; r < t.svg._extensions.length; r++) { // Duyệt qua các phần mở rộng
            var i = t.svg._extensions[r]; // Lấy phần mở rộng
            this[i[0]] = new i[1](this) // Khởi tạo phần mở rộng với tham chiếu đến đối tượng hiện tại
        }
    }

    function i() { // Lớp i để tạo và quản lý đường dẫn (path)
        this._path = "" // Khởi tạo thuộc tính path rỗng
    }

    function s() { // Lớp s để quản lý các phần tử văn bản (text parts)
        this._parts = [] // Khởi tạo mảng rỗng để lưu trữ các phần tử văn bản
    }

    function o(t) { // Hàm để kiểm tra xem một đối tượng có phải là mảng hay không
        return t && t.constructor == Array // Trả về true nếu t là một mảng
    }
    t.extend(e.prototype, { // Mở rộng prototype của lớp e với các phương thức và thuộc tính mới
        markerClassName: "hasSVG", // Tên lớp CSS để đánh dấu phần tử đã chứa SVG
        svgNS: "http://www.w3.org/2000/svg", // Namespace của SVG
        xlinkNS: "http://www.w3.org/1999/xlink", // Namespace của XLink
        _wrapperClass: r, // Tham chiếu đến lớp wrapper
        _attrNames: { // Bảng ánh xạ các thuộc tính SVG với tên chuẩn của chúng
            class_: "class",
            in_: "in",
            alignmentBaseline: "alignment-baseline",
            baselineShift: "baseline-shift",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorRendering: "color-rendering",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            vertAdvY: "vert-adv-y",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode"
        },
        _attachSVG: function (e, n) { // Hàm đính kèm SVG vào phần tử DOM
            var r = e.namespaceURI == this.svgNS ? e : null; // Kiểm tra nếu phần tử có namespace là SVG
            if (!t((e = r ? null : e) || r).hasClass(this.markerClassName)) { // Nếu phần tử chưa có lớp "hasSVG"
                "string" == typeof n ? n = {
                    loadURL: n
                } : "function" == typeof n && (n = {
                    onLoad: n
                }), // Chuyển đổi đối số n thành một đối tượng nếu nó là chuỗi hoặc hàm
                t(e || r).addClass(this.markerClassName); // Thêm lớp "hasSVG" vào phần tử
                try {
                    r || ((r = document.createElementNS(this.svgNS, "svg")).setAttribute("version", "1.1"), // Tạo phần tử SVG mới nếu chưa có
                    e.clientWidth > 0 && r.setAttribute("width", e.clientWidth), // Thiết lập thuộc tính width nếu có
                    e.clientHeight > 0 && r.setAttribute("height", e.clientHeight), // Thiết lập thuộc tính height nếu có
                    e.appendChild(r)), // Đính kèm phần tử SVG vào container
                    this._afterLoad(e, r, n || {}) // Gọi hàm _afterLoad để xử lý sau khi tải SVG
                } catch (r) { // Xử lý ngoại lệ nếu có lỗi
                    t.browser.msie ? (e.id || (e.id = "svg" + this._uuid++), // Nếu là trình duyệt IE, tạo ID duy nhất cho phần tử nếu chưa có
                    this._settings[e.id] = n, // Lưu cài đặt vào _settings
                    e.innerHTML = '<embed type="image/svg+xml" width="100%" height="100%" src="' + (n.initPath || "") + 'blank.svg" pluginspage="http://www.adobe.com/svg/viewer/install/main.html"/>') // Chèn phần tử embed với thuộc tính cần thiết
                    : e.innerHTML = '<p class="svg_error">' + this.local.notSupportedText + "</p>"// Hiển thị thông báo lỗi nếu trình duyệt không hỗ trợ SVG
                }
            }
        },
        _registerSVG: function () { 
            // Duyệt qua tất cả các phần tử nhúng (embed) trong tài liệu
            for (var e = 0; e < document.embeds.length; e++) {
                var r = document.embeds[e].parentNode;
                // Kiểm tra nếu phần tử cha có lớp CSS 'markerClassName' và không có dữ liệu liên kết
                if (t(r).hasClass(t.svg.markerClassName) && !t.data(r, n)) {
                    var i = null;
                    try {
                        // Cố gắng lấy tài liệu SVG từ phần tử nhúng
                        i = document.embeds[e].getSVGDocument()
                    } catch (e) {
                         // Nếu không thành công, thử lại sau 250ms
                        return void setTimeout(t.svg._registerSVG, 250)
                    }
                    // Nếu lấy được tài liệu SVG, gọi hàm _afterLoad để xử lý 
                    (i = i ? i.documentElement : null) && t.svg._afterLoad(r, i)
                }
            }
        },
        _afterLoad: function (e, r, i) { // Hàm được gọi sau khi tải SVG thành công
            // Nếu i không được cung cấp, sử dụng cấu hình mặc định từ _settings
            i = i || this._settings[e.id];
            // Xóa cấu hình mặc định sau khi sử dụng
            this._settings[e ? e.id : ""] = null;
            // Tạo một đối tượng mới từ _wrapperClass với phần tử SVG và phần tử chứa nó
            var s = new this._wrapperClass(r, e);
            // Liên kết dữ liệu phần tử SVG với phần tử chứa nó
            t.data(e || r, n, s);
            try {
                // Nếu có URL tải, gọi phương thức load của đối tượng s
                i.loadURL && s.load(i.loadURL, i), 
                // Nếu có thiết lập cấu hình, gọi phương thức configure của đối tượng s
                i.settings && s.configure(i.settings), 
                // Nếu có hàm onLoad và không có URL tải, gọi hàm onLoad
                i.onLoad && !i.loadURL && i.onLoad.apply(e || r, [s])
            } catch (t) {
                alert(t)
            }
        },
        // Hàm _getSVG: Trả về một phần tử SVG từ một chuỗi hoặc đối tượng jQuery.
        _getSVG: function (e) {
            return e = "string" == typeof e ? t(e)[0] : e.jquery ? e[0] : e, t.data(e, n)
        },
        // Hàm _destroySVG: Xóa một phần tử SVG và các dữ liệu được liên kết với nó.
        _destroySVG: function (e) {
            var r = t(e);
            r.hasClass(this.markerClassName) && (r.removeClass(this.markerClassName), e.namespaceURI != this.svgNS && r.empty(), t.removeData(e, n))
        },
        // Hàm addExtension: Thêm một phần mở rộng cho thư viện SVG.
        addExtension: function (t, e) {
            this._extensions.push([t, e])
        },
        // Hàm isSVGElem: Kiểm tra xem một phần tử có phải là một phần tử SVG không.
        isSVGElem: function (e) {
            return 1 == e.nodeType && e.namespaceURI == t.svg.svgNS
        }
    }), t.extend(r.prototype, {
        _width: function () {
            return this._container ? this._container.clientWidth : this._svg.width
        },
        _height: function () {
            return this._container ? this._container.clientHeight : this._svg.height
        },
        root: function () {
            return this._svg
        },
        configure: function (e, n, r) {
            if (e.nodeName || (r = n, n = e, e = this._svg), r)
                for (var i = e.attributes.length - 1; i >= 0; i--) {
                    var s = e.attributes.item(i);
                    "onload" != s.nodeName && "version" != s.nodeName && "xmlns" != s.nodeName.substring(0, 5) && e.attributes.removeNamedItem(s.nodeName)
                }
            for (var o in n) e.setAttribute(t.svg._attrNames[o] || o, n[o]);
            return this
        },
        getElementById: function (t) {
            return this._svg.ownerDocument.getElementById(t)
        },
        change: function (e, n) {
            if (e)
                for (var r in n) null == n[r] ? e.removeAttribute(t.svg._attrNames[r] || r) : e.setAttribute(t.svg._attrNames[r] || r, n[r]);
            return this
        },
        _args: function (e, n, r) {
            n.splice(0, 0, "parent"), n.splice(n.length, 0, "settings");
            var i = {},
                s = 0;
            null != e[0] && e[0].jquery && (e[0] = e[0][0]), null == e[0] || "object" == typeof e[0] && e[0].nodeName || (i.parent = null, s = 1);
            for (var o = 0; o < e.length; o++) i[n[o + s]] = e[o];
            return r && t.each(r, (function (t, e) {
                "object" == typeof i[e] && (i.settings = i[e], i[e] = null)
            })), i
        },
        title: function (t, e, n) {
            var r = this._args(arguments, ["text"]),
                i = this._makeNode(r.parent, "title", r.settings || {});
            return i.appendChild(this._svg.ownerDocument.createTextNode(r.text)), i
        },
        describe: function (t, e, n) {
            var r = this._args(arguments, ["text"]),
                i = this._makeNode(r.parent, "desc", r.settings || {});
            return i.appendChild(this._svg.ownerDocument.createTextNode(r.text)), i
        },
        defs: function (e, n, r) {
            var i = this._args(arguments, ["id"], ["id"]);
            return this._makeNode(i.parent, "defs", t.extend(i.id ? {
                id: i.id
            } : {}, i.settings || {}))
        },
        symbol: function (e, n, r, i, s, o, a) {
            var h = this._args(arguments, ["id", "x1", "y1", "width", "height"]);
            return this._makeNode(h.parent, "symbol", t.extend({
                id: h.id,
                viewBox: h.x1 + " " + h.y1 + " " + h.width + " " + h.height
            }, h.settings || {}))
        },
        marker: function (e, n, r, i, s, o, a, h) {
            var d = this._args(arguments, ["id", "refX", "refY", "mWidth", "mHeight", "orient"], ["orient"]);
            return this._makeNode(d.parent, "marker", t.extend({
                id: d.id,
                refX: d.refX,
                refY: d.refY,
                markerWidth: d.mWidth,
                markerHeight: d.mHeight,
                orient: d.orient || "auto"
            }, d.settings || {}))
        },
        style: function (e, n, r) {
            var i = this._args(arguments, ["styles"]),
                s = this._makeNode(i.parent, "style", t.extend({
                    type: "text/css"
                }, i.settings || {}));
            return s.appendChild(this._svg.ownerDocument.createTextNode(i.styles)), t.browser.opera && t("head").append('<style type="text/css">' + i.styles + "</style>"), s
        },
        script: function (e, n, r, i) {
            var s = this._args(arguments, ["script", "type"], ["type"]),
                o = this._makeNode(s.parent, "script", t.extend({
                    type: s.type || "text/javascript"
                }, s.settings || {}));
            return o.appendChild(this._svg.ownerDocument.createTextNode(s.script)), t.browser.mozilla || t.globalEval(s.script), o
        },
        linearGradient: function (e, n, r, i, s, o, a, h) {
            var d = this._args(arguments, ["id", "stops", "x1", "y1", "x2", "y2"], ["x1"]),
                l = t.extend({
                    id: d.id
                }, null != d.x1 ? {
                    x1: d.x1,
                    y1: d.y1,
                    x2: d.x2,
                    y2: d.y2
                } : {});
            return this._gradient(d.parent, "linearGradient", t.extend(l, d.settings || {}), d.stops)
        },
        radialGradient: function (e, n, r, i, s, o, a, h, d) {
            var l = this._args(arguments, ["id", "stops", "cx", "cy", "r", "fx", "fy"], ["cx"]),
                c = t.extend({
                    id: l.id
                }, null != l.cx ? {
                    cx: l.cx,
                    cy: l.cy,
                    r: l.r,
                    fx: l.fx,
                    fy: l.fy
                } : {});
            return this._gradient(l.parent, "radialGradient", t.extend(c, l.settings || {}), l.stops)
        },
        _gradient: function (e, n, r, i) {
            for (var s = this._makeNode(e, n, r), o = 0; o < i.length; o++) {
                var a = i[o];
                this._makeNode(s, "stop", t.extend({
                    offset: a[0],
                    stopColor: a[1]
                }, null != a[2] ? {
                    stopOpacity: a[2]
                } : {}))
            }
            return s
        },
        pattern: function (e, n, r, i, s, o, a, h, d, l, c) {
            var u = this._args(arguments, ["id", "x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]),
                p = t.extend({
                    id: u.id,
                    x: u.x,
                    y: u.y,
                    width: u.width,
                    height: u.height
                }, null != u.vx ? {
                    viewBox: u.vx + " " + u.vy + " " + u.vwidth + " " + u.vheight
                } : {});
            return this._makeNode(u.parent, "pattern", t.extend(p, u.settings || {}))
        },
        clipPath: function (e, n, r, i) {
            var s = this._args(arguments, ["id", "units"]);
            return s.units = s.units || "userSpaceOnUse", this._makeNode(s.parent, "clipPath", t.extend({
                id: s.id,
                clipPathUnits: s.units
            }, s.settings || {}))
        },
        mask: function (e, n, r, i, s, o, a) {
            var h = this._args(arguments, ["id", "x", "y", "width", "height"]);
            return this._makeNode(h.parent, "mask", t.extend({
                id: h.id,
                x: h.x,
                y: h.y,
                width: h.width,
                height: h.height
            }, h.settings || {}))
        },
        createPath: function () {
            return new i
        },
        createText: function () {
            return new s
        },
        svg: function (e, n, r, i, s, o, a, h, d, l) {
            var c = this._args(arguments, ["x", "y", "width", "height", "vx", "vy", "vwidth", "vheight"], ["vx"]),
                u = t.extend({
                    x: c.x,
                    y: c.y,
                    width: c.width,
                    height: c.height
                }, null != c.vx ? {
                    viewBox: c.vx + " " + c.vy + " " + c.vwidth + " " + c.vheight
                } : {});
            return this._makeNode(c.parent, "svg", t.extend(u, c.settings || {}))
        },
        group: function (e, n, r) {
            var i = this._args(arguments, ["id"], ["id"]);
            return this._makeNode(i.parent, "g", t.extend({
                id: i.id
            }, i.settings || {}))
        },
        use: function (e, n, r, i, s, o, a) {
            var h = this._args(arguments, ["x", "y", "width", "height", "ref"]);
            "string" == typeof h.x && (h.ref = h.x, h.settings = h.y, h.x = h.y = h.width = h.height = null);
            var d = this._makeNode(h.parent, "use", t.extend({
                x: h.x,
                y: h.y,
                width: h.width,
                height: h.height
            }, h.settings || {}));
            return d.setAttributeNS(t.svg.xlinkNS, "href", h.ref), d
        },
        link: function (e, n, r) {
            var i = this._args(arguments, ["ref"]),
                s = this._makeNode(i.parent, "a", i.settings);
            return s.setAttributeNS(t.svg.xlinkNS, "href", i.ref), s
        },
        image: function (e, n, r, i, s, o, a) {
            var h = this._args(arguments, ["x", "y", "width", "height", "ref"]),
                d = this._makeNode(h.parent, "image", t.extend({
                    x: h.x,
                    y: h.y,
                    width: h.width,
                    height: h.height
                }, h.settings || {}));
            return d.setAttributeNS(t.svg.xlinkNS, "href", h.ref), d
        },
        path: function (e, n, r) {
            var i = this._args(arguments, ["path"]);
            return this._makeNode(i.parent, "path", t.extend({
                d: i.path.path ? i.path.path() : i.path
            }, i.settings || {}))
        },
        rect: function (e, n, r, i, s, o, a, h) {
            var d = this._args(arguments, ["x", "y", "width", "height", "rx", "ry"], ["rx"]);
            return this._makeNode(d.parent, "rect", t.extend({
                x: d.x,
                y: d.y,
                width: d.width,
                height: d.height
            }, d.rx ? {
                rx: d.rx,
                ry: d.ry
            } : {}, d.settings || {}))
        },
        circle: function (e, n, r, i, s) {
            var o = this._args(arguments, ["cx", "cy", "r"]);
            return this._makeNode(o.parent, "circle", t.extend({
                cx: o.cx,
                cy: o.cy,
                r: o.r
            }, o.settings || {}))
        },
        ellipse: function (e, n, r, i, s, o) {
            var a = this._args(arguments, ["cx", "cy", "rx", "ry"]);
            return this._makeNode(a.parent, "ellipse", t.extend({
                cx: a.cx,
                cy: a.cy,
                rx: a.rx,
                ry: a.ry
            }, a.settings || {}))
        },
        line: function (e, n, r, i, s, o) {
            var a = this._args(arguments, ["x1", "y1", "x2", "y2"]);
            return this._makeNode(a.parent, "line", t.extend({
                x1: a.x1,
                y1: a.y1,
                x2: a.x2,
                y2: a.y2
            }, a.settings || {}))
        },
        polyline: function (t, e, n) {
            var r = this._args(arguments, ["points"]);
            return this._poly(r.parent, "polyline", r.points, r.settings)
        },
        polygon: function (t, e, n) {
            var r = this._args(arguments, ["points"]);
            return this._poly(r.parent, "polygon", r.points, r.settings)
        },
        _poly: function (e, n, r, i) {
            for (var s = "", o = 0; o < r.length; o++) s += r[o].join() + " ";
            return this._makeNode(e, n, t.extend({
                points: t.trim(s)
            }, i || {}))
        },
        text: function (e, n, r, i, s) {
            var a = this._args(arguments, ["x", "y", "value"]);
            return "string" == typeof a.x && arguments.length < 4 && (a.value = a.x, a.settings = a.y, a.x = a.y = null), this._text(a.parent, "text", a.value, t.extend({
                x: a.x && o(a.x) ? a.x.join(" ") : a.x,
                y: a.y && o(a.y) ? a.y.join(" ") : a.y
            }, a.settings || {}))
        },
        textpath: function (e, n, r, i) {
            var s = this._args(arguments, ["path", "value"]),
                o = this._text(s.parent, "textPath", s.value, s.settings || {});
            return o.setAttributeNS(t.svg.xlinkNS, "href", s.path), o
        },
        _text: function (e, n, r, i) {
            var s = this._makeNode(e, n, i);
            if ("string" == typeof r) s.appendChild(s.ownerDocument.createTextNode(r));
            else
                for (var o = 0; o < r._parts.length; o++) {
                    var a = r._parts[o];
                    if ("tspan" == a[0]) (h = this._makeNode(s, a[0], a[2])).appendChild(s.ownerDocument.createTextNode(a[1])), s.appendChild(h);
                    else if ("tref" == a[0]) {
                        (h = this._makeNode(s, a[0], a[2])).setAttributeNS(t.svg.xlinkNS, "href", a[1]), s.appendChild(h)
                    } else if ("textpath" == a[0]) {
                        var h, d = t.extend({}, a[2]);
                        d.href = null, (h = this._makeNode(s, a[0], d)).setAttributeNS(t.svg.xlinkNS, "href", a[2].href), h.appendChild(s.ownerDocument.createTextNode(a[1])), s.appendChild(h)
                    } else s.appendChild(s.ownerDocument.createTextNode(a[1]))
                }
            return s
        },
        other: function (t, e, n) {
            var r = this._args(arguments, ["name"]);
            return this._makeNode(r.parent, r.name, r.settings || {})
        },
        _makeNode: function (e, n, r) {
            e = e || this._svg;
            var i = this._svg.ownerDocument.createElementNS(t.svg.svgNS, n);
            for (var n in r) {
                var s = r[n];
                null == s || null == s || "string" == typeof s && "" == s || i.setAttribute(t.svg._attrNames[n] || n, s)
            }
            return e.appendChild(i), i
        },
        add: function (e, n) {
            var r = this._args(1 == arguments.length ? [null, e] : arguments, ["node"]),
                i = this;
            r.parent = r.parent || this._svg, r.node = r.node.jquery ? r.node : t(r.node);
            try {
                if (t.svg._renesis) throw "Force traversal";
                r.parent.appendChild(r.node.cloneNode(!0))
            } catch (t) {
                r.node.each((function () {
                    var t = i._cloneAsSVG(this);
                    t && r.parent.appendChild(t)
                }))
            }
            return this
        },
        clone: function (e, n) {
            var r = this,
                i = this._args(1 == arguments.length ? [null, e] : arguments, ["node"]);
            i.parent = i.parent || this._svg, i.node = i.node.jquery ? i.node : t(i.node);
            var s = [];
            return i.node.each((function () {
                var t = r._cloneAsSVG(this);
                t && (t.id = "", i.parent.appendChild(t), s.push(t))
            })), s
        },
        _cloneAsSVG: function (e) {
            var n = null;
            if (1 == e.nodeType) {
                n = this._svg.ownerDocument.createElementNS(t.svg.svgNS, this._checkName(e.nodeName));
                for (var r = 0; r < e.attributes.length; r++) {
                    var i = e.attributes.item(r);
                    "xmlns" != i.nodeName && i.nodeValue && ("xlink" == i.prefix ? n.setAttributeNS(t.svg.xlinkNS, i.localName || i.baseName, i.nodeValue) : n.setAttribute(this._checkName(i.nodeName), i.nodeValue))
                }
                for (r = 0; r < e.childNodes.length; r++) {
                    var s = this._cloneAsSVG(e.childNodes[r]);
                    s && n.appendChild(s)
                }
            } else if (3 == e.nodeType) t.trim(e.nodeValue) && (n = this._svg.ownerDocument.createTextNode(e.nodeValue));
            else if (4 == e.nodeType && t.trim(e.nodeValue)) try {
                n = this._svg.ownerDocument.createCDATASection(e.nodeValue)
            } catch (t) {
                n = this._svg.ownerDocument.createTextNode(e.nodeValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))
            }
            return n
        },
        _checkName: function (t) {
            return "svg:" == (t = t.substring(0, 1) >= "A" && t.substring(0, 1) <= "Z" ? t.toLowerCase() : t).substring(0, 4) ? t.substring(4) : t
        },
        load: function (e, n) {
            (n = "boolean" == typeof n ? {
                addTo: n
            } : "function" == typeof n ? {
                onLoad: n
            } : "string" == typeof n || "object" == typeof n && n.nodeName || "object" == typeof n && n.jquery ? {
                parent: n
            } : n || {}).parent || n.addTo || this.clear(!1);
            var r = [this._svg.getAttribute("width"), this._svg.getAttribute("height")],
                i = this,
                s = function (e) {
                    e = t.svg.local.errorLoadingText + ": " + e, n.onLoad ? n.onLoad.apply(i._container || i._svg, [i, e]) : i.text(null, 10, 20, e)
                },
                o = function (t) {
                    var e = new ActiveXObject("Microsoft.XMLDOM");
                    return e.validateOnParse = !1, e.resolveExternals = !1, e.async = !1, e.loadXML(t), 0 != e.parseError.errorCode ? (s(e.parseError.reason), null) : e
                },
                a = function (e) {
                    if (e)
                        if ("svg" == e.documentElement.nodeName) {
                            for (var o = n.parent ? t(n.parent)[0] : i._svg, a = {}, h = 0; h < e.documentElement.attributes.length; h++) {
                                var d = e.documentElement.attributes.item(h);
                                "version" != d.nodeName && "xmlns" != d.nodeName.substring(0, 5) && (a[d.nodeName] = d.nodeValue)
                            }
                            i.configure(o, a, !n.parent);
                            var l = e.documentElement.childNodes;
                            for (h = 0; h < l.length; h++) try {
                                if (t.svg._renesis) throw "Force traversal";
                                o.appendChild(i._svg.ownerDocument.importNode(l[h], !0)), "script" == l[h].nodeName && t.globalEval(l[h].textContent)
                            } catch (t) {
                                i.add(o, l[h])
                            }
                            n.changeSize || i.configure(o, {
                                width: r[0],
                                height: r[1]
                            }), n.onLoad && n.onLoad.apply(i._container || i._svg, [i])
                        } else {
                            var c = e.getElementsByTagName("parsererror"),
                                u = c.length ? c[0].getElementsByTagName("div") : [];
                            s(c.length ? (u.length ? u[0] : c[0]).firstChild.nodeValue : "???")
                        }
                };
            return e.match("<svg") ? a(t.browser.msie ? o(e) : (new DOMParser).parseFromString(e, "text/xml")) : t.ajax({
                url: e,
                dataType: t.browser.msie ? "text" : "xml",
                success: function (e) {
                    a(t.browser.msie ? o(e) : e)
                },
                error: function (t, e, n) {
                    s(e + (n ? " " + n.message : ""))
                }
            }), this
        },
        remove: function (t) {
            return (t = t.jquery ? t[0] : t).parentNode.removeChild(t), this
        },
        clear: function (t) {
            for (t && this.configure({}, !0); this._svg.firstChild;) this._svg.removeChild(this._svg.firstChild);
            return this
        },
        toSVG: function (t) {
            return t = t || this._svg, "undefined" == typeof XMLSerializer ? this._toSVG(t) : (new XMLSerializer).serializeToString(t)
        },
        _toSVG: function (e) {
            var n = "";
            if (!e) return n;
            if (3 == e.nodeType) n = e.nodeValue;
            else if (4 == e.nodeType) n = "<![CDATA[" + e.nodeValue + "]]>";
            else {
                if (n = "<" + e.nodeName, e.attributes)
                    for (var r = 0; r < e.attributes.length; r++) {
                        var i = e.attributes.item(r);
                        "" == t.trim(i.nodeValue) || i.nodeValue.match(/^\[object/) || i.nodeValue.match(/^function/) || (n += " " + (i.namespaceURI == t.svg.xlinkNS ? "xlink:" : "") + i.nodeName + '="' + i.nodeValue + '"')
                    }
                if (e.firstChild) {
                    n += ">";
                    for (var s = e.firstChild; s;) n += this._toSVG(s), s = s.nextSibling;
                    n += "</" + e.nodeName + ">"
                } else n += "/>"
            }
            return n
        }
    }), t.extend(i.prototype, {
        reset: function () {
            return this._path = "", this
        },
        move: function (t, e, n) {
            return n = o(t) ? e : n, this._coords(n ? "m" : "M", t, e)
        },
        line: function (t, e, n) {
            return n = o(t) ? e : n, this._coords(n ? "l" : "L", t, e)
        },
        horiz: function (t, e) {
            return this._path += (e ? "h" : "H") + (o(t) ? t.join(" ") : t), this
        },
        vert: function (t, e) {
            return this._path += (e ? "v" : "V") + (o(t) ? t.join(" ") : t), this
        },
        curveC: function (t, e, n, r, i, s, a) {
            return a = o(t) ? e : a, this._coords(a ? "c" : "C", t, e, n, r, i, s)
        },
        smoothC: function (t, e, n, r, i) {
            return i = o(t) ? e : i, this._coords(i ? "s" : "S", t, e, n, r)
        },
        curveQ: function (t, e, n, r, i) {
            return i = o(t) ? e : i, this._coords(i ? "q" : "Q", t, e, n, r)
        },
        smoothQ: function (t, e, n) {
            return n = o(t) ? e : n, this._coords(n ? "t" : "T", t, e)
        },
        _coords: function (t, e, n, r, i, s, a) {
            if (o(e))
                for (var h = 0; h < e.length; h++) {
                    var d = e[h];
                    this._path += (0 == h ? t : " ") + d[0] + "," + d[1] + (d.length < 4 ? "" : " " + d[2] + "," + d[3] + (d.length < 6 ? "" : " " + d[4] + "," + d[5]))
                } else this._path += t + e + "," + n + (null == r ? "" : " " + r + "," + i + (null == s ? "" : " " + s + "," + a));
            return this
        },
        arc: function (t, e, n, r, i, s, a, h) {
            if (h = o(t) ? e : h, this._path += h ? "a" : "A", o(t))
                for (var d = 0; d < t.length; d++) {
                    var l = t[d];
                    this._path += (0 == d ? "" : " ") + l[0] + "," + l[1] + " " + l[2] + " " + (l[3] ? "1" : "0") + "," + (l[4] ? "1" : "0") + " " + l[5] + "," + l[6]
                } else this._path += t + "," + e + " " + n + " " + (r ? "1" : "0") + "," + (i ? "1" : "0") + " " + s + "," + a;
            return this
        },
        close: function () {
            return this._path += "z", this
        },
        path: function () {
            return this._path
        }
    }), i.prototype.moveTo = i.prototype.move, i.prototype.lineTo = i.prototype.line, i.prototype.horizTo = i.prototype.horiz, i.prototype.vertTo = i.prototype.vert, i.prototype.curveCTo = i.prototype.curveC, i.prototype.smoothCTo = i.prototype.smoothC, i.prototype.curveQTo = i.prototype.curveQ, i.prototype.smoothQTo = i.prototype.smoothQ, i.prototype.arcTo = i.prototype.arc, t.extend(s.prototype, {
        reset: function () {
            return this._parts = [], this
        },
        string: function (t) {
            return this._parts[this._parts.length] = ["text", t], this
        },
        span: function (t, e) {
            return this._parts[this._parts.length] = ["tspan", t, e], this
        },
        ref: function (t, e) {
            return this._parts[this._parts.length] = ["tref", t, e], this
        },
        path: function (e, n, r) {
            return this._parts[this._parts.length] = ["textpath", n, t.extend({
                href: e
            }, r || {})], this
        }
    }), t.fn.svg = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return "string" == typeof e && "get" == e ? t.svg["_" + e + "SVG"].apply(t.svg, [this[0]].concat(n)) : this.each((function () {
            "string" == typeof e ? t.svg["_" + e + "SVG"].apply(t.svg, [this].concat(n)) : t.svg._attachSVG(this, e || {})
        }))
    }, t.svg = new e
}(jQuery);
//# sourceMappingURL=js/index.4ea5409e.js.map