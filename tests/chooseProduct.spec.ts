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

test('@Child windows handle', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
    [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
    ])//new page is opened
   
 
    const textValue : any  = await newPage.locator(".red").textContent();
    const arrayText = textValue.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })