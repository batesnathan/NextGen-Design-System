# AI Enablement Checklist (NextGen Only)

This checklist is for making the repository reliably usable by engineers and AI agents.

## Phase 1: Foundation (Required)

- [x] Canonical cross-agent rules file exists (`AGENTS.md`).
- [x] Assistant compatibility files defer to canonical rules (`CLAUDE.md`, `GEMINI.md`, `.cursorrules`, `.github/copilot-instructions.md`).
- [x] Mandatory Figma MCP workflow is defined:
  - `mcp_figma_get_design_context` (primary)
  - `mcp_figma_get_metadata` (constraint validation)
  - `mcp_figma_get_screenshot` (final sanity check)
- [x] Icon precision requirements are documented.

## Phase 2: Reuse Architecture (Pilot)

- [x] Shared icon library exists (`src/components/icons`).
- [x] TopBar icons consume shared icon exports.
- [ ] Migrate additional components to shared icon library.
- [ ] Add icon naming conventions and deprecation notes for local one-off icons.

## Phase 3: Governance (Hard Checks)

- [x] CI quality gates for typecheck + Storybook build are enabled.
- [x] PR template requires AI/design checklist + Figma Node IDs.
- [x] PR policy gate validates node-id presence in PR body.
- [ ] Add visual regression checks to CI for critical stories.

## Phase 4: Storybook AI Readiness

- [ ] For each component, include a full state matrix story.
- [ ] Add acceptance notes in stories (size/color/spacing expectations).
- [ ] Add top-level Storybook doc page describing the AI implementation contract.

## Phase 5: Operational Excellence

- [ ] Add CODEOWNERS for design-system core paths.
- [ ] Add semantic-release or changesets policy for predictable versioning.
- [ ] Define rollback criteria for design regressions.

## Execution Policy

- Pixel accuracy is prioritized over speed.
- Every design implementation must include Figma node references.
- No screenshot-only implementation.
