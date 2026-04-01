# AI Implementation Contract

## Overview

This document defines the execution contract between the NextGen Design System, AI agents, and human engineers. It establishes what "AI-ready" means, how AI should design and develop with this system, and what guarantees human engineers can expect.

**Audience**: AI coding assistants (Copilot, Claude, Gemini, Cursor), human engineers, design stakeholders

---

## Design System as Executable Specification

The NextGen Design System is designed to be more than documentation—it's an **executable specification** that AI can read, interpret, and generate from with pixel-perfect accuracy.

### The AI-Ready Stack

| Component | Purpose | AI Usage | Human Usage |
|-----------|---------|----------|------------|
| **Figma Design** | Source of truth for visual design | Read via `mcp_figma_get_design_context` | Design in Figma |
| **AGENTS.md** | Execution rules (canonical) | Read FIRST before any work | Reference for consistency |
| **Storybook Stories** | Working component implementations | Read acceptance notes + state matrix | Develop components |
| **Component Code** | Reference implementation | Read patterns + structure | Edit during refinement |
| **Token System** | Design decision library | Read primitives + semantics | Extend for new themes |
| **Icon Library** | Reusable icon registry | Use before creating one-off icons | Contribute new icons |
| **Visual Regression Tests** | Proof of fidelity | Tests validate AI output | Review test results |

---

## What "AI-Ready" Means

### 1. Figma Fidelity Guarantee

An "AI-ready" component matches Figma exactly at the pixel level.

**Verification:**
- Layer geometry: ✓ Inset/overflow percentages match Figma export
- SVG shapes: ✓ Paths preserve original viewBox, strokeWidth, geometry
- Color behavior: ✓ `currentColor` or explicit fixed colors match design
- Sized correctly: ✓ Container dimensions match Figma node spec

**Proof:**
```bash
npm run check            # TypeScript validation
npm run build-storybook # Proof of rendering
mcp_figma_get_screenshot && visual-compare  # Silhouette match
```

### 2. State Matrix Coverage

An "AI-ready" component has stories for all meaningful state combinations.

**Minimal coverage:**
```
Button × (variant:3 × size:3 × state:4) = 36 stories minimum
Input × (focus:2 × filled:2 × state:3) = 12 stories minimum
Alert × (tone:5 × style:2) = 10 stories minimum
```

**Story naming convention:**
```
ComponentName--[Context]--[Variant]--[State]
Button--Primary--Small--Disabled
Input--Required--Error--Focused
Alert--Success--Vibrant
```

**Acceptance notes in each story:**
```typescript
export const SmallPrimaryDisabled = {
  args: { size: 'small', variant: 'primary', disabled: true },
  parameters: {
    docs: {
      description: {
        story: 'Acceptance: 48px width × 32px height, gray background, pointer-events: none'
      }
    }
  }
};
```

### 3. Figma Node References

An "AI-ready" component links back to its Figma source.

**In component code:**
```typescript
/**
 * Button - Primary action component
 * Figma: node-id:6:70 (design file: [Link])
 * Design Source: https://figma.com/design/[fileKey]/...?node-id=6:70
 */
```

**In Storybook story:**
```typescript
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    figma: {
      // Link to Figma component
      url: 'https://figma.com/design/[fileKey]/...?node-id=6:70'
    }
  }
};
```

**In PR commits:**
```bash
git commit -m "feat: add Button component

- Figma node: 6:70
- Design: [Figma link]
- Preserved layer geometry from Figma export"
```

### 4. Icon Accuracy Requirements

All icons must follow the layered-SVG pattern and preserve Figma geometry exactly.

**Icon QA Checklist:**
- [ ] Layers preserved from Figma (nested spans with CSS positioning)
- [ ] Inset percentages match Figma export
- [ ] SVG paths preserve original viewBox and strokeWidth
- [ ] Color is `currentColor` (unless explicitly fixed in Figma)
- [ ] Container size matches component spec (24px, 32px, 48px)
- [ ] Visual silhouette matches Figma screenshot
- [ ] `npm run check` passes
- [ ] `npm run build-storybook` builds successfully

**Reference:** [docs/ICON_LIBRARY.md](../ICON_LIBRARY.md)

### 5. Token System Integration

An "AI-ready" component consumes tokens correctly.

**Correct token usage:**
```typescript
// ✅ Good: Uses semantic tokens
import { surfaceTokens, textTokens } from './semantics';

const backgroundColor = surfaceTokens.interactive.default;
const textColor = textTokens.on_interactive;
```

```css
/* ✅ Good: CSS variables for theming */
.ng-button {
  background-color: var(--surface-interactive-default);
  color: var(--text-on-interactive);
}
```

**Incorrect usage:**
```typescript
// ❌ Bad: Hardcoded colors (breaks theming)
const backgroundColor = '#007AFF';

// ❌ Bad: Bypasses semantic layer
const bgColor = colors.primary[500];  // Use interactiveTokens instead
```

---

## Implementation Workflow for AI

### Phase 1: Understand the Spec

