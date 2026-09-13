import {expect, test} from '../src/fixtures/CustormFixtures';
import {LoginUser} from '../src/data/TestData';
import { readCsv } from '../src/utils/CsvReader';


test.describe('Profile Update Tests', ()=>{

 test('Update Profile', async ({ loginPage, homePage, page }) => {
    await loginPage.basePageGoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(LoginUser.UserDetails.username, LoginUser.UserDetails.password);
    await homePage.verifyHomeIsDisplayed();
    await homePage.updateMyProfile();
     
});

test('Upload Profile Picture', async ({loginPage, homePage, profilePage, page}) =>{
    await loginPage.basePageGoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(LoginUser.UserDetails.username, LoginUser.UserDetails.password);
     await homePage.verifyHomeIsDisplayed();
    await homePage.updateMyProfile();
    await profilePage.verifyProfilePageIsDisplayed();
    await profilePage.updateMyProfilePhoto();
    await profilePage.saveProfilePhoto();

});
});

