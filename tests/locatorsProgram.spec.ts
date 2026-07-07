import { test, expect,chromium } from '@playwright/test';
//npx playwright test -grep @title --project=firefox --headed
//npx playwright test -grep "@title|@p1" --project=firefox --project=chromium --headed --worker=1
//npx playwright test --grep-invert @regression
//npx playwright test -grep @title --debug --retries=1
test('has title @title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  await page.getByRole('radio',{name:'Male',exact:true}).click();

  
  
});
// npx playwright test --list


test('has title tag', {tag:["@P1"]}, async ({ page }) => {
  console.log("Output")

})