1. **Read AGENTS.md**
   - Figma MCP workflow rules
   - Icon accuracy requirements
   - Prohibited shortcuts

2. **Read component's Storybook stories**
   - Study acceptance notes
   - View state matrix
   - Understand constraints

3. **Read Figma design context**
   ```bash
   mcp_figma_get_design_context [node-id]
   # ← Returns exact layer structure, inset/overflow, paths, viewBox
   ```

### Phase 2: Generate Implementation

1. **Create component with exact Figma geometry**
   ```typescript
   // Preserve layer structure from Figma
   export function Button({ variant, size, disabled }: ButtonProps) {
     // Use semantic tokens
     // Apply CSS classes matching design
   }
   ```

2. **Add CSS matching Figma sizes + spacing**
   ```css
   .ng-button--small { /* exact px from Figma */ }
   .ng-button--large { /* exact px from Figma */ }
   ```

3. **Create stories for all state combinations**
   ```typescript
   export const SmallPrimary = { args: { size: 'small', variant: 'primary' } };
   export const SmallPrimaryDisabled = { args: { size: 'small', variant: 'primary', disabled: true } };
   // ... (36+ stories total)
   ```

### Phase 3: Validate & Verify

1. **TypeScript check**
   ```bash
   npm run check
   # ✓ No type errors
   ```

2. **Build Storybook**
   ```bash
   npm run build-storybook
   # ✓ Component renders, all stories compile
   ```

3. **Visual sanity check**
   ```bash
   mcp_figma_get_screenshot [node-id]
   # Compare rendered component silhouette ← should match
   ```

4. **Run visual regression tests**
   ```bash
   npm run test:visual
   # ✓ New screenshots match expectations
   ```

### Phase 4: Commit & Document

```bash
git commit -m "feat: add Button component

- Figma node: 6:70
- Design: https://figma.com/design/.../6:70
- Preserved layer geometry from Figma export
- 36 state matrix stories (variant × size × state)
- All validation passes: npm run check, npm run build-storybook"
```

---

## What AI Should NOT Do

### ❌ Screenshot-Only Implementation

```typescript
// WRONG: Hand-drawn from screenshot without design context
function Button() {
  return <button style={{ width: '48px', padding: '8px 12px' }} />;
  // ^ These numbers were guessed, not from Figma
}
```

**Why bad:** No precision guarantee, missed edge cases, breaks with themes

**Correct:** Always use `mcp_figma_get_design_context` for exact measurements

### ❌ Inline Nested Icons

```typescript
// WRONG: Icon defined inside component
function TopBar() {
  function SparkleIcon() { /* ... */ }
  return <div><SparkleIcon /></div>;
}

// CORRECT: Icons imported from library
import { SparkleIcon } from './icons';

function TopBar() {
  return <div><SparkleIcon /></div>;
}
```

### ❌ Localhost Asset URLs in Shipping Code

```typescript
// WRONG: Breaks in production
const iconUrl = 'http://localhost:6006/assets/icon.svg';

// CORRECT: Inline SVG or imported React component
import { MyIcon } from './icons';
export function MyComponent() { return <MyIcon />; }
```

### ❌ Skipping Stories or Visual Tests

```typescript
// WRONG: Only creating one story
export const Default = { args: { variant: 'primary' } };

// CORRECT: Full state matrix with acceptance notes
export const SmallPrimaryDefault = { args: { size: 'small', variant: 'primary' } };
export const SmallPrimaryHover = { args: { size: 'small', variant: 'primary', state: 'hover' } };
export const SmallPrimaryDisabled = { args: { size: 'small', variant: 'primary', disabled: true } };
// ... (many more)
```

---

## What Humans Should Expect from AI

### ✅ Pixel-Perfect Implementations

AI-generated components match Figma exactly:
- Layer geometry preserved
- Spacing matches to the pixel
- Colors behave correctly with tokens
- All edge states covered

### ✅ Well-Documented Components

Every AI-generated component includes:
- JSDoc with Figma node ID
- Full state matrix stories
- Visual proof in Storybook
- CI validation (green checkmarks)

### ✅ Traceable Decisions

Every design decision traces back to:
- Figma design source
- AGENTS.md rules
- Token system contracts
- Storybook acceptance notes

### ✅ Auditable Output

Human reviewers can verify AI work with:
- PR shows exact Figma node IDs
- Visual regression tests pass
- Component matches Figma screenshot
- TypeScript type checking passes

---

## Storybook as AI Communication Protocol

Storybook stories are the primary communication channel between humans and AI.

### Story Anatomy (AI-Ready Template)

