import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return <input className={`ng-reset ng-input ${className}`.trim()} {...props} />;
}
