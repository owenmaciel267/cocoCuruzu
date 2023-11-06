// const miH1 = document.getElementById('coco');

// for (let i = 0; i < miH1.textContent.length; i++) {
//   if (miH1.textContent[i] === "C") {
//     miH1.innerHTML = miH1.innerHTML.substring(0, i) + `<span style="color: green;">${miH1.textContent[i]}</span>` + miH1.innerHTML.substring(i + 1);
//   }
// }





var swiperr = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
   

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


// Swiper de compras 

var swiperr = new Swiper(".my-swiper-compras", {
  slidesPerView: 1,
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

});
