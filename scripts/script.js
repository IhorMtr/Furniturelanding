$('.owl-carousel').owlCarousel({
    autoplay: false,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: false,
    nav: true,
    margin: 10,
    autoWidth: true,
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

