// Generated from: features\application.feature
import { test } from "../../fixtures/steps_fixtures.ts";

test.describe('Feature: Application Usage Tests', () => {

  test('User registers an account', { tag: ['@ready'] }, async ({ Given, page, When, Then }) => { 
    await Given('the user is on the registration page', null, { page }); 
    await When('they provide valid registration details', null, { page }); 
    await Then('the account should be created successfully', null, { page }); 
  });

  test('User logs into the application', { tag: ['@ready'] }, async ({ Given, page, When, Then }) => { 
    await Given('the last created user is on the login page', null, { page }); 
    await When('they enter valid credentials', null, { page }); 
    await Then('they should be logged in successfully', null, { page }); 
  });

  test.describe('User selects a sport', () => {

    test('Example #1', { tag: ['@ready'] }, async ({ Given, page, When, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await When('the user has selected a sport "tennis" from the available options', null, { page }); 
      await Then('the sport should be set for the session', null, { page }); 
    });

  });

  test.describe('User creates a team selecting skills without adding a new player', () => {

    test('Example #1', { tag: ['@ready'] }, async ({ Given, page, When, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await When('the user has selected a sport "tennis" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "server"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
    });

  });

  test.describe('User creates teams, selects skills, confirms and set up a game to play it without adding a new player', () => {

    test('Example #1', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "tennis" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "server"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "5" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #2', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "tennis" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "shoot"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "15" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #3', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "volleyball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "server"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "25" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #4', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "volleyball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "shoot"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "60" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #5', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "soccer" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "steal"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #6', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "soccer" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "rebound"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #7', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "futsal" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "ping"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #8', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "futsal" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "pass"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #9', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "basketball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "steal"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #10', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "basketball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "rebound"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #11', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "handball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "server"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #12', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "handball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "rebound"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #13', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "baseball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "server"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #14', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "baseball" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "shoot"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #15', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "footvolley" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "ping"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

    test('Example #16', { tag: ['@ready'] }, async ({ Given, page, And, Then }) => { 
      await Given('the user is logged in', null, { page }); 
      await And('the user has selected a sport "footvolley" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "rebound"', null, { page }); 
      await And('do not add a new player', null, { page }); 
      await And('setup the team and confirm players', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
      await And('setup up a game with the team with te duration of "30" seconds', null, { page }); 
      await Then('we are able to play the game with the team', null, { page }); 
    });

  });

  test('Navigate using image match', { tag: ['@current', '@ready'] }, async ({ Given, page }) => { 
    await Given('navigate using image "ANY_IMAGE" match', null, { page }); 
  });

  test('Take a screenshot every parameter defined seconds', { tag: ['@ready'] }, async ({ Given, page }) => { 
    await Given('take a screenshot every "5" seconds for a duration of "600" seconds', null, { page }); 
  });

  test.describe('User creates a team selecting skills and adding a new player', () => {

    test('Example #1', { tag: ['@todo'] }, async ({ When, page, And, Then }) => { 
      await When('the user has selected a sport "tennis" from the available options', null, { page }); 
      await And('create a team and player balancer selecting an extra skill "server"', null, { page }); 
      await And('add a new player'); 
      await Then('the team should be created successfully', null, { page }); 
    });

  });

  test.describe('User creates a team without selecting skills and without adding a new player', () => {

    test('Example #1', { tag: ['@todo'] }, async ({ When, page, And, Then }) => { 
      await When('the user has selected a sport "tennis" from the available options', null, { page }); 
      await When('create a team without selecting skills'); 
      await And('do not add a new player', null, { page }); 
      await Then('the team should be created successfully', null, { page }); 
    });

  });

  test.describe('User creates a team without selecting skills and adding a new player', () => {

    test('Example #1', { tag: ['@todo'] }, async ({ When, page, And, Then }) => { 
      await When('the user has selected a sport "tennis" from the available options', null, { page }); 
      await When('create a team without selecting skills'); 
      await And('add a new player'); 
      await Then('the team should be created successfully', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks, $workerInfo, browser }) => $runBeforeAllHooks(test, { $workerInfo, browser }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks, $workerInfo, browser }) => $registerAfterAllHooks(test, { $workerInfo, browser }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\application.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@ready"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the registration page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When they provide valid registration details","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the account should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@ready"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the last created user is on the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When they enter valid credentials","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then they should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":23,"tags":["@ready"],"steps":[{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the sport should be set for the session","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":36,"tags":["@ready"],"steps":[{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And create a team and player balancer selecting an extra skill \"server\"","stepMatchArguments":[{"group":{"start":60,"value":"server","children":[]}}]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":51,"tags":["@ready"],"steps":[{"pwStepLine":44,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":46,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"server\"","stepMatchArguments":[{"group":{"start":60,"value":"server","children":[]}}]},{"pwStepLine":47,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"5\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"5","children":[]}}]},{"pwStepLine":51,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":52,"tags":["@ready"],"steps":[{"pwStepLine":55,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":57,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"shoot\"","stepMatchArguments":[{"group":{"start":60,"value":"shoot","children":[]}}]},{"pwStepLine":58,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"15\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"15","children":[]}}]},{"pwStepLine":62,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":53,"tags":["@ready"],"steps":[{"pwStepLine":66,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"volleyball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"volleyball","children":[]}}]},{"pwStepLine":68,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"server\"","stepMatchArguments":[{"group":{"start":60,"value":"server","children":[]}}]},{"pwStepLine":69,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"25\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"25","children":[]}}]},{"pwStepLine":73,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":54,"tags":["@ready"],"steps":[{"pwStepLine":77,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"volleyball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"volleyball","children":[]}}]},{"pwStepLine":79,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"shoot\"","stepMatchArguments":[{"group":{"start":60,"value":"shoot","children":[]}}]},{"pwStepLine":80,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"60\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"60","children":[]}}]},{"pwStepLine":84,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":87,"pickleLine":55,"tags":["@ready"],"steps":[{"pwStepLine":88,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"soccer\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"soccer","children":[]}}]},{"pwStepLine":90,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"steal\"","stepMatchArguments":[{"group":{"start":60,"value":"steal","children":[]}}]},{"pwStepLine":91,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":95,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":56,"tags":["@ready"],"steps":[{"pwStepLine":99,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"soccer\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"soccer","children":[]}}]},{"pwStepLine":101,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"rebound\"","stepMatchArguments":[{"group":{"start":60,"value":"rebound","children":[]}}]},{"pwStepLine":102,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":106,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":109,"pickleLine":57,"tags":["@ready"],"steps":[{"pwStepLine":110,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"futsal\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"futsal","children":[]}}]},{"pwStepLine":112,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"ping\"","stepMatchArguments":[{"group":{"start":60,"value":"ping","children":[]}}]},{"pwStepLine":113,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":117,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":120,"pickleLine":58,"tags":["@ready"],"steps":[{"pwStepLine":121,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"futsal\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"futsal","children":[]}}]},{"pwStepLine":123,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"pass\"","stepMatchArguments":[{"group":{"start":60,"value":"pass","children":[]}}]},{"pwStepLine":124,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":128,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":131,"pickleLine":59,"tags":["@ready"],"steps":[{"pwStepLine":132,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"basketball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"basketball","children":[]}}]},{"pwStepLine":134,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"steal\"","stepMatchArguments":[{"group":{"start":60,"value":"steal","children":[]}}]},{"pwStepLine":135,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":139,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":142,"pickleLine":60,"tags":["@ready"],"steps":[{"pwStepLine":143,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"basketball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"basketball","children":[]}}]},{"pwStepLine":145,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"rebound\"","stepMatchArguments":[{"group":{"start":60,"value":"rebound","children":[]}}]},{"pwStepLine":146,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":150,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":153,"pickleLine":61,"tags":["@ready"],"steps":[{"pwStepLine":154,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"handball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"handball","children":[]}}]},{"pwStepLine":156,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"server\"","stepMatchArguments":[{"group":{"start":60,"value":"server","children":[]}}]},{"pwStepLine":157,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":161,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":164,"pickleLine":62,"tags":["@ready"],"steps":[{"pwStepLine":165,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"handball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"handball","children":[]}}]},{"pwStepLine":167,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"rebound\"","stepMatchArguments":[{"group":{"start":60,"value":"rebound","children":[]}}]},{"pwStepLine":168,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":172,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":175,"pickleLine":63,"tags":["@ready"],"steps":[{"pwStepLine":176,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"baseball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"baseball","children":[]}}]},{"pwStepLine":178,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"server\"","stepMatchArguments":[{"group":{"start":60,"value":"server","children":[]}}]},{"pwStepLine":179,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":180,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":183,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":186,"pickleLine":64,"tags":["@ready"],"steps":[{"pwStepLine":187,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"baseball\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"baseball","children":[]}}]},{"pwStepLine":189,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"shoot\"","stepMatchArguments":[{"group":{"start":60,"value":"shoot","children":[]}}]},{"pwStepLine":190,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":191,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":194,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":197,"pickleLine":65,"tags":["@ready"],"steps":[{"pwStepLine":198,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"footvolley\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"footvolley","children":[]}}]},{"pwStepLine":200,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"ping\"","stepMatchArguments":[{"group":{"start":60,"value":"ping","children":[]}}]},{"pwStepLine":201,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":205,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":208,"pickleLine":66,"tags":["@ready"],"steps":[{"pwStepLine":209,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given the user is logged in","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the user has selected a sport \"footvolley\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"footvolley","children":[]}}]},{"pwStepLine":211,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And create a team and player balancer selecting an extra skill \"rebound\"","stepMatchArguments":[{"group":{"start":60,"value":"rebound","children":[]}}]},{"pwStepLine":212,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And setup the team and confirm players","stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And setup up a game with the team with te duration of \"30\" seconds","stepMatchArguments":[{"group":{"start":51,"value":"30","children":[]}}]},{"pwStepLine":216,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then we are able to play the game with the team","stepMatchArguments":[]}]},
  {"pwTestLine":221,"pickleLine":76,"tags":["@current","@ready"],"steps":[{"pwStepLine":222,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given navigate using image \"ANY_IMAGE\" match","stepMatchArguments":[{"group":{"start":22,"value":"ANY_IMAGE","children":[]}}]}]},
  {"pwTestLine":225,"pickleLine":80,"tags":["@ready"],"steps":[{"pwStepLine":226,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given take a screenshot every \"5\" seconds for a duration of \"600\" seconds","stepMatchArguments":[{"group":{"start":25,"value":"5","children":[]}},{"group":{"start":55,"value":"600","children":[]}}]}]},
  {"pwTestLine":231,"pickleLine":96,"tags":["@todo"],"steps":[{"pwStepLine":232,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"When the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":233,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And create a team and player balancer selecting an extra skill \"server\"","stepMatchArguments":[{"group":{"start":60,"value":"server","children":[]}}]},{"pwStepLine":234,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"And add a new player","stepMatchArguments":[]},{"pwStepLine":235,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":242,"pickleLine":106,"tags":["@todo"],"steps":[{"pwStepLine":243,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":244,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When create a team without selecting skills","stepMatchArguments":[]},{"pwStepLine":245,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"And do not add a new player","stepMatchArguments":[]},{"pwStepLine":246,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":253,"pickleLine":116,"tags":["@todo"],"steps":[{"pwStepLine":254,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When the user has selected a sport \"tennis\" from the available options","stepMatchArguments":[{"group":{"start":31,"value":"tennis","children":[]}}]},{"pwStepLine":255,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"When create a team without selecting skills","stepMatchArguments":[]},{"pwStepLine":256,"gherkinStepLine":112,"keywordType":"Action","textWithKeyword":"And add a new player","stepMatchArguments":[]},{"pwStepLine":257,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then the team should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end