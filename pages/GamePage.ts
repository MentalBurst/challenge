import { BasePage } from './BasePage';
import { setLastStep } from '../viewHolders/vh_scenario';

/**
 * This class contains all the methods to interact with the game page
 */
export class GamePage extends BasePage {
    private onAfterKeyPressed = 250;
    private onKeyTypeInterleaveRateDelay = 10;
    private wait1sec = 1000;

    /**
     * ✅ This method opens the game page
     */
    async open() {
        // ✅ not necessary
    }

    /**
     * ✅ This method sets up a game and plays it
     */
    async setupAGameAndPlayIt(duration: string) {
        setLastStep('Setup a game and play it');

        // ✅ press "play game"
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Enter');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.waitForTimeout(this.wait1sec);

        // set team1 increment button to value 1
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Space');
        await this.page.waitForTimeout(this.wait1sec);

        // set team2 increment button to value 1
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Space');
        await this.page.waitForTimeout(this.wait1sec);

        // set timer to parametrized duration in sec
        await this.page.locator('body').press('Shift+Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Space');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.keyboard.type(duration, {
            delay: this.onKeyTypeInterleaveRateDelay
        });
        await this.page.waitForTimeout(this.wait1sec);

        // goto and press "set"
        await this.page.locator('body').press('Tab');
        await this.page.locator('body').press('Tab');
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Space');
        await this.page.waitForTimeout(this.wait1sec);
    }

    /**
     * ✅ This method starts the game
     */
    async startTheGame() {
        setLastStep('Start the game');

        // press "start game"
        await this.page.locator('body').press('Shift+Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Space');
    }

}
