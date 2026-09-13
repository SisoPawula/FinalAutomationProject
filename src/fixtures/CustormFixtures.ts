import {test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
 
  
type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    profilePage: ProfilePage;
   

};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    profilePage: async ({page }, use) =>{
        await use(new ProfilePage(page));
    }



});

export { expect } from '@playwright/test';