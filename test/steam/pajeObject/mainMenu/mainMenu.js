const BasePage = require("../../../../../framework/basePage");
const json = require("../../../resources/testData.json");

class MainMenu extends BasePage {
    get lblMenuSectionTemplate() {
        return $(`//a[@class='pulldown_desktop'][contains(text(),${JSON.stringify(json.menuSection)})]`)
    };

    get lblSubSectionTemplate() {
        return $(`//div[contains(@class,'popup_block_new flyout_tab_flyout responsive_slidedown')]//a[contains(text(),
        ${JSON.stringify(json.sectionCase)})]`)
    };

    async navigateSection() {
        await this.lblMenuSectionTemplate.waitForDisplayed();
        await this.lblMenuSectionTemplate.click();
        await this.lblSubSectionTemplate.waitForDisplayed();
        await this.lblSubSectionTemplate.click();
    }

    open() {
        return super.open('mainMenu');
    }
}

module.exports = new MainMenu();