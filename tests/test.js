import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');

  await page.locator('[data-test="password"]').click();
  
  
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  
});