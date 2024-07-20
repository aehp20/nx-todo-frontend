import type { Locator, Page } from '@playwright/test';

export class SettingsPage {
  readonly title: Locator;
  readonly cacheBtn: Locator;

  constructor(public readonly page: Page) {
    this.title = this.page.getByTestId('title');
    this.cacheBtn = this.page.getByTestId('btn-clear-cache');
  }

  async goTo() {
    await this.page.goto(`${process.env.VITE_APP_FRONTEND_URL}/settings`);
  }

  async changeLanguage() {
    await this.page.getByText('English').click();
    await this.page.getByRole('option', { name: 'Spanish' }).click();
  }

  async clearCache() {
    await this.cacheBtn.click();
  }
}
