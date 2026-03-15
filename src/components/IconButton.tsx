import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonVariant = "default" | "surface" | "compact";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  variant?: IconButtonVariant;
  icon?: ReactNode;
};

function PlaceholderIcon() {
  return <span className="ng-icon-button__placeholder" aria-hidden="true" />;
}

export function IconButton({ variant = "default", icon, className = "", ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`ng-reset ng-icon-button ng-icon-button--${variant} ${className}`.trim()}
      {...props}
    >
      <span className="ng-icon-button__icon" aria-hidden="true">
        {icon ?? <PlaceholderIcon />}
      </span>
    </button>
  );
}
