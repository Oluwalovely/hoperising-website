# Website asset record

## Client cashew and additional soya bean photographs, 17 November 2026

- Converted three new client JPEGs to WebP using Sharp, automatic orientation and quality 82. Original JPEGs are retained and dimensions are unchanged.
- `cashew.webp`: 728 x 1280, 180,744 bytes (JPEG: 197,901 bytes). Replaces the generated cashew illustration in the commodity card.
- `cashew_bags.webp`: 1170 x 1085, 67,688 bytes (JPEG: 103,370 bytes). Paired with the cashew workspace photograph.
- `soyabeans2.webp`: 598 x 1169, 95,252 bytes (JPEG: 117,968 bytes). Added alongside the existing client soya bean photograph.
- All four commodity cards now use client photographs. The hero retains its existing cashew illustration, and other sections are unchanged by this asset update.

## Approved hero composition, 17 November 2026

- The hero now pairs the existing generated `cashew-hero.webp` with the client's `workplace2.webp` in a smaller supporting frame. No new imagery was generated.
- The main image remains an illustrative commodity scene, and its alternative text retains that distinction. The workspace image shows the actual truck and produce sacks supplied by the client.
- Responsive CSS crops the workspace photograph toward its lower portion without altering the retained source files.

## Client cocoa and soya bean photographs, 17 November 2026

- Converted the three additional client JPEGs to WebP using Sharp, automatic orientation and quality 82. Original JPEGs are retained and dimensions are unchanged.
- `cocoa_seed.webp`: 811 x 892, 191,484 bytes (JPEG: 211,028 bytes).
- `cocoa_bags.webp`: 869 x 985, 83,758 bytes (JPEG: 118,856 bytes).
- `soyabeans.webp`: 892 x 1280, 98,944 bytes (JPEG: 138,399 bytes).
- The cocoa card now pairs the actual beans and bag photographs. The soya bean card uses the client's sack and handful photograph. These replace the generated commodity illustrations in those cards; earlier assets remain on disk for reference.
- Cashew, sesame, workspace and hero imagery are unchanged. The proposed hero redesign has not been implemented.

## Client photographs and sesame seeds, 17 November 2026

- The user supplied four JPEG photographs and identified sesame seeds as an additional commodity. This update supplements the original profile rather than attributing sesame to that document.
- Converted all four to WebP with Sharp, automatic orientation and quality 82, preserving their dimensions and retaining the original JPEG files.
- `sesame_seed.webp`: 843 x 1225, 107,778 bytes (JPEG: 152,878 bytes). Used in the new sesame seeds commodity card.
- `sesame_seed_bags.webp`: 640 x 1280, 22,872 bytes (JPEG: 45,064 bytes). Used beside the seed close-up in the same card.
- `workplace.webp`: 730 x 1280, 190,212 bytes (JPEG: 212,706 bytes).
- `workplace2.webp`: 1170 x 1207, 58,668 bytes (JPEG: 98,436 bytes).
- Both workspace photos now appear in About, replacing the generated produce-sack illustration. That earlier asset remains on disk for reference.
- Cashew, soya bean, cocoa and hero images are unchanged. No visible illustrative-image captions have been added.
- The sesame description invites enquiries and does not promise stock, quantities, grades or delivery.

## Logo favicon update, 16 November 2026

- Replaced the temporary `H` SVG favicon with icons converted from the user-supplied logo, preserving the full artwork and proportions.
- `src/app/favicon.ico` contains 16, 32, 48 and 64 pixel PNG frames for browser tabs.
- `src/app/icon.png` is a transparent 192 x 192 PNG. `src/app/apple-icon.png` is a 180 x 180 PNG with an ivory background for Apple home screens.
- Next.js supplies icon metadata through its file conventions. Earlier references below to the temporary favicon describe the initial review version.

## Cocoa and caption update, 16 November 2026

- Cocoa was added at the user's request. The original PDF does not name cocoa; the website card invites enquiries without claiming stock availability.
- Asset: `public/images/cocoa-commodity.webp`, 1280 x 960 WebP, generated using the built-in image generation tool and optimised with Sharp.
- Original: `C:\Users\E M M I E\.codex\generated_images\01a1d959-5c1f-7dd0-a8c1-934f110ac782\exec-d3f895da-b1a6-4d8f-8cac-d993eb93191e.png`.
- The user requested removal of visible illustrative-image captions. Those captions have been removed from the hero, About and commodity sections. Earlier caption records below describe the initial review version. Alternative text still describes generated illustrations, and no image is labelled as company stock or premises.

