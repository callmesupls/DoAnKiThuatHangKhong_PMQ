// File này có tác dụng xử lý vị trí của các phần tử trên trang web
// File này có thể alf chức năng phụ trợ, bao gồm việc tải dữ liệu từ máy chủ, xử lý lỗi, hoặc cập nhật dữ liệu realtime từ máy bay

! function(t) {
    t.ui = t.ui || {}; // Đảm bảo rằng t.ui được khởi tạo
    var e = /left|center|right/, // Biểu thức chính quy để kiểm tra các giá trị 'left', 'center', 'right'
        o = "center", // Giá trị mặc định cho vị trí ngang
        i = /top|center|bottom/, // Biểu thức chính quy để kiểm tra các giá trị 'top', 'center', 'bottom'
        f = "center", // Giá trị mặc định cho vị trí dọc
        n = t.fn.position; // Lưu trữ hàm position gốc của jQuery
    if (t.fn.position = function(s) {
            if (!s || !s.of) return n.apply(this, arguments); // Nếu không có đối số 'of', gọi hàm position gốc
            s = t.extend({}, s); // Sao chép đối số 's' để không ảnh hưởng đến đối số gốc
            var l, r, a, h = t(s.of), // Lấy phần tử mục tiêu từ đối số 'of'
                c = (s.collision || "flip").split(" "), // Lấy chế độ xử lý va chạm từ đối số 'collision'
                p = s.offset ? s.offset.split(" ") : [0, 0]; // Lấy giá trị offset từ đối số 'offset'
            // Tính toán kích thước và vị trí của phần tử mục tiêu dựa trên đối số 'of'
            switch (9 === s.of.nodeType ? (l = h.width(), r = h.height(), a = {
                top: 0, // Nếu 'of' là cửa sổ, thiết lập vị trí top và left là 0
                left: 0
            }) : s.of.scrollTo && s.of.document ? (l = h.width(), r = h.height(), a = { // Nếu 'of' là một tài liệu
                top: h.scrollTop(), // Lấy vị trí cuộn dọc và ngang của tài liệu
                left: h.scrollLeft()
            }) : s.of.preventDefault ? (s.at = "left top", l = r = 0, a = { // Nếu 'of' là một sự kiện
                top: s.of.pageY, // Lấy vị trí top và left của sự kiện
                left: s.of.pageX
            }) : (l = h.outerWidth(), r = h.outerHeight(), a = h.offset()), t.each(["my", "at"], (function() { // Duyệt qua mảng ['my', 'at']
                var t = (s[this] || "").split(" "); // Tách chuỗi thành mảng
                // Nếu mảng chỉ có 1 phần tử, thêm giá trị mặc định vào mảng
                (t = 1 == t.length ? e.test(t[0]) ? t.concat([f]) : i.test(t[0]) ? [o].concat(t) : [o, f] : t)[0] = e.test(t[0]) ? t[0] : o, t[1] = i.test(t[1]) ? t[1] : f, s[this] = t
            })), 1 == c.length && (c[1] = c[0]), p[0] = parseInt(p[0], 10) || 0, 1 == p.length && (p[1] = p[0]), p[1] = parseInt(p[1], 10) || 0, s.at[0]) {
                // Nếu giá trị 'at' theo chiều ngang là 'center', thiết lập vị trí left của phần tử mục tiêu
                case "right":
                    a.left += l;
                    break;
                case o:
                    a.left += l / 2
            }
            // Nếu giá trị 'at' theo chiều dọc là 'center', thiết lập vị trí top của phần tử mục tiêu
            switch (s.at[1]) {
                case "bottom":
                    a.top += r;
                    break;
                case f:
                    a.top += r / 2
            }
            // Duyệt qua mảng ['left', 'top'] để xử lý vị trí của phần tử
            return a.left += p[0], a.top += p[1], this.each((function() {
                // Xử lý va chạm
                var e = t(this),
                    i = e.outerWidth(),
                    n = e.outerHeight(),
                    h = t.extend({}, a);
                // Xử lý va chạm
                switch (s.my[0]) {
                    // Nếu giá trị 'my' theo chiều ngang là 'right', giảm vị trí left của phần tử
                    case "right":
                        h.left -= i;
                        break;
                    case o:
                        h.left -= i / 2
                }
                // Xử lý va chạm
                switch (s.my[1]) {
                    // Nếu giá trị 'my' theo chiều dọc là 'bottom', giảm vị trí top của phần tử
                    case "bottom":
                        h.top -= n;
                        break;
                    case f:
                        h.top -= n / 2
                }
                // Xử lý va chạm
                t.each(["left", "top"], (function(e, o) {
                    // Nếu có hàm xử lý va chạm, gọi hàm đó, ngược lại, gọi hàm mặc định
                    t.ui.position[c[e]] && t.ui.position[c[e]][o](h, {
                        targetWidth: l,
                        targetHeight: r,
                        elemWidth: i,
                        elemHeight: n,
                        offset: p,
                        my: s.my,
                        at: s.at
                    })
                })), 
                // Xử lý va chạm
                t.fn.bgiframe && e.bgiframe(), e.offset(t.extend(h, {
                    using: s.using
                }))
            }))
        }, 
        // Xử lý va chạm
        t.ui.position = {
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
//# sourceMappingURL=js/index.459480a4.js.map