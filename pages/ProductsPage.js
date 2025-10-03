

class ProductsPage {
    constructor(page) {
      this.page = page;
      this.inventoryList = page.locator('[data-test="inventory-list"]');
      this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
      this.productSortContainer = page.locator('[data-test="product-sort-container"]');
    }

    
    async getProductCount() {
        return await this.inventoryList.count();
    }
  
    async addProduct() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    }

    async remmoveProduct() {
        await this.page.locator('[data-test="remove-sauce-labs-onesie"]').click();
    }

    async getBadge() {
        await this.shoppingCart.textContent();
    }
  }
  
  module.exports = ProductsPage;  