### Cocoa generation prompt

```text
Create one landscape 4:3 photorealistic editorial commodity still life for a restrained Nigerian agricultural trading corporate website. Close view of dry fermented brown cocoa beans filling an open coarse woven jute sack, with a few cocoa beans resting on plain dark neutral wood at its base. Natural soft side lighting, muted warm browns and subtle olive background, realistic textures, focus on the beans and sack rim with softly blurred unbranded sacks behind. Match understated premium commodity photography. No cocoa powder, no coffee beans, no chocolate products, no text, no logos, no people, no machinery, no identifiable company premises. This is a generated commodity illustration, not a record of a company's inventory or operations.
```

## User-supplied company logo

- Asset: `public/images/hoperising_logo_transparent_512.webp`, a 512 x 512 transparent WebP supplied by the user.
- Used in the header and footer without cropping, recolouring or altering the artwork. The footer uses an ivory backing to keep the logo readable.
- The full registered company name remains displayed alongside the header logo and below the footer logo.
- The temporary favicon and text-based sharing image remain separate assets.

## Sharing image and temporary favicon

- `src/app/opengraph-image.tsx` renders a 1200 x 630 PNG through Next.js ImageResponse using the company wordmark text, business description, incorporation year and RC number. This is a code-rendered corporate graphic, not an AI-generated photograph. A reviewed rendering is saved at `docs/audits/social-preview.png`.
- `src/app/icon.svg` contains a typographic H in the agreed colours. It is a temporary favicon derived from the text identity, not a company-supplied official logo.

## Commodities: Cashew

- Website asset: `public/images/cashew-commodity.webp`.
- Origin: built-in image generation tool, new image with no photographic input.
- Original retained at: `C:\Users\E M M I E\.codex\generated_images\01a1d959-5c1f-7dd0-a8c1-934f110ac782\exec-9e853f0f-9977-44f1-a91c-ff0d6c8c0464.png`.
- Optimised project version: 1280 x 960 WebP, 247,694 bytes, converted with the existing Sharp dependency.
- Caption shared by the pair: "Illustrative commodity images."
- Generated imagery illustrates the named commodity and does not document current company stock, premises or operations. No stock-photo licence or photographer attribution is claimed.

### Final generation prompt

```text
Use case: photorealistic-natural. Asset type: illustrative cashew commodity image for a corporate agricultural trading website. One landscape 4:3 close view of raw unshelled cashew nuts with grey brown textured kidney-shaped shells piled inside an open coarse jute sack. Tightly framed from a slight overhead angle: entire frame is nuts and soft folds of burlap around lower corners, no room or premises. Natural diffused side light, warm earth tones with subtle deep olive shadows, highly realistic irregular produce textures, crisp foreground and gentle depth of field, restrained editorial agricultural commodity photography. No roasted pale kernels, no other produce, no people, hands, plants, branding, printed labels, logos, lettering, or watermark. This is a neutral illustrative scene and must not depict an identifiable company's stock.
```


## Commodities: Soya beans

- Website asset: `public/images/soya-commodity.webp`.
- Origin: built-in image generation tool, new image with no photographic input.
- Original retained at: `C:\Users\E M M I E\.codex\generated_images\01a1d959-5c1f-7dd0-a8c1-934f110ac782\exec-785d9907-b825-40ac-8775-f416e9ef0faa.png`.
- Optimised project version: 1280 x 960 WebP, 145,516 bytes, converted with the existing Sharp dependency.
- Caption shared by the pair: "Illustrative commodity images."
- Generated imagery illustrates the named commodity and does not document current company stock, premises or operations. No stock-photo licence or photographer attribution is claimed.

### Final generation prompt

