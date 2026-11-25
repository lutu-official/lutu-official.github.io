# LUTU — website v1

Static site. No framework, no build step. HTML, CSS and about 200 lines of vanilla JS.

```
/index.html            English home (one page)
/ar/index.html         Arabic home, RTL — DRAFT, Turki to review
/css/style.css         all styling, CSS variables at the top
/js/quote.js           quote builder + analytics events (the only JS)
/config/pricing.json   EVERY price lives here
/config/site.json      contact details, social handles, switches
/fonts/                self-hosted woff2 (Cormorant, Inter, IBM Plex Sans Arabic)
/privacy/ /terms/ /licence/        legal drafts (EN)
/ar/privacy/ /ar/terms/ /ar/licence/   legal drafts (AR)
/llms.txt /robots.txt /sitemap.xml
```

## Run it locally

Anything that serves static files will do. The site uses absolute paths (`/css/…`), so it
must be served from the directory root — opening `index.html` with a double-click will not
load the CSS.

```
cd lutu-studio
python3 -m http.server 8000
```

Then open http://localhost:8000 and http://localhost:8000/ar/

## Change the prices

All of them are in `config/pricing.json`. Nothing is hard-coded anywhere else.

- Every price is in whole US dollars. While a price is `0`, the site shows **"Price on request"**
  instead of `$0`, and the quote builder refuses to show a total. That is deliberate — set the
  numbers and the totals start working on their own.
- `depositPercent` — currently 50.
- `minimumOrder` — set above 0 to enforce a floor.
- `launchDiscount` — set `enabled: true` and a `percent` to show the normal price struck through
  next to the launch price. Put the brand count in `forFirstBrandsText`.
- `packs.*.price` — the three pack cards. `seasonPartner` has `price: null`, which is what makes
  its button say "Talk to us" instead of showing a number.

## Change contact details

`config/site.json`. Email, WhatsApp number, social handles, domain, form endpoint and the
season banner date are all there, each with a note explaining it. Change once, changes everywhere
and in both languages.

To switch the email from `hello@lutu.co.za` to `hello@lutu.co.za`, change
`contact.email` — and also search the HTML for `mailto:` once, because the no-JavaScript form
fallback has it inline.

## Swap the photographs

Every image on the site is currently a labelled placeholder — a striped block for locations,
a CSS gradient for the hero. There are no image files to replace yet.

When real photographs exist, put them in `/assets/` and:

- **Hero** — replace the `<div class="hero__media" style="background:linear-gradient(...)">`
  in `index.html` and `ar/index.html` with `<img src="/assets/hero.jpg" alt="…">`.
- **Locations** — replace each `<div class="ph">Placeholder — …</div>` with
  `<img src="/assets/location-dunes.jpg" alt="…" loading="lazy">` and delete the
  `<span class="ph-label">Placeholder image</span>` beneath it.

Compress before committing. Aim under 250 KB each, 1600px on the long edge.

## Turn on the enquiry form

Create a form at Formspree (or Netlify Forms) and put the endpoint in
`config.forms.endpoint`. Until that is set, the form falls back to a `mailto:` submission so
it still does something. A honeypot field (`_gotcha`) is already in place.

## Turn on analytics

1. Create the site in Plausible.
2. Set `analytics.enabled: true` in `config/site.json`.
3. Uncomment the Plausible `<script>` in the `<head>` of `index.html` and `ar/index.html`.

Events already wired: `whatsapp_click`, `quote_sent`, `pack_chosen`, `language_switch`.
No cookie banner is needed — the site sets no cookies.

## Deploy

**GitHub Pages.** Push this repo, then Settings -> Pages -> deploy from
branch `main`, folder `/` (root). No build step, no framework.

`CNAME` in the repo root holds the custom domain (`lutu.co.za`). Do not
delete it: Pages rewrites it from the Settings field, and losing it drops
the custom domain.

### DNS still has to change

As of 25 November 2026 `lutu.co.za` resolves to `169.239.219.58`, which is
the registrar's parking IP. For GitHub Pages the apex A records must be:

    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153

Leave the existing MX and TXT records alone - they run hello@lutu.co.za on
Google Workspace and are unrelated to hosting.

### No forms

GitHub Pages serves static files only and cannot process a form. The site
deliberately has none: enquiries come in by WhatsApp and email. If a form
is ever needed it requires a third-party service (Formspree or similar),
and the privacy policy must disclose that processor again.


## Things deliberately not built

Client accounts, a client portal, live AI image tools, a newsletter popup, a chatbot, and a
booking calendar. Payment is not taken on the site — there is a marked comment in the quote
builder summary of both language versions showing where a deposit link goes later.

## Honesty rules this site is built to

- It describes a shoot and content service. The words "shop", "buy", "collection" and "coat"
  do not appear.
- No fake clients, logos, testimonials, numbers or awards. The "Our work" section does not
  exist yet; `caseStudies.enabled` in `config/site.json` is the switch for when it does.
- Every placeholder image is visibly labelled as one.
- No other studio's work is shown or implied as LUTU's.
