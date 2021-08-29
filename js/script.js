$(document).ready(function(burger) {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(burger) {
	$('.header__menu').click(function(event){
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});


$(document).ready(function(){
	var controls = {
		video: $(".video__clip"),
		playpause: $(".video__playpause")
	};

	var video = controls.video[0];

	controls.playpause.click(function(){
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}

		$(this).toggleClass("paused");
	});
});

