import type { HTMLAttributes } from "react";

export const bottomNavItems = ["home", "accounts", "invest", "marketplace", "more"] as const;

export type BottomNavItem = (typeof bottomNavItems)[number];

type BottomNavConfig = {
  key: BottomNavItem;
  label: string;
};

const defaultItems: BottomNavConfig[] = [
  { key: "home", label: "Home" },
  { key: "accounts", label: "Accounts" },
  { key: "invest", label: "Invest" },
  { key: "marketplace", label: "Marketplace" },
  { key: "more", label: "More" }
];

export type BottomNavProps = HTMLAttributes<HTMLElement> & {
  activeItem?: BottomNavItem;
  onItemSelect?: (item: BottomNavItem) => void;
};

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="ng-bottom-nav__icon-svg" aria-hidden="true">
      <path d="M3.5 11.5L12 4.75L20.5 11.5" />
      <path d="M6.75 10.75V19.25H17.25V10.75" />
      <path d="M10.2 19.25V14H13.8V19.25" />
      {active ? <circle cx="12" cy="3.65" r="0.65" fill="currentColor" stroke="none" /> : null}
    </svg>
  );
}

function AccountsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-bottom-nav__icon-svg" aria-hidden="true">
      <rect x="3.75" y="6.5" width="16.5" height="11.5" rx="2.25" />
      <path d="M3.75 10H20.25" />
      <path d="M7.25 14.5H11.75" />
    </svg>
  );
}

function InvestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-bottom-nav__icon-svg" aria-hidden="true">
      <path d="M4 15.25L9.25 10L13.1 13.85L19.5 7.45" />
      <path d="M15.7 7.45H19.5V11.25" />
    </svg>
  );
}

function MarketplaceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-bottom-nav__icon-svg" aria-hidden="true">
      <path d="M5 10.25H19" />
      <path d="M7.25 10.25V8.4C7.25 7.1 8.3 6.05 9.6 6.05H14.4C15.7 6.05 16.75 7.1 16.75 8.4V10.25" />
      <rect x="4.5" y="10.25" width="15" height="8.75" rx="1.9" />
      <path d="M12 13.2V15.8" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-bottom-nav__icon-svg" aria-hidden="true">
      <circle cx="6.5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="17.5" cy="12" r="1.5" />
    </svg>
  );
}

function NavIcon({ item, active }: { item: BottomNavItem; active: boolean }) {
  if (item === "home") {
    return <HomeIcon active={active} />;
  }

  if (item === "accounts") {
    return <AccountsIcon />;
  }

  if (item === "invest") {
    return <InvestIcon />;
  }

  if (item === "marketplace") {
    return <MarketplaceIcon />;
  }

  return <MoreIcon />;
}

export function BottomNav({ activeItem = "home", onItemSelect, className = "", ...props }: BottomNavProps) {
  return (
    <nav className={`ng-reset ng-bottom-nav ${className}`.trim()} aria-label="Primary" {...props}>
      {defaultItems.map((item) => {
        const isActive = item.key === activeItem;

        return (
          <button
            key={item.key}
            type="button"
            className={`ng-bottom-nav__item ${isActive ? "ng-bottom-nav__item--active" : ""}`.trim()}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onItemSelect?.(item.key)}
          >
            <span className="ng-bottom-nav__icon" aria-hidden="true">
              <NavIcon item={item.key} active={isActive} />
            </span>
            <span className="ng-bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
