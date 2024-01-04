import { test } from '../src/fixtures/base_fixture';
test('Check login', async ({login}) => {
  await login.navigateToPage();
  await login.login();

});