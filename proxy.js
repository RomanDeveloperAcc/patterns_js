//Щоб ставити пастки, не дає доступ в випадку зайвих запитів

function networkFetch(url){
    return `${url} - server response`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, context, args){
        const url = args[0];
        if(cache.has(url)){
            return `${url} - cache response`;
        }
        else{
            cache.add(url);
            return Reflect.apply(target, context, args);
        }
    }
});

console.log(proxiedFetch('http://google.com'));     //server
console.log(proxiedFetch('http://google.com'));     //cache