import type { HTMLAttributes, PropsWithChildren } from "react";

type TextVariant = "title-3" | "body-2";

export type TextProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    as?: "p" | "span" | "h1" | "h2" | "h3";
    variant?: TextVariant;
  }
>;

export function Text({ as = "p", variant = "body-2", className = "", children, ...props }: TextProps) {
  const Component = as;
  return (
    <Component className={`ng-reset ng-text--${variant} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
