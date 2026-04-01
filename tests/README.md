# Visual Regression Tests

This directory contains Playwright-based visual regression tests for icon-heavy components and critical UI elements.

## Structure

- `visual/icons.spec.ts` — Visual regression tests for TopBar, BottomNav, Alert, Radio, and Chip components
- `visual-snapshots/` — Baseline snapshots (tracked in git) and actual test results (CI only)

## Running Tests Locally

### Prerequisites

Start Storybook in another terminal:
```bash
npm run storybook
```

### Run Tests

```bash
# Run all visual tests
npm run test:visual

# Update snapshots (after design changes)
npm run test:visual:update

# Run specific test
npx playwright test tests/visual/icons.spec.ts --grep "TopBar"
```

### View Test Report

```bash
npx playwright show-report
```

## Adding New Tests

1. Identify the Storybook story ID (check URL when viewing story)
2. Add test to appropriate `.spec.ts` file following the pattern:

```typescript
test('ComponentName - Scenario', async ({ page }) => {
  await page.goto('/iframe.html?id=nextgen-componentname--storyname&viewMode=story');
  await expect(page).toHaveScreenshot('descriptive-name.png');
});
```

3. Run tests locally to generate baseline snapshots:
   ```bash
   npm run test:visual:update
   ```

4. Commit snapshots to git:
   ```bash
   git add tests/visual-snapshots/
   git commit -m "test: add visual regression for ComponentName"
   ```

## CI Integration

GitHub Actions workflow (`.github/workflows/visual-regression.yml`) automatically:
1. Builds Storybook
2. Serves it locally
3. Runs visual tests against current and baseline snapshots
4. Comments on PRs with results
5. Uploads diff artifacts for review

## Baseline Snapshots

Snapshots are stored in version control (`visual-snapshots/chromium/`) so all contributors test against the same baselines.

When designs change:
1. Update component or Storybook story
2. Run `npm run test:visual:update`
3. Review changes: `npx playwright show-report`
4. Commit updated snapshots

## Troubleshooting

**Tests fail locally but pass in CI:**
- Ensure you're using the same Playwright version
- Verify Storybook is running and accessible at `http://localhost:6006`
- Run `npx playwright install --with-deps`

**Snapshots don't match Figma:**
- Use design context from Figma to update component
- Run visual tests locally to regenerate baselines
- Verify with `npm run validate:design`

**Screenshot is blank or incorrect:**
- Add `await page.waitForTimeout(500)` before screenshot
- Check story ID is correct in page URL
- Verify Storybook story is rendering properly

---

*See AGENTS.md for icon accuracy requirements and visual validation protocol.*
