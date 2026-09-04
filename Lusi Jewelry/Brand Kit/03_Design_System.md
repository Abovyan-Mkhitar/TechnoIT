# Lusi Jewelry — Website Design System
Version 1.0 — Implementation-ready tokens and components for Claude Code

This file translates 02_Visual_Identity.md into concrete design tokens and component specifications. Treat the CSS variables below as the single source of truth — no color, spacing, or type value should be hard-coded outside this token set.

---

## 1. Design Tokens (CSS Variables)

```css
:root {
  /* Color — Core */
  --color-black: #1C1B19;
  --color-ivory: #F7F4EE;
  --color-sand: #EDE6D9;
  --color-sage: #8B9482;
  --color-sage-deep: #5F6856;

  /* Color — Accent */
  --color-gold: #C9A85C;
  --color-blush: #D9BBA9;

  /* Color — Functional */
  --color-success: #5F7A5A;
  --color-error: #A6453A;
  --color-border: #DDD5C6;
  --color-text-muted: #6E6A62;

  /* Color — Semantic aliases (use these in components) */
  --color-bg-primary: var(--color-ivory);
  --color-bg-secondary: var(--color-sand);
  --color-bg-inverse: var(--color-black);
  --color-text-primary: var(--color-black);
  --color-text-secondary: var(--color-text-muted);
  --color-text-inverse: var(--color-ivory);
  --color-accent-primary: var(--color-gold);
  --color-accent-secondary: var(--color-sage);
  --color-focus-ring: var(--color-gold);

  /* Typography */
  --font-serif: "Cormorant Garamond", "Playfair Display", Georgia, serif;
  --font-sans: "Suisse Int'l", "Inter", "Helvetica Neue", Arial, sans-serif;

  /* Type scale — fluid, based on 1.25 (Major Third) ratio, 16px base */
  --text-xs: 0.75rem;    /* 12px — captions, legal */
  --text-sm: 0.875rem;   /* 14px — labels, meta */
  --text-base: 1rem;     /* 16px — body */
  --text-lg: 1.125rem;   /* 18px — lead paragraphs */
  --text-xl: 1.5rem;     /* 24px — H4 */
  --text-2xl: 1.953rem;  /* ~31px — H3 */
  --text-3xl: 2.441rem;  /* ~39px — H2 */
  --text-4xl: 3.052rem;  /* ~49px — H1 */
  --text-5xl: 3.815rem;  /* ~61px — hero display (desktop only) */

  --leading-tight: 1.15;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;

  --tracking-wide: 0.04em;  /* used for wordmark, nav labels, small-caps */
  --tracking-normal: 0em;

  /* Spacing (8px base grid) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 1rem;     /* 16px */
  --space-4: 1.5rem;   /* 24px */
  --space-5: 2rem;     /* 32px */
  --space-6: 3rem;     /* 48px */
  --space-7: 5rem;     /* 80px */
  --space-8: 7.5rem;   /* 120px */

  /* Radius — minimal, rectilinear brand; avoid rounded/bubbly */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-none: 0px;

  /* Shadow — used sparingly, only for cards/modals, never decorative */
  --shadow-sm: 0 1px 2px rgba(28, 27, 25, 0.06);
  --shadow-md: 0 4px 16px rgba(28, 27, 25, 0.08);
  --shadow-lg: 0 12px 32px rgba(28, 27, 25, 0.12);

  /* Motion */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;

  /* Layout */
  --container-max: 1280px;
  --container-narrow: 760px;
  --border-width: 1px;
}
```

---

## 2. Typography Scale Usage

| Token | Size | Font | Weight | Use |
|---|---|---|---|---|
| Hero display | `--text-5xl` | serif | 400 | Homepage hero only |
| H1 | `--text-4xl` | serif | 400 | Page titles |
| H2 | `--text-3xl` | serif | 400 | Section headers |
| H3 | `--text-2xl` | serif | 400 | Subsection headers, product name on PDP |
| H4 | `--text-xl` | sans | 600 | Card titles, small headers |
| Lead / intro paragraph | `--text-lg` | sans | 400 | Section intros |
| Body | `--text-base` | sans | 400 | Default copy |
| Label / meta | `--text-sm` | sans | 500 | Form labels, nav, product specs |
| Caption / legal | `--text-xs` | sans | 400 | Image captions, footer legal |

Line-height: headings use `--leading-tight`; body copy uses `--leading-relaxed` (long-form) or `--leading-normal` (UI text).

---

## 3. Core Components

### 3.1 Buttons

Three variants only — do not introduce more without design review.

- **Primary** (`.btn-primary`): `background: var(--color-black)`, `color: var(--color-ivory)`, on hover `background: var(--color-sage-deep)`. Used for the single most important action per screen (e.g., "Inquire About This Piece," "Request Custom Design").
- **Secondary** (`.btn-secondary`): transparent background, `1px solid var(--color-black)` border, `color: var(--color-black)`; hover fills with `var(--color-black)`/`var(--color-ivory)` text.
- **Accent/Premium** (`.btn-accent`): used only for the highest-value single CTA on a page (e.g., "Request GIA Certificate"), `background: var(--color-gold)`, `color: var(--color-black)`.

Shared button rules: `padding: var(--space-3) var(--space-5)`, `radius: var(--radius-sm)`, `font: var(--text-sm)/sans/600`, `letter-spacing: var(--tracking-wide)`, uppercase text-transform for primary/secondary (small-caps luxury convention), transition `all var(--duration-base) var(--ease-standard)`. Minimum tap target 44x44px on mobile regardless of visual padding.

