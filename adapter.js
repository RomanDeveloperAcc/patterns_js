//Щоб робити нове не використовуючи старе

class OldCalc{
    operations(firstTerm, secondTerm, operation){
        switch(operation){
            case 'add':
                return firstTerm + secondTerm;
            case 'sub':
                return firstTerm - secondTerm;
            default:
                return NaN;
        }
    }
}

class NewCalc{
    add(firstTerm, secondTerm){
        return firstTerm + secondTerm;
    }

    sub(firstTerm, secondTerm){
        return firstTerm - secondTerm;
    }
}

class CalcAdapter{
    constructor(){
        this.calc = new NewCalc();
    }

    operations(firstTerm, secondTerm, operation){
        switch(operation){
            case 'add':
                return this.calc.add(firstTerm, secondTerm);
            case 'sub':
                return this.calc.sub(firstTerm, secondTerm);
            default:
                return NaN;
        }
    }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10,5,'add'));

const newCalc = new NewCalc();
console.log(newCalc.add(10,5));

const adapter = new CalcAdapter();
console.log(adapter.operations(25,10,'sub'));