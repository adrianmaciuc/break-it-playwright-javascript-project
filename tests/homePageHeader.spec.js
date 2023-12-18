import { test, expect } from "@playwright/test";

test ("Test redirect to what is new page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-3").click();
    await expect(page.url()).toContain("/what-is-new");
});

test ("Test redirect to women page", async ({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-4").click();
    await expect(page.url()).toContain("/women");
});

test ("Test redirect to Men page", async ({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-5").click();
    await expect(page.url()).toContain("/men");
});

test ("Test redirect to Gear page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-6").click();
    await expect(page.url()).toContain("/gear");
})

test ("Test redirect to Training page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-7").click();
    await expect(page.url()).toContain("/training");
})

test ("Test redirect to Sale page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-8").click();
    await expect(page.url()).toContain("/sale");
})