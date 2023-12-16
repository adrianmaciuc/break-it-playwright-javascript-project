import { test, expect } from "@playwright/test";

test ("Test redirect to what is new page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-3").click();
    const pageURL = page.url();
    await expect(pageURL).toContain("/what-is-new");
});

test ("Test redirect to women page", async ({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-4").click();
    const pageURL = page.url();
    await expect(pageURL).toContain("/women");
});

test ("Test redirect to Men page", async ({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-5").click();
    const pageURL = page.url();
    await expect(pageURL).toContain("/men");
});

test ("Test redirect to Gear page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-6");
    const pageURL = page.url();
    await expect(pageURL).toContain("/gear");
})

test ("Test redirect to Training page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-7").click();
    const pageURL = page.url();
    await expect(pageURL).toContain("/training");
})

test ("Test redirect to Sale page", async({page}) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("#ui-id-8").click();
    const pageURL = page.url();
    await expect(pageURL).toContain("/sale");
})