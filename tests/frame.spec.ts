import {test, expect} from '@playwright/test';

test('frame', async({page}) => {
    
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe");

    console.log("---------------------");

    console.log(await page.frames().length)

    console.log("---------------------");

    await page.waitForTimeout(2000); 

    // let outerframe = page.frameLocator('iframe[id="iFrameResult"]')

    // await page.waitForTimeout(2000); 

    // let innerframe = outerframe.frameLocator('[src="demo_iframe.htm"]')

    // // let text = await innerframe.locator('//h1').innerText()

    // // let output = await page.frameLocator('iframe[id="iframeResult"]').frameLocator('[src="demo_iframe.htm"]')

    // // console.log(text)

    // // console.log(output)

    // let frameObj = page.frame({name:"iframeResult"});

    // frameObj?.frameLocator('[src="demo_iframe.htm"]').locator('//h1').innerText()




})