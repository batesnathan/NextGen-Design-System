import { defineConfig, devices } from '@playwright/test';

/**
 * Visual Regression Test Configuration
 * 
 * Targets icon-heavy components and state matrices in Storybook.
 * Snapshots are stored in tests/visual-snapshots/ for git tracking.
 * 
 * Run local tests:
 *   npx playwright test
 * 
 * Update snapshots:
 *   npx playwright test --update-snapshots
 */
export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    baseURL: process.env.STORYBOOK_URL || 'http://localhost:6006',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: undefined, // Storybook server is already running
});
