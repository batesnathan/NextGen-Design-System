import type { ButtonHTMLAttributes } from "react";

const figmaSelectedRadio = "http://localhost:3845/assets/5321446777ba0f3ef4f2e0e3f10b3fcfef64279a.svg";

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
        {isSelected ? (
          <img src={figmaSelectedRadio} alt="" className="ng-radio-button__selected" />
        ) : null}
      </span>
    </button>
  );
}
