$(document).ready(function(){
	if (window_w < 1200) {
		$('header').attr('theme', 'dark');
	} else {
		$('header').attr('theme', 'light');
	}
});

// gnb tab
$(document).on('click','.tab_gnb', function(){
	var is_show = $('aside').is(':visible');

	if (is_show){
		$('aside').slideUp();
		$('body').removeClass('fixed');
	} else {
		$('aside').slideDown();
		$('body').addClass('fixed');
	}

	return false;
});

// 검색 focus
$(document).on('focus','[name="search_faq"]', function(){

	$('.ico_search').css('color','#c4d600');
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
$(document).on('click','[tab]', function(){
	var tab 	= $(this).attr('tab');
	var tab_txt = $(this).text();

	if ($(this).hasClass('on')) {
		return false
	} else {
		if (window_w < 1200){
			$('.tab_gnb .txt').text(tab_txt);

			$('aside').slideUp();
			$('body').removeClass('fixed');
		}

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
	$('[name="search_faq"]').val('')
	$('.no_result').remove();

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
			var faq_tit  = $(this).siblings('.tit').text();
			var faq_txt  = $(this).text();

			var search_txt 	= faq_tit + faq_txt;
			var idx_word 	= search_txt.indexOf(search_word);

			if (idx_word < 0){
				$(this).closest('[tab-group]').hide();
			} else {
				$(this).closest('[tab-group]').show();
				show_cnt ++;
			}
		});

		$('.tab_gnb .txt').text('No Category Chosen');

		$('.main_nav li.on').removeClass('on');
		$('.no_result').remove();

		if (show_cnt < 1){
			$('.faq_content').append('<div class="no_result"><div class="txt"><b>검색 결과가 없습니다.</b></div></div>')
		}
	}

	return false;
}
