const System = require("../data/system");

const getholdings = (req,res) => {
    const ret = [];
    for(let n of System.holdingNames){
        ret.push(n);
    }
    return ret;
}

module.exports = {
    getholdings
}