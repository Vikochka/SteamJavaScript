const header = require('../pajeObject/header/header');
const mainMenu = require('../pajeObject/mainMenu/mainMenu');
const actionPage = require('../pajeObject/page/actionPage');
const downloadPage = require('../pajeObject/page/downloadPage');
const agePage = require('../pajeObject/page/agePage');
const gamePage = require("../pajeObject/page/gamePage");

describe('Steam test', () => {
    it('Shoul select discount and download SteamSetup.exe', async () => {
        await header.open();
        await header.selectLanguage();
        await mainMenu.navigateSection();
        await actionPage.selectGameWithMaxDiscount();
        const pageURL = await browser.getUrl();
        console.log("Page url = " + pageURL);
        const page = await pageURL.split("/")[3];
        console.log(page);
        const namePage = "app";
        if (page == namePage) {
            await console.log("Age page was opened");
            await agePage.checkAge(2000);
            await agePage.clickOnViewButton();
        } else {
            console.log("Game page was opened");
            await gamePage.checkCurrentGame();
        }
        await header.clickOnInstallSteam();
        await downloadPage.downloadSteam();
    });
});