import { Page, Locator } from '@playwright/test';

export class MainPage {
  private page: Page;

  private elementsText = "Elements";
  private formsText = "Forms";
  private alertsText = "Alerts, Frame & Windows";
  private widgetsText = "Widgets";
  private interactionsText = "Interactions";
  private bookStoreText = "Book Store Application";

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  async getByText(text: string): Promise<Locator> {
    return await this.page.getByText(text);
  }

  async checkInitialState(): Promise<void> {
    await (await this.getByText(this.elementsText)).isVisible();
    await (await this.getByText(this.formsText)).isVisible();
    await (await this.getByText(this.formsText)).isVisible();
    await (await this.getByText(this.alertsText)).isVisible();
    await (await this.getByText(this.widgetsText)).isVisible();
    await (await this.getByText(this.interactionsText)).isVisible();
    await (await this.getByText(this.bookStoreText)).isVisible();
  }
}
