const Component = require("./component");
const GoldFirmaDecorator = require("./goldfirmadecorator");

class Composite extends Component {
    constructor(nazwa){
        super();
        this.nazwa = nazwa;
        this.children = [];
    }
    add(c){
        let toAdd = c;
        if(c.przychody>100000){
            toAdd = new GoldFirmaDecorator(c);
        }
        this.children.push(toAdd);
        return toAdd;
    }
    remove(c){
        return this.children.splice(this.children.indexOf(c),1);
    }
    getChildren(){
        return this.children.slice();
    }
    getBonifikata(){
        let total = 0;
        for(let c of this.children){
            total += c.getBonifikata();
        }
        return total;
    }
}

module.exports = Composite;