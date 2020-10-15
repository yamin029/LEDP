$(document).ready(function() {
	// Super Slide
	$('#slides').superslides({
		play       : 5000,
		animation  : 'fade',
		pagination : false
	});
	//typed text animation
	var typed = new Typed('.typed', {
		// Waits 1000ms after typing "First"
		strings        : [ 'Web Developer.', 'Android Developer.', 'Flutter Developer' ],
		typeSpeed      : 150,
		loop           : true,
		showCursor     : false,
		smartBackspace : true
	});
	//owlCarousel
	$('.owl-carousel').owlCarousel({
		loop       : true,
		margin     : 10,
		nav        : true,
		responsive : {
			0    : {
				items : 1
			},
			600  : {
				items : 2
			},
			1000 : {
				items : 4
			}
		}
	});
	//for generation graph
	$('.chart').easyPieChart({
		easing     : 'easeInOut',
		barColor   : 'white',
		trackColor : false,
		scaleColor : false,
		lineWidth  : 4,
		animate    : 2000,
		size       : 152,
		enabled    : false,
		onStep     : function(from, to, currentValue) {
			$(this.el).find('.percent').text(Math.round(currentValue));
		}
	});
	$('.counter').counterUp({
		delay : 10,
		time  : 1000
	});

	var isActive = false;

	if ($(window).scrollTop() > $(window).height() + 600) {
		if (isActive === false) {
			$('.chart').data('easyPieChart').update(100);
			isActive = true;
		}
	}
});
