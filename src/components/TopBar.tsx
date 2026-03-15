import type { HTMLAttributes, ReactNode } from "react";

type TopBarSize = "slim" | "expanded";

type QuickLink = {
  label: string;
  icon?: ReactNode;
};

export type TopBarProps = HTMLAttributes<HTMLElement> & {
  size?: TopBarSize;
  showItems?: boolean;
  greetingName?: string;
  notificationCount?: number;
  quickLinks?: QuickLink[];
};

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none">
      <path d="M16.6 4.4a.8.8 0 0 1 .75.52l.82 2.2c.12.34.39.61.73.73l2.2.82a.8.8 0 0 1 0 1.5l-2.2.82a1.25 1.25 0 0 0-.73.73l-.82 2.2a.8.8 0 0 1-1.5 0l-.82-2.2a1.25 1.25 0 0 0-.73-.73l-2.2-.82a.8.8 0 0 1 0-1.5l2.2-.82c.34-.12.61-.39.73-.73l.82-2.2a.8.8 0 0 1 .75-.52Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8 11.2a.7.7 0 0 1 .66.46l.44 1.18c.08.22.26.4.48.48l1.18.44a.7.7 0 0 1 0 1.32l-1.18.44a.83.83 0 0 0-.48.48l-.44 1.18a.7.7 0 0 1-1.32 0l-.44-1.18a.83.83 0 0 0-.48-.48l-1.18-.44a.7.7 0 0 1 0-1.32l1.18-.44a.83.83 0 0 0 .48-.48l.44-1.18A.7.7 0 0 1 8 11.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function NotificationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__mini-icon" aria-hidden="true" fill="none">
      <path d="M12 4.75a4.5 4.5 0 0 0-4.5 4.5v2.53c0 .62-.25 1.22-.69 1.66l-1.08 1.08a.9.9 0 0 0 .64 1.53h11.26a.9.9 0 0 0 .64-1.53l-1.08-1.08a2.35 2.35 0 0 1-.69-1.66V9.25A4.5 4.5 0 0 0 12 4.75Z" stroke="#202124" strokeWidth="1.7"/>
      <path d="M9.9 17.5a2.1 2.1 0 0 0 4.2 0" stroke="#202124" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function ProfileIcon({ expanded }: { expanded: boolean }) {
  const strokeWidth = expanded ? 1.8 : 1.7;

  return (
    <svg viewBox="0 0 34 34" className="ng-topbar__profile-icon" aria-hidden="true" fill="none">
      <circle cx="17" cy="17" r="16.5" fill="rgba(255,255,255,0.78)" />
      <circle cx="17" cy="12.5" r="4.1" stroke="#202124" strokeWidth={strokeWidth} />
      <path d="M9.7 24.4c1.58-2.68 4.23-4.03 7.3-4.03s5.72 1.35 7.3 4.03" stroke="#202124" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

function QuickLinkFallbackIcon() {
  return <SparkleIcon />;
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none">
      <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M3.5 10.5h17" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M7.3 14.5h3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function ClaimsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none">
      <path d="M12 4.5v15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M15.6 8.1c-.7-.72-1.92-1.2-3.42-1.2-1.9 0-3.18.98-3.18 2.36 0 1.44 1.22 2.13 3.38 2.55 2.02.4 3.1 1.07 3.1 2.4 0 1.52-1.34 2.54-3.46 2.54-1.72 0-3.07-.56-4-1.53" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LearnIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none">
      <path d="m3.4 9.2 8.6-4.1 8.6 4.1-8.6 4.1-8.6-4.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M6.5 11.1v4.1c0 .82 2.42 2.29 5.5 2.29s5.5-1.47 5.5-2.29V11.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none">
      <path d="M6.5 9.5h11l-1.2 8.5H7.7L6.5 9.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M9.1 9.5V8.2A2.9 2.9 0 0 1 12 5.3a2.9 2.9 0 0 1 2.9 2.9v1.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

const defaultQuickLinks: QuickLink[] = [
  { label: "Card", icon: <CardIcon /> },
  { label: "Claims", icon: <ClaimsIcon /> },
  { label: "Learn", icon: <LearnIcon /> },
  { label: "Shop", icon: <ShopIcon /> }
];

export function TopBar({
  size = "slim",
  showItems = true,
  greetingName = "Scott",
  notificationCount = 2,
  quickLinks = defaultQuickLinks,
  className = "",
  ...props
}: TopBarProps) {
  const isExpanded = size === "expanded";

  return (
    <header
      className={`ng-reset ng-topbar ng-topbar--${size} ${className}`.trim()}
      {...props}
    >
      <div className="ng-topbar__row ng-topbar__row--top">
        {isExpanded ? (
          <div className="ng-topbar__hello" aria-label={`Hello, ${greetingName}`}>
            <span className="ng-topbar__hello-prefix">Hello,</span>
            <span className="ng-topbar__hello-name">{greetingName}</span>
          </div>
        ) : (
          <button type="button" className="ng-topbar__chat-chip" aria-label="Open AI chat">
            <span className="ng-topbar__chip-overlay" aria-hidden="true" />
            <SparkleIcon />
          </button>
        )}

        <div className="ng-topbar__actions">
          <button type="button" className="ng-topbar__action-btn" aria-label="Notifications">
            <NotificationIcon />
            <span className="ng-topbar__badge">{notificationCount}</span>
          </button>
          <button type="button" className="ng-topbar__action-btn" aria-label="Profile">
            <ProfileIcon expanded={isExpanded} />
          </button>
        </div>
      </div>

      {isExpanded ? (
        <>
          <div className="ng-topbar__search-wrap">
            <button type="button" className="ng-topbar__search-pill" aria-label="How can I help you today?">
              <span className="ng-topbar__chip-overlay" aria-hidden="true" />
              <SparkleIcon />
              <span>How can I help you today?</span>
            </button>
          </div>

          {showItems ? (
            <div className="ng-topbar__quicklinks" role="navigation" aria-label="Quick links">
              {quickLinks.map((item) => (
                <button key={item.label} type="button" className="ng-topbar__quicklink">
                  <span className="ng-topbar__quicklink-icon">{item.icon ?? <QuickLinkFallbackIcon />}</span>
                  <span className="ng-topbar__quicklink-label">{item.label}</span>
                </button>
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </header>
  );
}
