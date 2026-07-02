# Handoff: Painter's Sales Website

## Overview
A full-page artist portfolio and sales site for Anisha Goyal, a painter who sells original oil paintings. The site includes a home page with gallery, about, commission form, and contact sections, plus a **painting detail page** accessible via client-side hash routing (`/#/painting-id`). The design is warm and editorial — dark forest green paired with aged parchment and gold accents.

## About the Design Files
The file `Annie Artist.dc.html` in this bundle is a **high-fidelity HTML prototype** — not production code to ship directly. Your task is to **recreate this design in your target codebase** (React, Next.js, Vue, etc.) using its established patterns and routing conventions. The HTML file is a pixel-accurate visual reference; treat every color, spacing, and typography value in it as final.

## Fidelity
**High-fidelity.** All colors, typography, spacing, shadows, and interactions are final. Recreate the UI pixel-accurately using your codebase's component library and router.

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--ap-dark` | `#1A2E26` | Dark backgrounds, buttons, nav brand text |
| `--ap-accent` | `#C9A84C` | Gold accent — labels, borders, CTA buttons |
| `--ap-bg` | `#F5F0E8` | Page background (warm parchment) |
| `--ap-footer` | `#0C1C12` | Footer background (deepest dark) |
| `--ap-green-mid` | `#2D4A3E` | Nav links, inline text links |
| `--ap-sage` | `#8FA67A` | Metadata, captions, section labels |
| `--ap-warm-body` | `#5A5040` | Body copy on light backgrounds |
| `--ap-warm-subtle` | `#8A7A64` | Secondary body copy |

### Typography
| Role | Family | Size | Weight | Style | Letter-spacing | Line-height |
|------|--------|------|--------|-------|----------------|-------------|
| Brand / Display | Cormorant Garamond | 22–78px | 300–600 | often italic | 2–4px | 0.96–1.42 |
| Body / UI | DM Sans | 10–16px | 300–500 | normal | 0–4px | 1.6–1.88 |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap
```

### Spacing
- Page horizontal padding: `64px`
- Section vertical padding: `80–96px`
- Grid gap (gallery cards): `28px`
- Grid gap (large feature): `28px`
- Nav height: `72px`

### Shadows
| Usage | Value |
|-------|-------|
| Featured gallery card | `2px 6px 28px rgba(26,46,38,0.14)` |
| Standard gallery card | `2px 4px 18px rgba(26,46,38,0.11)` |
| About portrait | `8px 8px 40px rgba(0,0,0,0.45)` |
| Detail page image | `4px 12px 52px rgba(26,46,38,0.16)` |
| Commission form card | `0 2px 24px rgba(26,46,38,0.07)` |

### Animations
| Name | Definition | Used on |
|------|-----------|---------|
| `fadeUp` | `opacity 0→1, translateY 28px→0, 0.7–0.8s ease, fill:both` | Hero text elements (staggered 0s, 0.1s, 0.2s, 0.3s) |
| `fadeIn` | `opacity 0→1, translateY 14px→0, 0.3s ease, fill:both` | Detail page container |
| `shimmer` | `opacity 0.12→0.22→0.12, 3s ease-in-out infinite` | Gold accent line in hero |

---

## Routing

The site is a **single-page app with hash routing**:

| URL | View |
|-----|------|
| `/` or `/#` or `/#gallery` | Home page |
| `/#/painting-id` | Painting detail page |

**Painting IDs:**
```
morning-mist
coastal-morning
mediterranean-still-life
golden-fields
summer-bouquet
into-the-forest
autumn-harvest
the-lemon-bowl
woodland-path
```

On navigation to `/#/painting-id`, scroll to top. On navigation back to `/#gallery` or `/#contact`, scroll to the corresponding section anchor.

---

## Screens

### 1. Home Page

#### Nav (sticky)
- `position: sticky; top: 0; z-index: 100`
- Background: `#F5F0E8`, border-bottom: `1px solid rgba(45,74,62,0.14)`, height: `72px`
- Left: Artist name — Cormorant Garamond 22px / 600 / letter-spacing 3px / uppercase / color `--ap-dark`
- Right: nav links — DM Sans 11px / letter-spacing 2.5px / uppercase / color `#2D4A3E` / opacity 0.85 / gap 40px
- Links: Gallery → `#gallery`, About → `#about`, Commission → `#commission`, Contact → `#contact`

