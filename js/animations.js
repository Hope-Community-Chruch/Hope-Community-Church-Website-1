/* ══════════════════════════════════════
   HOPE CHURCH — GSAP ScrollTrigger Animations
   ══════════════════════════════════════ */

window.addEventListener('load', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  /* ── Hero entrance ── */
  const heroTl = gsap.timeline({ delay: 0.3 });
  heroTl
    .from('.hero-eyebrow', { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' })
    .from('.hero-title .word', {
      opacity: 0, y: 48, rotateX: -25,
      duration: 0.75, stagger: 0.08, ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.hero-actions', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.hero-scroll-hint', { opacity: 0, duration: 0.5 }, '-=0.1');

  /* ── Hero title split ── */
  const heroTitles = document.querySelectorAll('.hero-title');
  heroTitles.forEach(el => {
    const words = el.textContent.split(' ');
    el.innerHTML = words.map(w => `<span class="word" style="display:inline-block;overflow:hidden"><span style="display:inline-block">${w}</span></span>`).join(' ');
  });

  /* ── Stats bar ── */
  gsap.from('.stat-card', {
    scrollTrigger: { trigger: '#stats', start: 'top 80%' },
    opacity: 0, y: 32, duration: 0.6, stagger: 0.12, ease: 'power3.out'
  });

  /* ── Who We Are ── */
  gsap.from('.wwa-text > *', {
    scrollTrigger: { trigger: '#about', start: 'top 70%' },
    opacity: 0, x: -40, duration: 0.7, stagger: 0.12, ease: 'power3.out'
  });
  gsap.from('.wwa-image', {
    scrollTrigger: { trigger: '#about', start: 'top 70%' },
    opacity: 0, x: 40, scale: 0.96, duration: 0.9, ease: 'power3.out'
  });
  gsap.from('.belief-card', {
    scrollTrigger: { trigger: '.beliefs-row', start: 'top 80%' },
    opacity: 0, y: 32, duration: 0.6, stagger: 0.14, ease: 'power3.out'
  });

  /* ── Sermon section ── */
  gsap.from('.sermon-featured', {
    scrollTrigger: { trigger: '#sermons-preview', start: 'top 75%' },
    opacity: 0, y: 40, duration: 0.8, ease: 'power3.out'
  });

  /* ── Community cards ── */
  gsap.from('.community-card', {
    scrollTrigger: { trigger: '#community', start: 'top 80%' },
    opacity: 0, y: 36, duration: 0.55, stagger: 0.1, ease: 'power3.out'
  });

  /* ── Visit section ── */
  gsap.from('.visit-info > *', {
    scrollTrigger: { trigger: '#visit', start: 'top 75%' },
    opacity: 0, x: -36, duration: 0.7, stagger: 0.1, ease: 'power3.out'
  });
  gsap.from('.visit-map', {
    scrollTrigger: { trigger: '#visit', start: 'top 75%' },
    opacity: 0, scale: 0.94, duration: 0.8, ease: 'power3.out'
  });

  /* ── Connect section ── */
  gsap.from('.connect-content > *', {
    scrollTrigger: { trigger: '#connect', start: 'top 80%' },
    opacity: 0, y: 28, duration: 0.6, stagger: 0.12, ease: 'power3.out'
  });

  /* ── Parallax on worship photo ── */
  gsap.to('.wwa-image img', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  });

  /* ── Parallax on hero image overlay ── */
  gsap.to('.hero-img-bg', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  /* ── Generic section reveals ── */
  gsap.utils.toArray('.fade-up').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, y: 32, duration: 0.7, ease: 'power3.out'
    });
  });

});
