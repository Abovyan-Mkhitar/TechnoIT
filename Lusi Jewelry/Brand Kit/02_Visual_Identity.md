# Lusi Jewelry — Visual Identity
Version 1.0 — Companion to 01_Brand_Strategy.md

This document defines the visual system. It builds on the existing Instagram identity (elegant serif "LUSI" wordmark, sage/cream/neutral palette) rather than replacing it — formalizing what already works and correcting inconsistency, per the brand analysis findings.

---

## 1. Color Palette

Color psychology guiding this palette: **sage and warm neutrals read as natural, considered, and calm — the opposite of aggressive "jewelry store" red/gold/black glitz.** This supports the "elegant, confident, trustworthy" personality and differentiates from local competitors who default to loud, ornate visual cues. Gold is used sparingly, as an accent earned by diamonds and metal photography — not as a background color — so it retains its meaning.

### Primary Palette

| Name | Hex | Usage |
|---|---|---|
| Lusi Black | `#1C1B19` | Primary text, wordmark, high-contrast UI elements |
| Ivory | `#F7F4EE` | Primary background (light mode) |
| Warm Sand | `#EDE6D9` | Secondary background, section breaks, card backgrounds |
| Sage | `#8B9482` | Primary accent — buttons (secondary), tags, dividers, icon strokes |
| Deep Sage | `#5F6856` | Hover states, dark accent text on light backgrounds |

### Accent / Metal Palette (use sparingly — earned, not decorative)

| Name | Hex | Usage |
|---|---|---|
| Champagne Gold | `#C9A85C` | Premium CTAs, certification badges, price emphasis, hover on primary actions |
| Rose Gold Blush | `#D9BBA9` | Optional secondary accent for bridal/engagement sections only |

### Functional Colors

| Name | Hex | Usage |
|---|---|---|
| Success | `#5F7A5A` | Order confirmation, in-stock states |
| Error | `#A6453A` | Form errors, out-of-stock |
| Border/Divider | `#DDD5C6` | Hairline borders, table lines |
| Muted Text | `#6E6A62` | Secondary/caption text on Ivory background |

**Rule:** Champagne Gold is a spotlight color — used for no more than one element per screen (a primary CTA, a certification seal, a price). If everything is gold, nothing is. Backgrounds should stay in the Ivory/Sand/Black range in roughly 80% of any given screen.

---

## 2. Typography

### Primary Typeface — Display/Headings: **Serif**
Recommended: **"Cormorant Garamond"** or **"Canela"** (if licensed available) — an elegant, high-contrast serif consistent with the existing Instagram wordmark's letterforms. If neither is available, **"Playfair Display"** is an acceptable free alternative (Google Fonts).

- Used for: page headlines (H1/H2), the logotype, pull quotes, price display on product pages (to elevate perceived value).
- Never used for body copy or UI labels — serif at small sizes reduces legibility and feels less like "considered" and more like "trying too hard."

### Secondary Typeface — Body/UI: **Sans-serif**
Recommended: **"Suisse Int'l"** or, as a free alternative, **"Inter"** or **"Neue Haas Grotesk"**-adjacent (e.g., "Aktiv Grotesk" or "General Sans").

- Used for: body copy, navigation, buttons, forms, captions, product specs.
- Weight range: 400 (body), 500 (labels/emphasis), 600 (buttons only — never bolder than this; heavy weights break the elegant tone).

### Type Pairing Rule
Every screen should show the serif/sans pairing together — a serif headline sitting above sans-serif body copy is the core visual signature of the brand, similar to how Cartier and Mejuri both use this contrast. Never use serif and sans interchangeably for the same role.

---

## 3. Logo Guidelines

The existing wordmark (LUSI, tracked serif caps, with "JEWELRY" in a smaller tracked line beneath) is retained as the foundation. Formalize as follows:

- **Primary lockup:** "LUSI" in serif, letter-spaced, with "JEWELRY" beneath in smaller tracked sans-serif or serif small-caps — matches current Instagram profile mark.
- **Clear space:** Minimum clear space around the logo equal to the height of the "L" in LUSI, on all sides.
- **Minimum size:** Do not render the full lockup below 80px wide in digital contexts; below that, use a monogram-only version (a serif "L" or "LJ" mark) if one exists or is commissioned.
- **Color versions:** Lusi Black on Ivory (primary), Ivory reversed out of Lusi Black or Deep Sage (dark backgrounds/footer), single-color Champagne Gold only for foil/premium packaging contexts — never gold-on-gold or gold on busy photography without a solid-color safe area.
- **Don'ts:** never stretch, never add drop shadows or bevels, never place on a busy photographic background without a scrim/overlay, never recolor to non-palette colors, never use the mass-market emoji-style bio copy alongside the mark (e.g., "✨") — the mark's elegance should not be undercut by casual copy in the same lockup.

