import { test, expect } from '@playwright/test';

test('Simple Form Demo shows entered message', async ({ page }) => {
  const message = process.env.TEST_MESSAGE || 'Welcome to LambdaTest';

  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click("//*[contains(text(),'Simple Form Demo')]");
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL(/simple-form-demo/); 
  await page.getByPlaceholder('Please enter your Message').fill(message);      
  await page.getByRole('button', { name: 'Get Checked Value' }).click();      
  const yourMessagePanel = page.locator('#message');                         
  await expect(yourMessagePanel).toContainText(message);
});