#### Hero
- Dark background (`--ap-dark`), min-height 640px
- Two-column grid: `1fr 1fr`
- **Left column** (padding 90px 56px 90px 64px, flex column, justify-content flex-end):
  - Eyebrow: DM Sans 10px / letter-spacing 4px / uppercase / color `--ap-accent` — "Original Paintings · Landscapes & Still Life"
  - H1: Cormorant Garamond 78px / 300 / line-height 0.96 / color `#F5F0E8` — "The Art of *Unhurried* Seeing." (*Unhurried* in `--ap-accent` italic)
  - Body: DM Sans 15px / 300 / line-height 1.8 / color `rgba(245,240,232,0.58)` / max-width 360px
  - CTAs (flex row, gap 20px):
    - Primary button: padding 15px 34px / background `--ap-accent` / color `--ap-dark` / 11px / letter-spacing 2.5px / uppercase / font-weight 500 — "Explore the Collection"
    - Ghost link: 11px / letter-spacing 2px / color `rgba(245,240,232,0.52)` / border-bottom `1px solid rgba(201,168,76,0.35)` — "Commission a Painting →"
- **Right column** (position relative, overflow hidden, background `#0C1C12`):
  - Full-bleed painting image — link to `#/morning-mist`
  - Gradient overlay on left edge: `linear-gradient(to right, --ap-dark, transparent)`, width 100px
  - Painting label overlay (bottom right, 32px from edges): border `1px solid rgba(201,168,76,0.3)`, padding 14px 20px, background `rgba(26,46,38,0.72)`, backdrop-filter `blur(4px)`. Click → `#/morning-mist`
    - Title: Cormorant Garamond 18px italic `#F5F0E8`
    - Subtitle: DM Sans 10px / letter-spacing 2px / uppercase / `--ap-accent`
  - Gold shimmer line at bottom: height 2px, `linear-gradient(to right, transparent, --ap-accent 30%, --ap-accent 70%, transparent)`, `shimmer` animation

#### Gallery (`#gallery`)
- Background `#F5F0E8`, padding 80px 64px 88px
- Section header (flex, space-between, border-bottom `1px solid rgba(45,74,62,0.13)`, padding-bottom 20px, margin-bottom 48px):
  - Left: eyebrow "Current Collection" (10px / letter-spacing 4px / uppercase / `#8FA67A`) + H2 "Original Works" (Cormorant Garamond 44px / 300 / italic / `--ap-dark`)
  - Right: "Click any painting to view details" (13px / `#8FA67A` / 300)
- **Featured row** (`grid-template-columns: 2fr 1fr`, gap 28px, margin-bottom 28px):
  - Large card (Coastal Morning): `aspect-ratio: 16/10`, link to `#/coastal-morning`, `opacity: 0.84` on hover
  - Small card (Mediterranean Still Life): `aspect-ratio: 4/3`, link to `#/mediterranean-still-life`
  - Card captions: Cormorant Garamond italic title + DM Sans 12px `#8FA67A` medium/size, flex space-between with "Inquire →" link (10px / uppercase / `#2D4A3E` / underline)
- **3-col row** (`repeat(3, 1fr)`, gap 28px, margin-bottom 28px):
  - Golden Fields → `#/golden-fields` (aspect-ratio 4/3)
  - Summer Bouquet → `#/summer-bouquet` (aspect-ratio 4/3)
  - Into the Forest → `#/into-the-forest` (aspect-ratio 4/3)
- **4-col row** (`repeat(4, 1fr)`, gap 28px):
  - Morning Mist → `#/morning-mist` (aspect-ratio 3/4)
  - Autumn Harvest → `#/autumn-harvest` (aspect-ratio 3/4)
  - The Lemon Bowl → `#/the-lemon-bowl` (aspect-ratio 3/4)
  - Woodland Path → `#/woodland-path` (aspect-ratio 3/4)
- All gallery painting images: hover opacity 0.84, `transition: opacity 0.18s`

#### About (`#about`)
- Background `--ap-dark`, padding 96px 64px
- Grid: `380px 1fr`, gap 80px, align-items center
- Left: artist photo (aspect-ratio 3/4, overflow hidden, shadow `8px 8px 40px rgba(0,0,0,0.45)`) + gold border frame offset (absolute, top/left -14px, inset 14px, border `1px solid rgba(201,168,76,0.22)`)
- Right (color `#F5F0E8`):
  - Eyebrow: 10px / letter-spacing 4px / uppercase / `--ap-accent` — "About the Artist"
  - H2: Cormorant Garamond 52px / 300 / italic / line-height 1.08 — "Anisha Goyal"
  - Sub-label: 12px / letter-spacing 3px / uppercase / `rgba(201,168,76,0.65)` — "Painter · Business Analyst"
  - Three body paragraphs: 16px / 300 / line-height 1.84 / `rgba(245,240,232,0.72)`
  - CTAs (flex row, gap 32px): ghost outline button → `#commission` + underline text link → `#contact`

