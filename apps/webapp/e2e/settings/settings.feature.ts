import { test as base } from '@playwright/test';

import { SettingsPage } from './settings.page';

export const test = base.extend<{ settingsPage: SettingsPage }>({
  settingsPage: async ({ page }, use) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.goTo();
    await use(settingsPage);
    await settingsPage.clearCache();
  },
});

export { expect } from '@playwright/test';
