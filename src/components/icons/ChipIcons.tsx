import type { ReactElement } from 'react';

/**
 * ChipLeftIcon - Left-side icon for Chip component
 * Displays a checkmark indicating selection or validation
 * Layered SVG with precise inset/overflow positioning
 * Figma: [node ID will be filled in from Figma]
 */
export function ChipLeftIcon(): ReactElement {
  return (
    <span className="ng-chip__icon-art" aria-hidden="true">
      <span className="ng-chip__icon-layer ng-chip__icon-layer--left-wrap">
        <span className="ng-chip__icon-overflow ng-chip__icon-overflow--left">
          <svg className="ng-chip__icon-svg" viewBox="0 0 13.75 9.58333" fill="none">
            <path
              d="M0.625 4.79167L4.79167 8.95833L13.125 0.625"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </span>
  );
}

/**
 * ChipRightIcon - Right-side icon for Chip component
 * Displays a heart shape indicating "like" or "favorite" action
 * Layered SVG with precise inset/overflow positioning
 * Figma: [node ID will be filled in from Figma]
 */
export function ChipRightIcon(): ReactElement {
  return (
    <span className="ng-chip__icon-art" aria-hidden="true">
      <span className="ng-chip__icon-layer ng-chip__icon-layer--right-wrap">
        <span className="ng-chip__icon-overflow ng-chip__icon-overflow--right">
          <svg className="ng-chip__icon-svg" viewBox="0 0 16.2578 14.5928" fill="none">
            <path
              d="M14.3858 7.77784L8.13583 13.9678L1.88583 7.77784C1.47358 7.37668 1.14887 6.89452 0.93212 6.3617C0.715375 5.82889 0.611298 5.25696 0.626445 4.68195C0.641591 4.10694 0.775633 3.54129 1.02013 3.02062C1.26462 2.49995 1.61428 2.03555 2.04707 1.65666C2.47986 1.27776 2.98642 0.99258 3.53484 0.819074C4.08326 0.645567 4.66167 0.587493 5.23364 0.648507C5.80561 0.709522 6.35875 0.888304 6.85823 1.17359C7.35771 1.45889 7.7927 1.84451 8.13583 2.30617C8.48044 1.84786 8.91594 1.46561 9.41508 1.18334C9.91422 0.90108 10.4662 0.724881 11.0366 0.665773C11.607 0.606665 12.1834 0.665921 12.7298 0.839833C13.2762 1.01374 13.7809 1.29857 14.2121 1.67648C14.6434 2.05438 14.992 2.51724 15.2362 3.03608C15.4803 3.55492 15.6148 4.11858 15.6311 4.69176C15.6474 5.26495 15.5452 5.83533 15.3309 6.36721C15.1167 6.8991 14.7949 7.38102 14.3858 7.78284"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </span>
  );
}
