// query selectors
const projectCards = document.querySelectorAll(".arch-proj");

// loop through each projectCard
projectCards.forEach((projectCard) => {
  // event listener for projectCard mouseover
  projectCard.addEventListener("mouseover", (e) => {
    // Ensure the overlay and button are visible
    e.target
      .closest(".arch-proj")
      .querySelector(".overlay")
      .classList.remove("hide");
    e.target
      .closest(".arch-proj")
      .querySelector(".details")
      .classList.remove("hide");
  });

  // event listener for projectCard mouseout
  projectCard.addEventListener("mouseout", (e) => {
    e.target
      .closest(".arch-proj")
      .querySelector(".overlay")
      .classList.add("hide");
    e.target
      .closest(".arch-proj")
      .querySelector(".details")
      .classList.add("hide");
  });
});
