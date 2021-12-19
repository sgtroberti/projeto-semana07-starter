const burgerButton = document.getElementById("menu-button");

const toggleMenu = () => {
  const menu = document.getElementById("menu");
  const svgBurger = document.getElementById("burger");
  const svgClose = document.getElementById("close");

  menu.classList.toggle("navbar-links__active");

  if (menu.classList.contains("navbar-links__active")) {
    svgBurger.classList.add("hide");
    svgBurger.classList.remove("show");
    svgClose.classList.add("show");
    svgClose.classList.remove("hide");
  } else {
    svgBurger.classList.add("show");
    svgBurger.classList.remove("hide");
    svgClose.classList.add("hide");
    svgClose.classList.remove("show");
  }
};

burgerButton.addEventListener("click", toggleMenu);
