/* ══════════════════════════════════════
   HOPE CHURCH — Main JS (Nav + Utils)
   ══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll behaviour ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');
  const menuClose = document.querySelector('.menu-close');

  function openMenu() {
    mobileMenu?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === currentPath) {
      a.style.color = 'var(--gold)';
      a.style.fontWeight = '700';
    }
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Animated counter ── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('[data-target]');
  if (counters.length > 0) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1';
          animateCounter(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }

  /* ── Horizontal drag scroll ── */
  document.querySelectorAll('.drag-scroll').forEach(el => {
    let isDown = false, startX, scrollLeft;
    el.addEventListener('mousedown', e => {
      isDown = true; el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });
    el.addEventListener('mouseleave', () => { isDown = false; el.classList.remove('dragging'); });
    el.addEventListener('mouseup', () => { isDown = false; el.classList.remove('dragging'); });
    el.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  });

  /* ── Reveal on scroll (lightweight) ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObs.observe(el));
  }

  /* ── Email signup form ── */
  const signupForm = document.querySelector('#signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = signupForm.querySelector('button[type="submit"]');
      btn.textContent = '✓ You\'re signed up!';
      btn.style.background = '#4CAF50';
      btn.disabled = true;
      signupForm.reset();
    });
  }

});
