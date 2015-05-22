
/* ===============
   CAROUSEL
   =============== */

$('#carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  draggable: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<div><svg class="carousel-prev"><use xlink:href="#prev" /></svg></div>',
  nextArrow: '<div><svg class="carousel-next"><use xlink:href="#next" /></svg></div>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				

/* ===============
   RESPONSIVE MENU
   =============== */

$('.mobile-menu').click(function(){
  var navClase = $('nav');
  $(this).toggleClass('active');
  // si tiene slidein usar slideout
  $('nav').toggleClass('mostrar-menu');
  $('nav').addClass('slideInRight');
  var menuIcon = $(".menu-icon use").attr('xlink:href');
  if( menuIcon == '#menu') {
    $(".menu-icon use").attr('xlink:href', '#close');
  } else {
    $(".menu-icon use").attr('xlink:href', '#menu');
  }
  $('.login').removeClass('mostrar-menu clicked');
});


$( "#profile-photo" ).click(function(){
  var navClase = $('.login');
  var size = $(window).width();
  if (size<1024) {
      if ($('.login').hasClass('clicked')) {
        $('.login').addClass('slideOutLeft');
        $('.login').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('.login').removeClass('slideOutLeft');
          $('.login').removeClass('clicked');
          $('.login').removeClass('mostrar-menu');
        });
      } else {
          $('.login').addClass('slideInLeft');
          $('.login').addClass('mostrar-menu');
          $('.login').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('.login').removeClass('slideInLeft');
          $('.login').addClass('clicked');
        });
      };
    $('nav').removeClass('mostrar-menu');
    $('.mobile-menu').removeClass('active');
    $(".menu-icon use").attr('xlink:href', '#menu');
  };
});


$('#login-button').click(function(){
  $('.overlay').show();
  $('.login-form').toggleClass('animated slideInDown');
  $('.login-form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('.login-form').removeClass('slideInDown');
  });
});


$('.close-login').click(function(){
  $('.login-form').addClass('animated slideOutUp');
    $('.login-form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('.login-form').removeClass('slideOutUp');
    $('.overlay').hide();
  });
});


// WINDOW RESIZE

$(window).resize(function(){
  var size = $(window).width();
  if (size>1024) {
    $('.login').removeClass('mostrar-menu');
  };
});



// HOVER MENU DESKTOP

$( "#profile-photo" )
  .mouseenter(function() {
    var size = $(window).width();
    if (size>1024) {
      $('.login').css('display', 'block');
    };
  })
  .mouseleave(function() {
    $('.login').css('display', 'none');
  });

  $( ".login" )
  .mouseenter(function() {
    $('.login').css('display', 'block');
  })
  .mouseleave(function() {
    $('.login').css('display', 'none');
  });



// TOOLTIP

$('input').focusin(function(){
    var div = $(this).parent().next('div');
    var size = $(window).width();
    if (size>1024) {
      $(div).show();     
    };

});

$('input').focusout(function(){
    var div = $(this).parent().next('div');
    $(div).hide();
});


/* ===============
   RANGE SLIDER
   =============== */


$("#slider-tooltip").noUiSlider({
  start: [0, 50000],
  range: {
    'min': 0,
    '30%': 40,
    'max': 50000
  },
  format: wNumb({
    decimals: 3,
    thousand: '.',
    prefix: '$',
  })
});

$("#slider-tooltip").Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {

  // The tooltip HTML is 'this', so additional
  // markup can be inserted here.
  $(this).html(
    '<span>' + value + '</span>'
  );
});

$("#slider-tooltip").Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {

  // The tooltip HTML is 'this', so additional
  // markup can be inserted here.
  $(this).html(
    '<span>' + value + '</span>'
  );
});




