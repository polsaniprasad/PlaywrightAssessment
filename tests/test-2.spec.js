import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
  await page.waitForTimeout(3000);
  await page.locator('#slider3').getByRole('slider').fill('95');
  await page.waitForTimeout(3000);
  await page.getByText('95').click();
});