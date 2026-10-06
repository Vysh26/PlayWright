import {test as base, Page} from "@playwright/test"

export const customTest = base.extend<{authenticatedPage: Page;}>({
    authenticatedPage: async({page}, use) => {
        await page.goto('https://rahulshettyacademy.com/client');
        await page.locator('#userEmail').fill('helen.jen@gmail.com');
        await page.locator('#userPassword').fill('Password123###');
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        await use(page);
    }


})

