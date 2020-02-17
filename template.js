//Щоб реалізувати 'скелет' майбутнього алгоритму, а дочірні класи реалізують функціонал

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    responsibilities(){}

    work(){
        return `${this.name} do ${this.responsibilities()}`;
    }

    getPaid(){
        return `${this.name} has a salary: ${this.salary}`;
    }
}

class Developer extends Employee{
    constructor(name, salary){
        super(name, salary);
    }

    responsibilities(){
        return 'Coding';
    }
}

class Tester extends Employee{
    constructor(name, salary){
        super(name, salary);
    }

    responsibilities(){
        return 'Testing';
    }
}

const developer = new Developer('John', 1000);

console.log(developer.getPaid());
console.log(developer.work());

const tester = new Tester('Rick', 500);

console.log(tester.getPaid());
console.log(tester.work())