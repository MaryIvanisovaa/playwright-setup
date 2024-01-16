
import { test } from '../src/fixtures/base_fixture';
test('Double Click', async ({ elementsPage}) => {
  await elementsPage.performDoubleClick();

});
test('Right Click', async ({ elementsPage }) => {
  await elementsPage.performRightClick();
});
test('Click Me Test', async ({ clickMe}) => {
  const subCategoryText = 'Buttons';
  const buttonText = 'lastBtn';     

  await clickMe.navigateAndClick(subCategoryText, buttonText);
  await clickMe.clickPrimaryButton();

  const isMessageVisible = await clickMe.isClickMessageVisible();

});
