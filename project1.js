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


  document.addEventListener("DOMContentLoaded", function() {
    var parallaxRowElements = document.querySelectorAll(".parallax_row");
    var captionElements = document.querySelectorAll(".caption");
  
    for (var i = 0; i < parallax_RowElements.length; i++) {
      var element = parallaxRowElements[i];
      element.style.removeProperty ("max-width");
    }
  
    for (var i = 0; i < captionElements.length; i++) {
      var element = captionElements[i];
      element.style.removeProperty("max-width");
    }
  });
