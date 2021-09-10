const BasePage = require("../../../../framework/basePage");
const json = require("../../../resources/testData.json");
const baseElement = require("../../../../framework/elements/baseElement");

class Header extends BasePage {
    get lblLanguage() {
    //    return baseElement.findElement("#language_pulldown");
        return $("#language_pulldown");
    }

    get btnLanguage() {
        return $(`//a[@class='popup_menu_item tight'][contains(text(),${JSON.stringify(json.languageSelected)})]`);
    }

    get btnInstallSteam() {
        return $("//a[@class='header_installsteam_btn_content']");
    }

    async selectLanguage() {
        const language = await this.lblLanguage.getText();

        if (language == "язык") {
            console.info("Site opening on russian");
            await this.lblLanguage.waitForDisplayed();
            await this.lblLanguage.click();
            console.info("Click on lbl ");
            await this.btnLanguage.waitForDisplayed()
            await this.btnLanguage.click();
            console.info("Select lang");
        } else {
            console.info("Site opening on english");
        }
    }

    async clickOnInstallSteam() {
        await this.btnInstallSteam.waitForDisplayed();
        await this.btnInstallSteam.click();
    }

    open() {
        return super.open('header');
    }
}

module.exports = new Header();