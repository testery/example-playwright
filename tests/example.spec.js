// @ts-check
const { test, expect } = require('@playwright/test');

test('has title one @titleTest', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  if (Math.random() > 0.5) {
    throw new Error('Random failure');
  }
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link one @getStartedLink', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  
  if (Math.random() > 0.5) {
    throw new Error('Random failure');
  }
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
