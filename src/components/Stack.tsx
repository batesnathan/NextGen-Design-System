import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

export type StackProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    gap?: string;
    direction?: CSSProperties["flexDirection"];
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
  }
>;

export function Stack({
  gap = "var(--ng-space-3)",
  direction = "column",
  align = "stretch",
  justify = "flex-start",
  style,
  children,
  ...props
}: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
