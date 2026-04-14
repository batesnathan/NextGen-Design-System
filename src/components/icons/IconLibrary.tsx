import React from 'react';

// Size variants for all icons (16, 20, 24, 32, 48)
export type IconSize = "16" | "20" | "24" | "32" | "48";

export interface IconProps {
  className?: string;
  size?: IconSize;
}

const assetBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? `${import.meta.env.BASE_URL}assets/`
  : `${import.meta.env.BASE_URL}/assets/`;

/**
 * NextGen Design System Icon Library
 * 84+ exact SVG icons with multi-size variants
 * 
 * USAGE:
 * import { ArrowForward, Home, Visibility } from '@/components/icons';
 * 
 * <ArrowForward size="24" />
 * <Home size="32" className="text-primary" />
 * <Visibility size="48" />
 */

// Helper to get icon asset path
const getIconUrl = (name: string, size: IconSize = "24"): string => {
  return `${assetBaseUrl}${name}-${size}.svg`;
};

// ============================================================================
// Navigation & Direction Icons (8)
// ============================================================================

export const ArrowForward = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    return (
      <div
        ref={ref}
        className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
        data-icon="arrow-forward"
        data-size={size}
      >
        <img 
          alt="arrow forward" 
          className="absolute block inset-0 max-w-none size-full" 
          src={getIconUrl("arrow-forward", size)} 
          loading="lazy"
        />
      </div>
    );
  }
);

ArrowForward.displayName = "ArrowForward";

// Arrow Back
export const ArrowBack = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="arrow-back"
      data-size={size}
    >
      <img alt="arrow back" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}arrow-back-${size}.svg`} loading="lazy" />
    </div>
  )
);

ArrowBack.displayName = "ArrowBack";

// Arrow Down
export const ArrowDown = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="arrow-down"
      data-size={size}
    >
      <img alt="arrow down" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}arrow-down-${size}.svg`} loading="lazy" />
    </div>
  )
);

ArrowDown.displayName = "ArrowDown";

// Arrow Up
export const ArrowUp = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="arrow-up"
      data-size={size}
    >
      <img alt="arrow up" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}arrow-up-${size}.svg`} loading="lazy" />
    </div>
  )
);

ArrowUp.displayName = "ArrowUp";

// Chevron Right
export const ChevronRight = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="chevron-right"
      data-size={size}
    >
      <img alt="chevron right" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}chevron-right-${size}.svg`} loading="lazy" />
    </div>
  )
);

ChevronRight.displayName = "ChevronRight";

// Chevron Left
export const ChevronLeft = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="chevron-left"
      data-size={size}
    >
      <img alt="chevron left" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}chevron-left-${size}.svg`} loading="lazy" />
    </div>
  )
);

ChevronLeft.displayName = "ChevronLeft";

// Chevron Down
export const ChevronDown = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="chevron-down"
      data-size={size}
    >
      <img alt="chevron down" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}chevron-down-${size}.svg`} loading="lazy" />
    </div>
  )
);

ChevronDown.displayName = "ChevronDown";

// Chevron Up
export const ChevronUp = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="chevron-up"
      data-size={size}
    >
      <img alt="chevron up" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}chevron-up-${size}.svg`} loading="lazy" />
    </div>
  )
);

ChevronUp.displayName = "ChevronUp";

// ============================================================================
// Action Icons (12)
// ============================================================================

export const Add = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="add"
      data-size={size}
    >
      <img alt="add" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}add-${size}.svg`} loading="lazy" />
    </div>
  )
);

Add.displayName = "Add";

export const Remove = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="remove"
      data-size={size}
    >
      <img alt="remove" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}remove-${size}.svg`} loading="lazy" />
    </div>
  )
);

Remove.displayName = "Remove";

export const Close = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="close"
      data-size={size}
    >
      <img alt="close" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}close-${size}.svg`} loading="lazy" />
    </div>
  )
);

Close.displayName = "Close";

