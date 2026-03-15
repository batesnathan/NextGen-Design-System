import type { HTMLAttributes, ReactNode } from "react";

export type SupportingTextProps = HTMLAttributes<HTMLDivElement> & {
  text?: string;
  showIcon?: boolean;
  icon?: ReactNode;
};

function SupportingIconPlaceholder() {
  return <span className="ng-supporting-text__icon-placeholder" aria-hidden="true" />;
}

export function SupportingText({
  text = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  showIcon = false,
  icon,
  className = "",
  ...props
}: SupportingTextProps) {
  return (
    <div className={`ng-reset ng-supporting-text ${className}`.trim()} {...props}>
      {showIcon ? <span className="ng-supporting-text__icon">{icon ?? <SupportingIconPlaceholder />}</span> : null}
      <p className="ng-supporting-text__content">{text}</p>
    </div>
  );
}
