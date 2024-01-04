import {test as base} from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { BasePage, ClickMeObj, ElementsPage } from '../../pages/elementsPage';
import { MainPage } from '../../pages/basePage';
import {BookStorePage} from  '../../pages/bookStorePage'
import { ProfilePage } from '../../pages/profilePage';
type MyFixture ={
    login: LoginPage,
    elementsPage: ElementsPage;
    clickMe: ClickMeObj;
    initialStateMainPage: MainPage;
    bookStorePage: BookStorePage;
    profilePage: ProfilePage

}
 const test = base.extend <MyFixture> ({
    
login: async ({page}, use)=>{
const loginP = new LoginPage(page)

await use(loginP)
},

elementsPage: async ({page}, use)=>{
    await use(new ElementsPage(page))
},
clickMe:  async ({page}, use)=>{
    await use(new ClickMeObj(page))
},

initialStateMainPage: async ({page}, use)=>{
    await use (new MainPage(page))
},

bookStorePage: async ({page}, use)=>{
    await use (new BookStorePage(page))
},

profilePage: async ({page}, use)=>{
    await use (new ProfilePage(page))
}



})

 export { test };
