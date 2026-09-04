# Lusi Jewelry — Developer Handoff Guidelines
Version 1.0 — For Claude Code / implementation. Read alongside 02_Visual_Identity.md and 03_Design_System.md before writing any component.

Purpose of this document: eliminate ambiguity. If a decision is not covered here or in the other four files, treat it as unresolved and flag it rather than assuming — do not invent brand, content, or business logic decisions (e.g., pricing, shipping policy specifics, certification claims) that aren't explicitly provided.

---

## 1. Tech Approach Assumptions (Confirm Before Build)

This kit is framework-agnostic by design. Before starting implementation, confirm with the stakeholder:
- Target stack (e.g., Next.js, plain HTML/CSS/JS, Shopify/headless commerce for future cart phase, WordPress).
- Hosting environment.
- Whether Phase 1 needs a CMS (recommended, given product catalog will grow and non-technical staff will need to add pieces) or static/hardcoded content is acceptable short-term.
- Multi-language requirement (Armenian/English/Russian) — flagged as unresolved in 04_Website_Blueprint.md §10; this materially affects architecture (routing, content structure) and should not be assumed either way.

Do not silently pick a stack and proceed — this is a scope decision, not a design one.

---

## 2. Naming Conventions

- **CSS custom properties:** use the token names exactly as defined in 03_Design_System.md §1 (e.g., `--color-bg-primary`, `--space-4`). Do not introduce parallel/duplicate tokens with different names for the same value.
- **Component naming:** BEM-style or component-scoped (framework-dependent), but semantic and product-domain-based: `ProductCard`, `InquiryForm`, `CertificationBadge`, `CategoryFilterBar`, `CraftsmanshipBlock` — not generic (`Box1`, `Card2`).
- **File/folder naming:** kebab-case for files (`product-card.tsx`, `inquiry-form.tsx`), PascalCase for component exports.
- **Content/CMS fields (if applicable):** field names should mirror the spec table in 04_Website_Blueprint.md §3 (e.g., `metalType`, `stoneType`, `caratWeight`, `certificationStatus`, `priceUSD`, `priceAMD`) to keep product data consistent across category, PDP, and search/filter logic.

---

## 3. Suggested Folder Structure

```
/src
  /components
    /ui              → Button, Input, Badge, Table (design-system primitives)
    /product          → ProductCard, ProductGallery, SpecTable, CertificationBadge
    /forms             → InquiryForm, CustomDesignForm, ContactForm
    /layout            → Header, Footer, Nav, MobileMenu
    /sections          → HeroSection, TrustBar, CraftsmanshipBlock, DiasporaValueBlock
  /pages (or /app)
    index (Homepage)
    /collections/[category]
    /product/[slug]
    /custom-design
    /our-story
    /certification
    /shipping
    /contact
  /styles
    tokens.css         → the CSS variables from 03_Design_System.md §1
    globals.css
  /content or /cms      → product data, page copy (structure depends on CMS decision above)
  /assets
    /images
      /product           → studio + lifestyle shots, organized per product slug
      /brand              → logo files, icons
    /fonts
```

Adjust to framework conventions, but preserve the separation between design-system primitives (`/ui`), domain components (`/product`, `/forms`), and page-level composition — this keeps the token system in §1 enforceable and prevents style drift as the catalog grows.

---

## 4. Component Rules

- **No component should hardcode a color, spacing, or font value.** Every visual property must reference a token from 03_Design_System.md §1. This is the single most important rule for keeping the site visually consistent as it grows — the biggest weakness identified in the current Instagram presence was inconsistency, and hardcoded one-off values are how that happens on a website too.
- **ProductCard** must enforce the 4:5 image aspect ratio at the component level (via CSS `aspect-ratio` or equivalent), not rely on source images already being cropped correctly — source photography will vary before the photography standard in 02_Visual_Identity.md §4 is fully adopted.
- **CertificationBadge** is a reusable component (not one-off markup) since it appears on ProductCard, PDP, and the Certification page — changing certification copy or styling should only require editing one component.
- **InquiryForm** must support a pre-filled "product reference" hidden/read-only field when launched from a PDP, and must be genuinely reusable (general contact, custom design, product inquiry) via props/config rather than three separate form implementations — see 04_Website_Blueprint.md §10 for why this form is the primary conversion mechanism in Phase 1.
- **Price display** must support dual-currency (AMD/USD, optionally EUR) per 04_Website_Blueprint.md §10 — build the price component to accept multiple currency values from the start rather than retrofitting later.

