import { test, expect } from "@playwright/test";

test("Expert compare", async ({ page }) => {
  const gearPage = "https://magento.softwaretestingboard.com/gear/watches.html";
  const watches = ".product-item";
  const addToCompareButton = "Add to Compare";
  const name = ".product-item-name";
  const addToCompareMessage = "Compare Products";
  const compareMessage = ".message-success.success.message";
  const price = ".price-box.price-final_price";
  const id = "data-product-id";

  await page.goto(gearPage);
  const allWatches = await page.locator(watches).all();

  // Get random watch
  const randomWatchIndex = Math.floor(Math.random() * allWatches.length);
  const randomWatch = allWatches[randomWatchIndex];
  await randomWatch.hover();
  await page.waitForTimeout(1000);

  // Get watch name and id
  const watchName = await randomWatch.locator(name).innerText();
  const watchPrice = await randomWatch.locator(price);
  const watchId = await watchPrice.getAttribute(id);

  await page.waitForTimeout(1000);
  await randomWatch.getByTitle(addToCompareButton).click();

  // Intercept call
  const response = await page.waitForResponse("**/customer/section/load/*");
  const responseBody = await response.json();
  await expect(responseBody["compare-products"]["items"][0]["id"]).toBe(
    watchId
  );

  // Check comparasion list message
  await expect(page.getByTitle(addToCompareMessage)).toBeVisible();
  const message = await page.locator(compareMessage).innerText();
  await expect(message).toContain(
    `You added product ${watchName} to the comparison list.`
  );
});
