
$(document).ready(function(){
	// logo - primary B.I
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return '0'+current + ' / ' + '0'+total;
			}
		},
		effect: 'fade',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	$('header').attr('theme','dark');
});


var lastScrollTop = 0;
$(window).scroll(function(){
	var scroll_top 	= $(this).scrollTop();
	var offset 		= $('aside').offset().top;
	var lazyloadtimeout;

	$('aside > ul').css('position', (scroll_top > offset ? 'fixed' : 'absolute'));

	$('section').each(function(index, item){
		var target 		 = $(this),
			target_top 	 = target.offset().top,
			target_class = target.attr('class');

		if (target_top < scroll_top){
			if (window_w < 1200) {
				$('.tab_gnb .txt').html(target_class+' - <span class="category_list"></span>')
			} else {
				$('.main_nav > li.on').removeClass('on');
				$('.main_nav > li.'+target_class).addClass('on');
			}

		}
	});

	$('section > div').each(function(index, item){
		var target 		= $(this),
			target_top 	= target.offset().top,
			target_id 	= target.attr('id')

		if (target_top < scroll_top){
			if (window_w < 1200) {
				var category_list = $('.sub_nav [href="#'+target_id+'"]').text();
				$('.category_list').text(category_list);
			} else {
				$('.sub_nav > li.on').removeClass('on');
				$('.sub_nav [href="#'+target_id+'"]').closest('li').addClass('on');
			}
		}
	})

	if (lazyloadtimeout) {
		clearTimeout(lazyloadtimeout);
	}

	lazyloadtimeout = setTimeout(function() {
		$('.lazy').each(function(index, item){
			if(($(window).innerHeight() + scroll_top) > $(this).offset().top){
				var img_src = $(this).attr('data-src');
				$(this).attr('src', img_src);
			}
		});
	}, 200);

	return false;
});

// logo- family
$(document).on('mouseenter','.zomm_img_list > img', function(){
	var img_idx = $(this).index();
	var img_src = $(this).attr('src');
	var $target = $(this).closest('.zoom_img').find('.zoom_target');

	$target.find('img').attr('src',img_src);
	$target.find('p > span.on').removeClass('on');
	$target.find('span').eq(img_idx).addClass('on');

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



// img slider
$(document).on('input', '[name="img_slider"]', function(){
	var target 	= $(this).siblings('.img_slider');
	var total_w	= target.width();
	var img_w 	= total_w * (1- $(this).val() / 100 );

	$('.guide_line').css('width',img_w);

	return false;
});


// tab
$(document).on('click','.tab li', function(){
	var bSel_grid 	= $(this).closest('.tab').hasClass('sel_grid');
	var bsel_frame 	= $(this).closest('.tab').hasClass('sel_frame');

	$(this).closest('.tab').find('.on').removeClass('on');
	$(this).addClass('on');


	if (bSel_grid) {
		var col = $(this).text().split('-')[0];
		$(this).closest('.aside_tab').find('.img_list  > li.on').removeClass('on');
		$(this).closest('.aside_tab').find('li.col_'+col).addClass('on');
	} else if (bsel_frame) {
		var tab_idx = $(this).index();
		$(this).closest('.top_tab').find('.img_list > li.on').removeClass('on');
		$(this).closest('.top_tab').find('.img_list > li').eq(tab_idx).addClass('on');
	}

	return false;
});

// colors
$(document).on('mouseenter', '.colors_guide > li', function(){
	$(this).siblings().removeClass('on');
	$(this).addClass('on');

	return false;
});
