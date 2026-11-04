---
name: Obsidian Craft
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e5'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e5'
  inverse-on-surface: '#303033'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#494949'
  on-secondary-container: '#b9b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#121315'
  on-background: '#e3e2e5'
  surface-variant: '#343537'
  surface-base: '#0D0E10'
  surface-raised: '#131418'
  surface-overlay: '#1C1D22'
  border-subtle: rgba(255, 255, 255, 0.08)
  border-active: rgba(255, 255, 255, 0.20)
  text-primary: '#FFFFFF'
  text-muted: '#8B8D98'
  text-dim: '#52545D'
  status-active: '#34C759'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-craft digital minimalism with an architectural, utilitarian restraint. Built for an elite technologist and designer personal portfolio, the aesthetic prioritizes extreme typographic discipline, nuanced dark tonal hierarchy, and tactile micro-interactions.

The visual direction draws from modern Swiss typography and high-end industrial hardware design: pure obsidian surfaces, razor-sharp white editorial headings, translucent frosted glass overlays, and low-contrast borders. The emotional tone is quiet, confident, and deeply refined—stripping away visual noise to foreground craft, thoughtful writing, and curated artifact showcases.

## Colors

The system uses a monochromatic dark palette derived from pure obsidian and charcoal surfaces. Rather than flat blacks, deep chromatic grays provide optical warmth and prevent eye fatigue.

- **Surface Layers**: `#0D0E10` serves as the primary canvas foundation, while `#131418` and `#1C1D22` create subtle depth tiers for cards, pills, and dynamic interaction layers.
- **Typography & Content**: `#FFFFFF` provides absolute contrast for titles and active UI states. Secondary copy rests at `#8B8D98`, delivering effortless legibility while keeping visual hierarchy firmly anchored. Muted metadata sits at `#52545D`.
- **Accents & Delimiters**: Pure chromatic accents are kept strictly to contextual indicators (e.g., `#34C759` for live availability pings). Structure is maintained through low-alpha white borders (`rgba(255, 255, 255, 0.08)`) that blend seamlessly into the obsidian canvas.

## Typography

The typography leverages `Inter` with optical metrics tuned to resemble Apple’s SF Pro and Akkurat: neutral, engineered, and immaculately legible. 

Negative letter-spacing tightens display headers for a clean editorial lockup, while running body text maintains standard tracking with open line heights (`1.6x`) to facilitate effortless long-form reading. Labels and numerical timestamps take subtle positive tracking with medium weights to ensure legibility at micro scales.

## Layout & Spacing

Layouts conform to a centered, column-constrained fixed grid. Content is intentionally narrowed to a maximum reading width of 680px for standard personal essays and biographical narratives, expanding to a maximum of 1024px for project showcases and photo grids.

Spacing follows an 8pt architectural rhythm. Sections are partitioned with deliberate, expansive vertical gaps (`space-xl` to `64px`), establishing calm pacing and visual clarity. Outer margins compress gracefully to `1.5rem` on mobile interfaces while preserving vertical alignment lines across row items.

## Elevation & Depth

Visual hierarchy rejects exaggerated drop shadows in favor of surface luminescence, low-contrast structural outlines, and frosted glass:

- **Surface Tiers**: Base content rests on `#0D0E10`. Cards and secondary containers step forward into `#131418`. Floating overlays, modal sheets, and the top navigation capsule adopt `#1C1D22` with 80% opacity and an aggressive `20px` background blur.
- **Hairline Outlines**: Elements define their boundaries using hairline borders (`1px solid rgba(255, 255, 255, 0.08)`). On hover, borders brighten subtly to `rgba(255, 255, 255, 0.18)` without shifting geometry.
- **Ambient Focus**: Hovering interactive items triggers a subdued ambient glow: `0 8px 32px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.12)`.

## Shapes

The geometric character is deliberate and balanced. Structural cards, interactive panels, and images adopt a unified `0.5rem` (`8px`) border radius. Micro-components such as buttons, badges, and the primary top navigation use complete pill morphology (`9999px`) to create smooth, tactile affordances that counter the crisp rectangular framework.

## Components

### Top Navigation Capsule
A floating, pill-shaped control bar fixed at top-center.
- **Structure**: `height: 44px`, `padding: 4px`, `border-radius: 9999px`.
- **Material**: Background `rgba(19, 20, 24, 0.75)` with `backdrop-filter: blur(20px)` and a `1px` border of `rgba(255, 255, 255, 0.08)`.
- **Segmented Items**: Text buttons with `font-size: 13px`, `padding: 6px 14px`, color `text-muted`. Active item features a pill indicator (`background: rgba(255, 255, 255, 0.1)`, `color: #FFFFFF`).

### Experience & Project Rows
Minimal list items prioritizing horizontal balance.
- **Structure**: Flex container with `padding: 12px 16px`, `border-radius: 8px`, `gap: 16px`, aligned center.
- **Left Cluster**: Year/Role label in `text-muted` at `font-size: 13px`. Title in `text-primary` at `font-size: 14px`, `font-weight: 500`.
- **Right Cluster**: Organization name or arrow glyph (`↗`) transitioning from `text-dim` to `text-primary` on hover.
- **Hover State**: Background shifts from `transparent` to `rgba(255, 255, 255, 0.03)` with border tinting.

### Cards
- **Structure**: Surface `#131418`, `1px solid rgba(255, 255, 255, 0.08)`, `border-radius: 12px`, `padding: 24px`.
- **Hover**: Subtle vertical translation (`-2px`), border brightening to `rgba(255, 255, 255, 0.16)`.

### Inline Links
- Understated and text-integrated. Primary white font color with a delicate underline `1px solid rgba(255, 255, 255, 0.25)` offset by `4px`. Underline becomes opaque `rgba(255, 255, 255, 0.8)` on hover.

### Status Indicators
- Circular dot (`6px × 6px`) filled with `#34C759` paired with an optional concentric pulse wave (`rgba(52, 199, 89, 0.3)`) indicating real-time availability.