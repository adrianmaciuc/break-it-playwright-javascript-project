const { test, expect } = require('@playwright/test');

test('Verify if only four lumas items are listed on whats new page', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/what-is-new.html');
  await expect(page).toHaveURL(/what-is-new/);
  await page.waitForSelector('.product-image-photo');
  const productImageElements = await page.$$('.product-image-photo');
  expect(productImageElements.length).toBe(4);
  console.log('Avem 4 produse lumas');
});

test('Verify if I am on the what is new page and I click on the Stellar solar jacket from latest lumas I am redirect to page../stellar-solar-jacket.html.', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/what-is-new.html');
  await expect(page).toHaveURL(/what-is-new/);
  await page.click('text=Stellar Solar Jacket');
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/stellar-solar-jacket.html');
  console.log('Suntem pe pagina stellar-solar-jacket.html');
});
