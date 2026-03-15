import type { ButtonHTMLAttributes } from "react";

export type MiniTabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  label?: string;
};

export function MiniTab({ selected = false, label = "Text", className = "", ...props }: MiniTabProps) {
  return (
    <button
      type="button"
      className={`ng-reset ng-mini-tab ${selected ? "ng-mini-tab--selected" : "ng-mini-tab--default"} ${className}`.trim()}
      aria-pressed={selected}
      {...props}
    >
      <span className="ng-mini-tab__label">{label}</span>
    </button>
  );
}