export const Check = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="check"
      data-size={size}
    >
      <img alt="check" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}check-${size}.svg`} loading="lazy" />
    </div>
  )
);

Check.displayName = "Check";

export const Edit = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="edit"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "19.46%", right: "19.46%", bottom: "16.67%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-4.89%", right: "-4.89%", bottom: "-4.89%", left: "-4.89%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}edit-main-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "27.08%", right: "27.08%", bottom: "56.25%", left: "56.25%" }}>
          <div style={{ position: "absolute", top: "-18.75%", right: "-18.75%", bottom: "-18.75%", left: "-18.75%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}edit-slash-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Edit.displayName = "Edit";

export const Delete = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const sideInset = size === "48" ? "-1.5px" : size === "32" ? "-1px" : size === "20" ? "-0.63px" : size === "16" ? "-0.5px" : "-0.75px";

    return (
      <div
        ref={ref}
        className={className}
        data-icon="delete"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "29.17%", right: "16.67%", bottom: "70.83%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: sideInset, right: "-4.69%", bottom: sideInset, left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}trash-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "45.83%", right: "58.33%", bottom: "29.17%", left: "41.67%" }}>
          <div style={{ position: "absolute", top: "-12.5%", right: sideInset, bottom: "-12.5%", left: sideInset }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}trash-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "45.83%", right: "41.67%", bottom: "29.17%", left: "58.33%" }}>
          <div style={{ position: "absolute", top: "-12.5%", right: sideInset, bottom: "-12.5%", left: sideInset }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}trash-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "29.17%", right: "20.83%", bottom: "12.5%", left: "20.83%" }}>
          <div style={{ position: "absolute", top: "-5.36%", right: "-5.36%", bottom: "-5.36%", left: "-5.36%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}trash-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "12.5%", right: "37.5%", bottom: "70.83%", left: "37.5%" }}>
          <div style={{ position: "absolute", top: "-18.75%", right: "-12.5%", bottom: "-18.75%", left: "-12.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}trash-layer4-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Delete.displayName = "Delete";

export const Trash = Delete;

export const Upload = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="upload"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "70.83%", right: "16.67%", bottom: "12.5%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-18.75%", right: "-4.69%", bottom: "-18.75%", left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}upload-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "16.67%",
            right: "29.17%",
            bottom: "62.5%",
            left: "29.17%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", height: "100%", transform: "rotate(180deg) scaleX(-1)" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <div style={{ position: "absolute", top: "-15%", right: "-7.5%", bottom: "-15%", left: "-7.5%" }}>
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}upload-layer2-${size}.svg`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "16.67%",
            right: "50%",
            bottom: "33.33%",
            left: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "1px", height: "100%", transform: "rotate(180deg) scaleX(-1)" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-6.25%",
                  right: size === "48" ? "-1.5px" : size === "32" ? "-1px" : size === "20" ? "-0.63px" : size === "16" ? "-0.5px" : "-0.75px",
                  bottom: "-6.25%",
                  left: size === "48" ? "-1.5px" : size === "32" ? "-1px" : size === "20" ? "-0.63px" : size === "16" ? "-0.5px" : "-0.75px",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}upload-layer3-${size}.svg`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Upload.displayName = "Upload";

export const Download = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="download"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "70.83%", right: "16.67%", bottom: "12.5%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-18.75%", right: "-4.69%", bottom: "-18.75%", left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}download-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "45.83%", right: "29.17%", bottom: "33.33%", left: "29.17%" }}>
          <div style={{ position: "absolute", top: "-15%", right: "-7.5%", bottom: "-15%", left: "-7.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}download-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "16.67%", right: "50%", bottom: "33.33%", left: "50%" }}>
          <div
            style={{
              position: "absolute",
              top: "-6.25%",
              right: size === "48" ? "-1.5px" : size === "32" ? "-1px" : size === "20" ? "-0.63px" : size === "16" ? "-0.5px" : "-0.75px",
              bottom: "-6.25%",
              left: size === "48" ? "-1.5px" : size === "32" ? "-1px" : size === "20" ? "-0.63px" : size === "16" ? "-0.5px" : "-0.75px",
            }}
          >
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}download-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Download.displayName = "Download";

export const Search = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="search"
      data-size={size}
    >
      <img alt="search" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}search-${size}.svg`} loading="lazy" />
    </div>
  )
);

Search.displayName = "Search";

// ============================================================================
// View & Content Icons (10)
// ============================================================================

