$(document).ready(function () {

    let header = $(".header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let button = $('#burger');
    let nav = $('#topnav');
    let nav_height = 62;
    let link = $('.topnav__link');
    let sections = $('.section');

    checkScroll(scrollPos, introH);

    /* Фиксированное верхнее меню */
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        console.log(introH + ' = IntroH');
        console.log(scrollPos + ' = scrollPos');
        // nav.removeClass("show");

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos >= introH - 62) {
            console.log('Fixed add');
            header.addClass("fixed");
        } else {
            console.log('Fixed remove');
            header.removeClass("fixed");
        }
    }
    // Плавный скролл + подсветка активой секции
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        nav.find('a').removeClass('active');
        sections.removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500);

        return false;
    });

    // /* Плавный скрол к секции */
    // $("[data-scroll]").on("click", function (event) {
    //     event.preventDefault();

    //     let elementId = $(this).data('scroll');
    //     let elementOffset = $(elementId).offset().top;

    //     // nav.removeClass("show");

    //     $("html, body").animate({
    //         scrollTop: elementOffset - 60
    //     }, 700);
    // });

    // Обработка событий при клике на бургер, открытие и закрытие меню
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    link.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    $('.page').click(function (event) {
        if ($(event.target).closest("#burger").length)
            return;
        if ($(event.target).closest("#topnav").length)
            return;
        nav.removeClass('active');
        button.removeClass('active');
    });

    function toggleMenu() {
        nav.toggleClass('active');
        button.toggleClass('active');
    }

    /* Слайдер: https://kenwheeler.github.io/slick/ */

    $("#icon-reviews-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        dots: false,
        autoplay: true,
    });

    $("#photo-reviews-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        dots: false,
        autoplay: true
    });
});