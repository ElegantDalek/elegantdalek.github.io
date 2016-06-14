var main = function(){
	$('.btn-menu').on('click', function(event){
		event.preventDefault();

		var slideoutMenu = $('.menu');
		var slideoutMenuWidth = $('.menu').width();

		slideoutMenu.toggleClass("open");

		if (slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
				left: "0px"

			}, 200);
		} else {
			slideoutMenu.animate({
				left: -slideoutMenuWidth
			}, 200);
		}
	});

};

$(document).ready(main);