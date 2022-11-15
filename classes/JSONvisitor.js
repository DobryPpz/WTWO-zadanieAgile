const Visitor = require("./visitor");

class JSONVisitor extends Visitor {
    constructor(){
        super();
    }
    visit(firma){
        let ret = {};
        ret["nazwa"] = firma.nazwa;
        ret["adres"] = firma.adres;
        ret["nip"] = firma.NIP;
        ret["przychody"] = firma.przychody;
        ret["dochody"] = firma.dochody;
        ret["kontrahents"] = firma.getKontrahents();
        return JSON.stringify(ret);
    }
}

module.exports = JSONVisitor;