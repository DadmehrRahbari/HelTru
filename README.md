# HelTru, marketing website

A static Astro + Tailwind site for HelTru: continuous, privacy-preserving
safety monitoring across six domains (eldercare, workplace safety, lone-worker
protection, sports performance, pediatric safety, industrial asset monitoring).

## Quick start

**Easiest:** double-click `start.bat` (Windows) or run `./start.sh` (macOS/Linux).
It installs dependencies on first run, starts the dev server, and opens your
browser automatically.

**Manual:**
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  site.config.ts         Single source of truth: brand copy, nav, contact
                          details, the Formspree endpoint, and the six
                          domains (name, accent color, what each watches
                          for, pain/solution/why-they-buy copy). Edit this
                          file to rebrand or update any domain's content;
                          every page and component reads from it.
  styles/global.css      Design tokens and shared component classes
                          (.panel, .btn-primary, .eyebrow, .status-chip,
                          .ripple-field, .band-deep).
  layouts/BaseLayout.astro  <head>, fonts, Nav + Footer wrapper.
  components/
    Nav.astro             Sticky header, active-link highlighting.
    Footer.astro          Sitemap + social links.
    SignalWaveform.astro  The animated hero chart (an illustrative
                           accelerometer trace with a periodic "fall
                           detected" moment, not a literal product screen).
    DomainSwitcher.astro  Interactive six-domain tab component.
    DashboardPreview.astro  Three-tab (User / Caregiver / Admin) text
                             description of what each role sees and can
                             do, written in plain language, no screenshots.
  pages/
    index.astro     Home
    platform.astro  Federated learning explainer + architecture deep dive
    domains.astro   Full breakdown of all six domains
    dashboards.astro  What each of the three dashboard views does
    trust.astro     GDPR / EU AI Act compliance + comparison ledger
    company.astro   About, why Estonia, why now
    contact.astro   Contact details + a working contact form (Formspree)
public/
  favicon.svg
```

## Why there are no product screenshots

Earlier drafts of this site included placeholder image slots for real
dashboard screenshots. That approach was dropped deliberately: most
established products in this category don't put literal app screens on
their marketing site, a screenshot goes stale the moment the real UI
changes, and a drawn placeholder looks unfinished. Instead, `DashboardPreview.astro`
describes what each role (user, caregiver, admin) actually sees and can do,
in plain language. If you want to add real screenshots later, that's a
deliberate design decision to revisit, not a missing feature.

## The contact form

`contact.astro` posts to Formspree (`site.formspreeEndpoint` in
`site.config.ts`). Submission happens via `fetch()` so the person sees an
inline confirmation instead of being redirected off the site. To point it
at a different Formspree form (or another provider that accepts a plain
POST with `FormData`), change `formspreeEndpoint` in `site.config.ts`;
nothing else needs to change.

## Design system, and why it looks the way it does

This site was deliberately designed to look and feel different from
HelTru's sibling projects (RTAI: dark navy ground, amber and teal
accents, Space Grotesk + Inter + JetBrains Mono, blueprint corner-tick
panels, grid background texture). HelTru instead uses:

- **A light, sage-mist base** (`mist-50` `#F3F6EF`) instead of a dark
  cockpit. This is a human-facing safety and care product, not an
  engineering console.
- **Evergreen as the signature accent** (`#1F6F52`) instead of amber,
  tying to trust, continuity, and the eldercare anchor vertical.
- **A six-color domain family** (evergreen, copper, plum, steel, rose,
  slate), one hue per product line, used consistently across the domain
  switcher and the /domains page.
- **Fraunces (serif display) + Work Sans (body) + Space Mono (data and
  labels)**: a warm serif instead of a geometric grotesk headline face,
  deliberately different from any sibling project's type pairing.
- **A soft concentric "ripple" watermark** instead of a hard schematic
  grid; it's literally the product's own signal and detection metaphor,
  rendered organically rather than as an avionics blueprint.
- **Hairline-rule panels, no corner-tick decoration.** Tabular and
  comparison content (the trust ledger) uses a single flush border, reads
  as a printed chart rather than a UI card.
- **One deep contrast band per page, at most** (`.band-deep`), used once
  on the homepage for the "why this matters now" stats, not the default
  mode.

## Deploying

`astro.config.mjs` is set up for GitHub Pages at a repo subpath
(`base: '/HelTru'`). If you're deploying to a custom domain root instead,
change `base` to `'/'`. `.github/workflows/deploy.yml` deploys automatically
on every push to `main` via GitHub Actions; no manual build step needed
once that's set up in the repo's Pages settings (Settings, Pages, Source:
GitHub Actions).

To host it anywhere else (Netlify, Vercel, an EU-hosted static bucket, or
served directly from the HelTru server), run `npm run build` and upload
the contents of `dist/`.