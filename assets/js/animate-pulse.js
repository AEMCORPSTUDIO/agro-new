$('.js-animate-pulse').hover(
	function() {
		$(this).addClass('animated pulse');
	},
	function() {
		$(this).removeClass('animated pulse');
	}
	);