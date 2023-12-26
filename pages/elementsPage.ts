import { Page, Locator, expect } from '@playwright/test';

export class ElementsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateAndClick(subCategoryText: string, buttonText: string): Promise<Locator> {
    await this.page.goto('/elements');
    const buttonSubCategory = this.page.locator(`text=${subCategoryText}`);
    await buttonSubCategory.click();
    const button = this.page.locator(`text=${buttonText}`);
    return button;
  }

  async performDoubleClick(): Promise<void> {
    const doubleClickBtn = await this.navigateAndClick('Buttons', 'Double Click Me');
    await doubleClickBtn.click({ clickCount: 2 });
    const doubleClickMessage = this.page.locator('text=You have done a double click');
    await expect(await doubleClickMessage).toBeVisible();
  }

  async performRightClick(): Promise<void> {
    const rightClickBtn = await this.navigateAndClick('Buttons', 'Right Click Me');
    await rightClickBtn.click({ button: 'right' });
    const rightClickMessage = this.page.locator('text=You have done a right click');
    await expect(await rightClickMessage).toBeVisible();
  }

  async performClickMe(): Promise<void> {
    const clickMeBtn = await this.navigateAndClick('Buttons', 'lastBtn')
    await clickMeBtn.click();
    await this.page.waitForTimeout(1000);
    const clickMessage = this.page.locator('[id="dynamicClickMessage"]');
    await expect(await clickMessage).toBeVisible();
  }
}  ;


export class ClickMeObj {
  private readonly page: any; 

  constructor(page: any) {
    this.page = page;
  }

  async navigateAndClickButtons(subCategoryText: string, buttonText: string): Promise<Locator> {
    console.log(`Navigating to ${subCategoryText} and clicking ${buttonText}`);

    await this.page.goto('/elements');
    const buttonSubCategory = this.page.locator(`text=${subCategoryText}`);
    await buttonSubCategory.click();
    const button = this.page.locator(`text=${buttonText}`);
    return button;
  }

  async clickPrimaryButton(): Promise<Locator> {
    const clickBtn = this.page.locator('.btn-primary').last();
    await clickBtn.click();
    return clickBtn;
  }

  async isClickMessageVisible(): Promise<boolean> {
    const clickMessage = this.page.locator('[id="dynamicClickMessage"]');
    return await clickMessage.isVisible();
  }
}
