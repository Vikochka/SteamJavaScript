const BasePage = require("./basePage");

class DownloadPage extends BasePage {
    get btnInstallSteam() {
        return $("//div[@id='about_greeting']//a[@class='about_install_steam_link']")
    }

    async downloadSteam() {

    }

    async open() {
        return super.open("download");
    }
}
