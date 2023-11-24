// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');


test('Check if the user is on the Home Page', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/')
    //await expect(page).toHaveURL('https://magento.softwaretestingboard.com/') --> 1st choice
    //await expect(page).toHaveTitle("Home Page"); --> 2nd choice

    //3rd choice(I want to make sure that logo is there and it's visible)
    //const logoImg = await page.locator('//body/div[@class="page-wrapper"]/header/div[@class="header content"]/a/img');
    //console.log('Home Page is visible: ', logoImg)

    // Get the text content of the entire page
    const pageTextContent = await page.textContent('html');

    // Check if the page contains the specified text
    const containHomePage = pageTextContent.includes('Home Page');
    console.log('Home Page is visible: ', containHomePage)

    //I did all this only for learning, but the perfect way is to check Url and Title, in this way the user confirm that is on the Home Page
});

test('count products on the home page', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/')

    // Count the number of elements with the class 'product-item'
    const numberOfProducts = await page.locator('.product-item').evaluateAll(products => products.length);
    console.log('Number of products on the home page is:', numberOfProducts);

    // Expect the number of products to be greater than 0
    expect(numberOfProducts).toBeGreaterThanOrEqual(6)
});