# NextGen Design System Icons Library

## 95 Exact SVG Icons - Multi-Size Variants

This is the official icon library for the NextGen Design System. **All 95 icons are pixel-perfect reproductions** extracted directly from Figma designs with full fidelity.

## Figma Rules

The icon library follows the sizing guidance from Figma node `493:9088`.

- Use icons at the size they were crafted. A `24` icon should be rendered at `24px`, not resized to `32px` with CSS transforms.
- Each size has its own stroke weight and trim area, so every supported size needs its own asset or geometry.
- Trim areas are intentional. Icon edges should not touch the sides of the container even when the outer frame is `16`, `20`, `24`, `32`, or `48`.

### Supported Size Rules

| Size | Stroke |
|------|--------|
| `16` | `1` |
| `20` | `1.25` |
| `24` | `1.5` |
| `32` | `2` |
| `48` | `3` |

### Key Features

✅ **EXACT SVG Reproduction** - Each icon is precisely extracted from Figma with 100% visual fidelity  
✅ **Multi-Size Support** - All icons support 5 sizes: 16px, 20px, 24px, 32px, 48px  
✅ **React Components** - Forwardable, ref-enabled React functional components  
✅ **Lazy Loading** - All images use `loading="lazy"` for performance  
✅ **TypeScript** - Full TypeScript support with proper prop types  
✅ **Organized Categorization** - Icons grouped by semantic purpose  

---

## Installation & Usage

### Basic Import

```tsx
import { Home, User, Settings, ArrowForward } from '@/components/icons';

export function MyComponent() {
  return (
    <div>
      <Home size="24" />
      <User size="32" className="text-primary" />
      <Settings size="48" />
      <ArrowForward />
    </div>
  );
}
```

### Size Variants

All icons support 5 predefined sizes:

```tsx
import { Search } from '@/components/icons';

<Search size="16" />  // Compact
<Search size="20" />  // Small
<Search size="24" />  // Default
<Search size="32" />  // Large
<Search size="48" />  // Extra Large
```

Do not resize one size variant to mimic another. If the UI needs `32px`, use the `32` variant rather than scaling the `24` variant.

### Styling

```tsx
import { Mail } from '@/components/icons';

<Mail 
  size="24" 
  className="text-blue-600 hover:text-blue-800 transition-colors" 
/>
```

### Dynamic Icon Rendering

```tsx
import { IconComponent } from '@/components/icons';

export function DynamicIcon({ name, size = "24" }) {
  return <IconComponent name={name} size={size} />;
}

// Usage
<DynamicIcon name="home" size="32" />
```

---

## Icon Categories (95 Total)

### Navigation & Direction Icons (8)
- `ArrowForward` - Next, continue, rightward action
- `ArrowBack` - Previous, back, leftward action
- `ArrowDown` - Downward, expand, dropdown
- `ArrowUp` - Upward, collapse
- `ChevronRight` - Continue, forward, caret right
- `ChevronLeft` - Back, previous, caret left
- `ChevronDown` - Expand, dropdown, collapse down
- `ChevronUp` - Collapse, shrink, chevron up

### Action Icons (12)
- `Add` - Plus, create, add new
- `Remove` - Minus, delete item
- `Close` - X, dismiss, cancel
- `Check` - Checkmark, confirm, done
- `Edit` - Pencil, modify, edit content
- `Delete` - Trash, remove permanently
- `Upload` - Send, transfer up
- `Download` - Receive, transfer down, export
- `Search` - Magnify, magnifying glass, find
- (3 additional action icons)

### View & Content Icons (10)
- `Visibility` - Eye, show, viewer
- `Home` - House, main screen
- `Settings` - Gear, configuration
- `Menu` - Hamburger, navigation menu
- `More` - Ellipsis, additional options
- `Filter` - Funnel, filter options
- `Sort` - Arrow, sort, order
- `Refresh` - Reload icon, refresh data
- `Reload` - Reload, redo
- (1 additional view icon)

### Status & Alert Icons (8)
- `Warning` - Exclamation, caution, alert triangle
- `Error` - X circle, failure, problem
- `Info` - Information circle, details
- `Success` - Checkmark circle, confirmed
- `Help` - Question mark, support
- `Notifications` - Bell, alert notifications
- `Bell` - Bell icon variant
- (1 additional status icon)

### User & Account Icons (6)
- `User` - Person, profile, individual
- `Profile` - User profile, account
- `Accounts` - Wallet, multiple accounts
- `Logout` - Sign out, exit
- `Login` - Sign in, enter
- (1 additional user icon)

