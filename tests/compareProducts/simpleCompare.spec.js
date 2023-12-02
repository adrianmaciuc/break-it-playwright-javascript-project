import { test, expect } from "@playwright/test";

test("Simple Compare 2 items", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/gear/bags.html");

  // Function to randomly select a product and remove it from the list
  function selectRandomProduct(itemList) {
    const randomIndex = Math.floor(Math.random() * itemList.length);
    return itemList[randomIndex];
  }

  // Function to hover over the product and click the compare button
  async function hoverAndCompare(product) {
    await product.hover();
    await page.waitForTimeout(1500);
    await product.getByTitle("Add to Compare").click();
  }

  const allProducts = await page.locator(".product-item").all();

  // Select the first product to compare
  const selectedProduct1 = await selectRandomProduct(allProducts);
  const selectedProduct1Details = await selectedProduct1
    .locator(".product-item-name")
    .textContent();
  await hoverAndCompare(selectedProduct1);

  // Select the second product to compare
  const selectedProduct2 = await selectRandomProduct(allProducts);
  const selectedProduct2Details = await selectedProduct2
    .locator(".product-item-name")
    .textContent();
  await hoverAndCompare(selectedProduct2);

  // check if products are added to compare
  await expect(page.getByTitle("Compare Products")).toBeVisible();
  await expect(page.getByTitle("Compare Products")).toContainText("2");
  await page.getByTitle("Compare Products").click();

  // verify that items in compare have the same details as initial selection
  const itemsInComparePage = await page
    .locator(".product-item-name")
    .allTextContents();
  await expect(itemsInComparePage).toContain(selectedProduct1Details);
  await expect(itemsInComparePage).toContain(selectedProduct2Details);
});
