# NextGen Design System: Complete Documentation

## Executive Summary

**NextGen Design System** is a comprehensive, AI-first design system built for rapid iteration, precise Figma-to-code parity, and seamless collaboration between AI agents and human engineers.

The system combines:
- **Primitive tokens** (spacing, typography, color ramps) generated directly from Figma
- **Semantic tokens** (surface, text, border, interactive) that map primitives to intent
- **Reusable React components** (TSX) with CSS-in-tokens styling
- **Centralized icon library** with pixel-perfect Figma alignment
- **AI governance infrastructure** ensuring consistent, auditable design decisions

**Version:** 0.1.0 | **License:** MIT | **Type:** ESM Module

---

## 1. Architecture Overview

### Design Principles

1. **Figma-Centric**: All design sources originate in Figma; code is generated, not handcrafted
2. **AI-First**: Repository structure, documentation, and tooling optimized for AI assistant workflows
3. **Layered Tokens**: Primitives → Semantics → Components (one-directional dependency)
4. **Precision**: Sub-pixel accuracy preserved from Figma layers through CSS positioning
5. **Governance**: Mandatory code review gates, CI validation, and design audit trails

### Repository Structure

```
NextGen-Design-System/
├── src/
│   ├── components/           # React TSX component library
│   │   ├── icons/           # Reusable icon library
│   │   ├── Button.tsx       # Atomic components
│   │   ├── Card.tsx         # Composite components
│   │   └── index.ts         # Barrel exports
│   ├── primitives/          # Low-level design primitives
│   │   ├── Spacing.ts       # Spacing scales
│   │   ├── Typography.ts    # Type scales
│   │   └── Color.ts         # Color ramps
│   ├── semantics/           # Theme contracts & semantic mappings
│   │   ├── Surface.ts       # Surface token definitions
│   │   ├── Text.ts          # Text color & weight contracts
│   │   └── Interactive.ts   # Interactive state tokens
│   ├── styles/
│   │   └── system.css       # CSS token variables + core utilities
│   └── tokens/
│       ├── source/          # Raw Figma exports (JSON)
│       └── generated/       # Flattened TypeScript + CSS
├── stories/                  # Storybook stories & visual docs
├── docs/                      # Implementation guides
│   ├── COMPONENTS.md        # Component usage reference
│   ├── PRIMITIVES.md        # Primitive tokens reference
│   ├── SEMANTICS.md         # Semantic contracts
│   ├── TOKENS.md            # Token generation & sync
│   └── AI_ENABLEMENT_CHECKLIST.md
├── .github/
│   ├── workflows/           # CI/CD automation
│   │   └── quality-gates.yml
│   └── pull_request_template.md
├── AGENTS.md                # Canonical AI instruction source
├── CLAUDE.md, GEMINI.md     # AI assistant compatibility files
├── .cursorrules             # Cursor IDE instructions
└── package.json

```

### Layer Dependency Flow

```
Figma Design Files
        ↓
  src/tokens/source/     (JSON exports from Figma)
        ↓
  scripts/build-tokens.mjs    (generation + flattening)
        ↓
  src/tokens/generated/   (TypeScript + CSS variables)
        ↓
  src/semantics/          (intent-based token mappings)
        ↓
  src/components/         (React components consuming tokens)
        ↓
  stories/                (Storybook documentation + visual tests)
```

---

## 2. Core Concepts

### Tokens: Primitives → Semantics → Components

#### Primitive Tokens
Lowest-level design decisions directly exported from Figma.

**Examples:**
```typescript
// src/tokens/generated/primitives.ts
export const spacingScale = {
  xs: '4px',    // 4
  sm: '8px',    // 8
  md: '12px',   // 12
  lg: '16px',   // 16
  xl: '24px',   // 24
  // ...
};

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 600,
  bold: 700,
};

export const colorRamp = {
  primary: {
    50: '#f0f7ff',
    100: '#e0effe',
    // ... 900: '#0c2052'
  }
};
```

#### Semantic Tokens
Intent-based mappings that derive meaning from primitives.

**Examples:**
```typescript
// src/semantics/Surface.ts
export const surfaceTokens = {
  // Background surfaces
  background: {
    primary: colorRamp.neutral[0],      // Lightest for main background
    secondary: colorRamp.neutral[50],   // Subtle surface
    tertiary: colorRamp.neutral[100],   // Interactive surface
  },
  
  // Interactive surfaces
  interactive: {
    default: colorRamp.primary[500],
    hover: colorRamp.primary[600],
    active: colorRamp.primary[700],
    disabled: colorRamp.neutral[300],
  }
};
```

