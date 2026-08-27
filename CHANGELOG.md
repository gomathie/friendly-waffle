# Changelog

All notable changes to the HiTrace Solutions corporate website.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — 2026-08-27

### Changed

- **Nav simplified: "Our Businesses" → "Solutions"; standalone "Consulting" item
  removed.** Consulting is still reachable — it is one of the businesses listed in the
  Solutions dropdown (desktop) and the Solutions list (mobile), plus the CTAs on the
  Home and Services pages — so nothing is orphaned, only the duplicate top-level entry
  is gone. `isBusinessesRoute` now also matches `/consulting`, so the Solutions nav
  item highlights when that page is open (it had no route to an active state
  otherwise, once its own nav item was removed).
- **"Technology Group" is now "Technology Solutions".** "Group" reads as a large
  conglomerate in some markets and carries unwanted tax and pricing assumptions. The
  descriptor moved to a single source — `brand.descriptor` in `src/data/site.js` — and is
  rendered from there in the header lockup, the hero eyebrow and the architecture
  diagram, which had hardcoded it. Around 40 further replacements removed "group" from
  prose: "One group. Distinct specialisms." → "One company. Distinct specialisms.";
  "Why one group" → "Why one company"; "Services across the group" → "Services across
  our businesses"; "The group's roots are in telematics" → "Our roots are in
  telematics". Where the collective noun added nothing it was dropped rather than
  swapped ("Engage one of them, or several together.").
- **Copy no longer commits to a business count.** "Four businesses. One technology
  group." became "Specialized businesses. One technology company."; "One group. Four
  specialisms." became "One company. Distinct specialisms."; and the same across the
  Services, Careers, About and Businesses pages plus the route meta description. Adding a
  fifth business no longer means rewriting headings.
- **The business count now drives the layout instead of being assumed by it.** The
  architecture diagram took its three columns from a hardcoded `repeat(3, 1fr)`; it now
  reads `--cols` from the data and computes the connecting rail from it. The consulting
  page's sibling grid moved to `auto-fit`.
- **`interestAreas` (contact form) is derived from the businesses**, with an optional
  `interestLabel` override for OneGPS Africa's "OneGPS Africa / Telematics" wording.
- **The business profile route no longer hardcodes ids.** It was
  `/businesses/:id(onegps-africa|dekaerp|hitrace-digital)`, so a new business would have
  had a page but no route and no sitemap entry. The pattern is now built from the data.
  Verified by temporarily adding a fifth business: it picked up a route and a sitemap
  entry with no other edit.

### Added

- **Services page rebuilt with real content.** Each of the four practices
  (Technology, Digital, Transformation, Creative) now gets its own full section with a
  framing paragraph, every service described rather than just named, and pills linking to
  the business that actually delivers it. Sticky jump-links sit under the header since
  the page is now long.
- **`engagementSteps`** — a five-step engagement flow (Conversation → Discovery →
  Recommendation → Delivery → Support), rendered with the existing `TransformationFlow`
  component in its `dark` variant. Describes process only; promises no timeline or
  service level.
- Service items in `serviceGroups` changed from bare strings to `{ name, description }`,
  and each group gained `id` (for anchors), `accent`, `intent` and `deliveredBy`.
  OneGPS Africa now appears on the Services page, under Technology.

### Changed

- `CapabilitiesView.vue` renamed to `ServicesView.vue` to match its route. The
  `/capabilities` → `/services` redirect is unaffected.
- Home page service cards read `item.name` to match the new item shape.

- **`/industries`** — a group-level Industries page (`IndustriesView.vue`) covering
  Transport & Logistics, Agriculture & Agribusiness, Distribution & Wholesale and
  Growing Businesses. Each card routes to whichever business owns that need, so the page
  is a router into the ecosystem rather than a telematics landing page. Backed by a new
  `industries` export in `src/data/businesses.js`.

### Changed

- **Capabilities → Services.** `/capabilities` now redirects to `/services`; the data
  export `capabilityGroups` was renamed `serviceGroups`. Header, mobile nav and footer
  updated.
- `/industries` and `/services` are no longer legacy redirects to OneGPS Africa and
  `/businesses` respectively — they are real pages again.
- `sitemap.xml` picked both up automatically on the next build (13 URLs).

## [2.0.0] — 2026-08-26

Complete repositioning: the site is now the **corporate website of the HiTrace
Solutions technology group**, not a telematics website. Telematics is the business
of OneGPS Africa; enterprise software is DekaERP's.

### Added

**Brand architecture**
- `EcosystemDiagram.vue` — parent group → three delivery businesses → HiTrace
  Consulting spanning them; the group structure is readable within seconds of landing.
- `BusinessCard.vue` — premium cards for the four businesses, each with its own
  colour accent carried consistently through nav, cards and profile pages.
- `EcosystemGraphic.vue` — animated abstract network hero visual (People, Systems,
  Data, Cloud, IoT, Digital around a HiTrace core). No vehicles, no tracking dashboard.
- `TransformationFlow.vue` — Strategy → Technology → Integration → Transformation →
  Business Growth, horizontal on desktop, vertical on mobile.
- `FinalCta.vue` — shared "Let's build what comes next." closing CTA.

**Pages**
- `/about`, `/businesses`, `/businesses/{onegps-africa,dekaerp,hitrace-digital}`,
  `/capabilities`, `/consulting`.
- `/careers`, `/privacy`, `/terms` — required by the footer.
- Custom 404 (`NotFoundView.vue`) that routes visitors to the four businesses
  rather than dead-ending.

