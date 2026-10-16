# Ovra Docs

Documentation for [Ovra Browser](https://github.com/OvraBrowser/Ovra), built with [Nextra 4](https://nextra.site) (Next.js App Router).

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/, plus the Pagefind search index
```

## Deploy

The site is a static export (`output: 'export'`). Cloudflare serves `out/` as Workers static assets via `wrangler.jsonc`:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

## Writing pages

Pages are MDX files in `content/`. `content/_meta.ts` sets the sidebar order and titles.

`zod` is pinned to 4.1.x in `package.json` (`overrides`): newer zod releases make Nextra 4.6's layout validation fail with “expected nonoptional … at children”.
