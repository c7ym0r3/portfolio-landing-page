document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".header__burger-menu");
  const nav = document.querySelector(".header__nav");
  const navItems = document.querySelectorAll(".header__nav-link");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("header__nav--active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      nav.classList.remove("header__nav--active");
    });
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
      nav.classList.remove("header__nav--active");
    }
  });
});
