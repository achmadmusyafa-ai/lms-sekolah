---
name: Sekolah Pintar
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#4d4635'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#7f7662'
  outline-variant: '#d1c5ae'
  surface-tint: '#745b00'
  primary: '#745b00'
  on-primary: '#ffffff'
  primary-container: '#fed24f'
  on-primary-container: '#735a00'
  inverse-primary: '#ecc240'
  secondary: '#4c6700'
  on-secondary: '#ffffff'
  secondary-container: '#c6ee6b'
  on-secondary-container: '#506c00'
  tertiary: '#316b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a4ea74'
  on-tertiary-container: '#306a00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe08d'
  primary-fixed-dim: '#ecc240'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#c9f16e'
  secondary-fixed-dim: '#add455'
  on-secondary-fixed: '#151f00'
  on-secondary-fixed-variant: '#394e00'
  tertiary-fixed: '#aff67e'
  tertiary-fixed-dim: '#94d965'
  on-tertiary-fixed: '#0a2100'
  on-tertiary-fixed-variant: '#235100'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system blends **Tactile Playfulness** with **Structured Functional Modernism** to support an Indonesian elementary education ecosystem. The experience serves two interdependent user profiles: elementary students (Grades 1–6) who thrive on tactile feedback, gamified milestones, and high visual encouragement, alongside teachers and parents who require streamlined utility, gradebook clarity, and calm administrative rigor.

### Key Visual Tenets
- **Playful Tactility:** Interactive elements carry gentle bottom-weighted offset borders and warm drop shadows, reminiscent of physical blocks, physical stamps, and tactile classroom supplies.
- **Warm & Optimistic Energy:** Sunlit yellows and vegetative lime greens ground the palette in growth, curiosity, and high engagement without visual strain.
- **Accessible Legibility:** Large tap targets (minimum 48px), bold visual hierarchy, and distinct color roles allow emerging young readers to navigate without frustration, while maintaining density for educators.

## Colors

The color palette centers on active Indonesian sunshine and lush growth, balanced against deep slate ink to guarantee WCAG 2.1 AA accessibility across all textual content.

### Palette Architecture
- **Primary (`#FED24F` - Sunny Gold):** Used for primary CTAs, active student badges, hero feature banners, and primary achievements. Accompanied by `#D4A928` for tactile border depths.
- **Secondary (`#B2D959` - Sprout Lime):** Applied to progress milestones, sub-navigation tabs, and secondary interactive items.
- **Tertiary / Success (`#7EC151` - Leaf Green):** Core success indicators, completed task markers, verified attendance, and positive academic feedback.
- **Highlight / Accent (`#FFF449` - Morning Sun):** Reserved for celebration banners, active star bursts, notification pings, and gamified streak counters.
- **Neutral Dark (`#1E293B` - Slate Ink):** Universal body copy, headers, and crisp structural borders to avoid washed-out low-contrast rendering.
- **Neutral Light & Canvas (`#F8FAF5` to `#FFFFFF`):** Warm organic off-white background canvases that reduce eye fatigue during extended digital learning.

### Contrast Guidelines
Never use light yellow (`#FFF449`) or gold (`#FED24F`) behind white text. All yellow surfaces require `#1E293B` (or darkened `#0F172A`) typography for contrast ratios exceeding 7:1.

## Typography

The design system exclusively adopts **Plus Jakarta Sans** across all roles. Its geometric roundness, wide apertures, and friendly balance deliver instant warmth for children while retaining crisp technical clarity for administrative data.

### Typographic Rhythm
- **Hero & Headlines:** Rendered in `800 ExtraBold` and `700 Bold` weights with slight negative tracking to produce punchy, playful title cards.
- **Instructional Body:** Standardized on `16px` (`body-lg`) for student-facing modules to accommodate developing visual acuity, and `14px` (`body-md`) for complex administrative tables and grade sheets.
- **Badges & Microcopy:** Rendered with uppercase-friendly `700 Bold` weights and slightly expanded letter-spacing to ensure crisp legibility on compact badges, rewards, and pill tags.

## Layout & Spacing

A 12-column fluid grid system on desktop shifts to a 6-column grid on tablet and a single/two-column 4-point baseline flow on mobile devices.

### Form Factor Behavior
- **Desktop (1024px+):** Fixed side-rail navigation with persistent student/teacher profile stats. 24px column gutters provide distinct separations between interactive modules and task panels.
- **Tablet (768px - 1023px):** Fluid layout featuring a collapsible icon-rail navigation. Cards snap into 2-column clusters with 16px gutters.
- **Mobile (< 768px):** Single-column stacked stream with an accessible thumb-zone bottom navigation bar. Margins shrink to 16px to maximize readable screen real estate.
- **Vertical Rhythm:** Content chunks follow explicit spacing tiers: 8px (`space-sm`) inside tight list items, 16px (`space-md`) within standard cards, and 24px (`space-lg`) between card clusters.

