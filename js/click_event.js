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

  // 메뉴선택
  const menuSelect = this.document.querySelectorAll(".menu-flavor");
  const sandwiches = this.document.querySelectorAll(".sand-menus");

  menuSelect.forEach((selec, index) => {
    selec.addEventListener("click", function () {
      menuSelect.forEach((flavor) => {
        flavor.classList.remove("open");
      });
      sandwiches.forEach((pick) => {
        pick.classList.remove("open");
      });
      selec.classList.add("open");
      sandwiches[index].classList.add("open");
    });
    // console.log(selec);
    // console.log(sandwiches[index]);
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
  const sandwich = this.document.querySelectorAll(".swiper-slide");
  const zoomIcon = this.document.querySelector(".zoom-icon");

  sandwich.forEach(function (sand) {
    sand.addEventListener("mouseenter", function () {});
  });

  // 뉴스 notice 스와이퍼
  const noticeSwiper = new Swiper(".subNotice", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
