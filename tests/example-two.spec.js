// @ts-check
const { test, expect } = require('@playwright/test');

test('has title two (with screenshot) @titleTest', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.screenshot({path: "./screenshots/has_title_two.png"});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link two @getStartedLink @BeforeTesteryRun', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
