# Lusi Jewelry — Website Blueprint
Version 1.0 — Phase 1 scope: catalog + inquiry/order-capture, no cart/checkout

Phase 1 goal (per stakeholder direction): showcase the product catalog credibly and capture inquiries/orders (via form, WhatsApp, or similar contact channel) — not full e-commerce checkout. E-commerce can be added later if a lower-price product line (e.g., watches) justifies it. Every page below is designed to work in this inquiry-first model, but structured so a "Add to Cart" / checkout layer can be added later without a redesign.

---

## 1. Homepage

**Purpose:** Establish credibility and elegance within the first 3 seconds; route visitors to the category or trust content most relevant to them (browse product, learn craftsmanship, start a custom order, or reach diaspora-specific value messaging).

**Layout / Sections (in order):**
1. **Hero** — full-bleed lifestyle photography (worn piece, soft natural light), serif headline (e.g., tagline or a value statement — "Light, by design."), one primary CTA ("Explore the Collection").
2. **Trust bar** — thin horizontal strip directly under hero: "Since 2006" / "GIA-Certified Diamonds Available" / "Designed & Crafted In-House" / "Custom Design Available" — four short trust signals with line icons, addressing the #1 stated barrier (trust) immediately.
3. **Category entry grid** — visual tiles for Rings, Necklaces, Earrings, Bridal/Engagement, Custom Design (matches existing Instagram highlight structure — familiar to existing followers).
4. **Featured/New pieces** — 4–8 product cards, most recent or most premium pieces.
5. **Craftsmanship story block** — short paragraph + process photography (hands, tools, 3D design screen) linking to the full Our Story/Craftsmanship page. This directly supports the "made, not just sold" USP.
6. **Diaspora value block** — a distinct section (not hidden in About) speaking directly to the international/diaspora audience: certified quality, price advantage vs. Western jewelers, international inquiry/shipping process. This is a primary growth lever and deserves homepage-level real estate, not a footer link.
7. **Social proof** — testimonials/reviews if available; if not yet available at launch, use this space for Instagram feed embed (leveraging existing 1,065 followers as informal proof) with a note to replace with written testimonials as they're collected.
8. **Footer CTA** — "Have a piece in mind? Start a custom design" linking to the custom order page.

**CTA hierarchy:** Primary = "Explore the Collection." Secondary = "Start a Custom Design." Tertiary = "Learn Our Story."

**SEO:** Title tag should include "Certified Diamond Jewelry" + a location/market qualifier appropriate to target markets (avoid leading with "Armenian jewelry" per positioning direction — consider "Gyumri Atelier" as a more premium geographic marker if a location is referenced at all). Meta description should state certification and in-house craftsmanship in the first sentence.

---

## 2. Category / Collection Pages (Rings, Necklaces, Earrings, Bracelets, Bridal & Engagement)

**Purpose:** Let visitors browse a specific product type efficiently; support filtering by the attributes that matter most for a considered, high-value purchase.

**Layout:**
- Category header (serif H1, one-line description).
- Filter/sort bar: metal type, stone type, price range, style (classic/modern/custom-eligible). Sort by: Newest, Price (asc/desc), Featured.
- Product grid per 03_Design_System.md §3.3 (2/3/4 columns responsive).
- Optional: an editorial banner mid-grid for Bridal/Engagement specifically (highest-intent category per discovery) promoting "Book a Consultation" or "Start Your Custom Ring."

**UX recommendation:** For Bridal/Engagement specifically, add a lightweight "ring size / budget guide" entry point near the top — engagement buyers (especially first-time, especially diaspora buyers unfamiliar with the process) benefit from guidance, and this becomes a natural inquiry-capture moment.

**SEO:** Category pages should target long-tail terms per category (e.g., "certified diamond engagement rings," "custom gold necklaces") with unique on-page copy per category — do not leave categories as image-grids with zero indexable text.

---

## 3. Product Detail Page (PDP)

**Purpose:** Provide enough information and trust signal for a visitor to feel confident submitting an inquiry/order without having physically seen the piece — this page carries the most weight against the #1 stated barrier (trust) and #2 (shipping).

**Layout / Sections:**
1. Image gallery — studio shots + worn/lifestyle shots (per 02_Visual_Identity.md §4), zoomable detail view for stone/setting.
2. Product title (serif), price (clearly displayed — price transparency is part of the trust strategy, do not hide behind "inquire for price" except for fully bespoke custom pieces).
3. Spec table: metal type/purity, stone type, carat, cut, certification status (GIA badge if applicable), dimensions/size options.
4. **Certification block** — if GIA-certified, show badge + short explanation of what that means and how to verify it; if not certified by default but available on request, state that clearly rather than staying silent (silence reads as evasion on a trust-sensitive attribute).
5. Primary CTA: "Inquire About This Piece" (opens inquiry form, pre-filled with product reference) — this is the core conversion action for Phase 1.
6. Secondary CTA: "Request as Custom Design" (links to custom design flow, offering the piece as a starting point for personalization).
7. Shipping & Returns summary (short, links to full policy page) — addresses the #2 trust barrier directly on the page where purchase intent is highest.
8. Related/complementary pieces (e.g., matching band, earrings in same collection).

