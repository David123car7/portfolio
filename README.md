# David Carvalho — Personal Portfolio

My personal portfolio website — showcasing my projects, experience, and
background.

## Built With

- [Astro](https://astro.build/) — the site framework
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- A few interactive [React](https://react.dev/) islands (hero animation, skills list)
- [Formspree](https://formspree.io/) for the contact form

## Features

- Animated hero / intro
- **Experience** timeline, data-driven from `src/data/experience.ts`
- **Projects** — a preview on the homepage plus a dedicated `/projects` page
  with category filtering and expandable **case-study** detail modals,
  data-driven from `src/data/projects.ts`
- Contact form wired to Formspree
- Sticky navigation with scroll-spy section highlighting
- Responsive, dark, minimal design

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (enforced by an `only-allow` preinstall hook)

### Install & run

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

Other scripts:

```bash
pnpm build     # production build (runs `astro check` first)
pnpm preview   # preview the production build locally
```

## Deployment

Built with Astro; deploys cleanly to Vercel, Netlify, or any static host —
push to GitHub and import the repo.

## Project Structure

```text
public/
└── svg/                     # tech-stack + brand icons
src/
├── components/
│   ├── CaseStudyModal.astro
│   ├── Experience.astro
│   ├── ProjectCard.astro
│   ├── contact.astro
│   ├── footer.astro
│   ├── home.astro
│   ├── logoWall.astro
│   ├── nav.astro
│   └── projects.astro
├── data/
│   ├── experience.ts
│   └── projects.ts
├── layouts/
│   └── Layout.astro
├── React/
│   ├── LetterGlitch.tsx
│   └── SkillsList.tsx
└── pages/
    ├── index.astro
    └── projects.astro
```

## Credits

This site is based on the **[Dark Minimal](https://github.com/Gothsec/dark-minimal)**
theme by [Gothsec](https://github.com/Gothsec), used under the MIT License.

All content is my own. Work added or reworked on top of the original theme:

- **Experience** section and its data file
- Expanded **Projects**: a dedicated `/projects` page with category filters
  and case-study detail modals, backed by a structured data file
- Rewritten navigation (real multi-page routing + scroll-spy)
- Custom tech-stack icons, updated copy, social links, and a live contact form
- Removed template extras that weren't needed (Spotify embed, like button)

## License

Based on Dark Minimal, licensed under the [MIT License](https://opensource.org/licenses/MIT).
