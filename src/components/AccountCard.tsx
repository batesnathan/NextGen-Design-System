import type { HTMLAttributes } from "react";

const figmaRocketIcon = "http://localhost:3845/assets/3395e07a0c5ee58815b1655366ae54ef6c70797a.svg";
const figmaRocketVectorA = "http://localhost:3845/assets/f5df86ba0d8adb047e9abfe45416665c2d22e3e1.svg";
const figmaRocketVectorB = "http://localhost:3845/assets/6cd2865441dec1ad28c1bf58ffb64912020c033c.svg";
const figmaRocketVectorC = "http://localhost:3845/assets/9203761bbab3d4ac5df65a49d4604e12d764c48f.svg";

type AccountCardSize = "large" | "small";
type AccountCardVariant =
  | "hsa"
  | "lp-fsa"
  | "healthcare-fsa-use-date"
  | "healthcare-fsa"
  | "commuter-transit"
  | "commuter-parking"
  | "lifestyle"
  | "hra";

type AccountCardSpec = {
  title: string;
  badgeLabel: string;
  subtitleLeft: string;
  subtitleRight?: string;
  amountLeft: string;
  amountRight?: string;
  helperTopLeft?: string;
  helperTopRight?: string;
  helperBottomLeft?: string;
  helperBottomRight?: string;
  showTrendUp?: boolean;
  showTrendDown?: boolean;
  showRocket?: boolean;
  showRefresh?: boolean;
};

export type AccountCardProps = HTMLAttributes<HTMLElement> & {
  size?: AccountCardSize;
  variant?: AccountCardVariant;
};

const ACCOUNT_CARD_SPECS: Record<AccountCardVariant, AccountCardSpec> = {
  hsa: {
    title: "Health Savings Account",
    badgeLabel: "HSA",
    subtitleLeft: "Available to Spend",
    amountLeft: "$8,452.37",
    helperTopLeft: "Total Balance",
    helperTopRight: "Invested Balance",
    helperBottomLeft: "$1,003,217.84",
    helperBottomRight: "$1.01",
    showTrendUp: true,
    showRocket: true
  },
  "lp-fsa": {
    title: "Limited Purpose FSA 2026",
    badgeLabel: "LP FSA",
    subtitleLeft: "Current Balance",
    amountLeft: "$1,850.00",
    showRefresh: true,
    helperTopLeft: "Use from",
    helperBottomLeft: "Jan 1, 2026 - Dec 31, 2026"
  },
  "healthcare-fsa-use-date": {
    title: "Health Care FSA 2026",
    badgeLabel: "FSA",
    subtitleLeft: "Current Balance",
    amountLeft: "$1,234.56",
    helperTopLeft: "Use from",
    helperBottomLeft: "Jan 1, 2026 - Dec 31, 2026"
  },
  "healthcare-fsa": {
    title: "Health FSA 2026",
    badgeLabel: "FSA",
    subtitleLeft: "Current Balance",
    subtitleRight: "Carryover",
    amountLeft: "$1,000.00",
    amountRight: "$610.00",
    helperTopLeft: "Spend or lose",
    helperTopRight: "Claim by",
    helperBottomLeft: "$390.00",
    helperBottomRight: "Mar 31, 2027"
  },
  "commuter-transit": {
    title: "Transit",
    badgeLabel: "COMMUTER",
    subtitleLeft: "Commuter Card - Pre Tax",
    amountLeft: "$127.40",
    helperTopLeft: "Transit Orders - order by Aug 10th for Sept",
    helperBottomLeft: "Enroll by Aug 15, 2026 @09:59PM CMT"
  },
  "commuter-parking": {
    title: "Parking",
    badgeLabel: "COMMUTER",
    subtitleLeft: "Commuter Card - Pre Tax",
    subtitleRight: "Pay Me Back",
    amountLeft: "$0.00",
    amountRight: "$270.00",
    helperTopLeft: "Parking Orders - order by Aug 10th for Sept",
    helperBottomLeft: "-"
  },
  lifestyle: {
    title: "Health Care FSA 2026",
    badgeLabel: "LIFESTYLE",
    subtitleLeft: "Current Balance",
    amountLeft: "$444.78",
    helperTopLeft: "Use from",
    helperBottomLeft: "Jan 1, 2026 - Dec 31, 2026"
  },
  hra: {
    title: "Health Care RA 2026",
    badgeLabel: "HRA",
    subtitleLeft: "Current Balance",
    subtitleRight: "Carryover",
    amountLeft: "$1,000.00",
    amountRight: "$610.00",
    helperTopLeft: "Spend or lose",
    helperTopRight: "Claim by",
    helperBottomLeft: "$390.00",
    helperBottomRight: "Mar 31, 2027"
  }
};

