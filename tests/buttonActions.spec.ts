import { test, expect, Locator } from '@playwright/test';


async function navigateAndClick(page: any, subCategoryText: string, buttonText: string) {
    await page.goto('/elements');
    const buttonSubCategory = page.locator(`text=${subCategoryText}`);
    await buttonSubCategory.click();
    const button = page.getByText(buttonText);
    return button;
  }
  
  test('Double Click', async ({ page }) => {
    await navigateAndClick(page, 'Buttons', 'Double Click Me');
    const doubleClickBtn = page.getByText('Double Click Me');
    await doubleClickBtn.click({ clickCount: 2 });
    const doubleClickMessage = page.getByText('You have done a double click');
    await expect(doubleClickMessage).toBeVisible();
  });
  
  test('Right Click', async ({ page }) => {
    await navigateAndClick(page, 'Buttons', 'Right Click Me');
    const rightClickBtn = page.getByText('Right Click Me');
    await rightClickBtn.click({ button: 'right' });
    const rightClickMessage = page.getByText('You have done a right click');
    await expect(rightClickMessage).toBeVisible();
  });
  
  test('Click Me', async ({ page }) => {
    await navigateAndClick(page, 'Buttons', 'Click Me');
    const clickBtn = page.locator('.btn-primary').last();
    await clickBtn.click();
    const clickMessage = page.locator('[id="dynamicClickMessage"]');
    await expect(clickMessage).toBeVisible();
  });
  