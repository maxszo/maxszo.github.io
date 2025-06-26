// Animations avec ScrollReveal (lib externe)
ScrollReveal({
  distance: '40px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom',
  reset: false
});

ScrollReveal().reveal('.section-title', { delay: 200 });
ScrollReveal().reveal('.section-content, .project, .timeline li', {
  delay: 400,
  interval: 100
});
