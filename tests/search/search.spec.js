import { test, expect } from "@playwright/test";

const homePageUrl = "https://magento.softwaretestingboard.com/";
const searchBar = "Search entire store here...";
const elementsList = "ul[role='listbox']";
const searchItems = ".qs-option-name";
const amount = ".amount";
const products = ".product-item";
const pagination = ".items.pages-items";

test("Search in header for pants", async ({ page }) => {
  await page.goto(homePageUrl);

  await page
    .getByPlaceholder(searchBar)
    .pressSequentially("pants", { delay: 300 });
  await expect(page.locator(elementsList)).toBeVisible();
  const sugestionList = await page.locator(searchItems).allInnerTexts();

  await expect(sugestionList).toContain("pants for women");

  const optionPantsForWomen = await page
    .getByRole("option", {
      hasText: "pants for women",
    })
    .locator(amount)
    .allInnerTexts();
  await expect(optionPantsForWomen).toContain("25");
});

test("Search in header for tees for man", async ({ page }) => {
  await page.goto(homePageUrl);

  await page
    .getByPlaceholder(searchBar)
    .pressSequentially("tee", { delay: 300 });

  await page.locator(searchItems).getByText("tee for man").click();

  await expect(await page.locator(products)).toHaveCount(12);

  const pagesCount = await page
    .locator(pagination)
    .first()
    .locator(".item .page")
    .all();
  await expect(pagesCount).toHaveLength(4);
});

test("Search in header for tees", async ({ page }) => {
  await page.goto(homePageUrl);

  await page
    .getByPlaceholder(searchBar)
    .pressSequentially("tee", { delay: 300 });

  await page.locator(searchItems).getByText("tees").first().click();
  await page.waitForTimeout(1000);

  await expect(await page.locator(products).all()).toHaveLength(3);
  await expect(await page.locator(pagination)).not.toBeVisible();
});
