import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { ProductDetails } from "../../pages/product.details";

test("Six items displayed at hot sellers", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  expect(homePage.hotSellersProducts()).toHaveCount(6);
});

test("Item redirects correctly on home page", async ({ page }) => {
  const homePage = new HomePage(page);
  const productDetails = new ProductDetails(page);

  await homePage.navigateToHomePage();
  const randomNumber = Math.floor(Math.random() * 6);
  const productName = (
    await homePage
      .hotSellersProducts()
      .locator(`nth=${randomNumber}`)
      .innerText()
  ).split("\n")[0];
  await homePage.hotSellersProducts().locator(`nth=${randomNumber}`).click();
  expect(productName).toContain(await productDetails.productName().innerText());
});
