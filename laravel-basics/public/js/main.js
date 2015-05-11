/* ===============
   CAPTTION FOR CYCLE2
   =============== */

(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    captionFxOut:      'fadeOut',
    captionFxIn:       'fadeIn',
    captionFxSel:      undefined,
    overlayFxOut:      'fadeOut',
    overlayFxIn:       'fadeIn',
    overlayFxSel:      undefined
});    

$(document).on( 'cycle-bootstrap', function(e, opts) {
    opts.container.on( 'cycle-update-view-before', update );
    opts.container.one( 'cycle-update-view-after', init );
});

// $(document).on( 'cycle-destroy', function(e, opts) {
//     opts.container.off( 'cycle-update-view-before', update );
// });

function update( e, opts, slideOpts, currSlide, isAfter ) {
    if ( opts.captionPlugin !== 'caption2' )
        return;
    $.each(['caption','overlay'], function() {
        var fxBase = this + 'Fx',
            fx = opts[fxBase + 'Out'] || 'hide',
            template = slideOpts[this+'Template'],
            el = opts.API.getComponent( this ),
            sel = opts[fxBase+'Sel'],
            speed = opts.speed,
            animEl;

        if ( opts.sync )
            speed = speed/2;

        animEl = sel ? el.find( sel ) : el;

        if( el.length && template ) {
            if ( fx == 'hide')
                speed = 0;
            animEl[fx]( speed, function() {
                var content = opts.API.tmpl( template, slideOpts, opts, currSlide );
                el.html( content );
                animEl = sel ? el.find( sel ) : el;
                if ( sel )
                    animEl.hide();
                fx = opts[ fxBase + 'In'] || 'show';
                animEl[fx]( speed );
            });
        }
        else {
            el.hide();
        }
    });
}

function init( e, opts, slideOpts, currSlide, isAfter ) {
    if ( opts.captionPlugin !== 'caption2' )
        return;
    $.each(['caption','overlay'], function() {
        var template = slideOpts[this+'Template'],
            el = opts.API.getComponent( this );

        if( el.length && template )
            el.html( opts.API.tmpl( template, slideOpts, opts, currSlide ) );
    });
}

})(jQuery);

/* ===============
   CENTER PLUGIN CYCLE2
   =============== */

(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    centerHorz: false,
    centerVert: false
});

$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    if ( !opts.centerHorz && !opts.centerVert )
        return;

    // throttle resize event
    var timeout, timeout2;

    $(window).on( 'resize orientationchange load', resize );
    
    opts.container.on( 'cycle-destroyed', destroy );

    opts.container.on( 'cycle-initialized cycle-slide-added cycle-slide-removed', function( e, opts, slideOpts, slide ) {
        resize();
    });

    adjustActive();

    function resize() {
        clearTimeout( timeout );
        timeout = setTimeout( adjustActive, 50 );
    }

    function destroy( e, opts ) {
        clearTimeout( timeout );
        clearTimeout( timeout2 );
        $( window ).off( 'resize orientationchange', resize );
    }

    function adjustAll() {
        opts.slides.each( adjustSlide ); 
    }

    function adjustActive() {
        /*jshint validthis: true */
        adjustSlide.apply( opts.container.find( '.' + opts.slideActiveClass ) );
        clearTimeout( timeout2 );
        timeout2 = setTimeout( adjustAll, 50 );
    }

    function adjustSlide() {
        /*jshint validthis: true */
        var slide = $(this);
        var contW = opts.container.width();
        var contH = opts.container.height();
        var w = slide.outerWidth();
        var h = slide.outerHeight();
        if (w) {
            if (opts.centerHorz && w <= contW)
                slide.css( 'marginLeft', (contW - w) / 2 );
            if (opts.centerVert && h <= contH)
                slide.css( 'marginTop', (contH - h) / 2 );
        }
    }
});

})(jQuery);

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
  $('body').toggleClass('overflow');
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
  $('.login').removeClass('mostrar-menu');
});


$('.login-menu-button').click(function(){
  var navClase = $('.login');
  $('body').toggleClass('overflow');
  // si tiene slidein usar slideout
  $('.login').toggleClass('mostrar-menu');
  $('.login').addClass('slideInLeft');
  $('nav').removeClass('mostrar-menu');
  $('.mobile-menu').removeClass('active');
  $(".menu-icon use").attr('xlink:href', '#menu');
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




