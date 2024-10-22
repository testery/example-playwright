// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("group 1 @test", () => {
  test.beforeEach( async ({ page }) => { 
    await page.goto('https://playwright.dev/');
  })

  test('has title two (with screenshot) @titleTest', async ({ page }) => {
  
    await page.screenshot({path: "./screenshots/has_title_two.png"});
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
})
