import { BasePage } from './BasePage';
import { setLastStep } from '../viewHolders/vh_scenario';

/**
 * This class contains all the methods to interact with the Players page.
 */
export class PlayersPage extends BasePage {
    private onAfterKeyPressed = 250;
    private onKeyTypeInterleaveRateDelay = 10;
    private wait1sec = 1000;
    private QT_FIXED_DEFAULT_SKILLS_PER_PLAYER = 2;

    /**
     * ✅ This method opens the Players page
     */
    async open() {
        // ✅ not necessary
    }

    /**
     * ✅ This method sets up team player names and skill values
     */
    async setupTeamPlayerNamesAndSkillValues() {
        setLastStep('Setup team players and skill values');

        // ✅ give some time to animation overlay to be performed and then dismiss the overlay
        await this.page.waitForTimeout(this.wait1sec);
        await this.page.locator('flutter-view').click();

        // ---------------------------------
        // ✅ PLAYER 1
        // ---------------------------------

        // ✅ goto player 1 name
        let skillNr = 0;
        for (let i = 0; i < 4; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.keyboard.type('player1', {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ select first skill value of player 1
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Enter');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('ArrowDown');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Enter');

        // ✅ select remaining skill values for player 1
        for (let i = 0; i < 3; i++) {

            if (i === 0) {
                // ✅ ignore if it is the first skill value of player 1 as it was already selected earlier
            } else {

                // ✅ iterate other skills and set values
                for (let j = 0; j < skillNr + this.QT_FIXED_DEFAULT_SKILLS_PER_PLAYER; j++) {
                    await this.page.locator('body').press('Tab');
                    await this.page.waitForTimeout(this.onAfterKeyPressed);
                }

                await this.page.locator('body').press('Enter');
                await this.page.waitForTimeout(this.onAfterKeyPressed);
                await this.page.locator('body').press('ArrowDown');
                await this.page.waitForTimeout(this.onAfterKeyPressed);
                await this.page.locator('body').press('Enter');
            }
            skillNr++;

            // ✅ await this.page.locator('body').press('Enter');
        }
        await this.page.keyboard.type('player2', {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ---------------------------------
        // ✅ PLAYER 2
        // ---------------------------------

        // ✅ goto player 2 name
        for (let i = 0; i < 5; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.keyboard.type('player2', {
            delay: this.onKeyTypeInterleaveRateDelay
        });

        // ✅ select first skill value of player 1
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Enter');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('ArrowDown');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Enter');

        // ✅ increment the total quantity of skills to add include a extra step value to include "player 2" text field
        skillNr++;

        // ✅ select remaining skill values for player 2
        for (let i = 0; i < 3; i++) {

            if (i === 0) {
                // ✅ ignore if it is the first skill value of player 2 as it was already selected earlier
            } else {

                // ✅ iterate other skills and set values
                for (let j = 0; j < skillNr + this.QT_FIXED_DEFAULT_SKILLS_PER_PLAYER; j++) {
                    await this.page.locator('body').press('Tab');
                    await this.page.waitForTimeout(this.onAfterKeyPressed);
                }

                await this.page.locator('body').press('Enter');
                await this.page.waitForTimeout(this.onAfterKeyPressed);
                await this.page.locator('body').press('ArrowDown');
                await this.page.waitForTimeout(this.onAfterKeyPressed);
                await this.page.locator('body').press('Enter');
                await this.page.waitForTimeout(this.onAfterKeyPressed);
            }
            skillNr++;
        }
        await this.page.waitForTimeout(this.wait1sec);

        // ✅ increment the total quantity of skills to add include a extra step value to include "Add New Player" button
        skillNr++;

        // ✅ goto button submit and press it
        for (let j = 0; j < skillNr + this.QT_FIXED_DEFAULT_SKILLS_PER_PLAYER; j++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.locator('body').press('Enter');
        await this.page.waitForTimeout(this.wait1sec);
    }

    /**
     * ✅ This method confirms teams and players
     */
    async confirmTeamsAndPlayers() {
        setLastStep('Confirm teams and players');

        // ✅ press "got it"
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);
        await this.page.locator('body').press('Enter');
        await this.page.waitForTimeout(this.wait1sec);
    }

}
