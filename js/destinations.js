document.addEventListener("DOMContentLoaded", () => {
  // Mock destination data
  const destinations = [
    {
      name: "Paris, France",
      region: "europe",
      image: "../images/destinations/paris.jpg",
      price: "$8,500",
      days: "7 Days",
    },
    {
      name: "Tokyo, Japan",
      region: "asia",
      image: "../images/destinations/tokyo.jpg",
      price: "$9,200",
      days: "10 Days",
    },
    {
      name: "Bali, Indonesia",
      region: "asia",
      image: "../images/destinations/bali.jpg",
      price: "$7,800",
      days: "8 Days",
    },
    {
      name: "Santorini, Greece",
      region: "europe",
      image: "../images/destinations/santorini.jpg",
      price: "$9,000",
      days: "6 Days",
    },
    {
      name: "New York, USA",
      region: "americas",
      image: "../images/destinations/ny.jpg",
      price: "$7,200",
      days: "5 Days",
    },
    {
      name: "Queenstown, NZ",
      region: "oceania",
      image: "../images/destinations/queenstown.jpg",
      price: "$8,900",
      days: "9 Days",
    },
  ];

  const grid = document.getElementById("destinationsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Render destinations
  const renderDestinations = (filter = "all") => {
    grid.innerHTML = "";
    const filtered =
      filter === "all"
        ? destinations
        : destinations.filter((d) => d.region === filter);

    filtered.forEach((dest) => {
      const card = document.createElement("article");
      card.className = "destination-card";
      card.innerHTML = `
                <img src="${dest.image}" alt="${dest.name}">
                <h3>${dest.name}</h3>
                <p>${dest.days} • From ${dest.price}</p>
                <a href="../itineraries.html" class="btn btn--outline">Explore</a>
            `;
      grid.appendChild(card);
    });
  };

  // Initial render
  renderDestinations();

  // Filter event listeners
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Render filtered
      renderDestinations(btn.dataset.filter);
    });
  });
});
