# AGENTS

This file is the canonical instruction source for AI assistants in this repository.

Before any response or code change, assistants MUST read this file first.
If an assistant-specific instruction file exists, it must defer to this file.

## Repository Identity

- Repository: NextGen-Design-System
- Package name: nextgen-design-system
- Local path: /Users/nathanbates/Documents/GitHub/NextGen-Design-System
- Treat this repository as separate from sibling repositories.

## Scope Guardrails

- Do not read, edit, or reference files from sibling repositories unless explicitly requested by the user.
- Do not publish Storybook output to sibling repository paths.
- Confirm git remote and target repository before any publish or push action.

## Mandatory Figma MCP Workflow

For any Figma-driven task (especially icons/components), assistants MUST use this exact sequence:

1. mcp_figma_get_design_context
- Primary source for implementation.
- Use this for exact layer structure, inset/overflow percentages, path references, viewBox, and stroke details.
- Do not redraw by eye when design context is available.

2. mcp_figma_get_metadata
- Validation source for size/type/placement constraints.
- Use this to verify constraints like 24px glyphs inside 32px icon buttons.

3. mcp_figma_get_screenshot
- Final visual sanity check only.
- Never use screenshot as the source of geometry.

## Icon Accuracy Requirements

- Preserve layer wrappers and offset behavior from Figma (inset + overflow) when provided.
- Preserve original path geometry, viewBox, and strokeWidth.
- Use currentColor unless node explicitly requires fixed stroke/fill colors.
- Keep container size and icon canvas size aligned to metadata constraints.

## Required Verification

After icon or Figma component edits, assistants MUST run:

1. npm run check
2. npm run build-storybook

## Prohibited Shortcuts

- No screenshot-only implementation.
- No simplified hand-drawn replacements for multi-layer icons unless explicitly requested.
- No localhost asset URL dependencies in shipping component output.

## Conflict Resolution

If instructions conflict across files:

1. AGENTS.md (this file)
2. Assistant-specific file (for example CLAUDE.md, .github/copilot-instructions.md, .cursorrules)
3. Other local notes
