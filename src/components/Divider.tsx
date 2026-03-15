import type { CSSProperties, HTMLAttributes } from "react";

export type DividerDirection = "horizontal" | "vertical";

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
  direction?: DividerDirection;
  length?: number | string;
};

function toCssLength(value: number | string | undefined, fallback: string) {
  if (value === undefined) {
    return fallback;
  }

  return typeof value === "number" ? `${value}px` : value;
}

export function Divider({ direction = "vertical", length, className = "", ...props }: DividerProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={`ng-reset ng-divider ng-divider--${direction} ${className}`.trim()}
      style={
        {
          "--ng-divider-length": toCssLength(length, isHorizontal ? "320px" : "120px")
        } as CSSProperties
      }
      role="separator"
      aria-orientation={isHorizontal ? "horizontal" : "vertical"}
      {...props}
    >
      <span className="ng-divider__line" aria-hidden="true" />
    </div>
  );
}
