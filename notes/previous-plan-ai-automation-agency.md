# Agency website

Status: planning. Nothing is built yet. `agency` is a working folder name; rename it once the brand is chosen.

## Owner

Idrees alone. No partners, no team brand. Proof on the site comes only from Idrees's own work. Position it as founder led: the buyer talks to the person who builds the system. Solo capacity means a productized offer with a small number of client slots, not open ended custom work.

## What this site sells

AI automation and AI implementation work, sold as the solution to one specific business problem. The problem and the buyer are not chosen yet.

## Positioning rules

- Sell the outcome, never the tools. No tool names (n8n, Make, Claude, LangGraph and so on) in the hero, offer, headlines or calls to action.
- One problem, one buyer, one offer, one call to action per page.
- Every claim needs real proof: a live demo, a short walkthrough video, or a real result with real numbers. No invented testimonials, logos or stats.
- Copy follows Idrees's writing rules: no hyphens or dashes in prose, natural low ego Western founder tone.
- No marketing copy until the niche is locked. Build structure with placeholder text only.
- All niche specific copy lives in one content file per niche, so the same template can launch two or three niche landing pages and outbound results pick the winner.

## Proposed stack (confirm with Idrees before building)

Deployment is skipped for now (Idrees, 23 Oct 2026). No GitHub repo, no `gh` login, no Netlify setup until he says so. Build and preview locally only.

- Astro static site with Tailwind CSS
- GitHub repo through `gh`, deployed on Netlify free tier
- Main call to action: Cal.com free booking embed
- Lead form posts to an n8n webhook that enriches, scores and notifies. Netlify Forms as the fallback.
- Supabase only when a feature needs a database (client portal, saved audit results). Not in v1.
- Analytics: Cloudflare Web Analytics (free, cookieless, no consent banner needed)

## v1 structure: one landing page plus a privacy page

1. Hero: the problem in the buyer's own words, the outcome, the call to action
2. What the problem costs them each month
3. How it works in three steps
4. Proof
5. The offer: fixed scope pilot
6. FAQ that answers objections (data safety, what happens when it breaks, no tools to learn)
7. Final call to action

## Open decisions

1. The problem and the buyer (niche), or two or three candidates to test
2. Brand: Idrees's own name or a studio name, plus the domain
3. Offer shape and pilot price
4. Target geography (currency, time zone, privacy law)
5. Where n8n runs in production for the lead intake
