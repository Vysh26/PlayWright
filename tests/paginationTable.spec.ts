import {expect, test} from '@playwright/test';
// How many entries in a page
// Search a person name and validate his details
// Navigate through pages and validate the employee details
// sort particular coloumn and check if it is sorted or not

test('validate entries in a page', async({page}) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html', {waitUntil:'load'})

    //<select aria-controls="example" class="dt-input" id="dt-length-0"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>

    let entriesDropDown = page.locator('#dt-length-0')

    await entriesDropDown.selectOption({label: '50'})

    //Identify table name -> Look for tbody -> tr to get number of rows
    let allRowsSelector = await page.locator('#example tbody tr') // 50 rows selector

    await expect(allRowsSelector).toHaveCount(50)

    let allRowsSelectorinArray = await page.locator('#example tbody tr').all()
    //console.log(allRowsSelectorinArray)
    await expect(allRowsSelectorinArray.length).toBe(50)

})


test('search a person name and validate its details', async({page}) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html', {waitUntil:'load'})

    await page.getByLabel('Search:').fill('Yuri Berry')

    let arrayOfRows = await page.locator('#example tbody tr').all()

    await expect (arrayOfRows.length).toBe(1)

    let office = await arrayOfRows[0].locator('td').nth(2).innerText()

    let startDate = await arrayOfRows[0].locator('td').nth(4).innerText()

    let salary = await arrayOfRows[0].locator('td').nth(5).innerText()

    console.log(`person details are ${office} ${startDate} ${salary}`)

    await page.getByLabel('Search:').fill('Gavin')

    arrayOfRows = await page.locator('#example tbody tr').all()

    await expect (arrayOfRows).toHaveLength(2)

    for (let row of arrayOfRows){
        let office = await row.locator('td').nth(2).innerText()

        let startDate = await row.locator('td').nth(4).innerText()

        let salary = await row.locator('td').nth(5).innerText()

        console.log(`person details are ${office} ${startDate} ${salary}`)
    }
})


test('pagination table check', async({page}) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html', {waitUntil:'load'})

    let personName = 'Michael Bruce'

    while (await page.getByRole('link', {name: 'Next'}).isEnabled()){

        let rows = await page.locator('#example tbody tr').all()
        let found = false;
        for (let row of rows) {

            if(await row.locator('td').nth(0).innerText() == personName){
                let salary = await row.locator('td').nth(5).innerText()

                console.log(`person details are ${personName} ${salary}`)
                found=true
                break;

            }
        }
    //<button class="dt-paging-button next" role="link" type="button" aria-controls="example" aria-label="Next" data-dt-idx="next">›</button>
    //Click Next Page
    await page.getByRole('link', { name: 'Next' }).click();
    }

})