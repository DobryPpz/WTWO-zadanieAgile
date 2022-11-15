const Composite = require("../classes/composite");
const System = require("../data/system");

const addHolding = (req,res) => {
    if(!req.body.nazwa) return "Nie podano nazwy holdingu";
    if(req.body.nazwa in System.obiekty) return "Taki holding/firma już istnieje";
    const holding = new Composite(req.body.nazwa);
    System.obiekty[req.body.nazwa] = holding;
    System.holdingNames.add(req.body.nazwa);
    return "Dodano nowy holding";
}

module.exports = {
    addHolding
}