## Elevation & Depth

Visual hierarchy uses **Tactile Layering** combined with soft, warm-tinted ambient shadows rather than stark digital blurs.

### Elevation Hierarchy
- **Level 0 (Base Canvas):** `#F8FAF5` matte warm background.
- **Level 1 (Structural Cards & Modules):** Pure `#FFFFFF` surface accompanied by a subtle 1.5px border (`#E2E8F0`) and an ambient tinted drop shadow: `0 4px 12px -2px rgba(30, 41, 59, 0.05)`.
- **Level 2 (Interactive Cards & Assignments):** Pure white background with a physical bottom offset shadow: `0 6px 0 0 rgba(226, 232, 240, 0.9), 0 8px 16px rgba(30, 41, 59, 0.06)`. On hover, elements sink downward by 2px with an active depression response.
- **Level 3 (Modals, Overlays, Floating Gamification Badges):** High-contrast pop with `0 12px 28px -4px rgba(30, 41, 59, 0.12)`.
- **Playful Tactile Stamping:** Primary action buttons incorporate an authentic 3D block style using solid bottom borders (e.g., `box-shadow: 0 4px 0 0 #D4A928`) creating a toy-like pressed feel upon interaction.

## Shapes

The shape system relies on generous corner radii (16px to 24px) to present an organic, friendly, and non-intimidating interface safe for children.

### Radius Distribution
- **Cards & Primary Panels:** `1.25rem` (20px) to `1.5rem` (24px) creating soft, friendly visual containers.
- **Buttons, Form Inputs, & Dialogue Boxes:** `1rem` (16px) for tactile balance without excessive oval distortion.
- **Pills, Badges, & Avatars:** Fully rounded pill silhouettes (`9999px`) for gamified points, levels, and user indicators.
- **Decorative Accent Icons:** Embedded inside squircle or soft rounded pebble containers (`16px` border-radius with matching pastel tints).

## Components

### Buttons
- **Primary (Student/Celebration):** Surface `#FED24F`, text `#1E293B` bold, border-radius `16px`. Features a bottom offset `box-shadow: 0 4px 0 #D4A928`. Pressed state shifts `translateY(3px)` with `box-shadow: 0 1px 0 #D4A928`.
- **Secondary (Growth/Success):** Surface `#7EC151`, text `#FFFFFF`, bottom offset `box-shadow: 0 4px 0 #5E993B`.
- **Ghost/Tertiary (Administrative):** Background transparent, border `2px solid #E2E8F0`, text `#1E293B`, rounded `16px`. Active state yields `#F1F5F9`.
- **Minimum Tap Target:** Height of `48px` on mobile/tablet to ensure easy interaction for young learners.

### Chips & Gamification Badges
- **Quest / Subject Badges:** Pill-shaped (`rounded-full`), padded `6px 14px`. Styled with dynamic tinted fills (e.g., `#FFF449` with `#854D0E` text for "Matematika", `#B2D959` with `#1E293B` text for "IPA").
- **Level / Streak Indicator:** Integrated star or flame icon paired with tabular bold numbers on a high-contrast warm white pill with an amber outline.

### Cards
- **Assignment Card:** White surface, border `1.5px solid #E2E8F0`, corner radius `20px`, internal padding `20px`. Top-right badge holds due dates or point values (`+50 XP`).
- **Gamified Subject Card:** Top banner tinted in primary accent colors (`#FED24F`, `#B2D959`, or `#7EC151`), housing high-contrast character or subject illustrations, with a rounded bottom progress bar.

### Lists
- Containerized list items separated by `8px` vertical spacing instead of hairline borders. Each item acts as a soft white pod with `12px` padding and an interactive left-border highlight marking completion.

### Checkboxes & Radio Buttons
- Sized generously at `24px x 24px` with `8px` rounded corners (checkboxes) and full circles (radios).
- Inactive: Border `2.5px solid #CBD5E1`, background white.
- Active: Background `#7EC151`, border `#7EC151`, centered thick white SVG checkmark with a cheerful pop animation (`scale(1.1)` settling to `scale(1)`).

### Input Fields
- Height `48px`, border `2px solid #E2E8F0`, background `#FFFFFF`, corner radius `14px`, text `#1E293B`.
- Focused: Border `#FED24F`, box-shadow `0 0 0 4px rgba(254, 210, 79, 0.25)`, label text transitioning to bold.

### Gamified Progress Bar
- Height `14px`, container background `#E2E8F0`, rounded `9999px`. Active fill `#7EC151` or `#FED24F` featuring an inner subtle top gloss highlight and an optional floating animated star pinned to the thumb leading edge.