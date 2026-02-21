# ashmidgley.io

Personal portfolio site for Ash Midgley, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Overview

This project powers [ashmidgley.io](https://ashmidgley.io), a freelance software engineering portfolio.  
It highlights:

- Previous work experience
- Selected client work
- Contact call-to-action with email link

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Custom portfolio tiles (experience + selected work)
- Vercel Analytics
- Jest + Testing Library (configured)

## Routes

- `/` - Main landing page (experience and selected work)

## Project Structure

```text
app/
  layout.tsx         # global layout + metadata + nav/footer
  page.tsx           # homepage composition
components/
  PreviousExperience.tsx
  SelectedWork.tsx
  WorkWithMe.tsx
  ProjectSummary.tsx
  __tests__/         # component tests
public/
  images/            # portfolio screenshots
  fonts/             # Sharp Grotesk local fonts
  og.jpg             # Open Graph image
  robot.txt          # crawler hints
  sitemap.xml        # static sitemap
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

Current coverage focuses on homepage content sections:

- `components/__tests__/PreviousExperience.test.tsx`
- `components/__tests__/SelectedWork.test.tsx`
- `components/__tests__/WorkWithMe.test.tsx`

Run all tests with:

```bash
pnpm test:ci
```

## Deployment

The project is configured for typical Next.js deployment (e.g. Vercel).  
`@vercel/analytics` is mounted via `components/AnalyticsWrapper.tsx`.

## Content Updates

Most homepage content is component-driven and can be updated in:

- `components/PreviousExperience.tsx`
- `components/SelectedWork.tsx`
- `components/WorkWithMe.tsx`

SEO metadata is managed in `app/layout.tsx`.
