# Final website verification

Reviewed on 14 November 2026 against the production build served locally at http://localhost:3018. The development preview is available on port 3017 while its server is running. The website has not been deployed.

## Result

All requested sections are implemented and ready for company review. Lint, TypeScript and the production build pass. Domain configuration and company review items remain before publication.

## Content checks

- Read the complete four-page source PDF and compared the registered name, RC number, incorporation date, company type, both office addresses and both telephone numbers against the shared content module. All matched.
- Compared the mission, vision and full core values statement with extracted PDF text, normalising only whitespace. All matched exactly.
- Confirmed the user-corrected email `hoperisingagro@gmail.com` is used in visible text and mailto links. The earlier PDF email remains only in documentation explaining the correction.
- Kept the proposed-status qualification visible beside the corporate statements.
- Retained "where applicable" for importation and availability-dependent wording for other produce.
- Confirmed no invented customers, partnerships, certifications, volumes, revenue, stock guarantees or farming operations were introduced.
- Checked website source for em dashes, starter copy and common exaggerated marketing phrases. No matches were found.

## Responsive layout and navigation

- Checked 375 x 812, 768 x 1024, 1024 x 768 and 1440 x 900 browser viewports. Also checked the 320px reflow width. No horizontal overflow was found.
- Confirmed section order, one H1, descriptive section headings, unique IDs and existing destinations for every internal anchor.
- Confirmed all four page photographs/illustrations load and have descriptive alternative text. Local WebP assets are rendered through Next.js Image with responsive sizes.
- Verified mobile navigation opening by keyboard, Tab navigation to its links, Escape closure with returned focus, closure after navigation, outside-click dismissal and desktop-resize closure.
- Confirmed the skip link focuses the main element and the footer's Corporate Information link works by keyboard with a visible focus outline.
- Confirmed the supplied phone and email link targets in Contact and Footer. No calls were placed and no emails were sent.
- Verified reduced-motion mode disables smooth scrolling and reveal animation. Text remains visible with JavaScript disabled, including contact details and the proposed-statement qualification.

## Automated accessibility and best practices

| Lighthouse category | Mobile | Desktop |
| --- | --- | --- |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO in the unconfigured review build | 66 | 66 |

The only remaining reported Lighthouse failure is `is-crawlable`, because a build without a confirmed `SITE_URL` deliberately emits `noindex, nofollow`. It is not a claim that production SEO is complete before the real domain is configured. The URL and crawler logic was checked for configured and unconfigured cases, including rejection of invalid public origins. Recheck metadata and crawlability at the deployed origin.

The initial audit found a wordmark accessible-name mismatch. Removed its unnecessary aria-label and added a text separator so the accessible name matches the visible full company name. No accessibility failures remained in the subsequent automated audits.

Reports are saved in [audits/final-mobile.json](./audits/final-mobile.json) and [audits/final-desktop.json](./audits/final-desktop.json). Automated scores and keyboard checks do not establish complete WCAG compliance or replace user testing with assistive technology. This pass used Chromium browser tooling, not a physical-device or cross-browser test lab.

## Loading and technical checks

- Final `npm run lint`: passed.
- Final `npm run build`: passed, including TypeScript, static page generation and hourly footer revalidation.
- `git diff --check`: passed. Git's Windows line-ending notices are not whitespace errors.
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image` and `/icon.svg` return successful responses with their expected content types.
- Verified robots disallow crawling and the sitemap contains no advertised company URL while `SITE_URL` is unset.
- Verified accurate page title and description, Open Graph and sharing-card metadata, and omission of the public canonical URL when the domain is unset.
- Replaced the starter favicon with a temporary typographic H and removed unused starter illustrations. The sharing image uses company text and registration facts, without unverified photographs or claims. Its rendered preview is saved in [audits/social-preview.png](./audits/social-preview.png).
- Removed an unnecessary hero image preload. The hero retains high fetch priority, and viewport-aware loading avoids a preload warning on smaller screens. A fresh production browser check reported no console errors or warnings after the change.
- Final cold-cache local trace: LCP 504ms and CLS 0.00, with 1x CPU and no network throttling. See [audits/performance-summary.txt](./audits/performance-summary.txt). These are local lab observations, not deployed mobile-network results. INP and real-user field metrics were not measured.

## Dependency audit

- `npm audit --omit=dev`: no known production dependency vulnerabilities.
- Full `npm audit`: seven moderate development-tool advisories, from the linting dependency chain's minimatch dependency.
- Ran the compatible `npm audit fix`; it left those advisories unchanged. No forced major upgrade or unsupported override was applied.

Recheck the audit before deployment and update the linting chain when a compatible fixed version is available.

## Before publication

1. Supply the confirmed production domain, set `SITE_URL` and rebuild. Check canonical/sharing URLs, robots and sitemap at the real origin.
2. Obtain company approval for the proposed mission, vision and core values. Their qualification remains visible until approval is recorded.
3. Confirm the branch address wording and the currency of the office addresses and telephone numbers. The source wording has been preserved.
4. Review the temporary text identity and clearly labelled generated commodity illustrations. They can be replaced with approved company assets.
5. Run the post-deployment checks in [DEPLOYMENT.md](./DEPLOYMENT.md), including loading behaviour on representative mobile connections.
