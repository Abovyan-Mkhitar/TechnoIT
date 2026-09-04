# Lusi Jewelry — Website Specification

_Agreed with client (Grigor), 2026-07-10_

## What we're building

A **catalog website** for Lusi Jewelry (Gyumri, Armenia). No checkout, no customer
accounts — customers browse products and reach out via WhatsApp or inquiry forms.

- **Frontend**: existing Next.js app in `lusijewelry/` (App Router, Tailwind, shadcn/ui)
- **Backend**: Strapi v5 (new, in `lusijewelry-backend/`), SQLite locally, Postgres in production
- **No Supabase** — remove unused `@supabase/supabase-js` dependency

## Decisions

| Topic | Decision |
|---|---|
| Prices | **Mixed, per product** — each product either shows a price (AMD) or "price on request" |
| Languages | **Armenian + English + Russian** (template has hy/en; ru must be added, following the existing `_hy`/`_en` field-suffix pattern → add `_ru`) |
| Catalog size | 100+ products total, added in phases of 20–30 |
| Browsing | Categories + filters (metal, stone, price range). Text search deferred until catalog is large |
| Product details | Metal & purity (585/750/925…), stones, weight in grams. No size variants |
| Sections | Catalog, custom orders form, blog/news, about/our story, FAQ + policies |
| Inquiries | WhatsApp button (product pre-filled) + inquiry form saved to Strapi admin + email notification |
| Instagram | Feed on homepage linking to profile |
| Unique features | **Gift Finder quiz** (recipient/occasion/budget → matching products) and **Ring size guide** (measurement + EU/US conversion, SEO page) |

## Strapi content types

- **Product**: titles/descriptions ×3 langs, slug, category rel, gallery, price_amd?,
  price_on_request bool, stock_status (instock/made_to_order/soldout), featured,
  new_arrival, metal, purity, stones, weight_grams, gift-finder tags (recipient, occasions)
- **Category**: name ×3 langs, slug
- **Post** (blog): title/excerpt/content ×3 langs, cover image
- **Inquiry**: name, phone, preferred_contact, message, product ref, type
  (product inquiry / custom order), custom-order fields (jewelry_type, budget_range)

## Build phases

1. **Backend**: scaffold Strapi, content types above, public read permissions,
   seed sample data (categories + ~10 products with images)
2. **Frontend core**: add Russian, catalog filters, product page with new fields,
   mixed-price display, wire forms → Strapi + email, WhatsApp buttons
3. **Unique features**: Gift Finder quiz, Ring Size guide
4. **Content & polish**: Instagram feed, blog, about/FAQ/policies content, SEO pass
5. **Deployment**: Strapi on VPS/Railway (~$5–15/mo) + Postgres, frontend on Netlify,
   domain lusijewelry.com

## Open items

- WhatsApp number, contact email/phone for `src/config/site.ts`
- Instagram account handle + API access for the feed
- Email service choice for inquiry notifications (suggest Resend, free tier)
- Real product photos & translations (client provides in batches)
