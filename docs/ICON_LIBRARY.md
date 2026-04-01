# Icon Library Reference

## Overview

The icon library (`src/components/icons/`) is the single source of truth for reusable icon components across the NextGen Design System. All icons are centralized, version-controlled, and Figma-aligned for pixel-perfect consistency.

**Location:** `src/components/icons/`
**Exported from:** `src/components/icons/index.ts` (barrel export)
**Used by:** BottomNav, TopBar, Alert, RadioButton, Chip, and custom components

---

## Icon Sets

### TopBar Icons (`TopBarIcons.tsx`)

Indicators and actions for the top navigation bar.

| Icon | Purpose | Props | Figma Node |
|------|---------|-------|-----------|
| `SparkleIcon` | AI chat indicator with dual-layer effect | `none` | 6:93 |
| `NotificationIcon` | Bell for notifications | `none` | 185:3941 |
| `ProfileIcon` | User profile silhouette | `none` | [TBD] |
| `CardIcon` | Credit/debit card outline | `none` | 6:98 |
| `ClaimsIcon` | Document/claims shape | `none` | 6:102 |
| `LearnIcon` | Book pages | `none` | 6:106 |
| `ShopIcon` | Shopping bag outline | `none` | 6:110 |

**Usage:**
```typescript
import { SparkleIcon, NotificationIcon } from './components/icons';

function MyComponent() {
  return <SparkleIcon />;
}
```

### BottomNav Icons (`BottomNavIcons.tsx`)

Navigation indicators for bottom navigation bar.

| Icon | Purpose | Props | States | Figma Node |
|------|---------|-------|--------|-----------|
| `HomeIcon` | Home section indicator | `active: boolean` | active → dot, inactive | [TBD] |
| `AccountsIcon` | Accounts section | `none` | static | [TBD] |
| `InvestIcon` | Investing section (trending chart) | `none` | static | [TBD] |
| `MarketplaceIcon` | Marketplace/shop | `active: boolean` | active → dot | [TBD] |
| `MoreIcon` | More options (three dots) | `none` | static | [TBD] |

**Usage:**
```typescript
import { HomeIcon, AccountsIcon } from './components/icons';

function NavItem({ active }: { active: boolean }) {
  return active ? <HomeIcon active /> : <HomeIcon />;
}
```

### Alert Icons (`AlertIcons.tsx`)

Status indicators for alert components.

| Icon | Purpose | Props | Figma Node |
|------|---------|-------|-----------|
| `AlertStatusIcon` | Multi-layer ring + checkmark | `none` | [TBD] |

**Layers:**
- Ring wrap: outer circular border
- Check/indicator: inner center mark

**Usage:**
```typescript
import { AlertStatusIcon } from './components/icons';

function Alert() {
  return <AlertStatusIcon />;
}
```

### Radio Icons (`RadioIcons.tsx`)

Selection state indicators for radio buttons.

| Icon | Purpose | Props | Figma Node |
|------|---------|-------|-----------|
| `SelectedRadioIcon` | Selected radio state | `none` | [TBD] |

**Layers:**
- Outer ring: dark stroke border
- Inner fill: purple/brand color circle

**Usage:**
```typescript
import { SelectedRadioIcon } from './components/icons';

function RadioButton({ selected }: { selected: boolean }) {
  return selected ? <SelectedRadioIcon /> : null;
}
```

### Chip Icons (`ChipIcons.tsx`)

Action/state indicators for chip components.

| Icon | Purpose | Props | Figma Node |
|------|---------|-------|-----------|
| `ChipLeftIcon` | Left-side checkmark (selection) | `none` | [TBD] |
| `ChipRightIcon` | Right-side heart (like/favorite) | `none` | [TBD] |

**Layers:** Each icon uses nested CSS wrappers with `inset` + `overflow` for precise positioning.

**Usage:**
```typescript
import { ChipLeftIcon, ChipRightIcon } from './components/icons';

function Chip({ showLeft }: { showLeft: boolean }) {
  return showLeft ? <ChipLeftIcon /> : null;
}
```

---

## Icon Architecture: Layered SVG + CSS Positioning

All icons follow the **layered-SVG pattern** for pixel-perfect Figma fidelity.

### Pattern: Nested Spans with CSS Positioning

```typescript
export function ExampleIcon(): ReactElement {
  return (
    // Container: 24x24px with clipping
    <span className="ng-icon-art" aria-hidden="true">
      
      {/* Layer 1: Positioned at 12.5% inset */}
      <span className="ng-icon-layer--part1">
        <span className="ng-icon-overflow--part1">
          <svg className="ng-icon-glyph" /* SVG content */ />
        </span>
      </span>
      
      {/* Layer 2: Positioned at 25% inset */}
      <span className="ng-icon-layer--part2">
        <span className="ng-icon-overflow--part2">
          <svg className="ng-icon-glyph" /* SVG content */ />
        </span>
      </span>
      
    </span>
  );
}
```

