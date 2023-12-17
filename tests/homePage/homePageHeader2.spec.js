import { test, expect } from "@playwright/test";

const HomePageUrl = "https://magento.softwaretestingboard.com/";

test("Search suggestion in header", async ({ page }) => {
  await page.goto(HomePageUrl);
  await expect(page).toHaveTitle("Home Page");

  await page.getByTestId("search").pressSequentially("jackets", { delay: 100 });
  await page.waitForTimeout(1000);

  const parentLocator = page.getByTestId("search_autocomplete");
  const childLocator = parentLocator.locator('[role="option"]');

  const lenghtEl = await childLocator.count();
  await expect(lenghtEl).toEqual(8);

  for (let i = 0; i < lenghtEl; i++) {
    await expect(childLocator.nth(i)).toContainText("jacket", {
      ignoreCase: true,
    });
  }
});

test("Logo click redirect home page", async ({ page }) => {
  await page.goto(HomePageUrl);
  await page.getByLabel("store logo").click();
  expect(page.url()).toEqual(HomePageUrl);
});

test("Click on cart is empty", async ({ page }) => {
  await page.goto(HomePageUrl);

  await page.waitForTimeout(1000);

  await page.locator('[data-block="minicart"] .action.showcart').click();
  await expect(page.getByTestId("minicart-content-wrapper")).toContainText(
    "You have no items in your shopping cart."
  );
});

test("Search functionality with result", async ({ page }) => {
  await page.goto(HomePageUrl);
  await page.getByTestId("search").fill("jackets");

  await page.keyboard.press("Enter");
  const listItem = await page.locator(".product-item");
  await expect(listItem).toHaveCount(1);

  const cardText = (
    await page.locator('[class="product name product-item-name"]>a').innerText()
  ).trim();

  await expect(cardText).toEqual("Jade Yoga Jacket");
});
