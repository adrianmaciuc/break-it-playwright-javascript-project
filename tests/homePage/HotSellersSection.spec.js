// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  const hotSellers = [
    "Radiant Tee",
    "Breathe-Easy Tank",
    "Argus All-Weather Tank",
    "Hero Hoodie",
    "Fusion Backpack",
    "Push It Messenger Bag",
  ];

  for (const item of hotSellers) {
    await expect(page.getByRole("link", { name: item }).first()).toBeVisible();
  }
});
