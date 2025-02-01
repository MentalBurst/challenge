import { BasePage } from './BasePage';
import { setLastStep } from '../viewHolders/vh_scenario';

/**
 * This class contains all the methods to interact with the Skills page.
 */
export class SkillsPage extends BasePage {
    private onAfterKeyPressed = 250;
    private onKeyTypeInterleaveRateDelay = 10;

    /**
     * ✅ This method opens the skills page
     */
    async open() {
        await this.navigateTo('https://team-building-balancer.web.app/#/signup');
    }

    /**
     * ✅ This method inputs players, teams and select skills
     * @param sport
     */
    async inputPlayersTeamsAndSelectSkills(skill: string) {
        setLastStep('Input players, teams and select skills');

        // ✅ goto nr of players and fill it
        await this.page.locator('body').press('Tab');
        await this.page.locator('body').press('Tab');
        await this.page.keyboard.type('2', {
            delay: this.onKeyTypeInterleaveRateDelay
        });
        await this.page.waitForTimeout(this.onAfterKeyPressed);

        // ✅ goto nr of players and fill it
        await this.page.locator('body').press('Tab');
        await this.page.keyboard.type('2', {
            delay: this.onKeyTypeInterleaveRateDelay
        });
        await this.page.waitForTimeout(this.onAfterKeyPressed);

        // ✅ goto select skills popup
        await this.page.locator('body').press('Tab');
        await this.page.locator('body').press('Enter');
        await this.page.waitForTimeout(this.onAfterKeyPressed);

        // ✅ set cursor at 1st skill available, skill "server"
        await this.page.locator('body').press('Tab');
        await this.page.waitForTimeout(this.onAfterKeyPressed);

        // ✅ confirm selection
        const skillSelected = this.getStepsForSkill(skill);
        for (let i = 0; i < 11; i++) {

            // ✅ auto select skill selected
            if (i === skillSelected - 1) {
                await this.page.locator('body').press('Space');
                await this.page.waitForTimeout(this.onAfterKeyPressed);
            }
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.locator('body').press('Enter');
    }

    /**
     * ✅ This method presses the next button
     */
    async pressNext() {
        setLastStep('Press next');

        // ✅ press next
        for (let i = 0; i < 2; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.locator('body').press('Space');
    }

    /**
     * ✅ This method selects a skill
     * @param skill
     */
    getStepsForSkill(skill: string): number {
        const skillSteps: Record<string, number> = {
            server: 1,
            shoot: 2,
            spike: 3,
            curveball: 4,
            ping: 5,
            pass: 6,
            block: 7,
            steal: 8,
            rebound: 9
        };

        // convert to lowercase to ensure case insensitivity, and it defaults to server (1) if not found
        return skillSteps[skill.toLowerCase()] ?? 1;
    }

}
