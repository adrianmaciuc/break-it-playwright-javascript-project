// @ts-check
const { test, expect } = require("@playwright/test");

test("Six items displayed at hot sellers", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  const productItems = (await page.$$('//li[@class="product-item"]')).length;
  expect(productItems).toBe(6);
});

test("Item redirects correctly on home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  const productItems = await page.$$('//li[@class="product-item"]');
  const priceItems = await page.locator(".price").allTextContents();
  const nameItems = await page.locator(".product-item-link").allInnerTexts();

  for (let i = 0; i < productItems.length; i++) {
    // Re-fetch the elements inside the loop to ensure they are still attached to the DOM
    const updatedProductItems = await page.$$('//li[@class="product-item"]');

    // Go to item`s page
    await updatedProductItems[i].click();

    // get the name of the item
    const nameItemsPage = await page
      .locator("//span[@class='base']")
      .innerText();

    // get the price of the item
    const priceItemPage = await page
      .locator(".price-wrapper")
      .first()
      .innerText();

    expect(nameItemsPage).toBe(nameItems[i]);
    expect(priceItemPage).toBe(priceItems[i]);

    await page.goto("https://magento.softwaretestingboard.com/");
  }
});
