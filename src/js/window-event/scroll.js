// Window Scroll Handler

(function ($) {
	$(window).on('scroll', function () {
		const headerImage = $('.site-header .logo-column .wp-block-image img');
		const shrinkClass = 'shrink-on-scroll'
		if (window.scrollY > 150) {
            headerImage.addClass(shrinkClass); // Shrink element when scrolled down
        } else {
            headerImage.removeClass(shrinkClass); // Restore size when back at top
        }
	});
})(jQuery);
