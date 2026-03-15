import type { HTMLAttributes } from "react";

export type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
  value?: number;
  max?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ProgressBar({ value = 63, max = 100, className = "", ...props }: ProgressBarProps) {
  const safeMax = max <= 0 ? 100 : max;
  const safeValue = clamp(value, 0, safeMax);
  const progress = (safeValue / safeMax) * 100;

  return (
    <div
      className={`ng-reset ng-progress-bar ${className}`.trim()}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={Math.round(safeValue)}
      {...props}
    >
      <span className="ng-progress-bar__track" aria-hidden="true">
        <span className="ng-progress-bar__fill" style={{ width: `${progress}%` }} />
      </span>
    </div>
  );
}
