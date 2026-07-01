import {expect, test} from '@playwright/test';

test("second", async({page})=> {
    await page.goto("https://playwright.dev/");

    console.log(await page.title());

    await page.close();

})

test("destructering", () => {
    
    let student = {
        id: "1",
        name: "Vysh",
        course: "Playwright"
    }
    // Without destructuring
    // let id = student.id;
    // let name = student.name;
    // let course = student.course;

    // With destrucuring
    //let {id, name, course} = student;
})
