import { test, expect } from '@playwright/test';
const HomePageUrl = 'https://magento.softwaretestingboard.com/';

test('Add item to cart', async ({ page }) => {
  await page.goto(HomePageUrl);
  await page.waitForTimeout(1000);
  await page.getByTestId('ui-id-5').hover();
  await page.getByTestId('ui-id-17').hover();
  await page.getByTestId('ui-id-21').click();

  await page.waitForTimeout(1000);
  await expect(page.url()).toEqual(
    'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html'
  );

  await page.getByRole('tab', { name: 'Color' }).click();
  await page.locator('#narrow-by-list [option-id="53"]').click();
  await expect(page.locator('.product-item')).toHaveCount(4);
  await page
    .getByAltText('Atomic Endurance Running Tee (V-neck)-XS-Green')
    .click();

  await expect(page.url()).toEqual(
    'https://magento.softwaretestingboard.com/atomic-endurance-running-tee-v-neck.html'
  );

  const selectOptionsForProduct = async (size, color, quantity) => {
    await page.getByLabel(size).click();
    await page.getByLabel(color).click();
    await page.getByTestId('qty').fill(quantity);
  };

  await selectOptionsForProduct('XL', 'Green', '3');
  await page.getByTitle('Add to Cart').click();
  const response = await page.waitForResponse('**/customer/section/load/*');
  const respBody = await response.json();
  const productId = respBody.cart.items[0].product_id;

  await expect(productId).toEqual('494');
});
