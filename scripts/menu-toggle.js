document.addEventListener("DOMContentLoaded", function () {
  // Select the mobile menu container and overlay elements
  const mobileMenuContainer = document.getElementById(
    "nav-mobile-menu-container"
  );
  const mobileBodyOverlay = document.querySelector(".mobile-body-overlay");

  // Function to toggle the menu
  function toggleMobileMenu() {
    // Toggle the "opened" class on the mobile menu container
    mobileMenuContainer.classList.toggle("opened");
    // Toggle the "d-none" class on the overlay to show/hide it
    mobileBodyOverlay.classList.toggle("d-none");
  }

  // Add event listener to the div with the "mobile-toggle" class
  const menuToggleButton = document.querySelector(".mobile-toggle");
  if (menuToggleButton) {
    menuToggleButton.addEventListener("click", toggleMobileMenu);
  }

  // Optional: Close the menu if the overlay itself is clicked
  mobileBodyOverlay.addEventListener("click", toggleMobileMenu);

  // Add event listener to the close icon (the element with the "nav-close" class)
  const closeIcon = document.querySelector(".nav-close");
  if (closeIcon) {
    closeIcon.addEventListener("click", toggleMobileMenu);
  }
});
