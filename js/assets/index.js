var banner_marquee;
$(document).ready(function(){
	// marquee
	banner_marquee = new Marquee('.banner', 'left', 10000);

	return false;
});

$(document).on('mouseover','.sld', function(){
	banner_marquee.stop();
	$(this).find('.txt').css('display','flex');

	return false;
});

$(document).on('mouseout','.sld', function(){
	banner_marquee.play();
	$(this).find('.txt').css('display','none');

	return false;
});
