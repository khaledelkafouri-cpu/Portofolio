# Khaled Elsawy — Portfolio

Personal portfolio for Khaled Elsawy, Social Media Content Creator.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deployed on Vercel.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Local dev server                             |
| `npm run lint`      | ESLint                                       |
| `npm run typecheck` | Generates route types, then `tsc --noEmit`   |
| `npm run build`     | Production build                             |

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production domain (used for canonical URLs, Open Graph, sitemap and robots). On Vercel it falls back to the production deployment URL.

## Structure

```
app/                  routes: /, /work, /work/[slug], sitemap, robots, OG image
components/
  layout/             Header, SiteNav (only client component), Footer
  sections/           Homepage sections (Hero, Metrics, SelectedWork, Process, SkillsTools, About, ContactCTA)
  projects/           ProjectCard, ProjectMedia, ProjectBadge, ProjectGallery, CaseStudyHeader
  ui/                 Button, SectionHeading, Monogram, Icon
content/
  site.ts             Site copy, nav, metrics, process, skills, contact/social links, CV
  projects.ts         Project / case-study data (single source of truth)
public/assets/        Real project imagery
reference/            Design reference
```

## Editing content

- **Projects:** add or edit entries in `content/projects.ts`. Every project has 1 hero image + exactly 3 supporting images. Any image without a `src` renders as a labelled "image coming soon" placeholder — add the file to `public/assets/<project>/` and set `src`.
- **Contact, socials, CV:** set `email`, `socials[].href` and `cvUrl` in `content/site.ts`. The "Get In Touch" button, social links and "Download CV" button only render once these are set.
- **CV:** the downloadable PDF at `public/cv/khaled-elsawy-cv.pdf` is generated from `cv-source/khaled-elsawy-cv.html`. Edit the HTML, then run `node cv-source/render.mjs` (needs Playwright available). The public CV deliberately has no phone number; `PHONE="+44 …" OUT=private.pdf node cv-source/render.mjs` produces a private copy with one.
