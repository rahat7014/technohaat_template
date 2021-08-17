;
(function ($) {
    "use strict";

    $(document).ready(function () {

        $('.expend-btn')
            .click(function () {
                $(this)
                    .next('.mega-dropdown')
                    .toggleClass('showed')
                    .siblings()
                    .removeClass('showed');

                $(this)
                    .next('.small__dropdown')
                    .toggleClass('showed')
                    .siblings()
                    .removeClass('showed');

                $(this)
                    .next('.sub-menu')
                    .toggleClass('showed')
                    .siblings()
                    .removeClass('showed');
            });

        // $('.expend-btn').click(function () {     $(this) .next('.small__dropdown')
        // .toggleClass('showed')         .siblings() .removeClass('showed'); });
        // $('.expend-btn').click(function () { $(this)    .next('.sub-menu')
        // .toggleClass('showed') .siblings() .removeClass('showed'); });

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })

        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function () {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile")
                .clone()
                .appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function (e) {
                // e.preventDefault();

                $(this)
                    .siblings('.sub-menu')
                    .animate({
                        height: "toggle"
                    }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');

        menutoggle.on('click', function () {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

        /* --------------------------------------------------
            isotop filter
        ---------------------------------------------------- */
        var $Container = $('.isotop-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area')
                .imagesLoaded(function () {
                    var festivarMasonry = $Container.isotope({
                        itemSelector: '.project-filter-item', // use a separate class for itemSelector, other than .col-
                        masonry: {
                            gutter: 0
                        }
                    });
                    $(document).on('click', '.isotop-filter-menu > button', function () {
                        var filterValue = $(this).attr('data-filter');
                        festivarMasonry.isotope({filter: filterValue});
                    });
                });
            $(document).on('click', '.isotop-filter-menu > button', function () {
                $(this)
                    .siblings()
                    .removeClass('active');
                $(this).addClass('active');
            });
        }

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="la la-arrow-left"></i>';
        var rightArrow = '<i class="la la-arrow-right"></i>';

        /*------------------------------------------------
            client-slider
        ------------------------------------------------*/
        $('.partner-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 3
                },
                576: {
                    items: 5
                },
                992: {
                    items: 8
                }
            }
        });

        /*------------------------------------------------
            Product Details Slider
        ------------------------------------------------*/
        var productDetailSlider = $('.single-thumbnail-slider');
        var pThumbanilSlider = $('.product-thumbnail-carousel');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                autoPlay: true,
                asNavFor: '.product-thumbnail-carousel'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                vertical: true,
                arrows: false,
                autoPlay: true,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>'
            });
        }

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            navText: [leftArrow, rightArrow]
        });

        /*--------------------------------------------------------
            video popup
        --------------------------------------------------------*/
        $('.video-play-btn').magnificPopup({type: 'video', removalDelay: 260, mainClass: 'mfp-zoom-in'});

        /*-------------------------------------------------
           parallax
        --------------------------------------------------*/
        if ($.fn.jarallax) {
            $('.jarallax').jarallax({speed: 0.5});
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        var count = 0;
        var icon = $('.icon');
        var noty = $('.notification');
        var spark = $('.spark');

        // Second - creating timeline with GASP jquery plugin in 'anim' function

        function anim() {
            var randrot = Math.random() * 40 - 30; // this is randomize rotate angle when icon jump
            var tl = new TimelineMax(); // this is var for timeline
            var tlNoty = new TimelineMax();

            // timeline for icon animation

            tl
                .to(icon, 0.5, {
                backgroundPositionY: '-154px' // move mail icon in icon
            })
                .to(icon, 0.0, {backgroundPositionY: '0px'})
                .to(icon, 0.4, {
                    top: '45%', // jump
                    rotation: 10 + randrot, // random rotate
                    ease: Power4.easeOut
                }, "-=0.6")
                .to(icon, 0.8, { // in this step we are back to original state
                    top: '50%',
                    rotation: "0",
                    ease: Elastic
                        .easeOut
                        .config(0.8, 0.3)
                }, "-=0.4")
                .to(icon, 1.6, {
                    ease: Power4.easeOut
                }, "-=2.4")

                // and on this timiline add sparks animation
                .to(spark, 0.4, {
                    opacity: '1',
                    scale: 1.3,
                    ease: Power4.easeIn
                }, '-=1.5')
                .to(spark, 0.3, {
                    opacity: '0',
                    scale: 1,
                    ease: Power4.easeOut
                }, '-=0.75'); // '-=0.75' - move step in timeline

            // and timeline for sparks and notification

            tlNoty
                .to(noty, 1, {ease: Power4.easeOut})
                .to(noty, 1, {ease: Power4.easeOut});

            // if count in notification > 1000 we are set count to zero

            if (count > 10) {
                count = 0
            }

        }

        // but we need loop the animation, and there setInterval help us)

        setInterval(function () {
            count++ // plus one to count
            // $('.notification').text(count); // set value to count
            anim(); // run timeline animation
        }, 2500);

        // Done!)

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function () {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
            $('.mega-dropdown').css({'top': '100px'});
            $('.small__dropdown').css({'top': '100px'});
        } else {
            mainMenuTop.removeClass('navbar-area-fixed');
            $('.mega-dropdown').css({'top': '180px'});
            $('.small__dropdown').css({'top': '180px'});
        }

        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);

        } else {
            ScrollTop.fadeOut(1000);

        }
    });

    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.achieve-counter').each(function () {
        $(this)
            .prop('Counter', 0)
            .animate({
                Counter: $(this).text()
            }, {
                duration: 10000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });

    // 6. monthly, yearly, biannual and triennial pricing switch

    if ($(".billingCycle").length > 0) {
        var billingPlanInputs = $("input[name='billingPlan']");
        billingPlanInputs.change(function () {
            var billingPlan = $(this).val();
            $.each([
                '.monthly-price', '.yearly-price', '.biannual-price', '.triennial-price'
            ], function (index, tag) {
                $(tag).css('display', 'none');
            });
            $('.' + billingPlan + '-price').css('display', 'block');
        });
    }

    // 5. custom vps hosting plan js **************************** Need to change
    // ******************** Change according to your plans
    // **************************************************************** vpsPlan =
    // VPS plan or package number vpsCore      = VPS Core value from your plan
    // vpsMemory    = VPS Memory from your plan vpsStorage   = VPS Storage value
    // from your plan vpsBandwidth = VPS bandwidth value from your plan vpsPrice =
    // VPS price from your plan vpsWHmcsUrl  = VPS plan url. Check from your WHMCS
    // panel ****************************************************************

    var vpsPriceInfo = [
        {
            "vpsPlan": 1,
            "vpsCore": 1,
            "vpsMemory": 2,
            "vpsStorage": 10,
            "vpsBandwidth": 1000,
            "vpsPrice": 20,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=12"
        }, {
            "vpsPlan": 2,
            "vpsCore": 2,
            "vpsMemory": 4,
            "vpsStorage": 20,
            "vpsBandwidth": 2000,
            "vpsPrice": 40,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=13"
        }, {
            "vpsPlan": 3,
            "vpsCore": 3,
            "vpsMemory": 6,
            "vpsStorage": 30,
            "vpsBandwidth": 3000,
            "vpsPrice": 60,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=14"
        }, {
            "vpsPlan": 4,
            "vpsCore": 4,
            "vpsMemory": 8,
            "vpsStorage": 40,
            "vpsBandwidth": 4000,
            "vpsPrice": 80,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=13"
        }, {
            "vpsPlan": 5,
            "vpsCore": 5,
            "vpsMemory": 10,
            "vpsStorage": 50,
            "vpsBandwidth": 5000,
            "vpsPrice": 100,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=12"
        }, {
            "vpsPlan": 6,
            "vpsCore": 6,
            "vpsMemory": 12,
            "vpsStorage": 60,
            "vpsBandwidth": 6000,
            "vpsPrice": 120,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=13"
        }, {
            "vpsPlan": 7,
            "vpsCore": 7,
            "vpsMemory": 14,
            "vpsStorage": 70,
            "vpsBandwidth": 7000,
            "vpsPrice": 140,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=14"
        }, {
            "vpsPlan": 8,
            "vpsCore": 8,
            "vpsMemory": 16,
            "vpsStorage": 80,
            "vpsBandwidth": 8000,
            "vpsPrice": 160,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=12"
        }, {
            "vpsPlan": 9,
            "vpsCore": 9,
            "vpsMemory": 18,
            "vpsStorage": 90,
            "vpsBandwidth": 9000,
            "vpsPrice": 180,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=13"
        }, {
            "vpsPlan": 10,
            "vpsCore": 10,
            "vpsMemory": 20,
            "vpsStorage": 100,
            "vpsBandwidth": 10000,
            "vpsPrice": 200,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=14"
        }, {
            "vpsPlan": 11,
            "vpsCore": 11,
            "vpsMemory": 22,
            "vpsStorage": 110,
            "vpsBandwidth": 11000,
            "vpsPrice": 220,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=12"
        }, {
            "vpsPlan": 12,
            "vpsCore": 12,
            "vpsMemory": 24,
            "vpsStorage": 120,
            "vpsBandwidth": 12000,
            "vpsPrice": 240,
            "vpsWHmcsUrl": "https://themetags.net/whmcs/cart.php?a=add&pid=13"
        }
    ];
    var cPlan = $('#c-plan');

    if (cPlan.length) {
        cPlan.slider({tooltip: 'always'});
        cPlan.on("slide", function (e) {
            $
                .each(vpsPriceInfo, function (index, vpsObj) {
                    if (vpsObj.vpsPlan == e.value) {
                        setVpsValue(vpsObj);
                    }
                });
        });
        initSlider();
    }

    function initSlider() {
        cPlan.value = cPlan.data("slider-value");
        var defaultVpsCore = parseInt(cPlan.value);
        $.each(vpsPriceInfo, function (index, vpsObj) {
            // defaultVpsCore is default valeu to show. For my demo, I have set 6 from HTML.
            // vps-hosting.html: <input id="c-plan" type="text" data-slider-min="1"
            // data-slider-max="12" data-slider-step="1" data-slider-value="6"
            // data-currency="$" data-unit="GB">. You need to change accourting to your
            // need.
            if (vpsObj.vpsPlan == defaultVpsCore) {
                $('.slider .tooltip', '#custom-plan').append('<div class="tooltip-up"></div>');
                $('.slider .tooltip-inner', '#custom-plan').attr("data-unit", cPlan.data("unit"));
                $('.slider .tooltip-up', '#custom-plan').attr("data-currency", cPlan.data("currency"));
                setVpsValue(vpsObj);
            }
        });
    }

    function setVpsValue(vpsObj) {
        $('.slider .tooltip-up', '#custom-plan').text(vpsObj.vpsPrice);
        $('.vpsPrice', '#custom-plan').text(cPlan.data("currency") + vpsObj.vpsPrice);
        $('.vpsCore span', '#custom-plan').text(vpsObj.vpsCore);
        $('.vpsMemory span', '#custom-plan').text(vpsObj.vpsMemory);
        $('.vpsStorage span', '#custom-plan').text(vpsObj.vpsStorage);
        $('.vpsBandwidth span', '#custom-plan').text(vpsObj.vpsBandwidth);
        $('.vpsWHmcsUrl', '#custom-plan').attr("href", vpsObj.vpsWHmcsUrl);
    }

    // Skill bar Skill bar
    var skillbar = $('.skillbar');
    if (skillbar.length) {
        $('.skillbar').skillBars({from: 0, speed: 4000, interval: 100, decimals: 0});
    }

    // Skill bar
    var skillbar = $('.skillbar');
    if (skillbar.length) {
        $('.skillbar').skillBars({from: 0, speed: 4000, interval: 100, decimals: 0});
    }

    // Counter Up
    var counter = $('.rs-count');
    if (counter.length) {
        $('.rs-count').counterUp({delay: 20, time: 1500});
    }

    //
    $('.filters ul li')
        .click(function () {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $grid.isotope({filter: data})
        });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    })

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({autoplay: true, dots: true, loop: true, items: 1});

})(jQuery);
