// get gamazine image element by ID
const gamazinImg = document.getElementById("gamazin");

// image array for gamazine
const images = [
  "./images/tech/gamazine/Apricot-Cream-300x300.jpg",
  "./images/tech/gamazine/Apricot-Peach-300x300.jpg",
  "./images/tech/gamazine/Beige-300x300.jpg",
  "./images/tech/gamazine/Black-300x300.jpg",
  "./images/tech/gamazine/Ceiling-Blue-1-300x300.jpg",
];

// Function to change the image every 3 seconds
let currentIndex = 0;
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  gamazinImg.src = images[currentIndex];
  gamazinImg.style.transition = "opacity 0.5s ease-in-out";
  gamazinImg.style.opacity = "1"; // Fade in
}
// Set an interval to change the image
setInterval(changeImage, 3000); // Change image every 3 seconds
document.addEventListener("DOMContentLoaded", () => {
  const gamazinImg = document.getElementById("gamazin");
  if (gamazinImg) {
    gamazinImg.src = images[0]; // Set initial image
  }
});