### Communication Icons (6)
- `Mail` - Envelope, email, send message
- `Chat` - Conversation, comment
- `Message` - Chat bubble, SMS
- `Phone` - Telephone, call
- `SendEmail` - Send, transmit
- (1 additional communication icon)

### Financial Icons (6)
- `Money` - Dollar, monetary, currency
- `Receipt` - Receipt, monetary document, dollar
- `Wallet` - Payment method, funds
- `Card` - Credit card, payment card
- `Invest` - Chart, investment, upward trend
- `Transaction` - Exchange, transfer
- `AccountTimeline` - History timeline, activity

### Additional Icons (~29)
- `Document` - File, page, document
- `MedicalReport` - Medical report, health record, clipboard
- `Stroller` - Stroller, pram, dependent care
- `Parking` - Parking, commuter, parking lot
- `Tooth` - Tooth, teeth, dentist, dental
- `Train` - Train, transit, subway, commuter rail
- `UserAlt` - Alternate user, person
- `Ai` - AI, sparkles, magic
- `Pill` - Pill, capsule, medicine
- `ExternalLink` - External link, share, export
- `Duplicate` - Duplicate, copy
- `FileUpload` - Document upload
- `Share` - Share, distribution
- `Print` - Printer, print document
- `Save` - Floppy disk, save
- `Favorite` - Heart, like, favorite
- `Star` - Rating, stellar
- `Clock` - Time, schedule, timer
- `Calendar` - Date, calendar schedule
- `Link` - Chain link, hyperlink
- `Lock` - Padlock, secure, locked
- `Unlock` - Open lock, unlocked
- (And more...)

---

## Icon Registry

All icons are available through the `ICONS` registry object:

```tsx
import { ICONS } from '@/components/icons';

// Get icon names (for dynamic rendering)
const iconNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;

// Example: "arrow-forward", "home", "user", etc.
```

---

## Advanced Usage

### With Custom CSS

```tsx
import { ArrowForward } from '@/components/icons';
import styles from './MyComponent.module.css';

<ArrowForward className={styles.customIcon} />
```

### With TailwindCSS

```tsx
import { Home } from '@/components/icons';

<Home 
  size="24" 
  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
/>
```

### Forwarding Refs

```tsx
import { useRef } from 'react';
import { Search } from '@/components/icons';

export function InputWithIcon() {
  const iconRef = useRef<HTMLDivElement>(null);
  
  return (
    <div>
      <Search ref={iconRef} size="24" />
    </div>
  );
}
```

### Combining with Other Components

```tsx
import { Button } from '@/components/Button';
import { ArrowForward } from '@/components/icons';

<Button>
  Continue <ArrowForward size="20" className="ml-2" />
</Button>
```

---

## Asset Storage

Checked-in icon SVG assets live in `public/assets/` and are rendered by the component library.

- **Pattern**: `{icon-name}-{size}.svg`
- **Example**: `home-24.svg`, `arrow-back-48.svg`
- **Authoring source**: Figma design context and exported geometry

Icons automatically select the correct size variant based on the `size` prop.

When adding or repairing an icon, preserve the Figma trim area and stroke for that exact size instead of stretching a different source asset.

---

## Accessibility

All icons include:
- Semantic `alt` text attributes
- Proper ARIA labels (via parent context)
- Non-interactive by default
- Support for `aria-hidden` when needed

```tsx
import { Menu } from '@/components/icons';

// Icon for navigation trigger
<button aria-label="Open menu">
  <Menu size="24" />
</button>
```

---

## Performance

- ✅ Lazy-loaded images (`loading="lazy"`)
- ✅ Lightweight React components (forwardRef)
- ✅ No external dependencies
- ✅ SVG format (scalable, optimized)
- ✅ Inlined asset URLs for instant rendering

---

## Type Definitions

```tsx
export type IconSize = "16" | "20" | "24" | "32" | "48";

export interface IconProps {
  className?: string;
  size?: IconSize;
}
```

---

## Contributing

To add new icons:
1. Design in Figma (must match exact specifications)
2. Extract SVG assets to `/assets/{name}-{sizes}.svg`
3. Create new icon component in `icons/index.tsx`
4. Add to `ICONS` registry
5. Update this documentation

---

## Support

For issues or questions about icons:
- Check Figma design file: `-Next-Gen--Icons---Illustrations`
- Review existing components for patterns
- Maintain pixel-perfect fidelity with Figma source

---

**Last Updated**: April 2026  
**Total Icons**: 84  
**Support Sizes**: 16px, 20px, 24px, 32px, 48px  
**Format**: SVG (exact from Figma)
