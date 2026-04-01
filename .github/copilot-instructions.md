# NextGen Design System Scope

Read `AGENTS.md` first. It is the canonical instruction source for this repository.
If there is any conflict between this file and `AGENTS.md`, `AGENTS.md` wins.

This repository is `NextGen-Design-System`.

Rules for AI/code assistants:
- Treat this repo as separate from `DesignSystem`.
- Do not read, edit, or reference files from sibling repositories unless explicitly asked.
- Do not publish this Storybook into `DesignSystem` paths.
- Confirm git remote before any push or publish operation.

Identity checks:
- Package name: `nextgen-design-system`
- Local path: `/Users/nathanbates/Documents/GitHub/NextGen-Design-System`

## Mandatory Figma MCP Workflow

For any request that references Figma (especially icons/components), assistants MUST follow this exact sequence:

1. `mcp_figma_get_design_context`
- Primary source for implementation.
- Use this to extract exact layer structure, inset/overflow percentages, path references, and viewBox/stroke details.
- Do not approximate or redraw geometry by eye when design context is available.

2. `mcp_figma_get_metadata`
- Validation source for node constraints.
- Use this to verify node size, type, and placement constraints (for example 24px glyphs inside 32px icon buttons).

3. `mcp_figma_get_screenshot`
- Final visual sanity check only.
- Never use screenshot as the source of geometry.
- Use it only after implementation to confirm silhouette and visual match.

### Icon Accuracy Requirements

- Preserve Figma layer wrappers and offset behavior (inset + overflow) when provided.
- Preserve original SVG path geometry, viewBox, and strokeWidth from Figma-derived assets.
- Use `currentColor` unless the node explicitly requires fixed stroke/fill colors.
- Validate the final implementation with both:
	- `npm run check`
	- `npm run build-storybook`

### Prohibited Shortcuts

- Do not rely on screenshots alone for icon implementation.
- Do not replace multi-layer icon structures with simplified hand-drawn equivalents unless explicitly requested.
