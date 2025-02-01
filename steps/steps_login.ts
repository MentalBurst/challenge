// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

// ✅ helpers
import { assertAndGetFitGlassCanvasHandleOnAttachAndVisibility } from '../helpers/FitGlassPaneHelper';
import { getLastStoredUserId } from '../helpers/StorageHelper';

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
let mLastStoredUserId = 0;
const wait3sec = 3000;

// ✅ pages
let homePage: HomePage;
let loginPage: LoginPage;

Given(/^the last created user is on the login page$/, async (
    { page }
) => {
    mLastStoredUserId = getLastStoredUserId();

    loginPage = new LoginPage(page);
    await loginPage.open();
    await assertAndGetFitGlassCanvasHandleOnAttachAndVisibility(page);
});

When(/^they enter valid credentials$/, async (
    { page }
) => {

    // ✅ fill the form
    await loginPage.inputValidLoginDetails(mLastStoredUserId);
    await page.waitForTimeout(wait3sec);
});

Then(/^they should be logged in successfully$/, async (
    { page }
) => {
    homePage = new HomePage(page);

    // ✅ assert home screen
    await homePage.validHomeScreenCanvas(
        BASELINE_RESOLUTION_DIR,
        BASE_SPORTS_AFTER_REGISTRATION_IMAGE,
        SCREENSHOT_DIR,
        DIFF_TO_COMPARE_IMAGES_DIR
    );
});

Given(/^the user is logged in$/, async (
    { page }
) => {
    mLastStoredUserId = getLastStoredUserId();
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await loginPage.open();
    await assertAndGetFitGlassCanvasHandleOnAttachAndVisibility(page);

    // ✅ fill the form
    await loginPage.inputValidLoginDetails(mLastStoredUserId);
    await page.waitForTimeout(wait3sec);

    // ✅ assert home screen
    await homePage.validHomeScreenCanvas(
        BASELINE_RESOLUTION_DIR,
        BASE_SPORTS_AFTER_REGISTRATION_IMAGE,
        SCREENSHOT_DIR,
        DIFF_TO_COMPARE_IMAGES_DIR
    );
});
