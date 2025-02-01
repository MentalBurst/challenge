// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { HomePage } from '../pages/HomePage';

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ member variables
const wait3sec = 3000;

// ✅ pages
let homePage: HomePage;

When(/^the user has selected a sport "([^\"]*)" from the available options$/, async (
    { page },
    sport: string
) => {
    homePage = new HomePage(page);
    await homePage.selectASport(sport);
    await page.waitForTimeout(wait3sec);
});

Then(/^the sport should be set for the session$/, async (
    { page }
) => {

});
