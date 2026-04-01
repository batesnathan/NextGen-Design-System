import type { HTMLAttributes } from "react";
import { AlertStatusIcon } from "./icons";

type AlertTone = "danger" | "callout" | "warning" | "success" | "neutral";
type AlertStyle = "subtle" | "vibrant";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  message?: string;
  tone?: AlertTone;
  styleType?: AlertStyle;
  showIcon?: boolean;
};

export function Alert({
  message = "Mauris feugiat maximus auctor.",
  tone = "danger",
  styleType = "subtle",
  showIcon = true,
  className = "",
  ...props
}: AlertProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`ng-reset ng-alert ng-alert--${tone} ng-alert--${styleType} ${className}`.trim()}
      {...props}
    >
      {showIcon ? <span className="ng-alert__icon"><AlertStatusIcon /></span> : null}
      <p className="ng-alert__text">{message}</p>
    </div>
  );
}
