$(document).ready(function () {

    // Nft Slider

    $('.slider-1').owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2000,
    });

    $('.slider-2').owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        rtl: true,
        autoplayTimeout: 2000,
        dots: false
    });


    // Counter 

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });

})