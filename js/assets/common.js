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
