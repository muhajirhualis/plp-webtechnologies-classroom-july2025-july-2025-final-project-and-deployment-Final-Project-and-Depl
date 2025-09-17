// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });
}

// Simple Scroll Animation (fade-in on scroll)
document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".destination-card, .team-member, .value-card"
    );
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 50) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial styles for animation
  document
    .querySelectorAll(".destination-card, .team-member, .value-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load
});
