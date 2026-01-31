// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
