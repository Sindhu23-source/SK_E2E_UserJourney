import { Page, Locator } from '@playwright/test';

export class ProductPage {
  private readonly addToCartButton: Locator;
  private readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.addToCartButton = page.locator('button[id^="add-to-cart"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async viewCart() {
    await this.cartLink.click();
  }
}
