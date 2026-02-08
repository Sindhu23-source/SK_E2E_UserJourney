import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  cartItems: Locator;
  continueShoppingBtn: Locator;
  checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.continueShoppingBtn = page.locator('#continue-shopping');
    this.checkoutBtn = page.locator('#checkout');
  }

  async removeFirstItem() {
    const removeBtn = this.page.locator('button[id^="remove-"]').first();
    await expect(removeBtn).toBeVisible();
    await removeBtn.click();
  }

  async proceedToCheckout() {
    await expect(this.checkoutBtn).toBeVisible();
    await this.checkoutBtn.click();
  }
}
