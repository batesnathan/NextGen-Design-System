export const spacingScale = {
  0: 0,
  25: 1,
  50: 2,
  75: 3,
  100: 4,
  200: 8,
  300: 12,
  400: 16,
  500: 20,
  600: 24,
  700: 28,
  800: 32,
  900: 36,
  1000: 40,
  1200: 48,
  1600: 64,
  2000: 80
} as const;

export type SpacingToken = keyof typeof spacingScale;

export function space(token: SpacingToken): string {
  return `${spacingScale[token]}px`;
}
