$(function() {
    $("[data-ref^='#']").bind('click', function(e) {
    //$('a[href*=#]').bind('click', function(e) {
      e.preventDefault();
      var target = $(this).attr("data-ref");
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top
      }, 400, function() {
        location.hash = target;
      });
      return false;
    });
  });
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
  
    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('.navigation a.active').removeClass('active');
        $('.navigation a').eq(i).addClass('active');
      }
    });
  }).scroll();