import {expect, test} from '@playwright/test'

// test('@interview choose product', async({page}) => {

//     await page.goto('https://rahulshettyacademy.com/client');

//     // username: helen.jen@gmail.com
//     // password: Password123###


// }

 

 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "helen.jen@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Password123###");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})