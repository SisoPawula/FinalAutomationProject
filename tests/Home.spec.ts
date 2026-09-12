import {expect, test} from '../src/fixtures/CustormFixtures';
import {LoginUser} from '../src/data/TestData';


test.describe('Profile Update Tests', ()=>{

 test('Update Profile', async ({ loginPage, homePage, page }) => {
    await loginPage.basePageGoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(LoginUser.UserDetails.username, LoginUser.UserDetails.password);
    await homePage.verifyHomePageHeadingIsVisible();
    await homePage.updateMyProfile();
     
});

});

