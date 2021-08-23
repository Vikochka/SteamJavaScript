const BasePage = require("./basePage");

class ActionPage extends BasePage {


    get lblDiscount() {
        return $$("//div[@class='discount_block  discount_block_inline']//div[@class='discount_pct']")
    }

    async selectGameWithMaxDiscount() {
        var discountList = new Array()
        discountList = await this.lblDiscount;
        console.log(discountList.length);
        var convert = 0;
        var max;
        var indexOfMax = 0;
        for (let i = 0; i < discountList.length; i++) {
            if (discountList[i] !== undefined) {
                let strDiscount = await discountList[i].getText();
                //    let discount = await strDiscount.split("%");
                var array = new Array(String);
                array = await strDiscount.split("%");
                for (let j = 0; j < array.length; j++) {
                    let convert = await parseInt(array[j]);
                    convert = convert - convert - convert;
                }
                discountList.push(convert);
                console.log(discountList.push(convert))
                max = Math.max(discountList)
                console.log("Max discount of game = " + max);
                var count = discountList.reduce(discountList, max);
                if (count !== 1) {
                    indexOfMax = Math.random(count);
                    console.log("Games with the same maximum discount = " + count);
                } else {
                    indexOfMax = discountList.indexOf(max)
                }
                discountList.indexOf(indexOfMax).click();
            }

        }

    }

    open() {
        return super.open('actionPage');
    }
}

module.exports = new ActionPage();