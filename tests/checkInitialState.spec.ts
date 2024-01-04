import { test } from "../src/fixtures/base_fixture";

test('Check initial state', async ({ initialStateMainPage }) => {
  await initialStateMainPage.navigateToHomePage();
  await initialStateMainPage.getByText;
  await initialStateMainPage.checkInitialState();
});

  
