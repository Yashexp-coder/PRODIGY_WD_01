window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Add a small delay scroll effect to hero button
const heroBtn = document.querySelector('.btn');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    setTimeout(() => {
      console.log("Navigated to menu");
    }, 300);
  });
}
