//Щоб додати новий функціонал для вже існуючих класів

class Server{
    constructor(ip, port){
        this.ip = ip;
        this.port = port;
    }

    get url(){
        return `http://${this.ip}:${this.port}`;
    }
}

function aws(server){
    server.isAWS = true;
    server.awsInfo = function(){
        return server.url;
    }

    return server;
}

function azure(server){
    server.isAzure = true;
    server.port += 500;

    return server;
}

const firstServer = aws(new Server('12.34.56.78', 8080));
console.log(firstServer.isAWS);
console.log(firstServer.awsInfo());

const secondServer = azure(new Server('98.76.54.32.10', 4040));
console.log(secondServer.isAzure);
console.log(secondServer.url);