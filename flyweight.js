//Щоб ефективно передавати і опрацьовувати дані

class Car{
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
}

class CarFactory{
    constructor(){
        this.cars = [];
    }

    create(model, price){
        const candidate = this.getCar(model);
        if(candidate){
            return candidate;
        }
        
        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model){
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const audiA7 = factory.create('audi', 100000);
const mercedes = factory.create('mercedes', 150000);
const audiA3 = factory.create('audi', 50000);
console.log(audiA7);
console.log(mercedes);
console.log(audiA3);        //кешує