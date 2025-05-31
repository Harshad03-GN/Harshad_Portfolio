// script.js

// Initialize AOS (Animate on Scroll) - already initialized in index.html inline script,
// but you can optionally call it here too if you want:

// AOS.init({ once: true });

// You can add more interactivity here if you want.

// Example: Animate tech icons on hover with bounce effect (CSS handles bounce on hover)

// No additional JS needed currently since animations are CSS and AOS powered.

// If you want, you can add smooth scroll for anchor links like this:

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
