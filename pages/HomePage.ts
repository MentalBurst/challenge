import { BasePage } from './BasePage';
import { assertAndGetFitGlassCanvasHandleOnAttachAndVisibility } from '../helpers/FitGlassPaneHelper';
import path from 'path';
import { toMatchScreenshot } from '../helpers/ImageHelper';
import { setLastStep } from '../viewHolders/vh_scenario';

/**
 * This class contains all the methods to interact with the home page
 */
export class HomePage extends BasePage {
    private onAfterKeyPressed = 250;
    private wait5sec = 5000;
    private QT_OF_TAB_PER_SPORT_DIV = 2;

    /**
     * ✅ This method opens the home page
     */
    async open() {
        // ✅ not necessary
    }

    /**
     * ✅ This method validates the home screen canvas
     *
     * @param BASELINE_RESOLUTION_DIR
     * @param BASE_SPORTS_AFTER_REGISTRATION_IMAGE
     * @param SCREENSHOT_DIR
     * @param DIFF_DIR
     */
    async validHomeScreenCanvas(
        BASELINE_RESOLUTION_DIR: string,
        BASE_SPORTS_AFTER_REGISTRATION_IMAGE: string,
        SCREENSHOT_DIR: string,
        DIFF_DIR: string
    ) {

        // ✅ wait for page to load && wait until network activity has finished
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('networkidle');

        // ✅ wait long enough to the animation of the success "Welcome user XXX" message to be displayed and fades away
        await this.page.waitForTimeout(this.wait5sec);

        // ✅ get and make sure flutter fit glass pane is loaded && visible
        const canvasHandle = await assertAndGetFitGlassCanvasHandleOnAttachAndVisibility(this.page);

        // ✅ to save the diff image in YYYY_MM_DD_HH_MM_SS format
        const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '_');

        // ✅ capture baseline source of truth image && captured image
        const baselineSourceOfTruthImagePath = path.join(BASELINE_RESOLUTION_DIR, BASE_SPORTS_AFTER_REGISTRATION_IMAGE);
        const capturedImageToBeMatchedPath = path.join(SCREENSHOT_DIR, `screenshot_${timestamp}.png`);
        await canvasHandle.screenshot({ path: capturedImageToBeMatchedPath });

        const maxDiffPixels = 1000;
        let ret = await toMatchScreenshot(
            baselineSourceOfTruthImagePath,
            capturedImageToBeMatchedPath,
            DIFF_DIR,
            maxDiffPixels
        );
        console.log('Done with the image comparison with the pixelation diff match being: ' + ret.foundDiffPixels);
        console.log(ret);
    }

    /**
     * ✅ This method selects a sport
     * @param sport
     */
    async selectASport(sport: string) {
        setLastStep('select a sport');
        let qtOfStepsToGetIntoSportContainer = 0;

        // ✅ get selected sport coordinates, default to tennis
        qtOfStepsToGetIntoSportContainer = this.getStepsForSport(sport);

        // ✅ goto target sport with auto selection based on parameter
        await this.page.locator('body').press('Tab');
        for (let i = 0; i < qtOfStepsToGetIntoSportContainer * this.QT_OF_TAB_PER_SPORT_DIV; i++) {
            await this.page.locator('body').press('Tab');
            await this.page.waitForTimeout(this.onAfterKeyPressed);
        }
        await this.page.locator('body').press('Enter');
    }

    /**
     * ✅ This method selects a sport
     * @param sport
     */
    getStepsForSport(sport: string): number {
        const sportSteps: Record<string, number> = {
            volleyball: 1,
            soccer: 2,
            futsal: 3,
            tennis: 4,
            basketball: 5,
            handball: 6,
            baseball: 7,
            footvolley: 8
        };

        // convert to lowercase to ensure case insensitivity, and it defaults to tennis (4) if not found
        return sportSteps[sport.toLowerCase()] ?? 4;
    }
}
