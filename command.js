//Щоб створити абстрактну оболонку, для керунку оригінальним об'єктом

class MyMath{
    constructor(initialValue = 0){
        this.number = initialValue;
    }

    square(){
        return this.number ** 2;
    }

    cube(){
        return this.number ** 3;
    }
}

class Command{
    constructor(target){
        this.target = target;
        this.commandsExecuted = [];
    }

    execute(command){
        this.commandsExecuted.push(command);
        return this.target[command]();
    }
}

const firstVar = new Command(new MyMath(2));

console.log(firstVar.execute('square'));
console.log(firstVar.execute('cube'));

console.log(firstVar.commandsExecuted);