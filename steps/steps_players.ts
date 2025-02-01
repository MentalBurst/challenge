// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { PlayersPage } from '../pages/PlayersPage';

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ pages
let playersPage: PlayersPage;

When(/^setup the team and confirm players$/, async (
    { page }
) => {
    playersPage = new PlayersPage(page);
    await playersPage.setupTeamPlayerNamesAndSkillValues();
});

Then(/^the team should be created successfully$/, async (
    { page }
) => {
    await playersPage.confirmTeamsAndPlayers();
});

When(/^add a new player$/, function() {
    // ✅ this step is embedded in the previous step
});

When(/^do not add a new player$/, async (
    { page }
) => {
    // TODO this step was not implemented
});

When(/^create a team without selecting skills$/, function() {
    // TODO this step was not implemented
});
