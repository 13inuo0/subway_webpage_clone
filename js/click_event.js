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
  // const sandMenu = this.document.querySelectorAll(".sandtap-menus");
  // const classic = this.document.querySelectorAll(".classic");
  // sandMenu.forEach((sandmenus) => {
  //   console.log(sandmenus);
  // });

  // function menuSelect(mS){
  //   let mSlect = document.querySelector(mS)
  //   if(mSlect.style.display === "none" || mSlect.style.display === ""){
  //     mSlect.style.display = "block"
  //   }
  //   else if(mSlect.style.display === "block"){mSlect.style.display ="none"}
  //   else{mSlect.style.display = "none"}
  // }
  // const sandMenu1 = this.document.querySelector(".classic")
  // const sandMenu2 = this.document.querySelector(".fresh")
  // const sandMenu3 = this.document.querySelector(".primium")
  // const sandMenu4 = this.document.querySelector(".morning-menu")

  // sandMenu1.addEventListener("click",function(){
  //   menuSelect(".classic-menus")
  // })
  // sandMenu2.addEventListener("click",function(){
  //   menuSelect(".fresh-menus")
  // })
  // sandMenu3.addEventListener("click",function(){
  //   menuSelect(".primium-menus")
  // })
  // sandMenu4.addEventListener("click",function(){
  //   menuSelect(".morning-menu-menus")
  // })

  // const menuSelect = this.document.querySelectorAll(".menu-flavor");
  // const sandwiches = this.document.querySelectorAll(".sand-menus");
  // menuSelect.forEach((flavor) => {
  //   // console.log(flavor); 확인완료
  //   flavor.addEventListener("click", function () {
  //     const select = sandwiches[index];

  //     if (select.classList.contains("open")) {
  //       select.classList.remove("open");
  //     } else {
  //       // 열려있는 메뉴는 닫기
  //       sandwiches.forEach(function (flavorSelect,index) {
  //         //   console.log(sub);
  //         flavorSelect.classList.remove("open");
  //       });
  //       // active가 없으면 열기
  //       select.classList.add("open");
  //     }
  //   });
  // });

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
});
