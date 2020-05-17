$(function(){
  $('.featured-products__slider-inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="..//images/icons/lnr-chevron-left.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="..//images/icons/lnr-chevron-right.svg"></button>',
  });



  $(document).ready(function() {
    $('.js-example-basic-single').select2();
    $('.filter-bar__select-price').select2();
});



 
  $(".rateYo").rateYo({
 
    rating    : 5,
    spacing   : "3px",
    starWidth: "15px",
    ratedFill: "#ffc000",
    normalFill: "transparent",
    readOnly: true
    
    
});

 
$(".rateYoo").rateYo({
 
  rating    : 5,
  spacing   : "3px",
  starWidth: "13px",
  ratedFill: "#ffc000",
  normalFill: "transparent",
  readOnly: true
  
  
});
$(".rateYooo").rateYo({
 
  rating    : 5,
  spacing   : "3px",
  starWidth: "13px",
  ratedFill: "#ffc000",
  normalFill: "transparent",
  readOnly: true
  
  
});

$(".rateYoooo").rateYo({
 
  rating    : 5,
  spacing   : "3px",
  starWidth: "14px",
  ratedFill: "#ffc000",
  normalFill: "transparent",
  readOnly: true
  
  
});
$(".rateYooooo").rateYo({
 
  rating    : 5,
  spacing   : "3px",
  starWidth: "14px",
  ratedFill: "#ffc000",
  normalFill: "transparent",
  readOnly: true
  
  
});

$('.followers-feed__slider__inner').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  variableWidth: false,
  prevArrow: '<button class="slick-arrow slick-preve"><img src="..//images/icons/lnr-chevron-left.svg"></button>',
  nextArrow: '<button class="slick-arrow slick-nexte"><img src="..//images/icons/lnr-chevron-right.svg"></button>',
  responsive: [
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});

$('.menu__btn').on('click', function(){
  $('.header__menu').slideToggle();
});

$('.filter-bar__select-btn').on('click', function(){
  $('.filter-bar__dropdow').slideToggle();
});


$('.release-products__dots-button').on('click', function(){
  $('.release-products__dots-menu').slideToggle();
});

$('.header__icon-box--notification-icon').on('click', function(){
  $('.notification-menu').slideToggle();
});
$('.header__icon-box--message-icon').on('click', function(){
  $('.message-menu').slideToggle();
});
$('.header__icon-box--purchases-icon').on('click', function(){
  $('.purchases-menu').slideToggle();
});
$('.header__user-box').on('click', function(){
  $('.user-box__dropdown').slideToggle();
});

$('.icon-list').on('click', function () {
  $('.favorites .release-products__box').addClass('list');
  $('.category__item').addClass('list');
  $('.icon-th-list').addClass('active');
  $('.icon-th-large').removeClass('active');
});

$('.icon-normal').on('click', function () {
  $('.favorites .release-products__box').removeClass('list');
  $('.category__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-th-list').removeClass('active');
});

$('.single__tabs-box .single__tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.single__tabs-box').find('.single__tab-item').removeClass('active-tab').hide();
    $('.single__tabs-box').find('.single__tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 325,
    from: 30,
    to: 300,
    prefix: "$"

  });

let mix = $('.release-products__inner');
if (mix){
  var mixer = mixitup(mix);
};


document.getElementById('.icon-list').onclick = function() {
  document.getElementByClassName('.category__item').style.display = none;

}
});

