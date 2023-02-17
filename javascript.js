const menuBtn = document.querySelector(".menu");
const menuCloseBtn = document.querySelector(".menu-close");
const navMenuLinks = document.querySelector(".nav-links-mobile");
const shadowCover = document.querySelector(".shadow");

menuBtn.addEventListener("click", () => {
  navMenuLinks.classList.remove("close");
  shadowCover.style.display = "block";
});

menuCloseBtn.addEventListener("click", () => {
  navMenuLinks.classList.add("close");
  shadowCover.style.display = "none";
});