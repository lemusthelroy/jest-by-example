import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/planet/1');
  const title = page.locator('#title');
  await expect(title).toHaveText('Planet Information');
  const element = await page.waitForSelector('text=Tatooine', { timeout: 5000 });
  expect(element).toBeDefined();
});
