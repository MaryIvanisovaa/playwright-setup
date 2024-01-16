import { test } from "../../src/fixtures/base_fixture";
import { oneBookPatch } from "./testDataApi/booksData";


test('Mocking response', async ({ page }) => {
  await page.route('/BookStore/v1/Books',  route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(oneBookPatch),
    });
  });

  await page.goto('/books');  
  await page.pause();
});

