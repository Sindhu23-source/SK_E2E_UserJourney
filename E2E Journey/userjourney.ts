import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart flow', () => {

  test('user can add multiple products to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.openProductByIndex(0);
    await productPage.addProductToCart();
    await inventoryPage.returnToInventory();

    await inventoryPage.openProductByIndex(1);
    await productPage.addProductToCart();
    await productPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(2);
    await expect(cartPage.checkoutButton).toBeVisible();
    await expect(cartPage.continueShoppingButton).toBeVisible();
  });

});
