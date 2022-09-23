"use strict";
//
class ShirtWithNoPrice {
    // some implementation
    desc() {
        return "I am a shirt...";
    }
}
class Shirt extends ShirtWithNoPrice {
    price() {
        return 12;
    }
}
new Shirt();
// interface SkinProduct extends Product{
// }
class Shoes {
    desc() {
        return "this is shoes";
    }
    price() {
        return 279.54;
    }
    priced() {
        return this.price();
    }
}
class Socks {
    desc() {
        return "this is a sock";
    }
    price() {
        return 29.75;
    }
}
class Jeans {
    desc() {
        // const msg = super.desc();
        return "this is jeans";
    }
    price() {
        return 278.00;
    }
}
class SkinnyJeans extends Jeans {
    desc() {
        // const msg = this.desc();
        return " this is skinny jeans";
    }
    price() {
        return 375.00;
    }
}
const jeans = new SkinnyJeans();
console.log(jeans.desc());
// interface SuperJeans extends SkinnyJeans {
// }
const product = new Shoes();
class CartChecker {
    trackCart(cart) {
    }
    checkCarts() {
    }
    notify() {
    }
}
class ShoppingCart {
    addToCart(product) {
    }
    getTotal() {
        // total of all the products in your cart...
        // price for each product
        //
    }
    removeFromCart(product) {
        // do you really want to remove this
    }
    getItems() {
    }
}
// const cartChecker = new CartChecker();
// const myCart = new ShoppingCart();
// const productCatalogue = new ProductCatalogue();
// productCatalogue.getShoes();
// productCatalogue.searchShoesLessThan(500);
// productCatalogue.searchShoesByColor("blue");
// show the shoes on my app / web sites
// cartChecker.trackCart(myCart);
// // const redShoes = new Product();
// const blueShoes = new Shoes();
// const pinkSocks = new Socks();
// const blueJeans = new Jeans();
// const skinnyJeans = new SkinnyJeans();
// // when clicking on the product....
// // myCart.addToCart(redShoes);
// myCart.addToCart(blueShoes);
// myCart.addToCart(pinkSocks);
// myCart.addToCart(blueJeans);
// myCart.addToCart(skinnyJeans);
// myCart.getTotal();
// // get shock!!!
// // myCart.removeFromCart(pinkShoes);
// // 3 day later
// cartChecker.checkCarts();
// // oooo - there is an unchecked out cart
// // email users with unchecked out carts
// cartChecker.notify()
// // show me all my items in the cart
// myCart.getItems()
// //
// // myCart.checkout()
// // //
// // myCart.pay(cardDetails)
// // myCart.ship(customer);
// // myCart.done();
