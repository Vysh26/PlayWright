import { test, expect } from '@playwright/test';

test('css selector', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // tag selector
  let weblelementText = await page.locator('h1[class="title"]').textContent();

  console.log(weblelementText);

  // id selector #name

  console.log(await page.locator('#name').inputValue());
  await page.locator('#name').fill('Hey Vysh');

  console.log(await page.locator('#name').inputValue());

  // handling multiple locators
  await page.locator('input').count()

  let placeHolder = await page.locator('input').first().getAttribute('placeholder');

  console.log(placeHolder);


});
