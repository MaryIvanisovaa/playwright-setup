import {test} from '../src/fixtures/base_fixture'

test( 'Book Store', async ({login, bookStorePage, profilePage})=>{
await login.navigateToPage();
await login.login();
await bookStorePage.navigateToBookStorePage();
await bookStorePage.searchBook();
await profilePage.navigateToBookStorePage();
await profilePage.checkAddedBook();
})