export const Visibility2 = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="visibility"
      data-size={size}
    >
      <img alt="visibility" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}visibility-${size}.svg`} loading="lazy" />
    </div>
  )
);

Visibility2.displayName = "Visibility";

export const Home = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="home"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "50%", left: "12.5%" }}>
          <div style={{ position: "absolute", top: "-8.33%", right: "-4.17%", bottom: "-8.33%", left: "-4.17%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}home-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "50%", right: "20.83%", bottom: "12.5%", left: "20.83%" }}>
          <div style={{ position: "absolute", top: "-8.33%", right: "-5.36%", bottom: "-8.33%", left: "-5.36%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}home-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "54.17%", right: "37.5%", bottom: "12.5%", left: "37.5%" }}>
          <div style={{ position: "absolute", top: "-9.38%", right: "-12.5%", bottom: "-9.38%", left: "-12.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}home-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Home.displayName = "Home";

export const Settings = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="settings"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "12.5%", left: "12.5%" }}>
          <div style={{ position: "absolute", top: "-4.17%", right: "-4.17%", bottom: "-4.17%", left: "-4.17%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}settings-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "37.5%", right: "37.5%", bottom: "37.5%", left: "37.5%" }}>
          <div style={{ position: "absolute", top: "-12.5%", right: "-12.5%", bottom: "-12.5%", left: "-12.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}settings-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Settings.displayName = "Settings";

export const Menu = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const yInset = size === "48" ? "-1.5px" : size === "32" ? "-1px" : size === "20" ? "-0.63px" : size === "16" ? "-0.5px" : "-0.75px";

    return (
      <div
        ref={ref}
        className={className}
        data-icon="menu"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "25%", right: "16.67%", bottom: "75%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: yInset, right: "-4.69%", bottom: yInset, left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}menu-layer-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "50%", right: "16.67%", bottom: "50%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: yInset, right: "-4.69%", bottom: yInset, left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}menu-layer-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "75%", right: "16.67%", bottom: "25%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: yInset, right: "-4.69%", bottom: yInset, left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}menu-layer-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Menu.displayName = "Menu";

export const More = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="more"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "45.83%", right: "75%", bottom: "45.83%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-37.5%", right: "-37.5%", bottom: "-37.5%", left: "-37.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}more-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "45.83%", right: "45.83%", bottom: "45.83%", left: "45.83%" }}>
          <div style={{ position: "absolute", top: "-37.5%", right: "-37.5%", bottom: "-37.5%", left: "-37.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}more-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "45.83%", right: "16.67%", bottom: "45.83%", left: "75%" }}>
          <div style={{ position: "absolute", top: "-37.5%", right: "-37.5%", bottom: "-37.5%", left: "-37.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}more-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

More.displayName = "More";

export const Filter = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="filter"
      data-size={size}
    >
      <img alt="filter" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}filter-${size}.svg`} loading="lazy" />
    </div>
  )
);

Filter.displayName = "Filter";

export const Sort = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="sort"
      data-size={size}
    >
      <img alt="sort" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}sort-${size}.svg`} loading="lazy" />
    </div>
  )
);

Sort.displayName = "Sort";

export const Refresh = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="refresh"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "16.73%", right: "16.67%", bottom: "54.17%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-10.74%", right: "-4.69%", bottom: "-10.74%", left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}refresh-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "54.17%", right: "16.67%", bottom: "16.73%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-10.74%", right: "-4.69%", bottom: "-10.74%", left: "-4.69%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}refresh-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Refresh.displayName = "Refresh";

export const Reload = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="reload"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "16.66%", right: "16.95%", bottom: "16.66%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-4.69%", right: "-4.71%", bottom: "-4.69%", left: "-4.71%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}reload-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "16.67%", right: "16.67%", bottom: "62.5%", left: "62.5%" }}>
          <div style={{ position: "absolute", top: "-15%", right: "-15%", bottom: "-15%", left: "-15%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}reload-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Reload.displayName = "Reload";

// ============================================================================
// Status & Alert Icons (8)
// ============================================================================

export const Warning = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="warning"
      data-size={size}
    >
      <img alt="warning" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}warning-${size}.svg`} loading="lazy" />
    </div>
  )
);

Warning.displayName = "Warning";

