# Ansareez website requirements

The client's list of what the website build must include (Abdullah Hashmi, WhatsApp, 25 Oct 2026). Status as of 26 Oct 2026.

| # | Requirement | Status | Where it is, and what is left |
| :- | :- | :- | :- |
| 1 | Custom logo design | v1 done | Logo mark in header, footer and favicon (`LogoMark.astro`, `public/logo-mark.svg`). Needs client approval. Still to make: full logo files with the name outlined, for print and social profile pictures. |
| 2 | Social media connectivity and integration | Built, needs links | Profile links in the footer and contact section, share tags (Open Graph and Twitter cards) and a share image (`public/og.png`). Needs the real profile URLs in `src/data/site.ts`. The share image switches on once the domain is set in `astro.config.mjs`. |
| 3 | Fully responsive design | Done | Checked at 320, 375, 768, 1024, 1280 and 1440px. |
| 4 | Custom domain (.com, .net or .org) | Launch | Client to choose and buy. Deployment is on hold. |
| 5 | Modern, clean layout with custom branding | Done | Client colours sampled from their reference design, Rubik type, custom graphics. |
| 6 | High quality images and gallery | Built, needs photos | Gallery with automatic resizing and a lightbox (tested). It stays hidden until photos exist: add them to `src/assets/gallery/` and list them in `src/data/gallery.ts` with a description. |
| 7 | Contact forms and call to action buttons | Built | Contact form with validation (tested), spam trap and a thank you page. "Get in touch" buttons throughout. Messages start arriving once the site is on Netlify (Netlify Forms, free tier limits apply). |
| 8 | Basic SEO | Built | Page titles and descriptions, business details for Google (address and the three services), robots.txt, British English. After launch: set the domain in `astro.config.mjs` for canonical links, add a sitemap, and submit it in Google Search Console. |
| 9 | Speed optimisation | Built | Static pages, almost no JavaScript, self hosted font, automatic image compression. Run a performance trace on the live site. |
| 10 | Free SSL certificate | Launch | Netlify issues free HTTPS certificates automatically. |
| 11 | Free business email, up to 5 addresses | Launch | Needs the domain first. Check the current limits of free plans (for example Zoho Mail) before promising one. |
| 12 | Google Analytics | Built, needs ID | GA4 with a UK cookie consent banner (tested): nothing loads until the visitor accepts. Add the measurement ID in `src/data/site.ts`. |
| 13 | Cross browser compatibility | Mostly done | Built on widely supported features. Test on a real iPhone (Safari) and in Firefox before launch. |
| 14 | 5 to 7 custom web banners and graphics | 5 done | Service map (Grow, Automate, Protect), three service banners, social share image. Two more if wanted, for example Facebook and LinkedIn cover banners. |
| 15 | Six months of maintenance | After launch | Updates, backups and security. Set up the routine once hosting is chosen. |
| 16 | Basic CMS training | Decision needed | The site has no CMS yet. Pick a free Git based CMS (for example Decap or Sveltia) at deployment and move the copy into editable files. The client's message was cut off after "Basic CMS Training to Manage Your C…", so there may be more items. |
