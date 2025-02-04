// Windows Ready Handler
(function ($) {
	$(document).ready(function () {
		$('.exit-get-free-quote').click(function(){
			$('.get-quote-form').removeClass('show')
		})
		$('.get-a-quote').click(function(){
			$('.get-quote-form').addClass('show')
		})
	});
})(jQuery);
