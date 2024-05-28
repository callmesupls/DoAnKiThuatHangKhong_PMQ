// File này để thêm hỗ trợ cảm ứng cho thư viện jQuery UI. Đoạn mã này sẽ kích hoạt các sự kiện chuột tương ứng với các sự kiện cảm ứng tương ứng, giúp tương thích với các thiết bị cảm ứng như điện thoại di động hoặc máy tính bảng.
// File này để tương tác với người dùng, bao gồm việc hiển thị thông báo, hướng dẫn sử dụng, hoặc thực hiện các thao tác dựa trên lựa chọn của người dùng.
! function (o) {
    // Kiểm tra xem hỗ trợ cảm ứng không
    if (o.support.touch = "ontouchend" in document, o.support.touch) {
        var t, e = o.ui.mouse.prototype, // Lấy nguyên mẫu chuột từ jQuery UI
            n = e._mouseInit; // Lưu trữ phương thức khởi tạo chuột gốc
        e._touchStart = function (o) { // Định nghĩa phương thức _touchStart
            // Nếu không có cảm ứng nào khác đang diễn ra và chuột đã được nắm bắt
            // (được kiểm tra bằng phương thức _mouseCapture), thì thư viện sẽ kích hoạt các sự kiện chuột tương ứng: 'mouseover', 'mousemove', và 'mousedown'
            !t && this._mouseCapture(o.originalEvent.changedTouches[0]) && (t = !0, this._touchMoved = !1, u(o, "mouseover"), u(o, "mousemove"), u(o, "mousedown"))
        }, e._touchMove = function (o) { // Định nghĩa phương thức _touchMove
            // Nếu có một cảm ứng đang diễn ra, thư viện sẽ kích hoạt sự kiện chuột 'mousemove'
            t && (this._touchMoved = !0, u(o, "mousemove"))
        }, e._touchEnd = function (o) { // Định nghĩa phương thức _touchEnd
            // Nếu có một cảm ứng đang diễn ra, thư viện sẽ kích hoạt các sự kiện chuột 'mouseup' và 'mouseout'
            // Nếu không có cảm ứng nào di chuyển từ khi cảm ứng bắt đầu, thư viện cũng sẽ kích hoạt sự kiện chuột 'click'
            t && (u(o, "mouseup"), u(o, "mouseout"), this._touchMoved || u(o, "click"), t = !1)
        }, e._mouseInit = function () { // Ghi đè phương thức khởi tạo chuột gốc
            // Thêm các trình xử lý sự kiện cảm ứng vào phần tử khi phần tử được khởi tạo
            var t = this;
            t.element.bind("touchstart", o.proxy(t, "_touchStart")).bind("touchmove", o.proxy(t, "_touchMove")).bind("touchend", o.proxy(t, "_touchEnd")), n.call(t)
        }
    }

    function u(o, t) { // Hàm trợ giúp để kích hoạt sự kiện chuột tương ứng với sự kiện cảm ứng
        // Nếu không có nhiều hơn một cảm ứng đang diễn ra
        if (!(o.originalEvent.touches.length > 1)) {
            o.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
            var e = o.originalEvent.changedTouches[0], // Lấy cảm ứng thay đổi đầu tiên
                n = document.createEvent("MouseEvents");
            // Khởi tạo sự kiện chuột với các thông tin từ sự kiện cảm ứng
            n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), o.target.dispatchEvent(n)
        }
    }
}(jQuery);
//# sourceMappingURL=js/index.2d2a66bd.js.map