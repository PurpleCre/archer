// selectors
const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");

// ham and nav toggle
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});

//  link form to whatsapp
document
  .querySelector(".whatsapp-form")
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