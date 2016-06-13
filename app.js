var main = function(){
	$('.btn-menu').click(function(){
    	$('.menu').animate({
    		left: "0px"
    	}, 200);
    	$(this).addClass('menu-close');
    	$(this).removeClass('btn-menu');
    });

	$('.menu-close').click(function(){
		$('.menu').animate({
			left: "-285px"
		}, 200);
		$(this).addClass('btn-menu');
		$(this).removeClass('menu-close');
	});

};

$(document).ready(main);