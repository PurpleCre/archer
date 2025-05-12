let lastScroll = 0;
const header = document.getElementById("main-header");
const title = document.querySelector(".centered-title");
const hook = document.querySelector(".hook");
const mainServices = document.querySelector("#main-services");
const serviceHook = document.querySelector("#service-hook");

// header scroll listener
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add light theme if scrolled down 50px
  if (currentScroll > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Hide on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

// scroll animation triggers
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.3;

  const titleTop = title.getBoundingClientRect().top;
  const hookTop = hook.getBoundingClientRect().top;
  const mainServicesTop = mainServices.getBoundingClientRect().top;
  const serviceHookTop = serviceHook.getBoundingClientRect().top;
  if (titleTop < trigger) {
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }
  if (hookTop < trigger) {
    hook.classList.add("animated-headline");
  }
  if (mainServicesTop < trigger) {
    mainServices.classList.add("slide-in-right");
  }
  if (serviceHookTop < trigger) {
    serviceHook.classList.add("slide-in-left");
  }
});
