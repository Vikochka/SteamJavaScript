const BasePage = require("../basePage");

module.exports = class BaseElement extends BasePage {

    element;

    async findElement() {
        this.element = await $(`${loc}`);
        const wait = await element.waitForDisplayed();
        if (!wait) {
            console.log("Element: " + element + " don't found")
        }

    }

    async open() {
        return super.open("baseElement");
    }
}

module.exports = new BaseElement();