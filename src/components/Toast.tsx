import type { HTMLAttributes, ReactNode } from "react";

type ToastTone = "inverse";

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  message?: string;
  tone?: ToastTone;
  showIcon?: boolean;
  showActions?: boolean;
  dismissable?: boolean;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  icon?: ReactNode;
};

function PlaceholderIcon() {
  return <span className="ng-toast__placeholder" aria-hidden="true" />;
}

export function Toast({
  message = "Mauris feugiat maximus auctor.",
  tone = "inverse",
  showIcon = false,
  showActions = false,
  dismissable = true,
  actionLabel = "Button text",
  onAction,
  onDismiss,
  icon,
  className = "",
  ...props
}: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`ng-reset ng-toast ng-toast--${tone} ${className}`.trim()}
      {...props}
    >
      {showIcon ? <span className="ng-toast__icon">{icon ?? <PlaceholderIcon />}</span> : null}

      <div className="ng-toast__content">
        <p className="ng-toast__text">{message}</p>
      </div>

      {showActions ? (
        <button type="button" className="ng-toast__action" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}

      {dismissable ? (
        <button type="button" className="ng-toast__dismiss" onClick={onDismiss} aria-label="Dismiss">
          <PlaceholderIcon />
        </button>
      ) : null}
    </div>
  );
}