**Action item for design/dev:** request vector (SVG/AI) source files of the existing logo from the client before build; do not recreate from a raster screenshot if avoidable, as edge quality will suffer.

---

## 4. Photography Style

This is the single highest-leverage fix relative to the current Instagram feed, where quality and style are inconsistent.

**Standard to apply to all new photography:**
- **Lighting:** Soft, diffused natural or studio-daylight-balanced light. No harsh flash, no yellow-cast indoor bulb lighting (visible in some existing posts).
- **Backgrounds:** Warm neutral surfaces — linen, unfinished light wood, stone/marble in Ivory or Warm Sand tones, or soft-focus natural elements (leaves, sand) already present in the existing feed. Avoid pure white seamless (too clinical/mass-market) and avoid black velvet (too traditional-local-jeweler).
- **Two required shot types per product, minimum:**
  1. **Studio/product shot** — clean, consistent background, macro detail on stone/setting, consistent angle and crop ratio across the whole catalog (critical — the current feed's biggest weakness is inconsistency).
  2. **Worn/lifestyle shot** — on hand, ear, neck, or body, natural setting, to help remote/diaspora buyers judge scale and fit, which is one of the top online-purchase trust barriers.
- **Color grading:** Warm, slightly desaturated, consistent white balance across all images — establishes a recognizable "Lusi look" the way Mejuri and Blue Nile both maintain strict photographic consistency.
- **Video/Reels:** Mix of real footage (atelier/craftsmanship process, in-store, packaging) and AI-generated supplementary content is acceptable per client's plan, but AI-generated content must match the same lighting/color standard — do not let AI content look visually distinct from real photography, or it will undercut trust rather than build it.

---

## 5. Icon Style

- **Line icons**, 1.5px stroke weight, rounded caps, no fill — consistent with the restrained, elegant tone. Avoid glyph/solid-fill icon sets, which read as heavier and more generic-e-commerce.
- Icon color: Lusi Black (default), Sage (secondary/inactive states), Champagne Gold (only for certification/trust badges — e.g., a GIA-certified icon).
- Recommended icon library starting point: **Phosphor Icons** (Light weight) or **Lucide** — both support the thin, elegant line treatment required.

## 6. Illustration Style

Minimal to none. This brand should rely on photography and typography, not illustration, to communicate quality — illustration risks reading as playful/casual (Pandora-adjacent), which conflicts with the confident-elegant personality. The one acceptable illustrative element is a **thin-line technical sketch style** (e.g., a jewelry blueprint/schematic line drawing) used specifically to represent the custom/3D-design service — this reinforces the "made, not just sold" USP.

---

## 7. Spacing System

Base unit: **8px**. All spacing (padding, margin, gaps) should be a multiple of this unit to keep the layout calm and consistent — an 8pt grid is standard practice for premium digital product and directly supports the "precise, not fussy" personality trait.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Icon-to-label gaps, tight inline spacing |
| `space-2` | 8px | Base unit |
| `space-3` | 16px | Component internal padding |
| `space-4` | 24px | Card padding, form field spacing |
| `space-5` | 32px | Section sub-spacing |
| `space-6` | 48px | Section spacing (mobile) |
| `space-7` | 80px | Section spacing (desktop) |
| `space-8` | 120px | Major page section breaks (desktop) |

Generous whitespace is a deliberate luxury signal — err toward more space, not less, especially around product photography.

---

## 8. Design Principles

1. **Restraint communicates confidence.** When in doubt, remove an element rather than add one.
2. **Consistency is the trust signal.** A jewelry brand asking customers to trust it with $200–$8,000 purchases sight-unseen must never show visual inconsistency — same crop ratios, same lighting, same type sizes, everywhere.
3. **The product is the hero.** UI chrome, decoration, and color should recede; diamonds and metalwork should be the brightest, highest-contrast element on any given screen.
4. **Earn gold, don't decorate with it.** Champagne Gold appears only where it's meaningful (certification, price, primary action).
5. **Everything scales toward heritage.** Every choice here should look credible today and *more*, not less, premium as the brand grows — avoid trend-driven choices that will feel dated in two years.

## 9. Accessibility Recommendations

- Maintain **WCAG 2.1 AA** contrast minimums: Lusi Black on Ivory passes easily; verify Sage (`#8B9482`) on Ivory for text use — it is borderline for small text (recommend Deep Sage `#5F6856` for any text under 18px) and reserve pure Sage for large text, icons, and non-text UI only.
- Never convey status (in stock, certified, sale) by color alone — pair with icon or text label.
- Ensure serif display type has a minimum body-text-equivalent fallback size (never drop below 16px for any reading content, including captions).
- All product photography requires descriptive alt text (material, stone, setting type) — also benefits SEO, covered in 04_Website_Blueprint.md.
- Interactive elements (buttons, links) require a visible focus state using Champagne Gold or Deep Sage outline, not just color change, for keyboard navigation.
