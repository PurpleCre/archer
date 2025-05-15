// scroll hooks
let lastScroll = 0;
const header = document.getElementById("main-header");
const logo = document.querySelector(".logo");
const title = document.querySelector(".centered-title");
const hook = document.querySelector(".hook");
const mainServices = document.querySelector("#main-services");
const serviceHook = document.querySelector("#service-hook");

// image carousel hooks
// const track = document.querySelector(".carousel-track");
// const images = document.querySelectorAll(".carousel-track img");
// const prevBtn = document.querySelector(".carousel-btn.prev");
// const nextBtn = document.querySelector(".carousel-btn.next");
// const carousel = document.querySelector(".carousel-container");

// header scroll listener
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add light theme if scrolled down 50px
  if (currentScroll > 50) {
    header.classList.add("scrolled");
    logo.src = "./images/mahwe-dark.jpg";
  } else {
    header.classList.remove("scrolled");
    logo.src = "./images/mahwe-light.jpg";
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

// image carousel
document.addEventListener("DOMContentLoaded", () => {
  // ----- Slider Begin
  const CaroS = document.querySelector(".Carousel-slider");
  const CaroSlider = new MicroSlider(CaroS, {
    indicators: true,
    indicatorText: "",
  });
  const hammer = new Hammer(CaroS);
  const CaroSTimer = 2000;
  let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

  //  ------ Mouseenter Event
  CaroS.onmouseenter = function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + "mouse detected");
  };

  //  ------ Mouseleave Event
  CaroS.onmouseleave = function (e) {
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + "mouse detected");
  };

  //  ------ Mouseclick Event
  CaroS.onclick = function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + "mouse detected");
  };

  //  ------ Gesture Tap Event
  hammer.on("tap", function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + "gesture detected");
  });

  //  ------ Gesture Swipe Event
  hammer.on("swipe", function (e) {
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + "gesture detected");
  });

  let slideLink = document.querySelectorAll(".slide-item");
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let href = link.dataset.href;
        const target = link.dataset.target;
        if (href !== "#") window.open(href, target);
      });
    });

    // ------ Slider End
  }
});

//  link form to whatsapp
document
  .getElementById("whatsapp-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "263776583517"; // e.g., 263771234567 (no + sign)

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hello, my name is ${name}. ${message}`
    )}`;

    window.open(url, "_blank");
  });
