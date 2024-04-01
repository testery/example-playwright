// @ts-check
const { test, expect } = require('@playwright/test');

test('flaky test', async ({ page }) => {
  Math.random() > 0.7 ? expect(1).toBe(1) : expect(1).toBe(2);
});

test('solid test', async ({ page }) => {
  expect(1).toBe(1);
});
