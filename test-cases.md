# Identifying key functionalities of the application:

## Displaying TODOs
The application displays exisitng TODOs. If there are no TODOs added yet, the application displays a 'No Todos' message. If all TODOs are removed, the application also goes back to the 'No Todos' message.

## Adding TODOs
The application lets the user add new TODO in a modal window [a simple form]. Once added, the new TODO is displayed in the main view. The application does not display newly created TODOs in any specific order. The application does not allow adding an empty-titled TODO.

## Removing TODOs
The application can remove existing TODOs. There's no confirmation dialogue. The user can decide which TODO to remove and which to leave. Once all TODOs are removed, the application dislays the 'No Todos' message again.

## Updating TODOs
The application lets the user update existing TODOs by modifying the title and status in a modal window. The user can decide which TODO to update. Unsaved changes can be discarded by using the cancel button or the close button. Marking the TODO as 'Completed' updates the checkbox and the styling of the title.

## Filtering TODOs
The application allows the user to filter existing TODOs by status ['Completed', 'Incomplete', 'All']. 'All' filter is selected by default. Filtering an empty dashboard has not effect.

## Notifications
The application has a notification functionality which displays a Notification when an Action is executed:

Action | Notification
--- | ---
Adding a TODO | "Task added successfully"
Updating a TODO | "Task Updated successfully"
Deleting a TODO | "Todo Deleted Successfully"
Attempting to add an epty-titled TODO | "Please enter a title"

# Define 5 test cases covering key functionalities of the application
Each test case represents one of the functionalities listed above [Feature List approach to testing]. However, they were combined into two seperate test automation workflows representing how a potential user may use the application [User Journey approach to testing]

## Test case 1:

Top-level description of tested functionality
Prerequisites (if needed)
Steps to execute
Validation criteria
