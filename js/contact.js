document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successDiv = document.querySelector(".form-success");

  const validateField = (input, errorSpan) => {
    if (!input.value.trim()) {
      errorSpan.classList.remove("hidden");
      return false;
    } else {
      errorSpan.classList.add("hidden");
      return true;
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Validate name
    const nameError = nameInput.nextElementSibling;
    if (!validateField(nameInput, nameError)) valid = false;

    // Validate email
    const emailError = emailInput.nextElementSibling;
    if (!validateField(emailInput, emailError)) valid = false;
    if (emailInput.value && !validateEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid email";
      emailError.classList.remove("hidden");
      valid = false;
    } else {
      emailError.textContent = "Please enter your email";
    }

    // Validate message
    const messageError = messageInput.nextElementSibling;
    if (!validateField(messageInput, messageError)) valid = false;

    if (valid) {
      // Mock submission
      form.classList.add("hidden");
      successDiv.classList.remove("hidden");
      // In real app: fetch('/submit', { method: 'POST', body: new FormData(form) })
    }
  });
});
