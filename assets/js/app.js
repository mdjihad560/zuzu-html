"use strict";

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  zuzu STICKY MENU JS INIT
  zuzu COUNTER JS INIT
  zuzu TEXT SLIDER
  zuzu TEXT SLIDER 2
  zuzu CLIENT SLIDER
  zuzu CLIENT SLIDER 2
  zuzu TESTIMONIAL SLIDER
  zuzu TESTIMONIAL SLIDER 2
  zuzu PRICING TABLE JS INIT
  zuzu SCROLL EFFECT TWO JS INIT 01
  zuzu SCROLL EFFECT TWO JS INIT 02
  zuzu MAGNIFIC POPUP JS INIT
  zuzu GALLERY MASONAY FILTER JS 01
  zuzu GALLERY MASONAY FILTER JS 02
  zuzu GALLERY MASONAY FILTER JS 03
  zuzu MAP JS
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    zuzu PRELOADER JS INIT
    --------------------------------------------------------------*/

    $(".zuzu-preloader").fadeOut(500);

    /*--------------------------------------------------------------
    zuzu SCROLL TOP JS INIT
    --------------------------------------------------------------*/
    //Scroll event
    $(window).scroll(function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.zuzu-go-top').fadeIn('slow');
      if (scrolled < 200) $('.zuzu-go-top').fadeOut('slow');
    });

    //Click event
    $('.zuzu-go-top').click(function () {
      $("html, body").animate({
        scrollTop: "0"
      }, 500);
    });

    /*--------------------------------------------------------------
    zuzu STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    zuzu COUNTER JS INIT
    --------------------------------------------------------------*/
    var zuzu_counter = $('#zuzu-counter');
    if (zuzu_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(zuzu_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.zuzu-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    zuzu CLIENT SLIDER
    --------------------------------------------------------------*/
    var zuzu_client_slider = $('.zuzu-client-slider');
    if (zuzu_client_slider.is_exist()) {
      zuzu_client_slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    zuzu TESTIMONIAL SLIDER
    --------------------------------------------------------------*/
    var zuzu_testimonial_slider = $('.zuzu-testimonial-slider');
    if (zuzu_testimonial_slider.is_exist()) {
      zuzu_testimonial_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '180px',
        arrows: false,
        dots: true,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1499,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            centerPadding: '70px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '70px'
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: '0'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    zuzu MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.zuzu-popup');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
    NEXTO SLIDER TWO
    --------------------------------------------------------------*/
    var zuzu_card_slider = $('.zuzu-card-slider');
    if (zuzu_card_slider.is_exist()) {
      zuzu_card_slider.slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    NEXTO TEXT SLIDER
    --------------------------------------------------------------*/
    var zuzu_text_slider = $('.zuzu-text-slider');
    if (zuzu_text_slider.is_exist()) {
      zuzu_text_slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    FUGU CARD SLIDER V4
    --------------------------------------------------------------*/
    var zuzu_card_slider2 = $('.zuzu-card-slider2');
    if (zuzu_card_slider2.is_exist()) {
      zuzu_card_slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  /*--------------------------------------------------------------
  zuzu MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        icon: 'assets/images/all-img/contact/map.png',
        title: 'zuzu'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>zuzu' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  // wow js
  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();
})(jQuery);