# Impeccable technical audit

Reviewed 16 November 2026. Target: `src/app/page.tsx` and its shared components. Audit only; no application code changed.

## Implementation follow-up

All three findings below were addressed on 16 November 2026 in the recommended order: optimise, harden, polish.

- The hero now uses explicit eager loading with high fetch priority; lower-page images retain lazy loading. Chrome's LCP Discovery checks all passed, and no preload or other console warnings were observed in the production check.
- Deployment guidance now describes the supplied-logo branding and icons, the user-requested caption removal, generated-image provenance, cocoa review requirement and current audit ports.
- The existing button hover colour is now the named `--color-forest-hover` token. Its appearance is unchanged.
- Lint and production build passed. Post-change mobile and desktop Lighthouse accessibility and best-practice scores remain 100. SEO remains 66 because review indexing is intentionally disabled.

| Mobile lab metric | Before | After |
| --- | --- | --- |
| LCP | 1,627ms | 1,120ms |
| Image resource load delay | 940ms | 90ms |
| CLS | 0.00 | 0.00 |

Both samples used local production builds, cold browser caches, a 375 x 812 DPR-2 viewport, Fast 4G emulation and 4x CPU slowdown. This single-sample comparison demonstrates the earlier hero request; it is not a production performance guarantee. Server image caches may already have been warm.

Post-change reports: `docs/audits/impeccable-optimization-mobile.json` and `docs/audits/impeccable-optimization-desktop.json`. The original audit and score below are retained as the historical baseline, rather than replaced with an unmeasured new score.

## Integrity verdict

Pass. The implementation uses a coherent forest-green/ivory token system, reusable components, centralised company facts and working enquiry links. No systemic implementation shortcut or broken primary path was established.

## Audit health

| Dimension | Score | Evidence |
| --- | --- | --- |
| Accessibility | 3/4 | Mobile and desktop Lighthouse accessibility 100; keyboard menu, focus return and reduced-motion checks passed. Full WCAG conformance and assistive-technology coverage are not established. |
| Performance | 3/4 | Mobile lab LCP 1.627 seconds, CLS 0.00; hero image request remains delayed by lazy loading. |
| Theming | 3/4 | Consistent named tokens and intentional light theme; button hover has one isolated literal colour. |
| Responsive design | 3/4 | No overflow at 320, 375, 768, 1024 or 1440px; no visible controls below 24px in either dimension. Physical-device touch and actual 200% browser zoom remain unverified. |
| Implementation integrity | 4/4 | Shared content, semantic headings, valid anchors, real email/telephone actions, no fake form or unsupported compliance badge. |
| Total | 16/20 | Good |

These are audit judgments, not Lighthouse category scores or a WCAG certificate. Deliberately absent dark mode is not a defect for this light-theme brief.

## Measured results

| Lighthouse category | Mobile | Desktop |
| --- | --- | --- |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 66 | 66 |

The only Lighthouse failure was `is-crawlable`: the unconfigured review build emits `noindex, nofollow`. Robots disallows crawling and the sitemap has no URLs. This is deliberate preview behaviour, not an application defect. Configure the confirmed public `SITE_URL` and rebuild before publication.

Reports: `docs/audits/impeccable-audit-mobile.json` and `docs/audits/impeccable-audit-desktop.json`.

One cold-browser-cache local production trace used a 375 x 812 viewport, DPR 2, Fast 4G network emulation and 4x CPU slowdown:

- LCP: 1,627ms; TTFB: 169ms; resource load delay: 940ms; download: 347ms; render delay: 171ms.
- CLS: 0.00.
- This is a single localhost lab sample, not deployed-host performance or real-user field data. No field INP claim is made. The server image cache may already have been warm.

## Detailed findings

### P2: Hero image is still lazy-loaded

