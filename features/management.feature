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

    When I update a TODO with a new title "Buy milk and some cereals"
    And I update a TODO with a new status "completed"
    Then I should see a notification "Task Updated successfully"
    And I should see the "completed" TODO

  Scenario: I can remove existing TODO

    When I remove a TODO
    Then I should see a notification "Todo Deleted Successfully"
    And I should see "No Todos" message displayed
    