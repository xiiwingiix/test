// scroll
$(window).scroll(function(){
	var scroll_top = $(document).scrollTop();

	// header
	if (scroll_top > 0) {
		$('header').hide();
		$('aside').addClass('scr');
	} else {
		$('header').show();
		$('aside').removeClass('scr');
	}

	return false;
});

// main_nav
$(document).on('click','.main_nav > li', function(){
	var is_open = $(this).find('.sub_nav').is(':visible');

	if (is_open) {
		$('.sub_nav').hide();
	} else {
		$(this).find('.sub_nav').show();
	}

	return false;
});

// sub_nav
$(document).on('click','.sub_nav a', function(){
	var hashtag = $(this).attr('href');

	$('.sub_nav li.on').removeClass('on');
	$(this).closest('li').addClass('on');

	goto(hashtag);

	return false;
});

function goto($hashtag){
	document.location = "/html/guide.html" + $hashtag;
}

$(document).on('mouseenter','.colors_guide > li', function(){
	$(this).closest('.colors_guide').find('li').removeClass('on');
	$(this).addClass('on');


	return false;
});
