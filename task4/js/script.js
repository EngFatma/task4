$(document).ready(function() {

    $('.owl-one').owlCarousel({
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                loop: true

            },
            576: {
                items: 2,
                loop: true
            },
            768: {
                items: 3,
                loop: true
            },

            992: {
                items: 4,
                loop: true
            }
        }
    });
    $('.owl-two').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        dotsEach: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                dots: true,

            },
            576: {
                items: 2,
                loop: true,
                dots: true,
            },
            992: {
                items: 3,
                loop: true,
                dots: true,
            },
            1200: {
                items: 3,
                loop: true,
                dots: true,
            },



        }

    });


});