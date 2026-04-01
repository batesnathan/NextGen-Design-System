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
- [ ] **BottomNav icons** → `src/components/icons/BottomNavIcons.tsx` (HomeIcon, AccountsIcon, InvestIcon, MarketplaceIcon, MoreIcon)
- [ ] **Alert icon** → `src/components/icons/AlertIcons.tsx` (AlertStatusIcon)
- [ ] **Radio icon** → `src/components/icons/RadioIcons.tsx` (SelectedRadioIcon)
- [ ] **Chip icons** → `src/components/icons/ChipIcons.tsx` (ChipLeftIcon, ChipRightIcon)
- [ ] Refactor BottomNav.tsx to consume shared icon exports
- [ ] Refactor Alert.tsx to consume shared icon exports
- [ ] Refactor RadioButton.tsx to consume shared icon exports
- [ ] Refactor Chip.tsx to consume shared icon exports
- [ ] Add icon naming conventions and registry in `docs/ICON_LIBRARY.md`
- [ ] Run validation: `npm run check && npm run build-storybook`

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

- [ ] Create top-level Storybook doc page: `src/stories/00-AI_IMPLEMENTATION_CONTRACT.mdx`
  - Define "AI-ready component" (state matrix coverage, visual acceptance criteria, Figma link format)
  - List Figma MCP workflow steps
  - Link to AGENTS.md and ICON_LIBRARY.md
- [ ] Add state matrix stories for all atomic components:
  - Button (variant × size × state combinations): 3 × 3 × 4 = 36 stories
  - Input (filled/empty × focused/blurred × valid/invalid/error): 8 stories
  - Badge (variant × size): 9 stories
  - And similar for Card, Checkbox, Radio, TextButton, IconButton
- [ ] Add acceptance notes to each component story (size/color/spacing tolerances, icon positioning)
- [ ] Add Figma node ID references in story titles or descriptions
- [ ] Run validation: `npm run build-storybook`

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
