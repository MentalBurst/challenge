// ✅ playwright
import { createBdd } from 'playwright-bdd';
import { test as base2 } from '../fixtures/steps_fixtures';

// ✅ hooks
import '../hooks/hooks_common';

// ✅ pages
import { SkillsPage } from '../pages/SkillsPage';

// ✅ BDD
const {
    Given,
    When,
    Then
} = createBdd(base2);

// ✅ member variables
const wait3sec = 3000;

// ✅ pages
let skillsPage: SkillsPage;

When(/^create a team and player balancer selecting an extra skill "([^\"]*)"$/, async (
    { page },
    skill: string
) => {
    skillsPage = new SkillsPage(page);
    await skillsPage.inputPlayersTeamsAndSelectSkills(skill);
    await skillsPage.pressNext();
    await page.waitForTimeout(wait3sec);
});
