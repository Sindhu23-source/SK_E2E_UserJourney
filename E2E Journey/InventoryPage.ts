import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private backToProductsBtn: Locator;
  private productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backToProductsBtn = page.locator('#back-to-products');
    this.productList = page.locator('.inventory_item_name');
  }

  async openProductByIndex(index: number) {
    await expect(this.productList).toHaveCountGreaterThan(index);

    await this.productList.nth(index).click();
  }

  async returnToInventory() {
    if (await this.backToProductsBtn.isVisible()) {
      await this.backToProductsBtn.click();
    }
  }
}
