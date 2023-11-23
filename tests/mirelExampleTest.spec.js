import { test, expect } from "@playwright/test";

test("Verify that has the correct url", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await expect(page).toHaveURL("https://magento.softwaretestingboard.com/");
});
