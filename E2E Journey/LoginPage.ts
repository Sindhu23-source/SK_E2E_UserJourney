import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }

  async loginAndValidate(username: string, password: string) {
    await this.login(username, password);
    await expect(this.page).toHaveURL(/inventory/);
  }
}
