// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('two tagged tests', {
  tag: '@smoke',
}, () => {
  test.beforeEach( async ({ page }) => { 
    await page.goto('https://playwright.dev/');
  })
  test('one', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('two', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});
