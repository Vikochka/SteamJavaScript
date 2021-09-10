const BasePage = require("../../../../framework/basePage");
const actionPage = require("../page/actionPage")

class GamePage extends BasePage {
    get lblGameDiscount() {
        return $("//div[@class='game_area_purchase_game']//div[@class='discount_block game_purchase_discount']//div[@class='discount_pct']")
    }

    async checkCurrentGame() {
        console.log("Check current game");

        const max = actionPage.maxDiscount();

        const gameDiscount = await this.lblGameDiscount.getText();
        console.log("Discount of selected game = " + gameDiscount);
        let discount = await gameDiscount.split("%");
        console.log(discount)
        let convert = parseInt(discount);
        convert = convert - convert - convert;
        if (max === convert) {
            return true;
        } else {
            return false;
        }
    }

    async open() {
        return super.open("gamePage");
    }
}

module.exports = new GamePage();