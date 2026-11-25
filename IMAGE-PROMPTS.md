# LUTU — image prompts

Prompts behind every image on the site, and the rules for replacing them.

## Read this first

**None of these images may be presented as LUTU's work.** The site sells real
photography. AI pictures of products or models would be fabricated portfolio,
which is the one thing the brief rules out — and a Gulf brand that spots it
will not come back.

So every prompt here is **empty location and texture only**: landscape, light,
surface. No products. No models. No implied client. These are backgrounds and
atmosphere — the visual equivalent of saying "this is what Cape Town looks
like", which is true.

Each location card carries the label *"AI reference image, not our
photography"* in both languages, and the note under the grid says the same.
**If you replace an image with a real frame, remove its label.** If you add a
slot, add the label with it.

The moment you have one real shoot, replace the hero and the share cards with
real frames. Keep AI only for texture.

Palette to stay inside: ink `#1A1816`, sand `#E8DFD1`, deep sand `#CDBFA8`,
off-white `#FAF7F2`, teal `#2F6B6B`.

## What is on the site now

| Slot | File | Size |
|---|---|---|
| Hero | `hero-coast.webp` + `hero-coast-900.webp` | 1600×900, 900×507 |
| Share card (EN) | `share-card.webp` | 1200×630 |
| Share card (AR) | `share-card-ar.webp` | 1200×630 |
| Location — Atlantis Dunes | `loc-dunes.webp` | 800×1200 |
| Location — Ocean | `loc-ocean.webp` | 800×1200 |
| Location — Mountain | `loc-mountain.webp` | 800×1200 |
| Location — Garden | `loc-garden.webp` | 800×1200 |

Every slot is filled. Nothing below needs generating unless you are replacing
something. Full-resolution PNG sources are in `assets/_src-*.png`, gitignored.

---

## Location cards — 1024 × 1536, portrait

Shot as a consistent set: same light treatment, same desaturation, so they
read as one body of work. Downsized to 800×1200 WebP for the site.

### Atlantis Dunes

> A portrait-format photograph of a single curved dune crest against a pale
> sky, Atlantis Dunes, South Africa. Late afternoon side light picking out the
> ripple texture in the sand. Empty, no people or tracks. Warm sand and bone
> tones, soft shadow, matte finish, natural grain. Quiet and minimal.

### Ocean

> A portrait-format photograph of the Atlantic coastline near Cape Town in
> cold overcast light. Dark wet granite boulders in the foreground, pale sand,
> a flat silver sea meeting a long low horizon high in the frame. Completely
> empty — no people, no boats, no buildings, no objects, no footprints. Cool
> muted almost-monochrome palette of slate grey and silver with warm bone sand
> tones at the base. Calm and spacious, not dramatic, no crashing waves.
> Editorial fashion-campaign location reference, shot on medium format film,
> natural grain, matte finish, slightly desaturated.

### Mountain

> A portrait-format photograph of a steep mountain pass in the Western Cape,
> South Africa — layered sandstone cliffs and dry scrub slopes receding into
> soft haze, late afternoon side light raking across the rock faces.
> Completely empty: no people, no vehicles, no road markings, no buildings, no
> signage. Muted palette of warm stone, dust, sage green and pale grey,
> slightly desaturated. Quiet and vast rather than dramatic. Editorial
> location reference, shot on medium format film, fine natural grain, matte
> finish.

### Garden

> A portrait-format photograph of a shaded private garden in Cape Town: a high
> whitewashed lime-plaster wall on one side, mature dark-green foliage and a
> gravel path, dappled light falling through leaves onto the wall. Completely
> empty — no people, no furniture, no pots, no sculptures, no signage. Deep
> greens with warm bone and sand tones in the plaster, muted and slightly
> desaturated, soft diffused light. Private, enclosed and calm. Editorial
> location reference, medium format film, fine natural grain, matte finish,
> shallow depth of field falling away behind.

---

## Hero — 2400 × 1600, landscape

Sits behind the headline, so it must not fight the type.

> A quiet wide photograph of the Atlantic coastline near Cape Town in soft
> overcast light. Dark wet granite boulders in the mid-ground, pale sand, a
> flat silver sea meeting a low horizon. Completely empty of people and
> objects. Cool muted palette, almost monochrome, with warm sand tones in the
> foreground. Calm and spacious, not dramatic. Editorial, understated, shot on
> film with natural grain. Large areas of low contrast suitable for white text
> over the image.

---

## Share cards — 1200 × 630, no text in the image

The title and description come from the meta tags. WhatsApp is the whole sales
channel, so these are the highest-traffic images on the site.

### English — light from the left

> A wide cinematic photograph of the Atlantis Dunes near Cape Town at golden
> hour. Smooth wind-sculpted sand ridges running diagonally across the frame,
> deep shadow in the troughs, warm low sun raking from the left. Empty — no
> people, no objects, no footprints in the foreground. Muted warm palette of
> sand, bone and soft grey-brown, slightly desaturated, editorial fashion
> campaign look. Shot on medium format, 80mm, shallow depth in the far dunes,
> fine natural grain. Negative space across the upper third for text overlay.

### Arabic — light from the right

Mirrored so the composition suits a right-to-left layout.

> A wide cinematic photograph of late sun on a smooth wind-sculpted sand ridge
> near Cape Town, with warm low light entering from the right-hand side of the
> frame and deep soft shadow in the troughs on the left. Completely empty — no
> people, no objects, no footprints, no vegetation. Muted warm palette of
> sand, bone and soft grey-brown, slightly desaturated, editorial fashion
> campaign look. Shot on medium format, fine natural grain, matte finish.
> Large area of clean negative space across the right half of the frame for
> text overlay. No text, no lettering, no watermark anywhere in the image.

---

## When a new file comes back

- Export as **WebP, quality ~80**, and keep every image **under 150 KB** —
  fonts are already 256 KB of the page weight. The mountain card needed
  quality 70 to get there.
- Put it in `/assets/`, keep the full-resolution PNG as `assets/_src-<name>.png`.
- Location cards are 800×1200 and need `width`, `height` and `loading="lazy"`,
  or the grid shifts as they load.
- Alt text in **both** languages.
- A share card also needs `og:image`, `og:image:width`, `og:image:height`,
  `og:image:alt` and `twitter:image` updating on that language's page.

## What AI cannot give you

A brand shipping products to Cape Town wants to see **their category shot by
you**: a bottle on wet granite, fabric moving in the Atlantic wind, a model in
modest styling on a dune. That is the proof that sells the Ramadan pack, and
it has to be real.

The December test shoot in the sales pack is what produces it. These images
buy you a site that looks finished until then.
