# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project at a glance

- Framework: Next.js (App Router) with TypeScript
- Package manager: pnpm (pnpm-workspace.yaml present)
- Styling: Tailwind CSS (v4), custom components in src/components
- Path alias: @/* -> src/* (tsconfig.json)

## Commands you will use

Use pnpm for all commands to stay consistent with the lockfile.

- Install deps
  - pnpm install
- Start dev server
  - pnpm dev
- Lint (Next.js ESLint config)
  - pnpm lint
- Build (production)
  - pnpm build
- Run production server (after build)
  - pnpm start
- Type-check (optional; not defined as a script but available)
  - pnpm exec tsc --noEmit
- Utility scripts (Node)
  - Generate service slug mappings from service data
    - node scripts/extract-service-slugs.js
    - Outputs service-slug-mapping.json and logs groupings/mappings
    - Heads-up: This script resolves data.json relative to the scripts directory; if it errors, update its dataPath to ../src/app/services/[service]/data.json or adjust how it resolves paths.
  - Organize components into category folders (interactive; asks for confirmation)
    - node scripts/organize-components.js

Notes
- There is no test harness configured (no Jest/Vitest). If tests are added later, include how to run them here.

## High-level architecture

This is a content-heavy Next.js app using the App Router. Dynamic service pages are generated from a central JSON data source and are integrated with SEO (metadata and sitemap) and navigation that preloads routes.

- App shell and global metadata
  - src/app/layout.tsx
    - Declares site-wide Metadata (OpenGraph, Twitter, robots)
    - Injects JSON-LD LocalBusiness schema, Google Analytics script, and Google reCAPTCHA script
    - Renders Navbar, Footer, WhatsApp FAB around children
  - next.config.ts (repo root)
    - Images: allows remote images from placehold.co
    - Performance: compress, etags, experimental.optimizeCss
    - Routing: broad redirect table; a fallback rewrite sends unknown paths to /

- Routing overview (selected app routes)
  - Home: src/app/page.tsx
  - About: src/app/about-us/page.tsx
  - Gallery: src/app/gallery/page.tsx (with layout)
  - Videos: src/app/videos/page.tsx
  - Contact: src/app/contact/page.tsx
  - Services index: src/app/services/page.tsx (uses Helper component described below)
  - Dynamic services: src/app/services/[service]/page.tsx

- Dynamic service pages
  - Source of truth: src/app/services/[service]/data.json
    - A single JSON file with entries like "Acne Treatment", each containing hero, about, process, benefits, postCare, and faq blocks
  - Rendering: src/app/services/[service]/page.tsx
    - Uses a slug-to-name map for exact cases and a title-case fallback
    - If the service is not found in data.json, notFound() triggers a 404
    - generateStaticParams pre-renders one static page per service based on keys in data.json
    - generateMetadata builds per-service SEO using the entry’s hero/about content
  - SEO sitemap: src/app/sitemap.ts
    - Builds the sitemap by iterating serviceData keys (same source as dynamic pages) and adds a few static routes

- Services navigation and discovery
  - Navbar: src/components/layout/navbar.tsx
    - Top-level nav links (About, Gallery, Videos, Contact)
    - Dropdown groups for Skin (section anchors), and concrete lists for Hair and Laser services
    - Service name → slug mapping is maintained here for correct URLs; links prefetch on hover
  - Services index Helper: src/app/services/helper.tsx
    - Data-driven service sections via src/data/treatments.json
    - Cards navigate to service pages by slugified title and prefetch on hover

- API routes
  - reCAPTCHA verification: src/app/api/verify-recaptcha/route.ts
    - POST expects { token } and calls Google’s siteverify
    - Uses env var RECAPTCHA_SECRET_KEY; configure this in your environment (see below)

- Utilities and hooks
  - src/lib/utils.ts: cn() helper (clsx + tailwind-merge)
  - src/lib/useScrollAnimation.ts: intersection observer hook for reveal-on-scroll effects

- Data assets
  - src/app/services/[service]/data.json: source for dynamic service pages and sitemap
  - src/data/treatments.json: drives the services index UI groupings
  - public/images/services/*: imagery used throughout the site

## Environment and configuration

- RECAPTCHA_SECRET_KEY
  - Required by src/app/api/verify-recaptcha/route.ts
  - Set in a Next.js-compatible environment file (e.g., .env.local) before running the app
  - Restart the dev server after changes

- Path aliases
  - @/* resolves to src/* via tsconfig.json; use absolute imports accordingly

- Package manager
  - pnpm-workspace.yaml is present; prefer pnpm for installs and scripts

## Making common changes

- Add a new service page
  1) Add the service entry to src/app/services/[service]/data.json (matching the existing shape: hero, about, process, benefits, postCare, faq)
  2) Ensure the service slug is reachable:
     - Either add an explicit mapping in src/app/services/[service]/page.tsx (slugToServiceMap), or ensure the slugified title-case fallback matches your key
  3) If the service should appear in the navbar, update the arrays in src/components/layout/navbar.tsx (HAIR_SERVICES/LASER_SERVICES) or link sections
  4) Optionally run node scripts/extract-service-slugs.js to emit a mapping and sanity-check slugs

- Update services index groupings
  - Edit src/data/treatments.json to change sections/cards shown on /services

- Redirects and rewrites
  - Add or adjust in next.config.ts (redirects array; fallback rewrite sends unknown paths to /)


