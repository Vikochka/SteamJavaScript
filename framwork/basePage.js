const setting = require("../setting.json");

module.exports = class BasePage {
    async open() {
        await browser.setTimeout({'pageLoad': JSON.stringify(setting.timeout)})
        return browser.url(JSON.stringify(setting.URL));
    }
}