import { Page } from '@playwright/test';

export class BasePage {

  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(locator: any) {
    await locator.click();
  }

  async type(locator: any, text: string) {
    await locator.fill(text);
  }

  async getText(locator: any) {
    return locator.textContent();
  }

}