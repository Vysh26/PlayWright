import  {expect, test} from '@playwright/test';

test('expectAssertion', async({page}) =>{

    await page.goto('https://practice-automation.com/form-fields/');


    //toBeVisible
    await expect(page.locator('#name-input')).toBeVisible({timeout:7000});
    //toBeHidden
    await expect(page.locator('.spinner')).toBeHidden();
    //toBeEnabled
    await expect(page.locator('#submit-btn')).toBeEnabled();
    //toBeDisabled
    //toBeChecked
    await page.getByRole('checkbox', {name:'Water'}).check();
    await expect(page.getByRole('checkbox', {name:'Water'})).toBeChecked();
    //toHaveText ==> to have exact Text
    await expect(page.locator('#submit-btn')).toHaveText('Submit');
    //toContainText ==> to have part of Text
    await expect(page.locator('#submit-btn')).toContainText('Submi')
    //toBeEditable ==> Text is Editable
    await expect(page.locator('#message')).toBeEditable();
    //toBeEmpty
    await expect(page.locator('#message')).toBeEmpty();
    await expect(page.getByPlaceholder('Enter message here')).toBeEmpty();
    //toBeFocused
    await page.getByPlaceholder('Enter message here').focus();
    await expect(page.getByPlaceholder('Enter message here')).toBeFocused();
    //toHaveValue()
    await page.getByPlaceholder('Enter message here').fill('Hey Vysh')
    await expect(page.getByPlaceholder('Enter message here')).toHaveValue('Hey Vysh');
    //toHaveCount()
    //toHaveID
    //toHaveRole



    // Page assertions
    // toHaveURL
    await expect(page).toHaveURL('https://practice-automation.com/form-fields/')

    // toHaveTitle - part
    await expect(page).toHaveURL(/practice-automation/)
    await expect(page).toHaveTitle(/Practice Automation/)

    
    //await expect(page).toHaveScreenshot('')

    let foundValue = await page.getByPlaceholder('Enter message here').isVisible()

    expect(foundValue).toBeTruthy();
    //toBeFalsy
    //toBeNull
    let a;
    expect(a).toBeUndefined();
    a=50;
    expect(a).toBe(50); //toBe equivaleent to  ===

    //toEqual() => to check objects
    let user = {
        name:'Ram',
        age:55
    }
    let user2 = {
        name:'Ram',
        age:55
    }

    expect(user).toEqual(user2);

    //toContain => to check value is present in a string or array
    expect ([5,7,10]).toContain(7);
    expect (["vysh", "6767"]).toContain("vysh");
    expect ("Rama is good").toContain("good");

    //API assertions
    //Negative Assertions 
    //await expect(locator).not.method();
    await expect(page.locator('.spinner')).not.toBeVisible();
    await expect(page.locator("//li[text()='Selenium']")).toBeVisible();
    await expect(page.locator("//li[text()='Python']")).not.toBeVisible();
    await expect(page.locator('.error')).not.toBeVisible();
    //not attached
    await expect(page.locator('.error')).toHaveCount(0);
    await expect(page.locator('.error')).not.toBeAttached();
    await expect(page.locator("//label[contains(text(), 'favorite')]").first()).not.toHaveText('India');
    //await expect(page.locator('#submit-btn')).not.toBeEnabled();
    //not.toBeChecked()
    //not.toBeEditable()
    //not.toBeFocused()

    // Doing negative assrtion in page locators
    await expect(page).not.toHaveTitle('form-fields');
    expect(12).not.toEqual(15);
    expect.soft(12).not.toEqual(15);


    //API assertions
    //await expect(page).not.method()
    //await expect(page).method()
    //await expect(locator).method()
    //await expect(locator).not.method()



    //Hard Assertions 
    //If assertions fails -> execution is going to stop immediately - used in critical flow
    //expect(actual).toBe(expected)
    //expect(page).toHaveTitle('Login')

    //Soft Assertions
    //If assertion fails -> execution won't stop- it will report all your failed assertions 
    //expect.soft(actual).toBe(expected)
    //expect.soft(page).toHaveTitle('Login')




    


})