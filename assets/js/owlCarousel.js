
$(document).ready(function(){
    $('.owl-carousel-1').owlCarousel({
        items: 8,
        rtl: true,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        autoWidth: true,
        mouseDrag: false,
    });

    $('.owl-carousel-2').owlCarousel({
        items: 8,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        autoWidth: true,
        mouseDrag: false,
    });
});

$(function () {
    $(window).on('resize', function () {
        var owlCarousel = $('.owl-carousel-3').data('owlCarousel');
        if ($(window).width() <= 767) {
            !owlCarousel && $('.owl-carousel-3').owlCarousel({
                items: 8,
                dots: false,
                loop: true,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout: 2000,
                autoplaySpeed: 2000,
                autoplayHoverPause: false,
                autoWidth: true,
                mouseDrag: false,
                touchDrag: false
            });
        } else {
            owlCarousel && owlCarousel.destroy();
        }
    }).trigger('resize');
});



$(function () {
    $(window).on('resize', function () {
        var owlCarousel = $('.theGame-carousel').data('owlCarousel');
        if ($(window).width() <= 767) {
            !owlCarousel && $('.theGame-carousel').owlCarousel({
                items: 1,
                dots: true,
                autoWidth: true,
            });
        } else {
            owlCarousel && owlCarousel.destroy();
        }
    }).trigger('resize');
});