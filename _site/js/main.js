
$(document).ready(function(){

  //Mobile Nav
  $('.mobile-menu-button').click(function() {
    $('.mobile-menu-button').toggleClass("nav-open");
    $('.mobile-nav').slideToggle(200, function() {
      // Animation complete.
    });

  });
  //end

});