```typescript
import { Button } from '../Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    // Link to design source
    figma: {
      url: 'https://figma.com/design/[fileKey]/...?node-id=6:70'
    },
    docs: {
      // Human-readable AI contract
      description: {
        component: 'Primary action button. Follows figma node 6:70 exactly.'
      }
    }
  },
  // Acceptance constraints AI must honor
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false
  }
};

// ✅ State matrix story (AI reads this)
export const SmallPrimaryDefault = {
  args: { size: 'small', variant: 'primary' },
  parameters: {
    docs: {
      description: {
        story: 'Acceptance: 48px width (from Figma), 8px padding, primary blue'
      }
    }
  }
};

export const SmallPrimaryDisabled = {
  args: { size: 'small', variant: 'primary', disabled: true },
  parameters: {
    docs: {
      description: {
        story: 'Acceptance: gray background, pointer-events none, 50% opacity'
      }
    }
  }
};

export const MediumPrimaryHover = {
  args: { size: 'md', variant: 'primary' },
  parameters: {
    docs: {
      description: {
        story: 'Acceptance: darker blue on hover (primary-600), no border-radius change'
      }
    }
  }
};

// ... (many more state combinations)
```

### What AI Reads from Stories

1. **Component prop interface** (`args`)
2. **Acceptance criteria** (`parameters.docs.description.story`)
3. **Figma reference** (`parameters.figma.url`)
4. **Design constraints** (sizes, spacing, colors from component)

### How Humans Communicate Intent to AI

Through story descriptions:
```typescript
parameters: {
  docs: {
    description: {
      story: 'Acceptance: 48px height, 12px padding, border-radius: 8px, shadow-md on hover'
    }
  }
}
```

---

## Continuous Verification

### Local Development

```bash
# Developers run this regularly
npm run check              # ✓ TypeScript valid
npm run build-storybook   # ✓ All stories render
npm run test:visual       # ✓ Visual regression baseline
```

### CI Pipeline

```bash
# On every PR/push
Quality Gates → ✓ typecheck
             → ✓ Storybook build
             → ✓ Node ID validation in PR body
             ↓
Visual Regression → ✓ Screenshot comparison
                 → ✓ No regressions
                 ↓
PR Comment → "✅ All checks passed, safe to merge"
```

---

## Escalation & Exception Handling

### When AI-Generated Code Doesn't Match Figma

1. Check AGENTS.md for workflow requirements
2. Re-run `mcp_figma_get_design_context` for latest design
3. Verify TypeScript + Storybook build passes locally
4. Review visual regression test output
5. Comment on PR with discrepancies

### When Figma Changes During Development

1. PR should include "Update from Figma" commit
2. Reference new Figma node IDs in commit message
3. Update stories with new acceptance criteria
4. Re-run visual regression tests
5. Update snapshot baselines

### When Tests Fail

**Visual regression failure:**
- Review screenshot diff in artifacts
- Determine if design intentionally changed
- Update snapshots (if intentional) or fix component (if bug)

**TypeScript error:**
- Check component prop types match Figma constraints
- Verify token imports are correct
- Run `npm run check` locally to debug

---

## Glossary: AI-Ready Terminology

| Term | Definition | AI Usage |
|------|-----------|----------|
| **Pixel-Perfect** | Component matches Figma to ±0px (layer geometry preserved) | Verify via visual test |
| **State Matrix** | All meaningful state combinations documented in stories | Generate stories for all |
| **Figma Node ID** | Unique identifier in Figma design file (e.g., `6:70`) | Include in commit messages |
| **Design Context** | Full design data (paths, layers, inset %, overflow) from Figma | Fetched via `mcp_figma_get_design_context` |
| **Semantic Token** | Intent-based design value (e.g., `interactive.hover`) | Use in component code |
| **Acceptance Note** | Human-written constraint or measurement in story doc | Honor in implementation |
| **Visual Regression** | Automated screenshot comparison to detect unintended changes | Run before merging |
| **Icon Accuracy** | Layered SVG geometry + CSS positioning matches Figma exactly | Verify with QA checklist |

---

## FAQ for AI Implementation

**Q: What if the Storybook story says something different than Figma?**
A: Figma is the source of truth. If story contradicts Figma, flag it and ask human to clarify intent.

**Q: Can I use a third-party icon library instead of the shared icon library?**
A: No. Always check `src/components/icons/` first. If icon doesn't exist, follow icon extraction workflow in ICON_LIBRARY.md.

**Q: What if Figma component changes mid-PR?**
A: Fetch latest design context, update component, create new commit with Figma node reference, request fresh review.

**Q: How do I know if a component is "AI-ready"?**
A: Check if it has tokens, Figma reference, >3 state matrix stories, passing visual regression, and npm run check passes.

**Q: Should I update visual regression snapshots?**
A: Only if design intentionally changed. Run `npm run test:visual:update`, review with `npx playwright show-report`, then commit snapshots.

---

## Related Documentation

- [AGENTS.md](../../AGENTS.md) — Execution rules (read first)
- [docs/ICON_LIBRARY.md](../ICON_LIBRARY.md) — Icon system architecture
- [docs/COMPONENTS.md](../COMPONENTS.md) — Component API reference
- [tests/README.md](../../tests/README.md) — Running visual regression tests
- [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) — Full system architecture

---

*Last Updated: April 2025*
*Version: 1.0 — AI Implementation Contract*
*Audience: AI Agents, Human Engineers, Design Stakeholders*
