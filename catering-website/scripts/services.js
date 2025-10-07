// scripts/services.js
document.addEventListener('DOMContentLoaded', () => {
  // pricing toggle demo
  const toggle = document.getElementById('pricing-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.querySelectorAll('.price-month, .price-event').forEach(el => el.classList.toggle('hidden'));
      toggle.classList.toggle('active');
    });
  }

  // gallery lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'llbox';
  lightbox.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);z-index:120';
  const img = document.createElement('img');
  img.style.maxWidth = '92%';
  img.style.maxHeight = '92%';
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  document.querySelectorAll('.gallery img').forEach(g => {
    g.addEventListener('click', () => {
      img.src = g.src;
      lightbox.style.display = 'flex';
    });
  });
  lightbox.addEventListener('click', () => lightbox.style.display = 'none');
});