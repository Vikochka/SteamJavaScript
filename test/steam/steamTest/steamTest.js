const header = require('../pajeObject/header/header');
const mainMenu = require('../pajeObject/mainMenu/mainMenu');
const actionPage = require('../pajeObject/page/actionPage');
describe('Browser should open main page', () => {
    it('select language', async () => {
        await header.open();
        await header.selectLanguage();
        await mainMenu.navigateSection();
        await actionPage.selectGameWithMaxDiscount();
    });
});