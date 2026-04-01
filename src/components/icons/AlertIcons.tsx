import type { ReactElement } from 'react';

/**
 * AlertStatusIcon - Multi-layer icon showing alert status with ring and checkmark
 * Used in Alert component to indicate status (success, warning, danger, etc.)
 * Layers: outer ring + inner checkmark
 * Figma: [node ID will be filled in from Figma]
 */
export function AlertStatusIcon(): ReactElement {
  return (
    <span className="ng-alert__status-icon" aria-hidden="true">
      <span className="ng-alert__status-layer ng-alert__status-layer--ring-wrap">
        <span className="ng-alert__status-overflow ng-alert__status-overflow--ring">
          <svg className="ng-alert__status-svg" viewBox="0 0 19.5 19.5" fill="none">
            <path
              d="M0.75 9.75C0.75 10.9319 0.982792 12.1022 1.43508 13.1942C1.88738 14.2861 2.55031 15.2782 3.38604 16.114C4.22177 16.9497 5.21392 17.6126 6.30585 18.0649C7.39778 18.5172 8.5681 18.75 9.75 18.75C10.9319 18.75 12.1022 18.5172 13.1942 18.0649C14.2861 17.6126 15.2782 16.9497 16.114 16.114C16.9497 15.2782 17.6126 14.2861 18.0649 13.1942C18.5172 12.1022 18.75 10.9319 18.75 9.75C18.75 8.5681 18.5172 7.39778 18.0649 6.30585C17.6126 5.21392 16.9497 4.22177 16.114 3.38604C15.2782 2.55031 14.2861 1.88738 13.1942 1.43508C12.1022 0.982792 10.9319 0.75 9.75 0.75C8.5681 0.75 7.39778 0.982792 6.30585 1.43508C5.21392 1.88738 4.22177 2.55031 3.38604 3.38604C2.55031 4.22177 1.88738 5.21392 1.43508 6.30585C0.982792 7.39778 0.75 8.5681 0.75 9.75Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className="ng-alert__status-layer ng-alert__status-layer--check-wrap">
        <span className="ng-alert__status-overflow ng-alert__status-overflow--check">
          <svg className="ng-alert__status-svg" viewBox="0 0 7.5 5.5" fill="none">
            <path
              d="M0.75 2.75L2.75 4.75L6.75 0.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </span>
  );
}
