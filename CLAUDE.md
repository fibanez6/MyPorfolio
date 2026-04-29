# MyPortfolio

Personal portfolio website built with Next.js, Chakra UI, and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (Pages Router, NOT App Router)
- **UI Library**: Chakra UI v2 with custom theme (`styles/theme/`)
- **Language**: TypeScript 5
- **Styling**: SCSS (`styles/globals.scss`) + Chakra theme system
- **Animations**: motion (framer-motion successor), tsparticles, typed.js
- **Forms**: Formik + Yup validation
- **Dates**: date-fns for all date formatting
- **Markdown**: react-markdown + rehype-raw + remark-gfm + markdown-it (API)

## Project Structure

```
pages/              # Next.js pages (Pages Router)
  api/              # API routes (download-resume, email)
  articles/         # Article listing + [slug] dynamic pages
  index.tsx         # Homepage with all sections
  _app.tsx          # App wrapper (Chakra, SEO, GTM)
  _document.tsx     # Custom document with ColorModeScript
components/
  scenes/           # Page sections (Hero, About, Experience, etc.)
  layout/           # Layout components (Section)
  app/              # ChakraApp provider
  form/             # Form field components
  flyThrough/       # FlyThrough text animation
  google/           # Google Tag Manager
content/            # Markdown content (jobs, articles, resume)
styles/theme/       # Chakra UI theme (colors, components, keyframes)
hooks/              # Custom React hooks
types/              # TypeScript type definitions
utils/              # Utility functions
```

## Key Patterns

- **Dynamic imports**: Page sections are dynamically imported via `utils/constants.ts` SECTIONS config
- **Chakra theme**: Custom color palette (primary/secundary/tertiary), component variants in `styles/theme/components/`
- **Content**: Jobs and articles are markdown files parsed with `gray-matter` at build time via `getStaticProps`
- **SEO**: Uses `next-seo` for meta tags, configured via `content/seo-data.json`

## Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm start            # Start production server
npm test             # Run Jest tests
npm run lint         # Next.js lint
npm run eslint       # ESLint with report-unused-disable-directives
npm run prettier     # Format all files
npm run stylelint    # Lint SCSS files
```

## Coding Conventions

- Use `type` imports: `import type { X } from 'y'`
- Explicit function return types (enforced by ESLint)
- Import sorting via `eslint-plugin-simple-import-sort`
- Components use Chakra UI primitives (Box, Flex, Stack, etc.)
- All components have `'use client'` directive when using hooks/interactivity
- Color mode support: always use `useColorModeValue()` for light/dark theming

## Environment Variables

Required env vars (see `env.local.example`):

- `EMAIL_JS_*` — EmailJS integration for contact form
- `G_TAG_MANAGER` — Google Tag Manager ID
