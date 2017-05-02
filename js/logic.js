$(document).ready(function() {
  
        wow = new WOW({
            offset: 50
        })
        wow.init();

        (function($) {
    "use strict"; // Start of use strict

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 68
    });

    // Smooth Scrolling: Smooth scrolls to an ID on the current page
    // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself. See the docs for more details.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 68)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    
});

