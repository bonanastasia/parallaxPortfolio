$(document).ready(function() {
  
        wow = new WOW({
            offset: 50
        })
        wow.init();

        (function($) {
    "use strict"; // Start of use strict

    // Collapse the navbar when page is scrolled
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 2000);
    }
});
    
});
});

