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
    const childElement = await product.$(".action.tocompare");
    await childElement.click();
  }

  const itemList = await page.$$(".products.list.items.product-items li");
  const productsName = [];

  // Select and compare the first product
  const selectedProduct1 = selectRandomProduct(itemList);
  const productName = await (
    await selectedProduct1.$(".product-item-link")
  ).innerText();
  productsName.push(productName);
  await hoverAndCompare(selectedProduct1);

  // Get the product list after the reload
  const itemListAfterReload = await page.$$(
    ".products.list.items.product-items li"
  );

  // Select and compare the second product
  const selectedProduct2 = selectRandomProduct(itemListAfterReload);
  const productName2 = await (
    await selectedProduct2.$(".product-item-link")
  ).innerText();
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

  const listProductsComparePage = await page.$$(".cell.product.info");

  for (const product of listProductsComparePage) {
    const productNamePage = await product.$(".product-item-name");
    const productNameText = await productNamePage.innerText();
    expect(productsName).toContain(productNameText);
  }
});
