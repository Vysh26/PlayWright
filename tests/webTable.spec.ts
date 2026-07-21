import {expect, test} from '@playwright/test';

test ('webtable', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Indetifying webTable
    let table = page.locator('table[name="BookTable"]')

    //Getting rows
    let rows = table.locator('tr')
    console.log('Number of Rows',await rows.count())

    //Getting Coloums
    let cols = table.locator('th')
    console.log('Number of Coloumns', await cols.count())












})