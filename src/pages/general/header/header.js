const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector("header > .menu > nav");
const menuLinks = document.querySelectorAll(
  "header > .menu > nav > ul > li > a",
);

const titleLink = document.querySelector("header > .title > h2 > a");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  nav.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    nav.classList.remove("active");
  });
});

titleLink.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  nav.classList.remove("active");
});
