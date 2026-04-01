import { test } from '@playwright/test';

/**
 * Visual Regression Tests
 * 
 * Tests icon-heavy components and critical user-facing elements.
 * Snapshots stored in tests/visual-snapshots/
 * 
 * Add new tests for each story that needs visual validation:
 * - Icon components (all states)
 * - State matrices (all variants × sizes × states)
 * - Critical layouts (TopBar, BottomNav)
 */

// Test TopBar component with all icons
test.describe('TopBar Icons', () => {
  test('TopBar - Slim mode with all icons', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-topbar--slim&viewMode=story');
    await page.waitForTimeout(500); // Wait for icons to render
    await expect(page).toHaveScreenshot('topbar-slim-icons.png');
  });

  test('TopBar - Expanded mode with all icons', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-topbar--expanded&viewMode=story');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('topbar-expanded-icons.png');
  });
});

// Test BottomNav component
test.describe('BottomNav Icons', () => {
  test('BottomNav - Home active', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-bottomnav--home-active&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('bottomnav-home-active.png');
  });

  test('BottomNav - Accounts active', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-bottomnav--accounts-active&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('bottomnav-accounts-active.png');
  });

  test('BottomNav - Marketplace active', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-bottomnav--marketplace-active&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('bottomnav-marketplace-active.png');
  });
});

// Test Alert component
test.describe('Alert Icons', () => {
  test('Alert - Success with icon', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-alert--success&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('alert-success-icon.png');
  });

  test('Alert - Warning with icon', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-alert--warning&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('alert-warning-icon.png');
  });

  test('Alert - Danger with icon', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-alert--danger&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('alert-danger-icon.png');
  });
});

// Test Radio component
test.describe('Radio Icons', () => {
  test('RadioButton - Selected state', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-radiobutton--selected&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('radio-selected.png');
  });

  test('RadioButton - Unselected state', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-radiobutton--default&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('radio-unselected.png');
  });
});

// Test Chip component
test.describe('Chip Icons', () => {
  test('Chip - With left checkmark', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-chip--with-left-icon&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('chip-left-icon.png');
  });

  test('Chip - With right heart', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-chip--with-right-icon&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('chip-right-icon.png');
  });

  test('Chip - With both icons', async ({ page }) => {
    await page.goto('/iframe.html?id=nextgen-chip--with-both-icons&viewMode=story');
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('chip-both-icons.png');
  });
});

/**
 * ADD MORE TESTS FOR:
 * - Button state matrix (variant × size × state)
 * - Input states (focus/blur/valid/error)
 * - Badge variants
 * - Card variants
 * - Checkbox states
 * 
 * Pattern: 
 * test('ComponentName - [Scenario]', async ({ page }) => {
 *   await page.goto('/iframe.html?id=nextgen-componentname--storyname&viewMode=story');
 *   await expect(page).toHaveScreenshot('descriptive-name.png');
 * });
 */
