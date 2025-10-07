// scripts/global.js - shared across pages
document.addEventListener('DOMContentLoaded', () => {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    if (mobileNav) mobileNav.hidden = !mobileNav.hidden;
  });

  // theme toggle (persist)
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    const saved = localStorage.getItem('jays-theme') || 'dark';
    document.body.classList.toggle('theme-dark', saved === 'dark');
    themeBtn.setAttribute('aria-pressed', saved === 'dark' ? 'true' : 'false');
    themeBtn.addEventListener('click', () => {
      const dark = document.body.classList.toggle('theme-dark');
      localStorage.setItem('jays-theme', dark ? 'dark' : 'light');
      themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      themeBtn.animate([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}], {duration:200});
    });
  }
});