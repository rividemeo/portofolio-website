# Portfolio Website — Rividemeo

A clean, modern, responsive **bilingual (EN / ID)** portfolio for an IT
professional specializing in **Software QA, Test Automation, Web Development,
and System Integration** — plus a section offering **freelance web services**
and **private IT tutoring**.

Built as a fast static site — no build step, no framework, no dependencies to
install. Deploys anywhere (GitHub Pages, Netlify, Vercel, Cloudflare Pages, or
any static host).

## ✨ Features

- **Hero** with animated role typing, avatar, and animated stat counters
- **About**, **Skills** (grouped tool chips), **Experience** timeline, **Featured Projects**
- **Freelance Services** with pricing (Landing Page / Company Profile / Custom App)
- **Private IT Tutoring** section with pricing packages and a full **curriculum by level** (SD / SMP / SMA · University · Fresh grads)
- **Contact** section + contact form (opens the visitor's email client)
- 🌐 **Language toggle — English / Bahasa Indonesia** (remembers your choice)
- 🌙 **Dark / light mode** toggle (remembers your choice)
- **Downloadable CV** — `cv.html` generates and downloads a real **PDF** in one click (via html2pdf), in the selected language
- Smooth scrolling, scroll-reveal animations, scroll progress bar, back-to-top
- Loading animation (preloader)
- Fully responsive (desktop / tablet / mobile)
- Respects `prefers-reduced-motion` and `prefers-color-scheme`
- Resilient: each init step is isolated, so one error can never blank the page

## 📁 Structure

```
portofolio/
├─ index.html        # Page markup (uses data-i18n hooks)
├─ cv.html           # CV page → downloads a PDF (html2pdf), bilingual
├─ css/styles.css    # All styles + light/dark theme tokens
├─ js/
│  ├─ data.js        # ✏️  EDIT YOUR CONTENT HERE (bilingual fields)
│  ├─ i18n.js        # ✏️  Static UI text translations (EN / ID)
│  └─ main.js        # Behavior (lang, theme, typing, reveal, form, rendering)
└─ assets/
   ├─ profile.svg    # Placeholder avatar — replace with your photo
   └─ favicon.svg
```

## 🛠️ Customize

Most edits happen in two files:

1. **`js/data.js`** — your content. Bilingual fields use
   `{ en: "...", id: "..." }` (or arrays for lists); plain values like names,
   prices, dates, and tech names are shown as-is in both languages. Update your
   identity, contact links, skills, experience, projects, services, and the
   tutoring packages + curriculum here. The page **and** the CV update automatically.
2. **`js/i18n.js`** — translations for static UI labels (nav, section titles,
   buttons, form, footer). Edit the matching `en` / `id` key to change wording.

Other tweaks:

- **Photo:** drop a square image at `assets/profile.jpg` (or `.png`) and point
  `#profileImg`'s `src` in `index.html` to it.
- **WhatsApp:** set `whatsappNumber` in international format, no symbols
  (e.g. `6281234567890`).
- **Hero stats:** the three numbers live in `index.html` (`data-count="…"`).

> **Cache busting:** asset links in `index.html` use a `?v=N` query
> (e.g. `styles.css?v=10`). Bump `N` after edits so browsers fetch fresh files.

## 🚀 Run locally

Any static server works. With Node installed:

```bash
npx serve .
# or, on a specific port:
npx http-server -p 5199 -c-1
```

Then open the printed `http://localhost:…` URL. You can also open `index.html`
directly in a browser.

## 📄 CV / PDF download

`cv.html` is generated from `js/data.js` and follows the language selected on
the site. Clicking **Download PDF** saves a real PDF directly (no print dialog),
using [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) loaded from a CDN.

> The direct download needs an internet connection (for the CDN library); if
> it's unavailable, the button falls back to the browser's print dialog.

## 📤 Deploy

- **GitHub Pages:** push to a repo → **Settings → Pages** → deploy from branch
  root. The site is served as-is (no build command).
- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder, or connect
  the repo. No build command needed; publish directory = repository root.

## ✉️ Contact form

The form is client-side only and opens the visitor's email client (`mailto:`)
pre-filled. To collect submissions without an email client, replace the submit
logic in `js/main.js` (`initForm`) with a `fetch()` to a service like
**Formspree** or **EmailJS**.

## 📦 Tech

Plain HTML, CSS, and vanilla JavaScript — no framework, no build tooling.
External resources: Google Fonts (Inter, Space Grotesk) and html2pdf.js (for
the CV download), both via CDN.
