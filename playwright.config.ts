
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: [['html', { open: 'never' }]],
  globalTimeout: 1800000,
  grepInvert: /@regression/,
  globalSetup: 'globalSetup.ts',
  globalTeardown: 'globalTearDown.ts',
  use: {
    trace: 'on',
    baseURL: 'https://demoqa.com/',
  },
  projects: [


  {
    name: 'setup',
    testMatch: '**/setup/*.config.ts',
    use: {
      viewport: {
        height: 1600,
        width: 700
      }
    }
  },
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    dependencies: ['setup'],
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
],


});