- Category: Performance.
- Location: `src/components/hero.tsx`, Image beginning around line 31, with `fetchPriority` on line 35.
- Browser evidence: the hero was the measured LCP element, had `loading="lazy"` and `fetchpriority="high"`, and its request began about 1.109 seconds after navigation. Chrome's LCP Discovery insight passed priority and HTML discovery but failed the lazy-loading check.
- Impact: avoidable image discovery delay on the first screen, even though the observed overall LCP was good.
- Recommendation: evaluate explicit `loading="eager"` for the hero while retaining appropriate request priority. Compare mobile/desktop traces and check the previously recorded preload warnings before choosing the final policy. Keep lower-page commodity images lazy. Do not promise the full 940ms delay can be eliminated.
- Suggested command: `$impeccable optimize`.
- Standard: performance recommendation, not a WCAG failure.

### P2: Deployment guidance describes obsolete assets

- Category: Implementation integrity / release documentation.
- Location: `docs/DEPLOYMENT.md:10`.
- Evidence: the guide calls the H favicon temporary and says generated image captions are visible. The current site uses the supplied-logo icons and the user explicitly requested caption removal.
- Impact: a person preparing deployment could act on inaccurate review instructions.
- Recommendation: update the guide to describe the supplied-logo icons and current image provenance/caption policy. Preserve the company-approval and domain requirements.
- Suggested command: `$impeccable harden`.
- Standard: no WCAG violation.

### P3: Button hover colour bypasses the theme tokens

- Category: Theming.
- Location: `src/app/globals.css:112`.
- Evidence: `.button-primary:hover` directly uses `#24553f` while other UI colours use named tokens.
- Impact: a future palette update could leave this interaction state behind. The current hover contrast is good, approximately 7.87:1 against ivory text.
- Recommendation: promote this existing value to a forest-hover token and reuse it. The independent colour literals in the generated Open Graph image are not treated as CSS theming failures.
- Suggested command: `$impeccable polish`.

Counts: P0 0, P1 0, P2 2, P3 1.

## Positive checks

- Mobile and desktop Lighthouse reported no automated accessibility failures.
- Sampled forest/ivory contrast: 10.73:1; muted/ivory: 5.53:1.
- All seven images loaded and have alt attributes. Empty logo alt text avoids repeating adjacent accessible company names.
- One H1 and sensible section headings; no duplicate IDs or broken internal anchor destinations.
- Menu opens by keyboard; Escape closes it and returns focus. A visible focus outline is present.
- Reduced-motion mode disables smooth scrolling and reveal animations without hiding content.
- Current-section navigation updated correctly when checked after scroll events settled.
- Telephone and email URLs are correctly structured, including the three commodity subjects. No calls were made and no messages were sent.
- No production console errors or warnings were reported in the inspected page.
- No broad layout thrashing was established: the navigation handler batches layout reads before its state update and schedules work through animation frames.

## False positives and limits

- Chrome's Image Delivery insight estimated 127.1kB savings by comparing image pixel dimensions with CSS display dimensions. The trace used DPR 2, so density-aware image selection must be considered. That estimate is not recorded as confirmed waste. The shared logo sizes hint is conservative for the small header, but its URL is also reused by the larger footer logo; changes need a first-screen versus total-transfer comparison.
- Immediate scroll-loop samples briefly showed stale active links; separate settled checks confirmed the correct About and Contact links. No active-navigation defect is recorded.
- Ctrl-plus did not change the emulated viewport/device ratio. This attempt does not establish actual 200% zoom coverage.
- Responsive checks used Chromium viewport emulation, not physical phones. Keyboard checks used real browser key events. No custom touch-drag surface exists, and physical touch was not tested.
- No NVDA/VoiceOver, Safari/Firefox, deployed network, email delivery or telephone ownership verification was performed.
- Impeccable's bundled detector was attempted and failed because engine 0.1.25 is missing and its cache directory could not be created. No detector counts or overlay are claimed.
- The report is archived manually because Impeccable's storage helper uses the same unavailable engine.

## Recommended actions

1. `$impeccable optimize`: compare hero eager loading with the current policy and verify first-screen image delivery.
2. `$impeccable harden`: update the deployment guidance to reflect the current assets and preview indexing policy.
3. `$impeccable polish`: centralise the hover colour and verify the resulting interaction state.

These can be run one at a time or together. Re-run the relevant audit checks after changes.
