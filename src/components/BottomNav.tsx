import type { HTMLAttributes } from "react";

const figmaIconBaseHomeDefault = "http://localhost:3845/assets/e67a7b74fd5df7145414a8716a4b470405811329.svg";
const figmaHomeDefaultA = "http://localhost:3845/assets/72357a0a93ddf73f88bc7a00688b426ceac3dd27.svg";
const figmaHomeDefaultB = "http://localhost:3845/assets/681360794c106f45481e6ab9e91cc1df4b821295.svg";
const figmaHomeDefaultC = "http://localhost:3845/assets/0f2981d43fc887d7f973d51588cc664f342c4e49.svg";
const figmaHomeSelectedA = "http://localhost:3845/assets/0249393b0f8514699a079f64eb4ed1fa7a5e5644.svg";
const figmaHomeSelectedB = "http://localhost:3845/assets/7f8af796ba05742b6543c9eb54d21ca40dfb8982.svg";
const figmaHomeSelectedC = "http://localhost:3845/assets/e9b61ce844497caf0fd8743a3112f4b668119dbf.svg";

const figmaIconBaseAccountsInactive = "http://localhost:3845/assets/e67a7b74fd5df7145414a8716a4b470405811329.svg";
const figmaIconBaseAccountsActive = "http://localhost:3845/assets/0369ad5ba8eb38d38bc1163a252796e06398a901.svg";
const figmaAccountsInactiveA = "http://localhost:3845/assets/61f4149e2bd1ac2d939021c1f51bc9d5f8a31f83.svg";
const figmaAccountsInactiveB = "http://localhost:3845/assets/5899c7e712844209c000d74bdabee68f6db72841.svg";
const figmaAccountsActiveA = "http://localhost:3845/assets/b12655ff51e581cbb670608c0e9bedf8032ea9ea.svg";
const figmaAccountsActiveB = "http://localhost:3845/assets/a011fb5bb421ef65de20b76a58f3328759e14f35.svg";

const figmaIconBaseMarketplaceInactive = "http://localhost:3845/assets/50a71fa678ab5e0f432bb4c4f819735716c786e9.svg";
const figmaIconBaseMarketplaceActive = "http://localhost:3845/assets/7bf80a4ad4ef0c80f18c4456737828970a9034d0.svg";

const figmaMoreInactiveA = "http://localhost:3845/assets/93cb50bd77d004b7770401f7db7d74ed4f7c06a0.svg";
const figmaMoreInactiveB = "http://localhost:3845/assets/80bd214bda6193abc6b0ab6e0bc6c47d2997d1d2.svg";
const figmaMoreInactiveC = "http://localhost:3845/assets/ee01d15db1c155a7d76ecf7975847151cff15360.svg";
const figmaMoreActiveA = "http://localhost:3845/assets/20273935ffb56431c1cfe24f3dc7e524fbaabfe1.svg";
const figmaMoreActiveB = "http://localhost:3845/assets/015d5b9609b1e89948014d4ba76f05a311d3e08c.svg";
const figmaMoreActiveC = "http://localhost:3845/assets/7e9fe8300f3fa399e6e86fccfdec779682b9ea1f.svg";

const figmaInvestInactive = "http://localhost:3845/assets/0deff5391a793fc741147ff59f9bd3f8d3799a38.svg";
const figmaInvestActive = "http://localhost:3845/assets/fd1fa5c28bd1b62904d11e5721540636988c0d07.svg";

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
  if (active) {
    return (
      <span className="ng-bottom-nav__home-selected" aria-hidden="true">
        <span className="ng-bottom-nav__home-selected-icon">
          <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-selected-a" src={figmaHomeSelectedA} alt="" />
          <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-selected-b" src={figmaHomeSelectedB} alt="" />
          <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-selected-c" src={figmaHomeSelectedC} alt="" />
        </span>
      </span>
    );
  }

  return (
    <span className="ng-bottom-nav__figma-icon" aria-hidden="true">
      <img className="ng-bottom-nav__figma-base" src={figmaIconBaseHomeDefault} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-a" src={figmaHomeDefaultA} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-b" src={figmaHomeDefaultB} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-c" src={figmaHomeDefaultC} alt="" />
    </span>
  );
}

