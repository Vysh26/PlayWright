import {test, expect} from '@playwright/test';


test('getByLabel', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.getByLabel('Username:').fill('vysh');

    await page.getByLabel('Username:').press('Control+A');

    console.log(await page.getByLabel('Username:').inputValue());

    await page.waitForTimeout(2000); 


    await page.getByLabel('Email Address:').fill('vysh@gmail.com');

    await page.getByLabel('Email Address:').press('Control+A')

    await page.waitForTimeout(2000); 

    // await page.getByLabel('Password:').fill('secret123');

    // await page.waitForTimeout(2000); 

    // await page.getByLabel('Standard').check();

    // await page.waitForTimeout(2000); 

})