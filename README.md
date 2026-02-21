# ashmidgley.io

Personal portfolio site for Ash Midgley, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Overview

This project powers [ashmidgley.io](https://ashmidgley.io), a freelance software engineering portfolio.  
It highlights:

- Service offerings
- Selected client work
- Client testimonials

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Custom internal carousel component
- Vercel Analytics
- Jest + Testing Library (configured)

## Routes

- `/` - Main landing page (offerings, work, testimonials)

## Project Structure

```text
app/
  layout.tsx         # global layout + metadata + nav/footer
  page.tsx           # homepage composition
components/
  ...                # UI sections, project summaries, testimonials, branding
public/
  images/            # portfolio screenshots + profile images
  fonts/             # Sharp Grotesk local fonts
  og.jpg             # Open Graph image
  robot.txt          # crawler hints
  sitemap.xml        # static sitemap
utils/
  motion.utils.ts    # motion presets
```

## Getting Started

### Prerequisites

- Node.js 20.9+ (recommended: current active LTS)
- pnpm

### Install

```bash
pnpm install --frozen-lockfile
```

### Run locally

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start local dev server
- `pnpm build` - Build for production
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Jest in watch mode
- `pnpm test:ci` - Run Jest once (CI mode)
- `pnpm test:types` - Run TypeScript checks without emit

## Testing Notes

Jest and Testing Library are configured, but there are currently no test files in the repository.

## Deployment

The project is configured for typical Next.js deployment (e.g. Vercel).  
`@vercel/analytics` is mounted via `components/AnalyticsWrapper.tsx`.

## Content Updates

Most homepage content is component-driven and can be updated in:

- `components/Offerings.tsx`
- `components/SelectedWork.tsx`
- `components/OtherOfferings.tsx`
- `components/Testimonials.tsx`

SEO metadata is managed in `app/layout.tsx`.
