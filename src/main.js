import "remixicon/fonts/remixicon.css";

const x = document.querySelector(".x");
const a = document.querySelectorAll("a");
const bar = document.querySelector(".bar");
const menuList = document.querySelector(".menuList");
bar.addEventListener("click", openMenu);
x.addEventListener("click", closeMenu);
a.forEach((link) => link.addEventListener("click", closeMenu));
function openMenu() {
  bar.classList.toggle("inactive");
  x.classList.toggle("active");
  menuList.classList.toggle("active");
}
function closeMenu() {
  bar.classList.toggle("inactive");
  x.classList.toggle("active");
  menuList.classList.toggle("active");
}
