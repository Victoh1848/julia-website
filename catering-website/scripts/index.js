// scripts/index.js - home interactions
document.addEventListener('DOMContentLoaded', () => {
  // parallax on hero card
  const parallax = document.querySelector('[data-parallax]');
  if(parallax){
    window.addEventListener('mousemove', (e) => {
      const rect = parallax.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      parallax.style.transform = `translate3d(${dx*12}px, ${dy*8}px, 0) rotateX(${dy*2}deg) rotateY(${dx*6}deg)`;
    });
    window.addEventListener('mouseleave', () => parallax.style.transform = '');
  }

  // marquee loop
  const marquee = document.querySelector('.marquee .track');
  if(marquee){
    let pos = 0;
    setInterval(() => {
      pos -= 1;
      if(pos < -marquee.scrollWidth/2) pos = 0;
      marquee.style.transform = `translateX(${pos}px)`;
    }, 40);
  }

  // testimonials carousel (basic)
  const track = document.querySelector('.testimonials .track');
  if(track){
    let idx = 0;
    const items = track.children;
    function show(i){
      const w = items[0].getBoundingClientRect().width + 18;
      track.style.transform = `translateX(${-(w * i)}px)`;
    }
    setInterval(()=>{ idx = (idx+1) % items.length; show(idx); }, 3500);
  }

  // dish hover glare using mouse position
  document.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
  });
});