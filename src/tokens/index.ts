import responsiveDesktop from "./source/responsive/Desktop.tokens.json";
import responsiveTablet from "./source/responsive/Tablet.tokens.json";
import responsiveMobile from "./source/responsive/Mobile.tokens.json";
import lightMode from "./source/themes/Light Mode.tokens.json";
import lightModeGradients from "./source/themes/Light mode.tokens 2.json";

export * from "./generated/tokens";

export const rawTokens = {
  responsive: {
    desktop: responsiveDesktop,
    tablet: responsiveTablet,
    mobile: responsiveMobile
  },
  themes: {
    light: lightMode,
    gradients: lightModeGradients
  }
} as const;
