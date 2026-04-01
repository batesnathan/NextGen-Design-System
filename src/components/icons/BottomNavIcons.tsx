import type { ReactElement } from 'react';

/**
 * HomeIcon - Navigation icon for home section
 * Shows a house outline with optional notification dot when active
 * Figma: [node ID will be filled in from Figma]
 */
export function HomeIcon({ active }: { active: boolean }): ReactElement {
  return (
    <svg viewBox="0 0 20 20" className="ng-bottom-nav__icon-svg" aria-hidden="true" fill="none">
      <path d="M4.16667 10H2.5L10 2.5L17.5 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.16667 10V15.8333C4.16667 16.2754 4.34226 16.6993 4.65482 17.0118C4.96738 17.3244 5.39131 17.5 5.83333 17.5H14.1667C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 17.5V12.5C7.5 12.058 7.6756 11.634 7.98816 11.3215C8.30072 11.0089 8.72464 10.8333 9.16667 10.8333H10.8333C11.2754 10.8333 11.6993 11.0089 12.0118 11.3215C12.3244 11.634 12.5 12.058 12.5 12.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {active ? <circle cx="17.4" cy="2.6" r="0.65" fill="currentColor" stroke="none" /> : null}
    </svg>
  );
}

/**
 * AccountsIcon - Navigation icon for accounts section
 * Shows a credit card with lock keyhole
 * Figma: [node ID will be filled in from Figma]
 */
export function AccountsIcon(): ReactElement {
  return (
    <svg viewBox="0 0 20 20" className="ng-bottom-nav__icon-svg" aria-hidden="true" fill="none">
      <path d="M14.1667 6.66667V4.16667C14.1667 3.94565 14.0789 3.73369 13.9226 3.57741C13.7663 3.42113 13.5543 3.33333 13.3333 3.33333H5C4.55798 3.33333 4.13405 3.50893 3.82149 3.82149C3.50893 4.13405 3.33334 4.55797 3.33334 5M3.33334 5C3.33334 5.44203 3.50893 5.86595 3.82149 6.17851C4.13405 6.49107 4.55798 6.66667 5 6.66667H15C15.221 6.66667 15.433 6.75446 15.5893 6.91074C15.7455 7.06702 15.8333 7.27898 15.8333 7.5V10M3.33334 5V15C3.33334 15.442 3.50893 15.8659 3.82149 16.1785C4.13405 16.4911 4.55798 16.6667 5 16.6667H15C15.221 16.6667 15.433 16.5789 15.5893 16.4226C15.7455 16.2663 15.8333 16.0543 15.8333 15.8333V13.3333" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 10V13.3333H13.3333C12.8913 13.3333 12.4674 13.1577 12.1548 12.8452C11.8423 12.5326 11.6667 12.1087 11.6667 11.6667C11.6667 11.2246 11.8423 10.8007 12.1548 10.4882C12.4674 10.1756 12.8913 10 13.3333 10H16.6667Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * InvestIcon - Navigation icon for investing section
 * Shows an upward trending line chart
 * Figma: [node ID will be filled in from Figma]
 */
export function InvestIcon(): ReactElement {
  return (
    <svg viewBox="0 0 20 20" className="ng-bottom-nav__icon-svg" aria-hidden="true" fill="none">
      <path d="M0.990166 13.5L5.83995 8.65007L10.22 13.0302L17.5202 5.73001M14 5H18.2502V9.38008" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * MarketplaceIcon - Navigation icon for marketplace section
 * Shows a shopping storefront with window displays
 * Includes notification dot when active
 * Figma: [node ID will be filled in from Figma]
 */
export function MarketplaceIcon({ active }: { active: boolean }): ReactElement {
  return (
    <svg viewBox="0 0 20 20" className="ng-bottom-nav__icon-svg" aria-hidden="true" fill="none">
      <path d="M2.5 17.5H17.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 5.83333V6.66667C2.5 7.32971 2.76339 7.96559 3.23223 8.43443C3.70107 8.90327 4.33696 9.16667 5 9.16667C5.66304 9.16667 6.29893 8.90327 6.76777 8.43443C7.23661 7.96559 7.5 7.32971 7.5 6.66667M2.5 5.83333H17.5M2.5 5.83333L4.16667 2.5H15.8333L17.5 5.83333M7.5 6.66667V5.83333M7.5 6.66667C7.5 7.32971 7.76339 7.96559 8.23223 8.43443C8.70107 8.90327 9.33696 9.16667 10 9.16667C10.663 9.16667 11.2989 8.90327 11.7678 8.43443C12.2366 7.96559 12.5 7.32971 12.5 6.66667M12.5 6.66667V5.83333M12.5 6.66667C12.5 7.32971 12.7634 7.96559 13.2322 8.43443C13.7011 8.90327 14.337 9.16667 15 9.16667C15.663 9.16667 16.2989 8.90327 16.7678 8.43443C17.2366 7.96559 17.5 7.32971 17.5 6.66667V5.83333" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.16667 17.5V9.04167" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8333 17.5V9.04167" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 17.5V14.1667C7.5 13.7246 7.6756 13.3007 7.98816 12.9882C8.30072 12.6756 8.72464 12.5 9.16667 12.5H10.8333C11.2754 12.5 11.6993 12.6756 12.0118 12.9882C12.3244 13.3007 12.5 13.7246 12.5 14.1667V17.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      {active ? <circle cx="17.6" cy="2.4" r="0.65" fill="currentColor" stroke="none" /> : null}
    </svg>
  );
}

/**
 * MoreIcon - Navigation icon for "more" section showing three dots menu
 * Displays three evenly-spaced filled circles representing menu options
 * Figma: [node ID will be filled in from Figma]
 */
export function MoreIcon(): ReactElement {
  return (
    <svg viewBox="0 0 20 20" className="ng-bottom-nav__icon-svg" aria-hidden="true" fill="none">
      <path d="M3.33334 10C3.33334 10.221 3.42114 10.433 3.57742 10.5893C3.7337 10.7455 3.94566 10.8333 4.16668 10.8333C4.38769 10.8333 4.59965 10.7455 4.75593 10.5893C4.91221 10.433 5.00001 10.221 5.00001 10C5.00001 9.77899 4.91221 9.56702 4.75593 9.41074C4.59965 9.25446 4.38769 9.16667 4.16668 9.16667C3.94566 9.16667 3.7337 9.25446 3.57742 9.41074C3.42114 9.56702 3.33334 9.77899 3.33334 10Z" fill="currentColor" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.16666 10C9.16666 10.221 9.25445 10.433 9.41073 10.5893C9.56701 10.7455 9.77898 10.8333 9.99999 10.8333C10.221 10.8333 10.433 10.7455 10.5892 10.5893C10.7455 10.433 10.8333 10.221 10.8333 10C10.8333 9.77899 10.7455 9.56702 10.5892 9.41074C10.433 9.25446 10.221 9.16667 9.99999 9.16667C9.77898 9.16667 9.56701 9.25446 9.41073 9.41074C9.25445 9.56702 9.16666 9.77899 9.16666 10Z" fill="currentColor" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 10C15 10.221 15.0878 10.433 15.2441 10.5893C15.4004 10.7455 15.6123 10.8333 15.8333 10.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5893C16.5789 10.433 16.6667 10.221 16.6667 10C16.6667 9.77899 16.5789 9.56702 16.4226 9.41074C16.2663 9.25446 16.0543 9.16667 15.8333 9.16667C15.6123 9.16667 15.4004 9.25446 15.2441 9.41074C15.0878 9.56702 15 9.77899 15 10Z" fill="currentColor" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
