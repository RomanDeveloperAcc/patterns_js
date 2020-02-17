//Щоб створювався лише 1 інстенс класу

class DataBase{
    constructor(data){
        if (DataBase.exists){
            return DataBase.instanse;
        }

        DataBase.instanse = this;
        DataBase.exists = true;
        this.data = data;
    }
    getData(){
        return this.data;
    }
}

const mongo = new DataBase('MongoDB');

console.log(mongo.getData());

const postgresql = new DataBase('PostgreSQL');

console.log(postgresql.getData());