# HiTrace Solutions — corporate website

The corporate site for HiTrace Solutions, the technology group behind **OneGPS Africa**
(telematics), **DekaERP** (enterprise software), **HiTrace Digital** (digital experiences
and creative) and **HiTrace Consulting** (technology consulting and transformation).

This site is a gateway and brand hub, not a product catalogue. Telematics product detail
lives with OneGPS Africa; ERP detail lives with DekaERP.

## Stack

Vue 3 (`<script setup>`) · Vue Router 4 · Vite 6 · `lucide-vue-next` for icons.
No CSS framework — design tokens in `src/assets/css/variables.css`, shared utilities in
`base.css`, scroll reveals in `animations.css`.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # -> dist/
npm run preview
```

## Where the content lives

Almost all page content is data, not markup:

| File | Holds |
| --- | --- |
| `src/data/businesses.js` | The four businesses, their services, tags, CTAs and destinations; capability groups; the "why" pillars; the consulting flow |
| `src/data/site.js` | Brand name, tagline, and the published address, phone numbers, emails and social profiles |

Edit those and every page, the header dropdown and the footer follow.

### Changing where a business CTA points

Each business has `route` (its profile page on this site) and `externalUrl`.
When `externalUrl` is set, every CTA for that business becomes an external link that
opens in a new tab; when it is `null`, CTAs stay on the in-site profile page.

HiTrace Digital and HiTrace Consulting currently have `externalUrl: null`. When either
gets its own domain, set the URL in `src/data/businesses.js` — nothing else needs editing.

## Contact form

`ContactForm.vue` posts JSON to `VITE_CONTACT_ENDPOINT` when that variable is set:

```
# .env.local
VITE_CONTACT_ENDPOINT=https://your-form-handler.example/submit
```

With no endpoint configured it falls back to opening the visitor's mail client addressed
to `info@hitracesolutions.com`, so submissions are never silently dropped. **Set the
endpoint before launch** if you want submissions captured server-side.

## Routing and SEO

Routes are declared in `src/router/index.js`; per-page title, description, canonical and
Open Graph tags are applied in `src/router/seo.js` on every navigation. Business profile
pages take their metadata from the business record rather than repeating it in the route.

URLs from the previous telematics-first site (`/telematics`, `/fleet-management`,
`/pricing`, `/web-services`, …) redirect to the business that now owns that subject, so
existing inbound links and search results keep working.

`index.html` carries the static homepage metadata plus `Organization` structured data
listing the four businesses as `subOrganization`.

### Deployment note

The router uses HTML5 history mode, so the host must rewrite unknown paths to
`/index.html`. Without that rewrite, `/about` and friends 404 on a hard refresh.

## Accessibility and motion

Skip link, focus-visible outlines, labelled landmarks and form errors wired with
`aria-describedby`. All decorative graphics are `aria-hidden`. Every animation is disabled
under `prefers-reduced-motion: reduce`.
