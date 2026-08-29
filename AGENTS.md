# AI Agent Quick Reference

Read this first. Details: [docs/tech-and-structure.md](docs/tech-and-structure.md), [docs/common-tasks.md](docs/common-tasks.md), [docs/build-deployment.md](docs/build-deployment.md), [docs/getting-help.md](docs/getting-help.md).

## Quick Start

```bash
npm run dev     # localhost:9000
npm run build   # production + PDF
npm run preview # serve production build
npm run lint    # format + lint; run before every commit
```

Golden rules:

- Always run `npm run lint` before committing.
- CV changes → run `npm run build` to regenerate PDF.
- Use TypeScript path aliases: `@components/*`, `@layouts/*`, `@lib/*`.
- Astro for static/server; React only for interactivity.
- Conventional Commits enforced by Husky hook.

## Project

Astro + React + TypeScript + Tailwind static site.
Routes: `/cv`, `/cv/verbose`, `/cv/md`, `/blog`, `/projects`, `/book-me`, `/cv/pdf`.
PDF generated automatically during `npm run build`.

## Critical Files

| File                          | Why                  |
| ----------------------------- | -------------------- |
| `src/components/cv/cvData.ts` | All CV content       |
| `astro.config.mjs`            | Build config         |
| `package.json`                | Scripts/deps         |
| `tsconfig.json`               | Paths, strict mode   |
| `src/content.config.ts`       | Blog/project schemas |
| `src/lib/pdf-generator.js`    | PDF generation       |
| `src/config.ts`               | Site metadata        |

## Conventions

- TypeScript strict; use interfaces for shapes.
- Path aliases only — no `../../`.
- File naming: components PascalCase, utilities camelCase, content kebab-case.
- Tailwind-first; CSS variables for colors (dark mode).
- Prettier: 4 spaces, 130 cols, single quotes.
- Conventional Commits: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

## Common Pitfalls

- Build before generating PDF; Playwright needs `dist/`.
- CV edits need `npm run build` to update `public/cv/pdf/`.
- Use path aliases, not relative imports.
- Blog/project `.mdoc` files need valid frontmatter.
- Test print styles after CV layout changes.
- Use CSS variables for color theming.
- Every page needs `<PageMeta />` for SEO.
- Deleting a `src/pages/` file removes its route.
- `public/` assets map to root of `dist/`.

## Full Guides

- [Technology Stack & Directory Structure](docs/tech-and-structure.md)
- [Common Tasks](docs/common-tasks.md)
- [Build & Deployment](docs/build-deployment.md)
- [Getting Help](docs/getting-help.md)
