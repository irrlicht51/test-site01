$(function() {
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('header'),
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed-header';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ($win.width() > 768 )
      if ( value > fvHeight ) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
  });


  $('.slider').slick( {
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    cssEase: 'ease-in-out',
  });

  $('.burger-btn').click(function() {
    $('.header-navi').fadeToggle(300);
    $(this).toggleClass('close');
    $('body').toggleClass('noscroll');
  });

  if ($win.width() < 768 ) {
    $('.header-navi ul li>a').click(function() {
      $('.header-navi').fadeToggle(300);
      $('.burger-btn').removeClass('close');
      $('body').removeClass('noscroll');
    });
  }

  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html,body').animate( {
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  var pageTop = $('#page-top');

  pageTop.hide();
  $win.scroll(function() {
    if ($(this).scrollTop() > 100 ) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

});
