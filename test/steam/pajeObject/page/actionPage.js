const BasePage = require("./basePage");

class ActionPage extends BasePage {


    get lblDiscount() {
        return $$("//div[@class='discount_block  discount_block_inline']//div[@class='discount_pct']")
    }

    async selectGameWithMaxDiscount() {
        var discountList = new Array();
        var convertArray = new Array();
        discountList = await this.lblDiscount;
        console.log(discountList.length);
        var convert = 0;
        var max = 0;
        var count = 0;
        var indexOfMax;
        for (let i = 0; i < discountList.length; i++) {
            if (discountList[i] !== undefined) {
                let strDiscount = await discountList[i].getText();
                let discount = await strDiscount.split("%");
                console.log(discount)
                let convert = parseInt(discount);
                convert = convert - convert - convert;
                convertArray.push(convert)
            }
        }
        console.log(convertArray)
        console.log(convertArray.length)
        if (convertArray !== undefined) {
            for (let i = 0; i < convertArray.length; i++) {
                if (convertArray[i] > max) {
                    max = convertArray[i];
                    count = 1;
                } else if (convertArray[i] === max && convertArray[i - 1] > max) {
                    count++;
                    max = convertArray[i];
                }
            }
        }
        console.log(count)
        console.log("Max discount of game = " + max);
        indexOfMax = convertArray.indexOf(max);
        console.log("Index of max discount = " + indexOfMax);
        discountList[indexOfMax].click();
    }

    async maxDiscount(){
        var list = new Array();
        var array = new Array();
        list = await this.lblDiscount;
        console.log(list.length);
        var convert = 0;
        var max = 0;
        var count = 0;
        var indexOfMax;
        for (let i = 0; i < list.length; i++) {
            if (list[i] !== undefined) {
                let strDiscount = await list[i].getText();
                let discount = await strDiscount.split("%");
                console.log(discount)
                let convert = parseInt(discount);
                convert = convert - convert - convert;
                array.push(convert)
            }
        }
        console.log(array)
        console.log(array.length)
        if (array !== undefined) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                    count = 1;
                } else if (array[i] === max && array[i - 1] > max) {
                    count++;
                    max = array[i];
                }
            }
        }
        console.log(count)
        console.log("Max discount of game = " + max);
    }

    open() {
        return super.open('actionPage');
    }
}

module.exports = new ActionPage();