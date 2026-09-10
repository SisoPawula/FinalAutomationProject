import { Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    get verifyHomePageHeading(): Locator {
         return this.page.getByRole('heading', { name: /Welcome\s*back/i });
    }

    

}
