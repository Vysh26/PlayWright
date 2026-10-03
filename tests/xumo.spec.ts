import {expect, test} from '@playwright/test'

test('@interview xumo activation page', async({page}) => {

    await page.goto('https://www.xumo.com/activate')

    await expect(page.getByRole('heading', {name:"Enter the 6-digit code displayed on your device"})).toBeVisible();

    // Handle cookie popup
    await page.getByRole('button', { name: 'Decline All' }).click();

    
    // const codeInput = page.getByPlaceholder('Enter your code');

    const codeInput = page.getByRole('textbox', { name: 'Code' })
    
    await expect(codeInput).toBeVisible();

    await codeInput.focus();

    await expect(codeInput).toBeFocused();

})