```text
Use case: photorealistic-natural. Asset type: illustrative soya bean commodity image for a corporate agricultural trading website. One landscape 4:3 close view of dry soya beans piled inside an open coarse jute sack. Botanically recognisable dry soybeans: small round to slightly oval pale straw-yellow beans with visible tiny brown elongated hila on some beans, NOT kidney beans or chickpeas. Tightly framed from a slight overhead angle: entire frame is beans and soft folds of burlap around lower corners, no room or premises. Natural diffused side light, warm earth tones with subtle deep olive shadows, highly realistic irregular produce textures, crisp foreground and gentle depth of field, restrained editorial agricultural commodity photography. No other produce, no people, hands, plants, branding, printed labels, logos, lettering, or watermark. This is a neutral illustrative scene and must not depict an identifiable company's stock.
```


## About: illustrative produce sacks

- Website asset: `public/images/produce-sacks-about.webp`.
- Origin: built-in image generation tool, new image with no photographic input. This is a generated illustration, not company photography.
- Original retained at: `C:\Users\E M M I E\.codex\generated_images\01a1d959-5c1f-7dd0-a8c1-934f110ac782\exec-12f3359e-b17d-4318-aa32-02a195c475d3.png`.
- Optimised version: 1440 x 1080 WebP, 252,502 bytes, converted using the existing Sharp dependency.
- Purpose: a neutral produce-trading illustration. No identifiable premises, people, brands or additional named commodities are shown.
- Visible caption: "Illustrative image. Not company premises."
- Alternative text: "Illustration of tied woven jute produce sacks on a plain floor".
- No stock-photo licence or photographer attribution is claimed. Company-supplied or licensed photography can replace this asset later.

### Final generation prompt

```text
Use case: photorealistic-natural. Asset type: supporting illustrative image for the About section of an agricultural commodity trading company website. Landscape 4:3 editorial still life showing a small group of closed unbranded woven jute produce sacks gathered and tied with coarse rope, standing on a plain worn neutral concrete floor. Mid-distance view, three sacks in foreground with several softly out of focus behind, no identifiable building or premises. Natural window light from left, muted brown burlap with deep olive green shadows, realistic coarse weave and irregular full sack shapes, understated documentary-style commercial photography. No visible contents, no writing or labels, no logos, no people or hands, no flags, no machinery, no cultivated fields, no livestock. Do not imply any identifiable company owns the sacks. Generate one landscape image with the main sacks well framed and usable as a 4:3 website image; no text, no watermark.
```

## Hero: illustrative cashew sacks

- Website asset: `public/images/cashew-hero.webp`.
- Origin: built-in image generation tool, new image. No company or third-party photograph was used as an input.
- Original retained at: `C:\Users\E M M I E\.codex\generated_images\01a1d959-5c1f-7dd0-a8c1-934f110ac782\exec-0732abe1-0d55-44ae-b931-ab0595284c4a.png`.
- Optimised project version: 1440 x 1080 WebP, 331,330 bytes. Converted using the project's existing Sharp dependency.
- Purpose: illustration of a commodity identified in the company profile. It does not document HOPERISING premises, stock, personnel or operations.
- Visible caption: "Illustrative image. Not company premises."
- Alternative text: "Illustration of cashew nuts in their shells in open woven produce sacks".
- The reference image plan is real commodity photography. This generated illustration supports the first review and can be replaced with company-supplied or licensed photography. No stock-photo licence or photographer attribution is claimed for generated imagery.

### Final generation prompt

```text
Use case: photorealistic-natural. Asset type: illustrative agricultural commodity image for a Nigerian produce trading company website. Create one photorealistic editorial still-life, landscape 4:3 composition, of unprocessed cashew nuts IN THEIR SHELLS filling open coarse woven jute sacks. Foreground sack clearly shows recognisable grey-brown kidney-shaped whole cashew nuts in shell; a few scattered cashew nuts in shell on a dark rough tabletop at the lower edge. Two or three softly blurred unbranded burlap produce sacks in the back, no identifiable premises. Natural side light, rich realistic coarse textures, deep olive green shadows and warm brown neutral produce colours. Restrained commercial photography, subtle natural grain, no artificial glow, no dramatic sunset. Camera at sack height, closely cropped, focus on foreground nuts and sack rim, image fills whole frame with texture, no text space necessary because website text is outside image. No people, no hands, no brands, no logos, no text, no watermarks, no leaves or crops in fields, no machinery. This is an illustrative scene, not a depiction of a real company's facilities.
```
