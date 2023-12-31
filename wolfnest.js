$(document).ready(function() {
    // Fade in elements with the "hideme" class on scroll
    $(window).scroll(function() {
      // Check the location of each desired element
      $('.hideme').each(function(i) {
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        // If the object is completely visible in the window, fade it in
        if (top_of_object < bottom_of_window){
          $(this).animate({'opacity':'1'}, 1500);
        }
      });
    });

    // Animate titles on scroll
    $(window).scroll(function() {
        // Check the location of each desired element
        $('.title').each(function(i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // If the object is completely visible in the window, animate it
            if (top_of_object < bottom_of_window){
                $(this).addClass('animate-on-scroll');
            }
        });
    });
});