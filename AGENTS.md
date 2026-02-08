# AI Agent Development Guide

> Comprehensive guide for AI assistants working on this repository

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Development Workflows](#development-workflows)
- [Code Conventions](#code-conventions)
- [Common Tasks](#common-tasks)
- [Build & Deployment](#build--deployment)
- [Important Files](#important-files)
- [Things to Watch Out For](#things-to-watch-out-for)

## Project Overview

**Project Name:** Luiz Gonzaga dos Santos Filho's CV
**Type:** Static Site Generator / Personal Portfolio
**Live URL:** https://luiz.dev
**Repository:** https://github.com/lfilho/cv

### Purpose

This is a professional resume website built with modern web technologies, featuring:

- **Standard CV view** at `/cv` - Concise professional resume
- **Verbose CV view** at `/cv/verbose` - Detailed career history
- **Blog section** at `/blog` - Technical articles with Markdown support
- **Projects showcase** at `/projects` - Portfolio of work
- **PDF export** at `/cv/pdf` - Auto-generated resume PDF
- **Booking page** at `/book-me` - Mentoring/consultation scheduling
- **RSS feed** - Syndication for blog content

### Key Features

- SEO optimized with Open Graph and Twitter Cards
- Mobile-responsive with print-optimized styles
- Dark mode support (system preference detection)
- Semantic HTML with hCard/vCard microformats
- Automatic PDF generation during build
- File-based routing for content
- Custom Markdoc tags for rich content embeds

## Technology Stack

### Core Framework

- **Astro v5.16.6** - Modern static site generator with island architecture
- **React v19.1.0** - UI component library for interactive elements
- **TypeScript v5.8.3** - Static type checking with strict mode

### Build Tools

- **Vite** - Fast bundler (via Astro)
- **Node.js** - JavaScript runtime (ES modules)
- **npm** - Package manager

### Styling

- **Tailwind CSS v4.1.3** - Utility-first CSS framework
- **PostCSS v8.4.49** - CSS transformation with autoprefixer
- **CSS Modules** - Component-scoped styling
- **CSS Variables** - Theme management (light/dark mode)

### Content Management

- **Markdoc v0.5.1** - Markdown with custom tag support
- **Gray Matter v4.0.3** - YAML frontmatter parsing
- **Zod v3.24.1** - Schema validation for content
- **Astro RSS** - Feed generation

### UI Libraries

- **FontAwesome v6.7.2** - Icon library (solid, brands, regular)
- **react-fontawesome** - React wrapper for icons

### PDF Generation

- **Playwright v1.55.1** - Headless Chromium for PDF export
- **Express v5.2.0** - Temporary HTTP server for rendering

### Code Quality

- **ESLint v9.24.0** - Linting with Astro and TypeScript support
- **Prettier v3.5.3** - Code formatting with Astro plugin
- **CodeQL** - Security analysis (GitHub Actions)

## Directory Structure

```
/home/user/cv/
├── .github/
│   └── workflows/              # CI/CD automation
│       ├── deploy.yml          # GitHub Pages deployment with PDF generation
│       └── codeql-analysis.yml # Security scanning
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── cv/                # CV-specific components (~1,346 lines)
│   │   │   ├── sections/      # CV sections (header, experience, education, skills, etc.)
│   │   │   │   ├── header/    # Contact information and personal details
│   │   │   │   ├── experience/# Work history with achievements
│   │   │   │   ├── education/ # Education and languages
│   │   │   │   ├── skills/    # Technical skills display
│   │   │   │   ├── noteworthy/# Notable achievements
│   │   │   │   └── books/     # Books read section
│   │   │   ├── css/           # CV-specific styles (normalize, base, print)
│   │   │   ├── cvData.ts      # ⚠️ CRITICAL: Structured CV data source
│   │   │   └── cvData.d.ts    # TypeScript types for CV data
│   │   ├── ui/                # Generic UI components
│   │   │   └── icons/         # SVG icon components
│   │   ├── PageMeta.astro     # SEO meta tags for pages
│   │   ├── BlogPostMeta.astro # SEO meta tags for blog posts
│   │   ├── Renderer.astro     # Markdoc content renderer
│   │   ├── CodeBlock.astro    # Syntax-highlighted code blocks
│   │   ├── TweetEmbed.astro   # Embedded tweets
│   │   ├── YouTubeEmbed.astro # Embedded YouTube videos
│   │   ├── CodePenEmbed.astro # CodePen embeds
│   │   └── GitHubGistEmbed.astro # GitHub gist embeds
│   │
│   ├── layouts/               # Page templates
│   │   ├── PageLayout.astro   # Standard page wrapper
│   │   ├── ContentLayout.astro# Blog/content layout with meta
│   │   ├── CV.astro           # CV layout with print styles
│   │   ├── BookMeLayout.astro # Booking page layout
│   │   └── Favicon.astro      # Favicon configuration
│   │
│   ├── pages/                 # ⚠️ File-based routing (creates URL routes)
│   │   ├── index.astro        # Home page (/)
│   │   ├── blog.astro         # Blog list (/blog)
│   │   ├── blog/[slug].astro  # Dynamic blog posts (/blog/:slug)
│   │   ├── projects.astro     # Projects list (/projects)
│   │   ├── cv/index.astro     # CV standard view (/cv)
│   │   ├── cv/verbose/        # Verbose CV (/cv/verbose)
│   │   ├── book-me/           # Booking page (/book-me)
│   │   └── rss.xml.ts         # RSS feed generation
│   │
│   ├── lib/                   # Utility functions (~285 lines)
│   │   ├── seo.ts             # SEO meta tag generation
│   │   ├── career-tenure.ts   # Calculate years in career
│   │   ├── is-verbose-mode.ts # Detect verbose CV mode from URL
│   │   ├── pdf-details.js     # PDF output path configuration
│   │   ├── pdf-generator.js   # ⚠️ PDF generation script (postbuild)
│   │   ├── array-to-html-list.jsx # Convert arrays to HTML lists
│   │   ├── anchored-header.jsx# Headers with anchor links
│   │   └── markdoc/           # Markdoc configuration
│   │       ├── markdoc.config.ts  # Custom tags & transformations
│   │       ├── read.ts            # File reading utilities
│   │       └── frontmatter.schema.ts # Zod schemas for content validation
│   │
│   ├── styles/                # Global stylesheets
│   │   ├── global.css         # Global theme, CSS variables, dark mode
│   │   ├── markdown.css       # Markdown element styling
│   │   └── main-page.css      # Homepage-specific styles
│   │
│   └── config.ts              # ⚠️ Site configuration (title, URL, social)

├── content/                   # Content files (Markdown with frontmatter)
│   ├── blog/                  # Blog posts (5 files)
│   │   └── *.md               # Posts with YAML frontmatter
│   └── projects/              # Project showcases (3 files)
│       └── *.md               # Projects with metadata

├── public/                    # Static assets (copied to dist/)
│   ├── cv/pdf/               # ⚠️ Generated PDF files (git-tracked)
│   ├── img/                  # Images and graphics
│   ├── favicon.svg           # SVG favicon
│   ├── favicon.png           # PNG fallback favicon
│   └── CNAME                 # GitHub Pages custom domain

├── .vscode/                  # VS Code editor settings
│   ├── settings.json         # Spell checker with technical terms
│   ├── extensions.json       # Recommended extensions
│   ├── launch.json           # Debug configuration
│   └── tasks.json            # Build tasks

├── Configuration Files
│   ├── astro.config.mjs      # ⚠️ Astro build config (port, integrations, redirects)
│   ├── tsconfig.json         # ⚠️ TypeScript config (paths, strict mode)
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── postcss.config.cjs    # PostCSS with autoprefixer
│   ├── .eslintrc.cjs         # ⚠️ ESLint rules (Astro, TypeScript)
│   ├── .prettierrc.mjs       # ⚠️ Code formatting rules
│   ├── .prettierignore       # Files to skip formatting
│   ├── .gitignore            # Git ignore patterns
│   ├── package.json          # ⚠️ Dependencies and npm scripts
│   ├── package-lock.json     # Locked dependency versions
│   ├── post-install.js       # Post-install patch script
│   └── README.md             # Project documentation
```

**Legend:**

- ⚠️ = Critical file - read before modifying
- Lines of code estimates provided where relevant

## Development Workflows

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/lfilho/cv.git
cd cv

# Install dependencies (includes Playwright browsers)
npm install

# Start development server on port 9000
npm run dev
# or
npm start
```

### Development Server

```bash
npm run dev
```

- Runs on `http://localhost:9000` (configured in `astro.config.mjs:18`)
- Hot module replacement (HMR) enabled
- TypeScript checking in real-time
- Tailwind CSS compilation

### Code Quality

```bash
# Format and lint code
npm run lint

# This runs:
# 1. Prettier (formats all .js, .jsx, .ts, .tsx, .md, .mdx, .astro files)
# 2. ESLint (lints and auto-fixes src/ directory)
```

**Important:** Always run `npm run lint` before committing.

### Building for Production

```bash
# Build static site
npm run build

# This process:
# 1. Compiles Astro components to static HTML
# 2. Bundles React components
# 3. Processes Tailwind CSS
# 4. Optimizes assets
# 5. Generates sitemap
# 6. Runs postbuild hook (PDF generation)
# Output: dist/ directory
```

### PDF Generation

PDF generation happens automatically during `npm run build` via the `postbuild` hook:

```bash
# Manual PDF generation (if needed)
node src/lib/pdf-generator.js
```

**How it works:**

1. Starts Express server on ephemeral port
2. Serves the built site from `dist/`
3. Uses Playwright/Chromium to render `/cv` page
4. Exports as PDF with print styles applied
5. Saves to `public/cv/pdf/Luiz_Filho_-_Software_Engineering_Leadership_Resume.pdf`
6. Closes server

**Important:** The PDF is committed to git and deployed to GitHub Pages.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

## Code Conventions

### TypeScript Usage

- **Strict mode enabled** (`tsconfig.json:26`)
- Use TypeScript for all new files (`.ts`, `.tsx`, `.astro`)
- Prefer interfaces over types for object shapes
- Use path aliases for imports:
    - `@pages/*` → `src/pages/*`
    - `@components/*` → `src/components/*`
    - `@layouts/*` → `src/layouts/*`
    - `@lib/*` → `src/lib/*`

**Example:**

```typescript
// Good
import PageLayout from '@layouts/PageLayout.astro';
import { getSEOTags } from '@lib/seo';

// Avoid
import PageLayout from '../../layouts/PageLayout.astro';
```

### File Naming

- **Components:** PascalCase (e.g., `PageLayout.astro`, `CodeBlock.astro`)
- **Utilities:** camelCase (e.g., `career-tenure.ts`, `pdf-generator.js`)
- **Content:** kebab-case (e.g., `hello-world.md`, `extended-markdown-style-guide.md`)
- **Types:** `.d.ts` for type declarations (e.g., `cvData.d.ts`)

### Component Architecture

#### Astro Components (.astro)

Use for static, server-side rendered content:

```astro
---
// Frontmatter (runs at build time)
import Layout from '@layouts/PageLayout.astro';
const title = 'My Page';
---

<Layout title={title}>
    <h1>{title}</h1>
    <p>Static content rendered at build time.</p>
</Layout>
```

#### React Components (.tsx, .jsx)

Use for interactive, client-side features:

```tsx
// src/components/InteractiveCounter.tsx
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**In Astro file:**

```astro
---
import Counter from '@components/InteractiveCounter.tsx';
---

<Counter client:load />
```

**Island directives:**

- `client:load` - Load immediately
- `client:idle` - Load when browser idle
- `client:visible` - Load when visible in viewport
- `client:only="react"` - Only render on client

### Styling Conventions

1. **Tailwind-first approach:** Use utility classes for most styling
2. **Component CSS:** Create `.css` files alongside components when needed
3. **Global styles:** Use `src/styles/` for theme variables and resets
4. **CSS Variables:** Define in `:root` for theme consistency

**Example:**

```astro
---
import './MyComponent.css'; // Component-scoped styles
---

<div class='flex items-center gap-4 text-primary'>
    <!-- Tailwind utilities -->
    <span class='custom-badge'>Badge</span>
    <!-- Custom CSS class -->
</div>

<style>
    /* Astro scoped styles (auto-scoped to component) */
    .custom-badge {
        padding: 0.5rem 1rem;
        background: var(--color-accent);
    }
</style>
```

### Code Formatting

**Prettier configuration (`.prettierrc.mjs`):**

- **Tab width:** 4 spaces
- **Line width:** 130 characters
- **Quotes:** Single quotes (including JSX)
- **Arrow functions:** Avoid parentheses when possible
- **HTML whitespace:** Ignore for cleaner formatting

**ESLint configuration (`.eslintrc.cjs`):**

- Astro recommended rules
- TypeScript parser
- JSX A11y accessibility checks

### Content Conventions

#### Blog Posts

Location: `content/blog/*.md`

**Frontmatter schema:**

```yaml
---
title: 'Post Title'
description: 'Short description for SEO'
publishedDate: 2026-02-08
tags: ['javascript', 'react']
draft: false # Set to true to hide from production
---
# Markdown content here
```

#### Projects

Location: `content/projects/*.md`

**Frontmatter schema:**

```yaml
---
title: 'Project Name'
description: 'Project description'
url: 'https://example.com'
---
# Project details in Markdown
```

### Custom Markdoc Tags

Use custom tags for rich embeds:

```markdown
{% youtube id="dQw4w9WgXcQ" /%}

{% tweet url="https://twitter.com/user/status/123" /%}

{% codepen user="username" id="abcdef" /%}

{% githubgist id="abc123..." /%}
```

Configuration: `src/lib/markdoc/markdoc.config.ts`

## Common Tasks

### Adding a New Page

1. Create file in `src/pages/` (filename = route)
2. Use `.astro` extension for static pages
3. Import and use a layout component
4. Add meta tags with `<PageMeta />` component

**Example:**

```astro
---
// src/pages/about.astro
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

### Adding a New Blog Post

1. Create `content/blog/my-new-post.md`
2. Add frontmatter (title, description, date, tags)
3. Write content in Markdown
4. Set `draft: false` when ready to publish
5. Build to see it in blog list

**Example:**

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

### Modifying CV Data

**Location:** `src/components/cv/cvData.ts`

This file contains all CV content as structured TypeScript data:

```typescript
export const cvData = {
    personalInfo: {
        /* ... */
    },
    experience: [
        /* ... */
    ],
    education: [
        /* ... */
    ],
    skills: [
        /* ... */
    ],
    // etc.
};
```

**Steps:**

1. Read `src/components/cv/cvData.ts` to understand structure
2. Read `src/components/cv/cvData.d.ts` for type definitions
3. Modify data in `cvData.ts`
4. TypeScript will validate structure
5. Run `npm run build` to regenerate PDF
6. Check `public/cv/pdf/` for updated PDF

### Adding a New CV Section

1. Create component in `src/components/cv/sections/<name>/`
2. Import and use in `src/pages/cv/index.astro` or verbose version
3. Add corresponding data to `cvData.ts`
4. Update types in `cvData.d.ts`
5. Apply print styles if needed (see `src/components/cv/css/print.css`)

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update specific package
npm update <package-name>

# Update all packages (careful!)
npm update

# After updating, test thoroughly
npm run build
npm run preview
```

**Important:** Test PDF generation after updating Playwright or Astro.

### Adding New Routes

File-based routing in `src/pages/`:

- `pages/about.astro` → `/about`
- `pages/blog/[slug].astro` → `/blog/:slug` (dynamic)
- `pages/api/data.json.ts` → `/api/data.json` (endpoint)

**Dynamic routes:**

```astro
---
// pages/blog/[slug].astro
export async function getStaticPaths() {
    return [{ params: { slug: 'post-1' } }, { params: { slug: 'post-2' } }];
}

const { slug } = Astro.params;
---

<h1>Post: {slug}</h1>
```

## Build & Deployment

### GitHub Actions Workflow

**File:** `.github/workflows/deploy.yml`

**Trigger:**

- Push to `main` branch
- Manual workflow dispatch

**Process:**

1. Checkout repository
2. Install dependencies with `@astrojs/action@v4`
3. Build site (`npm run build`)
4. Run postbuild hook (PDF generation)
5. Commit updated PDF to repository (requires `GH_TOKEN` secret)
6. Deploy to GitHub Pages (`actions/deploy-pages@v4`)

**Permissions required:**

- `contents: write` (commit PDF)
- `pages: write` (deploy to Pages)
- `id-token: write` (OIDC authentication)

**Concurrency:** Only one deployment at a time (cancels in-progress builds)

### Security Scanning

**File:** `.github/workflows/codeql-analysis.yml`

**Trigger:**

- Push to `main`
- Pull requests
- Weekly schedule (Fridays at 19:45 UTC)

**Analysis:** JavaScript/TypeScript security vulnerabilities

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy dist/ directory to hosting provider
# (GitHub Pages handles this automatically)
```

### Environment Variables

**Build-time:**

- `npm_lifecycle_script` - Used to detect build vs. dev mode
- `BASE_URL` - Derived from build context (localhost or production)

**GitHub Secrets (for Actions):**

- `GH_TOKEN` - Required for committing PDF changes

### Custom Domain

**File:** `public/CNAME`

Contains: `luiz.dev`

This file ensures GitHub Pages uses the custom domain.

## Important Files

### Configuration Files

| File                 | Purpose                                           | Modify When                                                    |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------- |
| `astro.config.mjs`   | Astro build config, port, integrations, redirects | Adding integrations, changing server port, modifying redirects |
| `tsconfig.json`      | TypeScript config, path aliases, strict mode      | Adding path aliases, adjusting type checking                   |
| `tailwind.config.js` | Tailwind theme, plugins, content paths            | Customizing design tokens, adding plugins                      |
| `package.json`       | Dependencies, scripts, project metadata           | Adding dependencies, modifying scripts                         |
| `.eslintrc.cjs`      | Linting rules                                     | Adjusting code quality standards                               |
| `.prettierrc.mjs`    | Code formatting rules                             | Changing formatting preferences                                |
| `src/config.ts`      | Site metadata (title, URL, social links)          | Updating site information                                      |

### Data Files

| File                            | Purpose                                         | Modify When                                   |
| ------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| `src/components/cv/cvData.ts`   | **PRIMARY CV DATA SOURCE** - All resume content | Updating CV information, work history, skills |
| `src/components/cv/cvData.d.ts` | TypeScript types for CV data                    | Adding new CV fields or sections              |
| `content/blog/*.md`             | Blog post content                               | Publishing new articles                       |
| `content/projects/*.md`         | Project showcase content                        | Adding portfolio items                        |

### Build Scripts

| File                       | Purpose                             | Modify When                                   |
| -------------------------- | ----------------------------------- | --------------------------------------------- |
| `src/lib/pdf-generator.js` | PDF generation after build          | Changing PDF output path, styling, or options |
| `src/lib/pdf-details.js`   | PDF path configuration              | Changing PDF filename or location             |
| `post-install.js`          | Post-install patch for dependencies | Fixing dependency issues                      |

### Layout & Components

| File                                | Purpose                          | Use When                   |
| ----------------------------------- | -------------------------------- | -------------------------- |
| `src/layouts/CV.astro`              | CV page layout with print styles | Creating CV pages          |
| `src/layouts/PageLayout.astro`      | Standard page wrapper            | Creating static pages      |
| `src/layouts/ContentLayout.astro`   | Blog/content layout              | Creating blog-style pages  |
| `src/components/PageMeta.astro`     | SEO meta tags                    | Adding meta tags to pages  |
| `src/components/BlogPostMeta.astro` | Blog-specific meta tags          | Blog posts with Open Graph |

## Things to Watch Out For

### Critical Patterns

#### 1. PDF Generation Requires Built Site

The PDF generator (`src/lib/pdf-generator.js`) must run AFTER `npm run build`:

```bash
# Correct order (handled by postbuild hook)
npm run build  # First build the site
# Then postbuild automatically runs pdf-generator.js

# If running manually
npm run build
node src/lib/pdf-generator.js
```

**Why:** Playwright needs the built static files to render the PDF.

#### 2. Path Aliases in TypeScript

Always use path aliases for cleaner imports:

```typescript
// Good
import { cvData } from '@components/cv/cvData';

// Bad (brittle, hard to refactor)
import { cvData } from '../../../components/cv/cvData';
```

#### 3. Astro vs React Components

**Use Astro (`.astro`) for:**

- Static content
- Server-side rendering
- Layouts and pages
- SEO-critical content

**Use React (`.tsx`) for:**

- Interactive features (forms, toggles, animations)
- Client-side state management
- Real-time updates

**Never:** Import Astro components into React components (not supported).

#### 4. Frontmatter Validation

All blog posts and projects require valid frontmatter:

```yaml
---
title: 'Required'
description: 'Required for SEO'
publishedDate: 2026-02-08 # Required for blog posts
tags: ['optional']
draft: false # Optional, defaults to false
---
```

**Validation:** Zod schemas in `src/lib/markdoc/frontmatter.schema.ts`

#### 5. Print Styles for PDF

CV components include print-specific CSS:

```css
/* src/components/cv/css/print.css */
@media print {
    .no-print {
        display: none;
    }
    /* Page break controls */
    .page-break-after {
        page-break-after: always;
    }
}
```

When modifying CV layout, test PDF output:

```bash
npm run build
open public/cv/pdf/Luiz_Filho_-_Software_Engineering_Leadership_Resume.pdf
```

#### 6. Dark Mode Support

The site supports system preference detection:

```css
/* src/styles/global.css */
:root {
    --color-primary: #333;
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-primary: #fff;
    }
}
```

Always use CSS variables for colors to support both modes.

#### 7. SEO Meta Tags

Every page needs proper meta tags:

```astro
---
import PageMeta from '@components/PageMeta.astro';
---

<Layout>
    <PageMeta slot='meta' title='Page Title' description='Page description for search engines' />
    <!-- page content -->
</Layout>
```

**Why:** Critical for search engine ranking and social media sharing.

#### 8. File-Based Routing

Routes are determined by file location:

```
src/pages/about.astro        → /about
src/pages/blog/index.astro   → /blog
src/pages/blog/[slug].astro  → /blog/:slug (dynamic)
src/pages/cv/index.astro     → /cv
src/pages/cv/verbose/index.astro → /cv/verbose
```

**Deleting a file removes the route.**

#### 9. Static Assets

Files in `public/` are copied as-is to the root of `dist/`:

```
public/favicon.svg      → /favicon.svg (not /public/favicon.svg)
public/img/photo.jpg    → /img/photo.jpg
```

Reference in code:

```astro
<img src='/img/photo.jpg' alt='Photo' />
```

#### 10. Post-Install Script

`post-install.js` patches the `unicorn-magic` module for ES module compatibility:

```javascript
// post-install.js
// Patches node_modules/unicorn-magic/package.json
// Adds "type": "module" to fix import issues
```

**Don't delete this file** - it prevents build errors.

### Common Pitfalls

#### ❌ Modifying PDF Output Without Rebuild

```bash
# Wrong - changes won't appear in PDF
# Edit cvData.ts
# Check public/cv/pdf/*.pdf (unchanged!)

# Correct
# Edit cvData.ts
npm run build  # Regenerates PDF
```

#### ❌ Using Relative Imports Instead of Aliases

```typescript
// Bad
import Layout from '../../../layouts/PageLayout.astro';

// Good
import Layout from '@layouts/PageLayout.astro';
```

#### ❌ Forgetting to Set Draft Status

```yaml
---
title: 'Work in Progress'
draft: true # ⚠️ Set to false when ready to publish
---
```

#### ❌ Not Testing Print Styles

Always test PDF output after modifying CV components:

```bash
npm run build
open public/cv/pdf/*.pdf
```

#### ❌ Breaking SEO with Missing Meta Tags

```astro
<!-- Wrong - no SEO meta tags -->
<Layout>
    <h1>My Page</h1>
</Layout>

<!-- Correct -->
<Layout>
    <PageMeta slot='meta' title='My Page' description='Description' />
    <h1>My Page</h1>
</Layout>
```

### Testing Checklist

Before committing changes:

- [ ] Run `npm run lint` - Code formatted and linted
- [ ] Run `npm run build` - Build succeeds without errors
- [ ] Run `npm run preview` - Preview works correctly
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test print styles (Cmd/Ctrl+P in browser)
- [ ] Check PDF output (`public/cv/pdf/*.pdf`)
- [ ] Verify dark mode (toggle system preference)
- [ ] Test all modified routes
- [ ] Check browser console for errors
- [ ] Validate HTML (optional but recommended)

### Performance Considerations

1. **Images:** Optimize before adding to `public/img/`
2. **Dependencies:** Minimize bundle size (check with `npm run build`)
3. **Client-side JS:** Use React islands sparingly
4. **Fonts:** Already optimized with system fonts
5. **CSS:** Tailwind purges unused styles automatically

### Security Notes

- ✅ CodeQL security scanning enabled
- ✅ Dependencies updated regularly (Dependabot recommended)
- ✅ No sensitive data in repository
- ✅ HTTPS enforced (GitHub Pages + custom domain)
- ⚠️ Review third-party embeds (YouTube, Twitter, etc.)

## Getting Help

### Resources

- **Astro Docs:** https://docs.astro.build
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com
- **Markdoc Docs:** https://markdoc.dev
- **TypeScript Docs:** https://www.typescriptlang.org

### Repository

- **Issues:** https://github.com/lfilho/cv/issues
- **Repository:** https://github.com/lfilho/cv

### Debugging

```bash
# Verbose Astro build output
npm run build -- --verbose

# Type checking
npx tsc --noEmit

# Check for ESLint errors (without auto-fix)
npx eslint src/**/*.{js,ts,jsx,tsx,astro}

# Clear cache and rebuild
rm -rf dist/ node_modules/.astro/
npm run build
```

---

**Last Updated:** 2026-02-08
**Version:** 1.0.0

This guide is maintained for AI assistants working on this repository. Keep it up-to-date as the project evolves.
