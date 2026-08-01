import { test, expect} from '@playwright/test';
import fs from 'fs';


test('Read JSON using fs', async () => {

    const data = fs.readFileSync('testdata/testData.json', 'utf-8');
    const json = JSON.parse(data);

    console.log(json.productName);
    console.log(json.price);
});
