import {test} from '../src/fixtures/base_fixture'

test( 'Book Store', async ({login, bookStorePage, profilePage})=>{
await login.navigateToPage();
await login.performLogin();
await bookStorePage.navigateToBookStorePage();
await bookStorePage.searchBook();
await profilePage.navigateProfilePage();
await profilePage.checkAddedBook();
})
