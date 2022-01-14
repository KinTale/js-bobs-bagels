const Basket = require("../src/basket.js")
describe("Basket", () => {
    let basket

    beforeEach(() => {
        basket = new Basket();
    });

    //Test 1
    it("get all basket", () => {
        const expected = []
        let getBasket = basket.getBasket()
        expect(getBasket).toEqual(expected)
    })

    //Test 2
    it("add items to basket", () => {
        const expected = [{ SKU: 1, item: "Bagel", quantity: 1 }]
       // { item: "Brownie", quantity: 3 }]

        basket.addItem( "Bagel",  1 )
        //basket.addItem( "Brownie", 3 )

        let bagelInBasket = basket.getBasket()
        expect(bagelInBasket).toEqual(expected)
    })

  /*  //Test 3
    it("remove bagel from basket", () => {
        const expected = [{ SKU: 1, item: "Bagel", quantity: 1}]

        basket.addItem( "Bagel",  1 )
        basket.addItem( "Brownie",  3 )
        let removeItem = basket.removeItem( "Brownie", 3 )
        expect(removeItem).toEqual(expected)
    })

    //Test 4
    it(" alert when basket is full", () => {
        const expected = "Basket full, Please choose a bigger basket"

        basket.addItem({ item: "Bagel", quantity: 3 })
        basket.addItem({ item: "Brownie", quantity: 3 })
        let alert = basket.basketCapacity()
        expect(alert).toEqual(expected)

    })*/




})