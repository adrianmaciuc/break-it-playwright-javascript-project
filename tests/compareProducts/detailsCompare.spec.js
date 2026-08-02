import { test, expect } from "@playwright/test";

test("Compare Products > Details Compare", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/women/tops-women.html");

  const product1Name = "Breathe-Easy Tank";
  const product2Name = "Antonia Racer Tank";

  // Add Breathe-Easy Tank to compare
  const product1Item = page.locator('.product-item').filter({ has: page.getByText(product1Name) });
  await product1Item.hover();
  await page.waitForTimeout(1000);
  await product1Item.getByTitle("Add to Compare").click();
  await page.waitForTimeout(500);

  // Add Antonia Racer Tank to compare
  const product2Item = page.locator('.product-item').filter({ has: page.getByText(product2Name) });
  await product2Item.hover();
  await page.waitForTimeout(1000);
  await product2Item.getByTitle("Add to Compare").click();
  await page.waitForTimeout(500);

  // Verify Compare Products link appears
  const compareLink = page.getByTitle("Compare Products");
  await expect(compareLink).toBeVisible();
  await expect(compareLink).toContainText("2");

  // Access compare products link
  await compareLink.click();
  await page.waitForLoadState("networkidle");

  // Verify items have the same details as when added to compare
  const itemsOnComparePage = await page.locator(".product-item-name").allTextContents();
  await expect(itemsOnComparePage).toContain(product1Name);
  await expect(itemsOnComparePage).toContain(product2Name);
});
