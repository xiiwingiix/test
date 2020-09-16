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

$(document).on('click','.tit', function(){

	if (!$(this).hasClass('on')){
		$('.tit.on').removeClass('on');
		$('.txt.on').slideUp();

		$(this).addClass('on');
		$(this).closest('div[tab-group]').find('.txt').slideDown();
	} else {
		$('.tit.on').removeClass('on');
		$('.txt').slideUp();
	}

	return false;
});
