const BasePage = require("../../../../framework/basePage");
const json = require("../../../resources/testData.json");

class AgePage extends BasePage {

    get btnViewPageTemplate() {
        return $("//a[@class='btnv6_blue_hoverfade btn_medium']/span[text()='%s']")
    };

    get comboBoxYear() {
        return $("#ageYear");
    }

    async checkAge() {
        log.info("Check age:");
        const selectBox = await this.comboBoxYear;
        console.log(await selectBox.getText('option:checked'));
        await selectBox.selectByVisibleText(JSON.stringify(json.year));
        console.log(await selectBox.getText('option:checked'));
    }

    async clickOnViewButton() {
        await this.btnViewPageTemplate.click();
    }

    async open() {
        return super.open("agePage");
    }
}

module.exports = new AgePage();