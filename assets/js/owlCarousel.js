
$(document).ready(function(){
    $('.owl-carousel-1').owlCarousel({
        items: 8,
        rtl: true,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 1000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        autoWidth: true
    });

    $('.owl-carousel-2').owlCarousel({
        items: 8,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 1000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        autoWidth: true
    });
});
