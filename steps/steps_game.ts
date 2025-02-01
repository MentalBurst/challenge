// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { GamePage } from '../pages/GamePage';

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ member variables
const wait10sec = 10000;

// ✅ pages
let gamePage: GamePage;

Then(/^setup up a game with the team with te duration of "([^\"]*)" seconds$/, async (
    { page },
    duration: string
) => {
    gamePage = new GamePage(page);
    await gamePage.setupAGameAndPlayIt(duration);

});
Then(/^we are able to play the game with the team$/, async (
    { page }
) => {
    await gamePage.startTheGame();
    await page.waitForTimeout(wait10sec);
});


