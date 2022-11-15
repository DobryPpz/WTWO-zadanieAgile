const JSONVisitor = require("../classes/JSONvisitor");
const System = require("../data/system");

const serializeJSON = (req,res) => {
    if(!(req.body.nazwa in System.obiekty)) return "Nie ma takiej firmy";
    const v = new JSONVisitor();
    const firma = System.obiekty[req.body.nazwa];
    return firma.accept(v);
}

module.exports = {
    serializeJSON
}