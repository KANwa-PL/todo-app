Feature: TODO Filtering

  Scenario: I can filter incomplete TODOS 

    Given I am on the main page
    Then I should see "No Todos" message displayed
    When I add a new TODO with the title "Buy milk"
    And I add a new TODO with the title "Mow the lawn"
    And I add a new TODO with the title "Go to the barber"
    And I add a new TODO with the title "Order the gifts"
    And I add a new TODO with the title "Prepare the dinner"
    And I add a new TODO with the title "Find a new job"
    And I update TODOs with new statuses
    And I filter the TODOS by "incomplete"
    Then I should see 3 TODOS

Scenario: I can filter complete TODOS 

    When I filter the TODOS by "complete"
    Then I should see 3 TODOS

Scenario: I see all TODOS without filtering

    When I filter the TODOS by "all"
    Then I should see 6 TODOS

Scenario: I can remove all TODOS

    When I remove a TODO
    And I remove a TODO
    And I remove a TODO
    And I remove a TODO
    And I remove a TODO
    And I remove a TODO
    Then I should see "No Todos" message displayed