#### Component Layer
React components consume semantic tokens through CSS variables and TypeScript exports.

```typescript
// src/components/Button.tsx
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  state = 'default' 
}: ButtonProps) {
  const className = `ng-button ng-button--${variant} ng-button--${size} ng-button--${state}`;
  return <button className={className}>{children}</button>;
}

// CSS (src/styles/system.css)
.ng-button {
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--surface-interactive-default);
  color: var(--text-on-interactive);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-md);
}

.ng-button:hover {
  background-color: var(--surface-interactive-hover);
}
```

---

## 3. Icon System Architecture

### Overview

The icon library provides pixel-perfect reusable icon components extracted from Figma with guaranteed fidelity. Icons are centralized in `src/components/icons/` and exported through the component barrel.

### Icon Rendering Approach: Layered SVG with CSS Positioning

Each icon is composed of nested SVG layers with CSS-based positioning and overflow behavior. This approach preserves exact Figma layer geometry.

#### Anatomy: SparkleIcon Example

```typescript
// src/components/icons/TopBarIcons.tsx
export function SparkleIcon(): ReactElement {
  return (
    <span className="ng-topbar__icon-art">
      {/* Layer 1: Large sparkle background (outer glow) */}
      <span className="ng-topbar__icon-layer--ai-large ng-topbar__icon-overflow--ai-sparkle-large">
        <svg className="ng-topbar__glyph" /* ... */ >
          {/* SVG path for large sparkle element */}
        </svg>
      </span>
      
      {/* Layer 2: Small sparkle focus (center element) */}
      <span className="ng-topbar__icon-layer--ai-small ng-topbar__icon-overflow--ai-sparkle-small">
        <svg className="ng-topbar__glyph" /* ... */ >
          {/* SVG path for small sparkle element */}
        </svg>
      </span>
    </span>
  );
}
```

#### CSS Layer Positioning

```css
/* src/styles/system.css */

/* Icon container: 24x24px with clipping */
.ng-topbar__icon-art {
  position: relative;
  width: 24px;
  height: 24px;
  overflow: clip;
}

/* SVG glyph: fill parent container */
.ng-topbar__glyph {
  height: 100%;
  width: 100%;
  stroke: currentColor;
  fill: currentColor;
}

/* Layer positioning using inset (CSS shorthand for top/right/bottom/left) */
.ng-topbar__icon-layer--ai-small {
  position: absolute;
  inset: 12.5%;          /* Inset 12.5% = 3px from 24px container */
  overflow: clip;
}

.ng-topbar__icon-layer--ai-large {
  position: absolute;
  inset: 29.17%;         /* Inset 29.17% = 7px from 24px container */
  overflow: clip;
}

/* Layer overflow management (crop or extend beyond boundaries) */
.ng-topbar__icon-overflow--ai-sparkle-small {
  overflow: clip;        /* Clip to layer bounds */
}

.ng-topbar__icon-overflow--ai-sparkle-large {
  overflow: visible;     /* Extend beyond layer bounds */
}
```

#### How Layer Geometry Preserves Figma Fidelity

1. **Figma exports layer metadata**: Each icon layer has position (inset %) and overflow property
2. **CSS positioning**: `inset` property positions SVG layers as CSS clips relative to 24px container
3. **SVG fill-parent**: Glyphs sized to 100% x 100% so layers render exactly inside their wrappers
4. **Overflow control**: Each layer's overflow setting (clip/visible) controls whether content extends beyond CSS boundary

**Example math:**
- Figma container: 24px × 24px
- Figma layer "ai-small" inset: 12.5% (3px from all sides)
- CSS rendering: `inset: 12.5%` → layer becomes 18px × 18px (24 - 3 - 3)
- SVG glyph inside: scaled 100% × 100% to fill 18px × 18px container

### Current Icon Library

**Location:** `src/components/icons/TopBarIcons.tsx`

**Exported Icons:**
- `SparkleIcon`: AI chat indicator (dual-layer sparkle)
- `NotificationIcon`: Bell shape with optional badge
- `ProfileIcon`: Silhouette bust
- `CardIcon`: Credit card outline
- `ClaimsIcon`: Document/receipt shape
- `LearnIcon`: Book pages
- `ShopIcon`: Shopping bag outline

