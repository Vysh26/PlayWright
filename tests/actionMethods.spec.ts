import {expect,chromium, test} from '@playwright/test';

test("Test action methods", async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    console.log(await page.locator("//*[@id='title-locators']//li").allTextContents())


    let allTabs = await page.locator("//*[@id='crosscol']//a").allTextContents();

    console.log(allTabs)

    allTabs.includes('Home')


    

    expect(allTabs).toContain('Online Trainings')


    if (await page.locator("//*[@id='crosscol']//a").first().textContent() === "Home")
    {
        console.log('First tab is Home')
    }

    if (await page.locator("//*[@id='crosscol']//a").last().textContent() === "PlaywrightPractice")
    {
        console.log('Last tab is PlaywrightPractice')
    }

    if (await page.locator("//*[@id='crosscol']//a").nth(1).textContent() === "Udemy Courses")
    {
        console.log('Second is Udemy Courses')
    }

        
    if (await page.locator('li').filter({hasText:'Playwright'}))
    {
        console.log('Playwright is present')
    }

    const visibleProducts = await page.locator("a:text-is('Products')").count();

    console.log(visibleProducts)


})