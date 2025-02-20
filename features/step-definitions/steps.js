const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser, Key } = require('@wdio/globals')
const Page = require('../pageobjects/page.js');

const pages = {
    main: Page
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I add a new TODO with the title "([^"]*)"$/, async (title) => {
    await Page.toDoAddButton.click()
    await Page.toDoTitleInput.setValue(title)
    await Page.toDoSubmitButton.click()
    await browser.pause(500)
});

When(/^I remove a TODO$/, async () => {
    await Page.toDoRemoveButton.click()
    await browser.pause(500)
});

When(/^I update a TODO with a new title "([^"]*)"$/, async (newTitle) => {
    await Page.toDoEditButton.click()
    await Page.toDoTitleInput.setValue(newTitle)
    await Page.toDoSubmitButton.click()
    await browser.pause(500)
});

When(/^I update a TODO with a new status "([^"]*)"$/, async (newStatus) => {
    await Page.toDoEditButton.click()
    await Page.toDoTypeInput.click()
    await browser.keys([newStatus, "Enter"]);
    await Page.toDoSubmitButton.click()
    await browser.pause(500)
});

When(/^I update TODOs with new statuses$/, async () => {
    const checkboxes = await Page.toDoStatusCheckboxes()
    for (let i = 0; i < checkboxes.length; i++) {
        if (i % 2 === 1) {
            await checkboxes[i].click()
            await browser.pause(500)
        }
    }
    await browser.pause(500)
});

When(/^I close the form$/, async () => {
    await Page.toDoCloseButton.click()
});

Then(/^I should see a notification "([^"]*)"$/, async (notification) => {
    await expect(Page.notification).toHaveText(notification)
});

Then(/^I should see the "([^"]*)" TODO$/, async (status) => {
    if (status === "completed") {
        await expect(Page.toDoCompletedTitle).toBeDisplayed()
        await expect(Page.toDoCheckbox).toMatchSnapshot()
    } else {
        await expect(Page.toDoIncompletedTitle).toBeDisplayed()
        await expect(Page.toDoCheckbox).toMatchSnapshot()
    }

});

Then(/^I should see "([^"]*)" message displayed$/, async (message) => {
    await expect(Page.noToDos).toHaveText(message)
});

When(/^I filter the TODOS by "([^"]*)"$/, async (filter) => {
    await Page.toDoStatusDropdown.click()
    const element = await Page.statusValue(filter)
    await element.click()

});

Then(/I should see ([1-9]) TODOS$/, async (number) => {
    const todos = await Page.toDoItems
    await expect(todos).toBeElementsArrayOfSize(parseInt(number))
})  

