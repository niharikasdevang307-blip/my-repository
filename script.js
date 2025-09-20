// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Simple Form Validation =====
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("⚠️ Please fill in all fields before sending!");
  }
});

