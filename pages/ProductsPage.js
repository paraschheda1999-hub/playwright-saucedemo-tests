

class ProductsPage {
    constructor(page) {
      this.page = page;
      this.inventoryItems = page.locator('.inventory_item');
      this.shoppingCartBadge = page.locator('.shopping_cart_badge');
      this.productSortContainer = page.locator('[data-test="product-sort-container"]');
    }

    
    async getProductCount() {
        return await this.inventoryItems.count();
    }
  
    async addProduct(index) {
        await this.page.locator('.inventory_item button').nth(index).click();
    }

    async removeProduct(index) {
        await this.page.locator('.inventory_item button').nth(index).click();
    }

    async getBadge() {
        return await this.shoppingCartBadge.textContent();
    }
  }
  
  module.exports = ProductsPage;  