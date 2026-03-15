import { useState } from "react";
import type { ButtonHTMLAttributes } from "react";

export type CheckboxProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export function Checkbox({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className = "",
  ...props
}: CheckboxProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internalChecked;

  function toggle() {
    if (disabled) {
      return;
    }

    const next = !isChecked;
    if (!isControlled) {
      setInternalChecked(next);
    }
    onCheckedChange?.(next);
  }

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={toggle}
      className={`ng-reset ng-checkbox ${isChecked ? "ng-checkbox--checked" : ""} ${className}`.trim()}
      {...props}
    >
      <span className="ng-checkbox__icon" aria-hidden="true">
        {isChecked ? (
          <svg viewBox="0 0 24 24" className="ng-checkbox__check" focusable="false">
            <path d="M6.5 12.5L10.5 16.5L17.5 8.5" />
          </svg>
        ) : null}
      </span>
    </button>
  );
}
