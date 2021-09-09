const BasePage = require("../page/basePage");

class Header extends BasePage {
    get lblLanguage() {
        return $("#language_pulldown")
    }

    get btnLanguage() {
        var json= new JSON
        const languageEn =json.languageSelected;//"English";

        return $(`//a[@class='popup_menu_item tight'][contains(text(),'${languageEn}')]`);
    }

    get btnInstallSteam() {
        return $("//a[@class='header_installsteam_btn_content']");
    }

    async selectLanguage() {
        const language = await this.lblLanguage.getText();

        if (language == "язык") {
            console.info("Site opening on russian");
            await this.lblLanguage.waitForDisplayed()
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