**Export:** Via barrel at `src/components/icons/index.ts`

**Usage:**
```typescript
import { SparkleIcon, NotificationIcon } from './icons';

function MyComponent() {
  return <SparkleIcon />;
}
```

### Icon Generation Workflow (Figma → Code)

1. **Figma Design**: Open Figma component, identify icon node ID (e.g., `6:93`)
2. **Get Design Context**: Call `mcp_figma_get_design_context` → receive exact SVG paths, layer structure, inset/overflow percentages
3. **Get Metadata**: Call `mcp_figma_get_metadata` → verify size constraints (24px, 32px, 48px)
4. **Create Component**: Write ReactElement with nested spans, each layer positioned via CSS inset + overflow
5. **Validate**: Run `npm run check` + `npm run build-storybook` + `mcp_figma_get_screenshot` for visual sanity check
6. **Export**: Add to icon barrel, use throughout components

### Icon Accuracy Requirements (QA Checklist)

Before shipping icon changes:

- [ ] **Layer preservation**: Figma layers → CSS wrappers with matching inset/overflow
- [ ] **Geometry accuracy**: inset percentages match Figma design context exactly
- [ ] **SVG fidelity**: Paths, viewBox, strokeWidth preserved from Figma export
- [ ] **Color handling**: Use `currentColor` unless Figma node explicitly requires fixed colors
- [ ] **Container size**: Match Figma node dimensions (24px vs 32px vs 48px)
- [ ] **Screenshot validation**: Visual silhouette matches Figma screenshot
- [ ] **TypeScript check**: `npm run check` passes (no type errors)
- [ ] **Storybook build**: `npm run build-storybook` succeeds (proof of rendering)

---

## 4. Component Library

### Component Categories

#### Atomic Components
Single-purpose, fully autonomous UI elements.

- **Button**: Primary CTA with variant (primary/secondary/tertiary) and size (sm/md/lg)
- **Input**: Text input with label, supporting text, validation states
- **Checkbox**: Binary selection with indeterminate state
- **Radio**: Mutually exclusive selection within group
- **Badge**: Status label (info, success, warning, error)
- **Card**: Container with optional header/body/footer

#### Composite Components
Multi-part layouts combining atomic elements.

- **TopBar**: Navigation header (slim/expanded modes, search, quick actions, greeting)
- **BottomNav**: Tab-based navigation footer
- **Alert**: Status message container (success/warning/error/info)
- **TileButtonGroup**: Grid of button tiles with exclusive selection
- **Chip**: Tag with optional dismiss action

#### Screens & Patterns
Full-page layouts demonstrating component integration.

- **DashboardScreen**: Multi-section dashboard layout
- **AccountsInvestingSetupPage**: Multi-step onboarding flow
- **TopBarExpanded**: TopBar in expanded state with all content visible

### Component Usage Pattern

All components follow a consistent pattern:

```typescript
// src/components/MyComponent.tsx
import { ReactElement } from 'react';

export interface MyComponentProps {
  /**
   * Visual variant determining styling
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * Visual size determining spacing/typography
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Content label or text
   */
  label: string;
  
  /**
   * Callback on user interaction
   */
  onClick?: (event: React.MouseEvent) => void;
  
  children?: React.ReactNode;
}

export function MyComponent({
  variant = 'primary',
  size = 'md',
  label,
  onClick,
  children
}: MyComponentProps): ReactElement {
  return (
    <div 
      className={`ng-mycomponent ng-mycomponent--${variant} ng-mycomponent--${size}`}
      onClick={onClick}
      role="button"
    >
      {children}
    </div>
  );
}
```

### Component Discovery

**Storybook:** Visual documentation + interactive testing
```bash
npm run storybook
# Visit http://localhost:6006
# Browse all components with live controls
```

**API Reference:** See [docs/COMPONENTS.md](docs/COMPONENTS.md)

---

## 5. Token System: Generation & Synchronization

### Token Architecture

Tokens originate as JSON exports from Figma, then flow through a generation pipeline to create TypeScript and CSS artifacts.

### Workflow: Figma → Token Files → Generated Artifacts