### CSS Structure (`src/styles/system.css`)

```css
/* Icon container: position reference + overflow clip */
.ng-icon-art {
  position: relative;
  width: 24px;       /* or 32px, depending on use */
  height: 24px;
  overflow: clip;
}

/* SVG filler: expand to 100% of parent wrapper */
.ng-icon-glyph {
  height: 100%;
  width: 100%;
  stroke: currentColor;
  fill: currentColor;
}

/* Layer positioning: inset as percentage */
.ng-icon-layer--part1 {
  position: absolute;
  inset: 12.5%;      /* 3px from 24px container */
  overflow: clip;
}

.ng-icon-layer--part2 {
  position: absolute;
  inset: 25%;        /* 6px from 24px container */
  overflow: visible; /* or clip, depending on Figma design */
}
```

### Why This Approach?

1. **Figma fidelity**: Inset percentages match Figma layer positioning exactly
2. **Scalability**: 100% SVG sizing scales proportionally with container
3. **Color control**: `currentColor` inherits parent text color
4. **Overflow control**: Per-layer crop/extend via CSS property

---

## Naming Conventions

### Function Names

```typescript
// Format: [Domain][Shape]Icon
// Examples:
TopBarIcon          // Generic TopBar icon prefix
HomeIcon            // Semantic navigation icon
SparkleIcon         // Descriptive shape
AlertStatusIcon     // [Component][Feature]Icon
SelectedRadioIcon   // [State][Component]Icon
ChipLeftIcon        // [Component][Position]Icon
```

### CSS Classes

```typescript
// Format: ng-[component]__[feature][-[subfeature]]
.ng-topbar__icon-art              // Icon container
.ng-topbar__icon-layer--ai-small  // Layer identifier
.ng-topbar__icon-overflow--bubble // Overflow behavior

.ng-bottom-nav__icon-svg          // SVG element
.ng-alert__status-icon            // Icon wrapper
.ng-alert__status-layer--ring-wrap // Layer wrapper
.ng-chip__icon-art                // Icon container
```

### Figma Node IDs

Add to function JSDoc + commit message:

```typescript
/**
 * SparkleIcon - AI chat indicator
 * Figma: node-id: 6:93
 * Design file: [Figma link]
 */
export function SparkleIcon(): ReactElement { ... }
```

---

## Icon QA Checklist

Before shipping or updating any icon:

- [ ] **Figma accuracy**: Layers match Figma design context exactly
- [ ] **Inset percentages**: Match Figma export (within 0.1% tolerance)
- [ ] **Overflow behavior**: clip vs visible matches design intent
- [ ] **SVG geometry**: Paths preserve original viewBox, strokeWidth, fill
- [ ] **Color usage**: `currentColor` unless explicit fixed colors required
- [ ] **Container sizing**: Matches component spec (24px, 32px, 48px)
- [ ] **Accessibility**: `aria-hidden="true"` on decorative icons
- [ ] **TypeScript**: Function returns `ReactElement`
- [ ] **Documentation**: JSDoc with Figma node ID
- [ ] **Validation**: `npm run check` passes
- [ ] **Build proof**: `npm run build-storybook` succeeds
- [ ] **Visual sanity**: Compare rendered output with Figma screenshot

---

## Icon Generation Workflow

### For AI Agents & Engineers

1. **Get Figma Node ID**
   - Open Figma design file
   - Right-click icon component → "Copy/Share link"
   - Extract node ID: `node-id=6:93` → `6:93`

2. **Fetch Design Context**
   ```bash
   # Use mcp_figma_get_design_context to retrieve:
   # - SVG path data
   # - Layer structure + inset percentages
   # - viewBox + strokeWidth
   # - overflow properties (clip vs visible)
   ```

3. **Validate Constraints**
   ```bash
   # Use mcp_figma_get_metadata to verify:
   # - Container size (24px, 32px, 48px)
   # - Layer placement constraints
   # - Stroke width requirements
   ```

4. **Create Icon Component**
   - Copy template from existing icon in same category
   - Replace SVG paths & layer insets
   - Update function name + JSDoc
   - Add to appropriate icon file (TopBarIcons, BottomNavIcons, etc.)

5. **Export & Integrate**
   - Add export to `src/components/icons/index.ts` barrel
   - Import in component: `import { MyIcon } from './icons'`

6. **Validate**
   ```bash
   npm run check
   npm run build-storybook
   # Use mcp_figma_get_screenshot to visual-sanity-check
   ```

7. **Commit**
   ```bash
   git commit -m "feat: add MyIcon to icon library
   
   - Figma node ID: 6:123
   - Extracted from: [Design file]
   - Preserved layer geometry: [description]"
   ```

---

