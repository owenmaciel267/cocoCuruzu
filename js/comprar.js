
var swiperr = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoScrollOffset: 0,
    multipleActiveThumbs: true,
    slideThumbActiveClass: 'swiper-slide-thumb-active',
    thumbsContainerClass: 'swiper-thumbs',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
          slidesPerView: 1
        },
        520: {
          slidesPerView: 2
        },
        950: {
          slidesPerView: 3
        },
      },
});

