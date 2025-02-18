const { browser } = require('@wdio/globals')

class Page {

    open () {
        return browser.url(`https://wc-react-todo-app.netlify.app/`)
    }

    get toDoTitleInput () {
        return $('#title')
    }

    get toDoTypeInput () {
        return $('#type')
    }

    get toDoSubmitButton () {
        return $('button[type="submit"]')
    }

    get toDoCloseButton() {
        return $('.modal_closeButton__Fg7AM')
    }

    get toDoAddButton () {
        return $('button[type="button"]')
    }

    get toDoRemoveButton () {
        return $('(//div[@role="button"])[1]')
    }

    get toDoEditButton () {
        return $('(//div[@role="button"])[2]')
    }

    get toDoStatusDropdown () {
        return $('#status')
    }

    get notification() {
        return $('div[role="status"]')
    }

    async toDoStatusCheckboxes () {
        return $$('.todoItem_svgBox__z1vm6')
    }

    async statusValue(value) {
        return $(`option[value='${value}']`)
    }

    get toDoItems() {
        return $$('.todoItem_item__fnR7B')
    }
}

module.exports = new Page();