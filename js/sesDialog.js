$(document).ready(function() {

    $.fx.speeds._default = 500;
    $(function() {
        $('#dialog_text div, #switch_buttons, #master_buttons, #breaker_buttons').dialog({
            autoOpen: false,
            show: "fade",
            hide: "fade",

        });
        $('#switch_buttons, #master_buttons, #breaker_buttons').dialog({
            resizable: false
        });




        // Header Widget Buttons
        //Master Switch Button Launcher
        $("#header_master").click(function() {

            ($("#master_buttons").dialog("isOpen") == false) ? $("#master_buttons").dialog("open"): $("#master_buttons").dialog("close");
        });
        $("#master_buttons").dialog({
            title: 'Master Switches',
            height: 223,
            width: 181,
            position: {
                my: 'right top',
                at: 'center bottom',
                of: $('#header_master')
            }
        });

        //Switch Button Launcher
        $("#header_switches").click(function() {

            ($("#switch_buttons").dialog("isOpen") == false) ? $("#switch_buttons").dialog("open"): $("#switch_buttons").dialog("close");
        });

        $("#switch_buttons").dialog({
            title: 'Switches',
            height: 200,
            width: 214,
            position: {
                my: 'right top',
                at: 'center bottom',
                of: $('#header_switches')
            }
        });

        //Breaker Button Launcher
        $("#header_breaker").click(function() {

            ($("#breaker_buttons").dialog("isOpen") == false) ? $("#breaker_buttons").dialog("open"): $("#breaker_buttons").dialog("close");
        });

        $("#breaker_buttons").dialog({
            title: 'Circuit Breakers',
            height: 200,
            width: 565,
            position: {
                my: 'right top',
                at: 'center bottom',
                of: $('#header_breaker')
            }
        });




        var wHeight = $(window).height();
        var wWidth = $(window).width();
        if (wHeight > 830) {
            $('#switch_buttons, #master_buttons, #breaker_buttons').dialog({
                autoOpen: true,
                dialogClass: 'buttonBoxes'
            });
            $("#master_buttons").dialog({
                position: {
                    my: 'left top',
                    at: 'left bottom',
                    of: $('#main_svg_wrapper'),
                    offset: '0 10px'
                }
            });
            $("#switch_buttons").dialog({
                position: {
                    my: 'left top',
                    at: 'left bottom',
                    of: $('#main_svg_wrapper'),
                    offset: '800px 10px'
                }
            });
            $("#breaker_buttons").dialog({
                position: {
                    my: 'left top',
                    at: 'left bottom',
                    of: $('#main_svg_wrapper'),
                    offset: '208px 10px'
                }
            });

        }

        $(window).on('resize', function() {
            if ($(window).height() > 830) {
                $('#switch_buttons, #master_buttons, #breaker_buttons').dialog('open');
                $("#master_buttons").dialog({
                    position: {
                        my: 'left top',
                        at: 'left bottom',
                        of: $('#main_svg_wrapper'),
                        offset: '0 8px'
                    }
                });
                $("#switch_buttons").dialog({
                    position: {
                        my: 'left top',
                        at: 'left bottom',
                        of: $('#main_svg_wrapper'),
                        offset: '800px 8px'
                    }
                });
                $("#breaker_buttons").dialog({
                    position: {
                        my: 'left top',
                        at: 'left bottom',
                        of: $('#main_svg_wrapper'),
                        offset: '208px 8px'
                    }
                });
            }
        });
        //End of text dialog box function





    });



});