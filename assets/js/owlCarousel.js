// function $(document) {
//
// }

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
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

// jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
//     var owl = $('.owl-carousel');
//     owl.owlCarousel({
//         items: 8,
//         dots: false,
//         loop: true,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 1000,
//         autoplaySpeed: 1000,
//         autoplayHoverPause: false,
//         autoWidth: true
//     });
// });