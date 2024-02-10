import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";
import { ProductDetails } from "../../pages/product.details";
import { getRandomNumber } from "../../helpers/utils";

test("Six items displayed at hot sellers", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await expect(homePage.hotSellersProducts()).toHaveCount(6);
});

test("Item redirects correctly on home page", async ({ page }) => {
  const homePage = new HomePage(page);
  const productDetails = new ProductDetails(page);

  await homePage.navigateToHomePage();
  const randomNumber = await getRandomNumber(
    await homePage.getNumberOfHotSellers()
  );

  const productName = await homePage.getNameOfHotSeller(randomNumber);
  await homePage.clickOnHotSellerProduct(randomNumber);
  const productName2 = await productDetails.getProductName();
  expect(productName).toContain(productName2);
});
