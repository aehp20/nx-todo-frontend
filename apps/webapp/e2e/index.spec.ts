import { expect, test } from '@playwright/test';

test('has nav bar title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Todos' })).toBeVisible();
});
