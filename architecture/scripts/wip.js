// Work in Progress Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add active state animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Add hover effects to the back button
  const backButton = document.querySelector(".back-button");

  if (backButton) {
    backButton.addEventListener("mouseenter", function () {
      // Add subtle scale effect on hover
      this.style.transform = "translateY(-2px) scale(1.02)";
    });

    backButton.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    backButton.addEventListener("click", function (e) {
      // Add click feedback
      this.style.transform = "translateY(0) scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-2px) scale(1.02)";
      }, 100);
    });
  }

  // Add intersection observer for fade-in animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe the content card for fade-in effect
  const contentCard = document.querySelector(".content-card");
  if (contentCard) {
    // Set initial state
    contentCard.style.opacity = "0";
    contentCard.style.transform = "translateY(30px)";
    contentCard.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    // Start observing
    observer.observe(contentCard);
  }

  // Add click counter for the construction icon (Easter egg)
  const constructionIcon = document.querySelector(".construction-icon");
  let clickCount = 0;

  if (constructionIcon) {
    constructionIcon.addEventListener("click", function () {
      clickCount++;

      // Add a little shake animation
      this.style.animation = "none";
      setTimeout(() => {
        this.style.animation = "pulse 2s infinite, shake 0.5s ease-in-out";
      }, 10);

      // Easter egg: Show a message after 5 clicks
      if (clickCount === 5) {
        const statusText = document.querySelector(".status-text");
        if (statusText) {
          const originalText = statusText.textContent;
          statusText.textContent = "Still coming soon! 😊";
          setTimeout(() => {
            statusText.textContent = originalText;
            clickCount = 0;
          }, 3000);
        }
      }
    });
  }

  // Add keyboard navigation support
  document.addEventListener("keydown", function (e) {
    // Press 'H' to go home
    if (e.key.toLowerCase() === "h" && !e.ctrlKey && !e.metaKey) {
      window.location.href = "/";
    }

    // Press 'Escape' to go back
    if (e.key === "Escape") {
      window.history.back();
    }
  });

  // Console message for developers
  console.log(`
    🏗️ Work in Progress Page Loaded!
    
    Keyboard shortcuts:
    - Press 'H' to go home
    - Press 'Escape' to go back
    
    Easter egg: Try clicking the construction icon 5 times! 😉
    `);
});

// Add CSS for shake animation
const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
