import { test, expect } from '@playwright/test';

test('test', async ({ browser, page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByRole('link', { name: 'Input Form Submit' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(3000);
  
   const company = page.locator('input[name="company"]');
  const validity = await company.evaluate((el) => {
    return {
      valid: el.validity.valid,
      valueMissing: el.validity.valueMissing
    };
  });

expect(validity.valid).toBeFalsy();
 expect(validity.valueMissing).toBeTruthy();

  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Name' }).fill('prasad');
  await page.getByRole('textbox', { name: 'Email*' }).fill('prasad@123.com');
  await page.getByRole('textbox', { name: 'Password*' }).fill('test@123');
  await page.getByRole('textbox', { name: 'Company' }).fill('test');
  await page.getByRole('textbox', { name: 'Website' }).fill('test');
  await page.getByRole('combobox').selectOption('AW');
  await page.getByRole('textbox', { name: 'City', exact: true }).fill('test');
  await page.getByRole('textbox', { name: 'Address 1' }).fill('test');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('tewst');
  await page.getByRole('textbox', { name: 'City* State*' }).fill('test');
  await page.getByRole('textbox', { name: 'Zip Code*' }).fill('12344');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('body').press('Escape');
});