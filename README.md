# Sarah Nur Haibah - Backend Developer Portfolio

A modern, mobile-first, single-page portfolio website tailored for a Mid-Level Backend Developer. Designed to highlight deep architectural skills, backend technologies, and system design expertise rather than just standard UI components.

## 🚀 Features

- **Semantic HTML5:** Built with strong semantic structure (`<header>`, `<main>`, `<section>`, `<article>`) to ensure top-notch SEO and readability.
- **Midnight Glassmorphism:** A bold, modern dark mode design tailored for tech startups. It combines deep backgrounds (`#0D0221`) with neon accents while rigorously maintaining high contrast (WCAG 2.1 AA).
- **Interactive Terminal API Simulator:** A unique "Show, Don't Tell" feature built in Vanilla JS that simulates a live API JSON response to showcase backend identity instantly.
- **Pure Vanilla JS Interactivity:** Lightweight and lightning-fast. Includes scroll reveal animations (`IntersectionObserver`), dynamic navigation highlighting, and responsive hamburger menus without relying on heavy frameworks.
- **Accessibility (a11y) First:** Fully keyboard navigable, screen reader friendly (ARIA labels), touch-target optimized (min 44x44px), and respects `prefers-reduced-motion` settings.
- **Performance Optimized:** No external UI libraries or heavy dependencies. Built to achieve 90+ scores on Lighthouse for both Performance and Accessibility.

## 🛠️ Tech Stack

- **HTML5:** Semantic architecture, Open Graph meta tags, JSON-LD Structured Data.
- **CSS3:** Custom Properties (Tokens), Flexbox & CSS Grid layouts, `clamp()` for fluid typography.
- **JavaScript (ES6+):** Pure Vanilla JS for DOM manipulation and observers.
- **Fonts:** Outfit (Headers), DM Sans (Body), Fira Code (Monospace/Code snippets).

## 📂 File Structure

```text
.
├── index.html    # Main markup, SEO tags, and layout structure
├── styles.css    # CSS custom properties, utility classes, and glassmorphism styling
├── script.js     # IntersectionObserver logic, API Simulator effect, and mobile nav
└── README.md     # Project documentation
```

## 💻 How to Run Locally

This project consists entirely of static files, meaning no `npm install` or build step is required. 

**Option 1: Quickest Way**
1. Clone or download this repository to your local machine.
2. Open the folder in your file explorer.
3. Double-click `index.html` to view it instantly in your default browser.

**Option 2: Using Live Server (Recommended for Editing)**
1. Open this repository in Visual Studio Code.
2. Install the **"Live Server"** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will automatically open in your browser (usually `http://127.0.0.1:5500`) and will auto-reload whenever you save changes.

## 🎯 Design Philosophy & Target Audience

This portfolio is strategically crafted for CTOs, Tech Leads, and Recruiters at modern Startups:
- **"Show, Don't Tell":** The Hero section immediately greets visitors with a terminal-like JSON API output.
- **Deep Projects over CRUD:** Focuses the narrative on complex problem-solving like race conditions, PostgreSQL indexing, and NATS message brokering.
- **Frictionless UX:** A single-page, mobile-first approach ensures that visitors can scan all core competencies within the first 10 seconds without navigating through complex menus.