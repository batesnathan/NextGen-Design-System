# AI Usage Guide

## Goal

Enable AI tools to generate consistent interfaces using your token hierarchy.

## Recommended prompt context

When asking an AI to build UI, provide:

1. Semantic intent (`primary action`, `callout`, `warning`, etc.)
2. Component targets (`Button`, `Card`, `Input`, `Badge`, `Text`, `Stack`)
3. Responsiveness mode (`desktop`, `tablet`, `mobile`)
4. Accessibility constraints (contrast, touch targets, keyboard)

## Suggested prompt template

```text
Use NextGen Design System.
Prefer semantic colors and spacing scale.
Compose from Stack, Card, Text, Input, and Button.
Map typography to title-3 and body-2.
Respect mobile mode tokens for spacing and type.
```

## File contracts for AI

- `src/tokens/source/*.json`: source of truth from Figma
- `src/tokens/generated/tokens.ts`: flattened lookup for inference
- `src/tokens/generated/tokens.css`: direct CSS variable usage
- `src/styles/system.css`: baseline utility class behavior
