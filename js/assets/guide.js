
$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return '0'+current + ' / ' + '0'+total;
			}
		},
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
})
// scroll
var lastScrollTop = 0;
$(window).scroll(function(){
	var scroll_top 	= $(this).scrollTop();
	var offset 		= $('aside').offset().top;

	if (scroll_top > 0) {
		$('header').hide();

		if (scroll_top > offset){
			$('aside > ul').css('position','fixed');
		}
	}  else {
		$('header').slideDown(20);
		$('aside > ul').css('position','absolute');
	}

	$('section').each(function(index, item){
		var target = $('section').eq(index),
			target_top = target.offset().top,
			target_class = target.attr('class');

		if (target_top < scroll_top){
			$('.main_nav > li.on').removeClass('on');
			$('.main_nav > li.'+target_class).addClass('on');
		}

});
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
