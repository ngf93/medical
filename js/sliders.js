const swiper1 = new Swiper('.swiper-1', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const swiper2 = new Swiper('.swiper-portfolio', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  }
});

const swiper3 = new Swiper('.swiper-3', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

const swiper4 = new Swiper('.swiper-reviews', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: ["100%", 0, 0],
      scale: 0.8,
    },
    next: {
      translate: ["-100%", 0, 0],
      scale: 0.8,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      creativeEffect: {
        prev: {
          translate: ["50%", "-40%", 0],
          scale: 0.8,
        },
        next: {
          translate: ["-50%", "-40%", 0],
          scale: 0.8,
        },
      },
    }
  }
});

const swiper5 = new Swiper(".swiper-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
  breakpoints: {
    576: {
      spaceBetween: 16,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 25,
      slidesPerView: 4,
    }
  }
});
const swiper6 = new Swiper(".swiper-photo", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper5,
  },
});