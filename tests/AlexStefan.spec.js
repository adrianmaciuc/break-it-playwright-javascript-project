import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.ajokeaday.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Joke of the Day/);
});
