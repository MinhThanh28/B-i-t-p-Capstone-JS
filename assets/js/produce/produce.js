class Produce {
    constructor(_name, _type, _discription, _price) {
        this.name = _name;
        this.type = _type;
        this.discription = _discription;
        this.price = _price;

    }

    getPrice() {
        this.price = 0;
    }
    
}
export default Produce;