import { test, expect, Locator } from '@playwright/test';

test.skip('Check initial state', async ({ page }) => {
  await page.goto('/');
  page.getByText("Elements"),
  page.getByText("Forms"),
  page.getByText("Forms"),
  page.getByText("Alerts, Frame & Windows"),
  page.getByText("Widgets"),
  page.getByText("Interactions"),
  page.getByText("Book Store Application")

});


  
