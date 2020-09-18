/* Preloader */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* Team Secction Faculties */

$(function () {
    $("#team-members").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //Breakpoint from 0 up
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            //Breakpoint from 767 and up
            767: {
                items: 3
            },
            991: {
                items: 4
            }
        }
    });

});

/* Team Secction Students */

$(function () {
    $("#team-members-2").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class=" fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>'],
        responsive: {
            //Breakpoint from 0 up
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            //Breakpoint from 767 and up
            767: {
                items: 3
            },
            991: {
                items: 5
            }
        }
    });

});


/*---EVENTS PHOTOS---*/
$(function () {
    $("#event-photos").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
    });

});

/*---RESPONSIVE TABS---*/

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/*---TESTIMONIALS---*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class=" fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>']
    });

});

/*----NAVIGATION----*/
$(function () {
    //show/his=de nav on page load
    showHideNav();
    $(window).scroll(function () {
        //show/hide on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            //back to top button
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $("#back-to-top").fadeOut();
        }
    }
});

/*SMOOTH SCROLLING*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get section id
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 40
        }, 1250);
    });
});

/*-------MOBILE MENU------*/
$(function () {
    //show mobile navigation
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    });
    //hide mobile navigation
    $("#mobile-nav-close-btn ,#mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");
    });
});
/*---ANIMATION---*/
$(function () {
    //initializes wow.js plugin
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInDown");
    $("#home-text").addClass("animated zoomIn");
    $("#home-button").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});

























