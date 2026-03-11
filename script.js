// DOM Elements
const selectTrigger = document.querySelector(".select-trigger");
const dropdown = document.querySelector(".dropdown");
const selectedOption = document.querySelector(".selected-option");
const searchInput = document.getElementById("searchInput");
const optionsContainer = document.querySelector(".options-container");
const options = document.querySelectorAll(".option");
const noResults = document.querySelector(".no-results");

// Toggle Dropdown
selectTrigger.addEventListener("click", function (e) {
  toggleDropdown();
});

function toggleDropdown() {
  selectTrigger.classList.toggle("active");
  dropdown.classList.toggle("active");

  if (dropdown.classList.contains("active")) {
    searchInput.focus();
    resetAnimations();
  } else {
    searchInput.value = "";
    filterOptions("");
  }
}

// Reset animations when dropdown opens
function resetAnimations() {
  return;
}

// Option Selection
options.forEach((option) => {
  option.addEventListener("click", function (e) {
    e.stopPropagation();

    const href = this.getAttribute("data-href");
    if (href) {
      const resolvedHref = new URL(href, window.location.href).toString();
      window.location.assign(resolvedHref);
      return;
    }

    // Remove selected class from all options
    options.forEach((opt) => opt.classList.remove("selected"));

    // Add selected class to clicked option
    this.classList.add("selected");

    // Update selected option display
    const icon = this.getAttribute("data-icon");
    const text = this.querySelector("span").textContent;
    const iconColor = this.querySelector("i").style.color;

    selectedOption.innerHTML = `
                    <i class="fas ${icon}" style="color: ${iconColor};"></i>
                    <span>${text}</span>
                `;

    // Close dropdown
    setTimeout(() => {
      toggleDropdown();
    }, 300);
  });
});

// Live Search Functionality
searchInput.addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  filterOptions(searchTerm);
});

function filterOptions(searchTerm) {
  let visibleCount = 0;

  options.forEach((option) => {
    const text = option.querySelector("span").textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      option.classList.remove("hidden");
      visibleCount++;
    } else {
      option.classList.add("hidden");
    }
  });

  // Show/hide no results message
  if (visibleCount === 0) {
    noResults.classList.add("show");
    optionsContainer.style.display = "none";
  } else {
    noResults.classList.remove("show");
    optionsContainer.style.display = "block";
  }
}

// Click Outside to Close
document.addEventListener("click", function (e) {
  if (!e.target.closest(".custom-select")) {
    selectTrigger.classList.remove("active");
    dropdown.classList.remove("active");
    searchInput.value = "";
    filterOptions("");
  }
});

// Keyboard Support (ESC to close)
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && dropdown.classList.contains("active")) {
    toggleDropdown();
  }
});

// Prevent dropdown close on search input click
searchInput.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Touch Support for Mobile
let touchStartY = 0;
let touchEndY = 0;

dropdown.addEventListener(
  "touchstart",
  function (e) {
    touchStartY = e.changedTouches[0].screenY;
  },
  { passive: true }
);

dropdown.addEventListener(
  "touchend",
  function (e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  },
  { passive: true }
);

function handleSwipe() {
  if (touchEndY > touchStartY + 50) {
    toggleDropdown();
  }
}

// Initial setup
window.addEventListener("load", function () {
  document.querySelector(".hero-shell").style.animation = "fadeIn 0.4s ease";
});

// Console Easter Egg
console.log(
  "%c Custom Select Menu",
  "font-size: 20px; font-weight: bold; color: #667eea;"
);

console.log(
  "%cFeatures: Glassmorphism | Live Search | Ripple Effects | Responsive Design",
  "font-size: 12px; color: #888;"
);
