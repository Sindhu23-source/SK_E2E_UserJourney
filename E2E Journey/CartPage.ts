import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly removeButtons: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.removeButtons = page.locator('button[id^="remove-"]');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.checkoutButton = page.locator('#checkout');
  }
}
