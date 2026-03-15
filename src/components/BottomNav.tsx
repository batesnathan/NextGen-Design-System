import type { HTMLAttributes } from "react";

const figmaIconBaseHomeInactive = "http://localhost:3845/assets/32b4f05fd514dc5d8b4453590e680e45f9f94a2e.svg";
const figmaIconBaseHomeActive = "http://localhost:3845/assets/3314923fcc531300de999ae9d550bb9fe51ad1ef.svg";
const figmaHomeInactiveA = "http://localhost:3845/assets/c63f630d67ed830f0bdc52d96601533733f51c66.svg";
const figmaHomeInactiveB = "http://localhost:3845/assets/cafeee413227f9308ec8b66819f439e76cdbc133.svg";
const figmaHomeInactiveC = "http://localhost:3845/assets/51a641c9e6e00d78d79f4f2f3b098bdedfe02f4a.svg";
const figmaHomeActiveA = "http://localhost:3845/assets/03d4c8ffc926b37419354523b3bfede6af3f01b1.svg";
const figmaHomeActiveB = "http://localhost:3845/assets/ec40956f13845b0b0e11166a6251bcd2af96e3aa.svg";
const figmaHomeActiveC = "http://localhost:3845/assets/543713991bffc019748ba766512b585234fc4636.svg";

const figmaIconBaseAccountsInactive = "http://localhost:3845/assets/e67a7b74fd5df7145414a8716a4b470405811329.svg";
const figmaIconBaseAccountsActive = "http://localhost:3845/assets/0369ad5ba8eb38d38bc1163a252796e06398a901.svg";
const figmaAccountsInactiveA = "http://localhost:3845/assets/61f4149e2bd1ac2d939021c1f51bc9d5f8a31f83.svg";
const figmaAccountsInactiveB = "http://localhost:3845/assets/5899c7e712844209c000d74bdabee68f6db72841.svg";
const figmaAccountsActiveA = "http://localhost:3845/assets/b12655ff51e581cbb670608c0e9bedf8032ea9ea.svg";
const figmaAccountsActiveB = "http://localhost:3845/assets/a011fb5bb421ef65de20b76a58f3328759e14f35.svg";

const figmaIconBaseMarketplaceInactive = "http://localhost:3845/assets/50a71fa678ab5e0f432bb4c4f819735716c786e9.svg";
const figmaIconBaseMarketplaceActive = "http://localhost:3845/assets/7bf80a4ad4ef0c80f18c4456737828970a9034d0.svg";
const figmaMarketplaceInactiveA = "http://localhost:3845/assets/8137061773f21e880c52f5b2026643d5e65eef14.svg";
const figmaMarketplaceInactiveB = "http://localhost:3845/assets/263902020ccb1542e967640ed83b57848a2a6dad.svg";
const figmaMarketplaceInactiveC = "http://localhost:3845/assets/3247d0e827230b260d423874fea46c494458b3cf.svg";
const figmaMarketplaceInactiveD = "http://localhost:3845/assets/a4a3e45fd1a328ec93a188afec8c2a88f1b989e2.svg";
const figmaMarketplaceActiveA = "http://localhost:3845/assets/80d51ead9fcffbe7792129e84e4616494e0f1867.svg";
const figmaMarketplaceActiveB = "http://localhost:3845/assets/9acdb9585e9ebc0f253182c6c8ea7dc548330c45.svg";
const figmaMarketplaceActiveC = "http://localhost:3845/assets/c0ab26aa64b5f963ed3ce44ffdc4090240272e1d.svg";
const figmaMarketplaceActiveD = "http://localhost:3845/assets/136ce53e09a18cefe5a80035f8eb08b4d804d5a1.svg";

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
  const [a, b, c] = active
    ? [figmaHomeActiveA, figmaHomeActiveB, figmaHomeActiveC]
    : [figmaHomeInactiveA, figmaHomeInactiveB, figmaHomeInactiveC];

  return (
    <span className="ng-bottom-nav__figma-icon" aria-hidden="true">
      <img className="ng-bottom-nav__figma-base" src={active ? figmaIconBaseHomeActive : figmaIconBaseHomeInactive} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-a" src={a} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-b" src={b} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-home-c" src={c} alt="" />
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
  const [a, b, c, d] = active
    ? [figmaMarketplaceActiveA, figmaMarketplaceActiveB, figmaMarketplaceActiveC, figmaMarketplaceActiveD]
    : [figmaMarketplaceInactiveA, figmaMarketplaceInactiveB, figmaMarketplaceInactiveC, figmaMarketplaceInactiveD];

  return (
    <span className="ng-bottom-nav__figma-icon" aria-hidden="true">
      <img className="ng-bottom-nav__figma-base" src={active ? figmaIconBaseMarketplaceActive : figmaIconBaseMarketplaceInactive} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-market-a" src={a} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-market-b" src={b} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-market-c" src={c} alt="" />
      <img className="ng-bottom-nav__figma-layer ng-bottom-nav__figma-market-d" src={d} alt="" />
    </span>
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
