/* Typing animation */
const text = "Eman Jemal";
let i = 0;
const typing = document.getElementById("typing");
function typeEffect() {
  if(i < text.length) {
    typing.textContent += text[i++];
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
function scrollReveal() {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", scrollReveal);

/* Contact form */
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Message sent!");
});

/* Dark/Light theme toggle */
const toggle = document.querySelector(".theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
});



