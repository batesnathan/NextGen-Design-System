import type { HTMLAttributes, ReactNode } from "react";

export type InputLabelProps = HTMLAttributes<HTMLDivElement> & {
  labelText?: string;
  showAction?: boolean;
  showTooltipIcon?: boolean;
  actionText?: string;
  actionIcon?: ReactNode;
};

function ActionIconPlaceholder() {
  return <span className="ng-input-label__action-icon-placeholder" aria-hidden="true" />;
}

function TooltipIcon() {
  return (
    <svg className="ng-input-label__tooltip-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.16663 10H15.8333" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 13.3333L15 10.8333" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 6.66669L15 9.16669" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InputLabel({
  labelText = "Text",
  showAction = false,
  showTooltipIcon = false,
  actionText = "Button text",
  actionIcon,
  className = "",
  ...props
}: InputLabelProps) {
  return (
    <div className={`ng-reset ng-input-label ${className}`.trim()} {...props}>
      <div className="ng-input-label__main">
        <span className="ng-input-label__text">{labelText}</span>
        {showTooltipIcon ? (
          <span className="ng-input-label__tooltip" aria-hidden="true">
            <TooltipIcon />
          </span>
        ) : null}
      </div>

      {showAction ? (
        <button type="button" className="ng-input-label__action" aria-label={actionText}>
          <span className="ng-input-label__action-icon">{actionIcon ?? <ActionIconPlaceholder />}</span>
          <span>{actionText}</span>
        </button>
      ) : null}
    </div>
  );
}
