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

       $('.menu__wrapper .menu__tab').on('click', function(event) {
            var id = $(this).attr('data-id');
                  $('.menu__wrapper').find('.menu__tab-item').removeClass('active-tab').hide();
                  $('.menu__wrapper .menu__tabs').find('.menu__tab').removeClass('active');
                  $(this).addClass('active');
                  $('#'+id).addClass('active-tab').fadeIn();
                  return false;
            });

            var btn = $('.header__burger-btn');

            let wrapperMenu = document.querySelector('.wrapper-menu');
            wrapperMenu.addEventListener('click', function(){
              wrapperMenu.classList.toggle('open');  
            });
            $('.wrapper-menu').on('click', function(){
              $('.header__menu').slideToggle();
            });
            
            $(window).on('load', function () {
              $('body').addClass('loaded_hiding');
              window.setTimeout(function () {
                $('body').addClass('loaded');
                $('body').removeClass('loaded_hiding');
              }, 500);
            });
});
