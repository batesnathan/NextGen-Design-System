# NextGen Design System: Simple Foundations Guide

This is the short version of the design system for quick sharing.

## 1. Color System

### Seed Color
The design system is anchored around an orchid-purple brand direction.

- Brand seed accent: `#B328FF`
- Semantic primary interactive color: `#602C8C`
- Semantic primary soft color: `#EADBFD`

In practice:
- Use `#602C8C` for primary actions and selected states.
- Use `#B328FF` for brighter accents, links, and highlighted UI moments.
- Use `#EADBFD` for soft supporting surfaces.

### Core Palette

#### Primary
- Primary: `#602C8C`
- On primary: `#FFFFFF`

#### Secondary
- Secondary: `#EADBFD`
- On secondary: `#602C8C`

#### Tertiary
- Tertiary: `#FFFFFF`
- On tertiary: `#602C8C`

#### Neutral
- Neutral surface: `#F2F6FF`
- Neutral surface alt: `#FFFFFF`
- Neutral tertiary surface: `#F4F4F4`
- Primary text: `#131313`
- Secondary text: `#5E5E5E`
- Default border: `#E4E4E4`

### Accent Palette
These are the main accent families available in the system.

- Pink
  - Light: `#EB9DF1`
  - Medium: `#DD5DE8`
  - Dark: `#CC0ADC`
- Orchid
  - Light: `#DEA0FF`
  - Medium: `#CA69FF`
  - Dark: `#B328FF`
- Lavender
  - Light: `#CAA6FB`
  - Medium: `#AC74F9`
  - Dark: `#944DF7`
- Blue
  - Light: `#95B5FF`
  - Medium: `#5589FF`
  - Dark: `#2A6BFF`
- Turquoise
  - Light: `#8DF0FE`
  - Medium: `#4CA0AD`
  - Dark: `#3C7F89`

## 2. Typography

### Font Family
- Primary font: `Inter`
- Fallback stack in code: `Inter, Segoe UI, Helvetica Neue, Arial, sans-serif`

### Headline Styles
Use these for page titles, section headers, and prominent UI text.

- Headline 5: `30 / 36`, letter spacing `-1.2`
- Headline 4: `24 / 28`, letter spacing `-0.96`
- Headline 3: `20 / 24`, letter spacing `-0.6`
- Headline 2: `18 / 24`, letter spacing `-0.54`
- Headline 1: `16 / 20`, letter spacing `-0.48`

### Body Styles
Use these for supporting copy and standard UI text.

- Body 3: `16 / 24`
- Body 2: `14 / 20`
- Body 1: `13 / 20`

### Label Styles
Use these for buttons, tags, field labels, and compact UI text.

- Label 3: `16 / 24`
- Label 2: `14 / 20`
- Label 1: `12 / 16`

## 3. Corner Radius

These are the standard radius tokens.

- Small radius: `8px`
- Medium radius: `12px`
- Large radius: `16px`

Common special cases:
- Input field radius: `16px`
- Pills / chips / circular controls: `999px`

## 4. Spacing and Common Padding

### Base Spacing Scale
The spacing system uses these core values.

- `0px`
- `1px`
- `2px`
- `3px`
- `4px`
- `8px`
- `12px`
- `16px`
- `20px`
- `24px`
- `28px`
- `32px`
- `36px`
- `40px`
- `48px`
- `64px`
- `80px`

### Most Common Padding Patterns
These are the padding values that show up repeatedly in the system CSS and components.

- `8px 16px`
- `12px 24px`
- `12px`
- `16px`
- `8px 20px`
- `12px 16px`
- `24px 24px 0`

### Recommended Practical Usage
- Use `8px` and `12px` for compact internal spacing.
- Use `16px` for standard card and content padding.
- Use `20px` to `24px` for larger callouts and page sections.
- Use pill padding like `8px 20px` for chips, segmented controls, or rounded CTA styles.

## 5. Quick Summary

If you only need the essentials:

- Brand direction: orchid-purple
- Primary color: `#602C8C`
- Soft secondary color: `#EADBFD`
- Neutral surfaces: `#FFFFFF`, `#F2F6FF`, `#F4F4F4`
- Main text: `#131313`
- Font: `Inter`
- Headline range: `16px` to `30px`
- Body range: `13px` to `16px`
- Label range: `12px` to `16px`
- Standard radius: `8px`, `12px`, `16px`
- Most common padding: `8px 16px`, `12px 24px`, `16px`
