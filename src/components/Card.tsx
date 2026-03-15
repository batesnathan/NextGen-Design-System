import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

type CardSurface = "default" | "secondary" | "tertiary" | "outline";
type CardLayout = "content" | "slot";

export type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    surface?: CardSurface;
    layout?: CardLayout;
    selected?: boolean;
    width?: number;
    slotHeight?: number;
  }
>;

export function Card({
  className = "",
  children,
  surface = "default",
  layout = "content",
  selected = false,
  width = 361,
  slotHeight = 200,
  style,
  ...props
}: CardProps) {
  const cardStyle: CSSProperties = {
    ...(style ?? {}),
    ...(layout === "slot"
      ? {
          ["--ng-card-width" as string]: `${width}px`,
          ["--ng-card-slot-height" as string]: `${slotHeight}px`
        }
      : {})
  };

  return (
    <section
      className={
        `ng-reset ng-card ng-card--layout-${layout} ng-card--surface-${surface} ${
          selected ? "ng-card--selected" : ""
        } ${className}`.trim()
      }
      style={cardStyle}
      {...props}
    >
      {layout === "slot" ? <div className="ng-card__slot">{children ?? null}</div> : children}
    </section>
  );
}
