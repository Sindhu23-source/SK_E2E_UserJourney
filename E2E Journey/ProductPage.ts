import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  private page: Page;
  private addToCartBtn: Locator;
  private cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator('button[id^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await expect(this.addToCartBtn).toBeVisible();
    await this.addToCartBtn.first().click();
  }

  async openCart() {
    await expect(this.cartIcon).toBeVisible();
    await this.cartIcon.click();
  }
}
