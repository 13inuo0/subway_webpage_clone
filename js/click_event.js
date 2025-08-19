window.addEventListener("load", function () {
  // 상단메뉴 호버_서브메뉴
  const menus = this.document.querySelector(".menubar");
  const subMenu = this.document.querySelectorAll(".submenu");
  const hBg = this.document.querySelector(".header-bg");

  menus.addEventListener("mouseenter", function () {
    subMenu.forEach(function (sub) {
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
  menus.addEventListener("mouseleave", function () {
    subMenu.forEach(function (sub) {
      sub.classList.remove("active");
    });
    hBg.classList.remove("open");
  });

  //   스와이퍼 (광고배너)
  const visualSwiper = new Swiper(".banner-swiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 샌드위치 메뉴 스와이퍼
  const itemSwiper = new Swiper(".food-menu", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      590: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // 호버 줌아이콘 실행
  const sandwich = this.document.querySelectorAll(".swiper a");
  const zoomIcon = this.document.querySelector(".zoom-icon");
  sandwich.addEventListener("mouseenter", function () {
    sandwich.forEach(function (sand) {
      sand.classList.add("hover");
    });
    zoo
  });
  zoomIcon;
});
