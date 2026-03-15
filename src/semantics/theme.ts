import lightMode from "../tokens/source/themes/Light Mode.tokens.json";

type SemanticTheme = {
  surface: {
    default: string;
    secondary: string;
  };
  text: {
    default: string;
    secondary: string;
  };
  border: {
    default: string;
  };
  interactive: {
    primary: string;
    secondary: string;
  };
};

function hex(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "object" && value && "hex" in value) {
    const hexValue = (value as { hex?: unknown }).hex;
    if (typeof hexValue === "string") {
      return hexValue;
    }
  }

  return "#000000";
}

export const lightTheme: SemanticTheme = {
  surface: {
    default: hex((lightMode as any).surface.default.$value),
    secondary: hex((lightMode as any).surface.secondary.$value)
  },
  text: {
    default: hex((lightMode as any)["text-icon"].default.$value),
    secondary: hex((lightMode as any)["text-icon"].secondary.$value)
  },
  border: {
    default: hex((lightMode as any).border.default.$value)
  },
  interactive: {
    primary: hex((lightMode as any).container.interactive.primary.$value),
    secondary: hex((lightMode as any).container.interactive.secondary.$value)
  }
};

export function toCssVariables(theme: SemanticTheme): Record<string, string> {
  return {
    "--ng-color-surface": theme.surface.default,
    "--ng-color-surface-secondary": theme.surface.secondary,
    "--ng-color-text": theme.text.default,
    "--ng-color-text-secondary": theme.text.secondary,
    "--ng-color-border": theme.border.default,
    "--ng-color-primary": theme.interactive.primary,
    "--ng-color-primary-soft": theme.interactive.secondary
  };
}
