//Щоб послідовно у одного і того ж об'єкта викликати певні дії

class MySum{
    constructor(initialValue = 47){
        this.sum = initialValue;
    }

    add(value){
        this.sum += value;
        return this;
    }
}

const firstSum = new MySum();
console.log(firstSum.add(3).add(10).add(15));