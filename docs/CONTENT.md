# HOPERISING website content foundation

Status: All requested page sections are implemented and the local production verification pass is complete. See VERIFICATION.md for results and publication dependencies. Proposed corporate statements remain subject to company approval.

Primary source: [HOPERISING AGRO ALLIED COMPANY PROFILE.pdf](<./HOPERISING AGRO ALLIED COMPANY PROFILE.pdf>), read in full (four pages).

This document separates facts supplied in the profile, user corrections, proposed corporate statements and editorial website copy. Source-backed information has been checked against the PDF; incorporation, contact ownership and operating status have not been independently verified. Page references below refer to the PDF's printed page numbers. Explicit user corrections take precedence over the PDF for website content.

## 1. Company facts

| Field | Website information | Source |
| --- | --- | --- |
| Registered name | HOPERISING AGRO ALLIED INVESTMENT LIMITED | 1, 2 |
| Incorporation date | 22 June 2021 | 1, 2 |
| Registration number | 1808726 | 1, 2 |
| Company type | Private company limited by shares | 2 |
| Country | Nigeria | 2 |
| Business focus | Sourcing, purchasing and resale of agricultural produce | 2, 3 |
| Named commodities | Cashew, soya beans and other available farm produce | 2, 3 |
| Importation | Agricultural produce importation, where applicable, as part of produce-trading activities | 3 |
| Telephone 1 | 08033285112 | 4 |
| Telephone 2 | 09011224351 | 4 |
| Email | hoperisingagro@gmail.com | User correction in CONTENT.md, confirmed in conversation |

Email update: The PDF lists `adewalealabi1975@gmail.com`. The user replaced it with **hoperisingagro@gmail.com**, which is the contact address to use throughout the website, including visible text and email links. The PDF remains unchanged as the original source document.

Display the registration number as **RC No. 1808726**. It identifies the registration recorded in the profile and must not be presented as proof of current compliance or regulatory endorsement.

### Head office

Preserve the address as supplied on page 4:

```text
5, Coca-Cola Junction,
Oba Erinwole Express Way,
Sagamu, Ogun State, Nigeria.
```

### Branch office

Preserve the address as supplied on page 4:

```text
KLM, 10 Old Ogbomoso-Ilorin Old Road,
Opposite Olugbon Estate,
Surulere LGA, Oyo State, Nigeria.
```

Editorial note: "KLM, 10" and the repeated "Old" are retained deliberately. Seek company confirmation before changing either. Do not add map coordinates or an unverified map listing.

## 2. Proposed corporate statements

Page 4 explicitly states that the vision, mission and values are proposed corporate wording. The following text is transcribed from page 2, with line wrapping normalised. These statements require company approval before being presented as adopted commitments.

### Vision

> To be a trusted participant in the agricultural produce trade, supporting reliable connections between farm-produce suppliers and buyers.

### Mission

> To source and purchase agricultural produce and make it available to buyers through dependable trading and supply relationships.

### Core values

> Integrity in transactions; reliability in sourcing and supply; quality in produce handling; and strong relationships with suppliers and customers.

For presentation, the four value labels may be **Integrity**, **Reliability**, **Quality** and **Strong business relationships**, with the corresponding source phrases beneath them. Do not add new commitments.

Review-stage note for this section: **Proposed corporate statements, subject to company approval.** Retain that qualification in the review website until approval is recorded.

## 3. Website copy and section order

Unless explicitly quoted above, the text below is proposed editorial copy derived from the profile. Headings and calls to action are website language, not quotations or additional factual claims.

Copy review, 16 November 2026: The current website wording is in `src/content/company.ts`. The editorial drafts below record the earlier content stage. The website copy now uses shorter, more direct sentences, including "sources, purchases and supplies agricultural produce" in the hero and "call or email us" in the contact section. Company facts and the exact proposed mission, vision and values are unchanged. No em dashes are used in the website source.

User update, 16 November 2026: Added a cocoa image and enquiry card at the user's request. Cocoa is a user-requested addition, not a commodity named in the original PDF. The card invites enquiries without claiming current stock. Removed the visible illustrative-image captions at the user's request. Image provenance remains recorded in ASSETS.md, and generated-image descriptions remain in alternative text.

