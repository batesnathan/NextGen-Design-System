import type { ButtonHTMLAttributes } from "react";

type TileButtonGroupColumns = 2 | 3;

export type TileButtonGroupProps = {
  columns?: TileButtonGroupColumns;
  labels?: string[];
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

export function TileButtonGroup({
  columns = 2,
  labels = DEFAULT_LABELS,
  onTileClick,
  buttonProps,
}: TileButtonGroupProps) {
  const columnClass = columns === 3 ? "ng-tile-button-group--columns-3" : "ng-tile-button-group--columns-2";

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
          {label}
        </button>
      ))}
    </div>
  );
}
