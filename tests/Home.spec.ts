import {expect, test} from '../src/fixtures/CustormFixtures';
import {LoginUser} from '../src/data/TestData';

 test('Update Profile', async ({ loginPage, homePage, page }) => {
    await loginPage.basePageGoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(LoginUser.UserDetails.username, LoginUser.UserDetails.password);
    await homePage.updateMyProfile();
     
});