```
┌─────────────────────┐
│  Figma Design File  │
│  (Token variables   │
│   + components)     │
└──────────┬──────────┘
           │ (manual export or sync script)
           ↓
┌─────────────────────────────────────┐
│  src/tokens/source/*.json           │
│  (Raw Figma exports)                │
│  - primitives.json                  │
│  - semantics.json                   │
│  - components.json                  │
└──────────┬──────────────────────────┘
           │ (npm run build:tokens)
           ↓
┌──────────────────────────────────────┐
│  src/tokens/generated/               │
│  - primitives.ts                     │
│  - semantics.ts                      │
│  - index.ts                          │
│  - system-vars.css                   │
└──────────┬───────────────────────────┘
           │
           ↓ (imported in components)
┌─────────────────────────┐
│  Component Library TSX  │
│  + Storybook Stories    │
└─────────────────────────┘
```

### Build Commands

**Sync tokens from Figma:**
```bash
npm run sync:tokens
# Fetches latest Figma token exports into src/tokens/source/
```

**Generate TypeScript + CSS from tokens:**
```bash
npm run build:tokens
# Runs scripts/build-tokens.mjs
# Outputs TypeScript type-safe exports + CSS variables
```

**Complete build pipeline:**
```bash
npm run build
# Runs: build:tokens → TypeScript compilation
```

### Token File Structure

#### Primitive Tokens Example (`src/tokens/source/primitives.json`)

```json
{
  "spacing": {
    "xs": { "value": "4px", "type": "dimension" },
    "sm": { "value": "8px", "type": "dimension" },
    "md": { "value": "12px", "type": "dimension" },
    "lg": { "value": "16px", "type": "dimension" }
  },
  "color": {
    "primary": {
      "50": { "value": "#f0f7ff", "type": "color" },
      "100": { "value": "#e0effe", "type": "color" }
    },
    "neutral": {
      "0": { "value": "#ffffff", "type": "color" },
      "50": { "value": "#f8f9fa", "type": "color" }
    }
  },
  "fontWeight": {
    "light": { "value": 300, "type": "number" },
    "regular": { "value": 400, "type": "number" },
    "medium": { "value": 600, "type": "number" },
    "bold": { "value": 700, "type": "number" }
  }
}
```

#### Generated TypeScript (`src/tokens/generated/primitives.ts`)

```typescript
// Auto-generated from src/tokens/source/primitives.json
export const spacingScale = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px'
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 600,
  bold: 700
} as const;

export const colors = {
  primary: {
    50: '#f0f7ff',
    100: '#e0effe',
    // ...
  },
  neutral: {
    0: '#ffffff',
    50: '#f8f9fa',
    // ...
  }
} as const;
```

#### Generated CSS (`src/tokens/generated/system-vars.css`)

```css
:root {
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  
  /* Colors */
  --color-primary-50: #f0f7ff;
  --color-primary-100: #e0effe;
  
  /* Font weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 600;
  --font-weight-bold: 700;
}
```

### Consuming Tokens in Components

#### TypeScript (Type-Safe)

```typescript
import { spacingScale, colors } from '../tokens/generated/primitives';

export function MyComponent() {
  const padding = spacingScale.md;        // "12px" with type inference
  const bgColor = colors.primary[50];     // "#f0f7ff" with type inference
  
  return <div style={{ padding, backgroundColor: bgColor }} />;
}
```

#### CSS Variables (Runtime)

```css
.ng-mycomponent {
  padding: var(--spacing-md);
  background-color: var(--color-primary-50);
}
```

### Semantic Token Generation

Semantics are manually defined in `src/semantics/` to layer intent on primitives.

```typescript
// src/semantics/Interactive.ts
import { colors } from '../tokens/generated/primitives';

export const interactiveTokens = {
  background: {
    default: colors.primary[500],
    hover: colors.primary[600],
    active: colors.primary[700],
    disabled: colors.neutral[300]
  },
  text: {
    default: colors.neutral[0],
    hover: colors.neutral[50],
    active: colors.neutral[100]
  }
} as const;
```

---

## 6. AI Enablement & Governance

### Purpose: AI-First Development Workflow

The design system is built to enable AI agents and human engineers to work autonomously from GitHub + Storybook, reading design intent directly and generating code with guaranteed Figma fidelity.

### Canonical Instructions: AGENTS.md

**Location:** `AGENTS.md` (repository root)

