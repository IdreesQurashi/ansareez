# Client site: Ansareez (digital agency, Slough)

Status: v1 built with the client's name, address, services, colours and build requirements (25 Oct 2026). Service wording and the lists under each service are drafts for the client to confirm. Not deployed. `agency` is a working folder name; rename it to `ansareez` when convenient.

The earlier plan for this folder (Idrees's own AI automation agency) is archived in `notes/previous-plan-ai-automation-agency.md`. It no longer applies here.

## Client and audience

- Idrees is building this site for Ansareez, a digital agency at 45 Hampshire Avenue, Slough, SL1 3AG. Details came from Abdullah Hashmi on WhatsApp (25 Oct 2026).
- Ansareez's three main services: digital marketing, AI automation and cybersecurity audits (Idrees, 25 Oct 2026). Buyers are businesses that want more customers, less manual work, or fewer security risks.
- More services, below the main three, in at most three groups (Idrees, 27 Oct 2026): Security and surveillance; IT infrastructure and support; Creative studio. The first two follow a reference site's service list; the creative group is Idrees's own example. Descriptions are written fresh; never copy that site's text or name it. Copy lives in `moreServices` in `src/data/home.ts`.
- The client's "What We Offer" list (logo, social integration, gallery, contact forms, SEO, SSL, business email, analytics, banners, maintenance, CMS training) is the scope of this website build, not their services. A previous session misread it as services. Track it in `notes/website-requirements.md`.
- UK business: British spelling in all copy, `lang="en-GB"`, UK GDPR and PECR (cookie consent before analytics).

## Stack (confirmed)

- Astro 7 static site, Tailwind CSS 4 through `@tailwindcss/vite`, TypeScript strict.
- Rubik Variable, self hosted through `@fontsource-variable/rubik`. No Google Fonts hotlinking.
- Deployment is skipped for now (Idrees, 23 Oct 2026). No GitHub repo, no `gh` login, no Netlify setup until he says so. Build and preview locally only. When it deploys: Netlify free tier, which also gives free SSL and Netlify Forms for the contact form. Vercel Hobby is non commercial, so never for client sites.
- Analytics: Google Analytics 4, because the client asked for it. `Analytics.astro` loads it only after the visitor accepts cookies. With `site.analytics.gaMeasurementId` empty, no analytics code or banner ships.
- CMS: required by the client (CMS training), not built yet. Decide at deployment (a free Git based CMS such as Decap or Sveltia), then move copy from `.ts` files into editable content files.

## Where things live

- `src/data/site.ts`: name, address, email, call to action, nav, social links, GA4 ID. Feeds the business JSON-LD and share tags in `Base.astro`.
- `src/data/home.ts`: all landing page copy, the three services and their lists.
- `src/data/gallery.ts`: gallery photos (files in `src/assets/gallery/`), each with alt text.
- `src/data/clients.ts`: the 17 brand logos the team has worked with (files in `src/assets/clients/`), each with the client's name and an optional website link, plus `clientTotal` (70) for the "50+ more brands" tile.
- `src/content/case-studies/*.md`: one file per case study, with `service` (marketing, automation or security) and `included`. Schema in `src/content.config.ts`.
- `src/components/`: one component per section, plus `LogoMark.astro`, `HeroArt.astro`, `ServiceArt.astro`, `Analytics.astro`.
- `src/pages/banners/og.astro`: source for `public/og.png` (share image). Regenerate by opening it at exactly 1200 x 630 and taking a screenshot. It uses plain CSS on purpose.
- `src/styles/global.css`: design tokens (`@theme`), type scale, buttons, form fields, hero animation.

## Design system

- Brand blue, sampled from the client's reference design (25 Oct 2026). Never change it (Idrees, 26 Oct 2026):
  - `brand` #0069F6: royal blue. Header, hero text side, contact section, buttons on light sections, icon orbs, focus ring.
  - `brand-light` #01A2F7: sky blue. Only behind the hero reels. White text on it is 2.8:1, so never put text on it.
  - `brand-deep` #0546B5: button hover and the raised edge of blue buttons.
- White and blue (27 Oct 2026). Idrees trialled a near black, then a fully black theme the same day, then went back to white and blue with the same colours, keeping the 3D. Supporting colours: cool tones that sit next to the blue. No yellow anywhere, nothing loud or garish (a coral and yellow version was rejected). White versions of the client logos from the dark trial sit unused in `src/assets/clients/white/`.
  - Each service owns one hue, used the same way everywhere (map cards, chips, service graphics, self check result, case study tags): marketing `grow` #01A2F7 (the client's own sky blue), AI `ai` #6A4DF4 (violet), security `secure` #0B7A72 (deep teal). Plain shades are fills and icons; `-soft` shades (#E8F5FE, #F0EDFF, #E5F5F3) are light tints for chips and graphic panels; `-ink` shades (#0A5C8F, #4B30C9, #0B6B63) are text. Mapping lives in `src/lib/service-style.ts`.
  - `night` #16113A: very dark violet, the self check band.
  - Neutrals: `base` #FFFFFF (white sections), `raise` #F6F7FB (paper sections and the page), `panel` #FFFFFF (cards and slabs), `fg` #0B1E3F (ink text), `fg-soft` #46597A (secondary text), `line` #D9E5F7 (hairlines), `field` #7C8BA6 (form borders, 3:1 on white), `danger` #C0262D, `ink` #0B1E3F (navy bands: What we do and the footer). Token names kept through the dark trial, so components use `fg`, `base`, `raise` and `panel`; flipping the values is how the theme changes.
- Page rhythm: hero (blue gradient) > clients (paper: "70+ brands in 4 years", 17 colour logos on white slab tiles and a "50+ more brands" tile) > what we do (navy ink, with the service map) > marketing (paper) > AI (white) > security (paper) > more services (white, three grouped rows) > why work with us (paper) > where to start (night) > process (white) > results and gallery (only with real content) > FAQ (paper) > contact (blue, white slab form) > footer (navy ink). Colour in the service sections lives in the graphics, chips and icons.
- Hero videos (28 Oct 2026): the client's three vertical clips (team meeting, code on screens, robot) play inside the reels as Marketing / Strategy sessions, Cybersecurity / Security audits and AI adoption / AI and automation. Originals were 4K and 70 MB; they live in `public/videos/` as 540 x 960 H.264 MP4s (about 650 KB each, no audio) with WebP poster frames. To swap one: compress with `ffmpeg -i in.mp4 -vf scale=540:960 -c:v libx264 -crf 27 -preset slow -movflags +faststart -an out.mp4`, make a poster with `ffmpeg -ss 0.8 -i out.mp4 -frames:v 1 out.webp`, and point `hero.feed` in `src/data/home.ts` at them. Only reels in view play; Pause motion, scrolling away, a hidden tab and reduced motion all stop them (posters show instead). If the clips are stock footage, keep the labels topical; never caption them as the Ansareez team or a client.
- Hero: headline "Grow, automate and protect your business." with the reels feed on the right (two columns of 9:16 reels in white, navy, night, violet and teal on a 3D tilted wall, drifting in opposite directions, pause button, still under reduced motion). Idrees preferred this over the illustration in the hero (26 Oct 2026).
- Service map (`ServiceMap.astro`): the Grow, Automate, Protect cards, labelled Marketing, AI adoption and Cybersecurity audits (Idrees's wording). Lives in the What we do section and animates once when scrolled into view.
- Hero background: `.hero-gradient`, solid royal blue under all text (left 58% from 768px up, top 60% below), blending to sky blue behind the reels.
- Buttons: white with ink text on blue and navy sections (`button-primary`), blue with white text on light sections (`button-accent`), both with a raised edge that presses down. White panels inside blue or navy sections carry `on-light` so their focus ring turns blue.
- Type: Rubik only, chosen to feel polite and approachable. Headlines semibold (600), body 400, labels 500 in sentence case. Hero headline: `clamp(2.475rem, 1.26rem + 4.68vw, 5.4rem)`.
- Logo v1: an open "A" that reads as a rising peak, with a node where the crossbar would be (`LogoMark.astro`, `public/logo-mark.svg`, favicon). Awaiting client approval.
- Self check (`SelfCheck.astro`, redesigned 27 Oct 2026 because the six question list looked long and messy): three yes or no questions, one per service, shown one at a time on a single slab card with a slim progress bar and two large 3D answer buttons (`.answer-button`), plus Back. The result names the first flagged service with its colour, lists any others as also worth a look, and its button pre-selects that service in the contact form; Start again resets it. Any link with `data-pick-service` does the same pre-select.
- 3D (27 Oct 2026, Idrees: "ultra 3D", but decent, and no patterns or backgrounds behind things). The 3D lives in the elements themselves:
  - `.slab`: every card, tile and panel is a raised slab with a few pixels of visible edge and a deep shadow (logo tiles, Why work with us cards, self check card, contact form). The outline is inside the slab shadow, so never add ring utilities to a slab. `.slab-pill` for chips and the pause button.
  - `data-tilt` (`src/scripts/tilt.ts`): logo tiles, the service map and the service illustrations lean towards the pointer and lift; `.tilt-glare` adds a sheen. Mouse and trackpad only, never with reduced motion.
  - Headings (`type-display`, `type-h2`, `type-h3`) have a short extrusion: light blue under ink letters on white, deep blue under white letters on blue and navy sections (`.on-brand`).
  - Buttons have a raised edge that presses down. Form fields are recessed. Yes and No answers press in when chosen. Process numbers and icon circles are glossy orbs (`.orb`).
  - Hero: the reels sit on a wall tilted in 3D (`.feed-stage`, `.feed-wall`) that leans towards the pointer. Service map cards have a drawn edge under each card.
  - Rejected on 27 Oct 2026: a WebGL sphere of glowing points behind the reels (Idrees: no patterns behind). Do not add background patterns, particles or decorative shapes.
- No all caps labels, no arrows on links, numbering only for real sequences (the process steps).
- One call to action across the site: Get in touch, which leads to the contact form.
- No opacity on text inside graphics or frames. It can drop below 4.5:1 contrast.
- Clients, Results and Gallery render nothing, and drop out of the menu, until there is a listed logo, a non draft case study or a listed photo. Placeholder case studies are `draft: true`. Clients alone previews with labelled placeholder slots in development (`npm run dev`), never in the build.

## Content rules

- No invented testimonials, logos, client names, stats or follower counts. Real numbers need a time period and a source.
- Track record source: the team's earlier company profile, supplied by Idrees on 27 Oct 2026. Ansareez is the same people under a new brand (Idrees confirmed). From it come "70+ brands in 4 years", the 17 client logos, the marketing channel list and the Why work with us promises.
- Never name the team's earlier company anywhere on the site or in this repo (Idrees's instruction). Present the work as the team's ("our team has worked with"), never as work Ansareez as a company did, and never claim the team designed those logos: they are the clients' own brand logos.
- Show a client logo only if that brand is fine being listed. Remove any that object. Update the count in `src/data/home.ts` and `clientTotal` as it grows; never round up.
- The Why work with us points (weekly reports and meetings, support team, senior review, brand first) come from the marketing side of the team. Confirm they also hold for AI and security work.
- Anything in [square brackets] in the copy is a fact only the client can supply.
- Security case studies never name a vulnerability that is still open.
- Copy follows Idrees's writing rules: no hyphens or dashes in prose, natural low ego tone, British spelling.

## Commands

- `npm run dev` (port 4321), `npm run check` (type check, run after every round of edits), `npm run build`.
- The scripts set `ASTRO_TELEMETRY_DISABLED=1` because the Claude sandbox cannot write `~/.config/astro`.
- After changing `src/content.config.ts`, restart the dev server. It keeps the old schema and shows an empty collection otherwise.

## Open decisions

1. Client approval of the logo, the service wording and the lists under each service
2. Domain, then business email, social profile links and the GA4 measurement ID
3. Confirm each listed brand is happy to appear; photos for the gallery; real case studies (one per service at least)
4. FAQ facts: audit scope, AI data handling, pricing, service area
4a. Which of the More services Ansareez really delivers in the UK. Hardware supply, CCTV and UPS installation need suppliers and qualified installers (hardwired UPS work counts as electrical work)
5. Whether to publish the full street address (if it is a home address, town only may be better)
6. CMS choice for the client's CMS training
7. The rest of the requirements list, since the client's message was cut off
8. Privacy policy text for UK GDPR (the page has the contact form and cookie sections filled in)
