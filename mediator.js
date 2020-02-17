//Щоб робити комунікацію між різними об'єктами різних типів

class User{
    constructor(name){
        this.name = name;
        this.room = null;
    }

    send(message, to){
        this.room.send(message, this, to);
    }

    receive(message, from){
        console.log(`${from.name} => ${this.name}:${message}`)
    }
}

class ChatRoom{
    constructor(){
        this.users = [];
    }

    register(user){
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to){
        if(to){
            to.receive(message, from);
        }
        else{
            Object.keys(this.users).forEach(key => {
                if(this.users[key] != from){
                    this.users[key].receive(message, from);
                }
            });
        }
    }
}

const firstUser = new User('Alice');
const secondUser = new User('Bib');
const thirdUser = new User('Igor');

const room = new ChatRoom();

room.register(firstUser);
room.register(secondUser);
room.register(thirdUser);

firstUser.send('Hello', secondUser);
secondUser.send('World', firstUser);

thirdUser.send('Bonjour');