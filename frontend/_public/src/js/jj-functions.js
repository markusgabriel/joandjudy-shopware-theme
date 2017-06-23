    $('.jj--menu-open').on('click', function() {
        $(this).toggleClass('jj--menu-close');
        $('.jj--flyout-navigation').toggleClass('is-active');
        $('body').toggleClass('menu-open');
    });
    $('.jj--menu-close').on('click', function() {
        $('.jj--flyout-navigation').removeClass('is-active');
        $('body').removeClass('menu-open');
    });
    $('.jj--open-filter').on('click', function() {
        $('.listing--actions').addClass('is--active');
        $('body').addClass('jj--filter-active');
    });
    $('.jj--close-filter').on('click', function() {
        $('.listing--actions').removeClass('is--active');
        $('body').removeClass('jj--filter-active');
    });
    $('.jj--account-menu-open').on('click', function() {
        $(this).toggleClass('is--active');
        $(this).next('.account--menu').toggleClass('is--active');
    });
    $('.jj--open-search').on('click', function() {
        $('.jj--search-container').toggleClass('is--active');
        $('body').toggleClass('jj--search-active');
    });
    $('.jj--close-search').on('click', function() {
        $('.jj--search-container').removeClass('is--active');
        $('body').removeClass('jj--search-active');
    });
    $('.menu--container').on('click', function() {
        $(this).find('.menu--list').toggleClass('is--active');
    });
    /* $('.cart--link').on('click', function() {
        $(this).hide();
        $(this).next('.close--off-canvas').show();
    }); */
    /* $('.filter--btn-apply').on('click', function() {
        $('.listing--actions').removeClass('is--active');
    }); */

    StateManager.removePlugin('.tab-menu--product .tab--container', 'swOffcanvasButton', ['xs']);
    StateManager.addPlugin('.jj--collapse-panel .jj--collapse-header', 'swCollapsePanel', {'contentSiblingSelector': '.jj--collapse-body'}, ['xs', 's', 'm', 'l', 'xl']);
    // StateManager.removePlugin('.tab-menu--cross-selling .tab--header', 'swCollapsePanel', {'contentSiblingSelector': '.tab--content'}, ['xs', 's']);
    // StateManager.addPlugin('.tab-menu--cross-selling', 'swTabMenu', ['xs', 's', 'm', 'l', 'xl']);

    $(function() {
        var stickyElement = '.jj--sticky-element',
            bottomElement = '.jj--sticky-stop',
            stickyChild = '.jj--sticky-element > div',
            stickyHeight = $(stickyChild).outerHeight();
        // make sure the element exists
        if ($(stickyElement).length) {
            $(stickyElement).each(function() {
                // when should affix start? (the amount of pixels to the top from the element)
                var fromTop = $(this).offset().top - 40,
                    // where is the bottom of the element?
                    fromBottom = $(document).height() - ($(this).offset().top + stickyHeight),
                    // where should affix stop? (the amount of pixels from the top where the bottom element is)
                    stopOn = $(document).height() - ($(bottomElement).offset().top) + (stickyHeight - $(this).height());
                // console.log($(document).height());
                // just affix if necessary
                if ((fromBottom - stopOn) > 0) {
                    // let's put a sticky width on the element and assign it to the top
                    $(this).css('width', $(this).width()).css('top', 0).css('position', '');
                    // assign the affix to the element
                    $(this).affix({
                        offset: {
                            // stick where the top pixel of the element is
                            top: fromTop,
                            // stop where the top pixel of the bottom element is
                            bottom: stopOn
                        }
                        // when the affix get's called then make sure the position is the default (fixed) and it's at the top
                    }).on('affix.bs.affix', function() { $(this).css('top', 40).css('position', ''); });
                }
                $(this).css('height', stickyHeight);
                // trigger the scroll event so it always activates
                $(window).trigger('scroll');
            });
        }

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({triggerHook: 'onEnter', duration: 500})
            .setTween('.jj--header-parallax', 1, {transform: 'translateY(100px)'})
            .addTo(controller);

        var blogSlider = new Swiper('.jj--blog-slider', {
            speed: 500,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    });
