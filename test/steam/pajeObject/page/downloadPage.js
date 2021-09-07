const BasePage = require("./basePage");
const path = require('path')
const fs = require('fs')
const { URL } = require('url')
const assert = require('assert');

class DownloadPage extends BasePage {
    get btnInstallSteam() {
        return $("//div[@id='about_greeting']//a[@class='about_install_steam_link']")
    }

    async downloadSteam() {
        await this.btnInstallSteam.click();
        console.log("Click download button")
        const downloadHref = await this.btnInstallSteam.getAttribute('href');
        console.log("Href = " + downloadHref)
        const downloadUrl = new URL(downloadHref);
        console.log("URL = " + downloadUrl)
        const fullPath = downloadUrl.pathname;
        console.log("Full path = " + fullPath)
        const splitPath = fullPath.split('/')
        const fileName = splitPath.splice(-1)[0]
        console.log("FIle name = " + fileName)
        const filePath = path.join(global.downloadDir, fileName)
        console.log("File path = " + filePath)
        browser.call(function (){
            return waitForFileExists(filePath, 60000)
        });
        const fileContents = fs.readFileSync(filePath, 'utf-8')
        console.log("File content" + fileContents)
        assert.ok(fileContents.includes('SteamSetup.exe'))
    }

    async open() {
        return super.open("download");
    }
}

module.exports = new DownloadPage();
