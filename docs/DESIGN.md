# HOPERISING website visual direction

Status: All requested page sections are implemented and checked in the local production review. See VERIFICATION.md for results and DEPLOYMENT.md for publication preparation.

Content reference: [CONTENT.md](./CONTENT.md). Use `hoperisingagro@gmail.com` throughout the website, following the user's correction.

## 1. Design intent

A corporate website for agricultural commodity buyers, suppliers, prospective employers and visitors checking the company's identity. Give equal care to the first impression and the practical details people need to follow up.

Use strong, left-aligned headings, well-spaced text, straightforward navigation and close photographs of agricultural commodities. Let the photographs and composition carry the visual interest. Keep company particulars readable and easy to find.

Design settings: DESIGN_VARIANCE 4/10, MOTION_INTENSITY 3/10, VISUAL_DENSITY 4/10. These reflect the brief's emphasis on company information and ease of use. The design uses Tailwind with a small custom token system, without an additional component framework.

The user's requested palette, fonts, Lucide icons, section order, contact actions and proposed dark-green mission section take precedence over general skill defaults. Preserve the supplied hero copy even when it needs more than two headline lines.

## 2. Colour

| Role | Colour | Use |
| --- | --- | --- |
| Forest green | #183F32 | Primary buttons, headings, navigation accents, mission section and footer |
| Warm ivory | #F7F5EF | Main page background |
| Muted gold | #C5A36A | Short rules, process numbers and small decorative accents |
| Charcoal | #252A27 | Body text and information values |
| White | #FFFFFF | Header surface and selected content areas |

Gold is decorative and should not carry small text on ivory or white. Use ivory text on forest green and green or charcoal text on light surfaces. Verify contrast during implementation, including hover and focus states.

Use a light page with one deliberate dark-green mission section and a matching footer. Keep the same fonts, spacing and button styles through both backgrounds. No automatic dark-mode switch is planned.

## 3. Typography

- Headings and wordmark: Manrope, weights 500, 600 and 700.
- Body, labels and navigation: Inter, weights 400, 500 and 600.
- Hero headline: approximately 36px on phones, 44px on tablets and 54-60px on larger screens. Adjust the final size to the actual line breaks and image crop.
- Section headings: approximately 30-40px.
- Body text: 16-18px with a line height around 1.6.
- Small labels: at least 13-14px; avoid thin, tightly packed legal-style text for company details.
- Paragraph width: generally 55-65 characters per line.

Use sentence case for most headings. Reserve uppercase for the wordmark and occasional short labels. Do not put a small uppercase label above every section. Avoid mixed-font words, decorative italics and excessive letter spacing.

The full registered name must wrap naturally. On mobile, break the wordmark's supporting line across two lines if necessary rather than shrinking it until unreadable.

## 4. Layout and spacing

- Maximum content width: approximately 1240px, centred.
- Page gutters: 20px on phones, 32px on tablets and 48px on desktop.
- Section padding: approximately 56-64px on phones and 88-104px on desktop.
- Base spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 88 and 104px.
- Buttons: minimum 48px high with 6px corners, clear borders where needed and sufficient horizontal padding.
- Photographs: square corners. Simple content panels may use 6px corners; avoid oversized rounded containers.
- Dividers: fine, low-contrast lines used to separate real content groups.
- Shadows: only where needed to distinguish the sticky header or open mobile menu from the page.

Avoid placing every paragraph inside a card. Change the layout according to the content: split hero, open service columns, commodity photographs, numbered process, and a structured company-details panel.

## 5. Page composition

| Section | Desktop composition | Mobile composition |
| --- | --- | --- |
| Header | Solid light surface, temporary wordmark left, navigation and green contact button right; about 76px high | Wordmark and labelled menu control; expanded menu below the header |
| Hero | Ivory background, text on the left and one large commodity photograph on the right, roughly 52/48 split | Text and both actions first, followed by the photograph |
| About | Supporting photograph beside the company introduction; three compact corporate facts beneath the text | Introduction, facts and photograph stacked in reading order |
| Business activities | Three open columns with small Lucide icons, titles and short descriptions; no heavy card frames | Three vertically stacked entries with generous separation |
| Commodities | Two substantial photographs for cashew and soya beans; a smaller text area for other available produce and the enquiry action | Cashew and soya entries stacked, followed by the availability explanation |
| Trading approach | Four numbered steps along a fine horizontal line | Vertical ordered list with the same four steps and descriptions |
| Mission, vision and values | Forest-green background; mission and vision side by side, values arranged underneath | Mission, vision and values stacked; proposed-status note kept visible |
| Corporate information | Spacious definition list for registered particulars, with two clearly labelled office blocks | One column with labels above values and addresses fully visible |
| Contact | Contact invitation and direct actions beside the two office addresses | Phone and email actions first, followed by each office address |
| Footer | Full name, short description, navigation, contact details and RC number | Compact stacked groups with readable links |

