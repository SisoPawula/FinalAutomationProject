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
        await expect(this.page.getByPlaceholder('e.g., +27 123 456 7890').first()).toBeVisible();
    }

    async saveProfilePhoto(photoPath: string){
        const photoInput = this.page.locator('input[type="file"]');
        await photoInput.setInputFiles(photoPath);
        const selectedFileName = await photoInput.evaluate(input => (input as HTMLInputElement).files?.[0]?.name);
        expect(selectedFileName).toBe(photoPath.split(/[\\/]/).pop());

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.basePageClickElement(this.page.getByRole('button', {name: 'Save Changes'})),
        ]);
        expect(dialog.message()).toBe('Profile updated successfully!');
        await dialog.accept();
    }
}