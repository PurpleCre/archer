// selectors
const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");

// ham and nav toggle
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});