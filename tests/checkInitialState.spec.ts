import { test } from '@playwright/test';
import { MainPage } from '../pages/basePage';

test('Check initial state', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.navigateToHomePage();
  await mainPage.checkInitialState();
});

  
