// scripts/contact.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const obj = Object.fromEntries(data.entries());
      if(!obj.name || !obj.email || !obj.message){ alert('Please complete all fields'); return; }
      // fake send
      const submit = form.querySelector('button[type="submit"]');
      submit.disabled = true; submit.textContent = 'Sending...';
      setTimeout(() => { alert(`Thanks ${obj.name}. Jay's Dessert-Viles will reach out.`); form.reset(); submit.disabled = false; submit.textContent = 'Send message'; }, 900);
    });
  }

  // faq accordion
  document.querySelectorAll('.faq .q').forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('open');
      const a = q.nextElementSibling;
      if(!a) return;
      if(q.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
      else a.style.maxHeight = '0px';
    });
  });
});