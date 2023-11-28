const { test, expect } = require('@playwright/test');

test('Verify if only four lumas items are listed on whats new page', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/what-is-new.html');
  await expect(page).toHaveURL(/what-is-new/);
  const products = page.locator(".product-image-photo");
  await expect(products).toHaveCount(4);
});

test('Verify if by Clicking on  Stellar Solar Jacket the page is redirect to the clicked product', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/what-is-new.html');
  await expect(page).toHaveURL(/what-is-new/);
  await page.getByText('Stellar Solar Jacket').click()
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/stellar-solar-jacket.html');
});
