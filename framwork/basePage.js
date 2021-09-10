module.exports = class BasePage {
    async open() {
        await browser.setTimeout({'pageLoad': 10000})
        return browser.url("https://store.steampowered.com");
    }
}