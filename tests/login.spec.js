const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const users = require('../test-data/users');

test.describe('Login Functionality', () => {
  
  test('TC_LOGIN_01: Valid login with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    
    // Add your assertions here
    await expect(page).toHaveURL(/.*inventory/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  });

  test('TC_LOGIN_02: Invalid login with wrong password', async ({ page }) => {
    // TODO: Implement this test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    // Add your assertions here
    await expect(await loginPage.getErrorMessage()).toHaveText('Username and password do not match');

  });

  test('TC_LOGIN_03: Login with locked out user', async ({ page }) => {
    // TODO: Implement this test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    // Add your assertions here
    await expect(await loginPage.getErrorMessage()).toHaveText('Sorry, this user has been locked out.');

  });

  test('TC_LOGIN_04: Login with empty credentials', async ({ page }) => {
    // TODO: Implement this test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    // Add your assertions here
    await expect(page.locator('[data-test="username"]')).toBeEmpty();
    await expect(page.locator('[data-test="password"]')).toBeEmpty();
    await loginPage.login('','');
    await expect(await loginPage.getErrorMessage()).toHaveText('Username is required');

  });
});
