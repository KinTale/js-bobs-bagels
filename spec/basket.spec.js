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
   it ("add bagel to basket", () => {
        const expected = ["bagel"]

        let bagelInBasket = basket.addItem("bagel")
        expect(bagelInBasket).toEqual(expected)
    })

    //Test 3
    it ("remove bagel from basket", () => {
        const expected = []

        let removeItem = basket.removeItem("bagel")
        expect(removeItem).toEqual(expected)
    })





})