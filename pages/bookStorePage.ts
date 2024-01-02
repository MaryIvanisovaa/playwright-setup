import { Page, Locator } from '@playwright/test';
require('dotenv').config()

export class BookStorePage  {
  private page: Page;
  private searchField = '[placeholder="Type to search"]';
  private bookSelector = 'text=Git Pocket Guide';
  private addToYourCollection = 'text= Add To Your Collection';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToBookStorePage(): Promise<void> {
    await this.page.goto('/books');
  }

  async getByText(text: string): Promise<Locator> {
    return await this.page.locator(`text=${text}`);
  }

  async searchBook(): Promise<void> {
   await(await this.page.locator(this.searchField)).click();
    await this.page.waitForSelector(this.bookSelector, { state: 'visible' });
    const book = await this.page.locator(this.bookSelector);
    await book.click();
    (await (await this.page.waitForSelector(this.addToYourCollection, {state: 'visible'})).click());
    await this.page.waitForEvent('dialog');
    


  }
}
