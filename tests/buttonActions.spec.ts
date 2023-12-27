import { test } from '@playwright/test';
import { ElementsPage, ClickMeObj} from '../pages/elementsPage'; // Импортируем класс


test('Double Click', async ({ page }) => {
  const elementsPage = new ElementsPage(page);
  await elementsPage.performDoubleClick();
});

test('Right Click', async ({ page }) => {
  const elementsPage = new ElementsPage(page);
  await elementsPage.performRightClick();
});


test('Click Me Test', async ({ page }) => {
  const pageObject = new ClickMeObj(page);

  const subCategoryText = 'Buttons';
  const buttonText = 'lastBtn';     

  await pageObject.navigateAndClick(subCategoryText, buttonText);
  await pageObject.clickPrimaryButton();

  const isMessageVisible = await pageObject.isClickMessageVisible();

});
