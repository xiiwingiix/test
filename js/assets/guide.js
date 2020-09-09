// main_nav
$(document).on('click','.main_nav li', function(){
	var is_open = $('.sub_nav').is(':visible');

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