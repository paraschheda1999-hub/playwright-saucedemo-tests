const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const users = require('../test-data/users');

test.describe('Product Catalog & Cart', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.validUser.username, users.validUser.password);
    });
  
    test('TC_PROD_01: Verify all products are displayed', async ({ page }) => {
      const productsPage = new ProductsPage(page);
      const count = await productsPage.getProductCount();
      // Add your assertions herea
      await expect(count).toBe(6);
    });

    test('TC_PROD_02: Add product to cart', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.addProduct(0);
        // Add your assertions here
        await expect(await productsPage.getBadge()).toBe('1');
    });

    test('TC_PROD_03: Remove product from cart', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.addProduct(0);
        await productsPage.removeProduct(0);
        // Add your assertions here
        await expect(await productsPage.getBadge()).toHaveText('0');
    });
});