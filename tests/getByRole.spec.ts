import { test, expect } from '@playwright/test';

test('getByRole', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.getByRole('heading', {name: 'PlaywrightPractice'});

    const primaryButton = await page.getByRole('button', {name:'Primary Action', exact: true});

    const toggleButton = await page.getByRole('button', {name:'Toggle Button', exact:true});

    await expect(primaryButton).toHaveCount(1);
    await expect(primaryButton).toBeVisible();

    await expect(toggleButton).toHaveCount(1);
    await expect(toggleButton).toBeVisible();

    await primaryButton.click();
    await toggleButton.click();

    await page.getByRole('textbox', {name: 'Username'}).fill('vysh');    
    
    await page.getByRole('link', {name: 'Products'}).first().click();

    await page.getByRole('link', {name: 'Home'}).first().click();


    await page.getByRole('link', {name: 'Download Files'}).scrollIntoViewIfNeeded()

    await page.waitForTimeout(2000);

    await page.getByRole('link', {name: 'Download Files'}).click();


    let randomString = Math.random().toString(36).substring(3,20);

    console.log(randomString)

    //getByText
})