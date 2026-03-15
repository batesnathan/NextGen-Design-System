import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type TextButtonTone = "default" | "danger" | "subtle";
type TextButtonPadding = "default" | "none";

export type TextButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    tone?: TextButtonTone;
    padding?: TextButtonPadding;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  }
>;

export function TextButton({
  tone = "default",
  padding = "default",
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={`ng-reset ng-text-button ng-text-button--${tone} ng-text-button--padding-${padding} ${className}`.trim()}
      {...props}
    >
      {leftIcon ? <span className="ng-text-button__icon">{leftIcon}</span> : null}
      <span className="ng-text-button__label">{children}</span>
      {rightIcon ? <span className="ng-text-button__icon">{rightIcon}</span> : null}
    </button>
  );
}