### 3.2 Forms

- Inputs: `background: var(--color-ivory)`, `border: 1px solid var(--color-border)`, `radius: var(--radius-sm)`, focus state = `border-color: var(--color-gold)` + `box-shadow: 0 0 0 3px rgba(201,168,92,0.2)` (never color-only focus indication).
- Labels: always visible above the field (never placeholder-only — placeholder text disappears on input, harming usability and accessibility), `--text-sm`/500/sans, `--color-text-secondary`.
- Error state: `border-color: var(--color-error)`, error message below field in `--text-xs`, `--color-error`, with an icon (not color alone).
- Inquiry/contact forms (primary conversion mechanism in Phase 1 — no cart) should be short: name, contact method (email/WhatsApp/phone), product reference (auto-filled if coming from a product page), message. Do not ask for more than necessary; every extra field reduces completion, especially for a first-touch trust-building interaction.

### 3.3 Cards (Product Cards)

- Aspect ratio locked at 4:5 (portrait) for all product images — enforces the photographic consistency required in 02_Visual_Identity.md.
- Structure top-to-bottom: image, product name (`--text-lg`/serif), short spec line (metal + stone, `--text-sm`/`--color-text-secondary`), price (`--text-lg`/serif/`--color-gold` emphasis on the number only).
- Hover (desktop): swap to secondary lifestyle/worn image, subtle `--shadow-md` lift, no scale/zoom animation (zoom effects read as generic e-commerce, not luxury).
- Certification badge (small line-icon + "GIA Certified Available" label) appears on any card where applicable — this is a trust signal and should never be hidden in favor of a cleaner look.

### 3.4 Navigation

- Desktop: horizontal nav, `--color-ivory` background, wordmark centered or left per final logo lockup decision, primary categories (Rings, Necklaces, Earrings, Bracelets, Bridal/Engagement, Custom Design, Our Story) plus a persistent "Inquire" or contact action on the right.
- Mobile: hamburger menu, full-screen overlay in `--color-black` background with `--color-ivory` text (inverse treatment) — reinforces premium feel versus a dropdown.
- Sticky on scroll (both desktop/mobile) but shrinks in height (from ~96px to ~64px) after 80px scroll — keep navigation accessible without permanently consuming vertical space on a photography-led site.

### 3.5 Tables (Spec Tables / Size Guides)

- Used for: ring size guides, material spec comparisons, care instructions.
- Minimal-line style: no zebra striping, `1px solid var(--color-border)` row dividers only, header row in `--text-sm`/600/uppercase/`--tracking-wide`, body in `--text-sm`/400.
- Must be horizontally scrollable (not squeezed) on mobile, with a visible scroll affordance — never shrink font below `--text-xs` to force-fit.

---

## 4. Responsive Rules

Breakpoints:

```css
--bp-sm: 480px;   /* large phones */
--bp-md: 768px;   /* tablets */
--bp-lg: 1024px;  /* small desktop */
--bp-xl: 1280px;  /* desktop */
```

- **Mobile-first build.** A majority of diaspora traffic (social-referred, Instagram-driven) will arrive on mobile — design and test mobile layouts first, not as an afterthought scaled down from desktop.
- Grid: product listings use a 2-column grid on mobile (`--bp-sm` and below), 3-column on tablet, 4-column on desktop (`--bp-lg`+).
- Section vertical spacing uses `--space-6` on mobile, `--space-7`–`--space-8` on desktop (see token table) — do not carry desktop's generous spacing directly to mobile, it will push content too far down.
- Hero images: fixed 4:5 or 1:1 crop on mobile (not the wide desktop crop) to keep faces/product detail from being cropped out — supply or generate separate mobile crops rather than relying on `object-fit` alone for hero-level imagery.

---

## 5. Motion Guidelines

Motion should feel like a slow, considered reveal — never bouncy, elastic, or playful (those easing curves belong to mass-market/kids/casual brands).

- Standard transition: `var(--duration-base) var(--ease-standard)` for hovers, color changes, and simple state changes.
- Page/section entrance: fade + subtle upward translate (`opacity 0→1`, `translateY(12px→0)`), `var(--duration-slow)`, triggered on scroll-into-view, staggered by ~80ms per item in a grid (not all at once).
- Image loading: use a low-quality image placeholder (blurred) or solid `--color-sand` block, never a spinner — spinners feel transactional, not editorial.
- Respect `prefers-reduced-motion`: disable scroll-triggered animation and reduce to opacity-only transitions when set.
- No parallax scrolling effects, no auto-playing carousels (both read as dated/generic e-commerce and hurt perceived quality).

---

## 6. Accessibility (Implementation-Level)

- All interactive components must be reachable and operable via keyboard; visible focus ring using `--color-focus-ring` at minimum 2px offset outline.
- Color contrast: verify every text/background pairing against WCAG AA at build time — `--color-sage` on `--color-ivory` fails for text under 18px (see 02_Visual_Identity.md §9); use `--color-sage-deep` instead for small text.
- All `<img>` tags require descriptive `alt` text (material, stone type, setting) — required both for accessibility and SEO (see 04_Website_Blueprint.md).
- Form inputs require associated `<label>` elements (not just placeholder text).
- Semantic HTML first: use `<button>`/`<a>` correctly per their function, proper heading hierarchy (one `<h1>` per page), landmark regions (`<nav>`, `<main>`, `<footer>`).
