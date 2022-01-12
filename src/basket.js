class Basket {

    constructor() {
        this.basket = []
    }

    getBasket() {
        return this.basket
    }

    addItem(item) {
        
        this.basket.push(item) 
        {return this.basket}
    }

    removeItem(item){
        for (let i = 0; i < this.basket.length; i++) 
        if (this.basket[i]=== item)
        {this.basket.splice(i)}
{return this.basket}
    }


















}





module.exports = Basket