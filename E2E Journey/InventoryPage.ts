import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private readonly backButton: Locator;
  private readonly productNames: Locator;

  constructor(private readonly page: Page) {
    this.backButton = page.locator('#back-to-products');
    this.productNames = page.locator('.inventory_item_name');
  }

  async openProduct(index: number) {
    await this.productNames.nth(index).click();
  }

  async goBackToProducts() {
    await this.backButton.click();
  }
}
