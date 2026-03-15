import lightMode from "../tokens/source/themes/Light Mode.tokens.json";

type SemanticTheme = {
  container: {
    default: string;
    secondary: string;
    tertiary: string;
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
    selectableSelected: string;
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
  container: {
    default: hex((lightMode as any).container.default.$value),
    secondary: hex((lightMode as any).container.secondary.$value),
    tertiary: hex((lightMode as any).container.tertiary.$value)
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
    secondary: hex((lightMode as any).container.interactive.secondary.$value),
    selectableSelected: hex((lightMode as any).border.interactive["selectable-selected"].$value)
  }
};

export function toCssVariables(theme: SemanticTheme): Record<string, string> {
  return {
    "--ng-color-surface": theme.container.secondary,
    "--ng-color-surface-secondary": theme.container.default,
    "--ng-color-container-default": theme.container.default,
    "--ng-color-container-secondary": theme.container.secondary,
    "--ng-color-container-tertiary": theme.container.tertiary,
    "--ng-color-text": theme.text.default,
    "--ng-color-text-secondary": theme.text.secondary,
    "--ng-color-border": theme.border.default,
    "--ng-color-primary": theme.interactive.primary,
    "--ng-color-primary-soft": theme.interactive.secondary,
    "--ng-color-border-selectable-selected": theme.interactive.selectableSelected
  };
}
