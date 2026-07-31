# Hope Community Church — Website Redesign

**Live Website:** [hope-community-church.github.io/Hope-Community-Church-Website-1](https://hope-community-church.github.io/Hope-Community-Church-Website-1/)

A fully modern, interactive website for **Hope Community Church** (Ypsilanti, MI).  
Built with pure HTML, CSS, and JavaScript — no frameworks, no build step required.

---

## 📁 Project Structure

```
hope_church_website/
│
├── index.html          ← Homepage (with hero canvas + cross reveal animation)
├── about.html          ← About Page (with history + Affirmation of Faith accordion)
├── sermons.html        ← Sunday Sermons (filterable card grid)
├── pastor.html         ← Meet the Pastor
├── groups.html         ← Hope Groups
├── kids.html           ← Kids & Youth (tabbed age groups)
├── bulletin.html       ← Bulletin News + dynamic upcoming events
├── college.html        ← Anchor Bible College (Ministry of Hope Community Church)
├── give.html           ← Give & Support details
├── contact.html        ← Contact Us (Send us a message form + map)
│
├── css/
│   ├── styles.css      ← Global design system (variables, nav, footer, cards, accordions)
│   └── animations.css  ← Scroll reveals, keyframes, motion utilities
│
├── js/
│   ├── main.js         ← Nav scroll, mobile menu, counters, accordions, dynamic events
│   ├── hero-canvas.js  ← Animated sunrise canvas (hero background)
│   └── animations.js   ← GSAP ScrollTrigger setup for scroll animations
│
└── images/
    ├── logo_hope.png            ← Center header oval stitched logo (transparent)
    ├── Anchor_bible-college.png ← Anchor Bible College branding logo
    ├── logo_*.png               ← Partner Bible College logos (Bethlehem, Cairn, Emmaus, Liberty, Rochester)
    ├── partner_logos.png        ← Combined partner colleges graphic
    │
    ├── hero_worship.png         ← Worship service hero background photo
    ├── worship_stage.png        ← Worship stage background overlay
    ├── community.png            ← Community card graphic
    ├── community_group.png      ← Congregation banner on About page
    ├── hope_groups_map.jpg      ← Hope Groups locations map image
    ├── kids_classroom.jpg       ← Kids & Youth ministry photo
    │
    ├── pastor.png               ← Pastor portrait bio photo
    ├── pastor_family.jpg        ← Pastor family portrait photo
    ├── pastor_preaching.png     ← Pastor preaching on stage photo
    │
    ├── bulletin_news.png        ← Church bulletin mock-up flyer
    └── abc_classroom.png        ← Anchor Bible College class photo
```

---

## ✨ Features & Latest Updates

### 🧭 Split Centered Navigation (New)
- **Centered Split-Menu** — Navigation links are split on desktop layout:
  - **Left menu:** *Home, About, Sermons, Meet the Pastor, Hope Groups*
  - **Center:** Circular/Oval stitched leather **Hope Community Church logo** with text label below it
  - **Right menu:** *Kids & Youth, Bulletin, Bible College, Give, Contact Us*
- **Dynamic Text Label** — The text label below the logo transitions smoothly from **white** (for high contrast on the dark hero header) to **navy** when the user scrolls down onto the light cream sticky navbar.
- **Mobile-Responsive** — Collapses into a clean row layout on mobile viewports: logo badge on the left, mobile header text next to it, and a standard hamburger menu on the right.

### 📜 Affirmation of Faith Accordion (New)
- **Interactive Accordion** — Added an interactive beliefs list (points A through K) on the **About page** (`about.html`).
- **Modern UI** — Built with gold letter badges, bold serif headers, rotating expansion indicators (`+`/`-`), and distinct citation labels.
- **Expanded Indentation** — Text is padded inwards so it aligns neatly under the title headers, letting the circular badges float on the left.

### 📅 Dynamic Calendar Events (New)
- **Automatic Upcoming Events** — Replaced the static event cards on the **Bulletin page** (`bulletin.html`) with dynamic JavaScript. It automatically calculates the user's current date and renders the **next 4 upcoming events** from the church's yearly schedule list, keeping the page constantly fresh and up to date without manual weekly edits.

### ✉️ Direct "Send Us a Message" Form (New)
- Replaced the "Plan to Visit" form on the **Contact page** (`contact.html`) with a clean, centered direct-message contact form featuring Name, Email, Subject, and Message inputs.

### 🎨 Graphics & Transparency (New)
- **Clean Oval Logo** — Processed the new oval logo badge to have true alpha transparency, removing checkered artifacts, and added CSS clipping fallbacks to prevent fringe pixels on dark headers.
- **Church Bulletin Image** — Regenerated `images/bulletin_news.png` to read **"Hope Community Church"** instead of the placeholder text.

### 📐 Padding & Overlap Fixes (New)
- Shifted the hero text block down in `index.html` by `60px` to clear the taller split navbar.
- Increased top padding of `.page-hero` and `.classic-hero` globally to `210px` to ensure sub-pages and the Bible College page never overlap the navigation logo.

---

## 🚀 How to Run

**Option 1 — Open directly (simplest):**
```
Double-click index.html to open in your browser.
```

**Option 2 — Local server (recommended for best results):**
```bash
# Python 3 (if installed)
cd Hope-Community-Church-Website-1
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

*© 2026 Hope Community Church · Ypsilanti, MI*