### A. Header and navigation

- Temporary text wordmark: **HOPERISING**, with **AGRO ALLIED INVESTMENT LIMITED** as its supporting line.
- Home: `#home`
- About Us: `#about`
- Our Business: `#business`
- Our Approach: `#approach`
- Contact: `#contact`
- Primary action: **Get in Touch**, linking to `#contact`.

The wordmark is a temporary typographic identity, not an official company logo. Include the full registered name in the hero, corporate information and footer.

### B. Hero | #home

Eyebrow: **Agricultural commodity sourcing and trading**

Headline: **Connecting Agricultural Produce with Market Opportunities.**

Supporting copy:

HOPERISING AGRO ALLIED INVESTMENT LIMITED is a Nigerian agricultural commodity trading company engaged in the sourcing, procurement and supply of farm produce.

Actions:

- **Explore Our Business**: `#business`
- **Contact Us**: `#contact`

Source basis: pages 2 and 3. The headline is an editorial description of the trading model, not a performance claim.

### C. About the company | #about

Heading: **A Nigerian company focused on agricultural trade.**

Established on 22 June 2021, HOPERISING AGRO ALLIED INVESTMENT LIMITED is a private company limited by shares, registered in Nigeria.

The company purchases agricultural produce for onward sale to customers, traders and businesses. Its role is to connect sources of farm produce with buyers through sourcing, purchasing and supply.

Corporate highlights:

- Incorporated in 2021
- RC No. 1808726
- Registered in Nigeria

Source basis: pages 1 to 3. Do not turn the incorporation year into a claim about continuous trading history.

### D. Our business activities | #business

Heading: **Our Business**

Introduction: **From sourcing produce to supplying buyers, our business centres on agricultural commodities.**

**Agricultural Produce Sourcing & Procurement**

Purchasing farm produce from farmers, suppliers and other produce sources, including cashew, soya beans and other available agricultural commodities.

**Agricultural Commodity Trading & Supply**

Reselling and supplying purchased produce to customers, traders, businesses and other buyers.

**Agricultural Produce Importation**

Importation of agricultural produce, where applicable, as part of the company's produce-trading activities.

Source basis: page 3. Keep the importation qualification visible. Do not imply an established international network or a particular trading volume.

### E. Agricultural commodities | #commodities

Heading: **Agricultural Commodities**

Introduction: **We source and trade cashew, soya beans and other available farm produce.**

Editorial update for implementation: the introduction uses a direct description of the business rather than referring visitors back to the company profile. Its scope remains the same as PDF pages 2 and 3.

**Cashew**

Sourced and purchased for onward sale to buyers.

**Soya beans**

Purchased for resale and supply to customers and businesses.

**Other available agricultural produce**

Other farm produce may form part of the company's trading activities, depending on availability.

Supporting action: **Enquire About Produce**, linking to `#contact`.

Source basis: pages 2 and 3. This section describes trading scope, not current inventory. Do not specify varieties, grades, origins, packaging, prices, delivery terms or guaranteed availability without company confirmation.

### F. Our trading approach | #approach

Heading: **From Produce Sources to Buyers**

Introduction: **Our trading model centres on finding agricultural produce, purchasing suitable commodities and supplying them to buyers.**

1. **Identify produce sources**: Identify farmers, suppliers and other sources of agricultural produce.
2. **Source suitable commodities**: Source agricultural commodities suitable for purchase and onward sale.
3. **Purchase available produce**: Purchase available produce as part of the company's trading activities.
4. **Supply buyers**: Resell and supply purchased produce to customers, traders and businesses.

Source basis: page 3. These steps explain the profile's trading model. They do not claim audited procedures, laboratory testing, traceability systems or a dedicated logistics operation.

### G. Mission, vision and core values | #purpose

Heading: **Mission, Vision & Core Values**

Use the exact statements in section 2 of this document, retaining the proposed-status qualification until company approval is recorded. Present mission, then vision, then the four source-backed values.

### H. Corporate information | #corporate-information

Heading: **Corporate Information**

Introduction: **Company particulars and office locations, as recorded in the company profile.**

