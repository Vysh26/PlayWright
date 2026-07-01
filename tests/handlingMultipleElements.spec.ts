import {test, expect} from '@playwright/test';


test('handlingMultipleElements', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    let labellocator = page.locator('//div[@class="form-group"]//label');

    let numberOfLabels = await labellocator.count();

    console.log(await labellocator.first().textContent())
    console.log(await labellocator.last().textContent())
    console.log(await labellocator.nth(2).textContent())
    console.log(await labellocator.filter({hasText: 'Wed'}).first().textContent());


    console.log(numberOfLabels);
    
    for (let i = 0; i< numberOfLabels; i++){
        console.log(i);
        console.log(await labellocator.nth(i).textContent());
        console.log(await labellocator.nth(i).getAttribute('for'));
    }


    // All text contents
    console.log("Printing with all text contents");
    console.log(await labellocator.allTextContents());

    console.log("Printing with all inner contents");
    console.log(await labellocator.allInnerTexts());

    // implement wait

    // scroll to view Id

    

})