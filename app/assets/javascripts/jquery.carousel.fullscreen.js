/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
	$('#carousel-example-generic1').carousel({
    	pause: "false",
    	interval: 4000
	});
	var mq = window.matchMedia( "(min-width: 768px)" );

	$('#carousel-example-generic1').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	$('#carousel-example-generic1 .item').css({'position': 'fixed', 'width': '100%', 'height': '100%'});
	
	if (mq.matches) { 
		$('.carousel-inner1 div.item img.widescreen').each(function(){
			var imgSrc = $(this).attr('src');
			$(this).parent().css({
				'background': 'url(' + imgSrc + ') center center no-repeat',
				'-webkit-background-size': '100% ',
				'-moz-background-size': '100%',
				'-o-background-size': '100%',
				'background-size': '100%',
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover'
			});
			$(this).remove();
		});
		$('.carousel-inner1 div.item img.phone').each(function(){
			$(this).remove();
		});
	} else {
		$('.carousel-inner1 div.item img.phone').each(function(){
			var imgSrc = $(this).attr('src');
			$(this).parent().css({
				'background': 'url(' + imgSrc + ') center center no-repeat',
				'-webkit-background-size': '100% ',
				'-moz-background-size': '100%',
				'-o-background-size': '100%',
				'background-size': '100%',
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover'
			});
			$(this).remove();
		});
		$('.carousel-inner1 div.item img.widescreen').each(function(){
			$(this).remove();
		});
	}
	$(window).on('resize', function() {
		$('#carousel-example-generic1').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	});
}); 