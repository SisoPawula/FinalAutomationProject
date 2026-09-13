import { Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilePage extends BasePage{

    get verifyProfilePageHeading(): Locator {
        return this.page.getByRole('heading', { name: 'My Profile' });
    }

    async verifyProfilePageIsDisplayed() {
        await this.basePageVerifyElementIsVisible(this.verifyProfilePageHeading)
    }

    async updateMyProfilePhoto(){
        await this.basePageClickElement(this.page.getByRole('button', {name: 'Edit Profile'}));
        await expect(this.page.getByPlaceholder('#e.g., +27 123 456 7890')).toBeVisible();      
    }

    async saveProfilePhoto(){
        await this.page.getByText('Choose Photo').click();
        await this.page.locator('input[type="file"]').setInputFiles("C:\Users\USER\Downloads\profile picture.jpeg");
        await expect(this.page.locator('img').first()).toBeVisible();
        await this.basePageClickElement(this.page.getByRole('button', {name: 'Save Changes'}))
        
    }
}