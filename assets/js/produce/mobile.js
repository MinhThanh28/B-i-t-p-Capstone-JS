import Produce from "./produce.js";

class Mobile extends Produce {
    constructor(_name, _type, _discription, _price) {
        super(_name, _type, _discription, _price)
    }

    getPrice() {
        this.price = this.price;
    }
}
export default Mobile;