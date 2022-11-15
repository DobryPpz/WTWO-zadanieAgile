const System = require("../data/system");
const Firma = require("../classes/firma");

const addFirma = (req,res) => {
    if(!req.body.nazwa) return "Nie podano nazwy firmy";
    if(!req.body.adres) return "Nie podano adresu firmy";
    if(!req.body.nip) return "Nie podano NIPu firmy";
    if(!req.body.przychody) return "Nie podano przychodów firmy";
    if(!req.body.dochody) return "Nie podano dochodów firmy";
    if(!req.body.holdingname) return "Nie podano nazwy holdingu, w którym ma być firma";
    if(!(req.body.holdingname in System.obiekty)) return "Taki holding nie istnieje";
    if(req.body.nazwa in System.obiekty) return "Taki holding/firma już istnieje";
    const dodanaFirma = System.obiekty[req.body.holdingname].add(
        new Firma(
        req.body.nazwa,
        req.body.adres,
        req.body.nip,
        req.body.przychody,
        req.body.dochody));
    System.obiekty[req.body.nazwa] = dodanaFirma;
    return "Dodano nową firmę";
}

module.exports = {
    addFirma
}