$(document).ready(function () {

    /* sticky navigation */
    $('.js--section-1').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* scroll on buttons */
    $('.js--scroll-0').click(function () {
        $('html, body').animate({ scrollTop: $('header').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });

    $('.js--scroll-1').click(function () {
        $('html, body').animate({ scrollTop: $('.section-1').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });

    $('.js--scroll-2').click(function () {
        $('html, body').animate({ scrollTop: $('.section-2').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });

    $('.js--scroll-3').click(function () {
        $('html, body').animate({ scrollTop: $('.section-3').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });

    $('.js--scroll-4').click(function () {
        $('html, body').animate({ scrollTop: $('.section-4').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });

    $('.js--scroll-5').click(function () {
        $('html, body').animate({ scrollTop: $('.section-5').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });

    $('.js--scroll-6').click(function () {
        $('html, body').animate({ scrollTop: $('.section-6').offset().top }, 1000);
        event.preventDefault();
        event.stopPropagation();
    });



    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var header = $('header');

        nav.slideToggle(200, function () {
            if (nav.is(':visible')) {
                header.addClass('menu-open');
            } else {
                header.removeClass('menu-open');
            }
        });

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    $('.nav-reps').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().toggleClass('open');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.has-dropdown').length) {
            $('.has-dropdown').removeClass('open');
        }
    });

});