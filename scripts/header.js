
// header scroll effect

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let header = document.getElementById("tbc-header");
  let currentScrollPos = window.scrollY;

  if (window.innerWidth > 1024 && window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  if (window.innerWidth <= 1024) {
    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      header.classList.add("header-hide");
    } else {
      // Scrolling up
      header.classList.remove("header-hide");
      header.classList.add("scrolled");
    }

    prevScrollPos = currentScrollPos;
  }
  if (currentScrollPos <= 0) {
    header.classList.remove("scrolled");
    header.classList.remove("header-hide");
  }
});

// header burger menu animation

const burgerMenu = document.querySelector(".burger-menu");
const leftLine = document.querySelector(".left-line");
const rightLine = document.querySelector(".right-line");
const middleLine = document.querySelector(".middle-line");
const mobileNavigationMenu = document.querySelector(".mobile-navigation-menu");

burgerMenu.addEventListener("click", function () {
  // Toggle rotate-top-bottom class on left and right lines
  toggleAnimationClass(".left-line", "rotate-top");
  toggleAnimationClass(".right-line", "rotate-bottom");
   // Toggle rotate-middle class on the middle line
  toggleAnimationClass(".middle-line", "rotate-middle");
  // Toggle hide class on mobile navigation menu
  mobileNavigationMenu.classList.toggle("hide");
  // Toggle overflow: hidden; on body
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
});

function toggleAnimationClass(selector, className) {
  const element = document.querySelector(selector);
  element.classList.toggle(className);
}