function TrendUpIcon() {
  return <span className="ng-account-card__trend ng-account-card__trend--up" aria-hidden="true">↑</span>;
}

function TrendDownIcon() {
  return <span className="ng-account-card__trend ng-account-card__trend--down" aria-hidden="true">↓</span>;
}

function RefreshIcon() {
  return (
    <span className="ng-account-card__refresh" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12a8 8 0 0 1-13.66 5.66" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 12a8 8 0 0 1 13.66-5.66" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5.2 18.6v-3.7h3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8 5.4v3.7h-3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function RocketIcon() {
  return (
    <span className="ng-account-card__rocket" aria-hidden="true">
      <img src={figmaRocketIcon} alt="" className="ng-account-card__rocket-base" />
      <img src={figmaRocketVectorA} alt="" className="ng-account-card__rocket-vector ng-account-card__rocket-vector--a" />
      <img src={figmaRocketVectorB} alt="" className="ng-account-card__rocket-vector ng-account-card__rocket-vector--b" />
      <img src={figmaRocketVectorC} alt="" className="ng-account-card__rocket-vector ng-account-card__rocket-vector--c" />
    </span>
  );
}

function AccountTypeBadge({ label }: { label: string }) {
  return <span className="ng-account-card__badge">{label}</span>;
}

export function AccountCard({ size = "large", variant = "hsa", className = "", ...props }: AccountCardProps) {
  const spec = ACCOUNT_CARD_SPECS[variant];

  return (
    <article className={`ng-reset ng-account-card ng-account-card--${size} ${className}`.trim()} {...props}>
      <header className="ng-account-card__header">
        <p className="ng-account-card__title">{spec.title}</p>
        <AccountTypeBadge label={spec.badgeLabel} />
      </header>

      <section className="ng-account-card__section ng-account-card__section--summary">
        <div className="ng-account-card__row ng-account-card__row--meta">
          <span className="ng-account-card__meta">{spec.subtitleLeft}</span>
          {spec.subtitleRight ? <span className="ng-account-card__meta">{spec.subtitleRight}</span> : null}
        </div>

        <div className="ng-account-card__row ng-account-card__row--amounts">
          <span className="ng-account-card__amount">{spec.amountLeft}</span>
          {spec.amountRight ? <span className="ng-account-card__amount ng-account-card__amount--secondary">{spec.amountRight}</span> : null}
          {spec.showRefresh ? <RefreshIcon /> : null}
          {spec.showRocket ? <RocketIcon /> : null}
        </div>
      </section>

      <div className="ng-account-card__divider" />

      <section className="ng-account-card__section ng-account-card__section--details">
        <div className="ng-account-card__row ng-account-card__row--meta">
          {spec.helperTopLeft ? <span className="ng-account-card__meta">{spec.helperTopLeft}</span> : <span />}
          {spec.helperTopRight ? <span className="ng-account-card__meta">{spec.helperTopRight}</span> : null}
        </div>
        <div className="ng-account-card__row ng-account-card__row--foot">
          {spec.helperBottomLeft ? (
            <span className="ng-account-card__foot-value">{spec.helperBottomLeft}</span>
          ) : (
            <span />
          )}
          {spec.helperBottomRight ? (
            <span className="ng-account-card__foot-value ng-account-card__foot-value--right ng-account-card__foot-value--with-icon">
              {spec.helperBottomRight}
              {spec.showTrendUp ? <TrendUpIcon /> : null}
              {spec.showTrendDown ? <TrendDownIcon /> : null}
            </span>
          ) : null}
        </div>
      </section>
    </article>
  );
}
