// query selectors
const projectCards = document.querySelectorAll(".project-item");
// FILTER LOGIC
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".project-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");

    items.forEach((item) => {
      item.classList.toggle(
        "hidden",
        filter !== "all" && item.dataset.category !== filter
      );
    });
  });
});


// loop through each projectCard
projectCards.forEach((projectCard) => {
  // event listener for projectCard mouseover
  projectCard.addEventListener("mouseover", (e) => {
    // Ensure the overlay and button are visible
    e.target
      .closest(".project-item")
      .querySelector(".overlay")
      .classList.remove("hide");
    e.target
      .closest(".project-item")
      .querySelector(".details")
      .classList.remove("hide");
  });

  // event listener for projectCard mouseout
  projectCard.addEventListener("mouseout", (e) => {
    e.target
      .closest(".project-item")
      .querySelector(".overlay")
      .classList.add("hide");
    e.target
      .closest(".project-item")
      .querySelector(".details")
      .classList.add("hide");
  });
});