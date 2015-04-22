/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

(function($) {

    $.fn.unveil = function(threshold, callback) {

        var $w = $(window),
            th = threshold || 0,
            viewport = (function() {
                if (Modernizr.mq('only screen and (max-width: 640px)')) {
                    return 'mobile';
                } else if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 1023px)')) {
                    return 'tablet';
                } else {
                    return 'desktop';
                }
            })(),
            attrib = (function() {
                switch (viewport) {
                case 'desktop':
                    return 'data-src-lg';
                case 'tablet':
                    return 'data-src-md';
                case 'mobile':
                    return 'data-src-sm';
                default:
                    return 'data-src-lg';
                }
            })(),
            images = this,
            loaded;

        this.one('unveil', function() {
            var source = this.getAttribute(attrib);
            source = source || this.getAttribute('data-src-sm');
            if (source) {
                this.setAttribute('src', source);
                if (typeof callback === 'function') {
                    callback.call(this);
                }
            }
        });

        function unveil() {
            var inview = images.filter(function() {
                var $e = $(this);
                if ($e.is(':hidden')) {
                    return;
                }

                var wt = $w.scrollTop(),
                    wb = wt + $w.height(),
                    et = $e.offset().top,
                    eb = et + $e.height();

                return eb >= wt - th && et <= wb + th;
            });

            loaded = inview.trigger('unveil');
            images = images.not(loaded);
        }

        $w.on('scroll.unveil resize.unveil lookup.unveil', unveil);

        unveil();

        return this;

    };

})(window.jQuery || window.Zepto);
