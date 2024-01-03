$(document).ready(function () {
  // Add active class to nav-item and nav-link elements when they have the "active" class
  $(".nav-item.active, .nav-link.active").addClass("active");

  // Remove the hover effect for active elements
  $(
    ".nav-item.active:not(.nav-item.dropdown.active), .nav-link.active:not(.nav-link.dropdown-toggle.active)"
  ).hover(
    function () {
      $(this).addClass("no-hover");
    },
    function () {
      $(this).removeClass("no-hover");
    }
  );
  //Mousecursor effect on au post pg
let $mouseCursor = $(".cursor");

$(document).on('mousemove', function (e) {
  $mouseCursor.css({
    top: e.pageY,
    left: e.pageX
  });
});
$(".nav-link").on({
  mouseenter: function () {
      $(this).addClass("link-grow");
  },
  mouseleave: function () {
      $(this).removeClass("link-grow");
  }
});
  // Scrollspy effect
  $("section").scrollspy({ target: "#navbar-example2" });
});