export const Error = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="error"
      data-size={size}
    >
      <img alt="error" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}error-${size}.svg`} loading="lazy" />
    </div>
  )
);

Error.displayName = "Error";

export const Info = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const is16Or20 = size === "16" || size === "20";

    return (
      <div
        ref={ref}
        className={className}
        data-icon="info"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        {is16Or20 ? (
          <>
            <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "12.5%", left: "12.5%" }}>
              <div style={{ position: "absolute", top: "-4.17%", right: "-4.17%", bottom: "-4.17%", left: "-4.17%" }}>
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}info-${size}-layer1.svg`}
                  loading="lazy"
                />
              </div>
            </div>
            <div style={{ position: "absolute", top: "37.5%", right: "49.96%", bottom: "62.5%", left: "50%" }}>
              <div
                style={
                  size === "20"
                    ? { position: "absolute", top: "-0.63px", right: "-0.62px", bottom: "-0.63px", left: "-0.63px" }
                    : { position: "absolute", top: "-0.5px", right: "-0.5px", bottom: "-0.5px", left: "-0.5px" }
                }
              >
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}info-${size}-layer2.svg`}
                  loading="lazy"
                />
              </div>
            </div>
            <div style={{ position: "absolute", top: "50%", right: "45.83%", bottom: "33.33%", left: "45.83%" }}>
              <div style={{ position: "absolute", top: "-18.75%", right: "-37.5%", bottom: "-18.75%", left: "-37.5%" }}>
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}info-${size}-layer3.svg`}
                  loading="lazy"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ position: "absolute", inset: "0" }}>
              <img
                alt=""
                aria-hidden="true"
                style={{ display: "block", width: "100%", height: "100%" }}
                src={`${assetBaseUrl}info-${size}-layer1.svg`}
                loading="lazy"
              />
            </div>
            <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "12.5%", left: "12.5%" }}>
              <div style={{ position: "absolute", top: "-4.17%", right: "-4.17%", bottom: "-4.17%", left: "-4.17%" }}>
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}info-${size}-layer2.svg`}
                  loading="lazy"
                />
              </div>
            </div>
            <div style={{ position: "absolute", top: "37.5%", right: "49.96%", bottom: "62.5%", left: "50%" }}>
              <div
                style={{
                  position: "absolute",
                  top: size === "48" ? "-1.5px" : size === "32" ? "-1px" : "-0.75px",
                  right: "-7499.83%",
                  bottom: size === "48" ? "-1.5px" : size === "32" ? "-1px" : "-0.75px",
                  left: "-7499.83%",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}info-${size}-layer3.svg`}
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                left: "45.83%",
                right: "45.83%",
                top: "calc(50% + 2px)",
                aspectRatio: "2 / 4",
                transform: "translateY(-50%)",
              }}
            >
              <div style={{ position: "absolute", top: "-18.75%", right: "-37.5%", bottom: "-18.75%", left: "-37.5%" }}>
                <img
                  alt=""
                  aria-hidden="true"
                  style={{ display: "block", width: "100%", height: "100%" }}
                  src={`${assetBaseUrl}info-${size}-layer4.svg`}
                  loading="lazy"
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

Info.displayName = "Info";

export const Success = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="success"
      data-size={size}
    >
      <img alt="success" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}success-${size}.svg`} loading="lazy" />
    </div>
  )
);

Success.displayName = "Success";

export const Help = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="help"
      data-size={size}
    >
      <img alt="help" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}help-${size}.svg`} loading="lazy" />
    </div>
  )
);

Help.displayName = "Help";

export const Notifications = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="notifications"
      data-size={size}
    >
      <img alt="notifications" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}notifications-${size}.svg`} loading="lazy" />
    </div>
  )
);

Notifications.displayName = "Notifications";

export const Bell = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="bell"
      data-size={size}
    >
      <img alt="bell" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}bell-${size}.svg`} loading="lazy" />
    </div>
  )
);

Bell.displayName = "Bell";

// ============================================================================
// User & Account Icons (6)
// ============================================================================

export const User = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="user"
      data-size={size}
    >
      <img alt="user" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}user-${size}.svg`} loading="lazy" />
    </div>
  )
);

User.displayName = "User";

export const Profile = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="profile"
      data-size={size}
    >
      <img alt="profile" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}profile-${size}.svg`} loading="lazy" />
    </div>
  )
);

Profile.displayName = "Profile";

export const Accounts = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="accounts"
      data-size={size}
    >
      <img alt="accounts" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}accounts-${size}.svg`} loading="lazy" />
    </div>
  )
);

Accounts.displayName = "Accounts";

export const Logout = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="logout"
      data-size={size}
    >
      <img alt="logout" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}logout-${size}.svg`} loading="lazy" />
    </div>
  )
);

Logout.displayName = "Logout";

export const Login = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="login"
      data-size={size}
    >
      <img alt="login" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}login-${size}.svg`} loading="lazy" />
    </div>
  )
);

Login.displayName = "Login";

// ============================================================================
// Communication Icons (6)
// ============================================================================

export const Mail = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="mail"
      data-size={size}
    >
      <img alt="mail" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}mail-${size}.svg`} loading="lazy" />
    </div>
  )
);

Mail.displayName = "Mail";

