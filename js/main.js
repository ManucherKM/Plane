$(windiw).scroll(function {
	$('.skills').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOwindow+650) {
			$(this).addClass("fadeInLeft")
		}
	})
})