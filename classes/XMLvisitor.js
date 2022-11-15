const Visitor = require("./visitor");

class XMLvisitor extends Visitor {
    constructor(){
        super();
    }
    visit(firma){
        return `
        <firma>
            <nazwa>
                ${firma.nazwa}
            </nazwa>
            <adres>
                ${firma.adres}
            <adres/>
            <nip>
                ${firma.NIP}
            </nip>
            <przychody>
                ${firma.przychody}
            </przychody>
            <dochody>
                ${firma.dochody}
            </dochody>
            <kontrahents>
                ${firma.getKontrahents().map(k => `<kontrahent>${k}</kontrahent>`).join("\n")}
            </kontrahents>
        </firma>
        `;
    }
}

module.exports = XMLvisitor;