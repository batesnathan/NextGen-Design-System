import type { HTMLAttributes, ReactElement } from "react";
import { HomeIcon, AccountsIcon, InvestIcon, MarketplaceIcon, MoreIcon } from "./icons";

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

function NavIcon({ item, active }: { item: BottomNavItem; active: boolean }): ReactElement {
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
    return <MarketplaceIcon active={active} />;
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
              {isActive ? (
                <span className="ng-bottom-nav__icon-bubble" aria-hidden="true">
                  <NavIcon item={item.key} active={isActive} />
                </span>
              ) : (
                <NavIcon item={item.key} active={isActive} />
              )}
            </span>
            {!isActive ? <span className="ng-bottom-nav__label">{item.label}</span> : null}
          </button>
        );
      })}
    </nav>
  );
}
