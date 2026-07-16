//1) Register the dialog using page.on

// page.on('dialog', async dialog => {
// await dialog.accept();
// await dialog.dismiss();
// await dialog.message();
// await dialog.type();
// await dialog.defaultValue()
// let dialogPAge = await dialog.page()
// console.log(dialogPage.title())

//})

import {expect, test} from '@playwright/test';

test ('hanlding simple alert', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // <button id="alertBtn" onclick="myFunctionAlert()">Simple Alert</button>

    await page.getByRole('button', {name:'Simple Alert'}).click()
    // await page.locator('#alertBtn').first().click()

    page.on('dialog', async dialog => {
        // Validatons
        console.log(dialog.message())
        console.log(dialog.type())
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toBe("Press a button!");
        // Handling a popup
        await dialog.accept()
    })

    await page.getByRole('button', {name:'Confirmation Alert'}).click()
    // await page.locator('#alertBtn').first().click()
})

test ('hanlding confirmation alert', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        // Validatons
        console.log(dialog.message())
        console.log(dialog.type())
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toBe('Press a button')
        // Handling a popup
        await dialog.dismiss()
    })
})


test ('hanlding prompt dialog', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        // Validatons
        console.log(dialog.message())
        console.log(dialog.type())
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toBe('Please enter your name:')
        expect(dialog.defaultValue()).toBe('Harry Potter')
        // Handling a popup
        await dialog.accept()
    })

        
    await page.getByRole('button', {name:'Prompt Alert'}).click()
    // await page.locator('#alertBtn').first().click()

})







