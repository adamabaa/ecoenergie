/* ══════════════════════════════════════════
     JAVASCRIPT
══════════════════════════════════════════ */
/* ── LOADER PARTICLES ── */
(function() {
  const container = document.getElementById('loaderParticles');
  for(let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'lp';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      --dur:${2 + Math.random()*4}s;
      --delay:${Math.random()*3}s;
      --dx:${(Math.random()-0.5)*80}px;
    `;
    container.appendChild(p);
  }
})();

/* ── LOADER TEXT TYPEWRITER ── */
(function() {
  const text = 'ÉCO ÉNERGIE';
  const el = document.getElementById('loaderText');
  let i = 0;
  function type() {
    if(i < text.length) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.animationDelay = (i * 0.07) + 's';
      el.appendChild(span);
      i++;
      setTimeout(type, 70);
    }
  }
  setTimeout(type, 200);
})();

/* ── LOADER DISMISS ── */
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
    document.body.classList.remove('loading');
  }, 2000);
});

/* ── HERO PARTICLES ── */
(function() {
  const container = document.getElementById('heroParticles');
  const colors = ['#2EAA1A','#5DCB49','#A8E063','#22C55E'];
  for(let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'hp';
    const size = Math.random() * 6 + 2;
    const color = colors[Math.floor(Math.random()*colors.length)];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      bottom:${Math.random()*30}%;
      background:${color};
      --dur:${6 + Math.random()*8}s;
      --delay:${Math.random()*6}s;
      --ry:-${30 + Math.random()*60}px;
      --fy:-${80 + Math.random()*120}px;
      --op:${0.08 + Math.random()*0.15};
    `;
    container.appendChild(p);
  }
})();

/* ── SMOOTH NAV ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

/* ── BACK TO TOP ── */
const btnTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  btnTop.classList.toggle('show', window.scrollY > 400);
});

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

/* ── COUNTER ANIMATION ── */
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.count);
      let current = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        current += step;
        if(current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + (target >= 10 ? '+' : '');
      }, 50);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

/* ── FORM SUBMIT ── */
document.getElementById('formBtn').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.c-form input, .c-form textarea, .c-form select');
  let ok = true;
  inputs.forEach(i => { if(!i.value.trim()) ok = false; });
  const b = document.getElementById('formBtn');
  if(ok) {
    b.textContent = '✓ Message envoyé !';
    b.style.background = 'var(--ok)';
    setTimeout(() => { b.textContent = 'Envoyer le message ➜'; b.style.background=''; inputs.forEach(i=>i.value=''); }, 3000);
  } else {
    b.textContent = '⚠ Veuillez remplir tous les champs';
    b.style.background = '#ef4444';
    setTimeout(() => { b.textContent = 'Envoyer le message ➜'; b.style.background=''; }, 2500);
  }
});