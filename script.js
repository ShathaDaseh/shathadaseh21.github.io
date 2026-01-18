// Header color change on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.style.backgroundColor = "#111";
    header.style.transition = "0.3s";
  } else {
    header.style.backgroundColor = "#1e1e2f";
  }
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "0.6s ease";
    }
  });
});

// Welcome message
window.onload = () => {
  console.log("Welcome to Shatha Daseh Portfolio 👋");
};
