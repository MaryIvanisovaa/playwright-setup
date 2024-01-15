import { test } from '../src/fixtures/base_fixture';
test.skip('Check login', async ({login}) => {
  await login.navigateToPage();
  await login.performLogin();

});