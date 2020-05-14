$(function() {

      wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
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
          wrapperMenu.addEventListener('click', function(){
            wrapperMenu.classList.toggle('open');  
          });
          $('.wrapper-menu').on('click', function(){
            $('.header__menu').slideToggle();
          });


          window.onload = function () {
            document.body.classList.add('loaded_hiding');
            window.setTimeout(function () {
              document.body.classList.add('loaded');
              document.body.classList.remove('loaded_hiding');
            }, 500);
          }
});