**SEO:** Unique product descriptions (not spec-only), structured data (Product schema with price, availability, and — if applicable — review/rating markup) to support rich results in search.

---

## 4. Custom Design Page

**Purpose:** Showcase and convert on the in-house 3D custom design capability — the strongest, most defensible USP and currently invisible to anyone outside the local customer base.

**Layout:**
1. Intro explaining the process (consultation → 3D model/render → approval → hand-production), presented as a simple numbered process, not a wall of text.
2. Visual proof: side-by-side of a 3D render next to the finished physical piece — this single content asset does more trust-building work than almost anything else on the site and should be prioritized in the photography/content plan.
3. Starting price guidance or price range for custom work (even approximate) — fully hidden pricing on a page meant to drive inquiries will suppress conversion.
4. Inquiry form tailored to custom requests: occasion, budget range, stone/metal preference, reference image upload, contact method.
5. FAQ: timeline expectations, revision process, shipping for custom/bespoke internationally.

---

## 5. Our Story / Craftsmanship Page

**Purpose:** Carry the "since 2006," "made in-house," and quiet-heritage narrative without overclaiming heritage status (see 01_Brand_Strategy.md §2 and §10).

**Layout:**
1. Short founding narrative — 2006 origin, continuous operation, atelier framing (avoid "Armenian brand" framing per positioning direction; "our atelier in Gyumri" is acceptable as a factual, non-flag-waving detail).
2. Craftsmanship section — team size/expertise, in-house production, 3D design capability, photography of the workspace/process.
3. Certification & quality standards section — explicitly explain the GIA certification offering here as well as on PDPs, since this page is where higher-trust, higher-consideration visitors land.
4. Optional: a short, honest note on the business's continuity ("operating continuously since 2006") — resilience is a legitimate, quiet trust signal without needing embellishment.

**SEO:** Strong candidate for "About" schema and internal linking hub — link out to certification page, custom design page, and contact/inquiry.

---

## 6. Certification / Trust Page (Standalone)

**Purpose:** Directly answer the single largest stated barrier to online purchase (trust in authenticity). Worth its own indexable page rather than only being a section elsewhere.

**Content:** What GIA certification means, how to verify a certificate number, Lusi's own quality-control process for non-GIA pieces, return/authenticity guarantee policy, contact for verification questions.

---

## 7. Shipping, Customs & International Orders Page

**Purpose:** Directly answer the #2 stated barrier. Especially critical for the US/EU/Russia diaspora segment.

**Content:** Countries served, estimated timelines, who handles customs/duties (and any guidance for the buyer), insurance/tracking on international shipments, contact for order-specific shipping questions. This page should be linked from the PDP, the diaspora value block on the homepage, and the footer — it is a conversion-critical trust document, not a boilerplate legal page.

---

## 8. Contact / Inquiry Page

**Purpose:** Centralized contact for all inquiry types (general, custom, wholesale/export if applicable later).

**Layout:** Contact form (name, email/phone, inquiry type dropdown, message), direct WhatsApp/Instagram/phone links (diaspora buyers, especially, often prefer a direct message channel over a form — offer both), physical atelier address and hours (Gyumri), map embed.

---

## 9. Global Navigation & Footer

**Header nav:** Rings / Necklaces / Earrings / Bracelets / Bridal & Engagement / Custom Design / Our Story — plus a persistent contact/inquire action (icon or button), per 03_Design_System.md §3.4.

**Footer:** Sitemap links, certification/trust page, shipping/international page, contact info, Instagram link, newsletter signup (optional, low priority for Phase 1), copyright.

---

## 10. Cross-Page UX Recommendations

- **Every product-adjacent page needs a visible, low-friction path to "ask a question"** — since there's no cart, the inquiry form (or WhatsApp link) is the site's primary conversion mechanism and should never be more than one click away.
- **Price transparency throughout** — per brand strategy, avoid "contact for pricing" except on fully bespoke work; hidden pricing undermines the trust-first positioning.
- **Currency display:** consider showing price in both AMD and USD (and optionally EUR) given the diaspora audience — reduces friction/mental math for international buyers and should be a build requirement, not an afterthought.
- **Language:** confirm with stakeholder whether the site needs Armenian/English/Russian language versions given the diaspora spread across US, EU, and Russia — this is a scope question for Claude Code to resolve with the client before build, not an assumption to make.

## 11. SEO Considerations (Site-Wide)

- Implement structured data: Organization, Product, BreadcrumbList schemas at minimum.
- Ensure all product and category pages have unique meta titles/descriptions — do not template them identically.
- Image alt text must be descriptive (material, stone, style) per 03_Design_System.md §6 — this also supports Google Images traffic, a meaningful discovery channel for jewelry.
- Since the brand explicitly avoids "Armenian jewelry" as a positioning claim, do not over-optimize for that exact phrase; instead target certification, craftsmanship, and category-based terms ("certified diamond engagement ring," "custom gold jewelry"), with geographic terms used factually (e.g., "Gyumri atelier") rather than as the primary keyword strategy.
- Page speed: given the photography-heavy design, enforce responsive image formats (WebP/AVIF with fallback) and lazy-loading below the fold — covered further in 05_Developer_Guidelines.md.
