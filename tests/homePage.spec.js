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


