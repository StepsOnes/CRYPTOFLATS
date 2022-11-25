// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//     loop: true,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplayTimeout: 0,
//     autoplaySpeed: 3000,
//     autoplayHoverPause: false,
//     mouseDrag: false,
//     dots: false,
//     autoWidth: true,
//     touchDrag: false,
//     });
// });

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        // items: 8,
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
// $(document).ready(function () {
//     var owl = $('#owl-1');
//     owl.owlCarousel({
//         items: 8,
//         loop: true,
//         margin: 20,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 0,
//         autoplaySpeed: 3000,
//         autoplayHoverPause: false
//
//     });
//
// });