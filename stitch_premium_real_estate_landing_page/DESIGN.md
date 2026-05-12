---
name: Midnight Estate
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  max_width: 1200px
  side_padding: 24px
  section_gap_sm: 80px
  section_gap_lg: 120px
  gutter: 24px
  unit: 8px
---

## Brand & Style
This design system is engineered for the ultra-high-net-worth real estate market. The brand personality is authoritative yet understated, evoking a sense of exclusivity and architectural precision. The UI leverages a **Minimalist** style with heavy emphasis on "dark mode" sophistication, utilizing deep navy tones to make property imagery feel luminous and expansive.

The emotional response should be one of calm confidence. By utilizing generous negative space (even in a dark interface) and avoiding cluttered decorative elements, the focus remains entirely on the high-end properties. Soft, layered depth and a restrained use of gold accents ensure the aesthetic feels premium without becoming gaudy.

## Colors
The palette is rooted in a deep "Midnight" foundation. The primary background (#0F172A) provides a rich, non-black canvas that maintains depth, while the secondary background creates subtle tonal shifts for card containers and section alternates. 

The **Accent CTA** blue is used sparingly for primary actions to maintain a high-contrast focal point. The **Support Gold** is reserved for status indicators, ratings, or "exclusive" badges, acting as a jewelry-like highlight against the dark base. Text hierarchy is maintained by a stark white for readability and a muted grey for metadata and descriptive copy.

## Typography
The typography strategy pairs the geometric, modern appeal of **Plus Jakarta Sans** (serving as the optimal alternative for Poppins within this framework) for headlines with the utilitarian clarity of **Inter** for body text. 

Headlines use tight letter-spacing and heavy weights to command attention, while body copy is set with generous line-height to ensure long-form property descriptions remain legible against the dark background. A specialized "Label-Caps" style is used for overlines and category tags to add an editorial, high-end feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model with a 1200px maximum width to ensure a cinematic viewing experience on desktop. The vertical rhythm is intentional and spacious, alternating between 80px and 120px gaps to allow the eye to rest between high-impact property showcases.

Content is organized on a 12-column grid. Internal component spacing follows an 8px base unit (8, 16, 24, 32, 48) to maintain mathematical harmony. Horizontal margins are fixed at 24px to ensure safety on smaller tablet screens.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Ambient Shadows**. Instead of traditional drop shadows which can look muddy on dark backgrounds, we use:
1.  **Elevation 1:** A slight lightening of the background color (#111827).
2.  **Elevation 2:** The use of a 1px solid border at 8% white opacity to define edges.
3.  **Shadows:** When used, shadows are "Gloamy"—highly diffused (40px-60px blur) with low opacity (0.4) using a tinted navy-black rather than pure black. 

This creates a "floating" effect for cards and modals that feels architectural rather than digital.

## Shapes
The shape language is defined by **Rounded** geometry (12px to 16px). This specific radius softens the technical feel of the dark UI, making the interface feel more approachable and "lifestyle-oriented." 

- Standard components (Inputs, Small Buttons): **8px (0.5rem)**
- Feature Cards & Image Containers: **16px (1rem)**
- Large Section Containers: **24px (1.5rem)**

Images should always carry the 16px radius to align with the container's sophisticated silhouette.

## Components
- **Buttons:** Primary buttons use the Accent CTA color with white text. Hover states should involve a slight scale-up (1.02x) and an increased shadow spread. Secondary buttons are "Ghost" style with a white border.
- **Property Cards:** Feature a subtle 1px border. The price is always displayed in the top-left using the Support Gold color.
- **Input Fields:** Use the Secondary Background color with a subtle 1px border. Focus states transition the border to the Accent CTA color.
- **Chips/Badges:** Small, caps-lock text with high letter-spacing. Backgrounds for badges should be semi-transparent versions of the gold or blue accents.
- **Amenities List:** Icons should be simplified line-art in Secondary Text color, with labels in Main Text.
- **Navigation:** A sticky top-bar with a backdrop-blur (12px) and 80% opacity of the Primary Background to maintain context while scrolling.