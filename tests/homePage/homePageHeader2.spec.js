import { test, expect } from '@playwright/test';

const HomePageUrl = 'https://magento.softwaretestingboard.com/';

test('Search suggestion in header', async ({ page }) => {
  const inputSelector = '#search';

  await page.goto(HomePageUrl);
  await expect(page).toHaveTitle('Home Page');

  await page
    .locator(inputSelector)
    .pressSequentially('jackets', { delay: 100 });
  await Promise.resolve(
    page.waitForResponse(
      (resp) =>
        resp.url().includes('/search/ajax/suggest') && resp.status() === 200
    )
  );

  const parentLocator = page.locator('#search_autocomplete');
  const childLocator = parentLocator.locator('[role="option"]');

  const lenghtEl = await childLocator.count();
  expect(lenghtEl).toEqual(8);

  for (let i = 0; i < lenghtEl; i++) {
    await expect(childLocator.nth(i)).toContainText('jacket', {
      ignoreCase: true,
    });
  }
});

test('Logo click redirect home page', async ({ page }) => {
  await page.goto(HomePageUrl);
  const logo = page.getByLabel('store logo');
  await logo.click();
  await page.waitForURL(HomePageUrl);
  expect(page.url()).toEqual(HomePageUrl);
});

//test is skiiped because it is wrong, it's doing the correct action, just for learning purpose
test.skip('Click on cart is empty - wrong', async ({ page }) => {
  await page.goto(HomePageUrl);

  const cartLinkSelector = '[data-block="minicart"] .action.showcart';
  await page.locator(cartLinkSelector).click();

  await expect(page.locator('#ui-id-1')).toBeVisible();
});

// the correct version
test('Click on cart is empty', async ({ page }) => {
  await page.goto(HomePageUrl);

  // Capture the cart link element
  const cartLinkSelector = '[data-block="minicart"] .action.showcart';
  const cartLink = await page.$(cartLinkSelector);

  // Prevent the default click behavior
  await page.evaluate((cartLink) => {
    cartLink.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }, cartLink);

  await page.waitForSelector(cartLinkSelector, {
    visible: true,
    timeout: 5000,
  });
  await page.waitForTimeout(1000);
  // Trigger the click event manually
  await cartLink.click();

  // Wait for the cart modal to be visible
  const cartModalSelector = '.ui-dialog-content #minicart-content-wrapper';
  await page.waitForSelector(cartModalSelector, {
    visible: true,
    timeout: 5000,
  });

  const cartInfoBlock = '#minicart-content-wrapper';
  await page.waitForSelector(cartInfoBlock);
  await expect(page.locator(cartInfoBlock)).toContainText(
    'You have no items in your shopping cart.'
  );
});

test('Search functionality with result', async ({ page }) => {
  await page.goto(HomePageUrl);
  const inputSelector = '#search';
  await page.locator(inputSelector).fill('jackets');

  await page.keyboard.press('Enter');
  const listItem = '[class="item product product-item"]';
  await page.waitForSelector(listItem, {
    visible: true,
    timeout: 5000,
  });
  await expect(page.locator(listItem)).toHaveCount(1);
  const cardText = (
    await page.locator('[class="product name product-item-name"]>a').innerText()
  ).trim();

  await expect(cardText).toEqual('Jade Yoga Jacket');
});
