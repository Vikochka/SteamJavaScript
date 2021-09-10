const BasePage = require("../basePage");

class BaseElement extends BasePage {

    async findElement() {
        const element = $(`${loc}`);
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