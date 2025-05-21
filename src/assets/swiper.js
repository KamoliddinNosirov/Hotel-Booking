var swiper = new Swiper(".TestimonialsSwiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
  });