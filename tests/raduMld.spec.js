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
  expect(numberOfProducts).toBe(6);
});


test("Select random products from home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  const numberOfProducts = await page.locator(".product-item").all();
  const randomProduct = numberOfProducts[Math.floor(Math.random() * numberOfProducts.length)];
  const pageTitles = await page.locator(".product-item-link").allInnerTexts();
  await randomProduct.click();
  const pageTitle = await page.locator(".product-info-main .base").innerText();
  expect(pageTitles).toContain(pageTitle);
});
