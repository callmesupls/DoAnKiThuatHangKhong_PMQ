//Thư viện jquery hỗ trợ

/*
 * jQuery UI Position @VERSION
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Position
 */
(function($) {

    $.ui = $.ui || {};

    var horizontalPositions = /left|center|right/,
        horizontalDefault = 'center',
        verticalPositions = /top|center|bottom/,
        verticalDefault = 'center',
        _position = $.fn.position;

    $.fn.position = function(options) {
        if (!options || !options.of) {
            return _position.apply(this, arguments);
        }

        // make a copy, we don't want to modify arguments
        options = $.extend({}, options);

        var target = $(options.of),
            collision = (options.collision || 'flip').split(' '),
            offset = options.offset ? options.offset.split(' ') : [0, 0],
            targetWidth,
            targetHeight,
            basePosition;

        if (options.of.nodeType === 9) {
            targetWidth = target.width();
            targetHeight = target.height();
            basePosition = {
                top: 0,
                left: 0
            };
        } else if (options.of.scrollTo && options.of.document) {
            targetWidth = target.width();
            targetHeight = target.height();
            basePosition = {
                top: target.scrollTop(),
                left: target.scrollLeft()
            };
        } else if (options.of.preventDefault) {
            // force left top to allow flipping
            options.at = 'left top';
            targetWidth = targetHeight = 0;
            basePosition = {
                top: options.of.pageY,
                left: options.of.pageX
            };
        } else {
            targetWidth = target.outerWidth();
            targetHeight = target.outerHeight();
            basePosition = target.offset();
        }

        // force my and at to have valid horizontal and veritcal positions
        // if a value is missing or invalid, it will be converted to center 
        $.each(['my', 'at'], function() {
            var pos = (options[this] || '').split(' ');
            pos = pos.length == 1 ?
                horizontalPositions.test(pos[0]) ?
                pos.concat([verticalDefault]) :
                verticalPositions.test(pos[0]) ?
                [horizontalDefault].concat(pos) :
                [horizontalDefault, verticalDefault] :
                pos;
            pos[0] = horizontalPositions.test(pos[0]) ? pos[0] : horizontalDefault;
            pos[1] = verticalPositions.test(pos[1]) ? pos[1] : verticalDefault;
            options[this] = pos;
        });

        // normalize collision option
        if (collision.length == 1) {
            collision[1] = collision[0];
        }

        // normalize offset option
        offset[0] = parseInt(offset[0], 10) || 0;
        if (offset.length == 1) {
            offset[1] = offset[0];
        }
        offset[1] = parseInt(offset[1], 10) || 0;

        switch (options.at[0]) {
            case 'right':
                basePosition.left += targetWidth;
                break;
            case horizontalDefault:
                basePosition.left += targetWidth / 2;
                break;
        }

        switch (options.at[1]) {
            case 'bottom':
                basePosition.top += targetHeight;
                break;
            case verticalDefault:
                basePosition.top += targetHeight / 2;
                break;
        }

        basePosition.left += offset[0];
        basePosition.top += offset[1];

        return this.each(function() {
            var elem = $(this),
                elemWidth = elem.outerWidth(),
                elemHeight = elem.outerHeight(),
                position = $.extend({}, basePosition),
                over,
                myOffset,
                atOffset;

            switch (options.my[0]) {
                case 'right':
                    position.left -= elemWidth;
                    break;
                case horizontalDefault:
                    position.left -= elemWidth / 2;
                    break;
            }

            switch (options.my[1]) {
                case 'bottom':
                    position.top -= elemHeight;
                    break;
                case verticalDefault:
                    position.top -= elemHeight / 2;
                    break;
            }

            $.each(['left', 'top'], function(i, dir) {
                ($.ui.position[collision[i]] &&
                    $.ui.position[collision[i]][dir](position, {
                        targetWidth: targetWidth,
                        targetHeight: targetHeight,
                        elemWidth: elemWidth,
                        elemHeight: elemHeight,
                        offset: offset,
                        my: options.my,
                        at: options.at
                    }));
            });

            ($.fn.bgiframe && elem.bgiframe());
            elem.offset($.extend(position, {
                using: options.using
            }));
        });
    };

    $.ui.position = {
        fit: {
            left: function(position, data) {
                var over = position.left + data.elemWidth - $(window).width() - $(window).scrollLeft();
                position.left = over > 0 ? position.left - over : Math.max(0, position.left);
            },
            top: function(position, data) {
                var over = position.top + data.elemHeight - $(window).height() - $(window).scrollTop();
                position.top = over > 0 ? position.top - over : Math.max(0, position.top);
            }
        },

        flip: {
            left: function(position, data) {
                if (data.at[0] == 'center')
                    return;
                var over = position.left + data.elemWidth - $(window).width() - $(window).scrollLeft(),
                    myOffset = data.my[0] == 'left' ? -data.elemWidth : data.my[0] == 'right' ? data.elemWidth : 0,
                    offset = -2 * data.offset[0];
                position.left += position.left < 0 ? myOffset + data.targetWidth + offset : over > 0 ? myOffset - data.targetWidth + offset : 0;
            },
            top: function(position, data) {
                if (data.at[1] == 'center')
                    return;
                var over = position.top + data.elemHeight - $(window).height() - $(window).scrollTop(),
                    myOffset = data.my[1] == 'top' ? -data.elemHeight : data.my[1] == 'bottom' ? data.elemHeight : 0,
                    atOffset = data.at[1] == 'top' ? data.targetHeight : -data.targetHeight,
                    offset = -2 * data.offset[1];
                position.top += position.top < 0 ? myOffset + data.targetHeight + offset : over > 0 ? myOffset + atOffset + offset : 0;
            }
        }
    };

    // offset setter from jQuery 1.4
    if (!$.offset.setOffset) {
        $.offset.setOffset = function(elem, options) {
            // set position first, in-case top/left are set even on static elem
            if (/static/.test(jQuery.curCSS(elem, 'position'))) {
                elem.style.position = 'relative';
            }
            var curElem = jQuery(elem),
                curOffset = curElem.offset(),
                curTop = parseInt(jQuery.curCSS(elem, 'top', true), 10) || 0,
                curLeft = parseInt(jQuery.curCSS(elem, 'left', true), 10) || 0,
                props = {
                    top: (options.top - curOffset.top) + curTop,
                    left: (options.left - curOffset.left) + curLeft
                };

            if ('using' in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        };

        var _offset = $.fn.offset;
        $.fn.offset = function(options) {
            var elem = this[0];
            if (!elem || !elem.ownerDocument) {
                return null;
            }
            if (options) {
                return this.each(function() {
                    $.offset.setOffset(this, options);
                });
            }
            return _offset.call(this);
        };
    }

})(jQuery);