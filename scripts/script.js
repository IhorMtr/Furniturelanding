$('#owl-one').owlCarousel({
    autoplay: false,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: false,
    nav: false,
    margin: 0,
    dots: false,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1100: {
            items: 3
        }
    },
});


$('#owl-two').owlCarousel({
    autoplay: false,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: false,
    nav: true,
    margin: 0,
    dots: false,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1100: {
            items: 3
        }
    },
});

