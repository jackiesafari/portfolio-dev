const descriptionToggles = document.querySelectorAll(".read-more-toggle");

function syncToggleVisibility(toggle) {
  const descriptionId = toggle.getAttribute("aria-controls");
  const description = document.getElementById(descriptionId);

  if (!description) {
    toggle.hidden = true;
    return;
  }

  const wasExpanded = toggle.getAttribute("aria-expanded") === "true";
  if (wasExpanded) {
    toggle.hidden = false;
    return;
  }

  description.classList.add("is-collapsed");
  const needsToggle = description.scrollHeight > description.clientHeight + 1;
  toggle.hidden = !needsToggle;
}

function handleToggleClick(toggle) {
  const descriptionId = toggle.getAttribute("aria-controls");
  const description = document.getElementById(descriptionId);

  if (!description) {
    return;
  }

  const isExpanded = toggle.getAttribute("aria-expanded") === "true";
  const nextExpandedState = !isExpanded;

  toggle.setAttribute("aria-expanded", String(nextExpandedState));
  toggle.textContent = nextExpandedState ? "Show less" : "Read more";
  description.classList.toggle("is-collapsed", !nextExpandedState);
}

descriptionToggles.forEach((toggle) => {
  syncToggleVisibility(toggle);
  toggle.addEventListener("click", () => handleToggleClick(toggle));
});

window.addEventListener("resize", () => {
  descriptionToggles.forEach((toggle) => syncToggleVisibility(toggle));
});
