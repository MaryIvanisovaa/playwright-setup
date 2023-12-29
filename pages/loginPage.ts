import { Page, Locator } from '@playwright/test';
require('dotenv').config()

export class LoginPage {
  private page: Page;
  private loginField = '[id="userName"]';
  private passwordField = '[id="password"]';
  private LogOutButton = 'text=Log out';
  private LoginButton = '[id="login"]'
  private searchField = '[id="searchBox"]'
  private userName = process.env.USER_NAME || ''
  private password = process.env.PASSWORD || ''
  
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPage(): Promise<void> {
    await this.page.goto('/login');
  }

  async getByText(text: string): Promise<Locator> {
    return await this.page.locator(`text=${text}`);
  }

  async fillLoginAndPassword(): Promise<void> {
    await (await this.page.locator(this.loginField)).click();
    await (await this.page.locator(this.loginField)).fill(this.userName);
    await (await this.page.locator(this.passwordField)).click();
    await (await this.page.locator(this.passwordField)).fill(this.password);
    await (await this.page.locator(this.LoginButton)).click({force: true});
  }

  async loginSuccessCheck(): Promise<void> {
    await this.page.waitForSelector(this.LogOutButton, { state: 'visible' });
    await this.page.waitForSelector(this.searchField, { state: 'visible'});

  }
}


