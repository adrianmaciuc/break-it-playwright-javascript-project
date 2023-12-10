import { test, expect } from '@playwright/test';
const HomePageUrl = 'https://magento.softwaretestingboard.com/';

test('Navigate to top tees', async ({ page }) => {
  await page.goto(HomePageUrl);
  await page.locator('#ui-id-5').hover();
  await page.locator('#ui-id-17').hover();
  await page.locator('#ui-id-21').click();

  await expect(page.url()).toEqual(
    'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html'
  );
});

test('Filter top tees by color green and select element', async ({ page }) => {
  await page.goto(
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
});

test('Add item to cart', async ({ page }) => {
  await page.goto(
    'https://magento.softwaretestingboard.com/atomic-endurance-running-tee-v-neck.html'
  );
  await page.getByLabel('XL').click();
  await page.getByLabel('Green').click();
  await page.locator('#qty').fill('3');

  await page.getByTitle('Add to Cart').click();
  const response = await page.waitForResponse('**/customer/section/load/*');
  const respBody = await response.json();
  const productId = respBody.cart.items[0].product_id;

  await expect(productId).toEqual('494');
});
