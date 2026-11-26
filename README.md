# Leather export website (Next.js, JSX)

Hybrid export portal (white and gold theme; colours are CSS variables at the top of `app/globals.css`): hero with generated leather swatches, product grid, trust bar, process, trade terms, FAQ and a quote form.
Built with Next.js App Router (15+), plain JSX and one CSS file. No UI library, no image files needed to launch.

## Run it

```bash
npm install
cp .env.example .env.local   # then edit the values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production check
```

Deploy on Vercel (import the repo, add the three env vars) or any Node host.

## Before you go live

1. **`lib/site.js`**: brand name, email, phone, WhatsApp number, address, LinkedIn.
2. **Trust badges**: in `site.credentials`, set `active: true` only for registrations you actually hold. Inactive ones are hidden everywhere (trust bar, footer, compliance page, structured data).
3. **`lib/products.js`**: edit products, specs, HS codes (confirm 8-digit codes with your CHA or CA). Add `image: '/images/your-photo.jpg'` to a product to replace the generated swatch with a real photo (put files in `public/images/`).
4. **`.env.local`**:
   - `NEXT_PUBLIC_SITE_URL` your real domain (drives canonical URLs, sitemap, Open Graph, schema).
   - `ENQUIRY_WEBHOOK_URL` where enquiries go (Zapier, Make, Google Apps Script, n8n). If empty, enquiries are only logged on the server and you will not receive them.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` token from Google Search Console.
5. **`app/about/page.jsx`**: replace the generic copy with your own story.
6. Replace MOQ and lead-time wording with real numbers once you have them.

## SEO built in

- Per-page `<title>`, description, keywords, canonical URL and `en-IN` / `x-default` hreflang (`lib/seo.js`, `app/layout.jsx`)
- Open Graph and Twitter cards, generated 1200x630 share image (`app/opengraph-image.jsx`), favicon (`app/icon.jsx`)
- `robots.txt` (`app/robots.js`), `sitemap.xml` (`app/sitemap.js`, includes every product), web manifest
- JSON-LD: Organization, WebSite, BreadcrumbList, ItemList, Product, FAQPage, ContactPage
- Statically generated pages, `next/font` self-hosted fonts, semantic HTML, one `<h1>` per page, skip link, keyboard focus styles, reduced-motion support
- Security headers in `next.config.mjs`

## After launch

- Add the site in Google Search Console and submit `/sitemap.xml`.
- Create a Google Business Profile and a LinkedIn company page that link to the site.
- Get listed in the Council for Leather Exports member directory once you hold the RCMC, and in FIEO and IndiaMART export directories.
- Add real factory and product photos, then add `alt` text through the `image` field.
- Check Core Web Vitals in PageSpeed Insights after deploying.
