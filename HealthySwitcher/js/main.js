$(function () {
  $('.about__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ]
  });
      

  $(".dishes__rateYo").rateYo({
    rating: 0,
    spacing: "3px",
    starWidth: "19px",
    ratedFill: "#ffc000",
    readOnly: false
  });

  let wrapperMenu = document.querySelector('.wrapper-menu');
  wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('open');
  });

  let btn = $('.btn');

  btn.on('click', function () {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
  });

  $('.wrapper-menu').on('click', function () {
    $('.header__menu').slideToggle();
  });

  var mixer = mixitup('.dishes__items');
});
