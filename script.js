// LOADER
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 1s ease";
  setTimeout(() => loader.style.display = "none", 1000);
});

// SCROLL ANIMATION
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Сообщение отправлено. Я свяжусь с вами.");
});