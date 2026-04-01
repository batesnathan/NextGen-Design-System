import type { HTMLAttributes, ReactNode } from "react";
import {
  CardIcon,
  ClaimsIcon,
  LearnIcon,
  NotificationIcon,
  ProfileIcon,
  ShopIcon,
  SparkleIcon
} from "./icons";

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
function QuickLinkFallbackIcon() {
  return <SparkleIcon />;
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
            <ProfileIcon />
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
