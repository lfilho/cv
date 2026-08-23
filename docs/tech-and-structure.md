# Technology Stack & Directory Structure

Detailed reference for the technologies and file layout used in this project.

## Technology Stack

### Core Framework

- **Astro** — static site generator with island architecture
- **React** — interactive UI components
- **TypeScript** — strict mode enabled

### Build Tools

- **Vite** — bundler (via Astro)
- **Node.js** — ES modules runtime
- **npm** — package manager

### Styling

- **Tailwind CSS** — utility-first framework
- **PostCSS + autoprefixer** — CSS transformation
- **CSS Modules** — component-scoped styles
- **CSS Variables** — light/dark theme management

### Content Management

- **Markdoc** — Markdown with custom tags
- **Gray Matter** — frontmatter parsing
- **Zod** — schema validation
- **Astro RSS** — feed generation

### UI Libraries

- **FontAwesome** — icons (solid, brands, regular)
- **react-fontawesome** — React wrapper

### PDF Generation

- **Playwright** — headless Chromium for PDF export
- **Express** — temporary server for rendering

### Code Quality

- **ESLint** — Astro + TypeScript linting
- **Prettier** — code formatting
- **CodeQL** — GitHub security analysis
- **Husky + commitlint** — Conventional Commits enforcement

## Directory Structure

```
.
├── .github/
│   └── workflows/              # CI/CD automation
│       ├── deploy.yml          # GitHub Pages deployment
│       └── codeql-analysis.yml # Security scanning
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── cv/                 # CV-specific components
│   │   │   ├── sections/       # CV sections (header, experience, etc.)
│   │   │   ├── css/            # CV-specific styles
│   │   │   ├── cvData.ts       # ⚠️ CRITICAL: CV data source
│   │   │   └── cvData.d.ts     # TypeScript types for CV data
│   │   ├── ui/                 # Generic UI components
│   │   │   └── icons/          # SVG icon components
│   │   ├── PageMeta.astro      # SEO meta tags
│   │   ├── BlogPostMeta.astro  # Blog SEO meta tags
│   │   ├── Renderer.astro      # Markdoc renderer
│   │   ├── CodeBlock.astro     # Syntax-highlighted code
│   │   ├── TweetEmbed.astro    # Twitter embeds
│   │   ├── YouTubeEmbed.astro  # YouTube embeds
│   │   ├── CodePenEmbed.astro  # CodePen embeds
│   │   └── GitHubGistEmbed.astro # GitHub Gist embeds
│   │
│   ├── layouts/                # Page templates
│   │   ├── PageLayout.astro    # Standard page wrapper
│   │   ├── ContentLayout.astro # Blog/content layout
│   │   ├── CV.astro            # CV layout with print styles
│   │   ├── BookMeLayout.astro  # Booking page layout
│   │   └── Favicon.astro       # Favicon configuration
│   │
│   ├── pages/                  # ⚠️ File-based routing
│   │   ├── index.astro         # /
│   │   ├── blog.astro          # /blog
│   │   ├── blog/[slug].astro   # /blog/:slug
│   │   ├── projects.astro      # /projects
│   │   ├── cv/index.astro      # /cv
│   │   ├── cv/verbose/         # /cv/verbose
│   │   ├── book-me/            # /book-me
│   │   └── rss.xml.ts          # RSS feed
│   │
│   ├── lib/                    # Utility functions
│   │   ├── seo.ts              # SEO meta tags
│   │   ├── career-tenure.ts    # Career tenure calculation
│   │   ├── is-verbose-mode.ts  # Verbose CV detection
│   │   ├── pdf-details.js      # PDF output path config
│   │   ├── pdf-generator.js    # ⚠️ PDF generation script
│   │   ├── array-to-html-list.jsx
│   │   └── anchored-header.jsx
│   │
│   ├── content/                # Astro content collections
│   │   ├── blog/               # Blog posts (*.mdoc)
│   │   └── projects/           # Project showcases (*.mdoc)
│   │
│   ├── styles/                 # Global stylesheets
│   │   ├── global.css          # Theme variables, dark mode
│   │   ├── markdown.css        # Markdown element styling
│   │   └── main-page.css       # Homepage styles
│   │
│   ├── content.config.ts       # ⚠️ Content schemas
│   └── config.ts               # ⚠️ Site configuration
│
├── public/                     # Static assets (copied to dist/)
│   ├── cv/pdf/                 # ⚠️ Generated PDFs
│   ├── img/                    # Images
│   ├── favicon.svg
│   ├── favicon.png
│   └── CNAME                   # GitHub Pages custom domain
│
├── .vscode/                    # VS Code settings
│   ├── settings.json
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
│
├── docs/                       # AI assistant reference docs
├── astro.config.mjs            # ⚠️ Astro config
├── tsconfig.json               # ⚠️ TypeScript config
├── tailwind.config.js
├── postcss.config.cjs
├── .eslintrc.cjs
├── .prettierrc.mjs
├── .prettierignore
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── AGENTS.md                   # Quick reference for AI assistants
└── CLAUDE.md                   # Symlink to AGENTS.md
```

**Legend:**

- ⚠️ = Critical file — read before modifying.
- File-based routing means `src/pages/foo.astro` becomes `/foo`.
