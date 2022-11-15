const XMLVisitor = require("../classes/XMLvisitor");
const System = require("../data/system");

const serializeXML = (req,res) => {
    if(!(req.body.nazwa in System.obiekty)) return "Nie ma takiej firmy";
    const v = new XMLVisitor();
    const firma = System.obiekty[req.body.nazwa];
    return firma.accept(v);
}

module.exports = {
    serializeXML
}