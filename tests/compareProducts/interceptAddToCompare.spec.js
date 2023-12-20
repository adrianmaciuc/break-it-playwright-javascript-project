import { test, expect } from "@playwright/test";

test("intercept", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/gear/watches.html");

  await page.locator('[class="item product product-item"]').first().hover();
  await page.waitForTimeout(1000);

  await page.getByTitle("Add to Compare").first().click();
  const response = await page.waitForResponse("**/customer/section/load/*");

  const responseAsObject = await response.json();
  const ItemId = responseAsObject["compare-products"].items[0].id;
  await expect(ItemId).toBe("44");

  await page.waitForSelector('[data-ui-id="message-success"]');
  await expect(page.locator('[data-ui-id="message-success"]')).toContainText(
    "You added product Didi Sport Watch to the comparison list"
  );
});