#### Quote Divider
- Background `#F5F0E8`, padding 80px 64px, text-align center
- Border top + bottom: `1px solid rgba(45,74,62,0.1)`
- Quote: Cormorant Garamond 36px / 300 / italic / `--ap-dark` / max-width 720px / line-height 1.42
- Attribution: DM Sans 11px / letter-spacing 3px / uppercase / `#8FA67A`

#### Commission (`#commission`)
- Background `#F5F0E8`, padding 88px 64px
- Grid: `1fr 1fr`, gap 96px
- **Left**: heading (Cormorant Garamond 48px / 300 / italic / `--ap-dark`), body copy, 3-step process list (icon = 32×32px square `--ap-dark` with gold italic numeral, DM Sans 13px labels)
- **Right**: white card (padding 44px 40px, shadow, border `1px solid rgba(45,74,62,0.1)`):
  - Form title: Cormorant Garamond 24px italic
  - Fields: name + email (2-col grid), subject dropdown, size dropdown, textarea (height 130px), submit button
  - Input style: padding 13px 16px, border `1px solid rgba(45,74,62,0.18)`, background `#FAFAF5`, DM Sans 14px
  - Submit: full-width, background `--ap-dark`, color `#F5F0E8`, 10px / letter-spacing 3px / uppercase

#### Contact (`#contact`)
- Background `--ap-dark`, padding 80px 64px
- Grid: `1fr 1fr`, gap 80px
- **Left**: heading, contact details (email/Instagram/location) — Cormorant Garamond 20px italic `#F5F0E8`
- **Right**: quick message form — inputs with background `rgba(245,240,232,0.05)`, border `1px solid rgba(201,168,76,0.18)`, color `#F5F0E8`. Submit: background `--ap-accent`, color `--ap-dark`

#### Footer
- Background `#0C1C12`, padding 28px 64px, flex space-between
- Left: artist name (Cormorant Garamond 17px / letter-spacing 2px / `rgba(245,240,232,0.55)`) + copyright (11px / `rgba(245,240,232,0.28)`)
- Right: nav links (10px / letter-spacing 2.5px / uppercase / `rgba(245,240,232,0.3)`)

---

### 2. Painting Detail Page (`/#/:paintingId`)

Replaces the home page when a painting is active. Enters with `fadeIn` animation (0.3s ease).

#### Nav
- Same sticky nav style as home, but:
  - Left: "← Back to Gallery" link → `/#gallery` — DM Sans 11px / letter-spacing 2px / uppercase / `#2D4A3E` / opacity 0.5 on hover
  - Center (flex:1, text-align center): Artist name link → `/#gallery`
  - Right: spacer `width: 160px` to balance the layout

#### Main Content
- Max-width 1280px, margin auto, padding 64px 64px 80px
- Grid: `1fr 360px`, gap 72px, align-items start
- **Left**: painting image — overflow hidden, shadow `4px 12px 52px rgba(26,46,38,0.16)`, `aspect-ratio: 4/3`
- **Right** (info panel, padding-top 8px):
  - Year: DM Sans 10px / letter-spacing 4px / uppercase / `#8FA67A`
  - H1: Cormorant Garamond 50px / 300 / italic / line-height 1.06 / `--ap-dark`
  - Meta (medium · size): DM Sans 13px / letter-spacing 0.8px / `#8FA67A`, padding-bottom 36px, border-bottom `1px solid rgba(45,74,62,0.12)`, margin-bottom 36px
  - Description: DM Sans 16px / 300 / line-height 1.88 / `#5A5040`, margin-bottom 52px
  - CTA button: full-width block, padding 16px 32px, background `--ap-dark`, color `#F5F0E8`, 11px / letter-spacing 2.5px / uppercase / text-align center / opacity 0.82 on hover
  - Sub-caption: 12px / `#8FA67A` / text-align center / line-height 1.6

#### More from the Collection
- Border-top `1px solid rgba(45,74,62,0.13)`, padding 56px 64px 80px
- Section label: DM Sans 10px / letter-spacing 4px / uppercase / `#8FA67A`, margin-bottom 40px
- 3-col grid, gap 28px — shows 3 other paintings from the collection
- Each card: aspect-ratio 4/3 image (clickable, opacity 0.84 on hover) + Cormorant Garamond 20px italic title + DM Sans 12px `#8FA67A` meta

#### Footer
Same as home page footer.

---

## Paintings Data

