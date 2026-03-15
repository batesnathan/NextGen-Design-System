import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`ng-reset ng-button ng-button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
