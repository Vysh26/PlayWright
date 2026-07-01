import {expect,chromium, test} from '@playwright/test';

test("Test action methods", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    // <p>Locate elements by their text content.</p>
    await page.getByText('Locate elements by their text content').isVisible();


    // <a href="#">Products</a>
    await page.getByText('Products', {exact: true}).first().isVisible();
    await page.getByText('Products', {exact: true}).first().dblclick();


    // <button>Submit Form</button>
    let submitLocatorEle =  page.getByText('Submit Form');
    console.log(submitLocatorEle);
    let isFound = await submitLocatorEle.isVisible();
    console.log(isFound);
    await submitLocatorEle.click();    

    

    // <input type="radio" name="shipping" value="standard">
    await page.getByText('Standard', { exact: true }).click();


})