**Content as data**
- `src/data/businesses.js` — the four businesses, services, tags, CTAs, destinations,
  capability groups, pillars and the consulting flow.
- `src/data/site.js` — brand strings and the published contact details.
- A business's CTA destination is one field: set `externalUrl` and every CTA for that
  business becomes an external link. HiTrace Digital and Consulting are `null` pending
  their own domains.

**SEO**
- Per-route title, description, canonical, Open Graph and Twitter tags via
  `src/router/seo.js`; business pages derive theirs from the business record.
- `Organization` JSON-LD in `index.html` listing all four as `subOrganization`.
- Generated `sitemap.xml` and `robots.txt` (`scripts/generate-seo-files.mjs`), wired
  to `prebuild` so a new page cannot ship missing from the sitemap.
- `robots`, `og:locale`, `og:image:width/height/alt` and `twitter:image:alt`.

**Analytics and consent**
- `src/lib/analytics.js` — provider-agnostic loader (Plausible or GA4), configured by
  env var. Ships inert: no provider configured means no script, no cookie.
- `src/lib/consent.js` + `CookieConsent.vue` — consent stored in `localStorage`, not a
  cookie. The banner only appears when the configured provider actually stores
  identifiers, so a cookieless provider means no banner at all.
- Route changes reported via `trackPageView`, a no-op until consent loads a provider.

**Tooling**
- `npm run check:links` — verifies internal routes resolve, images exist, external
  URLs respond, and every new-tab link carries `rel="noopener noreferrer"`.
- `README.md` documenting the data files, the CTA-destination switch, the contact
  endpoint, and the deployment rewrite requirement.

### Changed

- **Hero** — "Technology that moves businesses forward." with `Explore Our Businesses`
  / `Talk to Us`, replacing "Cutting-Edge Fleet & Technology Solutions" / `Book a Demo`.
- **Navigation** — Home · About · Our Businesses (dropdown) · Capabilities · Consulting
  · Contact, with a `Talk to Us` header CTA. The Telematics-led Services menu is gone.
  Header brand lockup now carries the "Technology Group" descriptor.
- **Footer** — restructured to Businesses / Company / Contact, with the group tagline.
- **Contact form** — rebuilt with Name, Company, Email, Phone, Area of Interest and
  Message; inline validation wired with `aria-describedby`. Posts to
  `VITE_CONTACT_ENDPOINT` when set, otherwise falls back to a prefilled mail client so
  nothing is silently dropped. `/contact?interest=DekaERP` preselects an area.
- **Design tokens** — added per-business accent colours and an on-dark link colour.
- **Hero backdrops** are now pure CSS. The abstract network photo was 1.17 MB and would
  have dominated LCP; the drawn backdrop costs no image bytes and better matches the
  "no stock photos" direction.
- **Legacy URLs** (`/telematics`, `/fleet-management`, `/fuel-monitoring`,
  `/tracking-solutions`, `/driver-behavior-monitoring`, `/smart-farming`, `/industries`,
  `/pricing`, `/web-services`, `/iot-and-smart-homes`, `/faq`, `/book-a-demo`, …) now
  redirect to whichever business owns that subject, preserving inbound links.
- Route table extracted to `src/router/routes.js` so build tooling can read it without
  a browser environment.

### Fixed

- **Page scrolled itself from bottom to top on first load.** Global
  `scroll-behavior: smooth` on `html` meant the router's scroll-to-top *animated* up
  from the position the browser had restored. Removed the global rule, set
  `history.scrollRestoration = 'manual'`, and made `scrollBehavior` return an explicit
  `behavior` — instant for navigation and back/forward, smooth only for in-page anchors
  and not under `prefers-reduced-motion`.
- **Contrast**: the amber (`#EA580C` → `#C2410C`) and teal (`#0D9488` → `#0F766E`)
  accents failed WCAG AA at their original values; check icons moved off `#00C853` to
  `#047857`. On-dark links moved from `#0066FF` (3.75:1) to `#7FB2FF` (8.4:1).
- **Eyebrow labels** inside section headers were being overridden by the more specific
  `.section-header p` rule.
- Nav "Home" link stayed highlighted on every page (`router-link-active` matches `/`
  inclusively); now keyed to exact match.
- Mobile tap targets: footer social buttons 40px → 44px; consent buttons min 44px.
- Motion-path hero pulses are now feature-detected, so they cannot strand at the SVG
  origin in browsers without `offset-path`.

### Removed

- Telematics-specific views, now OneGPS Africa's territory: Telematics, Fleet
  Management, Fuel Monitoring, Tracking Solutions, Driver Behavior, Smart Farming,
  Industries, Pricing, FAQ, IoT & Smart Homes, Web Services, OneGPS Africa (old
  white-label reseller page).
- Components only those pages used: `ServiceCard`, `FeatureCard`, `CtaBanner`,
  `StepCard`, `PricingCard`, `TelematicsAnimatedHero`.
- `scripts/audit_phrases.mjs` and `scripts/verify_content.mjs`, which asserted the old
  telematics-first copy.

### Notes / outstanding

- `VITE_CONTACT_ENDPOINT` is unset — set it before launch or submissions go via the
  visitor's mail client.
- Privacy and Terms describe this website accurately but have **not** been reviewed by
  counsel.
- `public/images` still holds ~21 MB of unreferenced telematics photography. Nothing
  loads it, but it is worth pruning before deploy.
- The site was verified by build, link check and code review — **not** in a browser, as
  no browser automation was available in the environment it was built in.
