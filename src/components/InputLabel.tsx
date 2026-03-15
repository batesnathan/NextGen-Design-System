import type { HTMLAttributes, ReactNode } from "react";

const figmaTooltipIcon = "http://localhost:3845/assets/50a71fa678ab5e0f432bb4c4f819735716c786e9.svg";

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
            <img src={figmaTooltipIcon} alt="" className="ng-input-label__tooltip-icon" />
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
