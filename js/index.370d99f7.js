//File này được sử để tạo các hộp thoại cho các thiết bị trong mạng lưới điện
//Có thể dùng để quản lý các tình trạng sự cố hoặc cảnh báo, như xử lý các cảnh báo về điện áp thấp hoặc nhiệt độ quá cao.

$(document).ready((function() {
    $.fx.speeds._default = 500, // Đặt tốc độ mặc định cho các hiệu ứng jQuery là 500ms
    $((function() { 
        // Tạo các hộp thoại với các ID tương ứng, không tự động mở và có hiệu ứng fade khi hiện/ẩn
        $("#dialog_text div, #switch_buttons, #master_buttons, #breaker_buttons").dialog({
            autoOpen: !1,
            show: "fade",
            hide: "fade"
        }), 

        // Các hộp thoại này không thể thay đổi kích thước
        $("#switch_buttons, #master_buttons, #breaker_buttons").dialog({
            resizable: !1
        }), 
        // Khi nhấp vào #header_master, kiểm tra nếu #master_buttons đang mở thì đóng, ngược lại thì mở
        $("#header_master").click((function() {
            0 == $("#master_buttons").dialog("isOpen") ? $("#master_buttons").dialog("open") : $("#master_buttons").dialog("close")
        })), 
        // Thiết lập tiêu đề, kích thước và vị trí cho #master_buttons
        $("#master_buttons").dialog({
            title: "Master Switches",
            height: 223,
            width: 181,
            position: {
                my: "right top",
                at: "center bottom",
                of: $("#header_master")
            }
        }), 
        // Tương tự như trên cho #switch_buttons và #breaker_buttons
        $("#header_switches").click((function() {
            0 == $("#switch_buttons").dialog("isOpen") ? $("#switch_buttons").dialog("open") : $("#switch_buttons").dialog("close")
        })), $("#switch_buttons").dialog({
            title: "Switches",
            height: 200,
            width: 214,
            position: {
                my: "right top",
                at: "center bottom",
                of: $("#header_switches")
            }
        }), 
        
        $("#header_breaker").click((function() {
            0 == $("#breaker_buttons").dialog("isOpen") ? $("#breaker_buttons").dialog("open") : $("#breaker_buttons").dialog("close")
        })), 
        
        $("#breaker_buttons").dialog({
            title: "Circuit Breakers",
            height: 200,
            width: 565,
            position: {
                my: "right top",
                at: "center bottom",
                of: $("#header_breaker")
            }
        });

        var t = $(window).height(); // Lấy chiều cao của cửa sổ
        
        // Nếu chiều cao của cửa sổ lớn hơn 830px, mở các hộp thoại #switch_buttons, #master_buttons, #breaker_buttons và thiết lập vị trí
        $(window).width();
        t > 830 && ($("#switch_buttons, #master_buttons, #breaker_buttons").dialog({
            autoOpen: !0,
            dialogClass: "buttonBoxes"
        }), 
        
        $("#master_buttons").dialog({
            position: {
                my: "left top",
                at: "left bottom",
                of: $("#main_svg_wrapper"),
                offset: "0 10px"
            }
        }), 
        
        $("#switch_buttons").dialog({
            position: {
                my: "left top",
                at: "left bottom",
                of: $("#main_svg_wrapper"),
                offset: "800px 10px"
            }
        }), 
        
        $("#breaker_buttons").dialog({
            position: {
                my: "left top",
                at: "left bottom",
                of: $("#main_svg_wrapper"),
                offset: "208px 10px"
            }
        })), 
        
        // Khi cửa sổ thay đổi kích thước, kiểm tra nếu chiều cao của cửa sổ lớn hơn 830px, mở các hộp thoại #switch_buttons, #master_buttons, #breaker_buttons và thiết lập vị trí
        $(window).on("resize", (function() {
            $(window).height() > 830 && ($("#switch_buttons, #master_buttons, #breaker_buttons").dialog("open"), $("#master_buttons").dialog({
                position: {
                    my: "left top",
                    at: "left bottom",
                    of: $("#main_svg_wrapper"),
                    offset: "0 8px"
                }
            }), $("#switch_buttons").dialog({
                position: {
                    my: "left top",
                    at: "left bottom",
                    of: $("#main_svg_wrapper"),
                    offset: "800px 8px"
                }
            }), $("#breaker_buttons").dialog({
                position: {
                    my: "left top",
                    at: "left bottom",
                    of: $("#main_svg_wrapper"),
                    offset: "208px 8px"
                }
            }))
        }))
    }))
}));
//# sourceMappingURL=js/index.370d99f7.js.map