const BasePage = require("../page/basePage");

class MainMenu extends BasePage {
    get lblMenuSectionTemplate() {
        return $("//a[@class='pulldown_desktop'][contains(text(),'Categories')]")
    };

    get lblSubSectionTemplate() {
        return $("//div[contains(@class,'popup_block_new flyout_tab_flyout responsive_slidedown')]//a[contains(text(),'Action')]")
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