## Deprecation & Cleanup

### Removing One-Off Icons

If a component had inline icons before library extraction:

1. **Verify migration**: Check all usages are consuming library export
2. **Remove local function**: Delete inline icon from component
3. **Verify build**: `npm run check && npm run build-storybook`
4. **Commit deprecation**:
   ```bash
   git commit -m "refactor: remove inline icon, use library export"
   ```

### Marking Icons as Deprecated

If an icon is superseded by a new design:

```typescript
/**
 * @deprecated Use `NewerIcon` instead (added v0.2.0)
 * Figma: node-id: 185:3941 (old design)
 */
export function OldIcon(): ReactElement { ... }
```

---

## Icon Sizing Guide

### Standard Sizes

| Use Case | Size | CSS Container |
|----------|------|---|
| TopBar actions | 24px | inline |
| BottomNav items | 20px | nav item |
| Alert indicators | 19.5px | status region |
| Radio buttons | 20px | radio button |
| Chip icons | varied | inline |

### Scaling Icons

```typescript
// Responsive container wrapper
function Icon32({ icon: Icon }: { icon: () => ReactElement }) {
  return (
    <div style={{ width: 32, height: 32, transform: 'scale(1.33)' }}>
      <Icon />
    </div>
  );
}
```

---

## Color Behavior

### currentColor (Default)

```typescript
// Icon inherits parent text color
<div style={{ color: 'blue' }}>
  <HomeIcon />  {/* Renders as blue */}
</div>
```

**Use when:** Dynamic color required (active/inactive states, themes)

### Fixed Colors (Rare)

```typescript
// Icon has explicit fill/stroke color (from Figma)
export function SelectedRadioIcon(): ReactElement {
  return (
    <svg /* ... */>
      <circle cx="10" cy="10" r="7" fill="#B328FF" />  {/* Fixed */}
    </svg>
  );
}
```

**Use when:** Color is part of the icon design (not changeable)

---

## Testing Icons

### Visual Regression

Icons are included in Storybook visual regression tests:

```bash
npm run storybook
# Navigate to component stories showing icons
# Visual diffs compared against baseline snapshots
```

### Component Stories

Each component with icons should have:
- Default state story
- Active/selected state story
- Disabled state story (if applicable)
- Size variations (if multiple sizes)

Example:
```typescript
// src/stories/nextgen/TopBar.stories.tsx
export const WithAllIcons = {
  args: {
    showNotification: true,
    showSparkle: true,
    /* ... */
  }
};
```

---

## Common Tasks

### Add New Icon to Existing Category

```bash
# 1. Update appropriate icon file (e.g., TopBarIcons.tsx)
# 2. Copy existing icon function as template
# 3. Replace SVG paths + layer positions
# 4. Update export in src/components/icons/index.ts
# 5. Test: npm run check && npm run build-storybook
# 6. Commit with Figma node ID
```

### Create New Icon Category

```bash
# 1. Create new file: src/components/icons/[Category]Icons.tsx
# 2. Define icon functions following layer pattern
# 3. Add export to src/components/icons/index.ts
# 4. Update components that should use them
# 5. Test + commit
```

### Update Figma Node IDs

```typescript
// Update JSDoc with correct node IDs after design review
/**
 * @description AI indicator icon
 * Figma: node-id: 6:93 (previous: 185:3949)
 */
```

### Migration Checklist (for phase 2.2+)

When expanding icon library to new components:
- [ ] Extract icons to new category file
- [ ] Update barrel export
- [ ] Refactor component to import library
- [ ] Verify component still renders
- [ ] Run npm run check + npm run build-storybook
- [ ] Create/update Storybook stories
- [ ] Commit with message: "refactor: migrate [ComponentName] icons to library"

---

## FAQ

**Q: Can I inline custom SVG in a component instead of using the library?**
A: Only with explicit justification and team approval. Default: use or create library icon.

**Q: What if Figma icon changes?**
A: Update function content + SVG paths, re-run validation, commit with "refactor: update [IconName] to match Figma design".

**Q: Can I recolor icons dynamically?**
A: Yes, if using `currentColor`. Wrap icon in colored container or apply CSS `color` property.

**Q: How do I version icon changes?**
A: Follow SemVer: breaking shape change = Major, new icon = Minor, positioning fix = Patch.

**Q: What about icon loading performance?**
A: Icons are inline SVG (no external requests). Gzipped Storybook build proves minimal overhead.

---

## Related Documentation

- [AGENTS.md](../../AGENTS.md) — Figma MCP workflow requirements
- [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) — Icon system architecture deep dive
- [AI_ENABLEMENT_CHECKLIST.md](./AI_ENABLEMENT_CHECKLIST.md) — Phase 2 icon library expansion plan

---

*Last Updated: April 2025*
*Icon Library Version: 1.0 (Pilot Phase)*