**Purpose:** Single source of truth for all AI assistants (Copilot, Cursor, Claude, Gemini, etc.)

**Key Rules:**

1. **Figma MCP Workflow (Mandatory)**
   - Step 1: `mcp_figma_get_design_context` (primary source for geometry)
   - Step 2: `mcp_figma_get_metadata` (validation for constraints)
   - Step 3: `mcp_figma_get_screenshot` (visual sanity check only—never geometry source)

2. **Icon Accuracy Requirements**
   - Preserve Figma layer structure (nested CSS spans + inset/overflow)
   - Preserve SVG paths, viewBox, strokeWidth
   - Use `currentColor` unless explicit fixed colors required
   - Validate with pixel-perfect comparison

3. **Required Verification**
   - `npm run check` (TypeScript validation)
   - `npm run build-storybook` (render proof)

4. **Prohibited Shortcuts**
   - No screenshot-only implementation
   - No simplified hand-drawn replacements
   - No localhost asset URLs in shipping code

5. **Conflict Resolution Hierarchy**
   - AGENTS.md (this file) = canonical
   - Agent-specific (CLAUDE.md, GEMINI.md, .cursorrules)
   - Assistant-specific (.github/copilot-instructions.md)
   - Other local docs

### AI Compatibility Entry Points

Multiple paths to instructions for different tools:

- **AGENTS.md** (canonical, read first)
- **CLAUDE.md** (Claude/ChatGPT entry—defers to AGENTS.md)
- **GEMINI.md** (Gemini entry—defers to AGENTS.md)
- **.cursorrules** (Cursor IDE entry—defers to AGENTS.md)
- **.github/copilot-instructions.md** (Copilot workspace entry—defers to AGENTS.md)

### Governance Gates: Quality Assurance Pipeline

#### CI Workflow: `.github/workflows/quality-gates.yml`

Automated checks on every PR and push:

**Job 1: Typecheck + Build**
- Runs `npm run check` (TypeScript validation)
- Runs `npm run build-storybook` (proof of rendering)
- Fails PR if either fails

**Job 2: Figma Node ID Validation**
- Parses PR body for Figma node ID references
- Regex pattern: `node-id: [0-9:,-]+`
- Fails PR if no node IDs found (for design/icon changes)

#### PR Template: `.github/pull_request_template.md`

Mandatory checklist for all PRs:

```markdown
## 🎨 Design Changes

- [ ] AI/Design checklist completed
- [ ] Figma node IDs included (format: `node-id: 6:93, 185:3941`)
- [ ] Used mcp_figma_get_* tools for all geometry
- [ ] npm run check passes
- [ ] npm run build-storybook passes
```

### AI Enablement Phased Rollout

**Phases:** Foundation → Pilot → Governance → Storybook Readiness → Operational Excellence

See [docs/AI_ENABLEMENT_CHECKLIST.md](docs/AI_ENABLEMENT_CHECKLIST.md) for detailed rollout plan.

**Current Status:**
- ✅ Phase 1: Foundation (AGENTS.md, icon QA requirements)
- ✅ Phase 2: Pilot (TopBar icon library extraction)
- ✅ Phase 3: Governance (PR template + CI workflow)
- 📋 Phase 4: Storybook Readiness (acceptance criteria, state matrices)
- 📋 Phase 5: Operational Excellence (CODEOWNERS, semantic versioning)

---

## 7. Development Workflow

### Local Setup

```bash
# Clone repository
git clone https://github.com/batesnathan/NextGen-Design-System.git
cd NextGen-Design-System

# Install dependencies
npm install

# Build tokens (if modifying design tokens)
npm run build:tokens

# Type check
npm run check

# Start Storybook dev server
npm run storybook
# → http://localhost:6006
```

### Common Tasks

#### Adding a New Component

1. **Create component file** in `src/components/MyComponent.tsx`
   ```typescript
   export function MyComponent(props: MyComponentProps): ReactElement {
     return <div className="ng-mycomponent">{children}</div>;
   }
   ```

2. **Add styles** in `src/styles/system.css`
   ```css
   .ng-mycomponent {
     /* styles */
   }
   ```

3. **Export from barrel** in `src/components/index.ts`
   ```typescript
   export { MyComponent } from './MyComponent';
   ```

4. **Create story** in `src/stories/nextgen/MyComponent.stories.tsx`
   ```typescript
   export default { component: MyComponent };
   export const Default = {};
   export const Variant = { args: { variant: 'secondary' } };
   ```

