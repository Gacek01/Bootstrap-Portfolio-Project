'use strict';
$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		$('body').animate({
			scrollTop: $(this.hash).offset().top - 50
		}, 500);
	});
	//Efekt Nav-Bar Transparency
	$(window).scroll(function () {
			if ($(window).scrollTop() > 71) {
				$('#main-nav').css({
					"background-color": "deepskyblue"
					, "transition-duration": "1s"
				})
			}
			else {
				$('#main-nav').css({
					"background-color": "transparent"
					, "transition-duration": "1s"
				})
			}
		})
		//Efekt Smooth Scroll
	window.sr = ScrollReveal().reveal("[class*=col-], .row, row>h2");
	sr.reveal('figure', {
		duration: 2000
	}, 300);
})