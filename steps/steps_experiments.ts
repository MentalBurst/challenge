// files and logs
import fs from 'fs';
import path from 'path';
import { logger } from '../loggers/WinstonLogger';

// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { LoginPage } from '../pages/LoginPage';

// ✅ helpers
import { setLastStep } from '../viewHolders/vh_scenario';
import { getClickCoordinatesBasedOnImageDiff } from '../helpers/ImageHelper';

// ✅ constants
import {
    BASE_SPORTS_IMAGE,
    BASE_SPORTS_SKILLS_IMAGE,
    BASE_SPORTS_SKILLS_INPUT_BR_JOG_IMAGE,
    BASE_SPORTS_TENNIS_IMAGE,
    BASELINE_DIR,
    BASELINE_RESOLUTION_DIR,
    CAPTURE_DIR,
    DIFF_TO_COMPARE_IMAGES_AND_LOCATE_AREA_DIR,
    DIFF_TO_COMPARE_IMAGES_DIR,
    SCREENSHOT_DIR
} from '../constants/globals';

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ pages
let loginPage: LoginPage;

When(/^navigate using image "([^\"]*)" match$/, async (
    { page },
    waitingTime: string
) => {
    setLastStep('I wait ' + waitingTime + ' seconds more and then navigate to a link at the page');

    // ✅ create necessary directories if they don't exist
    [
        BASELINE_DIR,
        SCREENSHOT_DIR,
        CAPTURE_DIR,
        DIFF_TO_COMPARE_IMAGES_DIR,
        DIFF_TO_COMPARE_IMAGES_AND_LOCATE_AREA_DIR
    ].forEach((dir) => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });

    loginPage = new LoginPage(page);

    // ✅ open web page
    await loginPage.open();

    // ✅ wait for page to load && wait until network activity has finished
    await page.waitForLoadState('load');
    await page.waitForLoadState('networkidle');

    // ✅ wait for Flutter Web CanvasKit to load
    await page.waitForSelector('flt-glass-pane', { timeout: 5000, state: 'attached' });
    const element = page.locator('flt-glass-pane');
    await element.scrollIntoViewIfNeeded();

    // ✅ add a red cursor on the page for debugging
    await page.addStyleTag({ content: '* { cursor: auto !important; }' });
    await page.evaluate(() => {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.background = 'red';
        div.style.borderRadius = '50%';
        div.style.zIndex = '9999';
        document.body.appendChild(div);

        document.addEventListener('mousemove', (e) => {
            div.style.left = `${e.pageX}px`;
            div.style.top = `${e.pageY}px`;
        });
    });

    // ✅ capture baseline image
    const baselineSportsImgPath = path.join(BASELINE_RESOLUTION_DIR, BASE_SPORTS_IMAGE);
    const baselineTennisImgPath = path.join(BASELINE_RESOLUTION_DIR, BASE_SPORTS_TENNIS_IMAGE);

    const maxDiffPixels = 1000;
    let ret = await getClickCoordinatesBasedOnImageDiff(
        baselineSportsImgPath,
        baselineTennisImgPath,
        DIFF_TO_COMPARE_IMAGES_AND_LOCATE_AREA_DIR,
        maxDiffPixels
    );
    setLastStep('Done with the image comparison');
    logger.info(ret);

    await page.mouse.move(ret.regionFoundCenteredCoordinates.x, ret.regionFoundCenteredCoordinates.y);
    await page.waitForTimeout(2000);
    await page.mouse.click(ret.regionFoundCenteredCoordinates.x, ret.regionFoundCenteredCoordinates.y);

    // ✅ capture baseline image
    const baselineSkillsPath = path.join(BASELINE_RESOLUTION_DIR, BASE_SPORTS_SKILLS_IMAGE);
    const baselineSkillsNrJogPath = path.join(BASELINE_RESOLUTION_DIR, BASE_SPORTS_SKILLS_INPUT_BR_JOG_IMAGE);

    ret = await getClickCoordinatesBasedOnImageDiff(
        baselineSkillsPath,
        baselineSkillsNrJogPath,
        DIFF_TO_COMPARE_IMAGES_AND_LOCATE_AREA_DIR,
        maxDiffPixels
    );
    setLastStep('Done with the image comparison');
    logger.info(ret);

    await page.mouse.move(ret.regionFoundCenteredCoordinates.x, ret.regionFoundCenteredCoordinates.y);
    await page.waitForTimeout(2000);
    await page.mouse.click(ret.regionFoundCenteredCoordinates.x, ret.regionFoundCenteredCoordinates.y);

    // ✅ modify text delay if necessary
    await page.keyboard.type('123', { delay: 100 });

});

Then(/^take a screenshot every "([^\"]*)" seconds for a duration of "([^\"]*)" seconds$/, async (
    { page },
    waitingTime: string,
    loopDuration: string
) => {
    setLastStep('Take a screenshot every ' + waitingTime + ' seconds');

    // ✅ create necessary directories if they don't exist
    [CAPTURE_DIR].forEach((dir) => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });

    // ✅ open web page
    await page.goto('https://team-building-balancer.web.app/');

    // ✅ loop duration
    const endTime = Date.now() + Number(loopDuration) * 1000;

    while (Date.now() < endTime) {
        setLastStep('Running capture at:' + new Date().toLocaleTimeString());

        // ✅ wait for page to load && wait until network activity has finished
        await page.waitForLoadState('load');
        await page.waitForLoadState('networkidle');

        // ✅ wait for Flutter Web CanvasKit to load
        await page.waitForSelector('flt-glass-pane', { timeout: 5000, state: 'attached' });
        const element = page.locator('flt-glass-pane');
        await element.scrollIntoViewIfNeeded();

        // use evaluate to access shadow DOM and get the canvas inside it
        const glassPaneLocator = page.locator('flt-glass-pane');
        const canvasHandle = await glassPaneLocator.evaluateHandle(el => {
            const shadowRoot = el.shadowRoot;
            // @ts-ignore
            return shadowRoot.querySelector('flt-scene-host flt-canvas-container canvas');
        });

        // ✅ onst canvasHandle = await glassPaneLocator.evaluateHandle(el => el.shadowRoot?.querySelector('flt-scene-host flt-canvas-container canvas'));

        // ✅ save the diff image in YYYY_MM_DD_HH_MM_SS format
        const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '_');
        const captureImagePath = path.join(CAPTURE_DIR, `diff_${timestamp}.png`);
        await canvasHandle.screenshot({ path: captureImagePath });

        setLastStep(`Screenshot saved: ${captureImagePath}`);

        // ✅ wait for a configured time before the next iteration
        await page.waitForTimeout(Number(waitingTime) * 1000);
    }

    setLastStep('Test loop completed.');

});