5. **Validate**
   ```bash
   npm run check
   npm run build-storybook
   ```

6. **Commit with Figma node IDs** (if design-driven)
   ```bash
   git add .
   git commit -m "feat: add MyComponent

   - Figma node IDs: 6:123, 185:456
   - Design: [link to Figma file]"
   ```

#### Extracting Icons from Figma

1. **Get Figma node ID** (e.g., `6:93` for SparkleIcon)

2. **Call mcp_figma_get_design_context** to retrieve:
   - SVG paths and layer structure
   - inset percentages for CSS positioning
   - overflow properties (clip vs visible)
   - viewBox and strokeWidth

3. **Create icon component** in `src/components/icons/CategoryIcons.tsx`
   ```typescript
   export function MyIcon(): ReactElement {
     return (
       <span className="ng-icon-art">
         <span className="ng-icon-layer--part1">
           <svg className="ng-icon-glyph">...</svg>
         </span>
       </span>
     );
   }
   ```

4. **Export from barrel** in `src/components/icons/index.ts`

5. **Validate**
   ```bash
   npm run check
   npm run build-storybook
   mcp_figma_get_screenshot [node-id]  # Visual sanity check
   ```

#### Syncing Figma Tokens

```bash
# Fetch latest token exports from Figma
npm run sync:tokens

# Generate TypeScript + CSS from updated JSON
npm run build:tokens

# Type check
npm run check

# Commit
git add src/tokens/
git commit -m "refactor: sync token updates from Figma"
```

### Git Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feat/icon-library-expansion
   ```

2. **Make changes** (follow component/icon addition patterns above)

3. **Validate locally**
   ```bash
   npm run check
   npm run build-storybook
   ```

4. **Commit with Figma references** (if applicable)
   ```bash
   git commit -m "feat: expand icon library

   - Added: HeartIcon, StarIcon, DownloadIcon
   - Figma nodes: 185:3941, 185:3949, 185:3957
   - Validated: npm run check, npm run build-storybook"
   ```

5. **Push and create PR**
   ```bash
   git push origin feat/icon-library-expansion
   ```

6. **PR review triggers**
   - CI workflow: typecheck + build-storybook + node-ID validation
   - ✅ All gates must pass before merge

7. **Merge and cleanup**
   ```bash
   git checkout main
   git pull
   git branch -d feat/icon-library-expansion
   ```

### Continuous Integration

**On every push/PR:**
1. TypeScript type checking
2. Storybook static build (proof of rendering)
3. Figma node ID validation (if design changes)

**On merge to main:**
- Package ready for npm publish (if version bumped)
- Storybook static site updated (if configured)

---

## 8. Design System Versioning

**Current Version:** 0.1.0 (Early Alpha)

**Version Policy:** Semantic Versioning (SemVer)
- **Major** (1.0.0): Breaking changes to component API or token names
- **Minor** (0.1.0): New components or additive token changes
- **Patch** (0.1.1): Bug fixes or style corrections

**When to bump:**
- Component prop changes → Major
- New components or token additions → Minor
- Icon refinements or CSS fixes → Patch

**Bump process:**
```bash
# Edit package.json version field
# Commit
git commit -m "chore: bump version to 0.1.1"
git tag v0.1.1
git push --tags
```

---

## 9. API Reference

### Getting Started
- [Primitives Reference](docs/PRIMITIVES.md): Spacing, color, typography scales
- [Semantics Reference](docs/SEMANTICS.md): Intent-based token contracts
- [Token Generation](docs/TOKENS.md): How tokens flow from Figma to code
- [Component Guide](docs/COMPONENTS.md): Full component API documentation

### Quick Links
- **Storybook:** `npm run storybook` → http://localhost:6006
- **Build Token:** `npm run build:tokens`
- **Validate:** `npm run check && npm run build-storybook`

### Key Exports

```typescript
// Primitives
export { spacingScale, colors, fontWeights } from './tokens/generated/primitives';

// Semantics
export { surfaceTokens, textTokens, interactiveTokens } from './semantics';

// Components
export {
  Button,
  Card,
  Input,
  Badge,
  Checkbox,
  Radio,
  TopBar,
  BottomNav,
  Alert
} from './components';

