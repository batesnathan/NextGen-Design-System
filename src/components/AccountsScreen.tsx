import type { HTMLAttributes } from "react";

import { Badge } from "./Badge";
import { BottomNav } from "./BottomNav";
import { Button } from "./Button";
import { Card } from "./Card";
import { ProgressBar } from "./ProgressBar";
import { TopBar } from "./TopBar";

type ActivityItem = {
  date: string;
  title: string;
  accountType: string;
  amount: string;
  positive?: boolean;
};

const activityItems: ActivityItem[] = [
  {
    date: "2/28",
    title: "Debit Card payment",
    accountType: "HSA",
    amount: "$124.22"
  },
  {
    date: "2/15",
    title: "Employer Contribution",
    accountType: "HSA",
    amount: "+$234.78",
    positive: true
  },
  {
    date: "1/15",
    title: "Employer Contribution",
    accountType: "HSA",
    amount: "+$234.78",
    positive: true
  }
];

export type AccountsScreenProps = HTMLAttributes<HTMLElement>;

export function AccountsScreen({ className = "", ...props }: AccountsScreenProps) {
  return (
    <section className={`ng-reset ng-accounts ${className}`.trim()} data-node-id="51:1584" {...props}>
      <div className="ng-accounts__phone" aria-label="Accounts preview">
        <div className="ng-accounts__status">9:41</div>

        <TopBar size="slim" showItems={false} notificationCount={2} className="ng-accounts__topbar" />

        <div className="ng-accounts__body">
          <Card className="ng-accounts__card ng-accounts__card--summary">
            <h2 className="ng-accounts__title">Health Savings Account</h2>
            <div className="ng-accounts__amount-row">
              <p className="ng-accounts__amount">$5,123.12</p>
              <span className="ng-accounts__trend" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="ng-accounts__divider" />

            <h3 className="ng-accounts__subheading">Contributions</h3>
            <ProgressBar value={58.94} max={100} className="ng-accounts__progress" />
            <div className="ng-accounts__meta-row">
              <p>
                <span>YTD:</span> $4,567.89
              </p>
              <p>
                <span>Max:</span> $7,750
              </p>
            </div>

            <Button variant="primary" className="ng-accounts__contribute">
              Contribute
            </Button>

            <div className="ng-accounts__divider" />

            <div className="ng-accounts__investing">
              <div>
                <p className="ng-accounts__subheading">HSA Investments</p>
                <p className="ng-accounts__investing-amount">$56,789.01</p>
              </div>
              <Button variant="secondary" size="small" className="ng-accounts__transfer">
                Transfer
              </Button>
            </div>
          </Card>

          <Card className="ng-accounts__card ng-accounts__card--activity">
            <h3 className="ng-accounts__activity-title">Recent Activity</h3>
            <div className="ng-accounts__divider" />

            <ul className="ng-accounts__activity-list">
              {activityItems.map((item) => (
                <li key={`${item.date}-${item.title}`} className="ng-accounts__activity-item">
                  <div className="ng-accounts__activity-left">
                    <Badge className="ng-accounts__date-badge">{item.date}</Badge>
                    <div className="ng-accounts__activity-copy">
                      <p>{item.title}</p>
                      <span>{item.accountType}</span>
                    </div>
                  </div>
                  <p className={`ng-accounts__activity-amount ${item.positive ? "ng-accounts__activity-amount--positive" : ""}`.trim()}>
                    {item.amount}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="ng-accounts__bottom-nav-wrap">
          <BottomNav activeItem="accounts" className="ng-accounts__bottom-nav" />
        </div>
      </div>
    </section>
  );
}