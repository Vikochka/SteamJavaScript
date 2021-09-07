const BasePage = require("./basePage");

class GamePage extends BasePage {
    get lblGameDiscount() {
        return $("//div[@class='game_area_purchase_game']//div[@class='discount_block game_purchase_discount']//div[@class='discount_pct']")
    }

    async checkCurrentGame () {
        console.log("Check current game");
    }

    async open() {
        return super.open("gamePage");
    }
}

module.exports = new GamePage();