import {expect, test} from '@playwright/test';

test("HandlingMethods", async({page}) => {

    await page.goto('https://demoQA.com/buttons');
    await page.locator('#doubleClickBtn').hover()
    await page.locator('#doubleClickBtn').dblclick()

    await page.getByRole('button', {name:'Right click Me'}).hover()
    await page.getByRole('button', {name:'Right click Me'}).click({button:'right'})

    await page.getByRole('button', {name:'Click Me', exact:true}).hover()
    await page.getByRole('button', {name:'Click Me', exact:true}).first().click({button:'left'})

    await page.getByRole('link', { name: 'Radio Button' }).first().click();
    await expect(page).toHaveURL('https://demoqa.com/radio-button');
    await page.getByRole('radio', {name:'Yes'}).check();
   
    //&nbsp;
    
})