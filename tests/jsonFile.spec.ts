// import { test } from '@playwright/test';
// import fs from 'node:fs';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// test('Read JSON using fs', async () => {
//   const filePath = path.join(__dirname, '../testdata/testData.json');

//   const data = fs.readFileSync(filePath, 'utf-8');
//   const json = JSON.parse(data);

//   console.log(json.username);
// });

import { test, expect } from '@playwright/test';

test('simple', async () => {
  expect(1 + 1).toBe(2);
});