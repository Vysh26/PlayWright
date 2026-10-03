import {expect, test} from '@playwright/test'

test('@interview xumo activation page', async({page}) => {

    await page.goto('https://www.xumo.com/activate')

    await expect(page.getByRole('heading', {name:"Enter the 6-digit code displayed on your device"})).toBeVisible();

    // Handle cookie popup
    await page.getByRole('button', { name: 'Decline All' }).click();
    
    // const codeInput = page.getByPlaceholder('Enter your code');
    const codeInput = page.getByRole('textbox', { name: 'Code' })
    const codeCheckBox = page.locator('prism-text.label-text.sc-prism-checkbox')
    const errorCode = page.locator('prism-text.invalid-text.hint-text')
    const continueButton = page.getByRole('button', { name: 'Continue' });

    
    await expect(codeInput).toBeVisible();

    await codeInput.focus();

    await expect(codeInput).toBeFocused();

    await expect(errorCode).toBeVisible({visible: false});

    await expect(continueButton).toBeVisible({visible: true});

    codeInput.fill("123456");

    await expect(codeCheckBox).toBeChecked({checked: false});

    codeCheckBox.check();

    await expect(codeCheckBox).toBeChecked({checked: true});
    
    await continueButton.click();

    console.log(await (errorCode).textContent());

    expect(await (errorCode).textContent()).toEqual("That code didn't work. Please try again.");

    await expect(errorCode).toBeVisible({visible: true});

})