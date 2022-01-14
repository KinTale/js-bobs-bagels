const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;

class Basket {

    constructor(capacity = smallBasket) {
        this.basket = []
        this.counter = 1
        this.basketSize = capacity
        //this.quantiy = this.basket.quantiy

    }

    getBasket(){
        return this.basket
    }

    addItem(itemName, itemQuantity) {
            const insideBasket = {
                SKU : this.counter,
                item : itemName,
                quantity : itemQuantity,
            }
            this.counter++
        this.basket.push(insideBasket)
       //return this.basket
     console.log("basket", insideBasket)
    }

    removeItem(item) {
        /*for (let i = 0; i < this.basket.length; i++)
            if (this.basket[i] === item) { this.basket.splice(i) }
        { return this.basket }*/
        this.basket.filter(items => items === item)

    }

    basketCapacity(){
        for (let i = 0; i < this.quantity.length; i++) 
            if (this.quantity.sum([i]) > smallBasket) {return "Basket full, Please choose a bigger basket"}

    }

















}





module.exports = Basket