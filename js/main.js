$(function(){

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

});


