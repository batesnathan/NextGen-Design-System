# Primitives

Primitives are foundational decisions that should stay stable:

- spacing scale in `src/primitives/spacing.ts`
- typography scale in `src/primitives/typography.ts`
- base accent ramps in `src/primitives/color.ts`

Use primitives to build semantic tokens. Avoid direct primitive usage in app code unless you are defining a new semantic role.
