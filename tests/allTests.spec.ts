import { test } from '../src/fixtures/base_fixture';

test.skip('All tests', async ({login, initialStateMainPage, elementsPage, clickMe}) => {
  await login.navigateToPage();
  await login.performLogin();
  await initialStateMainPage.navigateToHomePage();
  await initialStateMainPage.checkInitialState();
  await elementsPage.performDoubleClick();
  await elementsPage.performRightClick();
  await clickMe.clickPrimaryButton();
  await clickMe.isClickMessageVisible;


});