```js
const paintings = [
  {
    id: 'morning-mist',
    title: 'Morning Mist',
    medium: 'Oil on canvas',
    size: '60×80 cm',
    year: '2024',
    desc: 'A study in atmospheric light — misty hills receding into a cool morning sky. Painted from memory after an early walk, before the world woke up.'
  },
  {
    id: 'coastal-morning',
    title: 'Coastal Morning',
    medium: 'Oil on canvas',
    size: '70×90 cm',
    year: '2024',
    desc: 'The coastline at first light, dunes and tufted grasses catching the low horizontal sun. The largest work in the current collection, painted over three weeks.'
  },
  {
    id: 'mediterranean-still-life',
    title: 'Mediterranean Still Life',
    medium: 'Oil on board',
    size: '30×40 cm',
    year: '2024',
    desc: 'A ceramic bowl of lemons on a draped cloth. Painted slowly over several evenings, returning each time to the same arrangement and the same quiet light.'
  },
  {
    id: 'golden-fields',
    title: 'Golden Fields',
    medium: 'Oil on canvas',
    size: '50×70 cm',
    year: '2024',
    desc: 'Late summer, the fields past their peak. A warm, unhurried palette that captures the particular quality of August — the heaviness of it, the gold.'
  },
  {
    id: 'summer-bouquet',
    title: 'Summer Bouquet',
    medium: 'Oil on canvas',
    size: '40×50 cm',
    year: '2024',
    desc: 'Garden flowers in a simple white vase. A direct, joyful painting — made quickly and kept exactly as it came, without correction.'
  },
  {
    id: 'into-the-forest',
    title: 'Into the Forest',
    medium: 'Oil on linen',
    size: '50×70 cm',
    year: '2023',
    desc: 'The interior of a mixed woodland at dusk. Dappled light falling through the canopy onto a path that leads somewhere you cannot quite see.'
  },
  {
    id: 'autumn-harvest',
    title: 'Autumn Harvest',
    medium: 'Oil on linen',
    size: '40×55 cm',
    year: '2023',
    desc: 'A field study from early autumn — warm ochres and ambers, the stubble of a recently harvested crop, the long shadows of late afternoon.'
  },
  {
    id: 'the-lemon-bowl',
    title: 'The Lemon Bowl',
    medium: 'Oil on board',
    size: '25×35 cm',
    year: '2024',
    desc: 'A small, intimate still life. Three lemons in a terracotta bowl, painted in a single sitting on a rainy Sunday. One of my favourites.'
  },
  {
    id: 'woodland-path',
    title: 'Woodland Path',
    medium: 'Oil on canvas',
    size: '50×60 cm',
    year: '2023',
    desc: 'An evening walk into the trees. The path disappearing into green shadow, the last light of the day filtering through from somewhere behind you.'
  },
];
```

---

## State Management

```ts
// Router state
paintingId: string | null  // null = home page, string = detail page

// Transitions
// Home → Detail:  navigate to /#/:id  →  set paintingId, scrollTo(0,0)
// Detail → Home:  navigate to /#gallery →  set paintingId = null, scroll to #gallery section
// Detail → Contact form:  navigate to /#contact →  set paintingId = null, scroll to #contact section
// Detail → Detail:  navigate to /#/:newId →  set paintingId = newId, scrollTo(0,0)
```

---

## Interactions & Behavior

- **Gallery images** — hover: `opacity 0.84`, `transition: opacity 0.18s`. Click: navigate to `/#/:id`
- **Hero painting** — full click area + label overlay both navigate to `/#/morning-mist`
- **Back to Gallery** — navigates to `/#gallery`, scrolls to gallery section after home page mounts
- **Inquire About This Work** CTA — navigates to `/#contact`, scrolls to contact section
- **Related works** (detail page) — clicking navigates to that painting's detail page
- **Nav is sticky** on both home and detail pages (z-index 100, height 72px — offset anchor scrolls by 72px)

---

## Assets

The prototype uses SVG illustrations as painting placeholders. In production, replace these with real `<img>` tags pointing to the actual painting photographs. Each painting card and the detail image use `object-fit: cover` (via `aspect-ratio` + `overflow: hidden` on the container).

Recommended image sizes:
- Gallery featured large: 1400×880px (16:10)
- Gallery 3-col / 4-col: 800×600px (4:3) or 600×800px (3:4) respectively
- Detail page: 1200×900px (4:3)
- Hero right panel: any portrait/landscape, full-bleed

---

## Files

| File | Description |
|------|-------------|
| `Annie Artist.dc.html` | Complete high-fidelity prototype — home page + painting detail page with hash routing |
