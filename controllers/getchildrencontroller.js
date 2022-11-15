const System = require("../data/system");

const getChildren = (req,res) => {
    if(!req.body.holdingname) return "Nie podano nazwy holdingu";
    if(!System.holdingNames.has(req.body.holdingname)) return "Nie ma takiego holdingu";
    return System.obiekty[req.body.holdingname].getChildren().map(c => c.getNazwa());
}

module.exports = {
    getChildren
}