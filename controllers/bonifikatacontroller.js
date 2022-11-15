const System = require("../data/system");

const getBonifikata = (req,res) => {
    if(!req.body.nazwa) return "Nie podano nazwy";
    if(!(req.body.nazwa in System.obiekty)) return "Nie ma takiej firmy/holdingu";
    return System.obiekty[req.body.nazwa].getBonifikata();
}

module.exports = {
    getBonifikata
};