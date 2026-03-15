import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export const tagColors = [
  "neutral",
  "callout",
  "success",
  "warning",
  "danger",
  "turquoise",
  "pink",
  "orchid",
  "lavender",
  "blue"
] as const;

export type TagColor = (typeof tagColors)[number];
export type TagStyle = "vibrant" | "subtle";

export type TagProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    tone?: TagColor;
    appearance?: TagStyle;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  }
>;

function IconPlaceholder() {
  return <span className="ng-tag__icon-placeholder" aria-hidden="true" />;
}

export function Tag({
  tone = "neutral",
  appearance = "vibrant",
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  className = "",
  children = "Tag text",
  ...props
}: TagProps) {
  return (
    <span
      className={`ng-reset ng-tag ng-tag--${appearance} ng-tag--${tone} ${className}`.trim()}
      {...props}
    >
      {showLeftIcon ? <span className="ng-tag__icon">{leftIcon ?? <IconPlaceholder />}</span> : null}
      <span className="ng-tag__label">{children}</span>
      {showRightIcon ? <span className="ng-tag__icon">{rightIcon ?? <IconPlaceholder />}</span> : null}
    </span>
  );
}
