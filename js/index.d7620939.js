//File này để thực hiện các phép tính hoặc tính toán liên quan đến hệ thống điện trên máy bay.

$(document).ready((function() {
    if (0 == (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect)) throw $("#svgSupport").css("display", "block"), $("#header").css("display", "none"), $("#mainwrapper").css("display", "none"), Error("No Svg Support Found");
    $("#svgwrapper").load("images/ses.svg", (function() {
        function e(e, a) {
            $(e).each((function(e, s) {
                $(s).addClass(a)
            }))
        }

        function a(e, a) {
            $(e).each((function(e, s) {
                $(s).removeClass(a)
            }))
        }

        function s(e) {
            $("#sound_icon_x").hasClass("sound_on") && document.getElementById(e).cloneNode(!0).play()
        }

        function _(e, a) {
            $(a).hasClass("isOpen") ? ($(e).attr("y2", parseInt($(e).attr("y2")) + 8), $(a).removeClass("isOpen no_power").addClass("isClosed")) : ($(e).attr("y2", parseInt($(e).attr("y2")) - 8), $(a).removeClass("isClosed").addClass("isOpen no_power"))
        }

        function t(e, a, _) {
            $(a).hasClass("isOpen") && $(_).hasClass("isClosed") ? ($(e).attr("y2", parseInt($(e).attr("y2")) + 8), $(a).removeClass("isOpen no_power").addClass("isClosed"), s("#avionics_bus1_switch" == a || "#avionics_bus2_switch" == a ? "audio_master_off" : "audio_switch_closed")) : $(a).hasClass("isOpen") && $(_).hasClass("isOpen") ? ($(e).attr("y2", parseInt($(e).attr("y2")) + 8), $(a).removeClass("isOpen").addClass("isClosed no_power"), s("#avionics_bus1_switch" == a || "#avionics_bus2_switch" == a ? "audio_master_off" : "audio_switch_closed")) : ($(e).attr("y2", parseInt($(e).attr("y2")) - 8), $(a).removeClass("isClosed").addClass("isOpen no_power"), s("#avionics_bus1_switch" == a || "#avionics_bus2_switch" == a ? "audio_master_on" : "audio_switch_open"))
        }

        function r(e, a, s) {
            if ($(s).hasClass("isOpen")) {
                var _ = 4;
                $(s).removeClass("isOpen").addClass("isClosed")
            } else _ = -4, $(s).removeClass("isClosed").addClass("isOpen");
            $(e).attr({
                y1: parseInt($(e).attr("y1")) + _,
                y2: parseInt($(e).attr("y2")) + _
            }), $(a).attr("y2", parseInt($(a).attr("y2")) + _)
        }

        function n(e, a, _, t) {
            $(t).hasClass("isClosed") ? ($(t).removeClass("isClosed").addClass("isOpen"), s("audio_breaker_open"), t = -3) : ($(t).removeClass("isOpen").addClass("isClosed"), s("audio_breaker_closed"), t = 3), $(e).attr({
                y1: parseInt($(e).attr("y1")) + t,
                y2: parseInt($(e).attr("y2")) + t
            }), $(a).attr({
                y1: parseInt($(a).attr("y1")) + t,
                y2: parseInt($(a).attr("y2")) + t
            }), e = /(M\s?\d*\.\d*)([\s,])(\d\d\d*)\./, a = parseInt(e.exec($(_).attr("d"))[3]) + t, $(_).attr("d", $(_).attr("d").replace(e, "$1$2" + a + "."))
        }

        function l(e, a, s) {
            $(e).toggleClass($(e).attr("class").split(" ")[0] + "_open"), $(e).hasClass("isClosed") ? ($(e).removeClass("isClosed").addClass("isOpen"), $(a).addClass("no_power"), $(s).addClass("no_power")) : $(s).hasClass("isOpen") ? ($(e).removeClass("isOpen").addClass("isClosed"), $(a).removeClass("no_power")) : ($(e).removeClass("isOpen").addClass("isClosed"), $(a).removeClass("no_power"), $(s).removeClass("no_power"))
        }

        function o(e, a, s, _) {
            $(e).toggleClass($(e).attr("class").split(" ")[0] + "_open"), $(e).hasClass("isClosed") ? ($(e).removeClass("isClosed").addClass("isOpen"), $(a).addClass("no_power")) : $(s).hasClass("isOpen") ? ($(e).removeClass("isOpen").addClass("isClosed"), $(a).addClass("no_power")) : $(s).hasClass("isClosed") && $(_).hasClass("isOpen") ? $(e).removeClass("isOpen").addClass("isClosed") : $(s).hasClass("isClosed") && $(_).hasClass("isClosed") && ($(e).removeClass("isOpen").addClass("isClosed"), $(a).removeClass("no_power"), $(s).removeClass("no_power"))
        }

        function i(a) {
            "on" == q && (e(a, "external_power"), e(y, "external_power")), e(a, "battery_power"), k = "on", "on" == q && r("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay"), r("#battery-relay line:last", "#battery-relay line:eq(1)", "#battery-relay"), _("#battery_master g.switch line:eq(0)", "#battery_master g.switch"), $("#master_battery_switch").removeClass("master_switch_off").addClass("master_switch_on"), p()
        }

        function d(s) {
            "on" == q && (a(s, "external_power"), e(y, "external_power"), a(y, "external_power"), $("#external_power g:first, #ext_pwr_relay_second_ciruit").addClass("external_power")), a(s, "battery_power"), e("#battery", "battery_power"), k = "off", "on" == q && r("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay"), r("#battery-relay line:last", "#battery-relay line:eq(1)", "#battery-relay"), _("#battery_master g.switch line:eq(0)", "#battery_master g.switch"), $("#master_battery_switch").removeClass("master_switch_on").addClass("master_switch_off"), p()
        }

        function h(e) {
            "on" == q && "on" == k || "off" == q && "on" == k ? (a(e, "alternator_power"), a(y, "alternator_power")) : a(e, "alternator_power"), x = "off", p()
        }

        function c() {
            $("#master_alternator_switch").addClass("master_switch_on").removeClass("master_switch_off"), _("#alt_master line", "#alt_master g"), s("audio_master_on")
        }

        function b() {
            $("#master_alternator_switch").removeClass("master_switch_on").addClass("master_switch_off"), _("#alt_master line", "#alt_master g"), s("audio_master_off")
        }

        function p() {
            "arm" == O && $("g#handle_ess_stdby_batt").hasClass("isClosed") ? (a(C, "battery_power"), a(u, "battery_power"), a(C, "alternator_power"), a(u, "alternator_power"), a(C, "external_power"), a(u, "external_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector").removeClass("standby_power"), $("#standby_batt_controller_bottom").removeClass("no_power"), "off" == k && "off" == x && ("off" == q ? (e(C, "standby_power"), e(u, "standby_power"), $("#ess_bus g").removeClass("feeder_open")) : (e(C, "standby_power"), e(u, "standby_power"))), "on" == k && ("off" == x ? "off" == q ? (e(C, "battery_power"), e(u, "battery_power")) : (e(C, "external_power"), e(u, "external_power")) : (e(C, "alternator_power"), e(u, "alternator_power"))), $("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed") || !$("g#handle_ess_stdby_batt").hasClass("isClosed") || (a(C, "battery_power"), a(u, "battery_power"), a(C, "alternator_power"), a(u, "alternator_power"), a(C, "external_power"), a(u, "external_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector").removeClass("standby_power"), e(C, "standby_power"), e(u, "standby_power"), $("#ess_bus g").removeClass("feeder_open"), $("#standby_batt_controller_bottom").removeClass("no_power"))) : "arm" == O && $("g#handle_ess_stdby_batt").hasClass("isOpen") && (a(C, "battery_power"), a(C, "alternator_power"), a(C, "external_power"), $("#ess_to_stby_wire").removeClass("standby_power"), $("#stby_batt_arm_breaker_connector").removeClass("standby_power"), e(C, "standby_power"), $("#ess_to_stby_wire").addClass("standby_power"), $("#stby_batt_arm_breaker_connector").addClass("standby_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector, #stby_batt_switch_bottom").removeClass("standby_power"), $("#standby_batt_controller_bottom").addClass("no_power"), a(u, "standby_power")), ("arm" == O && $("g#handle_ess_stdby_batt").hasClass("isOpen") && $("#feeder_b").hasClass("isClosed") && "on" == k || "arm" == O && $("g#handle_ess_stdby_batt").hasClass("isOpen") && $("#feeder_a").hasClass("isClosed") && "on" == k) && ($("#standby_batt_controller_bottom").addClass("no_power"), $("#ess_bus g").addClass($("#battery").attr("class"))), "standby_power" != $("#standby_batt_controller").attr("class") ? m() : w(), $("#warn_breaker").hasClass("isOpen") && "standby_power" != $("#standby_batt_controller").attr("class") && w(), $("#handle_ess_stdby_batt").hasClass("isOpen") && "standby_power" == $("#standby_batt_controller").attr("class") && m(), $("#feeder_a").hasClass("isOpen") && $("#feeder_b").hasClass("isOpen") && "on" == k ? $("#ess_diode_right_top, #ess_diode_right_bottom").addClass("feeder_open") : $("#feeder_a").hasClass("isClosed") && ($("#feeder_b").hasClass("isClosed") || "on" != k) || $("#ess_diode_right_top, #ess_diode_right_bottom").removeClass("feeder_open"), "arm" == O && $("#handle_ess_stdby_batt").hasClass("isClosed") && $("#ess_diode_right_top, #ess_diode_right_bottom").removeClass("feeder_open"), "off" == O && $("#feeder_a").hasClass("isOpen") && $("#feeder_b").hasClass("isOpen") && $("#ess_diode_right_top, #ess_diode_right_bottom").addClass("feeder_open")
        }

        function g() {
            "on" == x && ($("#alt_master g").hasClass("isOpen") ? (h(v), r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : h(v))
        }

        function m() {
            $("#on_off_control line:eq(0)").attr({
                x1: 917.08,
                x2: 917.08
            }), $("#on_off_control line:eq(1)").attr({
                x1: 917.08,
                x2: 899.275
            }), $("#on_off_control line:eq(0), #on_off_control line:eq(1)").addClass("no_power")
        }

        function w() {
            $("#on_off_control line:eq(0)").attr({
                x1: 912.025,
                x2: 912.025
            }), $("#on_off_control line:eq(1)").attr({
                x1: 912.025,
                x2: 894.299
            }), $("#on_off_control line:eq(0), #on_off_control line:eq(1)").removeClass("no_power")
        }
        $("#sparkplug").load("images/sparkplug.svg", (function() {
            $("#spark").css("display", "none")
        })), $("#epuIconLeft").load("images/epuIconLeft.svg"), $("#epuIconRight").load("images/epuIconRight.svg"), $("#sound_wrapper").load("images/soundIcon.svg", (function() {
            $("#sound_icon_x").addClass("sound_on")
        }));
        var f = "#battery;#battery-relay line:eq(2);#battery_master;#sensewire;#relay_line;#eis_left;#elec_bus_bottom_bus;#elec_bus_top_bus;#x-feed-bus;#ess_diode_right_top;#ess_diode_right_bottom;#ess_bus g;#elec_bus_bottom g g:even;#elec_bus_top g g:even; #warn; #alt_field; #alt_master polyline; #elec_bus_top g.breaker;#avn_top g.breaker:first;#avn_top g;#avn_bottom g.breaker:first;#avn_bottom g;g.switch;#alt_master_wire;#power_in;#alternator_output;#alternator_relay line:eq(2);#alternator_relay_ground;#alternator_field;#alternator_ground;#ess_diode_bottom;#ess_diode_top;#xfeed_diode_top;#xfeed_diode_bottom".split(";"),
            u = ["#ess_bus g.breaker", "#handle_ess_bus", "#ess_diode_right_top", "#ess_diode_right_bottom"],
            C = ["#standby_batt_controller", "#standby_battery", "#eis_right", "#stby_batt_diode"],
            v = "#alternator g;#alternator_output;#alternator_relay line:eq(2);#alternator_relay_ground;#eis_left;#alt_master;#alt_master_wire;#relay_line;#sensewire;#battery; #elec_bus_bottom g g:even; #elec_bus_top g g:even; #battery_master; #x-feed-bus; #battery-relay line:eq(2); #warn; #alt_field; #alt_master polyline; #elec_bus_top g.breaker; #avn_top g.breaker:first;#avn_top g g; #avn_bottom g.breaker:first;#avn_bottom g g;#ess_diode_right_top;#ess_diode_right_bottom;#ess_bus g;#ess_bus g line.ess_diode_right; #elec_bus_bottom_bus;#elec_bus_top_bus;g.switch;#power_in;#ess_diode_bottom;#ess_diode_top;#xfeed_diode_top;#xfeed_diode_bottom".split(";"),
            y = ["#external_power g:first", "#ext_pwr_relay_second_ciruit", "#ext_power_relay_line", "#acu_ground"],
            k = "off",
            x = "off",
            q = "off",
            O = "off";
        $("#alt_field_breaker, #warn_breaker, #handle_fuel_pump_breaker, #handle_bcn_lt_breaker, #handle_land_lt_breaker, #handle_cabin_lts_pwr_breaker, #handle_flaps, #handle_avn_1_breaker, #handle_avn_1_pfd, #handle_avn_1_adc_ahrs, #handle_avn_1_nav_1_eng, #handle_ess_pfd, #handle_ess_adc_ahrs, #handle_ess_nav_1_eng, #handle_ess_comm_1, #handle_ess_stdby_ind_lts, #handle_ess_stdby_batt, #handle_pitot_heat_breaker, #handle_nav_lts_breaker, #handle_taxi_lt_breaker, #handle_strobe_lts_breaker, #handle_panel_lts_breaker, #handle_avn_2_breaker, #handle_avn_2_mfd, #handle_avn_2_xpndr, #handle_avn_2_nav_2, #handle_avn_2_comm_2, #handle_avn_2_audio, #feeder_a, #feeder_b").addClass("breaker isClosed"), $("g#battery_master_switch,g#alt_master g, #avionics_bus1_switch, #avionics_bus2_switch, #handle_fuel_pump_switch,#handle_bcn_lt_switch, #handle_land_lt_switch, #handle_cabin_lts_pwr_switch, #handle_pitot_heat_switch,#handle_nav_lts_switch, #handle_taxi_lt_switch, #handle_strobe_lts_switch, #handle_panel_lts_switch").addClass("switch no_power isOpen"), $("#testled, #stby_batt_diode, #xfeed_diode_top, #xfeed_diode_bottom, #ess_diode_top, #ess_diode_bottom").addClass("diode"), $("#breaker_buttons div, #switch_buttons div, #switch_buttons div").css("display", "block"), $("#avn_top g g, #avn_bottom g g").addClass("no_power"), $(".breaker5,.breaker10,.breaker15,.breaker20").addClass("isClosed"), $("#battery-relay, #external-power-relay, #alternator_relay").addClass("isOpen"), $("#battery").addClass("battery_power"), $("#standby_battery").addClass("standby_power"), $("#status_engine span").addClass("engine_status_shutdown"), $("#status_epu span").addClass("epu_disconnected"), $("g#rollover rect").each((function() {
            var e = $(this).attr("width"),
                a = $(this).attr("height"),
                s = $(this).attr("id") + "_hitbox",
                _ = $(this).attr("y"),
                t = $(this).attr("x");
            $("#hitboxes").append('<div id="' + s + '"style="height:' + a + "px; width:" + e + "px; top:" + _ + "px; left:" + t + 'px;">')
        }));
        var I = [];
        $("g#rollover rect, #rollover_pdm").on("click", (function() {
            $(this).attr("id").slice(9);
            var e = "#dialog_" + $(this).attr("id").slice(9),
                a = "#" + $(this).attr("id") + "_hitbox",
                s = "left",
                _ = "top",
                t = $(e).attr("data-title");
            "#rollover_feeder_b_hitbox" != a && "#rollover_feeder_a_hitbox" != a && (200 < $(this).attr("y") && (_ = "bottom"), 200 < $(this).attr("x") && (s = "right"), s = s + " " + _, $(e).dialog({
                title: t,
                height: 220,
                width: 250,
                position: {
                    my: s,
                    at: "center center",
                    of: $(a)
                }
            }), I.push(e), 0 == $(e).dialog("isOpen") ? ($(I[0]).dialog("close"), $(e).dialog("open")) : $(e).dialog("close"), 1 < I.length && I.shift())
        })), $("#sound_wrapper").on("click", (function() {
            $("#sound_icon_x").toggleClass("sound_on")
        })), $("#header_epu").toggle((function() {
            "on" == k && "off" == x ? (e(f, "external_power"), e(y, "external_power")) : "on" == x && (e(f, "external_power"), e(y, "external_power"), e(y, "alternator_power")), $("#external_power g:first, #ext_pwr_relay_second_ciruit").addClass("external_power"), q = "on", $("#master_battery_switch").hasClass("master_switch_on") && r("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay"), $("#epuIconRight").css("left", "0px"), $("#status_epu span").removeClass("epu_disconnected").addClass("epu_connected").text("Connected"), p()
        }), (function() {
            "on" == k && "on" == q ? (a(f, "external_power"), a(y, "external_power")) : (a(y, "external_power"), e("#battery", "battery_power")), $("#external_power g:first, #ext_pwr_relay_second_ciruit").removeClass("external_power"), q = "off", $("#master_battery_switch").hasClass("master_switch_on") && r("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay"), $("#external_power g, #external-power-relay line, #acu_ground").removeClass("alternator_power"), $("#status_epu span").addClass("epu_disconnected").removeClass("epu_connected").text("Disconnected"), $("#epuIconRight").css("left", "6px"), p()
        })), $("#header_engine").on("click", (function() {
            $("#status_engine span").hasClass("engine_status_shutdown") ? ($("#status_engine span").text("Running").removeClass("engine_status_shutdown").addClass("engine_status_running"), $("#spark").css("display", "inline")) : ($("#status_engine span").text("Shutdown").removeClass("engine_status_running").addClass("engine_status_shutdown"), $("#spark").css("display", "none"))
        })), $("#master_battery_switch").on("click", (function() {
            $("#master_battery_switch").hasClass("master_switch_off") ? (i(f), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), s("audio_master_on")) : ($("#master_battery_switch").hasClass("master_switch_on") && $("#master_alternator_switch").hasClass("master_switch_on") ? (d(f), a(y, "alternator_power"), b(), $("#alternator_relay").hasClass("isClosed") && r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : d(f), s("audio_master_off"))
        })), $("#master_alternator_switch").on("click", (function() {
            $("#master_alternator_switch").hasClass("master_switch_off") && $("#master_battery_switch").hasClass("master_switch_off") && $("#alt_field g").hasClass("isOpen") ? (c(), i(f), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), $("#alt_master g").addClass("no_power")) : $("#master_alternator_switch").hasClass("master_switch_off") && $("#master_battery_switch").hasClass("master_switch_off") && $("#alt_field g").hasClass("isClosed") ? (c(), i(f), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"), r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : $("#master_alternator_switch").hasClass("master_switch_off") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isClosed") ? (c(), ($("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) && ($("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"), r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"))) : "on" == x ? (b(), h(v), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : $("#master_alternator_switch").hasClass("master_switch_on") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isClosed") ? (b(), ($("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) && ($("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"))) : $("#alt_master g").hasClass("isOpen") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isOpen") ? (c(), $("#alt_master_wire, #power_in, #alt_master g, #alternator_output").addClass("no_power"), $("#alternator_relay line:eq(2)").addClass("no_power")) : $("#alt_master g").hasClass("isClosed") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isOpen") && (b(), $("#alt_master_wire, #power_in, #alt_master g").addClass("no_power"))
        })), $("#master_avionics1_switch").on("click", (function() {
            $("#avionics_bus1_switch").hasClass("isOpen") ? ($("#master_avionics1_switch").addClass("avionics_switch_on").removeClass("avionics_switch_off"), t("#avionics_bus1_switch line", "#avionics_bus1_switch", "g#handle_avn_1_breaker"), $("g#handle_avn_1_breaker").hasClass("isClosed") ? $("#avionics_bus1_bus, #avn_top g g.isClosed").removeClass("no_power") : $("#avn_top_bus, #avn_top g g.isClosed").addClass("no_power")) : ($("#master_avionics1_switch").removeClass("avionics_switch_on").addClass("avionics_switch_off"), t("#avionics_bus1_switch line", "#avionics_bus1_switch", "g#handle_avn_1_breaker"), $("#avn_top g g").addClass("no_power"))
        })), $("#master_avionics2_switch").on("click", (function() {
            $("#avionics_bus2_switch").hasClass("isOpen") ? ($("#master_avionics2_switch").addClass("avionics_switch_on").removeClass("avionics_switch_off"), t("#avionics_bus2_switch line", "#avionics_bus2_switch", "g#handle_avn_2_breaker"), $("g#handle_avn_2_breaker").hasClass("isClosed") ? $("#avn_bottom_bus, #avn_bottom g g.isClosed").removeClass("no_power") : $("#avn_bottom_bus, #avn_bottom g g.isClosed").addClass("no_power")) : ($("#master_avionics2_switch").removeClass("avionics_switch_on").addClass("avionics_switch_off"), t("#avionics_bus2_switch line", "#avionics_bus2_switch", "g#handle_avn_2_breaker"), $("#avn_bottom g g").addClass("no_power"))
        })), $(".switch").on("click", (function() {
            $(this).toggleClass("switch_open")
        })), $("#switch_bcn_lt").on("click", (function() {
            t("#handle_bcn_lt_switch line:eq(1)", "g#handle_bcn_lt g.switch", "g#handle_bcn_lt g.breaker")
        })), $("#switch_land_lt").on("click", (function() {
            t("g#handle_land_lt_switch line:eq(1)", "g#handle_land_lt g.switch", "g#handle_land_lt g.breaker")
        })), $("#switch_taxi_lt").on("click", (function() {
            t("g#handle_taxi_lt g.switch line:eq(1)", "g#handle_taxi_lt g.switch", "g#handle_taxi_lt g.breaker")
        })), $("#switch_nav_lts").on("click", (function() {
            t("g#handle_nav_lts g.switch line:eq(1)", "g#handle_nav_lts g.switch", "g#handle_nav_lts g.breaker")
        })), $("#switch_strobe_lts").on("click", (function() {
            t("g#handle_strobe_lts g.switch line:eq(1)", "g#handle_strobe_lts g.switch", "g#handle_strobe_lts g.breaker")
        })), $("#switch_fuel_pump").on("click", (function() {
            t("g#handle_fuel_pump g.switch line:eq(1)", "g#handle_fuel_pump g.switch", "g#handle_fuel_pump g.breaker")
        })), $("#switch_pitot_heat").on("click", (function() {
            t("g#handle_pitot_heat g.switch line:eq(1)", "g#handle_pitot_heat g.switch", "g#handle_pitot_heat g.breaker")
        })), $("#switch_cabin_lts_pwr").on("click", (function() {
            t("g#handle_cabin_lts_pwr_switch line:eq(1)", "g#handle_cabin_lts_pwr g.switch", "g#handle_cabin_lts_pwr g.breaker")
        })), $("#breaker_x_feed_alt_field").on("click", (function() {
            n("#alt_field g line:eq(0)", "#alt_field g line:eq(1)", "#alt_field g path", "#alt_field g"), l("#breaker_x_feed_alt_field", "#alt_field", "#alt_field g"), $("#alt_field g.breaker").hasClass("isOpen") ? $("#alt_master g").hasClass("isClosed") && ($("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), g(), ($("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) && r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : $("#alt_master g").hasClass("isOpen") ? $("#alt_master g").addClass("no_power") : ($("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) && (r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"))
        })), $("#breaker_x_feed_warn").on("click", (function() {
            n("#warn g line:eq(0)", "#warn g line:eq(1)", "#warn g path", "#warn g"), l("#breaker_x_feed_warn", "#warn", "#warn g"), "arm" == O && w(), p()
        })), $("#breaker_fuel_pump").on("click", (function() {
            n("g#handle_fuel_pump g.breaker line:eq(0)", "g#handle_fuel_pump g.breaker line:eq(1)", "g#handle_fuel_pump g.breaker path", "g#handle_fuel_pump g.breaker"), l("#breaker_fuel_pump", "g#handle_fuel_pump g.breaker", "g#handle_fuel_pump g.switch")
        })), $("#breaker_bcn_lt").on("click", (function() {
            n("g#handle_bcn_lt g.breaker line:eq(0)", "g#handle_bcn_lt g.breaker line:eq(1)", "g#handle_bcn_lt g.breaker path", "g#handle_bcn_lt g.breaker"), l("#breaker_bcn_lt", "g#handle_bcn_lt g.breaker", "g#handle_bcn_lt g.switch")
        })), $("#breaker_land_lt").on("click", (function() {
            n("g#handle_land_lt g.breaker line:eq(0)", "g#handle_land_lt g.breaker line:eq(1)", "g#handle_land_lt g.breaker path", "g#handle_land_lt g.breaker"), l("#breaker_land_lt", "g#handle_land_lt g.breaker", "g#handle_land_lt g.switch")
        })), $("#breaker_cabin_lts_pwr").on("click", (function() {
            n("g#handle_cabin_lts_pwr g.breaker line:eq(0)", "g#handle_cabin_lts_pwr g.breaker line:eq(1)", "g#handle_cabin_lts_pwr g.breaker path", "g#handle_cabin_lts_pwr g.breaker"), l("#breaker_cabin_lts_pwr", "g#handle_cabin_lts_pwr g.breaker", "g#handle_cabin_lts_pwr g.switch")
        })), $("#breaker_flaps").on("click", (function() {
            n("g#handle_flaps line:eq(0)", "g#handle_flaps line:eq(1)", "g#handle_flaps path", "g#handle_flaps"), l("#breaker_flaps", "g#handle_flaps", "g#handle_flaps")
        })), $("#breaker_avn_1").on("click", (function() {
            n("g#handle_avn_1_breaker line:eq(0)", "g#handle_avn_1_breaker line:eq(1)", "g#handle_avn_1_breaker path", "g#handle_avn_1_breaker"), $("#breaker_avn_1").hasClass("isClosed") ? ($("#breaker_avn_1").addClass("breaker15_open isOpen").removeClass("isClosed"), $("g#handle_avn_1_breaker, #avionics_bus1_switch, #avn_top g g").addClass("no_power")) : $("#avionics_bus1_switch").hasClass("isClosed") ? ($("#breaker_avn_1").removeClass("breaker15_open isOpen").addClass("isClosed"), $("g#handle_avn_1_breaker, #avionics_bus1_switch, #avionics_bus1_bus, #avn_top g g.breaker.isClosed").removeClass("no_power")) : ($("#breaker_avn_1").removeClass("breaker15_open isOpen").addClass("isClosed"), $("g#handle_avn_1_breaker").removeClass("no_power"))
        })), $("#breaker_avn_2").on("click", (function() {
            n("g#handle_avn_2_breaker line:eq(0)", "g#handle_avn_2_breaker line:eq(1)", "g#handle_avn_2_breaker path", "g#handle_avn_2_breaker"), $("#breaker_avn_2").hasClass("isClosed") ? ($("#breaker_avn_2").removeClass("isClosed").addClass("breaker15_open isOpen"), $("g#handle_avn_2_breaker, #avionics_bus2_switch, #avn_bottom g g").addClass("no_power")) : $("#avionics_bus2_switch").hasClass("isClosed") ? ($("#breaker_avn_2").removeClass("breaker15_open isOpen").addClass("isClosed"), $("g#handle_avn_2_breaker, #avionics_bus2_switch, #avn_bottom_bus, #avn_bottom g g.breaker.isClosed").removeClass("no_power")) : ($("#breaker_avn_2").removeClass("breaker15_open isOpen").addClass("isClosed"), $("g#handle_avn_2_breaker").removeClass("no_power"))
        })), $("#breaker_pitot_heat").on("click", (function() {
            n("g#handle_pitot_heat g.breaker line:eq(0)", "g#handle_pitot_heat g.breaker line:eq(1)", "g#handle_pitot_heat g.breaker path", "g#handle_pitot_heat g.breaker"), l("#breaker_pitot_heat", "g#handle_pitot_heat g.breaker", "g#handle_pitot_heat g.switch")
        })), $("#breaker_nav_lts").on("click", (function() {
            n("#handle_nav_lts_breaker_line_h", "#handle_nav_lts_breaker_line_v", "#handle_nav_lts_breaker_arc", "#handle_nav_lts_breaker"), l("#breaker_nav_lts", "g#handle_nav_lts g.breaker", "g#handle_nav_lts g.switch")
        })), $("#breaker_taxi_lt").on("click", (function() {
            n("g#handle_taxi_lt g.breaker line:eq(0)", "g#handle_taxi_lt g.breaker line:eq(1)", "g#handle_taxi_lt g.breaker path", "g#handle_taxi_lt g.breaker"), l("#breaker_taxi_lt", "g#handle_taxi_lt g.breaker", "g#handle_taxi_lt g.switch")
        })), $("#breaker_strobe_lts").on("click", (function() {
            n("g#handle_strobe_lts g.breaker line:eq(0)", "g#handle_strobe_lts g.breaker line:eq(1)", "g#handle_strobe_lts g.breaker path", "g#handle_strobe_lts g.breaker"), l("#breaker_strobe_lts", "g#handle_strobe_lts g.breaker", "g#handle_strobe_lts g.switch")
        })), $("#breaker_panel_lts").on("click", (function() {
            n("g#handle_panel_lts g.breaker line:eq(0)", "g#handle_panel_lts g.breaker line:eq(1)", "g#handle_panel_lts g.breaker path", "g#handle_panel_lts g.breaker"), l("#breaker_panel_lts", "g#handle_panel_lts g.breaker", "g#handle_panel_lts g.switch")
        })), $("#breaker_ess_pfd").on("click", (function() {
            n("g#handle_ess_pfd line:eq(0)", "g#handle_ess_pfd line:eq(1)", "g#handle_ess_pfd path", "g#handle_ess_pfd"), l("#breaker_ess_pfd", "g#handle_ess_pfd", "g#handle_ess_pfd")
        })), $("#breaker_ess_adc_arhs").on("click", (function() {
            n("g#handle_ess_adc_ahrs line:eq(0)", "g#handle_ess_adc_ahrs line:eq(1)", "g#handle_ess_adc_ahrs path", "g#handle_ess_adc_ahrs"), l("#breaker_ess_adc_arhs", "g#handle_ess_adc_ahrs", "g#handle_ess_adc_ahrs")
        })), $("#breaker_ess_nav_1_eng").on("click", (function() {
            n("g#handle_ess_nav_1_eng line:eq(0)", "g#handle_ess_nav_1_eng line:eq(1)", "g#handle_ess_nav_1_eng path", "g#handle_ess_nav_1_eng"), l("#breaker_ess_nav_1_eng", "g#handle_ess_nav_1_eng", "g#handle_ess_nav_1_eng")
        })), $("#breaker_ess_comm_1").on("click", (function() {
            n("g#handle_ess_comm_1 line:eq(0)", "g#handle_ess_comm_1 line:eq(1)", "g#handle_ess_comm_1 path", "g#handle_ess_comm_1"), l("#breaker_ess_comm_1", "g#handle_ess_comm_1", "g#handle_ess_comm_1")
        })), $("#breaker_ess_stdby_ind_lts").on("click", (function() {
            n("g#handle_ess_stdby_ind_lts line:eq(0)", "g#handle_ess_stdby_ind_lts line:eq(1)", "g#handle_ess_stdby_ind_lts path", "g#handle_ess_stdby_ind_lts"), l("#breaker_ess_stdby_ind_lts", "g#handle_ess_stdby_ind_lts", "g#handle_ess_stdby_ind_lts")
        })), $("#breaker_ess_stdby_batt").on("click", (function() {
            n("g#handle_ess_stdby_batt line:eq(0)", "g#handle_ess_stdby_batt line:eq(1)", "g#handle_ess_stdby_batt path", "g#handle_ess_stdby_batt"), l("#breaker_ess_stdby_batt", "g#handle_ess_stdby_batt", "g#handle_ess_stdby_batt"), p()
        })), $("#breaker_avn_1_pfd").on("click", (function() {
            n("g#handle_avn_1_pfd line:eq(0)", "g#handle_avn_1_pfd line:eq(1)", "g#handle_avn_1_pfd path", "g#handle_avn_1_pfd"), o("#breaker_avn_1_pfd", "g#handle_avn_1_pfd", "#avionics_bus1_switch", "g#handle_avn_1_breaker")
        })), $("#breaker_avn_1_adc_arhs").on("click", (function() {
            n("g#handle_avn_1_adc_ahrs line:eq(0)", "g#handle_avn_1_adc_ahrs line:eq(1)", "g#handle_avn_1_adc_ahrs path", "g#handle_avn_1_adc_ahrs"), o("#breaker_avn_1_adc_arhs", "g#handle_avn_1_adc_ahrs", "#avionics_bus1_switch", "g#handle_avn_1_breaker")
        })), $("#breaker_avn_1_nav_1_eng").on("click", (function() {
            n("g#handle_avn_1_nav_1_eng line:eq(0)", "g#handle_avn_1_nav_1_eng line:eq(1)", "g#handle_avn_1_nav_1_eng path", "g#handle_avn_1_nav_1_eng"), o("#breaker_avn_1_nav_1_eng", "g#handle_avn_1_nav_1_eng", "#avionics_bus1_switch", "g#handle_avn_1_breaker")
        })), $("#breaker_avn_2_mfd").on("click", (function() {
            n("g#handle_avn_2_mfd line:eq(0)", "g#handle_avn_2_mfd line:eq(1)", "g#handle_avn_2_mfd path", "g#handle_avn_2_mfd"), o("#breaker_avn_2_mfd", "g#handle_avn_2_mfd", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        })), $("#breaker_avn_2_xpndr").on("click", (function() {
            n("g#handle_avn_2_xpndr line:eq(0)", "g#handle_avn_2_xpndr line:eq(1)", "g#handle_avn_2_xpndr path", "g#handle_avn_2_xpndr"), o("#breaker_avn_2_xpndr", "g#handle_avn_2_xpndr", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        })), $("#breaker_avn_2_nav_2").on("click", (function() {
            n("g#handle_avn_2_nav_2 line:eq(0)", "g#handle_avn_2_nav_2 line:eq(1)", "g#handle_avn_2_nav_2 path", "g#handle_avn_2_nav_2"), o("#breaker_avn_2_nav_2", "g#handle_avn_2_nav_2", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        })), $("#breaker_avn_2_comm_2").on("click", (function() {
            n("g#handle_avn_2_comm_2 line:eq(0)", "g#handle_avn_2_comm_2 line:eq(1)", "g#handle_avn_2_comm_2 path", "g#handle_avn_2_comm_2"), o("#breaker_avn_2_comm_2", "g#handle_avn_2_comm_2", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        })), $("#breaker_avn_2_audio").on("click", (function() {
            n("g#handle_avn_2_audio line:eq(0)", "g#handle_avn_2_audio line:eq(1)", "g#handle_avn_2_audio path", "g#handle_avn_2_audio"), o("#breaker_avn_2_audio", "g#handle_avn_2_audio", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        })), $(".standbybattery_arm").on("click", (function() {
            "off" == O && ($(".standbybattery").addClass("standbybattery_armed"), $("#on_off_control line:eq(0)").attr({
                x1: 912.025,
                x2: 912.025
            }), $("#on_off_control line:eq(1)").attr({
                x1: 912.025,
                x2: 894.299
            }), $("#stby_batt_switch_top").attr({
                y2: 198.741
            }), $("#stby_batt_switch_bottom").attr({
                y2: 264.741
            }), $("#stby_batt_arm_connector").attr({
                y1: 269.838,
                y2: 204.419
            }), O = "arm", $("#standby_batt_controller").removeClass("no_power"), p(), s("audio_sbatt_arm"))
        })), $(".standbybattery_test").on("click", (function() {
            "arm" == O && ($(".standbybattery").removeClass("standbybattery_armed"), $("#standby_battery, #eis_right").removeClass("standby_power battery_power alternator_power external_power").addClass("standby_power"), $("#standby_batt_controller, #eis_right, #stby_batt_diode").removeClass("standby_power battery_power alternator_power external_power"), $("#standby_batt_controller").addClass("no_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector").removeClass("standby_power"), $(u).each((function(e, a) {
                $(a).removeClass("standby_power")
            })), $("#stby_batt_switch_top").attr({
                y2: 209.425
            }), $("#stby_batt_switch_bottom").attr({
                y2: 273.84
            }), $("#on_off_control line:eq(0)").attr({
                x1: 917.08,
                x2: 917.08
            }), $("#on_off_control line:eq(1)").attr({
                x1: 917.08,
                x2: 899.275
            }), $("#stby_batt_arm_connector").attr({
                y1: 272.838,
                y2: 209.419
            }), O = "off", p(), s("audio_sbatt_off"), $("#feeder_a").hasClass("isOpen") && $("#feeder_b").hasClass("isOpen") && ($("#status_epu span").hasClass("epu_disconnected") ? $("#ess_bus g").addClass("battery_power feeder_open") : $("#ess_bus g").addClass("external_power feeder_open")))
        })), $(".standbybattery_test").on("mousedown touchstart", (function(e) {
            "off" == O && (O = "test", $(".standbybattery").addClass("standbybattery_testing"), $("#standby_batt_controller").removeClass("no_power"), $("#stby_batt_switch_top").attr({
                y2: 219.425
            }), $("#stby_batt_switch_bottom").attr({
                y2: 283.84
            }), w(), $("#stby_batt_arm_connector").attr({
                y1: 277.306,
                y2: 214.168
            }), $("#standby_test_led").addClass("standby_test_led_on"), $("#standby, #stby_batt_diode, #testled").addClass("standby_power"), $("#standby_batt_controller_bottom").removeClass("no_power"), s("audio_sbatt_test"))
        })), $(".standbybattery_test").on("mouseup mouseleave touchend", (function(e) {
            "test" == O && (O = "off", $(".standbybattery").removeClass("standbybattery_testing"), $("#stby_batt_switch_top").attr({
                y2: 209.425
            }), $("#stby_batt_switch_bottom").attr({
                y2: 273.84
            }), m(), $("#stby_batt_arm_connector").attr({
                y1: 272.838,
                y2: 209.419
            }), $("#standby_test_led").removeClass("standby_test_led_on"), $("#standby, #stby_batt_diode, #testled").removeClass("standby_power"), s("audio_sbatt_off"))
        })), $(".standbybattery_test").on({
            mousedown: function() {
                $(this).toggleClass("active")
            },
            mouseedown: function() {
                $(this).addClass("inside")
            },
            mouseleave: function() {
                $(this).removeClass("inside")
            }
        }), $("#toggle_names").toggle((function() {
            $("#labels").hide(), $("#toggle_names").text("Show Labels")
        }), (function() {
            $("#labels").show(), $("#toggle_names").text("Hide Labels")
        })), $("#switch_pulselite").on("click", (function() {
            $("#switch_pulselite").hasClass("pulselite_off") ? ($("#switch_pulselite").removeClass("pulselite_off").addClass("pulselite_on"), s("audio_switch_open")) : ($("#switch_pulselite").removeClass("pulselite_on").addClass("pulselite_off"), s("audio_switch_closed"))
        })), $("#mfd").toggle((function() {
            $("#mfd_electrical_info, #mfd").animate({
                right: "+=220"
            }, 1e3), $("#mfd_button").attr("src", "images/arrow_right.png")
        }), (function() {
            $("#mfd_electrical_info, #mfd").animate({
                right: "-=220"
            }, 1e3), $("#mfd_button").attr("src", "images/arrow_left.png")
        })), $("#pfd").toggle((function() {
            $("#pfd_info, #pfd").animate({
                left: "+=220"
            }, 1e3), $("#pfd_button").attr("src", "images/arrow_left.png")
        }), (function() {
            $("#pfd_info, #pfd").animate({
                left: "-=220"
            }, 1e3), $("#pfd_button").attr("src", "images/arrow_right.png")
        })), $("#header_menu").toggle((function() {
            $(".menu_container").animate({
                top: "+=202"
            }, 1e3), $("#menu_down").attr("src", "images/button_menu_up.png")
        }), (function() {
            $(".menu_container").animate({
                top: "-=202"
            }, 1e3), $("#menu_down").attr("src", "images/button_menu_down.png")
        })), $("#rollover_feeder_b").on("click", (function() {
            var e = $("g#feeder_b, #feeder_b_line, #elec_bus_top g, #avn_top g, #xfeed_wire_top_left, #xfeed_diode_top, #xfeed_diode_wire_top, #ess_diode_left_top, #ess_diode_top, #ess_diode_wire_top");
            $("g#feeder_b").hasClass("isClosed") ? e.addClass("feeder_open") : e.removeClass("feeder_open"), n("g#feeder_b line:eq(1)", "g#feeder_b line:eq(0)", "g#feeder_b path", "g#feeder_b")
        })), $("#rollover_feeder_a").on("click", (function() {
            var e = $("g#feeder_a, #feeder_a_line, #elec_bus_bottom g, #avn_bottom g, #xfeed_wire_bottom_left, #xfeed_diode_bottom, #xfeed_diode_wire_bottom, #ess_diode_left_bottom, #ess_diode_bottom, #ess_diode_wire_bottom");
            $("g#feeder_a").hasClass("isClosed") ? e.addClass("feeder_open") : e.removeClass("feeder_open"), n("g#feeder_a line:eq(1)", "g#feeder_a line:eq(0)", "g#feeder_a path", "g#feeder_a")
        })), $("#master_battery_switch,#master_alternator_switch,#rollover_feeder_b,#rollover_feeder_a").on("click", (function() {
            $("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed") ? ($("#ess_bus g, #x-feed-bus, #x-feed-bus g, #warn, #alt_field, #alt_master g, #alt_master_wire, #power_in, #ess_diode_right_top, #ess_diode_right_bottom").removeClass("feeder_open"), $("#alternator_relay").hasClass("isOpen") && $("#alt_field_breaker").hasClass("isClosed") && $("#alt_master g").hasClass("isClosed") && (r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"))) : ($("#ess_bus g, #x-feed-bus, #x-feed-bus g, #warn, #alt_field, #alt_master g, #alt_master_wire, #power_in, #ess_diode_right_top, #ess_diode_right_bottom").addClass("feeder_open"), $("#alternator_relay").hasClass("isClosed") && $("#alt_master g").hasClass("isClosed") && (r("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"))), p()
        })), $("#header_engine,#master_battery_switch,#master_alternator_switch,#breaker_x_feed_alt_field,#rollover_feeder_b,#rollover_feeder_a").on("click", (function() {
            if ($("#feeder_b").hasClass("isOpen") && $("#feeder_a").hasClass("isOpen")) g();
            else if ($("#alt_master g").hasClass("isClosed") && $("#status_engine span").hasClass("engine_status_running") && $("#alt_field g").hasClass("isClosed")) {
                var a = v;
                "on" == q ? (e(a, "alternator_power"), e(y, "alternator_power")) : e(a, "alternator_power"), x = "on", p()
            } else "on" == x && h(v)
        })), $("#master_battery_switch,#master_alternator_switch,#header_epu,#header_engine,.standbybattery_arm,.standbybattery_test").on("click", (function() {
            $("#annunciators_low_volts, #annunciators_oil_pressure, #annunciators_stby_batt, #annunciators_low_vacuum").addClass("hide"), $("#status_engine span").hasClass("engine_status_shutdown") ? $("#master_battery_switch").hasClass("master_switch_on") ? $("#annunciators_low_volts, #annunciators_oil_pressure, #annunciators_low_vacuum").removeClass("hide") : "arm" == O && $("#annunciators_low_volts, #annunciators_oil_pressure, #annunciators_stby_batt, #annunciators_low_vacuum").removeClass("hide") : $("#master_alternator_switch").hasClass("master_switch_off") && ($("#master_battery_switch").hasClass("master_switch_off") && "arm" == O ? $("#annunciators_low_volts, #annunciators_stby_batt").removeClass("hide") : $("#master_battery_switch").hasClass("master_switch_on") && $("#annunciators_low_volts").removeClass("hide")), $("#alt_field_breaker").hasClass("isOpen") && $("#annunciators_low_volts").removeClass("hide"), "off" == k ? $("#acu_low_volt line").removeClass("external_power battery_power") : $("#annunciators_low_volts").hasClass("hide") || "off" != q ? $("#annunciators_low_volts").hasClass("hide") || "on" != q ? $("#acu_low_volt line").removeClass("external_power battery_power") : $("#acu_low_volt line").addClass("external_power") : $("#acu_low_volt line").removeClass("external_power").addClass("battery_power"), $("#annunciators_low_volts").hasClass("hide") && $("#annunciators_low_volts").hasClass("hide") && $("#annunciators_stby_batt").hasClass("hide") && $("#annunciators_low_vacuum").hasClass("hide") ? $("#pfd_annunciators").css("border", "none") : $("#pfd_annunciators").css("border", "1px solid silver")
        })), $("#header_engine,#master_battery_switch,#master_alternator_switch,#breaker_x_feed_alt_field,.standbybattery_arm,.standbybattery_test").on("click", (function() {
            $("#alternator_relay").hasClass("isOpen") && $("#master_battery_switch").hasClass("master_switch_off") && "arm" == O ? ($("#mfd_eis_m_volts").text("0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("0"), $("#mfd_eis_s_amps").text("-3.0")) : $("#status_engine span").hasClass("engine_status_shutdown") && $("#master_battery_switch").hasClass("master_switch_on") && "arm" == O || $("#status_engine span").hasClass("engine_status_shutdown") && $("#alternator_relay").hasClass("isOpen") && $("#alternator_relay").hasClass("isOpen") && "arm" == O ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-5.0"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_shutdown") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alternator_relay").hasClass("isOpen") && "off" == O || $("#status_engine span").hasClass("engine_status_running") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alternator_relay").hasClass("isOpen") && "off" == O ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-4.7"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_running") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alternator_relay").hasClass("isOpen") && "arm" == O ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-5.0"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_shutdown") && $("#master_alternator_switch").hasClass("master_switch_on") && "off" == O ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-4.7"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_running") && $("#alternator_relay").hasClass("isClosed") && "arm" == O ? ($("#mfd_eis_m_volts").text("28.1"), $("#mfd_eis_e_volts").text("28.0"), $("#mfd_eis_m_amps").text("1.5"), $("#mfd_eis_s_amps").text("0.2")) : $("#status_engine span").hasClass("engine_status_running") && $("#alternator_relay").hasClass("isClosed") && "off" == O && ($("#mfd_eis_m_volts").text("28.1"), $("#mfd_eis_e_volts").text("28.0"), $("#mfd_eis_m_amps").text("1.7"), $("#mfd_eis_s_amps").text("0"))
        })), $("#master_battery_switch,#master_alternator_switch,#master_avionics2_switch,#master_avionics1_switch,#breaker_avn_1,#breaker_avn_2,#breaker_ess_pfd,#breaker_avn_1_pfd,#breaker_avn_2_mfd,.standbybattery_arm,.standbybattery_test,#rollover_feeder_b,#rollover_feeder_a").on("click", (function() {
            !$("g#handle_avn_2_mfd").hasClass("isOpen") && $("#master_avionics2_switch").hasClass("avionics_switch_on") && $("#master_battery_switch").hasClass("master_switch_on") && !$("g#handle_avn_2_breaker").hasClass("isOpen") && $("#feeder_a").hasClass("isClosed") ? $("#mfd_img_overlay").addClass("hide") : $("#mfd_img_overlay").removeClass("hide"), $("g#handle_ess_pfd").hasClass("isClosed") && $("div.standbybattery").hasClass("standbybattery_armed") && $("g#handle_ess_stdby_batt").hasClass("isClosed") || $("#master_battery_switch").hasClass("master_switch_on") && !$("g#handle_ess_pfd").hasClass("isOpen") || $("#master_battery_switch").hasClass("master_switch_on") && $("#master_avionics1_switch").hasClass("avionics_switch_on") && !$("g#handle_avn_1_pfd").hasClass("isOpen") && $("g#handle_avn_1_breaker").hasClass("isClosed") && $("#feeder_b").hasClass("isClosed") ? $("#pfd_img_overlay").addClass("hide") : $("#pfd_img_overlay").removeClass("hide"), $("#feeder_b").hasClass("isOpen") && $("#feeder_a").hasClass("isOpen") && "arm" != O && $("#pfd_img_overlay").removeClass("hide")
        }))
    }))
}));
//# sourceMappingURL=js/index.d7620939.js.map