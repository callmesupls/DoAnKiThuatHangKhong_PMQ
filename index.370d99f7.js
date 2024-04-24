$(document).ready((function() {
    $.fx.speeds._default = 500, $((function() {
        $("#dialog_text div, #switch_buttons, #master_buttons, #breaker_buttons").dialog({
            autoOpen: !1,
            show: "fade",
            hide: "fade"
        }), $("#switch_buttons, #master_buttons, #breaker_buttons").dialog({
            resizable: !1
        }), $("#header_master").click((function() {
            0 == $("#master_buttons").dialog("isOpen") ? $("#master_buttons").dialog("open") : $("#master_buttons").dialog("close")
        })), $("#master_buttons").dialog({
            title: "Master Switches",
            height: 223,
            width: 181,
            position: {
                my: "right top",
                at: "center bottom",
                of: $("#header_master")
            }
        }), $("#header_switches").click((function() {
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
        }), $("#header_breaker").click((function() {
            0 == $("#breaker_buttons").dialog("isOpen") ? $("#breaker_buttons").dialog("open") : $("#breaker_buttons").dialog("close")
        })), $("#breaker_buttons").dialog({
            title: "Circuit Breakers",
            height: 200,
            width: 565,
            position: {
                my: "right top",
                at: "center bottom",
                of: $("#header_breaker")
            }
        });
        var t = $(window).height();
        $(window).width();
        t > 830 && ($("#switch_buttons, #master_buttons, #breaker_buttons").dialog({
            autoOpen: !0,
            dialogClass: "buttonBoxes"
        }), $("#master_buttons").dialog({
            position: {
                my: "left top",
                at: "left bottom",
                of: $("#main_svg_wrapper"),
                offset: "0 10px"
            }
        }), $("#switch_buttons").dialog({
            position: {
                my: "left top",
                at: "left bottom",
                of: $("#main_svg_wrapper"),
                offset: "800px 10px"
            }
        }), $("#breaker_buttons").dialog({
            position: {
                my: "left top",
                at: "left bottom",
                of: $("#main_svg_wrapper"),
                offset: "208px 10px"
            }
        })), $(window).on("resize", (function() {
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
//# sourceMappingURL=index.370d99f7.js.map