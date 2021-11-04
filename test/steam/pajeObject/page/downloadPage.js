const BasePage = require("../../../../framework/basePage");
const path = require('path')
const fs = require('fs')
const {URL} = require('url')
const assert = require('assert');

class DownloadPage extends BasePage {
    get btnInstallSteam() {
        return $("//div[@id='about_greeting']//a[@class='about_install_steam_link']")
    }

    async downloadSteam() {

        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        const xhr = new XMLHttpRequest()
        const downloadHref = await this.btnInstallSteam.getAttribute('href');
        console.log("Href = " + downloadHref)
        const downloadUrl = new URL(downloadHref);
        console.log("URL = " + downloadUrl)
        xhr.open('GET', downloadHref)
        xhr.onloadend = function () {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.DONE);
            }else {
                console.log(xhr.readyState + "ERROR")
            }
        }
        xhr.send()
    }

    async open() {
        return super.open("download");
    }
}

module.exports = new DownloadPage();