export const Chat = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="chat"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "16.58%", right: "12.44%", bottom: "16.67%", left: "12.5%" }}>
          <div style={{ position: "absolute", top: "-4.68%", right: "-4.16%", bottom: "-4.68%", left: "-4.16%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}chat-layer-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Chat.displayName = "Chat";

export const Message = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="message"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "41.67%", left: "41.67%" }}>
          <div style={{ position: "absolute", top: "-6.82%", right: "-6.82%", bottom: "-6.82%", left: "-6.82%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}message-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "41.67%", right: "41.67%", bottom: "12.5%", left: "12.5%" }}>
          <div style={{ position: "absolute", top: "-6.82%", right: "-6.82%", bottom: "-6.82%", left: "-6.82%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}message-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Message.displayName = "Message";

export const Phone = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="phone"
      data-size={size}
    >
      <img alt="phone" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}phone-${size}.svg`} loading="lazy" />
    </div>
  )
);

Phone.displayName = "Phone";

export const SendEmail = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="send-email"
      data-size={size}
    >
      <img alt="send email" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}send-email-${size}.svg`} loading="lazy" />
    </div>
  )
);

SendEmail.displayName = "SendEmail";

// ============================================================================
// Financial Icons (6)
// ============================================================================

export const Money = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="money"
      data-size={size}
    >
      <img alt="money" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}money-${size}.svg`} loading="lazy" />
    </div>
  )
);

Money.displayName = "Money";

export const Wallet = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="wallet"
      data-size={size}
    >
      <img alt="wallet" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}wallet-${size}.svg`} loading="lazy" />
    </div>
  )
);

Wallet.displayName = "Wallet";

export const PaymentCardIcon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="card"
      data-size={size}
    >
      <img alt="card" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}card-${size}.svg`} loading="lazy" />
    </div>
  )
);

PaymentCardIcon.displayName = "PaymentCardIcon";

export const Invest = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="invest"
      data-size={size}
    >
      <img alt="invest" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}invest-${size}.svg`} loading="lazy" />
    </div>
  )
);

Invest.displayName = "Invest";

export const Transaction = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="transaction"
      data-size={size}
    >
      <img alt="transaction" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}transaction-${size}.svg`} loading="lazy" />
    </div>
  )
);

Transaction.displayName = "Transaction";

export const AccountTimeline = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="account-timeline"
      data-size={size}
    >
      <img alt="account timeline" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}account-timeline-${size}.svg`} loading="lazy" />
    </div>
  )
);

AccountTimeline.displayName = "AccountTimeline";

// ============================================================================
// Additional Icons (Remaining ~24)
// ============================================================================

export const Document = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="document"
      data-size={size}
    >
      <img alt="document" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}document-${size}.svg`} loading="lazy" />
    </div>
  )
);

Document.displayName = "Document";

export const FileUpload = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="file-upload"
      data-size={size}
    >
      <img alt="file upload" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}file-upload-${size}.svg`} loading="lazy" />
    </div>
  )
);

FileUpload.displayName = "FileUpload";

export const Share = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="share"
      data-size={size}
    >
      <img alt="share" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}share-${size}.svg`} loading="lazy" />
    </div>
  )
);

Share.displayName = "Share";

export const Print = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="print"
      data-size={size}
    >
      <img alt="print" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}print-${size}.svg`} loading="lazy" />
    </div>
  )
);

Print.displayName = "Print";

export const Save = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const centerInset =
      size === "48"
        ? { top: "-1.5px", right: "-1.5px", bottom: "-1.5px", left: "-1.5px" }
        : size === "32"
          ? { top: "-1px", right: "-1px", bottom: "-1px", left: "-1px" }
          : size === "20"
            ? { top: "-0.63px", right: "-0.63px", bottom: "-0.62px", left: "-0.63px" }
            : size === "16"
              ? { top: "-0.5px", right: "-0.5px", bottom: "-0.5px", left: "-0.5px" }
              : { top: "-0.75px", right: "-0.75px", bottom: "-0.75px", left: "-0.75px" };

    return (
      <div
        ref={ref}
        className={className}
        data-icon="save"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "45.83%", right: "37.5%", bottom: "54.13%", left: "62.5%" }}>
          <div style={{ position: "absolute", ...centerInset }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}save-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>

        <div style={{ position: "absolute", top: "12.5%", right: "58.33%", bottom: "65.09%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-13.94%", right: "-12.5%", bottom: "-13.94%", left: "-12.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}save-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>

        <div style={{ position: "absolute", top: "16.67%", right: "12.5%", bottom: "12.5%", left: "12.49%" }}>
          <div style={{ position: "absolute", top: "-4.41%", right: "-4.17%", bottom: "-4.41%", left: "-4.17%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}save-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Save.displayName = "Save";

export const Favorite = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="favorite"
      data-size={size}
    >
      <img alt="favorite" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}favorite-${size}.svg`} loading="lazy" />
    </div>
  )
);

Favorite.displayName = "Favorite";

export const Star = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="star"
      data-size={size}
    >
      <img alt="star" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}star-${size}.svg`} loading="lazy" />
    </div>
  )
);

