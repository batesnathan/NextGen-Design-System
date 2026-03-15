import type { HTMLAttributes, ReactNode } from "react";

const figmaAiIcon = "http://localhost:3845/assets/3395e07a0c5ee58815b1655366ae54ef6c70797a.svg";
const figmaNotificationIcon = "http://localhost:3845/assets/215418d8bf834f5a104fc4e7c435df7aa4e90c63.svg";
const figmaProfileSlim = "http://localhost:3845/assets/f38da9092076f925ed1c7b9f3038b3d099c13ddf.svg";
const figmaProfileExpanded = "http://localhost:3845/assets/5a2dbeea253e7211db0f0fc55c1b21804f790103.svg";

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
  return <img src={figmaAiIcon} alt="" className="ng-topbar__glyph" aria-hidden="true" />;
}

function NotificationIcon() {
  return <img src={figmaNotificationIcon} alt="" className="ng-topbar__mini-icon" aria-hidden="true" />;
}

function ProfileIcon({ expanded }: { expanded: boolean }) {
  return (
    <img
      src={expanded ? figmaProfileExpanded : figmaProfileSlim}
      alt=""
      className="ng-topbar__profile-icon"
      aria-hidden="true"
    />
  );
}

function QuickLinkFallbackIcon() {
  return <img src={figmaAiIcon} alt="" className="ng-topbar__mini-icon" aria-hidden="true" />;
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ClaimsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7.5c0-1.66-1.79-3-4-3s-4 1.34-4 3 1.79 3 4 3 4 1.34 4 3-1.79 3-4 3-4-1.34-4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LearnIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L12 4l9.5 5.5L12 15 2.5 9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11.7V16l6 3.5 6-3.5v-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ng-topbar__quicklink-svg" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 9.5h11l-1 9h-9l-1-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 9.5V8a3 3 0 0 1 6 0v1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
