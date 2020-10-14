var window_w = $(window).width();

function goto($hashtag){
	document.location = '/html/guide.html' + $hashtag;
}

function Marquee (selector, direction, speed){
	var initMarginLeft 	= direction == 'left' ? '0%' : '-100%',
		marginLeft 		= direction == 'left' ? '-100%' : '0',
		target			= '',
		$this			= this;

	// 생성
	this.create = function(){
		var marquee = $(selector);
		marquee.css({'overflow': 'hidden', 'width': '100%'});

		marquee.wrapInner('<span class="wrapper">');
		marquee.find('.wrapper').css({ 'width': '50%', 'display': 'inline-block', 'text-align':'center' });
		marquee.append(marquee.find('.wrapper').clone());

		marquee.wrapInner('<div class="innerbox">');
		marquee.find('.innerbox').css('width', '350%');

		this.continuous_play();
	};

	// 연속 재생
	this.continuous_play = function() {
		target = $(selector).find('.innerbox');

		target.css('margin-left', initMarginLeft);
		target.animate({'margin-left': marginLeft }, speed, 'linear', function(){
			$this.continuous_play();
		});
	};

	// 재시작
	this.play = function(){
		target.animate({'margin-left': marginLeft }, speed, 'linear', function(){
			$this.continuous_play();
		});
	};

	// 중지
	this.stop = function(){
		target.stop(true);
	};

	if (selector){
		this.create();
	}
}

//공통 알럿
function popAlert(title, text, action) {
	$('.pop pop_alert').remove();
	var ele = "";

	ele += ('<div class="pop pop_alert">');
	ele += ('	<div class="pop_wrap">');
	ele += ('		<div class="pop_top">' + title+ '</div>');
	ele += ('		<div class="pop_body">' + text +'</div>');
	ele += ('		<div class="pop_bottom mt20">');
	ele += ('			<a href="" class="pop_alt_close">닫기</a>');
	ele += ('		</div>');
	ele += ('	</div>');
	ele += ('</div>');

	$('body').append(ele);

	$('.pop_alert').show(1, popupToCenter);
	$('body').addClass('pop_fix');

	$('.pop_alt_close').click(function() {
		if (action) {
			action();
		}

		$('.pop_alert').remove();
		$('body').removeClass('pop_fix');

		return false;
	});
}

//팝업 센터 맞추기
function popupToCenter() {

	$('.pop .pop_wrap').each(function(){
		var marginTop = $(this).outerHeight()/2;
		if ($(this).outerHeight() > $(window).height()) {
			marginTop = $(window).height()/2;
		}
		$(this).css({"margin-left":-$(this).outerWidth()/2,"margin-top":-marginTop});
	});

	return false;
}
