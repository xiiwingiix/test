$(document).ready(function(){
	auto_slide_banner('.auto_slide_banner', 'left')
});

function auto_slide_banner(selector, direction) {
	var banner_interval = 0;
	var first = 1;
	var last;
	var img_cnt		  = 0;
	var banner_cnt    = $(selector+' .banner').length;
	var $slide_banner = $(selector+' .banner');
	var $first;
	var $last;

	$slide_banner.each(function(){
		$(this).css(direction, bannerLeft);
		bannerLeft += $(this).width()+5;
		$(this).attr("id", "banner"+(++img_cnt));  // img에 id 속성 추가
	});


	if( img_cnt > banner_cnt+1){
		last = img_cnt;

		setInterval(function() {
			$img.each(function(){
				$(this).css(direction, $(this).position().direction-1); // 1px씩 왼쪽으로 이동
			});
			$first = $("#banner"+first);
			$last = $("#banner"+last);
			if($first.position().direction < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
				$first.css("left", $last.position().left + $last.width()+5 );
				first++;
				last++;
				if(last > img_cnt) { last=1; }
				if(first > img_cnt) { first=1; }
			}
		}, 10000); // 숫자 : 속도 1초 == 1000
 }

};
