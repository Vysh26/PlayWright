
import { test, expect } from '@playwright/test'

let products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
//test data
let username = 'standard_user'
let password = 'secret_sauce'
let loginData = [
        ['standard_user',  'secret_sauce' ],
        ['locked_out_user', 'secret_sauce' ],
        ['problem_user', 'secret_sauce' ],
        ['performance_glitch_user', 'secret_sauce'],
        ['error_user', 'secret_sauce' ],
        ['invalid_user', 'invalid_password' ]
    ]

// test('Data Driven Test', async ({ page }) => {
 
//     //array data 
//     //let products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
//     //locators 
//     let usernameLocator = page.locator('#user-name')
//     let passwordLocator = page.locator('#password')
//     let loginButtonLocator = page.locator('#login-button')
//     //actions 
//     await page.goto('https://www.saucedemo.com/');
//     await usernameLocator.fill(username)
//     await passwordLocator.fill(password)
//     await loginButtonLocator.click()
//     //assertions
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
//     //verify products in landing page 
//     for(let product of products){
//         await expect(page.getByText(product).first()).toBeVisible()
//     }
// });

// for(let product of products){
// test(`Data Driven Test for ${product}`, async ({ page }) => {
//       let usernameLocator = page.locator('#user-name')
//     let passwordLocator = page.locator('#password')
//     let loginButtonLocator = page.locator('#login-button')
//     //actions 
//     await page.goto('https://www.saucedemo.com/');
//     await usernameLocator.fill(username)
//     await passwordLocator.fill(password)
//     await loginButtonLocator.click()
//     //assertions
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
//     //verify products in landing page 
//     for(let product of products){
//         await expect(page.getByText(product).first()).toBeVisible()
//     }
//     })

// }


// test('Data driven array of arrays', async ({ page }) => {
 
//     //credentails array 

//     // let loginData = [
//     //     ['standard_user',  'secret_sauce' ],
//     //     ['locked_user', 'secret_sauce' ],
//     //     ['problem_user', 'secret_sauce' ],
//     //     ['performance_glitch_user', 'secret_sauce'],
//     //     ['error_user', 'secret_sauce' ],
//     //     ['invalid_user', 'invalid_password' ]
//     // ]

//     let usernameLocator = page.locator('#user-name')
//     let passwordLocator = page.locator('#password')
//     let loginButtonLocator = page.locator('#login-button')
//     //actions 
//     await page.goto('https://www.saucedemo.com/');

//    for(let data of loginData){
//     await usernameLocator.fill(data[0])
//     await passwordLocator.fill(data[1])
//     await loginButtonLocator.click()
//    }
//    //assertions
//    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

// });


for(let [username, password] of loginData){

    test(`Data Driven Test for ${username}`, async ({ page }) => {
    let usernameLocator = page.locator('#user-name')
    let passwordLocator = page.locator('#password')
    let loginButtonLocator = page.locator('#login-button')
    //actions 
    await page.goto('https://www.saucedemo.com/');
    await usernameLocator.fill(username)
    await passwordLocator.fill(password)
    await loginButtonLocator.click()
   //assertions

   if(username === 'locked_out_user'){
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.')
   }else if(username === 'invalid_user'){
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service')
   }else{
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }

});


}












