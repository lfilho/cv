# Getting Help

External resources and debugging commands.

## Resources

- **Astro Docs:** https://docs.astro.build
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com
- **Markdoc Docs:** https://markdoc.dev
- **TypeScript Docs:** https://www.typescriptlang.org

## Repository

- **Issues:** https://github.com/lfilho/cv/issues
- **Repository:** https://github.com/lfilho/cv

## Debugging Commands

```bash
# Verbose Astro build output
npm run build -- --verbose

# Type checking without emitting files
npx tsc --noEmit

# ESLint without auto-fix
npx eslint src/**/*.{js,ts,jsx,tsx,astro}

# Clear cache and rebuild
rm -rf dist/ node_modules/.astro/
npm run build
```

---

_Last updated: 2026-08-23_
