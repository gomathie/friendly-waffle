# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this site is

The **corporate website of HiTrace Solutions**, a technology group. It is a gateway and
brand hub, not a product catalogue. A first-time visitor should understand this within
about ten seconds of landing:

```
                    HITRACE SOLUTIONS
                    Technology Group
                           |
     +---------------------+---------------------+
     |                     |                     |
ONEGPS AFRICA          DEKAERP            HITRACE DIGITAL
Telematics &          Enterprise          Digital Experiences
Fleet Intelligence     Software              & Creative
     |                     |                     |
     +---------------------+---------------------+
                           |
                   HITRACE CONSULTING
                Technology & Transformation
```

Corporate tagline: **Technology that moves businesses forward.**
Supporting line: *Building technology solutions for a connected world.*

## Hard rules

**Do not position HiTrace Solutions as a GPS tracking, fleet management, vehicle
tracking or telematics company.** That was the old site and it is wrong now. Telematics
belongs to OneGPS Africa. If a change would make the parent company look like a
telematics vendor again, it is the wrong change.

**Do not invent company facts.** No statistics, employee counts, years of experience,
client counts, revenue, awards, partnerships, certifications, offices, testimonials or
case studies unless they already exist in this repo. If information is missing, use a
sensible placeholder or omit the section. Contact details in `src/data/site.js` are the
real published ones — never replace them with examples.

The one pre-existing claim in use is "more than 15 years" of vehicle tracking work,
carried over from the old site and framed on `/about` as the group's telematics roots,
now OneGPS Africa's.

**OneGPS Africa and DekaERP are independent businesses**, not features of HiTrace
Solutions. Describe them as "A HiTrace Solutions company" / "Part of the HiTrace
Solutions ecosystem" and link out to `https://onegps.africa` and `https://dekaerp.com`.

**HiTrace Consulting is strategic and enterprise-facing; HiTrace Digital is creative.**
Consulting answers "what technology should we run, and in what order?"; Digital answers
"how should we look, sound and behave online?" Keep that distinction sharp.

## Stack

Vue 3 (`<script setup>`) · Vue Router 4 · Vite 6 · `lucide-vue-next`. No CSS framework —
design tokens in `src/assets/css/variables.css`, utilities in `base.css`, scroll reveals
in `animations.css`. Reuse the existing stack; don't add libraries without a reason.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/businesses.js` | The four businesses, services, tags, CTAs, destinations; capability groups; pillars; consulting flow |
| `src/data/site.js` | Brand strings and the real published contact details |
| `src/router/routes.js` | Route table (kept browser-free so build scripts can read it) |
| `src/router/seo.js` | Per-route title, description, canonical, OG/Twitter tags |
| `src/lib/analytics.js` | Consent-gated, provider-agnostic analytics |
| `src/lib/consent.js` | Consent state in `localStorage` |
| `scripts/generate-seo-files.mjs` | Generates `sitemap.xml` + `robots.txt` (runs on `prebuild`) |
| `scripts/check-links.mjs` | `npm run check:links` |

**Content is data.** Editing `businesses.js` or `site.js` updates every page, the header
dropdown and the footer at once. Prefer that over hardcoding copy into a view.

## Gotchas — things that were already fixed once

- **No global `scroll-behavior: smooth`.** With it set, the router's scroll-to-top on
  load animates up from the browser's restored position, which reads as the page
  scrolling itself on arrival. The router owns scroll: `scrollRestoration` is `manual`
  and `scrollBehavior` returns an explicit `behavior`.
- **`.section-header p` outspecifies `.eyebrow`.** An eyebrow inside a section header
  needs the override already in `base.css`.
- **`router-link-active` matches `/` inclusively**, so the Home link highlights
  everywhere. Nav styling keys off `router-link-exact-active`.
- **`public/sitemap.xml` and `robots.txt` are generated.** Don't hand-edit them.
- **Accent colours are contrast-checked.** Amber `#C2410C`, teal `#0F766E`, blue
  `#2563EB`, violet `#7C3AED` all clear 4.5:1 against white. Don't lighten them.
  On dark backgrounds use `--color-primary-on-dark`, not `--color-primary`.

## Standards to hold

- Responsive down to mobile, designed intentionally — not a shrunken desktop layout.
  44px minimum tap targets.
- Semantic HTML, correct heading order, alt text on every image, visible focus states,
  labelled forms. `aria-hidden` on decorative graphics.
- Every animation disabled under `prefers-reduced-motion: reduce`.
- Every new-tab link gets `rel="noopener noreferrer"`.
- Optimise images before adding them. A 1 MB hero background is not acceptable; prefer
  a CSS backdrop over decorative photography.

## Before calling work done

```bash
npm run build        # must succeed; also regenerates the sitemap
npm run check:links  # must report no broken links
```

Then check the page in a browser at desktop and mobile widths. The build passing is not
the same as the page looking right.
