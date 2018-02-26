$(document).ready(function(){ 
	$('.mobile-menu').click( function(e) {
        $(this).toggleClass("close");
        $('.header-nav').slideToggle();
    });
	$('.header-nav a').click(function(){
        $($(this).attr('href')).animatescroll();
	});
    $('.header-slider').slick({
        dots: true,
        autoplay: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.mini-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(function () {
        //script for popups
        $('.btn-popup').click(function () {
            $('.header-popup').fadeIn(500);
            $("body").append("<div id='overlay'></div>");
            $('#overlay').show();
            return false;
        });
        $('span.close').click(function () {
            $(this).parent().fadeOut(100);
            $('#overlay').remove('#overlay');
            return false;
        });
    });
    $('input, textarea').focus(function(){
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
});
