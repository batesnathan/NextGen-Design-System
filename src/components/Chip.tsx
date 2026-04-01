import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChipLeftIcon, ChipRightIcon } from "./icons";

export type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label?: string;
  selected?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Chip({
  label = "Test",
  selected = false,
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={`ng-reset ng-chip ng-chip--${selected ? "selected" : "default"} ${className}`.trim()}
      {...props}
    >
      {showLeftIcon ? <span className="ng-chip__icon">{leftIcon ?? <ChipLeftIcon />}</span> : null}
      <span className="ng-chip__label">{label}</span>
      {showRightIcon ? <span className="ng-chip__icon">{rightIcon ?? <ChipRightIcon />}</span> : null}
    </button>
  );
}
