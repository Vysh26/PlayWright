import {expect, test} from '@playwright/test';

test('search iPhone and select lowest priced product', async ({ page }) => {

  // 1. Open Amazon
  await page.goto('https://www.amazon.co.uk/')


  // 2. Search for iPhone
  const searchBox = page.getByRole('searchbox', { name: /Search Amazon.co.uk/i });

  await searchBox.fill('iphone');
  await searchBox.press('Enter');

  // 3. Handle Accept popup if it appears
  const acceptButton = page.getByRole('button', {
    name: /^accept$/i,
  });

  if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await acceptButton.click();
  }

  // 4. Wait for search results
  const results = page.locator(
    '[data-component-type="s-search-result"]'
  );

  await expect(results.first()).toBeVisible();

  // 5. Sort by Price: Low to High
  const sortDropdown = page.locator('#s-result-sort-select');

  await sortDropdown.selectOption('price-asc-rank');

  // 6. Wait for the sorted results page
  await page.waitForLoadState('domcontentloaded');

  // 7. Wait for results again
  await expect(results.first()).toBeVisible();

  // 8. Get the first product
  // const cheapestProduct = results
  //   .filter({ has: page.locator('h2 a') })
  //   .first();

  // // 9. Get product name
  // const productName = await cheapestProduct
  //   .locator('h2 a')
  //   .innerText();

  // // 10. Get product price
  // const productPrice = await cheapestProduct
  //   .locator('.a-price .a-offscreen')
  //   .first()
  //   .innerText();

  // console.log('Cheapest product:', productName);
  // console.log('Price:', productPrice);

  // // 11. Verify we have a price
  // expect(productPrice).toBeTruthy();

});