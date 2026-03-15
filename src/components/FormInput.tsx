import type { HTMLAttributes } from "react";

import { InputField, type InputFieldProps } from "./InputField";
import { InputLabel, type InputLabelProps } from "./InputLabel";
import { SupportingText, type SupportingTextProps } from "./SupportingText";

export type FormInputProps = HTMLAttributes<HTMLDivElement> & {
  showLabel?: boolean;
  showSupportingContent?: boolean;
  labelProps?: Omit<InputLabelProps, "className">;
  fieldProps?: Omit<InputFieldProps, "className">;
  supportingTextProps?: Omit<SupportingTextProps, "className">;
};

export function FormInput({
  showLabel = true,
  showSupportingContent = true,
  labelProps,
  fieldProps,
  supportingTextProps,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className={`ng-reset ng-form-input ${className}`.trim()} {...props}>
      {showLabel ? <InputLabel className="ng-form-input__label" {...labelProps} /> : null}
      <InputField className="ng-form-input__field" {...fieldProps} />
      {showSupportingContent ? (
        <div className="ng-form-input__supporting">
          <SupportingText className="ng-form-input__supporting-text" {...supportingTextProps} />
        </div>
      ) : null}
    </div>
  );
}