// Icons
export {
  SparkleIcon,
  NotificationIcon,
  ProfileIcon,
  CardIcon,
  ClaimsIcon,
  LearnIcon,
  ShopIcon
} from './components/icons';
```

---

## 10. Publishing & Distribution

### NPM Package

**Package Name:** `nextgen-design-system`
**Repository:** https://github.com/batesnathan/NextGen-Design-System
**License:** MIT

**Publishable Files:**
```
dist/                   # Compiled TypeScript output
src/tokens/source/      # Raw Figma token exports
src/tokens/generated/   # Generated token TypeScript
docs/                   # Documentation
```

**Build before publish:**
```bash
npm run build
npm publish
```

### Consuming the Package

**In your React project:**

```bash
npm install nextgen-design-system
```

**In your component:**

```typescript
import {
  Button,
  Card,
  SparkleIcon,
  spacingScale,
  colors
} from 'nextgen-design-system';

export function MyApp() {
  return (
    <Card style={{ padding: spacingScale.lg }}>
      <Button>
        <SparkleIcon /> Click me
      </Button>
    </Card>
  );
}
```

**CSS Variables:**

```css
@import 'nextgen-design-system/dist/system-vars.css';

.my-widget {
  background: var(--color-primary-50);
  padding: var(--spacing-md);
  font-weight: var(--font-weight-medium);
}
```

---

## 11. Contributing

### Guidelines for Contributors

#### Before Starting

1. **Read AGENTS.md** (if working on design/icons)
2. **Check PR template** requirements
3. **Run local validation** before pushing

#### Component Requirements

- ✅ JSDoc comments for all props
- ✅ TypeScript interfaces with explicit types
- ✅ Semantic CSS class names (ng-{component}--{variant})
- ✅ Storybook stories for each variant/state
- ✅ Accessibility attributes (role, aria-*, tabIndex)
- ✅ Pass `npm run check`
- ✅ Pass `npm run build-storybook`

#### Icon Requirements (See AGENTS.md)

- ✅ Use Figma node IDs in commit message
- ✅ Preserve layer structure + inset/overflow
- ✅ Preserve SVG geometry + viewBox
- ✅ Use currentColor for stroke/fill
- ✅ Validate visual silhouette matches Figma
- ✅ Pass all verification checks

#### How to Submit

1. Fork repository
2. Create feature branch: `feat/my-feature`
3. Make changes following guidelines above
4. Validate: `npm run check && npm run build-storybook`
5. Commit with Figma references (if applicable)
6. Push and open PR
7. Address review feedback
8. Merge after CI gates pass

### Code of Conduct

- Respect design fidelity (preserve Figma geometry exactly)
- Ask before breaking component APIs
- Document state changes with Storybook
- Reference Figma node IDs when modifying designs

---

## 12. Troubleshooting

### Common Issues

#### Icons rendering incorrectly

**Symptom:** Icon appears distorted or layers misaligned

**Solution:**
1. Verify `ng-topbar__glyph` CSS: should be `height: 100%; width: 100%` (not fixed px)
2. Check layer CSS classes have correct `inset` percentages
3. Run `mcp_figma_get_design_context` to validate Figma geometry
4. Compare screenshot: `mcp_figma_get_screenshot [node-id]`

#### Type errors after token changes

**Symptom:** `npm run check` fails with type mismatches

**Solution:**
1. Run `npm run build:tokens` to regenerate TypeScript exports
2. Verify JSON token files in `src/tokens/source/` are valid
3. Check import paths match generated file names
4. Run `npm install` to ensure dependencies are up-to-date

#### Storybook build fails

**Symptom:** `npm run build-storybook` errors

**Solution:**
1. Ensure all components export ReactElement types
2. Check story files have default export with component reference
3. Verify component props match story args
4. Run `npm run check` first to catch TypeScript issues
5. Clear `.storybook` cache: `rm -rf .storybook-cache`

#### Figma sync fails

**Symptom:** `npm run sync:tokens` produces no updates

**Solution:**
1. Verify Figma file access permissions
2. Check figma.config.json has correct file ID
3. Ensure token variables exist in Figma design file
4. Run `npm run build:tokens` after sync to generate artifacts

---

## 13. FAQ

**Q: Can I use this without React?**
A: This version targets React 18+. CSS variables are available independently for non-React projects, but component library requires React.

**Q: How do I customize colors for my brand?**
A: Override CSS variables in your app:
```css
:root {
  --color-primary-500: #your-color;
}
```

Or import semantic tokens and extend them:
```typescript
import { interactiveTokens } from 'nextgen-design-system';
export const myTokens = { ...interactiveTokens, customColor: '#abc' };
```

**Q: What if I want to use a different icon size (not 24px)?**
A: Icons scale via container wrappers:
```typescript
function Icon32({ icon: Icon }: { icon: () => ReactElement }) {
  return <div style={{ width: 32, height: 32, transform: 'scale(1.33)' }}><Icon /></div>;
}
```
Or create size-specific icon variants in Figma.

**Q: How do I contribute new token types?**
A: Add to `src/tokens/source/` as JSON, run `npm run build:tokens`, and export from `src/tokens/generated/`. Follow semantic naming convention (e.g., `shadow`, `border-radius`).

**Q: Can AI agents really design autonomously with this system?**
A: Yes. AGENTS.md + icon QA checklist + Figma node ID enforcement ensures AI-generated code maintains pixel-perfect fidelity. CI gates prevent regressions. See AI_ENABLEMENT_CHECKLIST.md for rollout status.

---

## 14. Glossary

| Term | Definition |
|------|-----------|
| **Design Tokens** | Reusable design decisions (spacing, color, type) stored as JSON/TS/CSS |
| **Primitive Token** | Low-level design value directly from Figma (e.g., color ramp, spacing scale) |
| **Semantic Token** | Intent-bound mapping that derives meaning from primitives (e.g., "surface-interactive") |
| **Inset** | CSS positioning property (top/right/bottom/left shorthand); used for layer positioning |
| **Overflow** | CSS property controlling whether content extends beyond element boundary (clip vs visible) |
| **Glyph** | Single SVG shape; often rendered as part of multi-layer icon |
| **Barrel Export** | File (index.ts) that re-exports symbols from submodules for cleaner imports |
| **Storybook** | Interactive documentation system for components with live previews |
| **CI/CD** | Continuous Integration/Deployment; automated pipeline for testing and publishing |
| **Figma MCP** | Model Context Protocol integration for programmatic access to Figma design data |

---

## 15. Resources

### Documentation
- [AGENTS.md](AGENTS.md) — AI instruction source (read first!)
- [docs/PRIMITIVES.md](docs/PRIMITIVES.md) — Token scales reference
- [docs/SEMANTICS.md](docs/SEMANTICS.md) — Semantic token contracts
- [docs/COMPONENTS.md](docs/COMPONENTS.md) — Component API
- [docs/TOKENS.md](docs/TOKENS.md) — Token generation guide
- [docs/AI_ENABLEMENT_CHECKLIST.md](docs/AI_ENABLEMENT_CHECKLIST.md) — Rollout roadmap

### Tools
- **Figma**: Design file source
- **Storybook**: Visual documentation (`npm run storybook`)
- **TypeScript**: Component implementation language
- **Vitest + Playwright**: Testing (planned)

### External Links
- GitHub: https://github.com/batesnathan/NextGen-Design-System
- NPM: https://npmjs.com/package/nextgen-design-system
- Design File: [Figma Link]

### Related Projects
- **DesignSystem** (legacy): Previous iteration with Tailwind
- **Component Library**: Pure CSS component variants (if published)

---

## 16. License & Attribution

**License:** MIT

**Copyright:** 2025-present

**Authors:** Nathan Bates, AI Design System Contributors

**Contributions:** Governed by [CONTRIBUTING.md](CONTRIBUTING.md) (if created)

---

## Summary

**NextGen Design System** is a production-ready design system enabling pixel-perfect Figma-to-code workflows, reusable component library, and AI-first development practices.

**Key Strengths:**
- ✅ Figma-centric token generation (primitives → semantics → components)
- ✅ Pixel-perfect icon library with layer-based CSS rendering
- ✅ AI governance gates (AGENTS.md, PR template, CI validation)
- ✅ Type-safe token consumption (TypeScript + CSS variables)
- ✅ Comprehensive documentation for humans and AI

**Getting Started:**
1. Clone repo
2. `npm install && npm run build:tokens`
3. `npm run storybook` to explore components
4. Read AGENTS.md before contributing

**Questions?** Open an issue on GitHub.

---

*Last Updated: April 2025*
*Document Version: 1.0*
