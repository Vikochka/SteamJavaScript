const BasePage = require("./basePage");

class AgePage extends BasePage {

    get btnViewPageTemplate() {
        return $("//a[@class='btnv6_blue_hoverfade btn_medium']/span[text()='%s']")
    };

    get comboBoxYear() {
        return $("#ageYear");
    }

    async checkAge(interYear) {
        log.info("Check age:");
        const selectBox = await this.comboBoxYear;
        console.log(await selectBox.getText('option:checked')); // returns "uno"
        await selectBox.selectByVisibleText(interYear); //2000
        console.log(await selectBox.getText('option:checked')); // returns "cuatro"
    }

    async clickOnViewButton() {
        await this.btnViewPageTemplateю.click;
    }

    async open() {
        return super.open("agePage");
    }
}

module.exports = new AgePage();