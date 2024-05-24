import { expect, test } from './index.feature';

test('change language', async ({ settingsPage }) => {
  await settingsPage.changeLanguage();
  await expect(settingsPage.title).toHaveText('Configuración');
});
