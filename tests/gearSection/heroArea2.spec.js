import { test, expect } from "@playwright/test";

test("Gear section hero images-1", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/gear.html");
  await page.locator(".block-promo.gear-category-equipment").click();
  await expect(page.url()).toContain("/gear/fitness-equipment.htm");
});

test("Gear section hero images-2", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/gear.html");
  await page.locator(".block-promo.gear-category-watches").click();
  await expect(page.locator(".base")).toHaveText("Watches");
});
