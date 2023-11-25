// @ts-check
import { test, expect } from '@playwright/test';


test('Check if the user is on the Home Page', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/');
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/');
    await expect(page).toHaveTitle("Home Page"); 
});


test('count products on the home page', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/');
    const numberOfProducts = await page.locator('.product-item').evaluateAll(products => products.length);
    console.log('Number of products on the home page is:', numberOfProducts);
    expect(numberOfProducts).toBe(6)
});

test('Select random products from home page', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/')
  
    const numberOfProducts = await page.$$('.product-item');
    const randomProduct = numberOfProducts[Math.floor(Math.random() * numberOfProducts.length)];
    const randomTitleBeforeClick = await randomProduct.evaluate(product => product.querySelector('.product-item-link').textContent.trim());
    const titleName = randomTitleBeforeClick;
    await randomProduct.click();

  
    const randomTitleAfterRedirect = await page.evaluate(() => document.querySelector('span[data-ui-id="page-title-wrapper"][itemprop="name"]').textContent.trim());
    expect(randomTitleAfterRedirect).toEqual(titleName);
    console.log('The title name is the same:', randomTitleAfterRedirect === randomTitleBeforeClick);
  });
