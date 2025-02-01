import { BasePage } from './BasePage';
import { setLastStep } from '../viewHolders/vh_scenario';
import { getUserCredentials } from '../managers/user_credentials_manager';

/**
 * This class contains all the methods to interact with the login page.
 */
export class LoginPage extends BasePage {
    private onAfterKeyPressed = 250;
    private onKeyTypeInterleaveRateDelay = 10;

    /**
     * ✅ This method opens the login page
     */
    async open() {
        await this.navigateTo('https://team-building-balancer.web.app/#/signin');
    }

    /**
     * ✅ This method inputs valid login details
     * @param userId
     */
    async inputValidLoginDetails(userId: number) {

        const userCredentials = getUserCredentials('userA');
        setLastStep('Use my role credentials: ' + userCredentials.email);

        // ✅ goto email input and fill it
        for (let i = 0; i < 2; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.keyboard.type('testuser' + userId + '@email.com', {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ goto password input and fill it
        await this.page.locator('body').press('Tab');
        await this.page.keyboard.type(userCredentials.password, {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ goto button submit and press it
        for (let i = 0; i < 2; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.locator('body').press('Enter');
    }

}
