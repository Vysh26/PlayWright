import { test, expect, chromium } from '@playwright/test';


test('default fixtures for handling pages', async ({ context, page }) => {

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

// Window will arise from Page
// Tab will arise from context

test('Popup window', async ({ context, page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    let allPages = await Promise.all(
        [page.waitForEvent('popup'),
        page.getByRole('button', {name:'Popup Windows'}).click()]
    )

    await allPages[0].waitForLoadState()

    let pages = context.pages()

    for (let tab of pages){
        console.log(await tab.title())
        console.log("---------------")
    }

})