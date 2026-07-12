import { test, expect } from '@playwright/test';

/* Trace viewer
GUI tool - complete execution of a test
- captures every action performed during execution => 
- snapshots, timelines
- network requests and responses
- console logs
- source mapping
- timing information

// HOW TO ENABLE FROM playwright.config.ts
trace: on --> it will record for every test -- not a best practice
trace: off --> don't recond the trace
trace: 'retain on failure' --> record trace on failed tests
trace: 'on-first-retry'--> record the results at first retry
retries: 1

*/


test('traceViewer', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.getByRole('heading', {name: 'PlaywrightPractice'});

    const primaryButton = await page.getByRole('button', {name:'Primary Action', exact: true});

    const toggleButton = await page.getByRole('button', {name:'Toggle Button', exact:true});

    await expect(primaryButton).toHaveCount(1);
    await expect(primaryButton).toBeVisible();

    await expect(toggleButton).toHaveCount(1);
    await expect(toggleButton).toBeVisible();
})