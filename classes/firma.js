const Component = require("./component");

class Firma extends Component {
    constructor(nazwa,adres,NIP,przychody,dochody){
        super();
        this.nazwa = nazwa;
        this.adres = adres;
        this.NIP = NIP;
        this.przychody = przychody;
        this.dochody = dochody;
        this.kontrahents = [];
    }
    addKontrahent(kontrahent){
        this.kontrahents.push(kontrahent);
    }
    getKontrahents(){
        return this.kontrahents.slice();
    }
    timeify(d){
        if(d>9) return d;
        return "0"+d;
    }
    kmp(text,pattern){
        if(pattern == "") return true;
        for(let i=0,j=0;i<text.length;i++){
            if(text[i]==pattern[j]){
                j++;
                if(j==pattern.length) return true;
            }
            else{
                j = 0;
            }
        }
        return false;
    }
    getBonifikata(){
        let stringNIP = this.NIP.toString();
        let digits = stringNIP.split("").map(a => +a);
        let total = 0;
        total += 50*(digits.find(x => x%2==0)==undefined);
        let half = Math.ceil(digits.length/2);
        let div3 = 0;
        for(let d of digits) div3 += d%3==0;
        total += 100*(div3>=half);
        let today = new Date();
        let mmdd = `${this.timeify(today.getMonth()+1)}${this.timeify(today.getDate())}`;
        total += 15*this.kmp(stringNIP,mmdd);
        total += 550*(digits.reduce((a,b)=>a+b,0)==3*(today.getMonth()+today.getDate()+1));
        let sumAbs = 0;
        for(let i=1;i<digits.length;i++) sumAbs += Math.abs(digits[i]-digits[i-1]);
        total += 200*(sumAbs>50);
        return total;
    }
    accept(visitor){
        return visitor.visit(this);
    }
}

module.exports = Firma;