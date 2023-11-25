<<<<<<< HEAD
// @ts-check
=======
>>>>>>> e2a7366 (updated import and comments)
import { test, expect } from "@playwright/test";

test("Six items displayed at hot sellers", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  const productItems = await page.$$(".product-item");
  expect(productItems).toHaveLength(6);
});

test("Item redirects correctly on home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  const productItems = await page.$$(".product-item");
  const priceItems = await page.locator(".price").allTextContents();
  const nameItems = await page.locator(".product-item-link").allInnerTexts();

  for (let item in productItems) {
    // Re-fetch the elements inside the loop to ensure they are still attached to the DOM
    const updatedProductItems = await page.$$(".product-item");

    // Go to item`s page
    await updatedProductItems[item].click();

    // Get the name of the item
    const nameItemsPage = await page.locator("span.base").innerText();

    // Get the price of the item
    const priceItemPage = await page.locator(".product-info-main .price");

    expect(nameItemsPage).toContain(nameItems[item]);
    expect(priceItemPage).toHaveText(priceItems[item]);

    await page.goto("https://magento.softwaretestingboard.com/");
  }
});
