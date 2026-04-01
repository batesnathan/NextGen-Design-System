import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonType = "default" | "filled";
type IconButtonSize = "default" | "small";
type LegacyIconButtonVariant = "default" | "surface" | "compact";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  tone?: IconButtonType;
  size?: IconButtonSize;
  variant?: LegacyIconButtonVariant;
  icon?: ReactNode;
};

function CardIcon() {
  return (
    <span className="ng-icon-button__default-icon-art" aria-hidden="true">
      <span className="ng-icon-button__default-icon-layer ng-icon-button__default-icon-layer--outline-wrap">
        <span className="ng-icon-button__default-icon-overflow ng-icon-button__default-icon-overflow--outline">
          <svg className="ng-icon-button__default-icon-svg" viewBox="0 0 19.5 15.5" fill="none">
            <path
              d="M0.75 3.75C0.75 2.95435 1.06607 2.19129 1.62868 1.62868C2.19129 1.06607 2.95435 0.75 3.75 0.75H15.75C16.5456 0.75 17.3087 1.06607 17.8713 1.62868C18.4339 2.19129 18.75 2.95435 18.75 3.75V11.75C18.75 12.5456 18.4339 13.3087 17.8713 13.8713C17.3087 14.4339 16.5456 14.75 15.75 14.75H3.75C2.95435 14.75 2.19129 14.4339 1.62868 13.8713C1.06607 13.3087 0.75 12.5456 0.75 11.75V3.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className="ng-icon-button__default-icon-layer ng-icon-button__default-icon-layer--stripe-wrap">
        <span className="ng-icon-button__default-icon-overflow ng-icon-button__default-icon-overflow--stripe">
          <svg className="ng-icon-button__default-icon-svg" viewBox="0 0 19.5 1.5" fill="none">
            <path d="M0.75 0.75H18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      <span className="ng-icon-button__default-icon-layer ng-icon-button__default-icon-layer--dot-wrap">
        <span className="ng-icon-button__default-icon-overflow ng-icon-button__default-icon-overflow--dot">
          <svg className="ng-icon-button__default-icon-svg" viewBox="0 0 1.51 1.5" fill="none">
            <path d="M0.75 0.75H0.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      <span className="ng-icon-button__default-icon-layer ng-icon-button__default-icon-layer--short-wrap">
        <span className="ng-icon-button__default-icon-overflow ng-icon-button__default-icon-overflow--short">
          <svg className="ng-icon-button__default-icon-svg" viewBox="0 0 3.5 1.5" fill="none">
            <path d="M0.75 0.75H2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </span>
  );
}

export function IconButton({
  tone = "default",
  size = "default",
  variant,
  icon,
  className = "",
  ...props
}: IconButtonProps) {
  const resolvedType = variant === "surface" ? "filled" : tone;
  const resolvedSize = variant === "compact" ? "small" : size;

  return (
    <button
      type="button"
      className={
        `ng-reset ng-icon-button ng-icon-button--${resolvedType} ng-icon-button--${resolvedSize} ${className}`.trim()
      }
      {...props}
    >
      <span className="ng-icon-button__icon" aria-hidden="true">
        {icon ?? <CardIcon />}
      </span>
    </button>
  );
}
