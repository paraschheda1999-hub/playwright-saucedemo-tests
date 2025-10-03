const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [
    ['html'],
    ['list']
  ],
});