---

## 5. Asset Requirements

- **Logo:** request vector source (SVG/AI/EPS) from stakeholder; do not trace from the Instagram profile raster image. Deliver in: primary lockup (SVG), reversed/inverse version (SVG), monogram/favicon version (SVG + PNG fallback at 32/64/180px for favicon/touch-icon use).
- **Fonts:** confirm licensing for "Cormorant Garamond"/"Playfair Display" (Google Fonts — free, self-hostable) vs. any premium serif (e.g., "Canela") which requires a paid license; default to the Google Fonts option unless the stakeholder confirms budget for a licensed typeface.
- **Product photography:** per 02_Visual_Identity.md §4 — minimum two images per product (studio + lifestyle), consistent aspect ratio and color grading. Until new photography is delivered, existing Instagram images may be used as placeholder content but should be flagged in the CMS/codebase as "needs reshoot" rather than treated as final.
- **Icons:** Phosphor (Light) or Lucide, imported as a library rather than individually hand-drawn, per 02_Visual_Identity.md §5.
- **Image formats:** serve WebP/AVIF with JPEG fallback; responsive `srcset` for all product and hero imagery given the photography-heavy, performance-sensitive design.

---

## 6. UI Behavior Rules

- **No cart/checkout in Phase 1** — every "Buy"-style action routes to an inquiry form or direct contact channel, not a payment flow. Build the InquiryForm/contact routing as the conversion endpoint everywhere a purchase action would normally live.
- **Certification and shipping information must be reachable within one click from any PDP** — do not bury these behind a generic "Info" or footer-only link, per the trust-first positioning in 01_Brand_Strategy.md.
- **No autoplaying video/audio, no auto-advancing carousels** — conflicts with the calm, considered motion guidelines in 03_Design_System.md §5.
- **Currency and (if applicable) language selection** should be simple, persistent (remembered across the session), and not force a page reload if avoidable.

## 7. Responsive Behavior

Follow breakpoints and grid rules in 03_Design_System.md §4 exactly (2/3/4-column product grid at sm/md/lg). Build and test mobile layouts first — do not build desktop and scale down, per the mobile-first rationale in that section (diaspora, social-referred traffic skews mobile).

## 8. Animation Rules

Follow 03_Design_System.md §5 precisely: standard easing/duration tokens for all transitions, fade+upward-translate for scroll-triggered entrances with staggering, no bounce/elastic easing, and mandatory `prefers-reduced-motion` support. Treat this as a hard constraint, not a nice-to-have — motion is one of the more visible signals of "considered" vs. "generic e-commerce template," which is a core differentiator this brand needs.

---

## 9. What Not to Assume

To keep this handoff free of invented decisions, the following must come from the stakeholder before or during build rather than being inferred:

- Final tech stack and CMS choice (§1).
- Multi-language requirement and structure.
- Final logo source files and any monogram/favicon variant if one doesn't already exist.
- Actual shipping/customs policy details and countries served (content, not design, but required before the Shipping page in 04_Website_Blueprint.md §7 can go live).
- Real testimonials/reviews (use Instagram embed as an interim placeholder only, per 04_Website_Blueprint.md §1).
- Whether/when a cart-and-checkout phase is triggered (e.g., by the mentioned watch/accessory product line) — do not pre-build checkout infrastructure speculatively without a confirmed go-ahead, to avoid wasted scope in Phase 1.
