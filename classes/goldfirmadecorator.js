const Component = require("./component");

class GoldFirmaDecorator extends Component {
    constructor(firma){
        super();
        this.wrappee = firma
    }
    getNazwa(){
        return this.wrappee.nazwa;
    }
    addKontrahent(kontrahent){
        this.wrappee.addKontrahent(kontrahent);
    }
    getKontrahents(){
        return this.wrappee.getKontrahents();
    }
    timeify(d){
        return this.wrappee.timeify(d);
    }
    kmp(text,pattern){
        return this.wrappee.kmp(text,pattern);
    }
    getBonifikata(){
        return this.wrappee.getBonifikata()+30;
    }
    accept(visitor){
        return visitor.visit(this.wrappee);
    }
}

module.exports = GoldFirmaDecorator;