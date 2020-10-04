var iframe_w, iframe_h;
var ytube_player;

$(document).ready(function(){
	// 메인 문구 및 이미지
	$('.lazy_loading').addClass('moved');

	// video
	iframe_w = $('.watchVideo').width();
	iframe_h = $('.btn_show_video').height();

	// marquee
	marquee($('.banner-top'), 'left', 40000);
	marquee($('.banner-bottom'), 'right', 40000);
});


$(window).scroll(function(){
	var scroll_top 	= $(this).scrollTop();

	$('.lazy').each(function(index, item){
		var target 		 = $(this),
			target_top 	 = target.offset().top;

		if (target_top-800 < scroll_top){
			target.addClass('fadeInScaleIn');
		}
	});

	return false;
});



$(document).on('click','.btn_show_video', function(){
	$('.btn_show_video').hide();
	$('.watchVideo').append('<div id="player"></div>');

	onYouTubeIframeAPIReady();

	return false;
});


function marquee(selector, direction){
	var marquee = selector;

	marquee.css({"overflow": "hidden", "width": "100%"});

	marquee.wrapInner("<span>");
	marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });

	marquee.append(marquee.find("span").clone());


	marquee.wrapInner('<div class="innerbox">');
	marquee.find(".innerbox").css("width", "350%");

	var reset = function() {
		if (direction == 'left'){
			$(this).css("margin-left", "0%");
			$(this).animate({ "margin-left": '-100%' }, 40000, 'linear', reset);
		} else {
			$(this).css("margin-left", "-100%");
			$(this).animate({ "margin-left": '0' }, 40000, 'linear', reset);
		}
	};

	reset.call(marquee.find(".innerbox"));
}

function onYouTubeIframeAPIReady() {
	ytube_player = new YT.Player('player', {
		height: iframe_h,
		width: iframe_w,
		videoId: 'NiVXmLkcOiA',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
		$('#player').remove();
		$('.btn_show_video').show();
	}

}
function stopVideo() {
	ytube_player.stopVideo();
}
