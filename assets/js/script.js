$(document).ready(function () {
    
/* For sticky navigation */
    $('.section-features').waypoint(function (direction) {
        if (direction == "down")
            $('nav').addClass('sticky');
        else $('nav').removeClass('sticky');
    }, {
        offset: '60px;'
    }); 

/* Scroll on clicking the respective buttons */
    // $('.js--scroll-to-plans').click(function() {
    //     $('html, body').animate({
    //         scrollTop: $('.section-plans').offset().top
    //     }, 1000);
    // });
    
    // $('.js--scroll-to-start').click(function() {
    //     $('html, body').animate({
    //         scrollTop: $('.section-features').offset().top
    //     }, 1000);
    // });

/* Animations on scroll */
    // for .section-features
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
       offset: '50%' 
    });
    
    // for 
    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
       offset: '50%' 
    });
    
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
       offset: '50%' 
    });
    
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
       offset: '50%' 
    });


/** Mobile Navigation */
    $('.mobile-nav-icon').click(function() {
        var nav = $('.main-nav');
        nav.slideToggle(200);

        var icon = $('.mobile-nav-icon i');
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});