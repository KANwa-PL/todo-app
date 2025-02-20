Feature: TODO Management

  Scenario: I cannot add an empty TODO

    Given I am on the main page
    Then I should see "No Todos" message displayed
    When I add a new TODO with the title ""
    Then I should see a notification "Please enter a title"
    And I close the form

  Scenario: I can add a new TODO

    When I add a new TODO with the title "Buy Milk"
    Then I should see a notification "Task added successfully"
    And I should see the "incomplete" TODO

  Scenario: I can edit existing TODO

    When I "update" a TODO with title "Buy milk and some cereals"
    And I "update" a TODO with status "completed"
    And I should see the "completed" TODO
    Then I should see a notification "Task Updated successfully"

    When I "update" a TODO with title "Buy milk and some cereals"
    Then I should see a notification "No changes made"
    And I close the update task form

    When I "leave" a TODO with title "Buy Bread"
    And I "leave" a TODO with status "incomplete"
    And I should see the "completed" TODO

  Scenario: I can remove existing TODO

    When I remove a TODO
    Then I should see a notification "Todo Deleted Successfully"
    And I should see "No Todos" message displayed
    