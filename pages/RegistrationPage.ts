import { BasePage } from './BasePage';
import { getIncrementedStoredUserId } from '../helpers/StorageHelper';
import { setLastStep } from '../viewHolders/vh_scenario';
import { getUserCredentials } from '../managers/user_credentials_manager';

/**
 * ✅ This class contains all the methods to interact with the Registration page
 */
export class RegistrationPage extends BasePage {
    private onAfterKeyPressed = 250;
    private onKeyTypeInterleaveRateDelay = 10;

    /**
     * ✅ This method opens the registration page
     */
    async open() {
        await this.navigateTo('https://team-building-balancer.web.app/#/signup');
    }

    /**
     * ✅ This method inputs valid registration details
     */
    async inputValidRegistrationDetails() {

        // ✅ unique user id
        const userId = getIncrementedStoredUserId();

        setLastStep('Use my role credentials');
        const userCredentials = getUserCredentials('userA');
        setLastStep('Role in use: ' + userCredentials.email);

        // ✅ goto username input and fill it
        for (let i = 0; i < 2; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.keyboard.type('TestUser' + userId, {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ goto email input and fill it
        await this.page.locator('body').press('Tab');
        await this.page.keyboard.type('testuser' + userId + '@email.com', {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ goto password input and fill it
        await this.page.locator('body').press('Tab');
        await this.page.keyboard.type(userCredentials.password, {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ goto password input and fill it
        await this.page.locator('body').press('Tab');
        await this.page.locator('body').press('Tab');
        await this.page.keyboard.type(userCredentials.password, {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ goto button register and press it
        for (let i = 0; i < 3; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.locator('body').press('Enter');
    }

}
