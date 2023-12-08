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

  // Enter "pants" and get sugestions
  await page
    .getByPlaceholder(searchBar)
    .pressSequentially("pants", { delay: 300 });
  await expect(page.locator(elementsList)).toBeVisible();
  const sugestionList = await page.locator(searchItems).all();

  // Get sugestions
  let sugestions = [];
  for (let sugestion of sugestionList) {
    sugestions.push(await sugestion.innerText());
  }

  await expect(sugestions).toContain("pants for women");

  const sugestionAmount = await page
    .locator(`#qs-option-${sugestions.indexOf("pants for women")}`)
    .locator(amount)
    .innerText();
  await expect(sugestionAmount).toBe("25");
});

test("Search in header for tees for man", async ({ page }) => {
  await page.goto(homePageUrl);

  // Enter "tee" and click on desired sugestion
  await page
    .getByPlaceholder(searchBar)
    .pressSequentially("tee", { delay: 300 });

  await page.locator(searchItems).getByText("tee for man").click();
  await page.waitForTimeout(1000);

  await expect(await page.locator(products)).toHaveCount(12);

  // Get number of pages
  const pagesCount = await page
    .locator(pagination)
    .first()
    .locator(".item")
    .locator(".page")
    .all();
  await expect(pagesCount.length).toBe(4);
});

test("Search in header for tees", async ({ page }) => {
  await page.goto(homePageUrl);

  // Enter "tee" and click on desired sugestion
  await page
    .getByPlaceholder(searchBar)
    .pressSequentially("tee", { delay: 300 });

  await page.locator(searchItems).getByText("tees").first().click();
  await page.waitForTimeout(1000);

  await expect((await page.locator(products).all()).length).toBe(3);

  await expect(await page.locator(pagination)).toHaveCount(0);
});
