$(window).scroll(function(){
	var scroll_top = $(document).scrollTop();

	// header
	if (scroll_top > 0) {
		$( 'header' ).hide();
	} else {
		$( 'header' ).show();
	}

	return false;
});
// main_nav
$(document).on('click','.main_nav > li', function(){
	var item = $(this).parent().attr('class');
	var is_open = $('.sub_nav.'+item).is(':visible');

	if (is_open) {
		$('.sub_nav').hide();
	} else {
		$(this).find('.sub_nav').show();
	}

	return false;
});

// sub_nav
$(document).on('click','.sub_nav li', function(){
	$('.sub_nav li.on').removeClass('on');
	$(this).addClass('on');

	return false;
});
