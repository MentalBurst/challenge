// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';

// ✅ helpers
import { assertAndGetFitGlassCanvasHandleOnAttachAndVisibility } from '../helpers/FitGlassPaneHelper';

// ✅ constants
import {
    BASE_SPORTS_AFTER_REGISTRATION_IMAGE,
    BASELINE_RESOLUTION_DIR,
    DIFF_TO_COMPARE_IMAGES_DIR,
    SCREENSHOT_DIR
} from '../constants/globals';

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ member variables
let mROLE = '';
const wait3sec = 3000;

// ✅ pages
let homePage: HomePage;
let registrationPage: RegistrationPage;

Given(/^the user is on the registration page$/, async (
    { page }
) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.open();
    await assertAndGetFitGlassCanvasHandleOnAttachAndVisibility(page);
});

When(/^they provide valid registration details$/, async (
    { page }
) => {

    // ✅ fill the form
    await registrationPage.inputValidRegistrationDetails();
    await page.waitForTimeout(wait3sec);
});

Then(/^the account should be created successfully$/, async (
    { page }
) => {

    // ✅ assert home screen
    homePage = new HomePage(page);
    await homePage.validHomeScreenCanvas(
        BASELINE_RESOLUTION_DIR,
        BASE_SPORTS_AFTER_REGISTRATION_IMAGE,
        SCREENSHOT_DIR,
        DIFF_TO_COMPARE_IMAGES_DIR
    );
});