### First-screen arrangement

```text
HOPERISING                    Home  About Us  Our Business  Our Approach  Contact  [Get in Touch]
AGRO ALLIED INVESTMENT LIMITED

Agricultural commodity sourcing and trading    |                                        |
                                              |                                        |
Connecting Agricultural Produce               |       Commodity photograph             |
with Market Opportunities.                    |                                        |
                                              |                                        |
Company introduction from CONTENT.md          |                                        |
                                              |                                        |
[Explore Our Business]   Contact Us            |                                        |
```

The wordmark is a temporary text treatment, without a fabricated seal or symbol. Keep the headline, company name and actions visible early. Do not force the hero to fill the screen or hide its actions below a large image on mobile.

Header navigation stays on one line when space permits. Use the mobile menu below the width at which the full wordmark and navigation stop fitting, likely 1280px. Confirm with the actual font widths during implementation.

## 6. Photography brief

Use a consistent set of real commodity photographs with natural light, recognisable produce and subdued colours.

| Placement | Subject | Crop and purpose |
| --- | --- | --- |
| Hero | Cashew in shell or recognisable agricultural produce sacks | Large landscape crop, approximately 4:3; enough context to suggest commodity trade |
| About | Produce sacks or a neutral supply setting | Landscape crop; no visible branding, personnel or premises that could imply company ownership |
| Cashew | Close view of cashew, preferably in shell | Approximately 4:3; describe only what the chosen image shows |
| Soya beans | Close view of dry soya beans | Match the cashew image's scale, lighting and crop |

Do not use crop fields, livestock, tractors or machinery as the main imagery. Avoid a photograph of another named commodity for the general produce entry. Keep that entry text-led to avoid adding an unsupported product to the company's scope.

Record each selected photograph's source, usage terms and credit requirements when assets are sourced. Use company-supplied photography if available; otherwise select licensed illustrative photography. For the first hero review, a generated photographic illustration of cashew sacks is used with an explicit illustrative caption. Its provenance is recorded in ASSETS.md. It may be replaced with company-supplied or licensed photography later.

Where context could suggest ownership, use a plain note such as "Illustrative commodity photography." Do not use misleading captions about HOPERISING facilities or operations.

Use Next.js Image with explicit sizes and responsive crops. Prioritise the hero photograph and lazy-load images further down the page. Confirm that images load correctly before review.

## 7. Interaction and motion

- Sticky header with anchor offsets so section headings remain visible after navigation.
- Mobile menu with a labelled toggle, expanded state, Escape-to-close, link-to-close and sensible focus handling.
- Smooth anchor scrolling, disabled when reduced motion is requested.
- Gentle, once-only section reveals using short opacity and upward movement transitions, approximately 300-450ms.
- Immediate access to content; page text must remain available if animation code fails.
- Small colour or underline changes on hover, with matching visible keyboard focus.
- No automatic carousels, parallax, counters, scrolling text or loading introduction.

Use Motion only where it serves an interaction or helps the reading sequence. Keep the rest of the page as server-rendered content.

## 8. Writing rules

Use the content reference as the starting point. Explain the business in ordinary language: what the company buys, where produce comes from in general terms, and who it supplies.

- Prefer "We buy and supply agricultural produce" to vague statements about changing agriculture.
- Use concrete verbs: buy, source, purchase, sell and supply.
- Keep each paragraph focused on one point.
- Remove filler such as "seamless solutions", "unlock potential", "driving excellence", "world-class" and "trusted partner" when unsupported.
- Avoid forced slogans, rhetorical questions and repeated promises of quality or reliability.
- Preserve exact registered details and the proposed corporate statements.
- No em dashes or emojis in website copy.
- Read all new wording aloud before review. If it sounds like a sales script, simplify it.

Any meaningful rewrite of the agreed copy should be recorded in CONTENT.md so the reference and website stay aligned.

## 9. Review criteria for the first implementation

- At 375px, the wordmark is readable, actions fit and the page has no horizontal overflow.
- At 768px and 1024px, columns and navigation change before content becomes cramped.
- At 1440px, content remains bounded rather than stretching across the whole screen.
- The hero communicates the business and full company identity without relying on the photograph alone.
- Corporate details and direct contact actions are easy to locate and copy.
- Text and controls meet contrast requirements and show visible keyboard focus.
- Illustrative photography cannot reasonably be mistaken for documented company premises.
- The proposed mission, vision and values remain qualified until company approval is recorded.

## 10. Next stage

After reviewing this direction, prepare the implementation foundation: check the installed Next.js guidance, verify compatible dependencies, add Lucide and Motion, and create shared content and design tokens. Then build the header and hero for a focused visual review before adding the remaining sections.