function AccountsIcon({ active }: { active: boolean }) {
  const [a, b] = active
    ? [figmaAccountsActiveA, figmaAccountsActiveB]
    : [figmaAccountsInactiveA, figmaAccountsInactiveB];

  return (
    <span className="ng-bottom-nav__figma-icon" aria-hidden="true">
      <img className="ng-bottom-nav__figma-base" src={active ? figmaIconBaseAccountsActive : figmaIconBaseAccountsInactive} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-accounts-a" src={a} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-accounts-b" src={b} alt="" />
    </span>
  );
}

function InvestIcon({ active }: { active: boolean }) {
  return (
    <span className="ng-bottom-nav__figma-icon" aria-hidden="true">
      <img className="ng-bottom-nav__figma-base" src={active ? figmaIconBaseMarketplaceActive : figmaIconBaseMarketplaceInactive} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-invest" src={active ? figmaInvestActive : figmaInvestInactive} alt="" />
    </span>
  );
}

function MarketplaceIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="ng-bottom-nav__icon-svg" aria-hidden="true" fill="none">
      <path d="M2.5 17.5H17.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 5.83333V6.66667C2.5 7.32971 2.76339 7.96559 3.23223 8.43443C3.70107 8.90327 4.33696 9.16667 5 9.16667C5.66304 9.16667 6.29893 8.90327 6.76777 8.43443C7.23661 7.96559 7.5 7.32971 7.5 6.66667M2.5 5.83333H17.5M2.5 5.83333L4.16667 2.5H15.8333L17.5 5.83333M7.5 6.66667V5.83333M7.5 6.66667C7.5 7.32971 7.76339 7.96559 8.23223 8.43443C8.70107 8.90327 9.33696 9.16667 10 9.16667C10.663 9.16667 11.2989 8.90327 11.7678 8.43443C12.2366 7.96559 12.5 7.32971 12.5 6.66667M12.5 6.66667V5.83333M12.5 6.66667C12.5 7.32971 12.7634 7.96559 13.2322 8.43443C13.7011 8.90327 14.337 9.16667 15 9.16667C15.663 9.16667 16.2989 8.90327 16.7678 8.43443C17.2366 7.96559 17.5 7.32971 17.5 6.66667V5.83333" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.16667 17.5V9.04167" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8333 17.5V9.04167" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 17.5V14.1667C7.5 13.7246 7.6756 13.3007 7.98816 12.9882C8.30072 12.6756 8.72464 12.5 9.16667 12.5H10.8333C11.2754 12.5 11.6993 12.6756 12.0118 12.9882C12.3244 13.3007 12.5 13.7246 12.5 14.1667V17.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      {active ? <circle cx="17.6" cy="2.4" r="0.65" fill="currentColor" stroke="none" /> : null}
    </svg>
  );
}

function MoreIcon({ active }: { active: boolean }) {
  const [a, b, c] = active
    ? [figmaMoreActiveA, figmaMoreActiveB, figmaMoreActiveC]
    : [figmaMoreInactiveA, figmaMoreInactiveB, figmaMoreInactiveC];

  return (
    <span className="ng-bottom-nav__figma-icon" aria-hidden="true">
      <img className="ng-bottom-nav__figma-base" src={active ? figmaIconBaseMarketplaceActive : figmaIconBaseMarketplaceInactive} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-more-a" src={a} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-more-b" src={b} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-more-c" src={c} alt="" />
    </span>
  );
}

function NavIcon({ item, active }: { item: BottomNavItem; active: boolean }) {
  if (item === "home") {
    return <HomeIcon active={active} />;
  }

  if (item === "accounts") {
    return <AccountsIcon active={active} />;
  }

  if (item === "invest") {
    return <InvestIcon active={active} />;
  }

  if (item === "marketplace") {
    return <MarketplaceIcon active={active} />;
  }

  return <MoreIcon active={active} />;
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
