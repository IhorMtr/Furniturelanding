$('#owl-one').owlCarousel({
    autoplay: false,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: false,
    margin: 0,
    dots: false,
    rewind: true,
    nav: true,
    responsive: {
        0: {
            nav: false,
            items: 1
        },
        768: {
            nav: false,
            items: 2

        },
        1100: {
            items: 4
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
            nav: false,
            items: 1,
        },
        320: {
            nav: false,
            margin: 25,
            items: 1,
        },
        360: {
            nav: false,
            margin: 5,
            items: 1,
        },
        375: {
            nav: false,
            items: 1,
        },
        768: {
            nav: false,
            margin: 15,
            items: 2
        },
        1100: {
            items: 3
        }
    },
});

(function ($) {
    "use strict";

    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
        };
        init();
    }();


    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        } else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.hidden-text');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-text');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, options);

    textElements.forEach(element => {
        observer.observe(element);
    });
});
document.querySelector('.menu-icon').addEventListener('click', function () {
    this.classList.toggle('menu-icon--active');
});