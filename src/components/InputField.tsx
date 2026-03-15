import type { HTMLAttributes, ReactNode } from "react";

export type InputFieldState = "default" | "active" | "error" | "error-active";

export type InputFieldProps = HTMLAttributes<HTMLDivElement> & {
  fieldText?: string;
  placeholder?: boolean;
  showLeftIcon?: boolean;
  showPrefixText?: boolean;
  prefixText?: string;
  showRightIcon?: boolean;
  showSuffixText?: boolean;
  suffixText?: string;
  state?: InputFieldState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

function GenericIconPlaceholder() {
  return <span className="ng-input-field__icon-placeholder" aria-hidden="true" />;
}

function ErrorIconPlaceholder() {
  return <span className="ng-input-field__error-placeholder" aria-hidden="true" />;
}

export function InputField({
  fieldText = "Text",
  placeholder = false,
  showLeftIcon = false,
  showPrefixText = false,
  prefixText = "$",
  showRightIcon = false,
  showSuffixText = false,
  suffixText = "miles",
  state = "default",
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: InputFieldProps) {
  const hasErrorState = state === "error" || state === "error-active";

  return (
    <div className={`ng-reset ng-input-field ng-input-field--${state} ${className}`.trim()} {...props}>
      {showLeftIcon ? <span className="ng-input-field__icon">{leftIcon ?? <GenericIconPlaceholder />}</span> : null}
      {showPrefixText ? <span className="ng-input-field__affix">{prefixText}</span> : null}

      <span className={`ng-input-field__text ${placeholder ? "ng-input-field__text--placeholder" : ""}`.trim()}>{fieldText}</span>

      {showSuffixText ? <span className="ng-input-field__affix">{suffixText}</span> : null}

      {hasErrorState ? (
        <span className="ng-input-field__icon" aria-hidden="true">
          <ErrorIconPlaceholder />
        </span>
      ) : null}

      {showRightIcon ? <span className="ng-input-field__icon">{rightIcon ?? <GenericIconPlaceholder />}</span> : null}
    </div>
  );
}
