import type { ButtonHTMLAttributes } from "react";

function SelectedRadioIcon() {
  return (
    <svg viewBox="0 0 20 20" className="ng-radio-button__selected" aria-hidden="true" fill="none">
      <circle cx="10" cy="10" r="9.25" stroke="#131313" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="7" fill="#B328FF" />
    </svg>
  );
}

export type RadioButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
};

export function RadioButton({
  selected,
  defaultSelected = false,
  onSelectedChange,
  disabled,
  className = "",
  ...props
}: RadioButtonProps) {
  const isSelected = selected ?? defaultSelected;

  function handleClick() {
    if (disabled) {
      return;
    }

    onSelectedChange?.(!isSelected);
  }

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      disabled={disabled}
      onClick={handleClick}
      className={`ng-reset ng-radio-button ${isSelected ? "ng-radio-button--selected" : ""} ${className}`.trim()}
      {...props}
    >
      <span className="ng-radio-button__icon" aria-hidden="true">
        {isSelected ? <SelectedRadioIcon /> : null}
      </span>
    </button>
  );
}
