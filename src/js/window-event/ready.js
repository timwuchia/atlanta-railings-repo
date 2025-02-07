// Windows Ready Handler
(function ($) {
	$(document).ready(function () {
		$('.exit-get-free-quote').click(function(){
			$('.get-quote-form').removeClass('show')
		})
		$('.get-a-quote').click(function(){
			$('.get-quote-form').addClass('show')
		})

		$('.wp-block-lg-blocks-accordion-item h3').click(function(){
			console.log('kkkk')
			// $('.accordion-collapse').slideUp();
		})
	});
})(jQuery);
