import { Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilePage extends BasePage{
    get verifyHomePageHeading(): Locator {
        return this.page.getByRole('heading', { name: 'My Profile' });
    }

    async verifyHomePageHeadingIsVisible() {
        await this.basePageVerifyElementIsVisible(this.verifyHomePageHeading)
    }
}