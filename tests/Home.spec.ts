import {expect, test} from '../src/fixtures/CustormFixtures';
import {LoginUser} from '../src/data/TestData';
import { readCsv } from '../src/utils/CsvReader';


test.describe('Profile Update Tests', ()=>{
 test.describe.configure({ mode: 'serial' });

 test('Update Profile', async ({ loginPage, homePage, page }) => {
    //await loginPage.basePageGoToUrl('/');
    //await loginPage.navigateToLoginPage();
    await loginPage.FullLogin(LoginUser.UserDetails.username, LoginUser.UserDetails.password);
    await homePage.verifyHomeIsDisplayed();
    await homePage.updateMyProfile();
     
});

test('Upload Profile Picture', async ({loginPage, homePage, profilePage, page}) =>{
   // await loginPage.basePageGoToUrl('/');
   // await loginPage.navigateToLoginPage();
    await loginPage.FullLogin(LoginUser.UserDetails.username, LoginUser.UserDetails.password);
     await homePage.verifyHomeIsDisplayed();
    await homePage.updateMyProfile();
    await profilePage.verifyProfilePageIsDisplayed();
    await profilePage.updateMyProfilePhoto();
    await profilePage.saveProfilePhoto('C:\\Users\\USER\\Downloads\\profilepicture.jpeg');
    await page.screenshot({path: 'UploadedPicture.png', fullPage: true});


});
});

const users = readCsv('src/data/CSVReaderData.csv');

for (const user of users) {
    test(`open profile page ${user.UserName}`, async ({loginPage,homePage, page}) =>{
        await loginPage.FullLogin(user.UserName, user.Password);
        await homePage.updateMyProfile();
     })

    }
    


