import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('test', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
  await expect(page).toHaveURL(/drag-drop-range-sliders-demo/); 
  await page.waitForTimeout(3000);
  await page.locator('#slider3').getByRole('slider').fill('95');
  await expect(page.locator("//output[@id='rangeSuccess']")).toContainText(['95']);
});