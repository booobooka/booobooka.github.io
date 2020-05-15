$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();

  $('.slider__inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  let wrapperMenu = document.querySelector('.wrapper-menu');
  wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('open');
  });
  $('.wrapper-menu').on('click', function () {
    $('.header__menu').slideToggle();
  });


  $('a[href*="#"]').on('click.smoothscroll', function (e) {
    var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
    if (theHref && location.href.replace(/#.*/, '') != theHref) return;
    var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
    if (!$target.length) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 600, 'swing', function () {
      window.location.hash = hash;
    });
  });

  $(window).on('load', function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
      $('body').addClass('loaded');
      $('body').removeClass('loaded_hiding');
    }, 500);
  });


  
});

