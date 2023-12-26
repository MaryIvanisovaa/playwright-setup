import { Page, Locator } from '@playwright/test';

export class MainPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  async checkInitialState(): Promise<void> {
    await this.page.getByText("Elements").isVisible();
    await this.page.getByText("Forms").isVisible();
    await this.page.getByText("Forms").isVisible();
    await this.page.getByText("Alerts, Frame & Windows").isVisible();
    await this.page.getByText("Widgets").isVisible();
    await this.page.getByText("Interactions").isVisible();
    await this.page.getByText("Book Store Application").isVisible();
  }
}
