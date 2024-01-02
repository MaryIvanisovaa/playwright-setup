import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.only('Check login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToPage();
  await loginPage.fillLoginAndPassword();
  await loginPage.loginSuccessCheck();
});