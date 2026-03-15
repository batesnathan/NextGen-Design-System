import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const figmaExportRoot = process.env.FIGMA_TOKEN_DIR || "/Users/nathanbates/Downloads/figma/new";

const mappings = [
  {
    from: path.join(figmaExportRoot, "Responsive/Desktop.tokens.json"),
    to: path.join(root, "src/tokens/source/responsive/Desktop.tokens.json")
  },
  {
    from: path.join(figmaExportRoot, "Responsive/Tablet.tokens.json"),
    to: path.join(root, "src/tokens/source/responsive/Tablet.tokens.json")
  },
  {
    from: path.join(figmaExportRoot, "Responsive/Mobile.tokens.json"),
    to: path.join(root, "src/tokens/source/responsive/Mobile.tokens.json")
  },
  {
    from: path.join(figmaExportRoot, "Light Mode.tokens.json"),
    to: path.join(root, "src/tokens/source/themes/Light Mode.tokens.json")
  },
  {
    from: path.join(figmaExportRoot, "Light mode.tokens 2.json"),
    to: path.join(root, "src/tokens/source/themes/Light mode.tokens 2.json")
  },
  {
    from: path.join(figmaExportRoot, "Mode 1.tokens.json"),
    to: path.join(root, "src/tokens/source/themes/Mode 1.tokens.json")
  }
];

for (const mapping of mappings) {
  await mkdir(path.dirname(mapping.to), { recursive: true });
  await copyFile(mapping.from, mapping.to);
  console.log(`Synced: ${path.basename(mapping.from)}`);
}

console.log("Token sync complete.");
