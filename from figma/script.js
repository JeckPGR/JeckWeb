const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutLine = document.querySelector("[data-cursor-outline]");
const preloader = document.querySelector(".preloader");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //cursorOutLine.style.left = `${posX}px`;
  //cursorOutLine.style.left = `${posY}px`;

  cursorOutLine.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Hide the preloader after 2 seconds
setTimeout(() => {
  // Apply the zoom-in effect by setting the transform scale to 1.2
  preloader.style.transform = "scale(1.2)";

  // Fade out the preloader using opacity
  preloader.style.opacity = "0";

  // Wait for the transition to finish before hiding the preloader
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000); // Wait for 1000 milliseconds (1 second) for the zoom-in and fade-out transitions to finish
}, 3000); // 2000 milliseconds = 2 seconds

//scroll

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This creates a smooth scroll animation
  });
}

// Get the button element by its ID
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Attach a click event listener to the button
scrollToTopBtn.addEventListener("click", scrollToTop);
