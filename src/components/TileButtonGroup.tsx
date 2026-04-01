import type { ButtonHTMLAttributes, ReactNode } from "react";

type TileButtonGroupColumns = 2 | 3;

export type TileButtonGroupProps = {
  columns?: TileButtonGroupColumns;
  labels?: string[];
  icon?: ReactNode;
  onTileClick?: (label: string, index: number) => void;
  buttonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children">;
};

const DEFAULT_LABELS = [
  "Button text",
  "Button text",
  "Button text",
  "Button text",
  "Button text",
  "Button text",
];

function TileLearnIcon() {
  return (
    <span className="ng-tile-button-group__icon-art" aria-hidden="true">
      <svg className="ng-tile-button-group__icon-layer ng-tile-button-group__icon-layer--top" viewBox="0 0 21.5 11.5" fill="none">
        <path
          d="M20.75 4.75L10.75 0.75L0.75 4.75L10.75 8.75L20.75 4.75ZM20.75 4.75V10.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="ng-tile-button-group__icon-layer ng-tile-button-group__icon-layer--bottom" viewBox="0 0 13.5 9.9" fill="none">
        <path
          d="M0.75 0.75V6.15C0.75 6.94565 1.38214 7.70871 2.50736 8.27132C3.63258 8.83393 5.1587 9.15 6.75 9.15C8.3413 9.15 9.86742 8.83393 10.9926 8.27132C12.1179 7.70871 12.75 6.94565 12.75 6.15V0.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function TileButtonGroup({
  columns = 2,
  labels = DEFAULT_LABELS,
  icon,
  onTileClick,
  buttonProps,
}: TileButtonGroupProps) {
  const columnClass = columns === 3 ? "ng-tile-button-group--columns-3" : "ng-tile-button-group--columns-2";
  const tileIcon = icon ?? <TileLearnIcon />;

  return (
    <div className={`ng-tile-button-group ${columnClass}`}>
      {labels.slice(0, 6).map((label, index) => (
        <button
          key={`${label}-${index}`}
          type="button"
          className="ng-reset ng-tile-button-group__tile"
          onClick={() => onTileClick?.(label, index)}
          {...buttonProps}
        >
          <span className="ng-tile-button-group__layer">
            <span className="ng-tile-button-group__icon" aria-hidden="true">
              {tileIcon}
            </span>
            <span className="ng-tile-button-group__label">{label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
