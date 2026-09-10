import { Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    get verifyHomePageHeading(): Locator {
         return this.page.getByRole('heading', { name: /Welcome\s*back/i });
    }


    async updateMyProfile() {
        await this.basePageClickElement(this.page.getByRole('button', {name: 'Menu'}));
        await this.basePageClickElement(this.page.getByRole('button', {name: 'My Profile'}));

    }

    

}
