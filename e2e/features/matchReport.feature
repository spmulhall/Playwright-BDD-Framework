Feature: Display Teams Playing Today

  As a business user
  I want to see a list of all teams playing today
  So that I can keep track of today's matches

  Scenario: Display teams playing today
    Given today's date is "2024-04-18"
    When I request to see the teams playing today
    Then the system should display the list of teams
    And there should be at least one team playing today

  Scenario: No matches today
    Given today's date is "2024-04-18"
    And there are no matches scheduled for today
    When I request to see the teams playing today
    Then the system should display a message indicating no matches today