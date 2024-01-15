
import { test } from '../src/fixtures/base_fixture';
test.skip('Double Click', async ({ elementsPage}) => {
  await elementsPage.performDoubleClick();

});
test.skip('Right Click', async ({ elementsPage }) => {
  await elementsPage.performRightClick();
});
test.skip('Click Me Test', async ({ clickMe}) => {
  const subCategoryText = 'Buttons';
  const buttonText = 'lastBtn';     

  await clickMe.navigateAndClick(subCategoryText, buttonText);
  await clickMe.clickPrimaryButton();

  const isMessageVisible = await clickMe.isClickMessageVisible();

});
