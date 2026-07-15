import {expect, test} from '@playwright/test';

test('mock_1',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.getByLabel('Username:').fill('Vyshnavi');

    let value = await page.getByLabel('Username:').inputValue()

    console.log(value);

    expect(value).toBe('Vyshnavi');


})


test('mock_2', async({page}) => {

    await page.goto('https://www.amazon.co.uk');

    //let amazon_search = page.locator("//*[@id='twotabsearchtextbox']");

    let amazon_search = page.locator("#twotabsearchtextbox");

    await amazon_search.fill('iphone');

    let search_button = page.locator("//input[@id='nav-search-submit-button']")

    await search_button.click();

    await expect(page).toHaveTitle('Amazon.co.uk : iphone');


})
