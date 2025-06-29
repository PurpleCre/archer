// scroll hooks
let lastScroll = 0;
const header = document.getElementById("main-header");
const logo = document.querySelector(".logo");
const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");

// header scroll listener
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
  
//   // Hide on scroll down, show on scroll up
//   if (currentScroll > lastScroll && currentScroll > 100) {
//     header.classList.add("hide");
//   } else {
//     header.classList.remove("hide");
//   }

//   lastScroll = currentScroll;
// });

// show to top button on scroll
window.addEventListener("scroll", () => {
  const toTop = document.querySelector(".top-btn");
  if (window.scrollY > 600) {
    toTop.classList.remove("hide");
  } else {
    toTop.classList.add("hide");
  }
});

// responsive ham and nav
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});