import { test as setup } from '@playwright/test';

setup('create new database', async ({ }) => {
    if (Math.random() > 0.5) {
        throw new Error('Random failure');
      }
});