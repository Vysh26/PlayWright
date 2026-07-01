import {expect, test} from '@playwright/test';

test("HandlingMethods", async({page}) => {
    await page.goto('https://practice-automation.com/form-fields/');

    await page.getByLabel('Name').first().fill('Ram')
    await page.getByLabel('Name', {exact:true}).press('Enter')


    await page.getByLabel('Password', {exact:true}).fill('Laxman')
    await page.getByLabel('Password', {exact:true}).clear()


    await page.getByLabel('Password', {exact:true}).fill('Laxman')
    console.log(await page.getByLabel('Password', {exact:true}).inputValue())


    let allcheckBoxes = page.getByRole('checkbox')
    let allcheckboxesCount = await allcheckBoxes.count()
    console.log(allcheckboxesCount)
    
    await allcheckBoxes.first().check();
    await allcheckBoxes.last().check();
    await allcheckBoxes.nth(2).check();
    await allcheckBoxes.nth(2).uncheck();
    await allcheckBoxes.last().uncheck();

    for (let i=0; i<allcheckboxesCount; i++)
    {
        await allcheckBoxes.nth(i).check();
    }

    // click using keyboard
    //focus()
    //press('Enter')

    // Visible
    //toBeVisible
    //toBeEnabled
    //toBeDisabled



})