//Щоб створити більш простий і унікальний інтерфейс для взаємодій

class Complaints{
    constructor(){
        this.complaints = [];
    }

    reply(complaint){}

    add(complaint){
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints{
    reply({id, customer, details}){
        return `Product ${id}: ${customer}. (${details})`
    }
}

class ServiceComplaints extends Complaints{
    reply({id, customer, details}){
        return `Service ${id}: ${customer}. (${details})`
    }
}

class CompaintRegistry{
    register(customer, type, details){
        const id = Date.now();
        let complaint;

        if(type === 'service'){
            complaint = new ServiceComplaints();
        }
        else{
            complaint = new ProductComplaints();
        }

        return complaint.add({id, customer, details});
    }
}

const registry = new CompaintRegistry();

console.log(registry.register('John', 'service', 'unavaible'));
console.log(registry.register('Bob', 'product', 'bad taste'));