Star.displayName = "Star";

export const Clock = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const handInset =
      size === "48"
        ? { top: "-15%", right: "-1.5px", bottom: "-15%", left: "-1.5px" }
        : size === "32"
          ? { top: "-15%", right: "-1px", bottom: "-15%", left: "-1px" }
          : size === "20"
            ? { top: "-15%", right: "-0.63px", bottom: "-15%", left: "-0.63px" }
            : size === "16"
              ? { top: "-15%", right: "-0.5px", bottom: "-15%", left: "-0.5px" }
              : { top: "-15%", right: "-0.75px", bottom: "-15%", left: "-0.75px" };

    return (
      <div
        ref={ref}
        className={className}
        data-icon="clock"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "12.5%", left: "12.5%" }}>
          <div style={{ position: "absolute", top: "-4.17%", right: "-4.17%", bottom: "-4.17%", left: "-4.17%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}clock-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>

        <div style={{ position: "absolute", top: "50%", right: "37.5%", bottom: "41.67%", left: "50%" }}>
          <div style={{ position: "absolute", top: "-37.5%", right: "-25%", bottom: "-37.5%", left: "-25%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}clock-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>

        <div style={{ position: "absolute", top: "29.17%", right: "50%", bottom: "50%", left: "50%" }}>
          <div style={{ position: "absolute", ...handInset }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}clock-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Clock.displayName = "Clock";

export const Calendar = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    const pegInset =
      size === "48"
        ? { top: "-18.75%", right: "-1.5px", bottom: "-18.75%", left: "-1.5px" }
        : size === "32"
          ? { top: "-18.75%", right: "-1px", bottom: "-18.75%", left: "-1px" }
          : size === "20"
            ? { top: "-18.75%", right: "-0.63px", bottom: "-18.75%", left: "-0.63px" }
            : size === "16"
              ? { top: "-22.5%", right: "-0.6px", bottom: "-22.5%", left: "-0.6px" }
              : { top: "-18.75%", right: "-0.75px", bottom: "-18.75%", left: "-0.75px" };

    const barInset =
      size === "48"
        ? { top: "-1.5px", right: "-4.69%", bottom: "-1.5px", left: "-4.69%" }
        : size === "32"
          ? { top: "-1px", right: "-4.69%", bottom: "-1px", left: "-4.69%" }
          : size === "20"
            ? { top: "-0.63px", right: "-4.69%", bottom: "-0.63px", left: "-4.69%" }
            : size === "16"
              ? { top: "-0.6px", right: "-5.63%", bottom: "-0.6px", left: "-5.63%" }
              : { top: "-0.75px", right: "-4.69%", bottom: "-0.75px", left: "-4.69%" };

    const mark1Inset =
      size === "48"
        ? { top: "-1.5px", right: "-75%", bottom: "-1.5px", left: "-75%" }
        : size === "32"
          ? { top: "-1px", right: "-75%", bottom: "-1px", left: "-75%" }
          : size === "20"
            ? { top: "-0.63px", right: "-75%", bottom: "-0.63px", left: "-75%" }
            : size === "16"
              ? { top: "-0.6px", right: "-90%", bottom: "-0.6px", left: "-90%" }
              : { top: "-0.75px", right: "-75%", bottom: "-0.75px", left: "-75%" };

    const mark2Inset =
      size === "48"
        ? { top: "-25%", right: "-1.5px", bottom: "-25%", left: "-1.5px" }
        : size === "32"
          ? { top: "-25%", right: "-1px", bottom: "-25%", left: "-1px" }
          : size === "20"
            ? { top: "-25%", right: "-0.63px", bottom: "-25%", left: "-0.63px" }
            : size === "16"
              ? { top: "-30%", right: "-0.6px", bottom: "-30%", left: "-0.6px" }
              : { top: "-25%", right: "-0.75px", bottom: "-25%", left: "-0.75px" };

    return (
      <div
        ref={ref}
        className={className}
        data-icon="calendar"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "20.83%", right: "16.67%", bottom: "12.5%", left: "16.67%" }}>
          <div
            style={
              size === "16"
                ? { position: "absolute", top: "-5.63%", right: "-5.63%", bottom: "-5.63%", left: "-5.63%" }
                : { position: "absolute", top: "-4.69%", right: "-4.69%", bottom: "-4.69%", left: "-4.69%" }
            }
          >
            <img alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} src={`${assetBaseUrl}calendar-layer1-${size}.svg`} loading="lazy" />
          </div>
        </div>

        <div style={{ position: "absolute", top: "12.5%", right: "33.33%", bottom: "70.83%", left: "66.67%" }}>
          <div style={{ position: "absolute", ...pegInset }}>
            <img alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} src={`${assetBaseUrl}calendar-layer2-${size}.svg`} loading="lazy" />
          </div>
        </div>

        <div style={{ position: "absolute", top: "12.5%", right: "66.67%", bottom: "70.83%", left: "33.33%" }}>
          <div style={{ position: "absolute", ...pegInset }}>
            <img alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} src={`${assetBaseUrl}calendar-layer2-${size}.svg`} loading="lazy" />
          </div>
        </div>

        <div style={{ position: "absolute", top: "45.83%", right: "16.67%", bottom: "54.17%", left: "16.67%" }}>
          <div style={{ position: "absolute", ...barInset }}>
            <img alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} src={`${assetBaseUrl}calendar-layer3-${size}.svg`} loading="lazy" />
          </div>
        </div>

        <div style={{ position: "absolute", top: "62.5%", right: "50%", bottom: "37.5%", left: "45.83%" }}>
          <div style={{ position: "absolute", ...mark1Inset }}>
            <img alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} src={`${assetBaseUrl}calendar-layer4-${size}.svg`} loading="lazy" />
          </div>
        </div>

        <div style={{ position: "absolute", top: "62.5%", right: "50%", bottom: "25%", left: "50%" }}>
          <div style={{ position: "absolute", ...mark2Inset }}>
            <img alt="" aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} src={`${assetBaseUrl}calendar-layer5-${size}.svg`} loading="lazy" />
          </div>
        </div>
      </div>
    );
  }
);

