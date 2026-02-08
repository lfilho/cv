# Claude AI Development Guide

This repository includes comprehensive documentation for AI assistants.

## Primary Documentation

**See [AGENTS.md](./AGENTS.md)** for the complete development guide.

AGENTS.md contains:
- Project overview and purpose
- Technology stack and architecture
- Directory structure and organization
- Development workflows
- Code conventions and patterns
- Common tasks and examples
- Build and deployment processes
- Important files and their purposes
- Things to watch out for
- Testing checklists

## Quick Start for AI Assistants

1. **Read [AGENTS.md](./AGENTS.md)** - Comprehensive guide with everything you need
2. **Check [README.md](./README.md)** - Project overview
3. **Review key files:**
   - `src/components/cv/cvData.ts` - Primary CV data source
   - `astro.config.mjs` - Build configuration
   - `package.json` - Scripts and dependencies
   - `tsconfig.json` - TypeScript paths and settings

## Development Commands

```bash
npm run dev       # Start development server (port 9000)
npm run build     # Build for production + generate PDF
npm run preview   # Preview production build
npm run lint      # Format and lint code
```

## Important Notes

- **Always read [AGENTS.md](./AGENTS.md) before making changes**
- Run `npm run lint` before committing
- Test PDF generation after modifying CV components
- Use TypeScript path aliases (`@components/*`, `@layouts/*`, etc.)
- Follow Astro island architecture patterns

---

**For detailed information, workflows, and conventions, see [AGENTS.md](./AGENTS.md)**
