import type { HTMLAttributes, PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <section className={`ng-reset ng-card ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
