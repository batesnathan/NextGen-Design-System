import type { HTMLAttributes } from "react";

const figmaKnowledgeImage = "http://localhost:3845/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
const figmaBookIcon = "http://localhost:3845/assets/e67a7b74fd5df7145414a8716a4b470405811329.svg";
const figmaReadTimeIcon = "http://localhost:3845/assets/0f914f6613b28fb47864c4e79b24715e7791a58d.svg";
const figmaMomentumIcon = "http://localhost:3845/assets/36026c9d4b9809aca00f65a34aa58098396441c9.svg";

export type KnowledgeCardProps = HTMLAttributes<HTMLElement> & {
  text?: string;
  time?: string;
  showPoints?: boolean;
  points?: number;
};

export function KnowledgeCard({
  text = "Building your savings for your family",
  time = "3 min",
  showPoints = true,
  points = 25,
  className = "",
  ...props
}: KnowledgeCardProps) {
  return (
    <article className={`ng-reset ng-knowledge-card ${className}`.trim()} {...props}>
      <div className="ng-knowledge-card__media" aria-hidden="true">
        <img src={figmaKnowledgeImage} alt="" className="ng-knowledge-card__image" />
      </div>

      <div className="ng-knowledge-card__content">
        <div className="ng-knowledge-card__top">
          <img src={figmaBookIcon} alt="" className="ng-knowledge-card__book" aria-hidden="true" />
          <h3 className="ng-knowledge-card__title">{text}</h3>
        </div>

        <div className="ng-knowledge-card__footer">
          <span className="ng-knowledge-card__time-wrap">
            <img src={figmaReadTimeIcon} alt="" className="ng-knowledge-card__time-icon" aria-hidden="true" />
            <span className="ng-knowledge-card__time">{time}</span>
          </span>

          {showPoints ? (
            <span className="ng-knowledge-card__points">
              <span className="ng-knowledge-card__points-value">{points}</span>
              <span className="ng-knowledge-card__points-icon-wrap" aria-hidden="true">
                <img src={figmaMomentumIcon} alt="" className="ng-knowledge-card__points-icon" />
              </span>
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
