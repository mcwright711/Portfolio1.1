document.write('<script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"><\/script>');
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

  // Pop-up modal effect
  setTimeout(function() {
    $("#lego_modal").fadeIn("slow");
  }, 800);

//exclude parallax effect from images
$('.parallax_row img').addClass('full_width');
});




    
