# Tokens

Source token files are committed to the repo:

- responsive: desktop, tablet, mobile
- theme: light mode semantic set
- theme: light mode gradients and overlays
- primitives: full mode export

## Generate flattened artifacts

```bash
npm run build:tokens
```

This creates:

- `src/tokens/generated/tokens.ts`
- `src/tokens/generated/tokens.css`

These generated files are designed for direct AI consumption.
