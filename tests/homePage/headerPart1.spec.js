//@ts-check
const { test, expect } = require("@playwright/test");

test("Check redirect to what-is-new page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByTestId("ui-id-3").click();
  await expect(page).toHaveURL(/what-is-new/);
});

test("Check redirect to women page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByTestId("ui-id-4").click();
  await expect(page).toHaveURL(/women/);
});
test("Check redirect to men page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByTestId("ui-id-5").click();
  await expect(page).toHaveURL(/men/);
});

test("Check redirect to gear page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByTestId("ui-id-6").click();
  await expect(page).toHaveURL(/gear/);
});

test("Check redirect to training page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByTestId("ui-id-7").click();
  await expect(page).toHaveURL(/training/);
});

test("Check redirect to sale page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByTestId("ui-id-8").click();
  await expect(page).toHaveURL(/sale/);
});
