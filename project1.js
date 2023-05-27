// Adds delay to CSS animation and makes
// the animation repeat itself
$("#restart").queue(function() {  
  var original = $(this);
  var newClass = original.clone(true);
  setInterval(function() {
      original.before(newClass);
      $("." + original.attr("class") + ":last").remove();
  },48000);
});