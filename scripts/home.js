// scroll hooks
const title = document.querySelector(".centered-title");
const hook = document.querySelector(".hook");
const mainServices = document.querySelector("#main-services");
const serviceHook = document.querySelector("#service-hook");

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

// changing hero text
const texts = [
  "Your Vision, Our Expertise",
  "Innovating the Future of Construction",
  "Quality You Can Build On",
  "Turning Ideas Into Landmarks",
  "From Concept to Concrete — We Build the Future",
  "Shaping Land, Raising Standards",
  "Design. Develop. Deliver",
  "Trusted Builders of Tomorrow’s Communities",
  "Driven by Vision. Built with Integrity",
  "Construction with Purpose, Precision, and Pride",
  "Elevating Architecture, Empowering Ambition",
  "Your Future, Engineered Today",
];

let index = 0;

setInterval(() => {
  index = (index + 1) % texts.length;
  title.style.opacity = 0;
  setTimeout(() => {
    title.textContent = texts[index];
    title.style.opacity = 1;
  }, 500);
}, 4000); // Change text every 3 seconds

let currentSlide = 0;
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".dots-container");

images[currentSlide].classList.add("active");

// Create dots
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === currentSlide) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    currentSlide = i;
    updateSlide();
  });
  dotsContainer.appendChild(dot);
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide();
});

function updateSlide() {
  images.forEach((image, index) => {
    image.classList.remove("active");
    if (index === currentSlide) {
      image.classList.add("active");
    }
  });

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentSlide) {
      dot.classList.add("active");
    }
  });
}

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide();
}, 5000);

//  link form to whatsapp
document
  .getElementById("whatsapp-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "263789177726"; // e.g., 263771234567 (no + sign)

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hello, my name is ${name}. ${message}`
    )}`;

    window.open(url, "_blank");
  });
