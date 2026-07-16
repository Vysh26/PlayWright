import { test, expect, chromium } from '@playwright/test';

test('switch between pages', async ({ browser }) => {

  // let browser = await chromium.launch();
  // let context = await browser.newContext();
  // let page = await context.newPage(); 

  // context.waitForevent('page') --> once you click the button ie New Tab
  // Create a new browser context
  const context1 = await browser.newContext();

  // Create the first page
  const page1 = await context1.newPage();
  await page1.goto('https://amazon.co.uk');

  // Create the second page
  const page2 = await context1.newPage();
  await page2.goto('https://playwright.dev');

  // Work on Page 1
  console.log(await page1.title());
  await page1.bringToFront();

  // Switch to Page 2
  console.log(await page2.title());
  await page2.bringToFront();
  await page2.waitForTimeout(2000); 

  //await context1.close();
  await page2.close();
  await page1.bringToFront();

  await page1.waitForTimeout(6000); 


});

test('Handing new tab', async () => {
    let browser = await chromium.launch();

    let context = await browser.newContext();

    let page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/')

    let newPage = await Promise.all(
        [context.waitForEvent('page'),
        page.getByRole('button', {name:'New Tab'}).click()]
    )
    //old page
    console.log(await page.title())

    console.log(await newPage[0].title)

    await expect(newPage[0].getByRole('heading', {name:'SDET-QA Blog'})).toBeVisible()

    //old page
    await page.bringToFront()
    await page.getByPlaceholder('Enter Name').fill('Ravi')


    let pages = context.pages();
    console.log(pages.length)

    //let [currentPage, oldPage] = context.pages();
    await pages[0].goto('https://amazon.co.uk')
    await pages[1].goto('https://google.com')

    for (let tab of pages){
        console.log(await tab.title())
    }


})