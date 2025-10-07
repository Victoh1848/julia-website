// scripts/products.js - small product modal + search/filter
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('product-grid');
  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const modalPrice = document.getElementById('modal-price');
  const modalOrder = document.getElementById('modal-order');
  const closeBtn = document.querySelector('.modal-close');


  // open modal from any product card button
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="open"]');
    if (!btn) return;
    const card = btn.closest('.product-card');
    if (!card) return openProduct(card);
  });

  

  // allow keyboard open via Enter on card
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.product-card');
      if (card) openProduct(card);
    }
  });

  function openProduct(card){
    const title = card.dataset.title || card.querySelector('h3')?.textContent;
    const desc = card.dataset.desc || '';
    const price = card.dataset.price || '';
    const imgEl = card.querySelector('img');
    const src = imgEl?.getAttribute('src') || '';

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price;
    modalImg.src = src;
    modalImg.alt = imgEl?.alt || title;
    modalOrder.href = `mailto:jay@example.com?subject=Order%20Enquiry:%20${encodeURIComponent(title)}`;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });

  // quick search + filter (client side)
  const search = document.getElementById('search');
  const filter = document.getElementById('filter-category');

  function filterGrid(){
    const q = search?.value?.toLowerCase?.() || '';
    const cat = filter?.value || '';
    document.querySelectorAll('.product-card').forEach(card => {
      const title = (card.dataset.title || card.querySelector('h3')?.textContent || '').toLowerCase();
      const desc = (card.dataset.desc || '').toLowerCase();
      const matchesQ = !q || title.includes(q) || desc.includes(q);
      const matchesCat = !cat || (card.dataset.title || '').toLowerCase().includes(cat); // simple fallback
      card.style.display = (matchesQ && matchesCat) ? '' : 'none';
    });
  }

  search?.addEventListener('input', filterGrid);
  filter?.addEventListener('change', filterGrid);
});