import { test, expect } from "@playwright/test";

test("Verify that has the correct title", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await expect(page).toHaveTitle("Home Page");
});
