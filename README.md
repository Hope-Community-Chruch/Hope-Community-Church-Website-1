# Hope Community Church — Website Redesign

**Live Website:** [hope-community-chruch.github.io/Hope-Community-Church-Website-1](https://hope-community-chruch.github.io/Hope-Community-Church-Website-1/)

A fully modern, interactive website for **Hope Community Church** (Ypsilanti, MI).  
Built with pure HTML, CSS, and JavaScript — no frameworks, no build step required.

---

## 📁 Project Structure

```
hope_church_website/
│
├── index.html          ← Homepage (with hero canvas + cross reveal animation)
├── sermons.html        ← Sunday Sermons (filterable card grid)
├── pastor.html         ← Meet the Pastor
├── groups.html         ← Hope Groups
├── kids.html           ← Kids & Youth (tabbed age groups)
├── bulletin.html       ← Bulletin News + Events sidebar
├── college.html        ← Anchor Bible College
├── contact.html        ← Contact / Plan Your Visit form
│
├── css/
│   ├── styles.css      ← Global design system (variables, nav, footer, cards)
│   └── animations.css  ← Scroll reveals, keyframes, motion utilities
│
├── js/
│   ├── main.js         ← Nav scroll behavior, mobile menu, counters
│   ├── hero-canvas.js  ← Animated sunrise canvas (hero background)
│   └── animations.js   ← GSAP ScrollTrigger setup for all scroll animations
│
└── images/
    ├── hero_worship.png    ← Worship service hero photo
    ├── community.png       ← Community group photo
    ├── pastor.png          ← Pastor portrait
    ├── logo_mark.png       ← Warm sunrise hands logo
    ├── logo_community.png  ← Community circle logo concept
    └── logo_dove.png       ← Dove logo concept
```

---

## ✨ Features

### Homepage (`index.html`)
- **Animated canvas hero** — golden sunrise rays + floating particles
- **Frosted glass navigation** — transparent on hero, blurs into white on scroll
- **Animated stat counters** — 25+ years, 8 groups, 300+ lives, count up on scroll
- **🔥 Cross Reveal Section** — Scroll-pinned animation:
  - 4 golden cross arms fly in from opposite directions with 3D tumble
  - Light burst fires when they lock together
  - "HOPE" letters explode in from 4 directions
  - Gold underline sweeps across
  - Jeremiah 29:11 verse fades in
- **Split "Who We Are"** section with parallax photo
- **Featured sermon** card with play button
- **Horizontal drag-scroll** community cards
- **Visit section** with embedded Google Map
- **Email signup** with animated form

### Sermons Page
- Filterable card grid (All / Faith / Hope / Community / Bible Study)
- Smooth filter animation

### Kids & Youth Page
- Interactive age tabs (Nursery / Kids / Youth)
- Content swaps with smooth transitions

### Contact Page
- Animated input form with focus states
- Google Maps embed
- Form submission confirmation

---

## 🚀 How to Run

**Option 1 — Open directly (simplest):**
```
Double-click index.html to open in your browser.
```

**Option 2 — Local server (recommended for best results):**
```bash
# Python 3 (if installed)
cd hope_church_website
python -m http.server 8080
# Then open: http://localhost:8080
```

> ⚠️ Some scroll animations (`pin: true`) work best when served from a local server rather than `file://` protocol.

---

## 🎨 Design System

| Token         | Value             | Usage                    |
|---------------|-------------------|--------------------------|
| `--cream`     | `#FFFAF4`         | Page background          |
| `--amber`     | `#F4A261`         | Primary accent, CTAs     |
| `--gold`      | `#E8890C`         | Highlights               |
| `--coral`     | `#E07A5F`         | Secondary accent         |
| `--navy`      | `#1D3461`         | Headings, text           |
| `--muted`     | `#7B8FA6`         | Subtext                  |

**Fonts loaded via Google Fonts:**
- `Playfair Display` 700/800 — headings (warm editorial)
- `Inter` 300–800 — body text (clean, readable)

**Animation libraries via CDN (no install required):**
- [GSAP 3.12](https://gsap.com/) + ScrollTrigger — scroll animations, cross reveal
- Lucide Icons — SVG icon set

---

## 📋 Pages Checklist

| Page          | Status | Key Feature                          |
|---------------|--------|--------------------------------------|
| Homepage      | ✅     | Canvas hero + cross animation        |
| Sermons       | ✅     | Filter system                        |
| Meet Pastor   | ✅     | Bio + parallax photo                 |
| Hope Groups   | ✅     | Group cards                          |
| Kids & Youth  | ✅     | Interactive age tabs                 |
| Bulletin      | ✅     | News feed + events sidebar           |
| Bible College | ✅     | Course grid + enrollment CTA         |
| Contact       | ✅     | Form + map                           |

---

## 📍 Church Info (Update these for production)

```
Address:  2100 Ellsworth Rd, Ypsilanti, MI 48197
Phone:    (734) 721-8190
Email:    pastormanwiller@gmail.com
Service:  Every Sunday at 10:00 AM
```

---

## 🔄 To Customize

1. **Replace images** in `/images/` with real church photos
2. **Update content** (pastor name, sermon titles, group schedules) directly in each `.html` file
3. **Add YouTube link** — search `href="#"` on the sermons page  
4. **Connect email form** — replace the JS `preventDefault` handler with a real form backend (Formspree, Netlify Forms, etc.)

---

*© 2025 Hope Community Church · Ypsilanti, MI*
