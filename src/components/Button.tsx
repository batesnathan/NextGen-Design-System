import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ai" | "ghost";
type ButtonSize = "default" | "large" | "small";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  }
>;

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  leftIcon,
  rightIcon,
  children,
  style,
  ...props
}: ButtonProps) {
  const resolvedVariant = variant === "ghost" ? "tertiary" : variant;

  return (
    <button
      type="button"
      className={
        `ng-reset ng-button ng-button--${resolvedVariant} ng-button--${size} ${className}`.trim()
      }
      style={{
        fontFamily: 'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        ...style,
      }}
      {...props}
    >
      {leftIcon ? <span className="ng-button__icon">{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="ng-button__icon">{rightIcon}</span> : null}
    </button>
  );
}
