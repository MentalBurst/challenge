Feature: Feature: Application Usage Tests

  @ready
  Scenario: User registers an account
    Given the user is on the registration page
    When they provide valid registration details
    Then the account should be created successfully

  @ready
  Scenario: User logs into the application
    Given the last created user is on the login page
    When they enter valid credentials
    Then they should be logged in successfully

    @ready
  Scenario Outline: User selects a sport
    Given the user is logged in
    When the user has selected a sport "<sport>" from the available options
    Then the sport should be set for the session

    Examples:
      | sport  |
      | tennis |

    @ready
  Scenario Outline: User creates a team selecting skills without adding a new player
    Given the user is logged in
    When the user has selected a sport "<sport>" from the available options
    And create a team and player balancer selecting an extra skill "<skill>"
    And do not add a new player
    And setup the team and confirm players
    Then the team should be created successfully

    Examples:
      | sport  | skill  |
      | tennis | server |

    @ready
  Scenario Outline: User creates teams, selects skills, confirms and set up a game to play it without adding a new player
    Given the user is logged in
    And the user has selected a sport "<sport>" from the available options
    And create a team and player balancer selecting an extra skill "<skill>"
    And do not add a new player
    And setup the team and confirm players
    Then the team should be created successfully
    And setup up a game with the team with te duration of "<duration>" seconds
    Then we are able to play the game with the team

    Examples:
      | sport      | skill   | duration |
      | tennis     | server  | 5        |
      | tennis     | shoot   | 15       |
      | volleyball | server  | 25       |
      | volleyball | shoot   | 60       |
      | soccer     | steal   | 30       |
      | soccer     | rebound | 30       |
      | futsal     | ping    | 30       |
      | futsal     | pass    | 30       |
      | basketball | steal   | 30       |
      | basketball | rebound | 30       |
      | handball   | server  | 30       |
      | handball   | rebound | 30       |
      | baseball   | server  | 30       |
      | baseball   | shoot   | 30       |
      | footvolley | ping    | 30       |
      | footvolley | rebound | 30       |


  #  TODO These are fully working scenarios, experimental but working, still a work in progress.
  #  They serve to teach the project with images to make full image navigation location based in image region.
  #  PLEASE NOTICE THAT
  #  THEY ARE NOT CLEAN, OPTIMIZED OR FULLY IMPLEMENTED

  @current
  @ready
  Scenario: Navigate using image match
    Given navigate using image "ANY_IMAGE" match

  @ready
  Scenario: Take a screenshot every parameter defined seconds
    Given take a screenshot every "5" seconds for a duration of "600" seconds


  # TODO defined but not implemented
  # TODO defined but not implemented
  # TODO defined but not implemented

  @todo
  Scenario Outline: User creates a team selecting skills and adding a new player
    When the user has selected a sport "<sport>" from the available options
    And create a team and player balancer selecting an extra skill "<skill>"
    And add a new player
    Then the team should be created successfully
    Examples:
      | sport  | skill  |
      | tennis | server |

  @todo
  Scenario Outline: User creates a team without selecting skills and without adding a new player
    When the user has selected a sport "<sport>" from the available options
    When create a team without selecting skills
    And do not add a new player
    Then the team should be created successfully
    Examples:
      | sport  |
      | tennis |

  @todo
  Scenario Outline: User creates a team without selecting skills and adding a new player
    When the user has selected a sport "<sport>" from the available options
    When create a team without selecting skills
    And add a new player
    Then the team should be created successfully
    Examples:
      | sport  |
      | tennis |
