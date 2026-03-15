import type { HTMLAttributes, ReactNode } from "react";

const figmaAiIcon = "http://localhost:3845/assets/3395e07a0c5ee58815b1655366ae54ef6c70797a.svg";
const figmaAiSparkleVectorA = "http://localhost:3845/assets/5e203496e6830ce3fbeda3f3c5a381bd63131645.svg";
const figmaAiSparkleVectorB = "http://localhost:3845/assets/8c55d62cd2c93650a2008a59347dcd63bba3362b.svg";
const figmaNotificationIcon = "http://localhost:3845/assets/215418d8bf834f5a104fc4e7c435df7aa4e90c63.svg";
const figmaProfileSlim = "http://localhost:3845/assets/f38da9092076f925ed1c7b9f3038b3d099c13ddf.svg";
const figmaProfileExpanded = "http://localhost:3845/assets/5a2dbeea253e7211db0f0fc55c1b21804f790103.svg";
const figmaCardVectorA = "http://localhost:3845/assets/ef167eed7c64e38fffe7331306161fe4ceb43eee.svg";
const figmaCardVectorB = "http://localhost:3845/assets/f4361f72821e4d6b25b080f95031db39db1dc5cd.svg";
const figmaCardVectorC = "http://localhost:3845/assets/e10f05383a422bba86e032af1469a8450d0cff01.svg";
const figmaCardVectorD = "http://localhost:3845/assets/496c01b867a61c2e1cb1aaee4c9fbf637b984a09.svg";
const figmaClaimsVectorA = "http://localhost:3845/assets/e66f56eb5af36a40458f3e81cabc874bbf0af7d9.svg";
const figmaClaimsVectorB = "http://localhost:3845/assets/49b557c877b7c021d80a6ba87922ce19d5293be5.svg";
const figmaLearnVectorA = "http://localhost:3845/assets/e355a4c0eecd9d0b4f13fb90a322477457245629.svg";
const figmaLearnVectorB = "http://localhost:3845/assets/258797fd71d1cc139453fd15c9f0e98e7900fdff.svg";
const figmaShopVectorA = "http://localhost:3845/assets/5d4356d38625e7338306cc8747eec01fea93ae7a.svg";
const figmaShopVectorB = "http://localhost:3845/assets/fe6fa3af762e8bd9d3c459a3a7cb76c29f0530fe.svg";

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
    <span className="ng-topbar__glyph-stack" aria-hidden="true">
      <img src={figmaAiIcon} alt="" className="ng-topbar__glyph" />
      <img src={figmaAiSparkleVectorA} alt="" className="ng-topbar__glyph-layer ng-topbar__glyph-layer--a" />
      <img src={figmaAiSparkleVectorB} alt="" className="ng-topbar__glyph-layer ng-topbar__glyph-layer--b" />
    </span>
  );
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
  return <SparkleIcon />;
}

function CardIcon() {
  return (
    <span className="ng-topbar__glyph-stack" aria-hidden="true">
      <img src={figmaAiIcon} alt="" className="ng-topbar__glyph" />
      <img src={figmaCardVectorA} alt="" className="ng-topbar__glyph-layer ng-topbar__card-layer--a" />
      <img src={figmaCardVectorB} alt="" className="ng-topbar__glyph-layer ng-topbar__card-layer--b" />
      <img src={figmaCardVectorC} alt="" className="ng-topbar__glyph-layer ng-topbar__card-layer--c" />
      <img src={figmaCardVectorD} alt="" className="ng-topbar__glyph-layer ng-topbar__card-layer--d" />
    </span>
  );
}

function ClaimsIcon() {
  return (
    <span className="ng-topbar__glyph-stack" aria-hidden="true">
      <img src={figmaAiIcon} alt="" className="ng-topbar__glyph" />
      <img src={figmaClaimsVectorA} alt="" className="ng-topbar__glyph-layer ng-topbar__claims-layer--a" />
      <img src={figmaClaimsVectorB} alt="" className="ng-topbar__glyph-layer ng-topbar__claims-layer--b" />
    </span>
  );
}

function LearnIcon() {
  return (
    <span className="ng-topbar__glyph-stack" aria-hidden="true">
      <img src={figmaAiIcon} alt="" className="ng-topbar__glyph" />
      <img src={figmaLearnVectorA} alt="" className="ng-topbar__glyph-layer ng-topbar__learn-layer--a" />
      <img src={figmaLearnVectorB} alt="" className="ng-topbar__glyph-layer ng-topbar__learn-layer--b" />
    </span>
  );
}

function ShopIcon() {
  return (
    <span className="ng-topbar__glyph-stack" aria-hidden="true">
      <img src={figmaAiIcon} alt="" className="ng-topbar__glyph" />
      <img src={figmaShopVectorA} alt="" className="ng-topbar__glyph-layer ng-topbar__shop-layer--a" />
      <img src={figmaShopVectorB} alt="" className="ng-topbar__glyph-layer ng-topbar__shop-layer--b" />
    </span>
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
