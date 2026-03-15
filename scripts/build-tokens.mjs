import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const sources = [
  {
    prefix: "desktop",
    file: path.join(root, "src/tokens/source/responsive/Desktop.tokens.json")
  },
  {
    prefix: "tablet",
    file: path.join(root, "src/tokens/source/responsive/Tablet.tokens.json")
  },
  {
    prefix: "mobile",
    file: path.join(root, "src/tokens/source/responsive/Mobile.tokens.json")
  },
  {
    prefix: "light",
    file: path.join(root, "src/tokens/source/themes/Light Mode.tokens.json")
  }
];

function isTokenNode(value) {
  return Boolean(value && typeof value === "object" && "$value" in value);
}

function normalize(value) {
  if (value && typeof value === "object") {
    if ("hex" in value && typeof value.hex === "string") {
      return value.hex.toLowerCase();
    }
    if (Array.isArray(value.components) && typeof value.alpha === "number") {
      return JSON.stringify(value);
    }
  }
  return value;
}

function sanitizeSegment(segment) {
  return segment
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function flattenObject(input, prefix = [], output = {}) {
  for (const [key, value] of Object.entries(input)) {
    const nextPath = [...prefix, key];

    if (isTokenNode(value)) {
      const tokenKey = nextPath.join(".");
      output[tokenKey] = normalize(value.$value);
      continue;
    }

    if (value && typeof value === "object") {
      flattenObject(value, nextPath, output);
    }
  }

  return output;
}

const tokenMap = {};
for (const source of sources) {
  const content = JSON.parse(await readFile(source.file, "utf8"));
  const flattened = flattenObject(content);

  for (const [key, value] of Object.entries(flattened)) {
    tokenMap[`${source.prefix}.${key}`] = value;
  }
}

const tokenTs = [
  "export type GeneratedTokenMap = Record<string, string | number>;",
  "",
  "export const generatedTokens: GeneratedTokenMap = ",
  `${JSON.stringify(tokenMap, null, 2)} as const;`,
  ""
].join("\n");

const cssLines = [":root {"];
for (const [key, value] of Object.entries(tokenMap)) {
  const cssName = key
    .split(".")
    .map((part) => sanitizeSegment(part))
    .filter(Boolean)
    .join("-");
  cssLines.push(`  --ng-token-${cssName}: ${String(value)};`);
}
cssLines.push("}", "");

await mkdir(path.join(root, "src/tokens/generated"), { recursive: true });
await writeFile(path.join(root, "src/tokens/generated/tokens.ts"), tokenTs, "utf8");
await writeFile(path.join(root, "src/tokens/generated/tokens.css"), cssLines.join("\n"), "utf8");

console.log(`Generated ${Object.keys(tokenMap).length} tokens.`);
