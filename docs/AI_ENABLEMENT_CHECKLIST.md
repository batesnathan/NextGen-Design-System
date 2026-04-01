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

## Phase 2: Reuse Architecture (Icon Library Expansion)

- [x] Shared icon library exists (`src/components/icons`).
- [x] TopBar icons consume shared icon exports.
- [x] **BottomNav icons** → `src/components/icons/BottomNavIcons.tsx` (HomeIcon, AccountsIcon, InvestIcon, MarketplaceIcon, MoreIcon)
- [x] **Alert icon** → `src/components/icons/AlertIcons.tsx` (AlertStatusIcon)
- [x] **Radio icon** → `src/components/icons/RadioIcons.tsx` (SelectedRadioIcon)
- [x] **Chip icons** → `src/components/icons/ChipIcons.tsx` (ChipLeftIcon, ChipRightIcon)
- [x] Refactor BottomNav.tsx to consume shared icon exports
- [x] Refactor Alert.tsx to consume shared icon exports
- [x] Refactor RadioButton.tsx to consume shared icon exports
- [x] Refactor Chip.tsx to consume shared icon exports
- [x] Add icon naming conventions and registry in `docs/ICON_LIBRARY.md`
- [x] Run validation: `npm run check && npm run build-storybook`

## Phase 3: Governance Gates (Visual Regression)

- [x] CI quality gates for typecheck + Storybook build are enabled.
- [x] PR template requires AI/design checklist + Figma Node IDs.
- [x] PR policy gate validates node-id presence in PR body.
- [x] Add visual regression workflow to `.github/workflows/visual-regression.yml`
  - Builds Storybook
  - Serves on localhost:6006
  - Runs Playwright tests
  - Comments on PRs with results
- [x] Create Playwright configuration (`playwright.config.ts`)
- [x] Create visual regression test templates (`tests/visual/icons.spec.ts`)
  - TopBar icons (slim/expanded modes)
  - BottomNav icons (all nav states)
  - Alert icons (success/warning/danger/info)
  - Radio icons (selected/unselected)
  - Chip icons (left/right/both icons)
- [x] Add visual test scripts to package.json
  - `npm run test:visual` — run tests
  - `npm run test:visual:update` — update baselines
- [x] Create tests directory documentation (`tests/README.md`)
- [x] Configure snapshot storage (git-tracked baseline snapshots)

## Phase 4: Storybook AI Readiness (Execution Contract)

- [x] Create top-level Storybook doc page: `src/stories/00-AI_IMPLEMENTATION_CONTRACT.mdx`
  - Appears first in Storybook navigation
  - Explains "AI-ready" definition
  - Shows story template with AI-readable fields
  - Links to all related documentation
  - Includes implementation workflow
  - FAQ for common AI agent questions
- [x] Create detailed AI implementation contract: `docs/AI_IMPLEMENTATION_CONTRACT.md`
  - Comprehensive guide for AI agents and engineers
  - Workflow steps with code examples
  - What AI should NOT do (prohibited shortcuts)
  - Expectations for humans and AI
  - Storybook as communication protocol
  - Escalation procedures for edge cases
- [ ] Add state matrix stories to atomic components (priority order):
  - [x] Button (expanded variant/size/state matrix with acceptance notes)
  - [x] Input (expanded focus/fill/error/icon/affix state coverage)
  - [x] Badge (tone matrix + extended label coverage)
  - [x] Card, Checkbox, Radio, TextButton, IconButton (3+ stories with acceptance notes)
- [x] Add acceptance notes to each story (size/color/spacing tolerances)
- [x] Add Figma node ID references in story metadata
- [x] Run validation: `npm run build-storybook`

## Phase 5: Operational Excellence (Sustainability)

- [ ] Create `.github/CODEOWNERS` file with design-system core ownership
  - `src/styles/system.css` → design system maintainers
  - `src/components/icons/` → design system maintainers
  - `src/tokens/` → design system maintainers
  - `AGENTS.md` → design system maintainers
  - `docs/` → design system maintainers
- [ ] Define semantic versioning policy in docs: when to bump Major/Minor/Patch
- [ ] Define rollback criteria for design regressions (visual, accessibility, performance)
- [ ] Optional: Set up semantic-release or changesets for automated versioning
- [ ] Run validation: all CI gates pass

## Execution Policy

- Pixel accuracy is prioritized over speed.
- Every design implementation must include Figma node references.
- No screenshot-only implementation.
