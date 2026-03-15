import type { HTMLAttributes } from "react";

import { AccountCard } from "./AccountCard";
import { BottomNav } from "./BottomNav";
import { KnowledgeCard } from "./KnowledgeCard";
import { TextButton } from "./TextButton";
import { TopBar } from "./TopBar";

type ProductCard = {
  title: string;
  subtitle: string;
  details: string;
  tone: "purple" | "slate" | "mint";
};

const products: ProductCard[] = [
  {
    title: "Lose weight",
    subtitle: "GLP-1s",
    details: "As low as $199/mo",
    tone: "purple"
  },
  {
    title: "Give your body a voice",
    subtitle: "Oura Ring",
    details: "Starting at $349",
    tone: "slate"
  },
  {
    title: "HRT for menopause",
    subtitle: "Midi Health",
    details: "As low as $59",
    tone: "mint"
  }
];

export type DashboardScreenProps = HTMLAttributes<HTMLElement>;

export function DashboardScreen({ className = "", ...props }: DashboardScreenProps) {
  return (
    <section className={`ng-reset ng-dashboard ${className}`.trim()} {...props}>
      <div className="ng-dashboard__phone" aria-label="Dashboard preview">
        <div className="ng-dashboard__status">9:41</div>

        <TopBar
          size="expanded"
          showItems={false}
          greetingName="Scott"
          notificationCount={2}
          className="ng-dashboard__topbar"
        />

        <div className="ng-dashboard__body">
          <AccountCard size="large" variant="hsa" className="ng-dashboard__account" />

          <article className="ng-dashboard__virtual-card">
            <h3 className="ng-dashboard__virtual-title">Set up your Virtual Card</h3>
            <p className="ng-dashboard__virtual-copy">Add to wallet to pay for healthcare expenses instantly.</p>
            <div className="ng-dashboard__virtual-action">
              <TextButton tone="subtle" padding="none">
                Activate now →
              </TextButton>
            </div>
            <div className="ng-dashboard__virtual-chip" aria-hidden="true" />
          </article>

          <section className="ng-dashboard__section">
            <div className="ng-dashboard__section-head">
              <div>
                <p className="ng-dashboard__section-kicker">Marketplace</p>
                <h3 className="ng-dashboard__section-title">Shop with your HSA/FSA funds</h3>
              </div>
              <button type="button" className="ng-dashboard__browse-btn">
                Browse
              </button>
            </div>

            <div className="ng-dashboard__product-rail">
              {products.map((product) => (
                <article key={product.title} className={`ng-dashboard__product ng-dashboard__product--${product.tone}`}>
                  <h4>{product.title}</h4>
                  <p>{product.subtitle}</p>
                  <p>{product.details}</p>
                </article>
              ))}
            </div>

            <p className="ng-dashboard__legal">
              Not endorsed by any employer or health plan. We may receive compensation. HealthEquity does not provide legal, tax,
              financial, or medical advice.
            </p>
          </section>

          <section className="ng-dashboard__section ng-dashboard__section--knowledge">
            <h3 className="ng-dashboard__knowledge-title">Build your knowledge</h3>
            <div className="ng-dashboard__knowledge-rail">
              <KnowledgeCard className="ng-dashboard__knowledge-card" showPoints={false} time="3 min" />
              <article className="ng-dashboard__knowledge-feature">
                <p className="ng-dashboard__knowledge-feature-title">What triple tax benefits actually means</p>
                <p className="ng-dashboard__knowledge-feature-time">2 min</p>
              </article>
              <KnowledgeCard className="ng-dashboard__knowledge-card" showPoints={false} time="3 min" />
            </div>
          </section>
        </div>

        <div className="ng-dashboard__bottom-nav-wrap">
          <BottomNav activeItem="home" className="ng-dashboard__bottom-nav" />
        </div>
      </div>
    </section>
  );
}