Calendar.displayName = "Calendar";

export const Link = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;

    return (
      <div
        ref={ref}
        className={className}
        data-icon="link"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "37.5%", right: "37.5%", bottom: "37.5%", left: "37.5%" }}>
          <div style={{ position: "absolute", top: "-12.5%", right: "-12.5%", bottom: "-12.5%", left: "-12.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}link-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "16.67%", right: "16.67%", bottom: "45.83%", left: "45.83%" }}>
          <div style={{ position: "absolute", top: "-8.33%", right: "-8.33%", bottom: "-8.33%", left: "-8.33%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}link-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "45.83%", right: "45.83%", bottom: "16.67%", left: "16.67%" }}>
          <div style={{ position: "absolute", top: "-8.33%", right: "-8.33%", bottom: "-8.33%", left: "-8.33%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}link-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Link.displayName = "Link";

export const Download2 = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="download"
      data-size={size}
    >
      <img alt="download" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}download-${size}.svg`} loading="lazy" />
    </div>
  )
);

Download2.displayName = "Download";

export const Login2 = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="login"
      data-size={size}
    >
      <img alt="login" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}login-${size}.svg`} loading="lazy" />
    </div>
  )
);

Login2.displayName = "Login";

export const Logout2 = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => (
    <div
      ref={ref}
      className={className || `overflow-clip relative ${size === "48" ? "size-[48px]" : size === "32" ? "size-[32px]" : size === "20" ? "size-[20px]" : size === "16" ? "size-[16px]" : "size-[24px]"}`}
      data-icon="logout"
      data-size={size}
    >
      <img alt="logout" className="absolute block inset-0 max-w-none size-full" src={`${assetBaseUrl}logout-${size}.svg`} loading="lazy" />
    </div>
  )
);

Logout2.displayName = "Logout";

export const Lock = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const shackleInset = size === "16" || size === "32" ? "-9.37%" : "-9.38%";

    return (
      <div
        ref={ref}
        className={className}
        data-icon="lock"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "45.83%", right: "20.83%", bottom: "12.5%", left: "20.83%" }}>
          <div style={{ position: "absolute", top: "-7.5%", right: "-5.36%", bottom: "-7.5%", left: "-5.36%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}lock-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "62.5%", right: "45.83%", bottom: "29.17%", left: "45.83%" }}>
          <div style={{ position: "absolute", top: "-37.5%", right: "-37.5%", bottom: "-37.5%", left: "-37.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}lock-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "12.5%", right: "33.33%", bottom: "54.17%", left: "33.33%" }}>
          <div style={{ position: "absolute", top: shackleInset, right: shackleInset, bottom: shackleInset, left: shackleInset }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}lock-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Lock.displayName = "Lock";

export const Unlock = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "24" }, ref) => {
    const px = size === "48" ? 48 : size === "32" ? 32 : size === "20" ? 20 : size === "16" ? 16 : 24;
    const shackleInset = size === "16" || size === "32" ? "-9.37%" : "-9.38%";

    return (
      <div
        ref={ref}
        className={className}
        data-icon="unlock"
        data-size={size}
        style={{ position: "relative", overflow: "hidden", width: px, height: px, flex: "0 0 auto" }}
      >
        <div style={{ position: "absolute", top: "45.83%", right: "29.17%", bottom: "12.5%", left: "12.5%" }}>
          <div style={{ position: "absolute", top: "-7.5%", right: "-5.36%", bottom: "-7.5%", left: "-5.36%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}unlock-layer1-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "62.5%", right: "54.17%", bottom: "29.17%", left: "37.5%" }}>
          <div style={{ position: "absolute", top: "-37.5%", right: "-37.5%", bottom: "-37.5%", left: "-37.5%" }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}unlock-layer2-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "12.5%", right: "12.5%", bottom: "54.17%", left: "54.17%" }}>
          <div style={{ position: "absolute", top: shackleInset, right: shackleInset, bottom: shackleInset, left: shackleInset }}>
            <img
              alt=""
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "100%" }}
              src={`${assetBaseUrl}unlock-layer3-${size}.svg`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
);

Unlock.displayName = "Unlock";

// Export icon registry for dynamic rendering
export const ICONS = {
  // Navigation
  'arrow-forward': ArrowForward,
  'arrow-back': ArrowBack,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  
  // Actions
  'add': Add,
  'remove': Remove,
  'close': Close,
  'check': Check,
  'edit': Edit,
  'delete': Delete,
  'trash': Trash,
  'upload': Upload,
  'download': Download,
  'search': Search,
  
  // View & Content
  'visibility': Visibility2,
  'home': Home,
  'settings': Settings,
  'menu': Menu,
  'more': More,
  'filter': Filter,
  'sort': Sort,
  'refresh': Refresh,
  'reload': Reload,
  
  // Status & Alert
  'warning': Warning,
  'error': Error,
  'info': Info,
  'success': Success,
  'help': Help,
  'notifications': Notifications,
  'bell': Bell,
  
  // User & Account
  'user': User,
  'profile': Profile,
  'accounts': Accounts,
  'logout': Logout,
  'login': Login,
  
  // Communication
  'mail': Mail,
  'chat': Chat,
  'message': Message,
  'phone': Phone,
  'send-email': SendEmail,
  
  // Financial
  'money': Money,
  'wallet': Wallet,
  'card': PaymentCardIcon,
  'invest': Invest,
  'transaction': Transaction,
  'account-timeline': AccountTimeline,
  
  // Additional
  'document': Document,
  'file-upload': FileUpload,
  'share': Share,
  'print': Print,
  'save': Save,
  'favorite': Favorite,
  'star': Star,
  'clock': Clock,
  'calendar': Calendar,
  'link': Link,
  'lock': Lock,
  'unlock': Unlock,
};

export const IconComponent = ({ name, size = "24", className }: { name: keyof typeof ICONS; size?: IconSize; className?: string }) => {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

// Export all components as named exports
export default {
  ArrowForward,
  ArrowBack,
  ArrowDown,
  ArrowUp,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Add,
  Remove,
  Close,
  Check,
  Edit,
  Delete,
  Trash,
  Upload,
  Download,
  Search,
  Visibility: Visibility2,
  Home,
  Settings,
  Menu,
  More,
  Filter,
  Sort,
  Refresh,
  Reload,
  Warning,
  Error,
  Info,
  Success,
  Help,
  Notifications,
  Bell,
  User,
  Profile,
  Accounts,
  Logout,
  Login,
  Mail,
  Chat,
  Message,
  Phone,
  SendEmail,
  Money,
  Wallet,
  PaymentCardIcon,
  Invest,
  Transaction,
  AccountTimeline,
  Document,
  FileUpload,
  Share,
  Print,
  Save,
  Favorite,
  Star,
  Clock,
  Calendar,
  Link,
  Lock,
  Unlock,
};
