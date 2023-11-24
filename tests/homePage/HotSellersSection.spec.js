// @ts-check
const { test, expect } = require("@playwright/test");

test("Six items displayed at hot sellers", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  const productItems = (await page.$$('//li[@class="product-item"]')).length;
  expect(productItems).toBe(6);
});
