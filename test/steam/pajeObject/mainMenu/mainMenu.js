const BasePage = require("../page/basePage");

class MainMenu extends BasePage {
    get lblMenuSectionTemplate() {
        const menuSection = "Categories";
        return $(`//a[@class='pulldown_desktop'][contains(text(),'${menuSection}')]`)
    };

    get lblSubSectionTemplate() {
        const subSection = "Action";
        return $(`//div[contains(@class,'popup_block_new flyout_tab_flyout responsive_slidedown')]//a[contains(text(),'${subSection}')]`)
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