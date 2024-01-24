import { test, expect } from "@playwright/test";

test("Verify if 4 products are under Hot sellers category", async ({
  page,
}) => {
  await page.goto("https://magento.softwaretestingboard.com/gear.html");
  const products = await page.locator(".product-image-photo").count();
  await expect(products).toBe(4);
});
