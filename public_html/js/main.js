// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = document.getElementById('menuIcon');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.toggle('open');
      menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      lucide.createIcons();
    });
  }

  // Mobile dropdown toggles
  document.querySelectorAll('.mobile-dropdown-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const dropdown = btn.closest('.mobile-dropdown');
      dropdown.classList.toggle('open');
    });
  });

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav .nav-link:not(.mobile-dropdown-btn)').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });

  // Scroll animations
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });

  // Desktop dropdown hover
  document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
      dropdown.classList.add('open');
    });
    dropdown.addEventListener('mouseleave', function() {
      dropdown.classList.remove('open');
    });
  });
});

// Scroll to element
function scrollToElement(id) {
  var el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
