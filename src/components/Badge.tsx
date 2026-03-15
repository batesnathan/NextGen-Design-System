import type { HTMLAttributes, PropsWithChildren } from "react";

type BadgeTone = "neutral" | "success" | "warning" | "danger";

export type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    tone?: BadgeTone;
  }
>;

export function Badge({ tone = "neutral", className = "", children, ...props }: BadgeProps) {
  return (
    <span className={`ng-reset ng-badge ng-badge--${tone} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
