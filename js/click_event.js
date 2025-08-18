window.addEventListener("load", function () {
  const menus = this.document.querySelector(".menubar");
  const subMenu = this.document.querySelectorAll(".submenu");
  const hBg = this.document.querySelector(".header-bg");

  menus.addEventListener("mouseenter", function () {
    subMenu.forEach(function (sub) {
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
  menus.addEventListener("mouseleave", function(){
    subMenu.forEach(function (sub){
        sub.classList.remove("active")
    })
    hBg.classList.remove("open")
  })
});
