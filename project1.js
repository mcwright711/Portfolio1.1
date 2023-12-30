$(document).ready(function() {
  // Add active class to nav-item and nav-link elements when they have the "active" class
  $('.nav-item.active, .nav-link.active').addClass('active');

  // Remove the hover effect for active elements
  $('.nav-item.active:not(.nav-item.dropdown.active), .nav-link.active:not(.nav-link.dropdown-toggle.active)').hover(function() {
    $(this).addClass('no-hover');
  }, function() {
    $(this).removeClass('no-hover');
  });

  // Scrollspy effect
  $('section').scrollspy({ target: "#navbar-example2" });

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

  // Set up intersection observer for title animations on scroll
  document.addEventListener("DOMContentLoaded", function() {
    function handleIntersection(entries, observer) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    }
  
    // Target the elements you want to animate on scroll
    const titleContainers = document.querySelectorAll('.title .wobble .title .slide-in .animate-on-scroll');
  
    // Observe each target element for animation
    titleContainers.forEach(container => {
      const titleObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
      titleObserver.observe(container);
    });
  });

  // Timeline fade in on scroll
  $('.item').fadeIn('slow');
});