import type { HTMLAttributes } from "react";

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
  showRocket?: boolean;
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
  return <span className="ng-account-card__trend ng-account-card__trend--up" aria-hidden="true" />;
}

function RocketIcon() {
  return <span className="ng-account-card__rocket" aria-hidden="true" />;
}

export function AccountCard({ size = "large", variant = "hsa", className = "", ...props }: AccountCardProps) {
  const spec = ACCOUNT_CARD_SPECS[variant];

  return (
    <article className={`ng-reset ng-account-card ng-account-card--${size} ${className}`.trim()} {...props}>
      <header className="ng-account-card__header">
        <p className="ng-account-card__title">{spec.title}</p>
        <span className="ng-account-card__badge">{spec.badgeLabel}</span>
      </header>

      <section className="ng-account-card__section ng-account-card__section--summary">
        <div className="ng-account-card__row ng-account-card__row--meta">
          <span className="ng-account-card__meta">{spec.subtitleLeft}</span>
          {spec.subtitleRight ? <span className="ng-account-card__meta">{spec.subtitleRight}</span> : null}
        </div>

        <div className="ng-account-card__row ng-account-card__row--amounts">
          <span className="ng-account-card__amount">{spec.amountLeft}</span>
          {spec.amountRight ? <span className="ng-account-card__amount ng-account-card__amount--secondary">{spec.amountRight}</span> : null}
          {spec.showTrendUp ? <TrendUpIcon /> : null}
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
            <span className="ng-account-card__foot-value ng-account-card__foot-value--right">
              {spec.helperBottomRight}
            </span>
          ) : null}
        </div>
      </section>
    </article>
  );
}
