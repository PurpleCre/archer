//  link form to whatsapp
document
  .getElementById("whatsapp-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value.trim();

    const message = document.getElementById("msg").value.trim();

    const name = `${fname} ${lname}`;
    const phoneNumber = "263789177726"; // e.g., 263771234567 (no + sign)

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hello, my name is ${name}. I have a ${type} project, with thw following specifications. ${message}`
    )}`;

    window.open(url, "_blank");
  });
