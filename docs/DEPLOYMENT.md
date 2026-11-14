# Deployment preparation

The website is implemented locally. It has not been deployed.

## Company review

- Obtain company approval for the proposed mission, vision and core values. Their qualification remains visible in the website until approval is recorded.
- Confirm the branch address spelling, especially "KLM, 10" and "Old Ogbomoso-Ilorin Old Road". The website preserves the profile's wording.
- Confirm the office addresses and telephone numbers remain current. The email is `hoperisingagro@gmail.com`, following the user's correction.
- The wordmark and H favicon are temporary text treatments. Commodity images are generated illustrations, labelled as such, rather than photographs of company premises or current stock. See ASSETS.md.

## Domain and crawler settings

Copy `.env.example` to `.env.local` for local configuration, or set the same variable in the hosting environment.

Set `SITE_URL` to the confirmed public HTTPS origin before running the deployment build. Use the origin only, without a path, query, fragment or credentials. No production domain has been supplied or invented in this project.

With `SITE_URL` configured:

- Page metadata uses it for the canonical URL and absolute sharing URLs.
- `robots.txt` allows crawling and advertises the sitemap.
- `sitemap.xml` contains the home page URL. The single-page anchors are not separate sitemap entries.
- The page permits indexing.

With `SITE_URL` blank:

- The page emits `noindex, nofollow`.
- `robots.txt` disallows crawling.
- The sitemap has no URLs and is not advertised.
- Canonical and company website URLs are omitted. Next.js uses an explicit localhost origin for resolving the review sharing image; that is a development fallback, not a company domain.

The URL configuration is evaluated during the build. Set the variable and rebuild before publishing. HTTP localhost origins are accepted only to support local configuration tests. Crawler restrictions do not provide access control; use the hosting provider's preview protection if the review version should be private.

## Run and build

Use a supported Node.js runtime compatible with the installed Next.js package. The project has been checked with Node.js 24.

```powershell
npm ci
npm run lint
npm run build
npm start
```

For development, use `npm run dev`. Both commands use port 3000 by default. The working review server has used port 3017; the local production audit uses port 3018.

The page uses Next.js image optimisation and an hourly cached footer. Deploy with a host that runs Next.js, rather than uploading an HTML export. No database, authentication service or email credentials are required.

The Inter and Manrope fonts are downloaded by Next.js during compilation and self-hosted in the result. Allow the build environment to access Google Fonts. A font-download failure should be investigated before accepting a fallback appearance.

## Post-deployment checks

- Confirm the production URL, HTTPS and chosen domain redirect.
- Inspect the canonical URL, Open Graph image URL, robots directives and sitemap at the actual public origin.
- Confirm `/opengraph-image` returns a PNG and the favicon loads.
- Test navigation, mobile menu, phone and email link targets on the deployed site. Link checks do not establish that a company answers a number or mailbox.
- Review images and the proposed corporate statements with the company.
- Recheck accessibility, loading behaviour and performance on the deployed host and representative mobile networks.

## Dependency audit

The final verification record documents the audit date and result. At review time, the production dependency audit reports no known vulnerabilities. The full audit reports seven moderate advisories in the development linting dependency chain, stemming from minimatch. `npm audit fix` did not change the result. No forced major upgrade or unsupported override was applied.

Recheck before deployment and update the affected linting packages when a compatible fixed release is available. This is a dependency-audit result, not a claim that the site has undergone a security penetration test.
