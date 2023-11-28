const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  await expect(page).toHaveTitle(/Wikipedia/);
});
