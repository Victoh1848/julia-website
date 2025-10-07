// scripts/about.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.member').forEach((m, i) => {
    m.style.opacity = 0;
    m.style.transform = 'translateY(18px)';
    setTimeout(() => {
      m.style.transition = 'all 600ms cubic-bezier(.2,.9,.3,1)';
      m.style.opacity = 1;
      m.style.transform = 'translateY(0)';
    }, 120 * i);
  });
});