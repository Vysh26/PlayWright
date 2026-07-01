// We are importing test and expect from playwright package
import {expect,chromium, test} from '@playwright/test';

test("First test case", async() => {

    // Creating your browser
    let browser = await chromium.launch({headless: false});

    // browswer context
    let browserContext = await browser.newContext();

    // creating a page
    let page = await browserContext.newPage();

    await page.goto("https://playwright.dev/");

    console.log(await page.title());

    await page.close();

})
