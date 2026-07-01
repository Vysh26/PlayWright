import {expect, test} from '@playwright/test'

test("navigation", async({page})=> {
    // goto(url, options)
    await page.goto("https://playwright.dev/");
    console.log(await page.title());

    await page.waitForTimeout(3000);

    await page.goto("https://www.amazon.co.uk/");

    // goBack
    await page.goBack();


    await page.waitForTimeout(3000);

    //goForward
    await page.goForward();

    await page.waitForTimeout(3000);

    //reload
    await page.reload();

    // page info methods
    // page.url() --> it will return current url of page
    console.log(await page.url());

    let title = await page.title();
    console.log(title);

    console.log(await page.content());

    let size = await page.viewportSize();
    console.log(size?.width)
    console.log(size?.height)
    console.log(await page.content());
})