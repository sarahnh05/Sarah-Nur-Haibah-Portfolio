// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Scroll Reveal with Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Reveal only once for performance
        }
      });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for reduced motion or old browsers
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 3. Active Nav Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150; // offset for sticky header
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  });

  // 4. API Simulator Typing Effect (Simple Version)
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement && !prefersReducedMotion) {
    // Hide content initially
    typewriterElement.style.opacity = 0;
    
    // Simulate network delay then reveal
    setTimeout(() => {
      typewriterElement.style.transition = 'opacity 0.5s ease-in';
      typewriterElement.style.opacity = 1;
    }, 800);
  }
});
