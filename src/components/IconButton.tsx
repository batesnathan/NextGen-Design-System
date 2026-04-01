import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonType = "default" | "filled";
type IconButtonSize = "default" | "small";
type LegacyIconButtonVariant = "default" | "surface" | "compact";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  tone?: IconButtonType;
  size?: IconButtonSize;
  variant?: LegacyIconButtonVariant;
  icon?: ReactNode;
};

function PlaceholderIcon() {
  return <span className="ng-icon-button__placeholder" aria-hidden="true" />;
}

export function IconButton({
  tone = "default",
  size = "default",
  variant,
  icon,
  className = "",
  ...props
}: IconButtonProps) {
  const resolvedType = variant === "surface" ? "filled" : tone;
  const resolvedSize = variant === "compact" ? "small" : size;

  return (
    <button
      type="button"
      className={
        `ng-reset ng-icon-button ng-icon-button--${resolvedType} ng-icon-button--${resolvedSize} ${className}`.trim()
      }
      {...props}
    >
      <span className="ng-icon-button__icon" aria-hidden="true">
        {icon ?? <PlaceholderIcon />}
      </span>
    </button>
  );
}
