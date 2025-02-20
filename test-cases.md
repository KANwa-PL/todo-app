# Identifying key functionalities of the application:

## Displaying TODOs
The application displays exisitng TODOs. If there are no TODOs added yet, the application displays a 'No Todos' message. If all TODOs are removed, the application also goes back to the 'No Todos' message.

## Adding TODOs
The application lets the user add new TODO in a modal window [a simple form]. Once added, the new TODO is displayed in the main view. The application does not display newly created TODOs in any specific order. The application does not allow adding an empty-titled TODO.

## Updating TODOs
The application lets the user update existing TODOs by modifying the title and status in a modal window. The user can decide which TODO to update. Unsaved changes can be discarded by using the cancel button or the close button. Marking the TODO as 'Completed' updates the checkbox and the styling of the title.

## Removing TODOs
The application can remove existing TODOs. There's no confirmation dialogue. The user can decide which TODO to remove and which to leave. Once all TODOs are removed, the application dislays the 'No Todos' message again.

## Filtering TODOs
The application allows the user to filter existing TODOs by status ['Completed', 'Incomplete', 'All']. 'All' filter is selected by default. Filtering an empty dashboard has not effect.

## Notifications
The application has a notification functionality which displays a Notification when an Action is executed:

Action | Notification
--- | ---
Adding a TODO | Task added successfully
Updating a TODO | Task Updated successfully
Deleting a TODO | Todo Deleted Successfully
Attempting to add an empty-titled TODO | Please enter a title
Attempting to update without changes | No changes made

# Define 5 test cases covering key functionalities of the application
Each test case represents one of the functionalities listed above [Feature List approach to testing]. However, they were combined into two seperate test automation workflows representing how a potential user may use the application [User Journey approach to testing]

## Test case 1:
### Description:
This test case verifies if the application displays existing TODOs properly.

### Prerequisites:
This test case should be executed in parallel with the remaining test cases.

### Steps to execute:
Action | Expected Result
--- | ---
Open the application in a Web Browser | Application is displayed properly with 'TODO List' on top and 'No Todos' message at the bottom
Add a correct TODO | TODO is displayed in the main view. It has 'Incomplete' status by default.
Update an existing TODO | TODO is displayed in the main view with newly added title and status
Remove an existing TODO | TODO is no longer displayed in the main view
Remove last TODO | 'No Todos' message is displayed at the bottom

Should any of the steps result in an unexpected behavior consider the test case as 'FAILED' and raise an issue with the appropriate team. Otherwise, consider the test case as 'PASSED'.

## Test case 2:
### Description:
This test case is to verify that the user can add a new TODO. 

### Steps to execute:
Action | Expected Result
--- | ---
Open the application in a Web Browser | Application is displayed properly with 'TODO List' on top and 'No Todos' message at the bottom
Try adding an empty-titled TODO | No TODO is added.
Add a new TODO with the title "Buy Milk" | New TODO is added with the expected title and 'Incomplete' status

Should any of the steps above result in an unexpected behavior consider the test case as 'FAILED' and raise an issue with the appropriate team. Otherwise, consider the test case as 'PASSED'.

## Test case 3:
### Description:
This test case is to verify that the user can update an existing TODO. 

### Prerequisites:
As a prerequisite, execute test case 2 first.

### Steps to execute:
Action | Expected Result
--- | ---
Hit 'Modify' [pencil button] on the "Buy Milk" TODO | "Update TODO" modal is opened
Update the TODO with a new title "Buy milk and some cereals" | New title is retained in the modal
Update the TODO with a new status "Completed" | New status is retained in the modal
Hit 'Update Task' button | Changes are saved and the updated TODO is displayed in the main view
Return to the same TODO and update it with a new title "Buy Bread" | New title is retained in the modal
Update the TODO with a new status "Incompleted" | New status is retained in the modal
Hit 'Cancel' button or 'Close' button | Changes are discarded and the TODO is unchanged ["Buy milk and some cereals", "Completed"]

Should any of the steps above result in an unexpected behavior consider the test case as 'FAILED' and raise an issue with the appropriate team. Otherwise, consider the test case as 'PASSED'.

## Test case 4:
### Description:
This test case is to verify that the user can remove an existing TODO. 

### Prerequisites:
As a prerequisite, execute test case 2 first.

### Steps to execute:
Action | Expected Result
--- | ---
Hit 'Remove' [trash can] on the "Buy Milk" TODO | TODO is removed from the main view
Remove all TODOs | Application is displayed with 'No Todos' message at the bottom

Should any of the steps above result in an unexpected behavior consider the test case as 'FAILED' and raise an issue with the appropriate team. Otherwise, consider the test case as 'PASSED'.

## Test case 5:
### Description:
This test case is to verify that the notification functionality is working as expected.

### Prerequisites:
This test case should be executed in parallel with the remaining test cases.

### Steps to execute:
Action | Expected Result
--- | ---
Adding a TODO | 'Task added successfully' notification is displayed
Updating a TODO | 'Task Updated successfully' notification is displayed
Deleting a TODO | 'Todo Deleted Successfully' notification is displayed
Attempting to add an empty-titled TODO | 'Please enter a title' notification is displayed
Attempting to update without changes | 'No changes made' notification is displayed

Should any of the steps above result in an unexpected behavior consider the test case as 'FAILED' and raise an issue with the appropriate team. Otherwise, consider the test case as 'PASSED'.

## Test case 6:
### Description:
This test case is to verify that the TODOs are filtered as expected.

### Prerequisites:
Create a collection of TODOs with dissimilar statuses and titles:

Title | Status
--- | ---
"Buy milk" | Incomplete
"Mow the lawn" | Completed
"Go to the barber" | Incomplete
"Order the gifts" | Completed
"Prepare the dinner" | Incomplete
"Find a new job" | Completed

### Steps to execute:
Action | Expected Result
--- | ---
Filter TODOs by applying 'Completed' value | The main view is getting filtered. Only 'Completed' TODOs are displayed.
Filter TODOs by applying 'Incomplete' value | The main view is getting filtered. Only 'Incomplete' TODOs are displayed.
Filter TODOs by applying 'All' value | The main view is getting filtered. Both 'Completed' and 'Incomplete' TODOs are displayed.

Should any of the steps above result in an unexpected behavior consider the test case as 'FAILED' and raise an issue with the appropriate team. Otherwise, consider the test case as 'PASSED'.
