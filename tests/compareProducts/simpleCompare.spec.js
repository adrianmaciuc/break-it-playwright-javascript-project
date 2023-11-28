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
    await product.locator(".action.tocompare").click();
  }

  const parentLocator = await page.locator(
    ".products.list.items.product-items"
  );
  const childElements = await parentLocator
    .locator(".item.product.product-item")
    .all();
  const productsName = [];

  // Select and compare the first product
  const selectedProduct1 = selectRandomProduct(childElements);
  const productName = await selectedProduct1
    .locator(".product-item-link")
    .innerText();
  productsName.push(productName);
  await hoverAndCompare(selectedProduct1);

  // Get the product list after the reload
  await parentLocator.waitFor();
  const childElementsReload = await parentLocator
    .locator(".item.product.product-item")
    .all();

  // Select and compare the second product
  const selectedProduct2 = await selectRandomProduct(childElementsReload);
  const productName2 = await selectedProduct2
    .locator(".product-item-link")
    .innerText();
  productsName.push(productName2);
  await hoverAndCompare(selectedProduct2);

  await page.waitForSelector(
    "//span[@data-bind='text: compareProducts().countCaption']"
  );
  const numberOfProductsCompare = await page
    .locator("//span[@data-bind='text: compareProducts().countCaption']")
    .textContent();
  expect(numberOfProductsCompare).toContain("2");

  // Navigate to the Compare Products page
  await page.locator("//a[@title='Compare Products']").click();

  const listProductsComparePage = await page.locator(".cell.product.info");
  const productsNamePage = await listProductsComparePage
    .locator(".product-item-name")
    .all();

  for (const product of productsNamePage) {
    const productNameText = await product.innerText();
    expect(productsName).toContain(productNameText);
  }
});
