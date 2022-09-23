"use strict";
class FoodScale {
    weigh(item) {
        // get the weight
        return 0;
    }
    getPriceForItemPerKg(item) {
        // find the price for this item...
        return 0;
    }
    getPrice(item) {
        // how heavy
        let weight = this.weigh(item);
        // how much does it cost for this weight
        let pricePerKg = this.getPriceForItemPerKg(item);
        return weight * pricePerKg / 1000;
    }
}
class LabelPrinter {
    print(product, price) {
        return ` This ${product} will cost ${price}`;
    }
}
// Above the line... we are defining the blue prints...
// Using my classes
const productName = "bananas";
const scale = new FoodScale();
const printer = new LabelPrinter();
const price = scale.getPrice(productName);
const label = printer.print(productName, price);
console.log(label);
