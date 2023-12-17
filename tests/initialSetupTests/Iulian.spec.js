// @ts-check
const { test, expect } = require("@playwright/test");

test("coolors.co has the correct title", async ({ page }) => {
  // Click the get started link.
  await page.goto("https://coolors.co/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    "Coolors - The super fast color palettes generator!"
  );
});
