import type { ReactElement } from 'react';

/**
 * SelectedRadioIcon - Radio button visual indicator when selected
 * Displays an outer ring with filled inner circle
 * Used when radio button state is selected
 * Figma: [node ID will be filled in from Figma]
 */
export function SelectedRadioIcon(): ReactElement {
  return (
    <svg viewBox="0 0 20 20" className="ng-radio-button__selected" aria-hidden="true" fill="none">
      <circle cx="10" cy="10" r="9.25" stroke="#131313" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="7" fill="#B328FF" />
    </svg>
  );
}
