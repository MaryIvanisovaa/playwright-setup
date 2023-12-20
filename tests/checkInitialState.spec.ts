import { test, expect, Locator } from '@playwright/test';

test('Check initial state', async ({ page }) => {
  await page.goto('/');
  page.getByText("Elements").isVisible();
  page.getByText("Forms").isVisible();
  page.getByText("Forms").isVisible();
  page.getByText("Alerts, Frame & Windows").isVisible();
  page.getByText("Widgets").isVisible();
  page.getByText("Interactions").isVisible();
  page.getByText("Book Store Application").isVisible();

});


  
