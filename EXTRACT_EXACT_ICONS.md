# 🎯 GET EXACT SVG ICONS FROM FIGMA - 3 PATHS

## The Problem
Your current SVGs are generic approximations, not pixel-perfect. You need **exact** Figma designs.

**Example of Current (WRONG):**
```svg
<!-- arrow-forward-24.svg - Generic, not from Figma -->
<svg viewBox="0 0 24 24">
  <path d="M7 10h10M13 6l4 4-4 4" stroke="currentColor"/>
</svg>
```

**What You Need:**
The exact SVG paths and geometry directly from Figma design nodes.

---

## 🥇 PATH 1: FASTEST - Figma Plugin Export (5 minutes)

### Step-by-Step

1. **Open Figma File**
   - Go to: https://www.figma.com/files
   - Find: "-Next-Gen--Icons---Illustrations"
   - Open the file

2. **Install SVG Export Plugin**
   - Click: Figma menu → Plugins → Search plugins
   - Search: "SVG Export" OR "Figma to Code"
   - Click: Install

3. **Select All 84 Icons**
   - Click on the main canvas
   - Press: `Cmd+A` (Mac) or `Ctrl+A` (Windows) to select all
   - Or: manually select the icon component set you want

4. **Export SVGs**
   - Right-click → Run "SVG Export" plugin
   - Choose: "Export all as individual SVGs"
   - Download: ZIP file with all 84 SVGs

5. **Move SVG Files**
   ```bash
   # From your Downloads folder:
   unzip exported-icons.zip
   
   # Move to project:
   cp -r exported-icons/* ~/Documents/GitHub/NextGen-Design-System/public/assets/
   
   # Verify:
   ls ~/Documents/GitHub/NextGen-Design-System/public/assets/ | grep -E "arrow-forward|home|search" | head -5
   ```

6. **Verify & Test**
   ```bash
   cd ~/Documents/GitHub/NextGen-Design-System
   npm run storybook
   ```
   - Go to: http://localhost:6006/?path=/story/icons
   - Compare each icon to Figma - should be EXACT now

7. **Commit**
   ```bash
   git add public/assets/
   git commit -m "feat: replace generic SVG approximations with exact Figma designs (84 icons)"
   git push
   ```

---

## 🥈 PATH 2: AUTOMATED - Figma API (requires token)

### Prerequisites
- Figma personal access token from: https://www.figma.com/developers/api

### Step-by-Step

1. **Create Your Token**
   - Go to: https://www.figma.com/developers/api#access-tokens
   - Click: "Create a new personal access token"
   - Name: "NextGen Icons" (anything works)
   - Copy the token value

2. **Run Extraction Script**
   ```bash
   cd ~/Documents/GitHub/NextGen-Design-System
   
   # Set your token
   export FIGMA_TOKEN="your_token_paste_here"
   
   # Run extraction
   node scripts/extract-all-icons-from-figma.mjs
   
   # Or in one command:
   FIGMA_TOKEN="your_token" node scripts/extract-all-icons-from-figma.mjs
   ```

3. **Wait for Download**
   - Script fetches all 84 icons from Figma
   - Saves to `/public/assets/`
   - Reports success/failures

4. **Verify & Test**
   ```bash
   npm run storybook
   # Go to: http://localhost:6006/?path=/story/icons
   ```

5. **Commit**
   ```bash
   git add public/assets/
   git commit -m "feat: extract exact SVG designs from Figma API (84 icons)"
   git push
   ```

---

## 🥉 PATH 3: MANUAL - Paste SVG Content

If you have raw SVG content from Figma (copy-pasted):

1. **Create SVG Data File**
   ```bash
   # Create a JSON with all 84 icon definitions
   cat > /tmp/icon-svgs.json << 'EOF'
   {
     "arrow-forward-24": "<svg>...</svg>",
     "arrow-forward-32": "<svg>...</svg>",
     "arrow-back-24": "<svg>...</svg>",
     ...
   }
   EOF
   ```

2. **Import SVG Data**
   ```bash
   node scripts/import-svg-data.mjs /tmp/icon-svgs.json
   ```

3. **Verify & Commit**
   ```bash
   npm run storybook
   git add public/assets/
   git commit -m "feat: import exact SVG designs"
   git push
   ```

---

## ✅ VERIFICATION CHECKLIST

After choosing any path above:

- [ ] Run Storybook: `npm run storybook`
- [ ] Open: http://localhost:6006/?path=/story/icons
- [ ] Select: "All Icons" story
- [ ] Compare 5-10 icons visually to Figma original
- [ ] Icons should be **pixel-perfect**, not generic approximations
- [ ] All 5 sizes (16, 20, 24, 32, 48px) look correct
- [ ] Build passes: `npm run check && npm run build-storybook`

### Expected vs Actual Example

**Before (WRONG):**
```
home-24.svg: simple generic house outline
```

**After (CORRECT):**
```
home-24.svg: exact pixel-perfect house design from Figma with precise stroke weights, curves, and positioning
```

---

## 🆘 TROUBLESHOOTING

### "Plugin won't export all 84 - only a few"
- Select the parent frame/group containing all 84 icons first
- Then run the export plugin

### "SVG files are still wrong/generic"
- Make sure you're exporting from the correct Figma file
- Verify the file name is: "-Next-Gen--Icons---Illustrations"

### "Figma API token not working"
- Verify token is valid: https://www.figma.com/developers/api#access-tokens
- Check token doesn't have spaces
- Make sure it's a "PERSONAL access token", not OAuth token

### "npm run storybook crashes"
- Try: `npm run build-storybook`
- Check for any SVG syntax errors:  `npm run check`

---

## 📝 RECOMMENDED: Use PATH 1 (Plugin)

**Why?**
- ✓ Fastest (5 minutes)
- ✓ No API token needed
- ✓ Visual preview before export
- ✓ Can select specific icons to export
- ✓ Guaranteed exact fidelity

---

## Next Steps After Extraction

1. **Verify in Storybook**
   ```bash
   npm run storybook
   # Visit: http://localhost:6006/?path=/story/icons
   ```

2. **Run Build Check**
   ```bash
   npm run check && npm run build-storybook
   ```

3. **Commit to NextGen Repo**
   ```bash
   git add public/assets/
   git add src/components/icons/
   git commit -m "feat: replace generic SVG approximations with exact Figma designs

   - Extracted 84 icons as pixel-perfect SVG reproductions
   - 5 size variants each (16, 20, 24, 32, 48px)
   - All icons now match Figma designs exactly
   - Visual verification complete in Storybook"
   git push origin nextgen-design-system
   ```

4. **Deploy/Publish**
   ```bash
   npm run build-storybook
   # Push Storybook static build or
   # Deploy SWA with all updated assets
   ```

---

## 💡 If You Need Help

Share:
1. **Screenshot** of Figma file showing all 84 icons
2. **Error message** if process fails
3. **Sample icon SVG** so I can verify format

Then I can:
- Provide exact node IDs for API extraction
- Help troubleshoot plugin export
- Verify SVG content is correct Figma format
