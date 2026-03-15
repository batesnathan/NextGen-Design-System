export const typeScale = {
  headings: {
    "title-5": { fontSize: 30, lineHeight: 36, letterSpacing: -1.2 },
    "title-4": { fontSize: 24, lineHeight: 28, letterSpacing: -0.96 },
    "title-3": { fontSize: 20, lineHeight: 24, letterSpacing: -0.6 },
    "title-2": { fontSize: 18, lineHeight: 24, letterSpacing: -0.54 },
    "title-1": { fontSize: 16, lineHeight: 20, letterSpacing: -0.48 }
  },
  copy: {
    "body-3": { fontSize: 16, lineHeight: 24 },
    "body-2": { fontSize: 14, lineHeight: 20 },
    "body-1": { fontSize: 13, lineHeight: 20 },
    "caption-2": { fontSize: 12, lineHeight: 16 },
    "caption-1": { fontSize: 11, lineHeight: 16 }
  }
} as const;

export type HeadingToken = keyof typeof typeScale.headings;
export type CopyToken = keyof typeof typeScale.copy;
