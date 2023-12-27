import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;
  protected buttonSubCategoryLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonSubCategoryLocator = this.page.locator('text=');
  }

  async navigateAndClick(subCategoryText: string, buttonText: string): Promise<Locator> {
    await this.page.goto('/elements');
    const buttonSubCategory = this.buttonSubCategoryLocator.locator(`text=${subCategoryText}`);
    await buttonSubCategory.click();
    const button = this.buttonSubCategoryLocator.locator(`text=${buttonText}`);
    return button;
  }
}

export class ElementsPage extends BasePage {
  private doubleClickMessageLocator: Locator;
  private rightClickMessageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.doubleClickMessageLocator = this.page.locator('text=You have done a double click');
    this.rightClickMessageLocator = this.page.locator('text=You have done a right click');
  }

  async performDoubleClick(): Promise<void> {
    const doubleClickBtn = await this.navigateAndClick('Buttons', 'Double Click Me');
    await doubleClickBtn.click({ clickCount: 2 });
    await expect(await this.doubleClickMessageLocator).toBeVisible();
  }

  async performRightClick(): Promise<void> {
    const rightClickBtn = await this.navigateAndClick('Buttons', 'Right Click Me');
    await rightClickBtn.click({ button: 'right' });
    await expect(await this.rightClickMessageLocator).toBeVisible();
  }
}

export class ClickMeObj extends BasePage {
  private clickMeBtnLocator: Locator;
  private clickMeMessageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.clickMeBtnLocator = this.page.locator('.btn-primary').last();
    this.clickMeMessageLocator = this.page.locator('[id="dynamicClickMessage"]');
  }

  async clickPrimaryButton(): Promise<Locator> {
    const clickBtn = this.clickMeBtnLocator;
    await clickBtn.click();
    return clickBtn;
  }

  async isClickMessageVisible(): Promise<boolean> {
    const clickMessage = this.clickMeMessageLocator;
    return await clickMessage.isVisible();
  }
}
