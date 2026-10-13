# Common Tasks

Step-by-step guides for routine changes.

## Adding a New Page

1. Create a file in `src/pages/` (filename = route).
2. Use `.astro` extension.
3. Import and use a layout component.
4. Add meta tags with `<PageMeta />`.

```astro
---
import PageLayout from '@layouts/PageLayout.astro';
import PageMeta from '@components/PageMeta.astro';
---

<PageLayout>
  <PageMeta slot='meta' title='About' description='About this site' />
  <h1>About</h1>
  <p>Content here</p>
</PageLayout>
```

Route: `https://luiz.dev/about`

## Adding a New Blog Post

1. Create `src/content/blog/my-new-post.mdoc`.
2. Add frontmatter.
3. Write Markdown content.
4. Set `draft: false` when ready to publish.
5. Build to see it in the blog list.

```markdown
---
title: 'My New Post'
description: 'A great article about something'
publishedDate: 2026-02-08
tags: ['tutorial', 'astro']
draft: false
---

# My New Post

Content goes here...
```

## Modifying CV Data

All CV content lives in `src/components/cv/cvData.ts` as structured TypeScript data.

1. Read `cvData.ts` to understand the structure.
2. Read `cvData.d.ts` for type definitions.
3. Modify the data.
4. TypeScript validates the structure.
5. Run `npm run build` to regenerate the PDF.
6. Check `public/cv/pdf/` for the updated PDF.

## Adding a New CV Section

1. Create a component in `src/components/cv/sections/<name>/`.
2. Import and use it in `src/pages/cv/index.astro` or the verbose version.
3. Add corresponding data to `cvData.ts`.
4. Update types in `cvData.d.ts` if needed.
5. Apply print styles in `src/components/cv/css/print.css` if needed.

## Updating Dependencies

```bash
npm outdated                    # check for updates
npm update <package-name>       # update one package
npm update                      # update all packages
npm run build                   # test thoroughly after updates
npm run preview
```

**Important:** test PDF generation after updating Playwright or Astro.

## Adding New Routes

Routes are determined by file location:

- `pages/about.astro` → `/about`
- `pages/blog/index.astro` → `/blog`
- `pages/blog/[slug].astro` → `/blog/:slug`
- `pages/api/data.json.ts` → `/api/data.json`

Dynamic routes example:

```astro
---
export async function getStaticPaths() {
  return [{ params: { slug: 'post-1' } }, { params: { slug: 'post-2' } }];
}

const { slug } = Astro.params;
---

<h1>Post: {slug}</h1>
```

## Travel Map

Places live in `src/components/travel-map/travelData.ts` (flat `TravelPlace[]`). The map, the
`Places` tree and the `Stats` tab of the floating panel all derive from that array at render
time — nothing else needs editing when a place is added.

Stats shown in the `Stats` tab (places, visited/lived, continents, countries, regions,
hemispheres, extremes, top countries, cities lived in, world coverage) come from
`computeTravelStats()` in `src/components/travel-map/travelStats.ts`. That function is pure and
deterministic: no dates, randomness, locale-aware sorting or I/O, so the same places always
produce the same numbers.

To print the same numbers from the terminal:

```bash
npm run travel:stats           # aligned text report
npm run travel:stats -- --json # machine-readable
```

The report only reads; it never writes, so re-running it any number of times is safe and prints
byte-identical output for unchanged data. There is no snapshot to regenerate or commit.

## Testing Checklist

Before committing:

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run `npm run preview`.
- [ ] Test responsive design (mobile, tablet, desktop).
- [ ] Test print styles (`Cmd/Ctrl+P`).
- [ ] Check PDF output (`public/cv/pdf/*.pdf`).
- [ ] Verify dark mode (toggle system preference).
- [ ] Test all modified routes.
- [ ] Check browser console for errors.
- [ ] Validate HTML (optional).
