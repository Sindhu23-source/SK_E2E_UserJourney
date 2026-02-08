import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { ProductPage } from './ProductPage';
import { CartPage } from './CartPage';

test('add products to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  await inventoryPage.openProduct(0);
  await productPage.addToCart();
  await inventoryPage.goBackToProducts();

  await inventoryPage.openProduct(1);
  await productPage.addToCart();
  await productPage.viewCart();

  await expect(cartPage.removeButtons).toHaveCount(2);
  await expect(cartPage.continueShoppingButton).toBeVisible();
  await expect(cartPage.checkoutButton).toBeVisible();
});
