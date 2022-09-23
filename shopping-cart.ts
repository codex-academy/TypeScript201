//

interface PricedB extends Priced, Product {
    priced() : number;
}


interface Priced {
    priced() : number;
}


interface Product {
    desc() : string
    price() : number
}


abstract class ShirtWithNoPrice implements Product {

    // some implementation
    desc(): string {
        return "I am a shirt..."
    }

    // some structure
    abstract price(): number;

}

class Shirt extends ShirtWithNoPrice {
    price(): number {
        return 12;
    }
}


new Shirt();





// interface SkinProduct extends Product{

// }


class Shoes implements PricedB {
    desc() {
        return "this is shoes"
    }

    price(): number {
        return 279.54
    }

    priced(): number {
        return this.price();
    }
}

class Socks implements Product{
    desc() {
        return "this is a sock"
    }

    price() : number{
        return 29.75;
    }

}

class Jeans implements Product {
    desc(): string {
        // const msg = super.desc();
       return "this is jeans"
    }

    price(): number {
        return 278.00;
    }
    
}

class SkinnyJeans extends Jeans {
    desc(): string {
        // const msg = this.desc();
        return  " this is skinny jeans"
    }

    price(): number {
        return 375.00;
    }
}

const jeans = new SkinnyJeans();

console.log(jeans.desc());


// interface SuperJeans extends SkinnyJeans {

// }


const product : Product = new Shoes()

class CartChecker {
    trackCart(cart: ShoppingCart){

    }

    checkCarts() {

    }

    notify() {

    }
}

class ShoppingCart {
    addToCart(product: Product) {

    }

    getTotal() {
        // total of all the products in your cart...
        // price for each product
        //
    }

    removeFromCart(product : Product) {
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