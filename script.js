isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("_hover");
      }
    }
    // появление поля поиск
    if (targetElement.classList.contains("search-form__icon")) {
      document.querySelector(".search-form").classList.toggle("_active");
    } else if (
      !targetElement.closest(".search-form") &&
      document.querySelector(".search-form._active")
    ) {
      document.querySelector(".search-form").classList.remove("_active");
    }
  }
};

// accardeon

const menuItem = Array.from(document.querySelectorAll(".menu__item"));

menuItem.forEach((it) => {
  it.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".menu__item");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("_active");
  if (currentBox.classList.contains("_active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}

// Burger
const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu__body");
const body = document.body;

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}

// Swiper
// if (document.querySelector(".slider-main__body")) {
  // const swiper1 = new Swiper("slider-main__body", {
    // Optional parameters
    // slidesPerView: 1,
    // spaceBetween: 32,
    // speed: 800,
    // direction: "vertical",
    // loop: true,
    // parallax: true,

    // If we need pagination
    // pagination: {
    //   el: ".controls-slider-main__dotts",
    //   clickable: true,
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".slider-main .slider-arrow_next",
    //   prevEl: ".slider-main .swiper-button-prev",
    // },
  // });
// }
