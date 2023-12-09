//@ts-check
const { test, expect } = require("@playwright/test");

test("Check redirect to what-is-new page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "What's New" }).click();
  await expect(page).toHaveURL(/what-is-new/);
});

test("Check redirect to women page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "Women", exact: true }).click();
  await expect(page).toHaveURL(/women/);
});
test("Check redirect to men page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "Men", exact: true }).click();
  await expect(page).toHaveURL(/men/);
});

test("Check redirect to gear page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "Gear", exact: true }).click();
  await expect(page).toHaveURL(/gear/);
});

test("Check redirect to training page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "Training", exact: true }).click();
  await expect(page).toHaveURL(/training/);
});

test("Check redirect to sale page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "Sale", exact: true }).click();
  await expect(page).toHaveURL(/sale/);
});
