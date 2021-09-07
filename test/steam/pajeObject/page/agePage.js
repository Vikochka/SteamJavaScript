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
    }

    async open() {
        return super.open("agePage");
    }
}

module.exports = new AgePage();