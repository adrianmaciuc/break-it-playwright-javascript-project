// @ts-check
import { test, expect } from "@playwright/test";

test("Check if the user is on the Home Page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await expect(page).toHaveURL("https://magento.softwaretestingboard.com/");
  await expect(page).toHaveTitle("Home Page");
});

test("Count products on the home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  const numberOfProducts = await page.locator(".product-item").count();
  console.log("Number of products on the home page is:", numberOfProducts);
  expect(numberOfProducts).toBe(6);
});


test("Select random products from home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  const numberOfProducts = await page.locator(".product-item").all();
  const randomProduct = numberOfProducts[Math.floor(Math.random() * numberOfProducts.length)];
  const pageTitles = await page.locator(".product-item-link").allInnerTexts();
  await randomProduct.click();

  const pageTitle = await page.locator(".product-info-main .base").innerText();
  let matchFound = false;
  for (let i = 0; i < pageTitles.length; i++) {
    if (pageTitle === pageTitles[i]) {
      console.log(`The home title name ${pageTitles[i]} is the same as product title name ${pageTitle}`);
      matchFound = true;
      break;
    }
  }
  if (!matchFound) {
  console.log(`The home title name is not the same as product title name`);
  }
});
