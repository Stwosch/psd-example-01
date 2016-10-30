$(function() {

//functions
    //animations
	var textAnimation = function (val) {
    	$(val).animate({opacity: 1}, 500);
    };

    var boxGridAnimation = function () {
    	$('.boxGrid-box, .boxGrid-box-2').addClass('boxGrid-animation');
    };
	
	var fullImageAnimation = function () {
		$('.fullImage-text').addClass('fullImage-animation');
        $('.fullImage-link').addClass('fullImage-link-animation');
    };
    //end animations

    var scrollFunction = function (name, fnAnimate, value, fnArg=false) {

        $(window).scroll(function(){

            var position = $(name).offset().top - (value * $(name).offset().top);

            if($(window).scrollTop() > position) fnArg !=false ? fnAnimate(fnArg) : fnAnimate();

        });
    };

//end functions

//calls

scrollFunction('.fullImage', fullImageAnimation, 0.15);
scrollFunction('.boxGrid-box-2', boxGridAnimation, 0.6);
scrollFunction('.text', textAnimation, 0.8, '.text');
scrollFunction('.fourCol', textAnimation, 0.4, '.fourCol');
scrollFunction('.colour', textAnimation, 0.25, '.colour-content');
scrollFunction('.footer', textAnimation, 0.2, '.footer-box');

//end calls

//likes
    $('.heart').click(function(){

        if($(this).hasClass('icon-heart-empty')) {
            $(this).removeClass('icon-heart-empty');
            $(this).addClass('icon-heart');
        }
        else {
            $(this).removeClass('icon-heart');
            $(this).addClass('icon-heart-empty');
        }

    });
//end likes

});