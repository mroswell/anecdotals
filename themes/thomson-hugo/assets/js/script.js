// Preloader js
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});


async function previewImageClicked(el) {
  el.nextElementSibling.style.display='block';
  el.style.display='none';
}


//  post-slider-block
function postSlider() {
  $('.slider-block').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
  });
}
postSlider();

//
// (function ($) {
//
//   // carosel
//   $('.owl-carousel').owlCarousel({
//     items: 1,
//     loop: true,
//     autoplay: true,
//     dots: false,
//     autoplayTimeout: 8000
//   });
//
//   // Shuffle js filter and masonry
//   var containerEl = document.querySelector('.shuffle-wrapper');
//   if (containerEl) {
//     var Shuffle = window.Shuffle;
//     var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
//       itemSelector: '.shuffle-item',
//       buffer: 1
//     });
//
//     jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
//       var input = evt.currentTarget;
//       if (input.checked) {
//         myShuffle.filter(input.value);
//       }
//     });
//   }
//
//   // magnific popup
//   $('.trailer-gallery').each(function () {
//     $(this).find('.popup-gallery').magnificPopup({
//       type: 'image',
//       gallery: {
//         enabled: true
//       }
//     });
//   });
//
//
//
//
// })(jQuery);
