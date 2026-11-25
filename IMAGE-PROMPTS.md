# LUTU — image prompts

Prompts for GPT Image / DALL·E to fill the empty visual slots on the site.

## Read this first

**None of these images may be presented as LUTU's work.** The site sells real
photography. AI pictures of products or models would be fabricated portfolio,
which is the one thing the brief rules out — and a Gulf brand that spots it
will not come back.

So every prompt below is **empty location and texture only**: landscape,
light, surface. No products. No models. No implied client. These are
backgrounds and atmosphere — the visual equivalent of saying "this is what
Cape Town looks like", which is true.

The moment you have one real shoot, replace the hero and the share card with
real frames. Keep AI only for texture.

Palette to stay inside: ink `#1A1816`, sand `#E8DFD1`, deep sand `#CDBFA8`,
off-white `#FAF7F2`, teal `#2F6B6B`.

---

## 1. Social share card — do this one first

The site has **no `og:image`**. Every WhatsApp link Turki sends currently
previews as a grey box with no picture. This is the highest-value image on
the list, because WhatsApp is the whole sales channel.

**1200 × 630. No text in the image** — the title and description come from
the meta tags.

> A wide cinematic photograph of the Atlantis Dunes near Cape Town at golden
> hour. Smooth wind-sculpted sand ridges running diagonally across the frame,
> deep shadow in the troughs, warm low sun raking from the left. Empty — no
> people, no objects, no footprints in the foreground. Muted warm palette of
> sand, bone and soft grey-brown, slightly desaturated, editorial fashion
> campaign look. Shot on medium format, 80mm, shallow depth in the far dunes,
> fine natural grain. Negative space across the upper third for text overlay.

---

## 2. Hero background

Sits behind "Worn once. Remembered always." — must not fight the type.
**2400 × 1600, landscape.**

> A quiet wide photograph of the Atlantic coastline near Cape Town in soft
> overcast light. Dark wet granite boulders in the mid-ground, pale sand, a
> flat silver sea meeting a low horizon. Completely empty of people and
> objects. Cool muted palette, almost monochrome, with warm sand tones in the
> foreground. Calm and spacious, not dramatic. Editorial, understated, shot on
> film with natural grain. Large areas of low contrast suitable for white text
> over the image.

---

## 3–6. Location set

These illustrate the four locations named in the copy. Shoot them as a
consistent set — same light, same treatment — so they read as one body of
work. **1600 × 2000, portrait**, to sit in a grid.

### 3. Atlantis Dunes

> A portrait-format photograph of a single curved dune crest against a pale
> sky, Atlantis Dunes, South Africa. Late afternoon side light picking out the
> ripple texture in the sand. Empty, no people or tracks. Warm sand and bone
> tones, soft shadow, matte finish, natural grain. Quiet and minimal.

### 4. Fynbos hills

> A portrait photograph of Cape fynbos scrub on a hillside in flat morning
> light — fine silver-green restio grasses, small grey-leaved proteas, dry
> stems, no flowers in bloom. Soft diffused overcast. Muted sage, dust and
> bone palette. No people, no path, no buildings. Textural and close, shallow
> depth of field falling away behind.

### 5. Winelands architecture

> A portrait photograph of a whitewashed Cape Dutch gable wall in the Western
> Cape winelands, strong afternoon sun creating a hard diagonal shadow across
> the lime-washed plaster. Fragment of the building only — no full facade, no
> signage, no vehicles, no people. Warm white, deep shadow, a strip of dry
> grass at the base. Architectural, graphic, quiet.

### 6. Private villa interior

> A portrait photograph of an empty corner of a modern Cape Town villa:
> off-white plaster wall, a slab of pale travertine floor, soft daylight
> falling from an unseen window on the left, one long shadow. No furniture, no
> decoration, no people. Warm neutral palette, bone and sand, very calm.
> Architectural interior photography, natural light only.

---

## 7. Season / texture band

A quiet divider for the season section. **2400 × 900, wide and shallow.**

> An abstract close photograph of dry rippled sand filling the whole frame,
> lit from a low angle so the ridges throw fine shadows. No horizon, no sky,
> no objects. Warm sand and soft grey-brown, almost a textile. Very shallow
> depth of field. Minimal and tactile.

---

## 8. Arabic page share card

The Arabic page shares the English card unless you give it its own.
**1200 × 630, no text.**

> A wide photograph of late sun on a sand ridge, Cape Town, with the light
> entering from the right-hand side of the frame. Warm, soft, empty. Muted
> sand and bone palette, editorial, fine grain. Negative space on the right
> for Arabic text overlay.

Light from the right, mirroring prompt 1, so the composition suits a
right-to-left layout.

---

## When the files come back

- Export as **WebP**, quality ~80. The whole site is 315 KB today, 256 KB of
  that fonts — keep every image under 150 KB or first load doubles.
- Put them in `/assets/`.
- Add `width`, `height` and `loading="lazy"` to every `<img>` below the fold,
  or the page will shift as they load.
- The share card needs `og:image`, `og:image:width`, `og:image:height` and
  `twitter:card="summary_large_image"` in `<head>` — none of which exist yet.
- Every image needs alt text in both languages.

## What AI cannot give you

A brand shipping products to Cape Town wants to see **their category shot by
you**: a bottle on wet granite, fabric moving in the Atlantic wind, a model in
modest styling on a dune. That is the proof that sells the Ramadan pack, and
it has to be real.

The December test shoot in your sales pack is what produces it. These prompts
buy you a site that looks finished until then.
