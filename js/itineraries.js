document.addEventListener("DOMContentLoaded", () => {
  // Accordion functionality
  document.querySelectorAll(".itinerary-header").forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = !content.classList.contains("hidden");

      // Close all
      document
        .querySelectorAll(".itinerary-content")
        .forEach((el) => el.classList.add("hidden"));
      document
        .querySelectorAll(".itinerary-header")
        .forEach((el) => el.classList.remove("active"));

      // Open this one if wasn't open
      if (!isOpen) {
        content.classList.remove("hidden");
        header.classList.add("active");
      }
    });

    // Also open on Enter key
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        header.click();
      }
    });
  });

  // Modal functionality
  const modal = document.getElementById("requestModal");
  const closeModalBtn = document.querySelector(".modal-close");
  const modalTripTitle = document.getElementById("modalTripTitle");
  const requestButtons = document.querySelectorAll(".request-btn");
  const tripForm = document.getElementById("tripRequestForm");
  const successMsg = document.querySelector(".modal-success");

  // Open modal
  requestButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tripName = btn.dataset.trip;
      modalTripTitle.textContent = tripName;
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // prevent background scroll
    });
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // restore scroll
    successMsg.classList.add("hidden");
    tripForm.reset();
  });

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalBtn.click();
    }
  });

  // Form submission
  tripForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // In real app, send to server
    successMsg.classList.remove("hidden");
    tripForm.classList.add("hidden");
    setTimeout(() => {
      closeModalBtn.click();
    }, 3000);
  });
});
