import {test, expect} from '@playwright/test';

/*
.describe - to group
test.describe.configure({mode:'serial'}), 
.serial - to run group of tests with only 1 runner in serial mode

test.slow => triple your default timeout 30sec => 90sec 
.only - to run only certain group of tests
.skip - to skip those tests
*/
test.describe('login Group test cases', () => {

test ('test script 1', ({page}) => {
    console.log('login test script 1')
})

test ('test script 2', ({page}) => {
    console.log('login test script 2')
})

test ('test script 3', ({page}) => {
    console.log('login test script 3')
})
})

test.describe.serial('page Group test cases', () => {

test ('page script 1', ({page}) => {
    console.log('login test script 1')
})

test ('page script 2', ({page}) => {
    console.log('login test script 2')
})

test ('page script 3', ({page}) => {
    console.log('login test script 3')
})
})


