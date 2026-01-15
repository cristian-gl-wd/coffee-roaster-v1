const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector("header > .menu > nav");
const menuLinks = document.querySelectorAll(
  "header > .menu > nav > ul > li > a",
);

const titleLink = document.querySelector("header > a.title");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" },
);

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

menuLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) observer.observe(section);
});
