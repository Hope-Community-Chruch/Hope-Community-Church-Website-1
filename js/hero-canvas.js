/* ══════════════════════════════════════
   HOPE CHURCH — Hero Canvas Animation
   Animated sunrise rays + drifting particles
   ══════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, cx, cy, raf;
  const rays   = [];
  const dots   = [];
  const NRAYS  = 18;
  const NDOTS  = 55;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isAnimating = !prefersReducedMotion.matches;

  /* ── Resize ── */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    cx = W * 0.5;
    cy = H * 0.78;
  }

  /* ── Ray class ── */
  class Ray {
    constructor(i) {
      this.index = i;
      this.reset();
    }
    reset() {
      const spread = Math.PI * 1.05;
      const base   = -Math.PI / 2 - spread / 2;
      this.angle   = base + (this.index / NRAYS) * spread;
      this.speed   = 0.00008 + Math.random() * 0.00012;
      this.phase   = Math.random() * Math.PI * 2;
      this.width   = 0.012 + Math.random() * 0.04;
      this.len     = 0.65 + Math.random() * 0.45;
      this.alpha   = 0.025 + Math.random() * 0.06;
    }
    draw(t) {
      const pulse  = 0.5 + 0.5 * Math.sin(t * this.speed * 3000 + this.phase);
      const alpha  = this.alpha * (0.6 + 0.4 * pulse);
      const endLen = Math.max(W, H) * this.len;

      const x1 = cx + Math.cos(this.angle - this.width / 2) * endLen;
      const y1 = cy + Math.sin(this.angle - this.width / 2) * endLen;
      const x2 = cx + Math.cos(this.angle + this.width / 2) * endLen;
      const y2 = cy + Math.sin(this.angle + this.width / 2) * endLen;

      const grad = ctx.createLinearGradient(cx, cy, (x1 + x2) / 2, (y1 + y2) / 2);
      grad.addColorStop(0,   `rgba(255,190,80,${alpha * 1.2})`);
      grad.addColorStop(0.4, `rgba(244,162,97,${alpha})`);
      grad.addColorStop(1,   `rgba(244,162,97,0)`);

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  /* ── Particle dot class ── */
  class Dot {
    constructor() { this.init(); }
    init() {
      this.x    = Math.random() * W;
      this.y    = H + 20;
      this.size = 1 + Math.random() * 2.5;
      this.vx   = (Math.random() - 0.5) * 0.4;
      this.vy   = -(0.3 + Math.random() * 0.7);
      this.life = 0;
      this.maxLife = 200 + Math.random() * 300;
      this.color = Math.random() < 0.5
        ? [255, 190, 80]
        : [244, 162, 97];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      if (this.life > this.maxLife) this.init();
    }
    draw() {
      const progress = this.life / this.maxLife;
      const alpha = Math.sin(progress * Math.PI) * 0.45;
      const [r, g, b] = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.fill();
    }
  }

  /* ── Glow at origin ── */
  function drawGlow(t) {
    const pulse = 0.85 + 0.15 * Math.sin(t * 0.0012);
    const r1 = 60 * pulse;
    const r2 = 260 * pulse;
    const g1 = ctx.createRadialGradient(cx, cy, r1 * 0.1, cx, cy, r1);
    g1.addColorStop(0, 'rgba(255,220,120,0.35)');
    g1.addColorStop(1, 'rgba(255,160,60,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, r1, 0, Math.PI * 2);
    ctx.fillStyle = g1;
    ctx.fill();

    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r2);
    g2.addColorStop(0, 'rgba(244,162,97,0.10)');
    g2.addColorStop(1, 'rgba(244,162,97,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, r2, 0, Math.PI * 2);
    ctx.fillStyle = g2;
    ctx.fill();
  }

  /* ── Draw static snapshot ── */
  function drawStaticFrame() {
    ctx.clearRect(0, 0, W, H);
    rays.forEach(r => r.draw(0));
    drawGlow(0);
    dots.forEach(d => {
      if (d.life === 0) d.life = Math.floor(d.maxLife / 2);
      d.draw();
    });
  }

  /* ── Animation loop ── */
  function animate(t) {
    if (!isAnimating) return;
    ctx.clearRect(0, 0, W, H);
    rays.forEach(r => r.draw(t));
    drawGlow(t);
    dots.forEach(d => { d.update(); d.draw(); });
    raf = requestAnimationFrame(animate);
  }

  /* ── Update motion preferences ── */
  function updateMotionPreferences() {
    isAnimating = !prefersReducedMotion.matches;
    if (!isAnimating) {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      drawStaticFrame();
    } else {
      if (!raf) {
        raf = requestAnimationFrame(animate);
      }
    }
  }

  /* ── Init ── */
  function init() {
    resize();
    rays.length = 0;
    dots.length = 0;
    for (let i = 0; i < NRAYS; i++) rays.push(new Ray(i));
    for (let i = 0; i < NDOTS; i++) {
      const d = new Dot();
      d.life = Math.floor(Math.random() * d.maxLife); // stagger
      dots.push(d);
    }
    if (raf) cancelAnimationFrame(raf);
    raf = null;

    prefersReducedMotion.addEventListener('change', updateMotionPreferences);
    updateMotionPreferences();
  }

  window.addEventListener('resize', () => {
    resize();
    rays.forEach((r, i) => r.reset());
    if (!isAnimating) drawStaticFrame();
  });

  // Defer initialization until page load & requestIdleCallback
  if (document.readyState === 'complete') {
    if (window.requestIdleCallback) {
      requestIdleCallback(() => init());
    } else {
      setTimeout(init, 50);
    }
  } else {
    window.addEventListener('load', () => {
      if (window.requestIdleCallback) {
        requestIdleCallback(() => init());
      } else {
        setTimeout(init, 50);
      }
    });
  }
})();
