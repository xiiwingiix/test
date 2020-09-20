// scroll 시 header
var lastScrollTop = 0;
$(window).scroll(function(e){
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		// downscroll code
		$('header').hide();
	} else if (st == 0) {
		$('.bg').slideUp(200);
		$('header').attr('theme','light');
	}
	else {
		// upscroll code
		$('header').attr('theme','dark').show();
		$('header .bg').show();
	}
	lastScrollTop = st;
});

// 검색 focus
$(document).on('focus','[name="search_faq"]', function(){
	$('.ico_search').css('color','#0c2340');
	$(this).addClass('focus');

	return false;
});

// 검색 blur
$(document).on('blur','[name="search_faq"]', function(){
	$('.ico_search').css('color','#dbe2e9');
	$(this).removeClass('focus');

	return false;
});

// 검색 버튼
$(document).on('click','.btn_research', function(){
	enterkey('enterbtn');

	return false;
});

// 좌측 메뉴 클릭
$(document).on('click','.main_nav li', function(){
	var tab = $(this).attr('tab');

	if ($(this).hasClass('on')) {
		return false
	} else {
		$('.main_nav li.on').removeClass('on');
		$(this).addClass('on');

		$('[tab-group]').each(function(){
			var tab_group = $(this).attr('tab-group');
			if (tab == tab_group) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	}

	return false;
});

// 제목 클릭
$(document).on('click','.tit', function(){

	if (!$(this).hasClass('on')){
		$('.tit.on').siblings('.txt').slideUp();
		$('.tit.on').removeClass('on');

		$(this).addClass('on');
		$(this).closest('div[tab-group]').find('.txt').slideDown();
	} else {
		$('.tit.on').removeClass('on');
		$('.txt').slideUp();
	}

	return false;
});

function enterkey(btn) {
	if (window.event.keyCode == 13 || btn) {

 		var search_word =  $('[name="search_faq"]').val();
		var show_cnt = 0;

		$('.txt').each(function(){
			var faq_txt  = $(this).text();
			var idx_word = faq_txt.indexOf(search_word);

			if (idx_word > 0){
				$(this).closest('[tab-group]').show();
				show_cnt ++;
			} else {
				$(this).closest('[tab-group]').hide();
			}
		});

		$('.main_nav li.on').removeClass('on');
		$('.no_result').remove();

		if (show_cnt < 1){
			$('.faq_content').append('<div class="no_result"><div class="txt"><b>검색 결과가 없습니다.</b></div></div>')
		}
	}

	return false;
}