Display the full registered name, RC number, incorporation date, company type and country from section 1, followed by the exact head and branch office addresses. Use readable text that visitors can select and copy.

Source basis: pages 1, 2 and 4. Do not add an active-status badge or regulatory endorsement. Include a direct footer link to this section so visitors can find the particulars easily.

### I. Contact | #contact

Heading: **Get in Touch**

Introduction: **For enquiries about agricultural produce sourcing, purchasing or supply, contact the company using the details below.**

Display both telephone numbers, the supplied email and both office addresses from section 1.

| Visible label | Action |
| --- | --- |
| 08033285112 | `tel:+2348033285112` |
| 09011224351 | `tel:+2349011224351` |
| hoperisingagro@gmail.com | `mailto:hoperisingagro@gmail.com` |

The international telephone link targets are normalised from the Nigerian numbers supplied in the PDF. Preserve the original local numbers in visible text.

Use working call and email links. No contact form, invented response times, opening hours or WhatsApp action is proposed at this stage.

### J. Footer

Company name: **HOPERISING AGRO ALLIED INVESTMENT LIMITED**

Short description: **Agricultural produce sourcing, purchasing and supply in Nigeria.**

Include the header navigation links, **Corporate Information** (`#corporate-information`), both telephone numbers, email and **RC No. 1808726**.

Copyright: **© {current year} HOPERISING AGRO ALLIED INVESTMENT LIMITED. All rights reserved.**

Generate the year dynamically. No social accounts are supplied in the profile, so no social links are included.

## 4. Search and sharing copy

Page title: **HOPERISING AGRO ALLIED INVESTMENT LIMITED | Agricultural Commodity Trading**

Meta description: **HOPERISING AGRO ALLIED INVESTMENT LIMITED is a Nigerian company focused on sourcing, purchasing and supplying cashew, soya beans and other agricultural produce.**

Open Graph title and description: Use the page title and meta description above. A future sharing image may use the temporary wordmark and commodity imagery, without implying the imagery depicts company-owned operations.

Canonical URL, sitemap URLs and absolute sharing URLs depend on the confirmed production domain. Do not publish a placeholder domain as the company's website.

## 5. Photography and content boundaries

- Select illustrative images of cashew, soya beans, produce sacks or commodity supply environments.
- Use descriptive alternative text about the visible subject. Do not label stock images as HOPERISING offices, staff, warehouses, farms or operations.
- Make the illustrative nature of stock photography clear where its context could otherwise imply company ownership.
- Do not introduce additional named commodities based on photographs.
- Do not add livestock farming, crop cultivation, machinery, manufacturing or agricultural research as current activities.
- Do not add clients, partners, certifications, achievements, employee counts, revenue, volumes, quality grades or delivery guarantees.
- Avoid exaggerated claims, emojis and em dashes in website copy.
- Write in plain, natural English. Prefer concrete actions such as buying, sourcing and supplying produce. Avoid stock marketing language, forced metaphors and repeated claims about trust or excellence. Keep the exact proposed mission, vision and values unchanged unless the company approves edits.
- Keep repeated corporate facts identical across the site through a shared typed content file during implementation.

## 6. Review and approval record

### Company approval required

- Adoption of the proposed mission, vision and core values. Until approved, keep their proposed status visible in the review website.

### Clarification requested before final publication

- Confirm the branch address spelling, particularly "KLM, 10" and "Old Ogbomoso-Ilorin Old Road". Retain source wording in the meantime.
- Confirm the supplied telephone numbers and office addresses are current and intended for public business enquiries. The email has been updated to `hoperisingagro@gmail.com` by the user; use that correction rather than the PDF's earlier address.

### Deployment inputs still to be supplied

- Production domain and hosting destination.
- Official logo or company photography, if available. The temporary text wordmark and clearly illustrative photography can support the review version.

### Completed in this stage

- Read all four pages of the company profile.
- Cross-checked registration details, business scope, commodities, addresses and contacts.
- Preserved the exact proposed mission, vision and values.
- Defined copy and working action targets for all requested page sections.
- Recorded content limitations and publication dependencies.

The content-foundation stage changed documentation only. Visual direction is recorded in DESIGN.md, and subsequent implementation progress is tracked in IMPLEMENTATION.md.
