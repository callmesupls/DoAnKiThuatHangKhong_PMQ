//File trong test.html, không có trong index.html

$(document).ready(function() {
    if (!1 == (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect)) throw $("#svgSupport").css("display", "block"), $("#header").css("display", "none"), $("#mainwrapper").css("display", "none"), Error("No Svg Support Found");
    $("#svgwrapper").load("images/ses.svg", function() {
        function d(a, f) {
            $(a).each(function(a, b) {
                $(b).addClass(f)
            })
        }

        function c(a, f) {
            $(a).each(function(a, b) {
                $(b).removeClass(f)
            })
        }

        function g(a) {
            $("#sound_icon_x").hasClass("sound_on") &&
                document.getElementById(a).cloneNode(!0).play()
        }

        function x(a, f) {
            $(f).hasClass("isOpen") ? ($(a).attr("y2", parseInt($(a).attr("y2")) + 8), $(f).removeClass("isOpen no_power").addClass("isClosed")) : ($(a).attr("y2", parseInt($(a).attr("y2")) - 8), $(f).removeClass("isClosed").addClass("isOpen no_power"))
        }

        function q(a, f, b) {
            $(f).hasClass("isOpen") && $(b).hasClass("isClosed") ? ($(a).attr("y2", parseInt($(a).attr("y2")) + 8), $(f).removeClass("isOpen no_power").addClass("isClosed"), "#avionics_bus1_switch" == f || "#avionics_bus2_switch" ==
                f ? g("audio_master_off") : g("audio_switch_closed")) : $(f).hasClass("isOpen") && $(b).hasClass("isOpen") ? ($(a).attr("y2", parseInt($(a).attr("y2")) + 8), $(f).removeClass("isOpen").addClass("isClosed no_power"), "#avionics_bus1_switch" == f || "#avionics_bus2_switch" == f ? g("audio_master_off") : g("audio_switch_closed")) : ($(a).attr("y2", parseInt($(a).attr("y2")) - 8), $(f).removeClass("isClosed").addClass("isOpen no_power"), "#avionics_bus1_switch" == f || "#avionics_bus2_switch" == f ? g("audio_master_on") : g("audio_switch_open"))
        }

        function k(a, f, b) {
            if ($(b).hasClass("isOpen")) {
                var c = 4;
                $(b).removeClass("isOpen").addClass("isClosed")
            } else c = -4, $(b).removeClass("isClosed").addClass("isOpen");
            $(a).attr({
                y1: parseInt($(a).attr("y1")) + c,
                y2: parseInt($(a).attr("y2")) + c
            });
            $(f).attr("y2", parseInt($(f).attr("y2")) + c)
        }

        function b(a, f, b, c) {
            $(c).hasClass("isClosed") ? ($(c).removeClass("isClosed").addClass("isOpen"), g("audio_breaker_open"), c = -3) : ($(c).removeClass("isOpen").addClass("isClosed"), g("audio_breaker_closed"), c = 3);
            $(a).attr({
                y1: parseInt($(a).attr("y1")) +
                    c,
                y2: parseInt($(a).attr("y2")) + c
            });
            $(f).attr({
                y1: parseInt($(f).attr("y1")) + c,
                y2: parseInt($(f).attr("y2")) + c
            });
            a = /(M\s?\d*\.\d*)([\s,])(\d\d\d*)\./;
            f = parseInt(a.exec($(b).attr("d"))[3]) + c;
            $(b).attr("d", $(b).attr("d").replace(a, "$1$2" + f + "."))
        }

        function h(a, b, c) {
            $(a).toggleClass($(a).attr("class").split(" ")[0] + "_open");
            $(a).hasClass("isClosed") ? ($(a).removeClass("isClosed").addClass("isOpen"), $(b).addClass("no_power"), $(c).addClass("no_power")) : $(c).hasClass("isOpen") ? ($(a).removeClass("isOpen").addClass("isClosed"),
                $(b).removeClass("no_power")) : ($(a).removeClass("isOpen").addClass("isClosed"), $(b).removeClass("no_power"), $(c).removeClass("no_power"))
        }

        function u(a, b, c, d) {
            $(a).toggleClass($(a).attr("class").split(" ")[0] + "_open");
            $(a).hasClass("isClosed") ? ($(a).removeClass("isClosed").addClass("isOpen"), $(b).addClass("no_power")) : $(c).hasClass("isOpen") ? ($(a).removeClass("isOpen").addClass("isClosed"), $(b).addClass("no_power")) : $(c).hasClass("isClosed") && $(d).hasClass("isOpen") ? $(a).removeClass("isOpen").addClass("isClosed") :
                $(c).hasClass("isClosed") && $(d).hasClass("isClosed") && ($(a).removeClass("isOpen").addClass("isClosed"), $(b).removeClass("no_power"), $(c).removeClass("no_power"))
        }

        function D(a) {
            "on" == m && (d(a, "external_power"), d(r, "external_power"));
            d(a, "battery_power");
            p = "on";
            "on" == m && k("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay");
            k("#battery-relay line:last", "#battery-relay line:eq(1)", "#battery-relay");
            x("#battery_master g.switch line:eq(0)", "#battery_master g.switch");
            $("#master_battery_switch").removeClass("master_switch_off").addClass("master_switch_on");
            s()
        }

        function F(a) {
            "on" == m && (c(a, "external_power"), d(r, "external_power"), c(r, "external_power"), $("#external_power g:first, #ext_pwr_relay_second_ciruit").addClass("external_power"));
            c(a, "battery_power");
            d("#battery", "battery_power");
            p = "off";
            "on" == m && k("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay");
            k("#battery-relay line:last", "#battery-relay line:eq(1)", "#battery-relay");
            x("#battery_master g.switch line:eq(0)", "#battery_master g.switch");
            $("#master_battery_switch").removeClass("master_switch_on").addClass("master_switch_off");
            s()
        }

        function y(a) {
            "on" == m && "on" == p ? (c(a, "alternator_power"), c(r, "alternator_power")) : "off" == m && "on" == p ? (c(a, "alternator_power"), c(r, "alternator_power")) : c(a, "alternator_power");
            t = "off";
            s()
        }

        function z() {
            $("#master_alternator_switch").addClass("master_switch_on").removeClass("master_switch_off");
            x("#alt_master line", "#alt_master g");
            g("audio_master_on")
        }

        function A() {
            $("#master_alternator_switch").removeClass("master_switch_on").addClass("master_switch_off");
            x("#alt_master line", "#alt_master g");
            g("audio_master_off")
        }

        function s() {
            "arm" == e && $("g#handle_ess_stdby_batt").hasClass("isClosed") ? (c(l, "battery_power"), c(n, "battery_power"), c(l, "alternator_power"), c(n, "alternator_power"), c(l, "external_power"), c(n, "external_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector").removeClass("standby_power"), $("#standby_batt_controller_bottom").removeClass("no_power"),
                "off" == p && "off" == t && ("off" == m ? (d(l, "standby_power"), d(n, "standby_power"), $("#ess_bus g").removeClass("feeder_open")) : (d(l, "standby_power"), d(n, "standby_power"))), "on" == p && ("off" == t ? "off" == m ? (d(l, "battery_power"), d(n, "battery_power")) : (d(l, "external_power"), d(n, "external_power")) : (d(l, "alternator_power"), d(n, "alternator_power"))), $("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed") || !$("g#handle_ess_stdby_batt").hasClass("isClosed") || (c(l, "battery_power"), c(n, "battery_power"), c(l,
                    "alternator_power"), c(n, "alternator_power"), c(l, "external_power"), c(n, "external_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector").removeClass("standby_power"), d(l, "standby_power"), d(n, "standby_power"), $("#ess_bus g").removeClass("feeder_open"), $("#standby_batt_controller_bottom").removeClass("no_power"))) : "arm" == e && $("g#handle_ess_stdby_batt").hasClass("isOpen") && (c(l, "battery_power"), c(l, "alternator_power"), c(l, "external_power"), $("#ess_to_stby_wire").removeClass("standby_power"),
                $("#stby_batt_arm_breaker_connector").removeClass("standby_power"), d(l, "standby_power"), $("#ess_to_stby_wire").addClass("standby_power"), $("#stby_batt_arm_breaker_connector").addClass("standby_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector, #stby_batt_switch_bottom").removeClass("standby_power"), $("#standby_batt_controller_bottom").addClass("no_power"), c(n, "standby_power"));
            "arm" == e && $("g#handle_ess_stdby_batt").hasClass("isOpen") && $("#feeder_b").hasClass("isClosed") && "on" == p ? ($("#standby_batt_controller_bottom").addClass("no_power"),
                $("#ess_bus g").addClass($("#battery").attr("class"))) : "arm" == e && $("g#handle_ess_stdby_batt").hasClass("isOpen") && $("#feeder_a").hasClass("isClosed") && "on" == p && ($("#standby_batt_controller_bottom").addClass("no_power"), $("#ess_bus g").addClass($("#battery").attr("class")));
            "standby_power" != $("#standby_batt_controller").attr("class") ? E() : B();
            $("#warn_breaker").hasClass("isOpen") && "standby_power" != $("#standby_batt_controller").attr("class") && B();
            $("#handle_ess_stdby_batt").hasClass("isOpen") && "standby_power" ==
                $("#standby_batt_controller").attr("class") && E();
            $("#feeder_a").hasClass("isOpen") && $("#feeder_b").hasClass("isOpen") && "on" == p ? $("#ess_diode_right_top, #ess_diode_right_bottom").addClass("feeder_open") : $("#feeder_a").hasClass("isClosed") && ($("#feeder_b").hasClass("isClosed") || "on" != p) || $("#ess_diode_right_top, #ess_diode_right_bottom").removeClass("feeder_open");
            "arm" == e && $("#handle_ess_stdby_batt").hasClass("isClosed") && $("#ess_diode_right_top, #ess_diode_right_bottom").removeClass("feeder_open");
            "off" == e && $("#feeder_a").hasClass("isOpen") && $("#feeder_b").hasClass("isOpen") && $("#ess_diode_right_top, #ess_diode_right_bottom").addClass("feeder_open")
        }

        function G() {
            "on" == t && ($("#alt_master g").hasClass("isOpen") ? (y(w), k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : y(w))
        }

        function E() {
            $("#on_off_control line:eq(0)").attr({
                x1: 917.08,
                x2: 917.08
            });
            $("#on_off_control line:eq(1)").attr({
                x1: 917.08,
                x2: 899.275
            });
            $("#on_off_control line:eq(0), #on_off_control line:eq(1)").addClass("no_power")
        }

        function B() {
            $("#on_off_control line:eq(0)").attr({
                x1: 912.025,
                x2: 912.025
            });
            $("#on_off_control line:eq(1)").attr({
                x1: 912.025,
                x2: 894.299
            });
            $("#on_off_control line:eq(0), #on_off_control line:eq(1)").removeClass("no_power")
        }
        $("#sparkplug").load("images/sparkplug.svg", function() {
            $("#spark").css("display", "none")
        });
        $("#epuIconLeft").load("images/epuIconLeft.svg");
        $("#epuIconRight").load("images/epuIconRight.svg");
        $("#sound_wrapper").load("images/soundIcon.svg", function() {
            $("#sound_icon_x").addClass("sound_on")
        });
        var v = "#battery;#battery-relay line:eq(2);#battery_master;#sensewire;#relay_line;#eis_left;#elec_bus_bottom_bus;#elec_bus_top_bus;#x-feed-bus;#ess_diode_right_top;#ess_diode_right_bottom;#ess_bus g;#elec_bus_bottom g g:even;#elec_bus_top g g:even; #warn; #alt_field; #alt_master polyline; #elec_bus_top g.breaker;#avn_top g.breaker:first;#avn_top g;#avn_bottom g.breaker:first;#avn_bottom g;g.switch;#alt_master_wire;#power_in;#alternator_output;#alternator_relay line:eq(2);#alternator_relay_ground;#alternator_field;#alternator_ground;#ess_diode_bottom;#ess_diode_top;#xfeed_diode_top;#xfeed_diode_bottom".split(";"),
            n = ["#ess_bus g.breaker", "#handle_ess_bus", "#ess_diode_right_top", "#ess_diode_right_bottom"],
            l = ["#standby_batt_controller", "#standby_battery", "#eis_right", "#stby_batt_diode"],
            w = "#alternator g;#alternator_output;#alternator_relay line:eq(2);#alternator_relay_ground;#eis_left;#alt_master;#alt_master_wire;#relay_line;#sensewire;#battery; #elec_bus_bottom g g:even; #elec_bus_top g g:even; #battery_master; #x-feed-bus; #battery-relay line:eq(2); #warn; #alt_field; #alt_master polyline; #elec_bus_top g.breaker; #avn_top g.breaker:first;#avn_top g g; #avn_bottom g.breaker:first;#avn_bottom g g;#ess_diode_right_top;#ess_diode_right_bottom;#ess_bus g;#ess_bus g line.ess_diode_right; #elec_bus_bottom_bus;#elec_bus_top_bus;g.switch;#power_in;#ess_diode_bottom;#ess_diode_top;#xfeed_diode_top;#xfeed_diode_bottom".split(";"),
            r = ["#external_power g:first", "#ext_pwr_relay_second_ciruit", "#ext_power_relay_line", "#acu_ground"],
            p = "off",
            t = "off",
            m = "off",
            e = "off";
        $("#alt_field_breaker, #warn_breaker, #handle_fuel_pump_breaker, #handle_bcn_lt_breaker, #handle_land_lt_breaker, #handle_cabin_lts_pwr_breaker, #handle_flaps, #handle_avn_1_breaker, #handle_avn_1_pfd, #handle_avn_1_adc_ahrs, #handle_avn_1_nav_1_eng, #handle_ess_pfd, #handle_ess_adc_ahrs, #handle_ess_nav_1_eng, #handle_ess_comm_1, #handle_ess_stdby_ind_lts, #handle_ess_stdby_batt, #handle_pitot_heat_breaker, #handle_nav_lts_breaker, #handle_taxi_lt_breaker, #handle_strobe_lts_breaker, #handle_panel_lts_breaker, #handle_avn_2_breaker, #handle_avn_2_mfd, #handle_avn_2_xpndr, #handle_avn_2_nav_2, #handle_avn_2_comm_2, #handle_avn_2_audio, #feeder_a, #feeder_b").addClass("breaker isClosed");
        $("g#battery_master_switch,g#alt_master g, #avionics_bus1_switch, #avionics_bus2_switch, #handle_fuel_pump_switch,#handle_bcn_lt_switch, #handle_land_lt_switch, #handle_cabin_lts_pwr_switch, #handle_pitot_heat_switch,#handle_nav_lts_switch, #handle_taxi_lt_switch, #handle_strobe_lts_switch, #handle_panel_lts_switch").addClass("switch no_power isOpen");
        $("#testled, #stby_batt_diode, #xfeed_diode_top, #xfeed_diode_bottom, #ess_diode_top, #ess_diode_bottom").addClass("diode");
        $("#breaker_buttons div, #switch_buttons div, #switch_buttons div").css("display",
            "block");
        $("#avn_top g g, #avn_bottom g g").addClass("no_power");
        $(".breaker5,.breaker10,.breaker15,.breaker20").addClass("isClosed");
        $("#battery-relay, #external-power-relay, #alternator_relay").addClass("isOpen");
        $("#battery").addClass("battery_power");
        $("#standby_battery").addClass("standby_power");
        $("#status_engine span").addClass("engine_status_shutdown");
        $("#status_epu span").addClass("epu_disconnected");
        $("g#rollover rect").each(function() {
            var a = $(this).attr("width"),
                c = $(this).attr("height"),
                b = $(this).attr("id") + "_hitbox",
                d = $(this).attr("y"),
                e = $(this).attr("x");
            $("#hitboxes").append('<div id="' + b + '"style="height:' + c + "px; width:" + a + "px; top:" + d + "px; left:" + e + 'px;">')
        });
        var C = [];
        $("g#rollover rect, #rollover_pdm").on("click", function() {
            $(this).attr("id").slice(9);
            var a = "#dialog_" + $(this).attr("id").slice(9),
                c = "#" + $(this).attr("id") + "_hitbox",
                b = "left",
                d = "top",
                e = $(a).attr("data-title");
            "#rollover_feeder_b_hitbox" != c && "#rollover_feeder_a_hitbox" != c && (200 < $(this).attr("y") && (d = "bottom"), 200 <
                $(this).attr("x") && (b = "right"), b = b + " " + d, $(a).dialog({
                    title: e,
                    height: 220,
                    width: 250,
                    position: {
                        my: b,
                        at: "center center",
                        of: $(c)
                    }
                }), C.push(a), !1 == $(a).dialog("isOpen") ? ($(C[0]).dialog("close"), $(a).dialog("open")) : $(a).dialog("close"), 1 < C.length && C.shift())
        });
        $("#sound_wrapper").on("click", function() {
            $("#sound_icon_x").toggleClass("sound_on")
        });
        $("#header_epu").toggle(function() {
            "on" == p && "off" == t ? (d(v, "external_power"), d(r, "external_power")) : "on" == t && (d(v, "external_power"), d(r, "external_power"), d(r, "alternator_power"));
            $("#external_power g:first, #ext_pwr_relay_second_ciruit").addClass("external_power");
            m = "on";
            $("#master_battery_switch").hasClass("master_switch_on") && k("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay");
            $("#epuIconRight").css("left", "0px");
            $("#status_epu span").removeClass("epu_disconnected").addClass("epu_connected").text("Connected");
            s()
        }, function() {
            "on" == p && "on" == m ? (c(v, "external_power"), c(r, "external_power")) : (c(r, "external_power"), d("#battery", "battery_power"));
            $("#external_power g:first, #ext_pwr_relay_second_ciruit").removeClass("external_power");
            m = "off";
            $("#master_battery_switch").hasClass("master_switch_on") && k("#external-power-relay line:eq(2)", "#external-power-relay line:eq(1)", "#external-power-relay");
            $("#external_power g, #external-power-relay line, #acu_ground").removeClass("alternator_power");
            $("#status_epu span").addClass("epu_disconnected").removeClass("epu_connected").text("Disconnected");
            $("#epuIconRight").css("left", "6px");
            s()
        });
        $("#header_engine").on("click",
            function() {
                $("#status_engine span").hasClass("engine_status_shutdown") ? ($("#status_engine span").text("Running").removeClass("engine_status_shutdown").addClass("engine_status_running"), $("#spark").css("display", "inline")) : ($("#status_engine span").text("Shutdown").removeClass("engine_status_running").addClass("engine_status_shutdown"), $("#spark").css("display", "none"))
            });
        $("#master_battery_switch").on("click", function() {
            $("#master_battery_switch").hasClass("master_switch_off") ? (D(v), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"),
                g("audio_master_on")) : ($("#master_battery_switch").hasClass("master_switch_on") && $("#master_alternator_switch").hasClass("master_switch_on") ? (F(v), c(r, "alternator_power"), A(), $("#alternator_relay").hasClass("isClosed") && k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")) : F(v), g("audio_master_off"))
        });
        $("#master_alternator_switch").on("click", function() {
            if ($("#master_alternator_switch").hasClass("master_switch_off") && $("#master_battery_switch").hasClass("master_switch_off") &&
                $("#alt_field g").hasClass("isOpen")) z(), D(v), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), $("#alt_master g").addClass("no_power");
            else if ($("#master_alternator_switch").hasClass("master_switch_off") && $("#master_battery_switch").hasClass("master_switch_off") && $("#alt_field g").hasClass("isClosed")) z(), D(v), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"),
                k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay");
            else if ($("#master_alternator_switch").hasClass("master_switch_off") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isClosed")) {
                if (z(), $("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"),
                    k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")
            } else if ("on" == t) A(), y(w), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay");
            else if ($("#master_alternator_switch").hasClass("master_switch_on") && $("#master_battery_switch").hasClass("master_switch_on") &&
                $("#alt_field g").hasClass("isClosed")) {
                if (A(), $("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay")
            } else $("#alt_master g").hasClass("isOpen") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isOpen") ?
                (z(), $("#alt_master_wire, #power_in, #alt_master g, #alternator_output").addClass("no_power"), $("#alternator_relay line:eq(2)").addClass("no_power")) : $("#alt_master g").hasClass("isClosed") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alt_field g").hasClass("isOpen") && (A(), $("#alt_master_wire, #power_in, #alt_master g").addClass("no_power"))
        });
        $("#master_avionics1_switch").on("click", function() {
            $("#avionics_bus1_switch").hasClass("isOpen") ? ($("#master_avionics1_switch").addClass("avionics_switch_on").removeClass("avionics_switch_off"),
                q("#avionics_bus1_switch line", "#avionics_bus1_switch", "g#handle_avn_1_breaker"), $("g#handle_avn_1_breaker").hasClass("isClosed") ? $("#avionics_bus1_bus, #avn_top g g.isClosed").removeClass("no_power") : $("#avn_top_bus, #avn_top g g.isClosed").addClass("no_power")) : ($("#master_avionics1_switch").removeClass("avionics_switch_on").addClass("avionics_switch_off"), q("#avionics_bus1_switch line", "#avionics_bus1_switch", "g#handle_avn_1_breaker"), $("#avn_top g g").addClass("no_power"))
        });
        $("#master_avionics2_switch").on("click",
            function() {
                $("#avionics_bus2_switch").hasClass("isOpen") ? ($("#master_avionics2_switch").addClass("avionics_switch_on").removeClass("avionics_switch_off"), q("#avionics_bus2_switch line", "#avionics_bus2_switch", "g#handle_avn_2_breaker"), $("g#handle_avn_2_breaker").hasClass("isClosed") ? $("#avn_bottom_bus, #avn_bottom g g.isClosed").removeClass("no_power") : $("#avn_bottom_bus, #avn_bottom g g.isClosed").addClass("no_power")) : ($("#master_avionics2_switch").removeClass("avionics_switch_on").addClass("avionics_switch_off"),
                    q("#avionics_bus2_switch line", "#avionics_bus2_switch", "g#handle_avn_2_breaker"), $("#avn_bottom g g").addClass("no_power"))
            });
        $(".switch").on("click", function() {
            $(this).toggleClass("switch_open")
        });
        $("#switch_bcn_lt").on("click", function() {
            q("#handle_bcn_lt_switch line:eq(1)", "g#handle_bcn_lt g.switch", "g#handle_bcn_lt g.breaker")
        });
        $("#switch_land_lt").on("click", function() {
            q("g#handle_land_lt_switch line:eq(1)", "g#handle_land_lt g.switch", "g#handle_land_lt g.breaker")
        });
        $("#switch_taxi_lt").on("click",
            function() {
                q("g#handle_taxi_lt g.switch line:eq(1)", "g#handle_taxi_lt g.switch", "g#handle_taxi_lt g.breaker")
            });
        $("#switch_nav_lts").on("click", function() {
            q("g#handle_nav_lts g.switch line:eq(1)", "g#handle_nav_lts g.switch", "g#handle_nav_lts g.breaker")
        });
        $("#switch_strobe_lts").on("click", function() {
            q("g#handle_strobe_lts g.switch line:eq(1)", "g#handle_strobe_lts g.switch", "g#handle_strobe_lts g.breaker")
        });
        $("#switch_fuel_pump").on("click", function() {
            q("g#handle_fuel_pump g.switch line:eq(1)", "g#handle_fuel_pump g.switch",
                "g#handle_fuel_pump g.breaker")
        });
        $("#switch_pitot_heat").on("click", function() {
            q("g#handle_pitot_heat g.switch line:eq(1)", "g#handle_pitot_heat g.switch", "g#handle_pitot_heat g.breaker")
        });
        $("#switch_cabin_lts_pwr").on("click", function() {
            q("g#handle_cabin_lts_pwr_switch line:eq(1)", "g#handle_cabin_lts_pwr g.switch", "g#handle_cabin_lts_pwr g.breaker")
        });
        $("#breaker_x_feed_alt_field").on("click", function() {
            b("#alt_field g line:eq(0)", "#alt_field g line:eq(1)", "#alt_field g path", "#alt_field g");
            h("#breaker_x_feed_alt_field",
                "#alt_field", "#alt_field g");
            if ($("#alt_field g.breaker").hasClass("isOpen")) $("#alt_master g").hasClass("isClosed") && ($("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power"), G(), ($("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) && k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"));
            else if ($("#alt_master g").hasClass("isOpen")) $("#alt_master g").addClass("no_power");
            else if ($("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed")) k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power")
        });
        $("#breaker_x_feed_warn").on("click", function() {
            b("#warn g line:eq(0)", "#warn g line:eq(1)", "#warn g path", "#warn g");
            h("#breaker_x_feed_warn", "#warn",
                "#warn g");
            "arm" == e && B();
            s()
        });
        $("#breaker_fuel_pump").on("click", function() {
            b("g#handle_fuel_pump g.breaker line:eq(0)", "g#handle_fuel_pump g.breaker line:eq(1)", "g#handle_fuel_pump g.breaker path", "g#handle_fuel_pump g.breaker");
            h("#breaker_fuel_pump", "g#handle_fuel_pump g.breaker", "g#handle_fuel_pump g.switch")
        });
        $("#breaker_bcn_lt").on("click", function() {
            b("g#handle_bcn_lt g.breaker line:eq(0)", "g#handle_bcn_lt g.breaker line:eq(1)", "g#handle_bcn_lt g.breaker path", "g#handle_bcn_lt g.breaker");
            h("#breaker_bcn_lt", "g#handle_bcn_lt g.breaker", "g#handle_bcn_lt g.switch")
        });
        $("#breaker_land_lt").on("click", function() {
            b("g#handle_land_lt g.breaker line:eq(0)", "g#handle_land_lt g.breaker line:eq(1)", "g#handle_land_lt g.breaker path", "g#handle_land_lt g.breaker");
            h("#breaker_land_lt", "g#handle_land_lt g.breaker", "g#handle_land_lt g.switch")
        });
        $("#breaker_cabin_lts_pwr").on("click", function() {
            b("g#handle_cabin_lts_pwr g.breaker line:eq(0)", "g#handle_cabin_lts_pwr g.breaker line:eq(1)", "g#handle_cabin_lts_pwr g.breaker path",
                "g#handle_cabin_lts_pwr g.breaker");
            h("#breaker_cabin_lts_pwr", "g#handle_cabin_lts_pwr g.breaker", "g#handle_cabin_lts_pwr g.switch")
        });
        $("#breaker_flaps").on("click", function() {
            b("g#handle_flaps line:eq(0)", "g#handle_flaps line:eq(1)", "g#handle_flaps path", "g#handle_flaps");
            h("#breaker_flaps", "g#handle_flaps", "g#handle_flaps")
        });
        $("#breaker_avn_1").on("click", function() {
            b("g#handle_avn_1_breaker line:eq(0)", "g#handle_avn_1_breaker line:eq(1)", "g#handle_avn_1_breaker path", "g#handle_avn_1_breaker");
            $("#breaker_avn_1").hasClass("isClosed") ? ($("#breaker_avn_1").addClass("breaker15_open isOpen").removeClass("isClosed"), $("g#handle_avn_1_breaker, #avionics_bus1_switch, #avn_top g g").addClass("no_power")) : $("#avionics_bus1_switch").hasClass("isClosed") ? ($("#breaker_avn_1").removeClass("breaker15_open isOpen").addClass("isClosed"), $("g#handle_avn_1_breaker, #avionics_bus1_switch, #avionics_bus1_bus, #avn_top g g.breaker.isClosed").removeClass("no_power")) : ($("#breaker_avn_1").removeClass("breaker15_open isOpen").addClass("isClosed"),
                $("g#handle_avn_1_breaker").removeClass("no_power"))
        });
        $("#breaker_avn_2").on("click", function() {
            b("g#handle_avn_2_breaker line:eq(0)", "g#handle_avn_2_breaker line:eq(1)", "g#handle_avn_2_breaker path", "g#handle_avn_2_breaker");
            $("#breaker_avn_2").hasClass("isClosed") ? ($("#breaker_avn_2").removeClass("isClosed").addClass("breaker15_open isOpen"), $("g#handle_avn_2_breaker, #avionics_bus2_switch, #avn_bottom g g").addClass("no_power")) : $("#avionics_bus2_switch").hasClass("isClosed") ? ($("#breaker_avn_2").removeClass("breaker15_open isOpen").addClass("isClosed"),
                $("g#handle_avn_2_breaker, #avionics_bus2_switch, #avn_bottom_bus, #avn_bottom g g.breaker.isClosed").removeClass("no_power")) : ($("#breaker_avn_2").removeClass("breaker15_open isOpen").addClass("isClosed"), $("g#handle_avn_2_breaker").removeClass("no_power"))
        });
        $("#breaker_pitot_heat").on("click", function() {
            b("g#handle_pitot_heat g.breaker line:eq(0)", "g#handle_pitot_heat g.breaker line:eq(1)", "g#handle_pitot_heat g.breaker path", "g#handle_pitot_heat g.breaker");
            h("#breaker_pitot_heat", "g#handle_pitot_heat g.breaker",
                "g#handle_pitot_heat g.switch")
        });
        $("#breaker_nav_lts").on("click", function() {
            b("#handle_nav_lts_breaker_line_h", "#handle_nav_lts_breaker_line_v", "#handle_nav_lts_breaker_arc", "#handle_nav_lts_breaker");
            h("#breaker_nav_lts", "g#handle_nav_lts g.breaker", "g#handle_nav_lts g.switch")
        });
        $("#breaker_taxi_lt").on("click", function() {
            b("g#handle_taxi_lt g.breaker line:eq(0)", "g#handle_taxi_lt g.breaker line:eq(1)", "g#handle_taxi_lt g.breaker path", "g#handle_taxi_lt g.breaker");
            h("#breaker_taxi_lt", "g#handle_taxi_lt g.breaker",
                "g#handle_taxi_lt g.switch")
        });
        $("#breaker_strobe_lts").on("click", function() {
            b("g#handle_strobe_lts g.breaker line:eq(0)", "g#handle_strobe_lts g.breaker line:eq(1)", "g#handle_strobe_lts g.breaker path", "g#handle_strobe_lts g.breaker");
            h("#breaker_strobe_lts", "g#handle_strobe_lts g.breaker", "g#handle_strobe_lts g.switch")
        });
        $("#breaker_panel_lts").on("click", function() {
            b("g#handle_panel_lts g.breaker line:eq(0)", "g#handle_panel_lts g.breaker line:eq(1)", "g#handle_panel_lts g.breaker path", "g#handle_panel_lts g.breaker");
            h("#breaker_panel_lts", "g#handle_panel_lts g.breaker", "g#handle_panel_lts g.switch")
        });
        $("#breaker_ess_pfd").on("click", function() {
            b("g#handle_ess_pfd line:eq(0)", "g#handle_ess_pfd line:eq(1)", "g#handle_ess_pfd path", "g#handle_ess_pfd");
            h("#breaker_ess_pfd", "g#handle_ess_pfd", "g#handle_ess_pfd")
        });
        $("#breaker_ess_adc_arhs").on("click", function() {
            b("g#handle_ess_adc_ahrs line:eq(0)", "g#handle_ess_adc_ahrs line:eq(1)", "g#handle_ess_adc_ahrs path", "g#handle_ess_adc_ahrs");
            h("#breaker_ess_adc_arhs", "g#handle_ess_adc_ahrs",
                "g#handle_ess_adc_ahrs")
        });
        $("#breaker_ess_nav_1_eng").on("click", function() {
            b("g#handle_ess_nav_1_eng line:eq(0)", "g#handle_ess_nav_1_eng line:eq(1)", "g#handle_ess_nav_1_eng path", "g#handle_ess_nav_1_eng");
            h("#breaker_ess_nav_1_eng", "g#handle_ess_nav_1_eng", "g#handle_ess_nav_1_eng")
        });
        $("#breaker_ess_comm_1").on("click", function() {
            b("g#handle_ess_comm_1 line:eq(0)", "g#handle_ess_comm_1 line:eq(1)", "g#handle_ess_comm_1 path", "g#handle_ess_comm_1");
            h("#breaker_ess_comm_1", "g#handle_ess_comm_1", "g#handle_ess_comm_1")
        });
        $("#breaker_ess_stdby_ind_lts").on("click", function() {
            b("g#handle_ess_stdby_ind_lts line:eq(0)", "g#handle_ess_stdby_ind_lts line:eq(1)", "g#handle_ess_stdby_ind_lts path", "g#handle_ess_stdby_ind_lts");
            h("#breaker_ess_stdby_ind_lts", "g#handle_ess_stdby_ind_lts", "g#handle_ess_stdby_ind_lts")
        });
        $("#breaker_ess_stdby_batt").on("click", function() {
            b("g#handle_ess_stdby_batt line:eq(0)", "g#handle_ess_stdby_batt line:eq(1)", "g#handle_ess_stdby_batt path", "g#handle_ess_stdby_batt");
            h("#breaker_ess_stdby_batt",
                "g#handle_ess_stdby_batt", "g#handle_ess_stdby_batt");
            s()
        });
        $("#breaker_avn_1_pfd").on("click", function() {
            b("g#handle_avn_1_pfd line:eq(0)", "g#handle_avn_1_pfd line:eq(1)", "g#handle_avn_1_pfd path", "g#handle_avn_1_pfd");
            u("#breaker_avn_1_pfd", "g#handle_avn_1_pfd", "#avionics_bus1_switch", "g#handle_avn_1_breaker")
        });
        $("#breaker_avn_1_adc_arhs").on("click", function() {
            b("g#handle_avn_1_adc_ahrs line:eq(0)", "g#handle_avn_1_adc_ahrs line:eq(1)", "g#handle_avn_1_adc_ahrs path", "g#handle_avn_1_adc_ahrs");
            u("#breaker_avn_1_adc_arhs",
                "g#handle_avn_1_adc_ahrs", "#avionics_bus1_switch", "g#handle_avn_1_breaker")
        });
        $("#breaker_avn_1_nav_1_eng").on("click", function() {
            b("g#handle_avn_1_nav_1_eng line:eq(0)", "g#handle_avn_1_nav_1_eng line:eq(1)", "g#handle_avn_1_nav_1_eng path", "g#handle_avn_1_nav_1_eng");
            u("#breaker_avn_1_nav_1_eng", "g#handle_avn_1_nav_1_eng", "#avionics_bus1_switch", "g#handle_avn_1_breaker")
        });
        $("#breaker_avn_2_mfd").on("click", function() {
            b("g#handle_avn_2_mfd line:eq(0)", "g#handle_avn_2_mfd line:eq(1)", "g#handle_avn_2_mfd path",
                "g#handle_avn_2_mfd");
            u("#breaker_avn_2_mfd", "g#handle_avn_2_mfd", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        });
        $("#breaker_avn_2_xpndr").on("click", function() {
            b("g#handle_avn_2_xpndr line:eq(0)", "g#handle_avn_2_xpndr line:eq(1)", "g#handle_avn_2_xpndr path", "g#handle_avn_2_xpndr");
            u("#breaker_avn_2_xpndr", "g#handle_avn_2_xpndr", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        });
        $("#breaker_avn_2_nav_2").on("click", function() {
            b("g#handle_avn_2_nav_2 line:eq(0)", "g#handle_avn_2_nav_2 line:eq(1)",
                "g#handle_avn_2_nav_2 path", "g#handle_avn_2_nav_2");
            u("#breaker_avn_2_nav_2", "g#handle_avn_2_nav_2", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        });
        $("#breaker_avn_2_comm_2").on("click", function() {
            b("g#handle_avn_2_comm_2 line:eq(0)", "g#handle_avn_2_comm_2 line:eq(1)", "g#handle_avn_2_comm_2 path", "g#handle_avn_2_comm_2");
            u("#breaker_avn_2_comm_2", "g#handle_avn_2_comm_2", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        });
        $("#breaker_avn_2_audio").on("click", function() {
            b("g#handle_avn_2_audio line:eq(0)",
                "g#handle_avn_2_audio line:eq(1)", "g#handle_avn_2_audio path", "g#handle_avn_2_audio");
            u("#breaker_avn_2_audio", "g#handle_avn_2_audio", "#avionics_bus2_switch", "g#handle_avn_2_breaker")
        });
        $(".standbybattery_arm").on("click", function() {
            "off" == e && ($(".standbybattery").addClass("standbybattery_armed"), $("#on_off_control line:eq(0)").attr({
                    x1: 912.025,
                    x2: 912.025
                }), $("#on_off_control line:eq(1)").attr({
                    x1: 912.025,
                    x2: 894.299
                }), $("#stby_batt_switch_top").attr({
                    y2: 198.741
                }), $("#stby_batt_switch_bottom").attr({
                    y2: 264.741
                }),
                $("#stby_batt_arm_connector").attr({
                    y1: 269.838,
                    y2: 204.419
                }), e = "arm", $("#standby_batt_controller").removeClass("no_power"), s(), g("audio_sbatt_arm"))
        });
        $(".standbybattery_test").on("click", function() {
            "arm" == e && ($(".standbybattery").removeClass("standbybattery_armed"), $("#standby_battery, #eis_right").removeClass("standby_power battery_power alternator_power external_power").addClass("standby_power"), $("#standby_batt_controller, #eis_right, #stby_batt_diode").removeClass("standby_power battery_power alternator_power external_power"),
                $("#standby_batt_controller").addClass("no_power"), $("#ess_to_stby_wire, #stby_batt_arm_breaker_connector").removeClass("standby_power"), $(n).each(function(a, b) {
                    $(b).removeClass("standby_power")
                }), $("#stby_batt_switch_top").attr({
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
                }), e = "off", s(), g("audio_sbatt_off"),
                $("#feeder_a").hasClass("isOpen") && $("#feeder_b").hasClass("isOpen") && ($("#status_epu span").hasClass("epu_disconnected") ? $("#ess_bus g").addClass("battery_power feeder_open") : $("#ess_bus g").addClass("external_power feeder_open")))
        });
        $(".standbybattery_test").on("mousedown touchstart", function(a) {
            "off" == e && (e = "test", $(".standbybattery").addClass("standbybattery_testing"), $("#standby_batt_controller").removeClass("no_power"), $("#stby_batt_switch_top").attr({
                    y2: 219.425
                }), $("#stby_batt_switch_bottom").attr({
                    y2: 283.84
                }),
                B(), $("#stby_batt_arm_connector").attr({
                    y1: 277.306,
                    y2: 214.168
                }), $("#standby_test_led").addClass("standby_test_led_on"), $("#standby, #stby_batt_diode, #testled").addClass("standby_power"), $("#standby_batt_controller_bottom").removeClass("no_power"), g("audio_sbatt_test"))
        });
        $(".standbybattery_test").on("mouseup mouseleave touchend", function(a) {
            "test" == e && (e = "off", $(".standbybattery").removeClass("standbybattery_testing"), $("#stby_batt_switch_top").attr({
                    y2: 209.425
                }), $("#stby_batt_switch_bottom").attr({
                    y2: 273.84
                }),
                E(), $("#stby_batt_arm_connector").attr({
                    y1: 272.838,
                    y2: 209.419
                }), $("#standby_test_led").removeClass("standby_test_led_on"), $("#standby, #stby_batt_diode, #testled").removeClass("standby_power"), g("audio_sbatt_off"))
        });
        $(".standbybattery_test").on({
            mousedown: function() {
                $(this).toggleClass("active")
            },
            mouseedown: function() {
                $(this).addClass("inside")
            },
            mouseleave: function() {
                $(this).removeClass("inside")
            }
        });
        $("#toggle_names").toggle(function() {
                $("#labels").hide();
                $("#toggle_names").text("Show Labels")
            },
            function() {
                $("#labels").show();
                $("#toggle_names").text("Hide Labels")
            });
        $("#switch_pulselite").on("click", function() {
            $("#switch_pulselite").hasClass("pulselite_off") ? ($("#switch_pulselite").removeClass("pulselite_off").addClass("pulselite_on"), g("audio_switch_open")) : ($("#switch_pulselite").removeClass("pulselite_on").addClass("pulselite_off"), g("audio_switch_closed"))
        });
        $("#mfd").toggle(function() {
                $("#mfd_electrical_info, #mfd").animate({
                    right: "+=220"
                }, 1E3);
                $("#mfd_button").attr("src", "images/arrow_right.png")
            },
            function() {
                $("#mfd_electrical_info, #mfd").animate({
                    right: "-=220"
                }, 1E3);
                $("#mfd_button").attr("src", "images/arrow_left.png")
            });
        $("#pfd").toggle(function() {
            $("#pfd_info, #pfd").animate({
                left: "+=220"
            }, 1E3);
            $("#pfd_button").attr("src", "images/arrow_left.png")
        }, function() {
            $("#pfd_info, #pfd").animate({
                left: "-=220"
            }, 1E3);
            $("#pfd_button").attr("src", "images/arrow_right.png")
        });
        $("#header_menu").toggle(function() {
                $(".menu_container").animate({
                    top: "+=202"
                }, 1E3);
                $("#menu_down").attr("src", "images/button_menu_up.png")
            },
            function() {
                $(".menu_container").animate({
                    top: "-=202"
                }, 1E3);
                $("#menu_down").attr("src", "images/button_menu_down.png")
            });
        $("#rollover_feeder_b").on("click", function() {
            var a = $("g#feeder_b, #feeder_b_line, #elec_bus_top g, #avn_top g, #xfeed_wire_top_left, #xfeed_diode_top, #xfeed_diode_wire_top, #ess_diode_left_top, #ess_diode_top, #ess_diode_wire_top");
            $("g#feeder_b").hasClass("isClosed") ? a.addClass("feeder_open") : a.removeClass("feeder_open");
            b("g#feeder_b line:eq(1)", "g#feeder_b line:eq(0)", "g#feeder_b path",
                "g#feeder_b")
        });
        $("#rollover_feeder_a").on("click", function() {
            var a = $("g#feeder_a, #feeder_a_line, #elec_bus_bottom g, #avn_bottom g, #xfeed_wire_bottom_left, #xfeed_diode_bottom, #xfeed_diode_wire_bottom, #ess_diode_left_bottom, #ess_diode_bottom, #ess_diode_wire_bottom");
            $("g#feeder_a").hasClass("isClosed") ? a.addClass("feeder_open") : a.removeClass("feeder_open");
            b("g#feeder_a line:eq(1)", "g#feeder_a line:eq(0)", "g#feeder_a path", "g#feeder_a")
        });
        $("#master_battery_switch,#master_alternator_switch,#rollover_feeder_b,#rollover_feeder_a").on("click",
            function() {
                $("#feeder_b").hasClass("isClosed") || $("#feeder_a").hasClass("isClosed") ? ($("#ess_bus g, #x-feed-bus, #x-feed-bus g, #warn, #alt_field, #alt_master g, #alt_master_wire, #power_in, #ess_diode_right_top, #ess_diode_right_bottom").removeClass("feeder_open"), $("#alternator_relay").hasClass("isOpen") && $("#alt_field_breaker").hasClass("isClosed") && $("#alt_master g").hasClass("isClosed") && (k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").removeClass("no_power"))) :
                    ($("#ess_bus g, #x-feed-bus, #x-feed-bus g, #warn, #alt_field, #alt_master g, #alt_master_wire, #power_in, #ess_diode_right_top, #ess_diode_right_bottom").addClass("feeder_open"), $("#alternator_relay").hasClass("isClosed") && $("#alt_master g").hasClass("isClosed") && (k("#alternator_relay line:eq(2)", "#alternator_relay line:eq(1)", "#alternator_relay"), $("#alternator_relay line:eq(2), #alternator_relay_ground, #alternator_output, #alternator_field, #alternator_ground, #alt_master g, #alt_master_wire, #power_in").addClass("no_power")));
                s()
            });
        $("#header_engine,#master_battery_switch,#master_alternator_switch,#breaker_x_feed_alt_field,#rollover_feeder_b,#rollover_feeder_a").on("click", function() {
            if ($("#feeder_b").hasClass("isOpen") && $("#feeder_a").hasClass("isOpen")) G();
            else if ($("#alt_master g").hasClass("isClosed") && $("#status_engine span").hasClass("engine_status_running") && $("#alt_field g").hasClass("isClosed")) {
                var a = w;
                "on" == m ? (d(a, "alternator_power"), d(r, "alternator_power")) : d(a, "alternator_power");
                t = "on";
                s()
            } else "on" == t && y(w)
        });
        $("#master_battery_switch,#master_alternator_switch,#header_epu,#header_engine,.standbybattery_arm,.standbybattery_test").on("click", function() {
            $("#annunciators_low_volts, #annunciators_oil_pressure, #annunciators_stby_batt, #annunciators_low_vacuum").addClass("hide");
            $("#status_engine span").hasClass("engine_status_shutdown") ? $("#master_battery_switch").hasClass("master_switch_on") ? $("#annunciators_low_volts, #annunciators_oil_pressure, #annunciators_low_vacuum").removeClass("hide") : "arm" == e && $("#annunciators_low_volts, #annunciators_oil_pressure, #annunciators_stby_batt, #annunciators_low_vacuum").removeClass("hide") :
                $("#master_alternator_switch").hasClass("master_switch_off") && ($("#master_battery_switch").hasClass("master_switch_off") && "arm" == e ? $("#annunciators_low_volts, #annunciators_stby_batt").removeClass("hide") : $("#master_battery_switch").hasClass("master_switch_on") && $("#annunciators_low_volts").removeClass("hide"));
            $("#alt_field_breaker").hasClass("isOpen") && $("#annunciators_low_volts").removeClass("hide");
            "off" == p ? $("#acu_low_volt line").removeClass("external_power battery_power") : $("#annunciators_low_volts").hasClass("hide") ||
                "off" != m ? $("#annunciators_low_volts").hasClass("hide") || "on" != m ? $("#acu_low_volt line").removeClass("external_power battery_power") : $("#acu_low_volt line").addClass("external_power") : $("#acu_low_volt line").removeClass("external_power").addClass("battery_power");
            $("#annunciators_low_volts").hasClass("hide") && $("#annunciators_low_volts").hasClass("hide") && $("#annunciators_stby_batt").hasClass("hide") && $("#annunciators_low_vacuum").hasClass("hide") ? $("#pfd_annunciators").css("border", "none") : $("#pfd_annunciators").css("border",
                "1px solid silver")
        });
        $("#header_engine,#master_battery_switch,#master_alternator_switch,#breaker_x_feed_alt_field,.standbybattery_arm,.standbybattery_test").on("click", function() {
            $("#alternator_relay").hasClass("isOpen") && $("#master_battery_switch").hasClass("master_switch_off") && "arm" == e ? ($("#mfd_eis_m_volts").text("0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("0"), $("#mfd_eis_s_amps").text("-3.0")) : $("#status_engine span").hasClass("engine_status_shutdown") && $("#master_battery_switch").hasClass("master_switch_on") &&
                "arm" == e || $("#status_engine span").hasClass("engine_status_shutdown") && $("#alternator_relay").hasClass("isOpen") && $("#alternator_relay").hasClass("isOpen") && "arm" == e ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-5.0"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_shutdown") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alternator_relay").hasClass("isOpen") && "off" == e ? ($("#mfd_eis_m_volts").text("24.0"),
                    $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-4.7"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_running") && $("#master_battery_switch").hasClass("master_switch_on") && $("#alternator_relay").hasClass("isOpen") && "off" == e ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-4.7"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_running") && $("#master_battery_switch").hasClass("master_switch_on") &&
                $("#alternator_relay").hasClass("isOpen") && "arm" == e ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-5.0"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_shutdown") && $("#master_alternator_switch").hasClass("master_switch_on") && "off" == e ? ($("#mfd_eis_m_volts").text("24.0"), $("#mfd_eis_e_volts").text("24.0"), $("#mfd_eis_m_amps").text("-4.7"), $("#mfd_eis_s_amps").text("0")) : $("#status_engine span").hasClass("engine_status_running") &&
                $("#alternator_relay").hasClass("isClosed") && "arm" == e ? ($("#mfd_eis_m_volts").text("28.1"), $("#mfd_eis_e_volts").text("28.0"), $("#mfd_eis_m_amps").text("1.5"), $("#mfd_eis_s_amps").text("0.2")) : $("#status_engine span").hasClass("engine_status_running") && $("#alternator_relay").hasClass("isClosed") && "off" == e && ($("#mfd_eis_m_volts").text("28.1"), $("#mfd_eis_e_volts").text("28.0"), $("#mfd_eis_m_amps").text("1.7"), $("#mfd_eis_s_amps").text("0"))
        });
        $("#master_battery_switch,#master_alternator_switch,#master_avionics2_switch,#master_avionics1_switch,#breaker_avn_1,#breaker_avn_2,#breaker_ess_pfd,#breaker_avn_1_pfd,#breaker_avn_2_mfd,.standbybattery_arm,.standbybattery_test,#rollover_feeder_b,#rollover_feeder_a").on("click",
            function() {
                !$("g#handle_avn_2_mfd").hasClass("isOpen") && $("#master_avionics2_switch").hasClass("avionics_switch_on") && $("#master_battery_switch").hasClass("master_switch_on") && !$("g#handle_avn_2_breaker").hasClass("isOpen") && $("#feeder_a").hasClass("isClosed") ? $("#mfd_img_overlay").addClass("hide") : $("#mfd_img_overlay").removeClass("hide");
                $("g#handle_ess_pfd").hasClass("isClosed") && $("div.standbybattery").hasClass("standbybattery_armed") && $("g#handle_ess_stdby_batt").hasClass("isClosed") ? $("#pfd_img_overlay").addClass("hide") :
                    $("#master_battery_switch").hasClass("master_switch_on") && !$("g#handle_ess_pfd").hasClass("isOpen") || $("#master_battery_switch").hasClass("master_switch_on") && $("#master_avionics1_switch").hasClass("avionics_switch_on") && !$("g#handle_avn_1_pfd").hasClass("isOpen") && $("g#handle_avn_1_breaker").hasClass("isClosed") && $("#feeder_b").hasClass("isClosed") ? $("#pfd_img_overlay").addClass("hide") : $("#pfd_img_overlay").removeClass("hide");
                $("#feeder_b").hasClass("isOpen") && $("#feeder_a").hasClass("isOpen") &&
                    "arm" != e && $("#pfd_img_overlay").removeClass("hide")
            })
    })
});