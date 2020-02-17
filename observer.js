//Щоб формувати OneToMany dependencies

class Subject{
    constructor(){
        this.observers = [];
    }

    subscribe(obserber){
        this.observers.push(obserber);
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    fire(action){
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer{
    constructor(state = 1){
        this.state = state;
        this.initialState = state;
    }

    update(action){
        switch(action.type){
            case 'INCREMENT':
                this.state = ++this.state;
                break;
            case 'DECREMENT':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state += action.payload;
                break;
            default: 
            this.state = this.initialState;
        }
    }
}

const stream$ = new Subject();

const firstObserver = new Observer();
const secondObserver = new Observer(47);

stream$.subscribe(firstObserver);
stream$.subscribe(secondObserver);

stream$.fire({type: 'INCREMENT'});
stream$.fire({type: 'INCREMENT'});
stream$.fire({type: 'DECREMENT'});
stream$.fire({type: 'ADD', payload: 10});

console.log(firstObserver.state);
console.log(secondObserver.state);