# 02: Project Details (RTCC-O)

## RTCC-O Template

```markdown
## R — Role

Siapa AI dalam konteks ini?

Backend Developer (mid level) dengan 3 tahun pengalaman dan keahlian membuat code yang clean, scalable, dan maintanable  dengan tech stack : Node.js (Express), Javascript, Typescript, PostgreSQL, MongoDB, NATS

---

## T — Task

Apa tugas utama project ini?

Buat portofolio website satu halaman yang menunjukan kualitas tinggi seorang backend developer yang menunjukan skills dan projects yang kuat

---

## C — Context

Tech stack, constraints, standards:

- Tech: use only HTML5 (semantic), CSS3, vanilla JS, tanpa framework, tanpa library
- Approach: Mobile-first responsive design, clean & readable code
- Audience: Recruiter HR / Tech Lead

---

## C — Constraints

Yang TIDAK boleh:

- ZERO non-semantic div
- Inline CSS

Yang WAJIB:
ARSITEKTUR & SEMANTIK
- ZERO non-semantic div — gunakan elemen HTML5 yang tepat (header, nav, main, section, article, footer)
- Struktur file jelas: index.html, styles.css, script.js
- SEO-ready: meta tags, Open Graph, structured data (JSON-LD)
- Gunakan heading hierarchy yang benar (h1 → h2 → h3)

AKSESIBILITAS (WCAG 2.1 AA)
- Contrast minimal 4.5:1 (body), 3:1 (large text)
- Focus indicator di SEMUA elemen interaktif
- Touch target minimal 44x44px
- Gunakan alt, aria-label, aria-describedby dengan benar
- Fully keyboard navigable
- Screen reader friendly

RESPONSIF
- Mobile-first design (320px → 1440px+)
- Gunakan clamp() untuk typography
- Breakpoints: 480px, 768px, 1024px
- Container max-width + margin: auto
- Hindari horizontal scroll (overflow-x: hidden)

INTERAKSI (Vanilla JS – Tanpa Library)
- Scroll reveal (IntersectionObserver)
- Smooth scroll untuk navigasi anchor
- Active nav highlight berdasarkan scroll position
- Hover effect (transform + transition 150–300ms)
- Active states untuk button & link
- Minimal 1 “wow moment”:
- typing effect / animated counter / parallax ringan
- Support prefers-reduced-motion
- Hamburger menu hanya untuk mobile

PERFORMANCE
Lighthouse target:
- Performance ≥ 90
- Accessibility ≥ 95
- Gunakan loading="lazy" untuk image
- Gunakan defer pada script
- Minimalkan reflow (pakai transform & opacity)
- Total file size < 50KB (HTML + CSS + JS)

KONTEN
- Hero: Tagline jelas & memorable, CTA yang obvious
- About: Bio singkat + realistic (bukan generik)
- Skills:Visual representation (badge/icon), bukan list biasa
- Projects: 2 deep projek
- Sertakan tech stack + link demo/source
- Contact: Form sederhana + info kontak + social links

DESIGN DIRECTION
- Gunakan CSS custom properties (design tokens)
- Konsisten, clean, tidak berlebihan

---

## O — Output

- 3 file terpisah: index.html, styles.css, script.js
- Code harus: rapi, terstruktur, ada komentar per section

```

---

## Checklist

```
[] R — Role jelas?
[] T — Task konkret?
[] C — Context mencakup tech stack?
[] C — Constraints spesifik?
[] O — Output format jelas?
```
