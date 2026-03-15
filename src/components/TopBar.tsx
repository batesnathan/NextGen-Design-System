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

const defaultQuickLinks: QuickLink[] = [
  { label: "Card" },
  { label: "Claims" },
  { label: "Learn" },
  { label: "Shop" }
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
