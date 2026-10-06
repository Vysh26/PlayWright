import {test, expect} from "@playwright/test"

test("Check frames", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.goto("https://google.com");

    await page.goBack();

    await expect(page.getByText("Practice Page")).toBeVisible();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page).toHaveURL(/AutomationPractice/);
    await expect(page).toHaveTitle(/Practice Page/);

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (page.locator("#displayed-text")).toBeHidden();

    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();


    // Frames
    const framePage = page.frameLocator('#courses-iframe');
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck: any = await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[0]);
    console.log(textCheck.split(" ")[1]);










})