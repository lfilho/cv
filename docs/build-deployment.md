# Build & Deployment

How the site is built, how the PDF is generated, and how it deploys.

## Building for Production

```bash
npm run build
```

This process:

1. Compiles Astro components to static HTML.
2. Bundles React components.
3. Processes Tailwind CSS.
4. Optimizes assets.
5. Generates a sitemap.
6. Runs the `postbuild` hook to generate the PDF.

Output goes to `dist/`.

## PDF Generation

PDF generation happens automatically during `npm run build` via the `postbuild` hook.

To run it manually:

```bash
npm run build
node src/lib/pdf-generator.js
```

How it works:

1. Starts an Express server on an ephemeral port.
2. Serves the built site from `dist/`.
3. Uses Playwright/Chromium to render the `/cv` page.
4. Exports the page as a PDF with print styles.
5. Saves to `public/cv/pdf/Luiz_Filho_-_Software_Engineering_Leadership_Resume.pdf`.
6. Closes the server.

**Important:** the PDF is committed to git and deployed to Cloudflare Pages. Always run `npm run build` after CV changes.

## Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

## GitHub Actions Deployment

**File:** `.github/workflows/deploy.yml`

**Triggers:**

- Push to `main` that changes site-related files
- Manual workflow dispatch

**Process:**

1. Checkout repository.
2. Install dependencies with `@astrojs/action@v4`.
3. Build the site (`npm run build`).
4. Run the postbuild PDF generation hook.
5. Deploy to Cloudflare Pages with `cloudflare/pages-action@v1`.
6. Commit the updated PDF to the repository (requires `GH_TOKEN`).

**Required permissions:**

- `contents: write` — to commit the PDF

**Concurrency:** only one deployment runs at a time.

## Security Scanning

**File:** `.github/workflows/codeql-analysis.yml`

**Triggers:** push to `main`, pull requests, weekly schedule.

**Analysis:** JavaScript/TypeScript security vulnerabilities.

## Manual Deployment

```bash
npm run build
```

The GitHub Actions workflow deploys automatically after the workflow pushes the PDF.

## Environment Variables

**Build-time:**

- `npm_lifecycle_script` — used to detect build vs. dev mode.
- `BASE_URL` — derived from build context (localhost or production).

## GitHub Secrets

- `GH_TOKEN` — required for committing PDF changes from Actions.
- `CLOUDFLARE_API_TOKEN` — required for deploying to Cloudflare Pages.
- `CLOUDFLARE_ACCOUNT_ID` — required for deploying to Cloudflare Pages.
- `CLOUDFLARE_PAGES_PROJECT_NAME` — the Cloudflare Pages project name.

## Custom Domain

The custom domain `luiz.dev` is configured in the Cloudflare Pages dashboard. The `public/CNAME` file is left in place for backwards compatibility but is no longer required.

## Performance Considerations

1. Optimize images before adding to `public/img/`.
2. Minimize bundle size (check with `npm run build`).
3. Use React islands sparingly.
4. Fonts are already optimized with system fonts.
5. Tailwind purges unused styles automatically.

## Security Notes

- ✅ CodeQL security scanning enabled.
- ✅ Dependencies updated regularly (Dependabot recommended).
- ✅ No sensitive data in the repository.
- ✅ HTTPS enforced via Cloudflare + custom domain.
- ⚠️ Review third-party embeds (YouTube, Twitter, etc.).
