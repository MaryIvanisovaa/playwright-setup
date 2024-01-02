import { Page, Locator } from '@playwright/test';
require('dotenv').config()

export class ProfilePage  {
  private page: Page;
  private bookSelector = 'text=Git Pocket Guide';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToBookStorePage(): Promise<void> {
    await this.page.goto('/profile');
  }

  async getByText(text: string): Promise<Locator> {
    return await this.page.locator(`text=${text}`);
  }

  async checkAddedBook(): Promise<void> {
  await  this.page.waitForSelector(this.bookSelector, { state: 'visible' });
  }
}
