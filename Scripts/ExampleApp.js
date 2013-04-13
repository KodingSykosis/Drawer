(function ($) {
    $.extend({
        intersects: function(box1, box2) {
            var ret = ((box1.left >= box2.left && box1.left <= box2.left + box2.width) &&
                (box1.top >= box2.top && box1.top <= box2.top + box2.height)) ||
            ((box1.left + box1.width >= box2.left && box1.left + box1.width <= box2.left + box2.width) &&
                (box1.top + box1.height >= box2.top && box1.top + box1.height <= box2.top + box2.height));

            $.debug('debug', 'jQuery.Utils', 'intersects', box1, box2, ret);
            return ret;
        },
        emptyBox: function() {
            return { left: 0, top: 0, width: 0, height: 0 };
        },
        id: function() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 8; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        }
    });

    $(function() {
        $('#drawer').Drawer({
            workspace: '#workspace',
            dock: 'left'
        });
    });
})(jQuery);