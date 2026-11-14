# HOPERISING corporate website

A single-page website for HOPERISING AGRO ALLIED INVESTMENT LIMITED, built with Next.js App Router, TypeScript, Tailwind CSS, Lucide and Motion.

## Development

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. To use the working review port, run `npm run dev -- --port 3017`.

## Production checks

```powershell
npm run lint
npm run build
npm start
```

Set `SITE_URL` to the confirmed public HTTPS origin before a deployment build. `.env.example` documents the variable. Builds without a configured domain are deliberately non-indexable review versions.

## Project files

- `src/content/company.ts`: shared company facts, contacts and copy.
- `src/content/site.ts`: domain validation and crawler configuration input.
- `src/components`: page sections and shared interface components.
- `src/app`: page composition, fonts, styles, metadata, sharing image, icon, robots and sitemap.
- `public/images`: optimised illustrative commodity images.
- `docs/CONTENT.md`: source-backed content and user corrections.
- `docs/ASSETS.md`: image provenance and prompts.
- `docs/DEPLOYMENT.md`: company review items, hosting configuration and publishing checks.
- `docs/VERIFICATION.md`: final review results and limits.

The four-page company profile remains in `docs`. The corrected email is `hoperisingagro@gmail.com`. Proposed mission, vision and values remain qualified until company approval. The site has not been deployed.
