Feature: TODO Management

  Scenario: I cannot add an empty TODO

    Given I am on the main page
    When I add a new TODO with the title ""
    Then I should see a notification "Please enter a title"
    And I close the form

  Scenario: I can add a new TODO

    When I add a new TODO with the title "Buy Milk"
    Then I should see a notification "Task added successfully"

  Scenario: I can edit existing TODO

    When I update a TODO with a new title "Buy milk and some cereals"
    Then I should see a notification "Task Updated successfully"

  Scenario: I can remove existing TODO

    When I remove a TODO
    Then I should see a notification "Todo Deleted Successfully"
    