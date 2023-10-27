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
 // Select elements with the class "wobble"
var wobbleElements = document.querySelectorAll('.wobble');

// Function to handle the animation
function animateElement(el) {
  if (!el.classList.contains('animating') ) {
    el.classList.add('animating');

    var letters = el.innerText.split('');

    setTimeout(function () {
      el.classList.remove('animating');
    }, (letters.length + 1) * 50);

    var animationName = el.dataset.animation;
    if (!animationName) {
      animationName = "jump";
    }

    el.innerText = '';

    letters.forEach(function (letter) {
      if (letter == " ") {
        letter = "&nbsp;";
      }
      el.innerHTML += '<span class="letter">' + letter + '</span>';
    });

    var letterElements = el.querySelectorAll('.letter');
    letterElements.forEach(function (letter, i) {
      setTimeout(function () {
        letter.classList.add(animationName);
      }, 50 * i);
    });
  }
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  wobbleElements.forEach(function (el) {
    if (isElementInViewport(el)) {
      animateElement(el);
    }
  });
}

// Add an event listener for the scroll event on the window
window.addEventListener('scroll', handleScroll);
  });
