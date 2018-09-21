require(["jquery", "js/owl.carousel"], function ($) {
  //<![CDATA[
  function windowPopup(url, width, height) {
    var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);
    window.open(url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
  }

  function stickyNewsletter() {
    var i = $('.footer-newsletter');
    if (i.length) {
      var stickySignup = $('.page-footer').offset().top;
      var signUpTop = $(window).scrollTop() + $(window).height();
      if (stickySignup >= signUpTop) {
        i.addClass('f-sticky');
      } else {
        i.removeClass('f-sticky');
      }
    }
  }

  /*
    function is_touch_device() {
        return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
  */


  function megaMenu() {
    var nav = $('.sections.nav-sections').clone().addClass('page-header');
    // $('body').append(nav);

    $('.navigation .has-children').click(function (e) {
      if ($('.nav-toggle').is(':visible')) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
      $_parent = $(this).parent();
      $_parent.parent().siblings().removeClass('isOpen');
      $_parent.toggleClass('isOpen');
    });

    $('.navigation li.level0>.level-top').hover(function () {
      $_parents = $(this).parent().parent();
      $_parents.find('li.level0>.level-top').css('opacity', '0.5');
      $(this).css('opacity', '1');
    }, function () {
      $_parents = $(this).parent().parent();
      $_parents.find('li.level0>.level-top').css('opacity', '1');
    });

    $('body .sections.nav-sections .switcher-trigger-default').click(function () {
      $(this).toggleClass('active');
      $(this).parent().toggleClass('active');
    });

  }

  function miniBag() {
    var action = function() {
      if ($('html').hasClass('minibag-open')) {
        $('html').removeClass('minibag-open');
        setTimeout(function () {
            $('html').removeClass('minibag-before-open');
        }, 300);
      } else {
          $('html').addClass('minibag-before-open');
          setTimeout(function () {
              $('html').addClass('minibag-open');
          }, 42);
      }
    };
    $('.action.showcart').click(function(e) {
      action();
    });   
    $('.minicart-wrapper').on('click', '#btn-minicart-close', function(e) {
      action();
    });
  }

  $(window).scroll(function () {
    stickyNewsletter();
  });

  $(document).ready(function () {
    stickyNewsletter();
    megaMenu();
    miniBag();

    var heightHeader = $('.page-header').height();
    $('.book-now-scroll').click(function(e) {
      e.preventDefault();
      var target = ($('.section-find-centre').offset().top) - heightHeader;
      $('html, body').animate({
        scrollTop: target
      });
    });

    $('.js-shadow-bottom-page').length && $('.no-shadow-bottom-page').parents('body').addClass('no-shadow-bottom-page');

    $('.link-menu-mobile').prependTo('.nav-sections');

    // Action scroll to target
    $('.js-scroll-to-target').click(function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      $('html, body').animate({
        scrollTop: $(target).offset().top - heightHeader
      });
    });

/*
    $('.page-header').stick_in_parent({
      sticky_start_end: true,
    });
*/



  






/*

  $('.primary.button').on('click', '#centreLocationMap #map', function(e) {
      $('#centreLocationMap').removeClass('active');
    });
*/


    $('.header.content .block-search .block-title').on('click', function (e) {
      $(this).toggleClass('active');
      e.preventDefault();
    });
    $(".cms-page-view .banner-cover-juno .owl-carousel").owlCarousel({

      items: 1,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      navSpeed: 1500,
    });
    $(".cms-index-index .banner-cover-juno .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      navSpeed: 1500,
    });
    $(".carousel-products .owl-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      autoplaySpeed: 2000,
      stopOnHover: true,
      margin: 0,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        960: {
          items: 4
        }
      }
    });


    $('.list-faq dt').click(function () {
      $(this).next().slideToggle(200);
      $(this).toggleClass('active');
    });
    $(".popupWindow").on("click", function (e) {
      if (e) {
        e.preventDefault();
      }
      if ($(this).hasClass('largerPopupWindow')) {
        windowPopup($(this).attr("href"), 750, 552);
      } else {
        windowPopup($(this).attr("href"), 500, 300);
      }
    });

    $('.cms-sidebar .title-sidebar, .cms-leftnav h4').click(function () {
      $(this).toggleClass('active');
      $('.cms-sidebar .link-sidebar, .cms-leftnav ul').toggleClass('active');
    });
    if ($('.cms-sidebar').length > 0) {
      $('#maincontent').addClass('has-sidebar');
    }




    $('.page-header .switcher-trigger-default').click(function (e) {
      if (e) {
        e.preventDefault();
      }

      $('.page-header .switcher-options').toggleClass('active');
      $('.page-header .switcher-trigger-default').toggleClass('active');
    });



    $(".stockist .owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      autoplaySpeed: 2000,
      stopOnHover: true,
      margin: 0,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 2,
          margin: 20,
        },
        320: {
          items: 2,
          margin: 20,
        },
        480: {
          items: 2,
          margin: 20,
        },
        576: {
          items: 2,
          margin: 20,
        },
        768: {
          items: 4,
          margin: 20,
        },
        960: {
          items: 5,
          margin: 20,
        },
        1280: {
          items: 6,
          margin: 30,
        }
      }
    });




$('#centreListing .show-on-map').click(function(e) {

if ($('.nav-toggle').is(':visible')) {
$('#centreLocationMap').show();
}

});

$('#closeCentreLocation').click(function(e) {
if(e) {
  e.preventDefault();
}
$('#centreLocationMap').hide();
});


/*
$('#closeCentreLocation').click(function(e) {
$('#centreLocationMap').removeClass('active');
});
*/

$('#calendarLayout a.slot').click(function(e) {
if(e) {
  e.preventDefault();
}
$(this).find('form').submit();
});



if($('.cms-index-index #form-quicklook').length>0) {
  if (!($('.nav-toggle').is(':visible'))) {
  $('.cms-index-index #form-quicklook .reg-number input').attr("placeholder", "Enter your reg number");
}
}



$('.page-header a.action.showcart').click(function(e) {
  // override Magento side panel cart:
window.location.href = "/checkout/cart/";
});



if($('#centreLocationMap').length>0) {
   if($('.nav-toggle').css('display') === 'none') {
     
        $('.show-on-map').first().click();
      
      }
}



    $('.faq-list dt').click(function() {
      $(this).next().slideToggle(200);
      $(this).toggleClass('active');
    });



  });
  //]]>
});
