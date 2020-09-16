// scroll
$(window).scroll(function(){
	var scroll_top = $(document).scrollTop();

	// header
	if (scroll_top > 0) {
		$('header').hide();
	} else {
		$('header').show();
	}

	return false;
});
