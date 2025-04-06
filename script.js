// script.js

// Efecto de scroll suave al hacer clic en los enlaces del menú
const links = document.querySelectorAll("nav a[href^='#']");

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Efecto de aparición suave en secciones al hacer scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
